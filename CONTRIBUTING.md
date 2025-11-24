# Contributing to Intelation Design System

Welcome to the Intelation Design System! This guide provides comprehensive guidelines for developers and AI agents working on this project. Following these conventions ensures consistency, maintainability, and quality across the codebase.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Token Management](#token-management)
- [Component Development](#component-development)
- [Styling Guidelines](#styling-guidelines)
- [TypeScript Standards](#typescript-standards)
- [Testing Requirements](#testing-requirements)
- [Accessibility Standards](#accessibility-standards)
- [Code Organization](#code-organization)
- [Documentation Standards](#documentation-standards)
- [Performance Best Practices](#performance-best-practices)
- [Monorepo Management](#monorepo-management)
- [Release Process](#release-process)
- [Common Pitfalls to Avoid](#common-pitfalls-to-avoid)
- [Quick Reference Checklists](#quick-reference-checklists)

---

## Getting Started

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation
```bash
# Clone the repository
git clone https://github.com/intelation/design-system.git
cd design-system

# Install dependencies
npm install

# Start development mode
npm run dev
```

### Essential Commands
```bash
npm run dev              # Start all apps in watch mode
npm run build            # Build all packages and apps
npm run test             # Run all tests
npm run lint             # Lint entire workspace
npm run type-check       # Check TypeScript types
npm run storybook        # Run Storybook on port 6006
npm run changeset        # Create version changeset
npm run release          # Build and publish packages
```

---

## Development Workflow

### Branch Strategy
- `main` - Production-ready code
- `feature/*` - New features
- `fix/*` - Bug fixes
- `chore/*` - Maintenance tasks

### Commit Messages
Follow [Conventional Commits](https://www.conventionalcommits.org/):
```
feat(ui): add new Button variant
fix(tokens): correct gray-50 color value
docs(readme): update installation instructions
chore(deps): update dependencies
test(button): add accessibility tests
```

### Pull Request Process
1. Create a feature branch from `main`
2. Make your changes following these guidelines
3. Run tests: `npm test`
4. Run linting: `npm run lint`
5. Run type checking: `npm run type-check`
6. Create changeset: `npm run changeset`
7. Push and create PR with descriptive title
8. Request review from maintainers

---

## Token Management

### CRITICAL: Token-First Approach

**ALWAYS verify tokens exist before using them**. Only use CSS custom properties that are defined in `packages/tokens/css/tokens.css`.

### Available Token Categories

Check the actual token file for available properties:
```bash
# View all available tokens
cat packages/tokens/css/tokens.css
```

**Common token categories**:
- `--color-brand-*` - Brand colors (50-950)
- `--color-gray-*` - Gray scale (50-950)
- `--color-red-*`, `--color-green-*`, `--color-yellow-*` - Status colors
- `--color-primary`, `--color-secondary` - Semantic colors
- `--color-text-primary`, `--color-text-secondary`, `--color-text-tertiary` - Text colors
- `--color-background-primary`, `--color-background-secondary`, `--color-background-tertiary` - Background colors
- `--color-border-primary`, `--color-border-secondary`, `--color-border-focus` - Border colors
- `--fontSize-*` - Font sizes (xs-9xl)
- `--boxShadow-*` - Shadow definitions (sm-2xl)

### Token Validation Rules

**DO NOT invent tokens**. If a token doesn't exist, use the nearest available token or request it be added:

```css
/* BAD - These tokens don't exist */
.component {
  color: var(--color-text-disabled);
  background: var(--color-background-hover);
  border: var(--color-border-inverse);
}

/* GOOD - Use actual tokens */
.component {
  color: var(--color-text-tertiary);  /* or --color-gray-400 */
  background: var(--color-background-secondary);
  border: var(--color-border-primary);
}
```

### Core Principles

**Always use semantic tokens** in components:
```tsx
// Good - semantic token
<Button className="bg-primary text-white" />

// Bad - base token
<Button className="bg-brand-500 text-white" />
```

**Use token references** to maintain relationships:
```json
// In semantic.json
{
  "color": {
    "primary": "{color.brand.500}",
    "primaryHover": "{color.brand.600}"
  }
}
```

### Adding New Tokens

**Add tokens only if** they are:
- Used in 3+ places across the system
- Represent a design decision that may change
- Need to be consistent across components
- **NOT already covered by existing tokens**

**Before adding a new token**:
1. Check `packages/tokens/css/tokens.css` for existing alternatives
2. Discuss with team if new token is truly needed
3. Document the use case and why existing tokens are insufficient

### Token Files Location
- **Base tokens**: `packages/tokens/src/base.json`
- **Semantic tokens**: `packages/tokens/src/semantic.json`

### Token Categories
- `color` - Color palettes and semantic colors
- `fontSize` - Font size scale
- `fontFamily` - Font family definitions
- `fontWeight` - Font weight scale
- `lineHeight` - Line height values
- `letterSpacing` - Letter spacing scale
- `borderRadius` - Border radius values
- `boxShadow` - Shadow definitions
- `breakpoints` - Responsive breakpoints

### Token Build Process
After modifying tokens:
```bash
npm run tokens:build
```

This generates:
- CSS custom properties (`css/tokens.css`)
- Typography utilities (`css/typography.css`)
- SCSS variables (`scss/tokens.scss`)
- JavaScript/TypeScript modules (`dist/`)
- Tailwind config (`tailwind.config.js`)

---

## Component Development

### Component Structure

Every component must follow this structure:
```
ComponentName/
├── index.ts                    # Barrel export
├── ComponentName.tsx           # Component logic
├── ComponentName.css           # Component styles
├── ComponentName.test.tsx      # Unit tests
└── ComponentName.stories.tsx   # Storybook stories
```

### Component Template

```tsx
import React, { forwardRef } from "react";
import { cn } from "../../utils";
import "./ComponentName.css";

export interface ComponentNameProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Component variant
   * @default "default"
   */
  variant?: "default" | "primary" | "secondary";
  
  /**
   * Component size
   * @default "md"
   */
  size?: "sm" | "md" | "lg";
}

/**
 * ComponentName description
 * 
 * @example
 * ```tsx
 * <ComponentName variant="primary" size="md">
 *   Content
 * </ComponentName>
 * ```
 */
export const ComponentName = forwardRef<HTMLDivElement, ComponentNameProps>(
  (
    {
      variant = "default",
      size = "md",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const componentClasses = cn(
      "component-name",
      `component-name--${variant}`,
      `component-name--${size}`,
      className
    );

    return (
      <div ref={ref} className={componentClasses} {...props}>
        {children}
      </div>
    );
  }
);

ComponentName.displayName = "ComponentName";
```

### Required Component Features

**1. Use forwardRef** for all components:
```tsx
export const Component = forwardRef<HTMLElement, Props>((props, ref) => {
  // Component logic
});
```

**2. Always set displayName**:
```tsx
Component.displayName = "Component";
```

**3. Extend HTML props** for native attributes:
```tsx
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // Custom props
}
```

**4. Provide default values** for all optional props:
```tsx
const { variant = "solid", size = "md", ...rest } = props;
```

**5. Export types** alongside components:
```tsx
// index.ts
export { Component } from "./Component";
export type { ComponentProps } from "./Component";
```

### Advanced Component Patterns

**Compound Components** for complex UI:
```tsx
export const Card = ({ children }) => { /* ... */ };
Card.Header = ({ children }) => { /* ... */ };
Card.Body = ({ children }) => { /* ... */ };
Card.Footer = ({ children }) => { /* ... */ };

// Usage
<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
</Card>
```

**Polymorphic 'as' prop** to render as different elements:
```tsx
interface BoxProps<T extends React.ElementType = "div"> {
  as?: T;
  // Other props
}
```

**Support controlled & uncontrolled** modes:
```tsx
interface InputProps {
  value?: string;           // Controlled
  defaultValue?: string;    // Uncontrolled
  onChange?: (value: string) => void;
}
```

**Composition over configuration**:
```tsx
// Good - flexible composition
<Button leftIcon={<SaveIcon />}>Save</Button>

// Bad - limited configuration
<Button icon="save">Save</Button>
```

---

## Styling Guidelines

### CSS Methodology

**Use BEM for component CSS**:
```css
/* Block */
.button { }

/* Element */
.button__icon { }
.button__spinner { }

/* Modifier */
.button--primary { }
.button--large { }
.button--disabled { }
```

**Mobile-first responsive design**:
```css
.component {
  /* Base (mobile) styles */
  padding: 1rem;
}

@media (min-width: 768px) {
  .component {
    /* Tablet styles */
    padding: 1.5rem;
  }
}
```

### Tailwind CSS Usage

**Use Tailwind for utilities**, not component structure:
```tsx
// Good - utility classes for spacing/layout
<div className="flex gap-4 p-6">
  <Button variant="primary">Save</Button>
</div>

// Bad - don't replace component classes
<button className="bg-blue-500 text-white px-4 py-2 rounded">
  Button
</button>
```

**Group Tailwind classes by category**:
```tsx
className={cn(
  // Layout
  "flex items-center justify-between",
  // Spacing
  "p-4 gap-2",
  // Colors
  "bg-white text-gray-900",
  // Typography
  "text-sm font-medium",
  // Other
  "rounded-lg shadow-sm"
)}
```

### Token Usage in Styles

**CRITICAL: Always use CSS custom properties from tokens**. Never hardcode values.

**Before using a token, verify it exists**:
```bash
# Search for a specific token
grep "color-background" packages/tokens/css/tokens.css
```

**Use only existing tokens**:
```css
/* GOOD - Verified tokens exist */
.component {
  color: var(--color-text-primary);        /* Exists: #111827 */
  background: var(--color-background-primary);  /* Exists: #f9fafb */
  padding: 16px;
  border-radius: var(--borderRadius-md);   /* Exists: 6px */
  box-shadow: var(--boxShadow-base);       /* Exists */
}

/* BAD - These tokens don't exist */
.component {
  color: var(--color-text-disabled);       /* DOES NOT EXIST */
  background: var(--color-background);     /* DOES NOT EXIST */
  border: var(--color-border-hover);       /* DOES NOT EXIST */
}

/* BAD - Hardcoded values for tokens */
.component {
  color: #3b82f6;       /* Use var(--color-primary) */
  border-radius: 6px;   /* Use var(--borderRadius-md) */
}
```

**Token replacement guide**:
```css
/* Hardcoded → Token */
#3b82f6 → var(--color-primary)
#f9fafb → var(--color-background-primary) or var(--color-gray-50)
#111827 → var(--color-text-primary) or var(--color-gray-900)
#e5e7eb → var(--color-border-primary) or var(--color-gray-200)
6px → var(--borderRadius-md)
```

**If you need a token that doesn't exist**:
1. Find the closest existing token
2. Document why it doesn't fit perfectly
3. Create a changeset requesting the new token
4. Use the closest alternative until approved

### JavaScript Token Usage

**CRITICAL: When JavaScript libraries need direct color values** (not CSS context), you must import tokens as JavaScript objects instead of using CSS custom properties.

**General Rule**: If a library processes colors in JavaScript (not via DOM/CSS), import tokens:
```tsx
// ✅ GOOD - Import tokens for JavaScript usage
import { tokens } from '@intelation/tokens';

// Use token values directly
const config = {
  color: tokens.color.primary,           // '#3b82f6'
  backgroundColor: tokens.color.chart.violet,  // '#8068F4'
  borderColor: tokens.color.chart.borderWhite, // '#ffffff'
};
```

**Why CSS variables don't work in pure JavaScript**:
- CSS custom properties (`var(--color-*)`) require DOM context to resolve
- JavaScript libraries processing colors at runtime don't have access to computed CSS styles
- Canvas APIs, data visualization libraries, and JavaScript-based rendering cannot resolve CSS variables
- The string `'var(--color-primary)'` is treated as an invalid color → defaults to black

**When to use each approach**:

| Context | Method | Example |
|---------|--------|---------|
| **CSS files** | CSS custom properties | `color: var(--color-chart-violet);` |
| **React inline styles** | CSS custom properties | `style={{ color: 'var(--color-primary)' }}` |
| **Tailwind classes** | Utility classes | `className="text-primary"` |
| **JavaScript libraries** | JavaScript imports | `color: tokens.color.primary` |
| **Canvas API** | JavaScript imports | `ctx.fillStyle = tokens.color.chart.cyan` |
| **Data visualization** | JavaScript imports | `backgroundColor: tokens.color.chart.green` |
| **Any non-DOM JS processing** | JavaScript imports | Use `tokens.color.*` |

**Important**: Never hardcode values. Even when JavaScript requires direct color strings, always import from tokens:
```tsx
// ❌ BAD - Hardcoded value
const borderColor = '#ffffff';

// ❌ BAD - CSS variable won't resolve
const borderColor = 'var(--color-chart-borderWhite)';

// ✅ GOOD - Token import maintains single source of truth
import { tokens } from '@intelation/tokens';
const borderColor = tokens.color.chart.borderWhite;
```

### Chart.js Specific Implementation

Chart.js is a common example where CSS variables fail because it renders to canvas.

**Problem**: CSS variables don't work in Chart.js configuration:
```tsx
// ❌ BAD - Chart.js cannot resolve CSS variables
const chartData = {
  datasets: [{
    backgroundColor: 'var(--color-chart-violet)',  // Renders as black
    borderColor: 'var(--color-chart-borderWhite)', // Renders as black
  }]
};
```

**Solution**: Import and use tokens from JavaScript:
```tsx
// ✅ GOOD - Import tokens as JavaScript objects
import { tokens } from '@intelation/tokens';

const DEFAULT_COLORS = [
  tokens.color.chart.violet,      // '#8068F4'
  tokens.color.chart.cyan,        // '#04D2DD'
  tokens.color.chart.green,       // '#7FD858'
  tokens.color.chart.purple,      // '#B380F8'
  tokens.color.chart.teal,        // '#009AA5'
  tokens.color.chart.red,         // '#F87171'
];

const chartData = {
  datasets: [{
    backgroundColor: DEFAULT_COLORS,
    borderColor: tokens.color.chart.borderWhite,  // '#ffffff'
    pointBorderColor: tokens.color.chart.borderWhite,
  }]
};
```

**Available chart tokens** (import from `@intelation/tokens`):
```tsx
tokens.color.chart.violet        // Primary chart color
tokens.color.chart.cyan          // Secondary chart color
tokens.color.chart.green         // Success/positive color
tokens.color.chart.purple        // Accent color
tokens.color.chart.teal          // Alternative color
tokens.color.chart.red           // Error/negative color
tokens.color.chart.lightGray     // Neutral color
tokens.color.chart.borderWhite   // Border/separator color
tokens.color.chart.textDark      // Dark text
tokens.color.chart.textGray      // Gray text
tokens.color.chart.gridLine      // Grid lines
```

**Example: Complete DonutChart implementation**:
```tsx
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { tokens } from '@intelation/tokens';
import type { ChartData } from 'chart.js';

const DEFAULT_COLORS = [
  tokens.color.chart.cyan,
  tokens.color.chart.green,
  tokens.color.chart.violet,
  tokens.color.chart.lightGray,
];

export const DonutChart = ({ data, labels }) => {
  const chartData: ChartData<'doughnut'> = {
    labels,
    datasets: [{
      data,
      backgroundColor: DEFAULT_COLORS,
      borderColor: tokens.color.chart.borderWhite,  // ✅ Token, not '#ffffff'
      borderWidth: 2,
    }],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: tokens.color.chart.textDark,  // ✅ Token, not hardcoded
        },
      },
    },
  };

  return <Doughnut data={chartData} options={options} />;
};
```

**Testing token imports**:
```tsx
// In component tests
import { tokens } from '@intelation/tokens';

describe('DonutChart', () => {
  it('uses token colors for chart data', () => {
    const { container } = render(<DonutChart {...props} />);
    const canvas = container.querySelector('canvas');
    const chart = Chart.getChart(canvas);
    
    expect(chart.data.datasets[0].borderColor)
      .toBe(tokens.color.chart.borderWhite);
  });
});
```

**Remember**:
- ✅ Always import tokens from `@intelation/tokens` for JavaScript libraries
- ✅ Never use CSS variables in JavaScript color processing
- ✅ Never hardcode color values (even if they match tokens)
- ✅ Apply this pattern to ALL JavaScript libraries (Chart.js, Canvas API, D3.js, etc.)
- ✅ Use CSS custom properties everywhere else (React components, CSS files)

---

## TypeScript Standards

### Type System Rules

**1. Strict mode enabled** - No compromises:
```tsx
// Bad - Never use `any`
const data: any = fetchData();

// Good - Use proper types or unknown
const data: User = fetchData();
const data: unknown = fetchData();
```

**2. Use type imports**:
```tsx
// Good
import type { ComponentProps } from "react";
import type { ButtonProps } from "./Button";

// Bad
import { ComponentProps } from "react";
```

**3. Interface for objects, type for unions**:
```tsx
// Interfaces for object shapes
interface User {
  name: string;
  email: string;
}

// Types for unions/intersections
type Status = "idle" | "loading" | "success" | "error";
type UserWithStatus = User & { status: Status };
```

**4. Generic components** for type-safe APIs:
```tsx
interface SelectProps<T> {
  options: T[];
  value: T;
  onChange: (value: T) => void;
  getLabel: (option: T) => string;
}

function Select<T>({ options, value, onChange, getLabel }: SelectProps<T>) {
  // Fully type-safe implementation
}
```

**5. Utility types**:
```tsx
// Make all properties optional
type PartialUser = Partial<User>;

// Remove properties
type UserWithoutEmail = Omit<User, "email">;

// Pick specific properties
type UserName = Pick<User, "name">;

// Make all properties required
type RequiredConfig = Required<Config>;
```

### TypeScript Configuration

All packages must extend from `tsconfig.base.json`:
```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist"
  },
  "include": ["src"]
}
```

---

## Testing Requirements

### Testing Strategy

Follow the **test pyramid**:
- **70% Unit tests** - Component logic, utilities
- **20% Integration tests** - Component interactions
- **10% E2E tests** - Critical user flows

### Test Structure

```tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  describe('Rendering', () => {
    it('renders with default props', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  describe('Interactions', () => {
    it('calls onClick when clicked', async () => {
      const handleClick = jest.fn();
      const user = userEvent.setup();
      
      render(<Button onClick={handleClick}>Click</Button>);
      await user.click(screen.getByRole('button'));
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes', () => {
      render(<Button loading>Loading</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-busy', 'true');
    });
  });
});
```

### Testing Best Practices

**1. Test user behavior, not implementation**:
```tsx
// Good - tests behavior
it('shows error message when validation fails', async () => {
  render(<Form />);
  await userEvent.click(screen.getByRole('button', { name: /submit/i }));
  expect(screen.getByText(/email is required/i)).toBeInTheDocument();
});

// Bad - tests implementation
it('calls validateEmail function', () => {
  const validateEmail = jest.fn();
  // Testing internal function calls
});
```

**2. Accessibility tests** for interactive components:
```tsx
it('is keyboard accessible', async () => {
  render(<Button>Click me</Button>);
  const button = screen.getByRole('button');
  button.focus();
  expect(button).toHaveFocus();
  
  await userEvent.keyboard('{Enter}');
  // Assert expected behavior
});
```

**3. Mock external dependencies**:
```tsx
jest.mock('@intelation/tokens', () => ({
  tokens: {
    color: { primary: '#3b82f6' }
  }
}));
```

**4. Target 70%+ coverage**:
```bash
npm test -- --coverage
```

Coverage thresholds are enforced in `jest.config.cjs`:
```javascript
coverageThreshold: {
  global: {
    branches: 70,
    functions: 70,
    lines: 70,
    statements: 70,
  }
}
```

---

## Accessibility Standards

### Required ARIA Attributes

Every interactive component must include appropriate ARIA attributes:
```tsx
<button
  aria-label="Close dialog"
  aria-busy={loading}
  aria-disabled={disabled}
  aria-expanded={isOpen}
  aria-haspopup={hasPopup}
  aria-controls={controlsId}
>
  Close
</button>
```

### Keyboard Support

All interactive components must support keyboard navigation:

| Key | Action |
|-----|--------|
| **Enter/Space** | Activate buttons, toggle checkboxes |
| **Escape** | Close dialogs, dropdowns, modals |
| **Arrow Keys** | Navigate lists, menus, tabs |
| **Tab** | Focus next interactive element |
| **Shift+Tab** | Focus previous interactive element |

```tsx
const handleKeyDown = (event: React.KeyboardEvent) => {
  switch (event.key) {
    case 'Enter':
    case ' ':
      event.preventDefault();
      handleActivate();
      break;
    case 'Escape':
      handleClose();
      break;
    case 'ArrowDown':
      focusNext();
      break;
    case 'ArrowUp':
      focusPrevious();
      break;
  }
};
```

### Focus Management

**1. Use `:focus-visible` with visible indicators**:
```css
.button:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}
```

**2. Semantic HTML over divs**:
```tsx
// Good
<button onClick={handleClick}>Click me</button>

// Bad
<div onClick={handleClick}>Click me</div>
```

**3. Screen reader only text**:
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

```tsx
<button>
  <Icon />
  <span className="sr-only">Delete item</span>
</button>
```

### Color Contrast Requirements

- **Text**: 4.5:1 contrast ratio minimum
- **UI components**: 3:1 contrast ratio minimum
- **Large text (18px+)**: 3:1 contrast ratio minimum

Test contrast ratios using browser DevTools or [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

---

## Code Organization

### File Structure

```
packages/
├── tokens/
│   ├── src/
│   │   ├── base.json          # Base design tokens
│   │   ├── semantic.json      # Semantic tokens
│   │   └── index.ts           # Token exports
│   ├── scripts/
│   │   └── build-tokens.js    # Token build script
│   └── package.json
└── ui/
    ├── src/
    │   ├── components/
    │   │   ├── Button/
    │   │   │   ├── index.ts
    │   │   │   ├── Button.tsx
    │   │   │   ├── Button.css
    │   │   │   ├── Button.test.tsx
    │   │   │   └── Button.stories.tsx
    │   │   └── [OtherComponents]/
    │   ├── utils/
    │   │   ├── index.ts
    │   │   └── cn.ts
    │   └── index.ts            # Package exports
    └── package.json
```

### Import Order

Imports must be organized in this order (enforced by `simple-import-sort`):

```tsx
// 1. Side effect imports (CSS)
import './Component.css';

// 2. Node.js built-ins
import { readFile } from 'node:fs';

// 3. React and third-party packages
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

// 4. Internal packages (@intelation)
import { tokens } from '@intelation/tokens';
import { Button } from '@intelation/ui';

// 5. Parent imports (../)
import { Layout } from '../../components/Layout';

// 6. Sibling imports (./)
import { cn } from './utils';

// 7. Type imports
import type { ButtonProps } from './Button';

// 8. Style imports
import './styles.css';
```

ESLint will automatically sort and fix import order:
```bash
npm run lint -- --fix
```

### Naming Conventions

| Type | Convention | Examples |
|------|-----------|----------|
| **Components** | PascalCase | `Button`, `UserProfile`, `DataTable` |
| **Variables/Functions** | camelCase | `userName`, `handleClick`, `fetchData` |
| **Constants** | UPPER_SNAKE_CASE | `MAX_RETRY_COUNT`, `API_BASE_URL` |
| **CSS Classes** | kebab-case | `button`, `user-profile`, `data-table` |
| **Boolean Functions** | Prefix with is/has/should/can | `isValid`, `hasError`, `shouldRender` |
| **Event Handlers** | `handle*` internal, `on*` for props | `handleClick`, `onSubmit` |
| **TypeScript Interfaces** | PascalCase (no `I` prefix) | `User`, `ButtonProps` |
| **TypeScript Types** | PascalCase | `Status`, `ColorScheme` |

---

## Documentation Standards

### JSDoc Comments

Every exported component and interface must have JSDoc:

```tsx
/**
 * Button component with multiple variants and color schemes
 * 
 * @example
 * ```tsx
 * <Button variant="solid" colorScheme="primary" size="md">
 *   Click me
 * </Button>
 * ```
 * 
 * @example
 * ```tsx
 * <Button variant="outline" loading leftIcon={<Icon />}>
 *   Loading...
 * </Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    // Implementation
  }
);
```

### Prop Documentation

Document all props with descriptions and defaults:

```tsx
export interface ButtonProps {
  /**
   * Button variant
   * @default "solid"
   */
  variant?: "solid" | "outline" | "ghost";
  
  /**
   * Button color scheme
   * @default "primary"
   */
  colorScheme?: "primary" | "secondary" | "success" | "danger";
  
  /**
   * Loading state - shows spinner and disables interaction
   * @default false
   */
  loading?: boolean;
}
```

### Storybook Stories

Every component must have comprehensive Storybook stories:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost'],
      description: 'Visual style of the button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Default story
export const Default: Story = {
  args: {
    children: 'Button',
  },
};

// Variants
export const Variants: Story = {
  render: () => (
    <>
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </>
  ),
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </>
  ),
};

// States
export const States: Story = {
  render: () => (
    <>
      <Button>Default</Button>
      <Button loading>Loading</Button>
      <Button disabled>Disabled</Button>
    </>
  ),
};

// Playground
export const Playground: Story = {
  args: {
    variant: 'solid',
    colorScheme: 'primary',
    size: 'md',
    children: 'Click me',
  },
};
```

### Storybook Story Creation Checklist (CRITICAL)

**Common Issue**: Stories not appearing in Storybook or TypeScript errors referencing `packages/ui/dist/*.d.ts`.

**Root Cause**: TypeScript resolves to compiled `dist/` types instead of source `src/` files, causing type mismatches and missing story files.

**Solution**: Ensure proper path mappings in `apps/storybook/tsconfig.json`.

When adding a Storybook story for a new or updated component:

1. **Story Location**: Always create stories in `apps/storybook/src/stories/` directory
   - Organize by category: `cards/`, `components/`, `forms/`, `layout/`, etc.
   - Do NOT add `.stories.tsx` files inside `packages/*`

2. **Import Syntax**: Use package namespace imports
   ```tsx
   // ✅ CORRECT - Package import
   import { DataCard } from '@intelation/ui';
   
   // ❌ WRONG - Relative import
   import { DataCard } from '../../../../packages/ui/src/components/DataCard';
   ```

3. **TypeScript Path Mappings**: Verify `apps/storybook/tsconfig.json` contains:
   ```jsonc
   {
     "compilerOptions": {
       "paths": {
         "@intelation/ui": ["../../packages/ui/src"],
         "@intelation/ui/*": ["../../packages/ui/*"],
         "@intelation/tokens": ["../../packages/tokens/src"],
         "@intelation/tokens/*": ["../../packages/tokens/*"]
       }
     }
   }
   ```
   
   **Why this matters**: Without the root-level mappings (`@intelation/ui` pointing to `src`), TypeScript resolves imports to the compiled `dist/` folder, which may have stale types or stricter type definitions that cause compilation errors.

4. **Verification Steps**:
   ```bash
   # Check for TypeScript errors
   npm run type-check
   
   # Start Storybook and verify story appears
   npm run storybook
   ```

5. **Troubleshooting**:
   - **Story not showing**: Check file is in `apps/storybook/src/stories/` and has `.stories.tsx` extension
   - **Type errors mentioning `dist/`**: Add root path mappings in step 3 above
   - **Component not found**: Ensure component is exported from `packages/ui/src/index.ts`
   - **Types don't match**: Rebuild packages with `npm run build --filter=@intelation/ui`

**This is now documented and should prevent future story creation issues.**

---

## Performance Best Practices

### Tree-Shaking

**Use named exports** to enable tree-shaking:
```tsx
// Good - tree-shakeable
export { Button } from './Button';
export { Input } from './Input';

// Bad - imports entire namespace
export * as Components from './components';
```

**Avoid namespace imports**:
```tsx
// Good
import { Button, Input } from '@intelation/ui';

// Bad
import * as UI from '@intelation/ui';
```

### Code Splitting

**Lazy load heavy components**:
```tsx
import React, { lazy, Suspense } from 'react';

const Chart = lazy(() => import('./Chart'));

function Dashboard() {
  return (
    <Suspense fallback={<Spinner />}>
      <Chart data={data} />
    </Suspense>
  );
}
```

### Memoization

**Use React.memo for expensive components**:
```tsx
export const ExpensiveComponent = React.memo(({ data }) => {
  // Complex rendering logic
});
```

**Use useMemo for expensive computations**:
```tsx
const sortedData = useMemo(() => {
  return data.sort((a, b) => a.value - b.value);
}, [data]);
```

**Use useCallback for callbacks**:
```tsx
const handleClick = useCallback(() => {
  console.log('Clicked');
}, []);
```

### Bundle Size Monitoring

Monitor bundle sizes in CI:
```bash
npm install --save-dev @size-limit/preset-small-lib
```

Set size limits in `package.json`:
```json
{
  "size-limit": [
    {
      "path": "packages/ui/dist/index.js",
      "limit": "50 KB"
    }
  ]
}
```

---

## Monorepo Management

### Workspace Protocol

Use workspace protocol for internal dependencies:
```json
{
  "dependencies": {
    "@intelation/tokens": "workspace:*",
    "@intelation/ui": "workspace:*"
  }
}
```

### Turborepo Commands

**Filter specific packages**:
```bash
# Build only tokens package
npm run build --filter=@intelation/tokens

# Run only UI tests
npm run test --filter=@intelation/ui

# Dev mode for specific app
npm run dev --filter=storybook
```

**Parallel execution**:
```bash
# Run tests in parallel across all packages
npm run test --parallel
```

### Turbo Pipeline Configuration

The `turbo.json` defines task dependencies:

```json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],  // Wait for dependencies to build first
      "outputs": ["dist/**"]
    },
    "test": {
      "dependsOn": ["build"],   // Run after build
      "outputs": ["coverage/**"]
    },
    "dev": {
      "cache": false,           // Don't cache dev servers
      "persistent": true         // Keep running
    }
  }
}
```

### Shared Configurations

All packages extend from root configs:

**TypeScript**:
```json
// packages/ui/tsconfig.json
{
  "extends": "../../tsconfig.base.json"
}
```

**ESLint**:
```javascript
// packages/ui/.eslintrc.cjs
module.exports = {
  extends: ['../../.eslintrc.js', 'plugin:react/recommended']
};
```

---

## Release Process

### Using Changesets

**1. Create a changeset** for each change:
```bash
npm run changeset
```

This will prompt you to:
- Select which packages changed
- Select change type (major/minor/patch)
- Write a summary of the changes

**2. Commit the changeset**:
```bash
git add .changeset/
git commit -m "docs: add changeset for Button component"
```

**3. Version packages** (maintainers only):
```bash
npm run version-packages
```

This consumes changesets and updates package versions.

**4. Publish packages** (maintainers only):
```bash
npm run release
```

This builds and publishes packages to npm.

### Semantic Versioning

Follow [Semantic Versioning 2.0.0](https://semver.org/):

- **Major (1.0.0 → 2.0.0)**: Breaking changes
  - Removed or renamed exports
  - Changed component APIs
  - Removed deprecated features

- **Minor (1.0.0 → 1.1.0)**: New features (backwards compatible)
  - New components
  - New props or variants
  - New utility functions

- **Patch (1.0.0 → 1.0.1)**: Bug fixes
  - Fix component bugs
  - Fix TypeScript types
  - Update documentation

---

## Common Pitfalls to Avoid

### Don't Do This

| Anti-Pattern | Why It's Bad | Do This Instead |
|--------------|--------------|-------------------|
| Hardcoding values | Not themeable, inconsistent | **Always use design tokens** |
| Using non-existent tokens | Build errors, broken styles | **Verify tokens exist first** |
| Using `any` type | Loses type safety | Use proper types or `unknown` |
| Prop drilling | Hard to maintain | Use Context API |
| Boolean props for variants | Not scalable | Use string enums |
| Inline functions in render | Performance issues | Use `useCallback` |
| Missing ARIA attributes | Inaccessible | Add proper ARIA |
| `<div onClick>` buttons | Not accessible | Use `<button>` |
| Removing focus indicators | Keyboard users can't navigate | Keep visible focus |
| Not forwarding refs | Can't be composed | Always use `forwardRef` |
| Dynamic Tailwind classes | Purged in production | Use complete class names |

### Examples

**Hardcoding values (Bad)**:
```tsx
<div style={{ padding: '16px', color: '#3b82f6' }}>
```

**Using tokens (Good)**:
```tsx
<div className="p-4 text-primary">
```

---

**Using non-existent tokens (Bad)**:
```css
.button {
  background: var(--color-background-hover);  /* Doesn't exist */
  color: var(--color-text-disabled);          /* Doesn't exist */
}
```

**Using verified tokens (Good)**:
```css
.button {
  background: var(--color-background-secondary);  /* Exists */
  color: var(--color-text-tertiary);              /* Exists */
}
```

---

**Using `any` type (Bad)**:
```tsx
const handleChange = (value: any) => {
  setValue(value);
};
```

**Proper typing (Good)**:
```tsx
const handleChange = (value: string) => {
  setValue(value);
};
```

---

**Prop drilling (Bad)**:
```tsx
<App theme={theme}>
  <Header theme={theme}>
    <Logo theme={theme} />
  </Header>
</App>
```

**Using Context (Good)**:
```tsx
<ThemeProvider theme={theme}>
  <App>
    <Header>
      <Logo />
    </Header>
  </App>
</ThemeProvider>
```

---

**Boolean props for variants (Bad)**:
```tsx
<Button primary secondary large small />
```

**String enums (Good)**:
```tsx
<Button variant="primary" size="lg" />
```

---

**Inline functions (Bad)**:
```tsx
{items.map(item => (
  <Item key={item.id} onClick={() => handleClick(item)} />
))}
```

**Memoized callbacks (Good)**:
```tsx
const handleItemClick = useCallback((item) => {
  handleClick(item);
}, [handleClick]);

{items.map(item => (
  <Item key={item.id} onClick={() => handleItemClick(item)} />
))}
```

---

**Div button (Bad)**:
```tsx
<div onClick={handleClick} className="button">
  Click me
</div>
```

**Semantic button (Good)**:
```tsx
<button onClick={handleClick} className="button">
  Click me
</button>
```

---

**Dynamic Tailwind classes (Bad)**:
```tsx
const color = 'blue';
<div className={`bg-${color}-500`}>  {/* Won't work! */}
```

**Complete class names (Good)**:
```tsx
const colorClass = color === 'blue' ? 'bg-blue-500' : 'bg-red-500';
<div className={colorClass}>
```

---

## Quick Reference Checklists

### New Component Checklist

Before submitting a PR with a new component:

- [ ] Component uses `forwardRef` and sets `displayName`
- [ ] Props interface extends appropriate HTML attributes
- [ ] All props have JSDoc comments with descriptions
- [ ] Default values provided for optional props
- [ ] Component uses BEM class naming convention
- [ ] **Styles use ONLY verified CSS custom properties from tokens**
- [ ] **No hardcoded values (colors, sizes)**
- [ ] **All tokens verified to exist in `packages/tokens/css/tokens.css`**
- [ ] ARIA attributes added for accessibility
- [ ] Keyboard navigation implemented (if interactive)
- [ ] Component is fully typed with no `any`
- [ ] Unit tests written (80%+ coverage)
- [ ] Accessibility tests included
- [ ] Storybook story created with variants
- [ ] Component exported from package `index.ts`
- [ ] README updated if needed
- [ ] Changeset created

### New Token Checklist

Before adding new design tokens:

- [ ] Token used in 3+ places or represents design decision
- [ ] Token has descriptive, semantic name
- [ ] Added to correct category in `base.json` or `semantic.json`
- [ ] Uses token references where applicable (`{color.brand.500}`)
- [ ] Tokens rebuilt: `npm run tokens:build`
- [ ] Generated files verified (CSS, SCSS, JS, TS)
- [ ] Tested in Storybook
- [ ] Documentation updated if needed
- [ ] Changeset created

### Pull Request Checklist

Before creating a pull request:

- [ ] Code follows all guidelines in this document
- [ ] All tests pass: `npm test`
- [ ] No linting errors: `npm run lint`
- [ ] No type errors: `npm run type-check`
- [ ] Storybook builds: `npm run build-storybook`
- [ ] Changeset created: `npm run changeset`
- [ ] Documentation updated
- [ ] Commit messages follow conventional commits
- [ ] PR description explains changes clearly
- [ ] Breaking changes clearly documented

### Code Review Checklist

When reviewing pull requests:

- [ ] Code follows project conventions
- [ ] Components are accessible (ARIA, keyboard, semantics)
- [ ] Tests are comprehensive and meaningful
- [ ] Performance considerations addressed
- [ ] **No hardcoded values - all use verified tokens**
- [ ] **All CSS custom properties exist in tokens.css**
- [ ] **No invented/non-existent token names**
- [ ] TypeScript types are correct and strict
- [ ] Documentation is clear and accurate
- [ ] Changeset describes changes appropriately
- [ ] No security vulnerabilities introduced
- [ ] Bundle size impact is acceptable

---

## Getting Help

### Resources

- **Documentation**: Check the [README.md](./readme.md)
- **Best Practices**: This CONTRIBUTING.md file
- **API Reference**: Run Storybook (`npm run storybook`)
- **Component Examples**: See `apps/storybook/src/*.stories.tsx`

### Questions?

- Open a GitHub issue with the `question` label
- Join team discussions in project channels
- Review closed PRs for examples

---

## License

By contributing to this project, you agree that your contributions will be licensed under the project's license.

---

**Thank you for contributing to Intelation Design System! 🎉**

Following these guidelines helps maintain code quality, consistency, and accessibility across the project. When in doubt, look at existing components for examples, and don't hesitate to ask questions.
