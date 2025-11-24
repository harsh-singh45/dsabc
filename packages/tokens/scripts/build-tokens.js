const fs = require('fs');
const path = require('path');

// Token transformer that generates multiple output formats
class TokenTransformer {
  constructor() {
    this.baseTokens = {};
    this.semanticTokens = {};
    this.resolvedTokens = {};
  }

  // Load and merge token files
  loadTokens() {
    const baseTokensPath = path.join(__dirname, '../src/base.json');
    const semanticTokensPath = path.join(__dirname, '../src/semantic.json');
    
    this.baseTokens = JSON.parse(fs.readFileSync(baseTokensPath, 'utf8'));
    this.semanticTokens = JSON.parse(fs.readFileSync(semanticTokensPath, 'utf8'));
    
    // Resolve semantic tokens against base tokens
    const resolvedSemantic = this.resolveTokens(this.semanticTokens, this.baseTokens);
    
    // Deep merge base tokens with resolved semantic tokens
    this.resolvedTokens = this.deepMerge(this.baseTokens, resolvedSemantic);
  }

  // Deep merge objects
  deepMerge(target, source) {
    const result = { ...target };
    
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
          result[key] = this.deepMerge(result[key] || {}, source[key]);
        } else {
          result[key] = source[key];
        }
      }
    }
    
    return result;
  }

  // Resolve token references like {color.brand.500}
  resolveTokens(tokens, context = null) {
    if (!context) {
      context = { ...this.baseTokens, ...this.semanticTokens };
    }
    
    const resolved = {};
    
    for (const [key, value] of Object.entries(tokens)) {
      if (typeof value === 'object' && value !== null) {
        resolved[key] = this.resolveTokens(value, context);
      } else if (typeof value === 'string' && value.startsWith('{') && value.endsWith('}')) {
        // Resolve reference
        const path = value.slice(1, -1).split('.');
        const resolvedValue = this.getNestedValue(context, path);
        resolved[key] = resolvedValue !== undefined ? resolvedValue : value;
      } else {
        resolved[key] = value;
      }
    }
    
    return resolved;
  }

  // Get nested value from object path
  getNestedValue(obj, path) {
    return path.reduce((current, key) => current?.[key], obj);
  }

  // Generate CSS custom properties
  generateCSS() {
    const cssVars = [];
    
    const flatten = (obj, prefix = '') => {
      for (const [key, value] of Object.entries(obj)) {
        // Replace dots with hyphens for valid CSS custom property names
        const sanitizedKey = key.replace(/\./g, '-');
        const cssKey = prefix ? `${prefix}-${sanitizedKey}` : sanitizedKey;
        
        if (typeof value === 'object' && value !== null) {
          // Special handling for font family arrays
          if (Array.isArray(value) && cssKey.includes('fontFamily')) {
            // Create the array variables
            value.forEach((font, index) => {
              cssVars.push(`  --${cssKey}-${index}: ${font};`);
            });
            // Create the consolidated variable
            cssVars.push(`  --${cssKey}: ${value.join(', ')};`);
          } else if (Array.isArray(value)) {
            // Handle other arrays normally
            value.forEach((item, index) => {
              cssVars.push(`  --${cssKey}-${index}: ${item};`);
            });
          } else {
            flatten(value, cssKey);
          }
        } else {
          cssVars.push(`  --${cssKey}: ${value};`);
        }
      }
    };
    
    flatten(this.resolvedTokens);
    
    return `:root {\n${cssVars.join('\n')}\n}`;
  }

  // Generate SCSS variables
  generateSCSS() {
    const scssVars = [];
    
    const flatten = (obj, prefix = '') => {
      for (const [key, value] of Object.entries(obj)) {
        const scssKey = prefix ? `${prefix}-${key}` : key;
        
        if (typeof value === 'object' && value !== null) {
          flatten(value, scssKey);
        } else {
          scssVars.push(`$${scssKey}: ${value};`);
        }
      }
    };
    
    flatten(this.resolvedTokens);
    
    return scssVars.join('\n');
  }

  // Generate JavaScript ES module
  generateJS() {
    return `// Design tokens for Intelation Design System
// Auto-generated - do not edit manually

export const tokens = ${JSON.stringify(this.resolvedTokens, null, 2)};

export default tokens;`;
  }

  // Generate TypeScript module
  generateTS() {
    return `// Design tokens for Intelation Design System
// Auto-generated - do not edit manually

export const tokens = ${JSON.stringify(this.resolvedTokens, null, 2)} as const;

export type Tokens = typeof tokens;

// Utility types for better TypeScript support
export type ColorTokens = keyof typeof tokens.color;
export type SpacingTokens = keyof typeof tokens.spacing;
export type FontSizeTokens = keyof typeof tokens.fontSize;
export type BorderRadiusTokens = keyof typeof tokens.borderRadius;

export default tokens;`;
  }

  // Generate Tailwind CSS config
  generateTailwindConfig() {
    const config = {
      theme: {
        extend: {
          colors: this.flattenColors(this.resolvedTokens.color),
          spacing: this.resolvedTokens.spacing,
          fontSize: this.resolvedTokens.fontSize,
          fontFamily: {
            sans: this.resolvedTokens.fontFamily.sans,
            serif: this.resolvedTokens.fontFamily.serif,
            mono: this.resolvedTokens.fontFamily.mono,
            display: this.resolvedTokens.fontFamily.display
          },
          fontWeight: this.resolvedTokens.fontWeight,
          lineHeight: this.resolvedTokens.lineHeight,
          borderRadius: this.resolvedTokens.borderRadius,
          boxShadow: this.resolvedTokens.boxShadow,
          screens: this.resolvedTokens.breakpoints
        }
      }
    };

    return `/** @type {import('tailwindcss').Config} */
module.exports = ${JSON.stringify(config, null, 2)};`;
  }

  // Flatten color object for Tailwind
  flattenColors(colors, prefix = '') {
    const flattened = {};
    
    for (const [key, value] of Object.entries(colors)) {
      const colorKey = prefix ? `${prefix}-${key}` : key;
      
      if (typeof value === 'object' && value !== null) {
        Object.assign(flattened, this.flattenColors(value, colorKey));
      } else {
        flattened[colorKey] = value;
      }
    }
    
    return flattened;
  }

  // Generate typography CSS
  generateTypographyCSS() {
    const lines = [];
    
    lines.push('/* Typography Utilities */');
    lines.push('/* Auto-generated - do not edit manually */');
    lines.push('');
    
    // Font family utilities
    if (this.resolvedTokens.fontFamily) {
      lines.push('/* Font Families */');
      Object.entries(this.resolvedTokens.fontFamily).forEach(([key, value]) => {
        const fontFamily = Array.isArray(value) ? value.join(', ') : value;
        lines.push(`.font-${key} { font-family: ${fontFamily}; }`);
      });
      lines.push('');
    }
    
    // Font size utilities
    if (this.resolvedTokens.fontSize) {
      lines.push('/* Font Sizes */');
      Object.entries(this.resolvedTokens.fontSize).forEach(([key, value]) => {
        const cssKey = key.replace(/\./g, '_');
        lines.push(`.text-${cssKey} { font-size: ${value}; }`);
      });
      lines.push('');
    }
    
    // Font weight utilities
    if (this.resolvedTokens.fontWeight) {
      lines.push('/* Font Weights */');
      Object.entries(this.resolvedTokens.fontWeight).forEach(([key, value]) => {
        lines.push(`.font-${key} { font-weight: ${value}; }`);
      });
      lines.push('');
    }
    
    // Line height utilities
    if (this.resolvedTokens.lineHeight) {
      lines.push('/* Line Heights */');
      Object.entries(this.resolvedTokens.lineHeight).forEach(([key, value]) => {
        lines.push(`.leading-${key} { line-height: ${value}; }`);
      });
      lines.push('');
    }
    
    // Letter spacing utilities
    if (this.resolvedTokens.letterSpacing) {
      lines.push('/* Letter Spacing */');
      Object.entries(this.resolvedTokens.letterSpacing).forEach(([key, value]) => {
        lines.push(`.tracking-${key} { letter-spacing: ${value}; }`);
      });
      lines.push('');
    }
    
    // Typography variant classes
    lines.push('/* Typography Variants */');
    lines.push('/* Predefined combinations for consistent text styling */');
    lines.push('');
    
    const baseFont = Array.isArray(this.resolvedTokens.fontFamily?.sans) 
      ? this.resolvedTokens.fontFamily.sans.join(', ')
      : 'Manrope, sans-serif';
    
    const variants = {
      // Display styles for large headings
      'display-2xl': { 
        fontSize: this.resolvedTokens.fontSize['7xl'], 
        fontWeight: this.resolvedTokens.fontWeight.bold, 
        lineHeight: '90px', 
        letterSpacing: '-0.02em' 
      },
      'display-xl': { 
        fontSize: this.resolvedTokens.fontSize['6xl'], 
        fontWeight: this.resolvedTokens.fontWeight.bold, 
        lineHeight: '72px', 
        letterSpacing: '-0.02em' 
      },
      'display-lg': { 
        fontSize: this.resolvedTokens.fontSize['5xl'], 
        fontWeight: this.resolvedTokens.fontWeight.semibold, 
        lineHeight: '60px', 
        letterSpacing: '-0.02em' 
      },
      
      // Heading styles
      'heading-xl': { 
        fontSize: this.resolvedTokens.fontSize['4xl'], 
        fontWeight: this.resolvedTokens.fontWeight.semibold, 
        lineHeight: '44px', 
        letterSpacing: '-0.01em' 
      },
      'heading-lg': { 
        fontSize: this.resolvedTokens.fontSize['3xl'], 
        fontWeight: this.resolvedTokens.fontWeight.semibold, 
        lineHeight: '38px' 
      },
      'heading-md': { 
        fontSize: this.resolvedTokens.fontSize['2xl'], 
        fontWeight: this.resolvedTokens.fontWeight.semibold, 
        lineHeight: '32px' 
      },
      'heading-sm': { 
        fontSize: this.resolvedTokens.fontSize.xl, 
        fontWeight: this.resolvedTokens.fontWeight.semibold, 
        lineHeight: '28px' 
      },
      'heading-xs': { 
        fontSize: this.resolvedTokens.fontSize.lg, 
        fontWeight: this.resolvedTokens.fontWeight.semibold, 
        lineHeight: '28px' 
      },
      
      // Body text styles
      'body-xl': { 
        fontSize: this.resolvedTokens.fontSize.xl, 
        fontWeight: this.resolvedTokens.fontWeight.normal, 
        lineHeight: '30px' 
      },
      'body-lg': { 
        fontSize: this.resolvedTokens.fontSize.lg, 
        fontWeight: this.resolvedTokens.fontWeight.normal, 
        lineHeight: '28px' 
      },
      'body-md': { 
        fontSize: this.resolvedTokens.fontSize.base, 
        fontWeight: this.resolvedTokens.fontWeight.normal, 
        lineHeight: '24px' 
      },
      'body-sm': { 
        fontSize: this.resolvedTokens.fontSize.sm, 
        fontWeight: this.resolvedTokens.fontWeight.normal, 
        lineHeight: '20px' 
      },
      'body-xs': { 
        fontSize: this.resolvedTokens.fontSize.xs, 
        fontWeight: this.resolvedTokens.fontWeight.normal, 
        lineHeight: '18px' 
      },
      
      // Code and monospace
      'code-lg': { 
        fontSize: this.resolvedTokens.fontSize.base, 
        fontWeight: this.resolvedTokens.fontWeight.normal, 
        lineHeight: '24px',
        fontFamily: Array.isArray(this.resolvedTokens.fontFamily?.mono) 
          ? this.resolvedTokens.fontFamily.mono.join(', ')
          : 'Consolas, Monaco, monospace'
      },
      'code-md': { 
        fontSize: this.resolvedTokens.fontSize.sm, 
        fontWeight: this.resolvedTokens.fontWeight.normal, 
        lineHeight: '20px',
        fontFamily: Array.isArray(this.resolvedTokens.fontFamily?.mono) 
          ? this.resolvedTokens.fontFamily.mono.join(', ')
          : 'Consolas, Monaco, monospace'
      },
      'code-sm': { 
        fontSize: this.resolvedTokens.fontSize.xs, 
        fontWeight: this.resolvedTokens.fontWeight.normal, 
        lineHeight: '18px',
        fontFamily: Array.isArray(this.resolvedTokens.fontFamily?.mono) 
          ? this.resolvedTokens.fontFamily.mono.join(', ')
          : 'Consolas, Monaco, monospace'
      },
      
      // Labels and captions
      'label-lg': { 
        fontSize: this.resolvedTokens.fontSize.base, 
        fontWeight: this.resolvedTokens.fontWeight.medium, 
        lineHeight: '24px' 
      },
      'label-md': { 
        fontSize: this.resolvedTokens.fontSize.sm, 
        fontWeight: this.resolvedTokens.fontWeight.medium, 
        lineHeight: '20px' 
      },
      'label-sm': { 
        fontSize: this.resolvedTokens.fontSize.xs, 
        fontWeight: this.resolvedTokens.fontWeight.medium, 
        lineHeight: '18px' 
      },
      
      'caption': { 
        fontSize: this.resolvedTokens.fontSize.xs, 
        fontWeight: this.resolvedTokens.fontWeight.normal, 
        lineHeight: '16px', 
        letterSpacing: '0.01em' 
      },
      
      'overline': { 
        fontSize: this.resolvedTokens.fontSize.xs, 
        fontWeight: this.resolvedTokens.fontWeight.medium, 
        lineHeight: '16px', 
        letterSpacing: '0.08em',
        textTransform: 'uppercase'
      },
    };
    
    Object.entries(variants).forEach(([name, props]) => {
      lines.push(`.typography-${name} {`);
      lines.push(`  font-family: ${props.fontFamily || baseFont};`);
      lines.push(`  font-size: ${props.fontSize};`);
      lines.push(`  font-weight: ${props.fontWeight};`);
      lines.push(`  line-height: ${props.lineHeight};`);
      if (props.letterSpacing) {
        lines.push(`  letter-spacing: ${props.letterSpacing};`);
      }
      if (props.textTransform) {
        lines.push(`  text-transform: ${props.textTransform};`);
      }
      lines.push(`}`);
      lines.push('');
    });
    
    return lines.join('\n');
  }

  // Generate TypeScript declarations
  generateTypes() {
    const generateInterface = (obj, indent = 0) => {
      const spaces = '  '.repeat(indent);
      let result = '{\n';
      
      for (const [key, value] of Object.entries(obj)) {
        // Quote keys that start with numbers or contain special characters
        const needsQuotes = /^[0-9]/.test(key) || !/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key);
        const propertyKey = needsQuotes ? `"${key}"` : key;
        
        if (typeof value === 'object' && value !== null) {
          result += `${spaces}  ${propertyKey}: ${generateInterface(value, indent + 1)};\n`;
        } else {
          result += `${spaces}  ${propertyKey}: "${value}";\n`;
        }
      }
      
      result += `${spaces}}`;
      return result;
    };

    return `// Design tokens type definitions
// Auto-generated - do not edit manually

export interface TokensType ${generateInterface(this.resolvedTokens)}

export declare const tokens: TokensType;
export default tokens;`;
  }

  // Build all formats
  build() {
    console.log('Building design tokens...');
    
    this.loadTokens();
    
    // Ensure output directories exist
    const dirs = ['dist', 'css', 'scss'];
    dirs.forEach(dir => {
      const dirPath = path.join(__dirname, '..', dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });

    // Generate CSS
    const css = this.generateCSS();
    fs.writeFileSync(path.join(__dirname, '../css/tokens.css'), css);
    
    // Generate Typography CSS
    const typographyCSS = this.generateTypographyCSS();
    fs.writeFileSync(path.join(__dirname, '../css/typography.css'), typographyCSS);
    
    // Generate SCSS
    const scss = this.generateSCSS();
    fs.writeFileSync(path.join(__dirname, '../scss/tokens.scss'), scss);
    
    // Generate JavaScript
    const js = this.generateJS();
    const cjs = js.replace('export const tokens', 'const tokens').replace('export default tokens;', 'module.exports = tokens;');
    fs.writeFileSync(path.join(__dirname, '../dist/index.js'), cjs);
    fs.writeFileSync(path.join(__dirname, '../dist/index.esm.js'), js);
    
    // Generate TypeScript declarations
    const types = this.generateTypes();
    fs.writeFileSync(path.join(__dirname, '../dist/index.d.ts'), types);
    
    // Generate Tailwind config
    const tailwindConfig = this.generateTailwindConfig();
    fs.writeFileSync(path.join(__dirname, '../tailwind.config.js'), tailwindConfig);
    
    console.log('Tokens built successfully!');
    console.log('Generated files:');
    console.log('  - css/tokens.css');
    console.log('  - css/typography.css');
    console.log('  - scss/tokens.scss');
    console.log('  - dist/index.js (CommonJS)');
    console.log('  - dist/index.esm.js (ES Modules)');
    console.log('  - dist/index.d.ts (TypeScript)');
    console.log('  - tailwind.config.js');
  }
}

// Run if called directly
if (require.main === module) {
  const transformer = new TokenTransformer();
  
  // Check for watch flag
  if (process.argv.includes('--watch')) {
    console.log('Watching for token changes...');
    const chokidar = require('chokidar');
    
    const watcher = chokidar.watch(path.join(__dirname, '../src/*.json'));
    watcher.on('change', () => {
      console.log('Tokens changed, rebuilding...');
      transformer.build();
    });
    
    // Initial build
    transformer.build();
  } else {
    transformer.build();
  }
}

module.exports = TokenTransformer;