# @intelation/tokens

Design tokens for the Intelation design system. Provides a centralized token system for colors, typography, spacing, shadows, and other design values used across all Intelation applications.

## Installation

```bash
npm install @intelation/tokens
```

## Token Categories

### Colors
- **Brand Colors**: Primary violet, secondary grays
- **Semantic Colors**: Success (green), warning (yellow), danger (red), info (blue)
- **UI Colors**: Backgrounds, borders, text colors
- **Chart Colors**: Data visualization palette
- **Custom Colors**: Navigation, header, footer

### Typography
- **Font Families**: Sans-serif, monospace
- **Font Sizes**: xs, sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl
- **Font Weights**: light (300), regular (400), medium (500), semibold (600), bold (700)
- **Line Heights**: Optimized for readability

### Spacing
- **Scale**: xs (4px), sm (8px), md (16px), lg (24px), xl (32px), 2xl (48px), 3xl (64px), 4xl (96px)
- **Usage**: Padding, margin, gaps

### Shadows
- **Levels**: sm, md, lg, xl
- **Usage**: Cards, modals, dropdowns

### Border Radius
- **Sizes**: sm (4px), md (8px), lg (12px), xl (16px), full (9999px)

### Layout
- **Max Widths**: Container sizes, content widths
- **Breakpoints**: sm, md, lg, xl, 2xl
- **Z-Index**: Layering system

## Usage

### CSS Variables

Import the generated CSS file:

```css
@import '@intelation/tokens/css/tokens.css';
@import '@intelation/tokens/css/typography.css';

.my-component {
  color: var(--color-violet);
  background: var(--background-primary);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  font-size: var(--fontSize-md);
  font-weight: var(--fontWeight-medium);
}
```

### TypeScript

Import tokens as JavaScript objects:

```typescript
import { colors, spacing, typography } from '@intelation/tokens';

const styles = {
  color: colors.violet,
  padding: spacing.md,
  fontSize: typography.fontSize.md
};
```

### Tailwind CSS

Extend your Tailwind config with the token system:

```javascript
// tailwind.config.js
import tokens from '@intelation/tokens/tailwind';

export default {
  presets: [tokens],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  // Your custom config
};
```

Use in components:

```tsx
<div className="text-violet bg-background-primary p-md rounded-md shadow-md">
  Styled with Intelation tokens
</div>
```

### SCSS

Import SCSS variables:

```scss
@import '@intelation/tokens/scss/tokens.scss';

.my-component {
  color: $color-violet;
  background: $background-primary;
  padding: $spacing-md;
  border-radius: $radius-md;
}
```

## Token Structure

Tokens are organized in two layers:

1. **Base Tokens** (`src/base.json`): Raw values (hex colors, pixel sizes)
2. **Semantic Tokens** (`src/semantic.json`): References to base tokens with semantic meaning

Example:

```json
// base.json
{
  "purple": {
    "500": "#696CFF"
  }
}

// semantic.json
{
  "color": {
    "violet": {
      "$value": "{purple.500}",
      "$type": "color"
    }
  }
}
```

This generates:

```css
/* tokens.css */
:root {
  --color-violet: #696CFF;
}
```

## Available Exports

```typescript
// CSS variables
import '@intelation/tokens/css/tokens.css';
import '@intelation/tokens/css/typography.css';

// SCSS variables
import '@intelation/tokens/scss/tokens.scss';

// TypeScript objects
import { colors, spacing, typography, shadows, radius } from '@intelation/tokens';

// Tailwind preset
import tokens from '@intelation/tokens/tailwind';
```

## Development

```bash
# Build tokens
npm run build

# Watch mode
npm run dev

# Type checking
npm run type-check
```

## License

Private package for Intelation use.
