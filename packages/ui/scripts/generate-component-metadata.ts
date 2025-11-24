// @ts-nocheck
import * as fs from 'fs';
import * as path from 'path';
import * as ts from 'typescript';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface PropMetadata {
  name: string;
  type: string;
  required: boolean;
  default?: string;
  description?: string;
  enum?: string[];
}

interface ExampleMetadata {
  title: string;
  code: string;
  description?: string;
}

interface ComponentMetadata {
  name: string;
  displayName: string;
  path: string;
  import: string;
  description: string;
  props: PropMetadata[];
  examples: ExampleMetadata[];
  category?: string;
}

interface ComponentRegistry {
  version: string;
  generatedAt: string;
  components: Record<string, ComponentMetadata>;
  categories: string[];
}

class ComponentMetadataGenerator {
  private componentsDir: string;
  private outputDir: string;
  private docsDir: string;
  private registry: ComponentRegistry;
  private packageVersion: string;

  constructor() {
    this.componentsDir = path.join(__dirname, '../src/components');
    this.outputDir = path.join(__dirname, '../dist');
    this.docsDir = path.join(__dirname, '../docs/api');
    
    // Read package version
    const packageJson = JSON.parse(
      fs.readFileSync(path.join(__dirname, '../package.json'), 'utf-8')
    );
    this.packageVersion = packageJson.version;

    this.registry = {
      version: this.packageVersion,
      generatedAt: new Date().toISOString(),
      components: {},
      categories: [],
    };
  }

  /**
   * Extract JSDoc comment text
   */
  private extractJSDocComment(node: ts.Node): string {
    const sourceFile = node.getSourceFile();
    const fullText = sourceFile.getFullText();
    const ranges = ts.getLeadingCommentRanges(fullText, node.getFullStart());
    
    if (!ranges || ranges.length === 0) {
      return '';
    }

    const lastComment = ranges[ranges.length - 1];
    if (!lastComment) return '';
    
    const commentText = fullText.substring(lastComment.pos, lastComment.end);
    
    // Remove /** and */ and clean up
    return commentText
      .replace(/^\/\*\*\s*/, '')
      .replace(/\s*\*\/$/, '')
      .split('\n')
      .map(line => line.replace(/^\s*\*\s?/, ''))
      .join('\n')
      .trim();
  }

  /**
   * Extract @example tags from JSDoc
   */
  private extractExamples(jsDoc: string): ExampleMetadata[] {
    const examples: ExampleMetadata[] = [];
    const exampleRegex = /@example\s*([\s\S]*?)(?=@example|$)/g;
    
    let match;
    let index = 0;
    while ((match = exampleRegex.exec(jsDoc)) !== null) {
      const exampleText = match[1]?.trim();
      if (exampleText) {
        // Extract code blocks
        const codeBlockRegex = /```(?:tsx?|jsx?)?\s*([\s\S]*?)```/g;
        const codeMatch = codeBlockRegex.exec(exampleText);
        
        if (codeMatch && codeMatch[1]) {
          examples.push({
            title: `Example ${index + 1}`,
            code: codeMatch[1].trim(),
          });
          index++;
        }
      }
    }
    
    return examples;
  }

  /**
   * Extract description from JSDoc (before first @ tag)
   */
  private extractDescription(jsDoc: string): string {
    const descMatch = jsDoc.match(/^([\s\S]*?)(?=@|$)/);
    return descMatch ? descMatch[1].trim() : '';
  }

  /**
   * Extract @default tag from JSDoc
   */
  private extractDefault(jsDoc: string): string | undefined {
    const defaultMatch = jsDoc.match(/@default\s+(.+)/);
    return defaultMatch ? defaultMatch[1].trim().replace(/["']/g, '') : undefined;
  }

  /**
   * Parse TypeScript interface to extract props
   */
  private parseInterface(
    interfaceDecl: ts.InterfaceDeclaration,
    sourceFile: ts.SourceFile
  ): PropMetadata[] {
    const props: PropMetadata[] = [];

    interfaceDecl.members.forEach(member => {
      if (ts.isPropertySignature(member) && member.name) {
        const propName = member.name.getText(sourceFile);
        const jsDoc = this.extractJSDocComment(member);
        const description = this.extractDescription(jsDoc);
        const defaultValue = this.extractDefault(jsDoc);
        
        let propType = 'any';
        let enumValues: string[] | undefined;

        if (member.type) {
          propType = member.type.getText(sourceFile);
          
          // Extract enum values from union types
          if (ts.isUnionTypeNode(member.type)) {
            enumValues = member.type.types
              .filter(t => ts.isLiteralTypeNode(t))
              .map(t => t.getText(sourceFile).replace(/["']/g, ''));
          }
        }

        const isRequired = !member.questionToken;

        props.push({
          name: propName,
          type: propType,
          required: isRequired,
          default: defaultValue,
          description,
          enum: enumValues,
        });
      }
    });

    return props;
  }

  /**
   * Determine component category from path
   */
  private getCategory(filePath: string): string {
    if (filePath.includes('/forms/')) return 'Forms';
    if (filePath.includes('/charts/')) return 'Charts';
    if (filePath.includes('/Layout') || filePath.includes('/Grid') || filePath.includes('/Stack') || filePath.includes('/Flex') || filePath.includes('/Box')) return 'Layout';
    return 'Components';
  }

  /**
   * Parse a component file
   */
  private parseComponentFile(filePath: string): ComponentMetadata | null {
    const sourceCode = fs.readFileSync(filePath, 'utf-8');
    const sourceFile = ts.createSourceFile(
      filePath,
      sourceCode,
      ts.ScriptTarget.Latest,
      true
    );

    let componentMetadata: ComponentMetadata | null = null;
    let propsInterface: PropMetadata[] = [];
    let componentName = '';
    let description = '';
    let examples: ExampleMetadata[] = [];

    const visit = (node: ts.Node) => {
      // Find Props interface
      if (ts.isInterfaceDeclaration(node)) {
        const interfaceName = node.name.text;
        if (interfaceName.endsWith('Props')) {
          propsInterface = this.parseInterface(node, sourceFile);
          componentName = interfaceName.replace('Props', '');
        }
      }

      // Find component export
      if (ts.isVariableStatement(node)) {
        node.declarationList.declarations.forEach(decl => {
          if (ts.isVariableDeclaration(decl) && decl.name) {
            const name = decl.name.getText(sourceFile);
            const jsDoc = this.extractJSDocComment(node);
            
            if (jsDoc && (name === componentName || componentName === '')) {
              description = this.extractDescription(jsDoc);
              examples = this.extractExamples(jsDoc);
              componentName = componentName || name;
            }
          }
        });
      }

      ts.forEachChild(node, visit);
    };

    visit(sourceFile);

    if (componentName && propsInterface.length > 0) {
      const category = this.getCategory(filePath);
      
      componentMetadata = {
        name: componentName,
        displayName: componentName,
        path: '@intelation/ui',
        import: `import { ${componentName} } from '@intelation/ui';`,
        description: description || `${componentName} component`,
        props: propsInterface,
        examples: examples,
        category,
      };
    }

    return componentMetadata;
  }

  /**
   * Recursively find all component files
   */
  private findComponentFiles(dir: string): string[] {
    const files: string[] = [];
    
    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      
      if (item.isDirectory()) {
        files.push(...this.findComponentFiles(fullPath));
      } else if (item.isFile() && item.name.endsWith('.tsx') && !item.name.includes('.test.') && !item.name.includes('.stories.')) {
        // Only main component files (not test or story files)
        const dirName = path.basename(path.dirname(fullPath));
        if (item.name === `${dirName}.tsx`) {
          files.push(fullPath);
        }
      }
    }
    
    return files;
  }

  /**
   * Generate markdown documentation for a component
   */
  private generateMarkdown(metadata: ComponentMetadata): string {
    const lines: string[] = [];
    
    lines.push(`# ${metadata.displayName}`);
    lines.push('');
    lines.push(`**Category:** ${metadata.category || 'Components'}`);
    lines.push('');
    lines.push('## Description');
    lines.push('');
    lines.push(metadata.description);
    lines.push('');
    
    // Import
    lines.push('## Import');
    lines.push('');
    lines.push('```typescript');
    lines.push(metadata.import);
    lines.push('```');
    lines.push('');
    
    // Props
    lines.push('## Props');
    lines.push('');
    lines.push('| Prop | Type | Required | Default | Description |');
    lines.push('|------|------|----------|---------|-------------|');
    
    metadata.props.forEach(prop => {
      const type = prop.enum ? prop.enum.map(v => `"${v}"`).join(' \\| ') : prop.type;
      const required = prop.required ? '✅' : '❌';
      const defaultVal = prop.default ? `\`${prop.default}\`` : '-';
      const desc = prop.description || '-';
      
      lines.push(`| \`${prop.name}\` | ${type} | ${required} | ${defaultVal} | ${desc} |`);
    });
    
    lines.push('');
    
    // Examples
    if (metadata.examples.length > 0) {
      lines.push('## Examples');
      lines.push('');
      
      metadata.examples.forEach((example, index) => {
        lines.push(`### ${example.title}`);
        if (example.description) {
          lines.push('');
          lines.push(example.description);
        }
        lines.push('');
        lines.push('```tsx');
        lines.push(example.code);
        lines.push('```');
        lines.push('');
      });
    }
    
    // Variants (if applicable)
    const variantProp = metadata.props.find(p => p.name === 'variant' && p.enum);
    const sizeProp = metadata.props.find(p => p.name === 'size' && p.enum);
    const colorSchemeProp = metadata.props.find(p => p.name === 'colorScheme' && p.enum);
    
    if (variantProp || sizeProp || colorSchemeProp) {
      lines.push('## Variants');
      lines.push('');
      
      if (variantProp && variantProp.enum) {
        lines.push('### Variants');
        lines.push('');
        variantProp.enum.forEach(variant => {
          lines.push(`- \`${variant}\``);
        });
        lines.push('');
      }
      
      if (sizeProp && sizeProp.enum) {
        lines.push('### Sizes');
        lines.push('');
        sizeProp.enum.forEach(size => {
          lines.push(`- \`${size}\``);
        });
        lines.push('');
      }
      
      if (colorSchemeProp && colorSchemeProp.enum) {
        lines.push('### Color Schemes');
        lines.push('');
        colorSchemeProp.enum.forEach(scheme => {
          lines.push(`- \`${scheme}\``);
        });
        lines.push('');
      }
    }
    
    // Accessibility
    lines.push('## Accessibility');
    lines.push('');
    lines.push('This component follows WAI-ARIA best practices:');
    lines.push('');
    lines.push('- Semantic HTML elements');
    lines.push('- Keyboard navigation support');
    lines.push('- ARIA attributes for screen readers');
    lines.push('- Focus management');
    lines.push('');
    
    // Usage with TypeScript
    lines.push('## TypeScript');
    lines.push('');
    lines.push(`This component is fully typed. Import the props type:`);
    lines.push('');
    lines.push('```typescript');
    lines.push(`import { ${metadata.name}, ${metadata.name}Props } from '@intelation/ui';`);
    lines.push('```');
    lines.push('');
    
    return lines.join('\n');
  }

  /**
   * Generate index markdown
   */
  private generateIndexMarkdown(): string {
    const lines: string[] = [];
    
    lines.push('# Component API Reference');
    lines.push('');
    lines.push(`**Version:** ${this.packageVersion}`);
    lines.push(`**Generated:** ${new Date().toISOString()}`);
    lines.push('');
    lines.push('This documentation is auto-generated from TypeScript source files.');
    lines.push('');
    
    // Group by category
    const categories = new Set<string>();
    Object.values(this.registry.components).forEach(c => {
      if (c.category) categories.add(c.category);
    });
    
    const sortedCategories = Array.from(categories).sort();
    
    lines.push('## Components by Category');
    lines.push('');
    
    sortedCategories.forEach(category => {
      lines.push(`### ${category}`);
      lines.push('');
      
      const componentsInCategory = Object.values(this.registry.components)
        .filter(c => c.category === category)
        .sort((a, b) => a.name.localeCompare(b.name));
      
      componentsInCategory.forEach(component => {
        lines.push(`- [${component.displayName}](./${component.name}.md) - ${component.description}`);
      });
      
      lines.push('');
    });
    
    // Quick reference
    lines.push('## Quick Reference');
    lines.push('');
    lines.push('### Import All Components');
    lines.push('');
    lines.push('```typescript');
    lines.push("import {");
    const componentNames = Object.keys(this.registry.components).sort();
    componentNames.forEach((name, index) => {
      const comma = index < componentNames.length - 1 ? ',' : '';
      lines.push(`  ${name}${comma}`);
    });
    lines.push("} from '@intelation/ui';");
    lines.push('```');
    lines.push('');
    
    // Component count
    lines.push('## Statistics');
    lines.push('');
    lines.push(`- **Total Components:** ${componentNames.length}`);
    lines.push(`- **Categories:** ${sortedCategories.length}`);
    lines.push('');
    
    // For AI Agents section
    lines.push('## For AI Agents');
    lines.push('');
    lines.push('Machine-readable component metadata is available in JSON format:');
    lines.push('');
    lines.push('```typescript');
    lines.push("import components from '@intelation/ui/components.json';");
    lines.push('');
    lines.push('// Access component metadata');
    lines.push('const buttonMetadata = components.components.Button;');
    lines.push('console.log(buttonMetadata.props);');
    lines.push('console.log(buttonMetadata.examples);');
    lines.push('```');
    lines.push('');
    lines.push('The JSON schema includes:');
    lines.push('- Component descriptions');
    lines.push('- All props with types, defaults, and descriptions');
    lines.push('- Enum values for variant props');
    lines.push('- Code examples');
    lines.push('- Import statements');
    lines.push('');
    
    return lines.join('\n');
  }

  /**
   * Main generation function
   */
  public async generate(): Promise<void> {
    console.log('🔍 Scanning components...');
    
    const componentFiles = this.findComponentFiles(this.componentsDir);
    console.log(`Found ${componentFiles.length} component files`);
    
    // Parse each component
    for (const file of componentFiles) {
      try {
        const metadata = this.parseComponentFile(file);
        if (metadata) {
          this.registry.components[metadata.name] = metadata;
          console.log(`✓ Parsed ${metadata.name}`);
        }
      } catch (error) {
        console.error(`✗ Error parsing ${file}:`, error);
      }
    }
    
    // Extract unique categories
    this.registry.categories = Array.from(
      new Set(Object.values(this.registry.components).map(c => c.category || 'Components'))
    ).sort();
    
    console.log(`\n📊 Processed ${Object.keys(this.registry.components).length} components`);
    
    // Ensure output directories exist
    if (!fs.existsSync(this.outputDir)) {
      fs.mkdirSync(this.outputDir, { recursive: true });
    }
    if (!fs.existsSync(this.docsDir)) {
      fs.mkdirSync(this.docsDir, { recursive: true });
    }
    
    // Write JSON metadata
    const jsonPath = path.join(this.outputDir, 'components.json');
    fs.writeFileSync(jsonPath, JSON.stringify(this.registry, null, 2));
    console.log(`\n✓ Generated ${jsonPath}`);
    
    // Generate markdown docs
    console.log('\n📝 Generating markdown documentation...');
    
    for (const [name, metadata] of Object.entries(this.registry.components)) {
      const markdown = this.generateMarkdown(metadata);
      const mdPath = path.join(this.docsDir, `${name}.md`);
      fs.writeFileSync(mdPath, markdown);
      console.log(`✓ Generated ${name}.md`);
    }
    
    // Generate index
    const indexMarkdown = this.generateIndexMarkdown();
    const indexPath = path.join(this.docsDir, 'index.md');
    fs.writeFileSync(indexPath, indexMarkdown);
    console.log(`✓ Generated index.md`);
    
    console.log('\n✅ Component metadata generation complete!');
    console.log(`\n📦 Output:`);
    console.log(`   - JSON: dist/components.json`);
    console.log(`   - Docs: docs/api/`);
  }
}

// Run the generator
const generator = new ComponentMetadataGenerator();
generator.generate().catch(console.error);
