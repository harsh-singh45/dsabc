# Intelation Design System

**Description:** Modern design system with TypeScript, React, and Tailwind CSS

**Key Features:** Design tokens, accessible components, Turborepo monorepo, Storybook documentation

**Project Status/Version:** v1.0.0 - Production Ready

## Overview

Enterprise-grade design system providing consistent UI components, design tokens, and developer tools for building scalable applications efficiently.

## Architecture

Turborepo-powered monorepo with three workspaces: 
**Packages** (@intelation/tokens for design tokens, @intelation/ui for React components), 
**Apps** (Storybook documentation, Next.js demo), and 
**Tools** for build utilities. Optimized for parallel development and shared dependencies.

## Packages

### @intelation/tokens
Design tokens library providing colors, typography, and more in multiple formats (CSS, SCSS, JavaScript, TypeScript, Tailwind). Includes base tokens and semantic tokens with automatic resolution and transformation.

### @intelation/ui
React component library built with TypeScript and Tailwind CSS. Features 35+ accessible components including forms, layouts, charts, and UI elements using React Aria. Fully typed with comprehensive props and variants.

## Applications

### Storybook
Interactive component documentation and playground running on port 6006. Explore all components, their variants, props, and usage examples. Built with Storybook 7 and Vite.

### Playground
Interactive Next.js 14 application for testing and demonstrating design system integration. Showcases component usage, token integration via Tailwind, and best practices for consuming the design system.

## Getting Started

**Prerequisites:**
- Node.js >= 18.0.0
- npm >= 9.0.0

**Installation:**
```bash
# Clone the repository
git clone https://github.com/intelation/design-system.git

# Install dependencies
cd design-system
npm install

# Start development
npm run dev
```

**Quick Commands:**
- `npm run dev` - Start all apps in development mode
- `npm run build` - Build all packages and apps
- `npm run storybook` - Run Storybook documentation
- `npm run playground` - Run Playground app
- `npm run lint` - Run ESLint across workspace
- `npm test` - Run all tests

## Development

### Setup
```bash
# Clone repository
git clone https://github.com/intelation/design-system.git
cd design-system

# Install dependencies
npm install
```

### Available Scripts
- **Development:** `npm run dev` - Start all workspaces in parallel with hot reload
- **Build:** `npm run build` - Build all packages with Turbo pipeline
- **Test:** `npm run test` - Run Jest tests across packages
- **Lint:** `npm run lint` - Run ESLint with TypeScript support
- **Type Check:** `npm run type-check` - Validate TypeScript types
- **Clean:** `npm run clean` - Remove all build artifacts
- **Tokens:** `npm run tokens:build` - Build design tokens only
- **Changesets:** `npm run changeset` - Create version changeset
- **Release:** `npm run release` - Build and publish packages

### Development Workflow
1. **Start development mode:** `npm run dev` runs all apps with watch mode
2. **Token changes:** Automatically rebuild when base.json or semantic.json changes
3. **Component development:** Edit in `packages/ui/src/components` with Storybook hot reload
4. **Testing:** Run `npm test` in package directory or workspace root
5. **Build verification:** Use `npm run build` before committing

### Watch Mode
- **Tokens:** `npm run dev --filter=tokens` - Watch and rebuild tokens
- **UI:** `npm run dev --filter=ui` - Build components on change
- **Apps:** Turbopack provides instant HMR for Next.js app

## Technology Stack

### Core Technologies
- **TypeScript 5.2** - Type-safe development with strict mode
- **React 18/19** - Component library and applications
- **Tailwind CSS 4** - Utility-first styling with design tokens
- **Next.js 15** - App framework with Turbopack

### Build & Development
- **Turborepo 1.10** - Monorepo task orchestration and caching
- **Rollup 4** - Component library bundling with tree-shaking
- **PostCSS 8** - CSS processing and optimization
- **Vite 4** - Fast development server for Storybook

### Component Development
- **React Aria 3.33** - Accessible component primitives
- **React Stately 3.31** - State management for components
- **Storybook 7.5** - Interactive component documentation

### Code Quality
- **ESLint 8/9** - Code linting with TypeScript rules
- **Prettier 3** - Code formatting
- **Jest 29** - Unit testing framework
- **React Testing Library** - Component testing utilities

### Version Management
- **Changesets 2.27** - Version and changelog management
- **Semantic Versioning** - Automated version bumping

## Design Tokens

### Token Structure
Design tokens are organized into **base tokens** (primitives like colors) and **semantic tokens** (contextual like primary, success). Tokens support automatic reference resolution using `{token.path}` syntax.

### Token Categories
- **Colors:** Brand, gray, red, green, yellow palettes (50-950 shades)
- **Typography:** Font families (Manrope), sizes, weights, line heights
- **Border Radius:** sm to full with px values
- **Shadows:** Elevation system from sm to 2xl
- **Breakpoints:** Responsive design breakpoints (sm to 2xl)

### Output Formats
Tokens are generated in multiple formats:
- **CSS:** Custom properties in `css/tokens.css`
- **SCSS:** Variables in `scss/tokens.scss`
- **JavaScript:** ES modules in `dist/index.esm.js`
- **TypeScript:** Typed exports in `dist/index.d.ts`
- **Tailwind:** Config preset in `tailwind.config.js`

### Usage in Projects
```javascript
// Import tokens in JavaScript
import { tokens } from '@intelation/tokens';
console.log(tokens.color.brand['500']); // #3b82f6

// Import CSS variables
import '@intelation/tokens/css';

// Use in Tailwind config
import tokensConfig from '@intelation/tokens/tailwind';
```

## Using the Design System

### Installation in Your Project

**Important:** Packages are published to GitHub Packages (private registry).

1. **Create `.npmrc` in your project root:**
```bash
@intelation:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

2. **Generate GitHub Token:**
   - Go to: https://github.com/settings/tokens
   - Create classic token with `read:packages` scope
   - Replace `YOUR_GITHUB_TOKEN` with your token

3. **Install packages:**
```bash
npm install @intelation/ui @intelation/tokens
```

### Tailwind CSS Setup
```javascript
// tailwind.config.js
import tokensConfig from '@intelation/tokens/tailwind';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [tokensConfig],
};
```

### Component Usage
```tsx
import { Button, Header, Input } from '@intelation/ui';
import '@intelation/ui/styles';

function App() {
  return (
    <>
      <Header 
        logo={<Logo />} 
        navigationItems={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' }
        ]} 
      />
      <Button 
        variant="solid" 
        colorScheme="primary" 
        size="md"
      >
        Click me
      </Button>
      <Input 
        placeholder="Enter text..." 
        label="Username" 
      />
    </>
  );
}
```

### TypeScript Configuration
```json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "jsx": "react-jsx"
  }
}
```

### Theming & Customization
Extend tokens in your Tailwind config:
```javascript
export default {
  presets: [tokensConfig],
  theme: {
    extend: {
      colors: {
        custom: '#ff6b6b'
      }
    }
  }
};
```

## Component Library

All components are built with TypeScript, React Aria for accessibility, and support multiple variants and sizes.

> **Note:** For complete component documentation, variants, props, and interactive examples, please use Storybook (`npm run storybook`).

### For AI Agents & External Systems

Component metadata is automatically generated and available in machine-readable formats:

**JSON Metadata:**
```typescript
import components from '@intelation/ui/components.json';

// Access all component metadata
console.log(components.components.Button);
// Outputs: { name, props, examples, description, import, etc. }
```

**Markdown Documentation:**
- Location: `node_modules/@intelation/ui/docs/api/`
- Index: `@intelation/ui/docs/api/index.md`
- Per-component: `@intelation/ui/docs/api/Button.md`

**What's Included:**
- ✅ All component props with types, defaults, and descriptions
- ✅ Variant enums (variant, size, colorScheme)
- ✅ Code examples extracted from JSDoc
- ✅ Import statements
- ✅ Component categories
- ✅ TypeScript type definitions

**Example Usage:**
```typescript
import metadata from '@intelation/ui/components.json';

// Get all available button variants
const buttonVariants = metadata.components.Button.props
  .find(p => p.name === 'variant')?.enum;

// Get component examples
const examples = metadata.components.Button.examples;
examples.forEach(ex => console.log(ex.code));
```

## Styling & Customization

### Tailwind Integration
Design system uses Tailwind CSS 4 with tokens preset. Import the preset in your config to access all design tokens as Tailwind utilities.

### Custom Styling
```tsx
// Using className with Tailwind utilities
<Button className="shadow-lg hover:scale-105 transition">
  Custom Button
</Button>

// Combining with design tokens
<div className="bg-brand-500 text-gray-50 p-4 rounded-lg">
  Custom styled content
</div>
```

### CSS Variables
All tokens are available as CSS custom properties:
```css
.custom-component {
  background-color: var(--color-brand-500);
  padding: 16px;
  border-radius: var(--borderRadius-md);
  font-family: var(--fontFamily-sans);
}
```

### Theme Extension
```javascript
// Extend theme in your project
export default {
  presets: [tokensConfig],
  theme: {
    extend: {
      colors: {
        accent: '#ff6b6b',
      }
    }
  }
};
```

## Build & Bundle

### Build Pipeline
Turborepo orchestrates the build pipeline with dependency awareness. Packages build before apps, with caching for unchanged workspaces.

**Build Order:**
1. `@intelation/tokens` - Generate token files
2. `@intelation/ui` - Bundle React components
3. Apps (Storybook, Next.js) - Build applications

### Package Bundling
- **Tokens:** Node.js script generates multiple formats (CSS, SCSS, JS, TS)
- **UI Components:** Rollup bundles with tree-shaking, outputs CommonJS and ESM
- **Apps:** Next.js uses Turbopack, Storybook uses Vite

### Output Formats
- **ESM:** Modern ES modules for tree-shaking
- **CommonJS:** Node.js compatibility
- **TypeScript Declarations:** Full type definitions
- **CSS:** Extracted styles with PostCSS optimization

### Optimization
- Tree-shaking enabled in Rollup configuration
- Turbo caching prevents unnecessary rebuilds
- Parallel task execution across workspaces
- Source maps for debugging

## Project Structure

```
design-system/
├── apps/
│   ├── playground/            # Next.js demo app
│   │   ├── src/
│   │   │   └── app/           # App router pages
│   │   ├── public/            # Static assets
│   │   └── package.json
│   └── storybook/             # Component documentation
│       ├── src/               # Story files
│       ├── storybook-static/  # Built docs
│       └── package.json
├── packages/
│   ├── tokens/                # Design tokens
│   │   ├── src/
│   │   │   ├── base.json     # Base tokens
│   │   │   └── semantic.json # Semantic tokens
│   │   ├── scripts/
│   │   │   └── build-tokens.js
│   │   ├── css/              # Generated CSS
│   │   ├── scss/             # Generated SCSS
│   │   └── dist/             # Generated JS/TS
│   └── ui/                   # React components
│       ├── src/
│       │   ├── components/   # Component source
│       │   ├── utils/        # Utility functions
│       │   └── styles/       # Global styles
│       └── dist/             # Built components
├── tools/                    # Build utilities
├── turbo.json               # Turborepo config
└── package.json             # Root workspace
```

## Configuration Files

### TypeScript (tsconfig.json)
- **Strict mode enabled** for type safety
- **Module resolution:** bundler/node16
- **JSX:** react-jsx for modern React
- **Paths configured** for package imports

### ESLint (eslint.config.mjs)
- **TypeScript rules** with @typescript-eslint
- **React hooks** validation
- **Next.js specific** rules for app
- **Flat config format** (ESLint 9)

### Tailwind (tailwind.config.*)
- **Content paths** for all components
- **Tokens preset** integration
- **PostCSS 4 compatibility**
- **JIT mode** for optimal performance

### Turbo (turbo.json)
- **Pipeline definitions** for build, dev, test
- **Output caching** for dist, .next folders
- **Dependency management** with ^build
- **Persistent tasks** for dev servers

### Rollup (rollup.config.js)
- **Dual output:** CommonJS + ESM
- **TypeScript compilation** with declarations
- **PostCSS processing** for styles
- **Peer deps externalization**

## Best Practices

### Component Development
- Use TypeScript interfaces for all props
- Follow React Aria patterns for accessibility
- Include forwardRef for component composition
- Provide sensible defaults for all props
- Export component types for consumers

### Token Usage
- Always use semantic tokens in components (e.g., `primary` not `brand-500`)
- Reference tokens through Tailwind utilities when possible
- Avoid hardcoded values; use token system
- Document custom token usage in component docs

### Performance
- Leverage tree-shaking by using named imports
- Use Turbo cache for faster builds
- Implement code splitting in applications
- Optimize bundle size with proper externals

### Accessibility
- Test with keyboard navigation
- Ensure proper ARIA attributes
- Maintain color contrast ratios
- Support screen readers
- Follow WCAG 2.1 Level AA guidelines

### Testing
- Write unit tests for component logic
- Test accessibility with React Testing Library
- Verify prop variations and edge cases
- Mock external dependencies
- Maintain test coverage above 80%

---

## Essential Commands

### Quick Start
```bash
npm install              # Install all dependencies
npm run dev             # Start development mode (all apps)
npm run build           # Build all packages and apps
```

### Development
```bash
npm run storybook       # Run Storybook (port 6006)
npm run tokens:build    # Build design tokens only
npm run lint            # Lint entire workspace
npm run type-check      # Check TypeScript types
npm run clean           # Clean build artifacts
```

### Testing & Quality
```bash
npm test                # Run all tests
npm run test --filter=ui  # Test specific package
```

### Version & Release
```bash
npm run changeset
npm run version-packages
git add .
git commit -m "chore: version packages"
git push
npm run release
```

### Workspace Commands
```bash
npm run dev --filter=storybook   # Run only Storybook
npm run build --filter=tokens    # Build only tokens
npm run dev --filter=playground  # Run only Playground app
```

