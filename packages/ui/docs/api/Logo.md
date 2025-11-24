# Logo

**Category:** Components

## Description

Logo component for displaying the Intelation brand

## Import

```typescript
import { Logo } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `size` | "sm" \| "md" \| "lg" \| "xl" | ❌ | `md` | Size variant of the logo |
| `variant` | "default" \| "white" \| "dark" | ❌ | `default` | Color variant of the logo |
| `type` | "icon" \| "text" \| "full" | ❌ | `full` | Whether to show only the icon or include text |
| `width` |  | ❌ | - | Custom width for the logo (overrides size) |
| `height` |  | ❌ | - | Custom height for the logo (overrides size) |
| `alt` | string | ❌ | `Intelation` | Alt text for accessibility |
| `clickable` | boolean | ❌ | `false` | Whether the logo should be clickable |
| `onClick` | () => void | ❌ | - | Click handler when clickable is true |
| `loading` | boolean | ❌ | `false` | Whether to show a loading state |

## Examples

### Example 1

```tsx
// Default logo
<Logo />

// White variant for dark backgrounds
<Logo variant="white" />

// Small clickable logo
<Logo size="sm" clickable onClick={() => navigate('/')} />

// Icon only
<Logo type="icon" />
```

## Variants

### Variants

- `default`
- `white`
- `dark`

### Sizes

- `sm`
- `md`
- `lg`
- `xl`

## Accessibility

This component follows WAI-ARIA best practices:

- Semantic HTML elements
- Keyboard navigation support
- ARIA attributes for screen readers
- Focus management

## TypeScript

This component is fully typed. Import the props type:

```typescript
import { Logo, LogoProps } from '@intelation/ui';
```
