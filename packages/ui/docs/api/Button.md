# Button

**Category:** Components

## Description

Button component with multiple variants and color schemes

## Import

```typescript
import { Button } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `variant` | "solid" \| "outline" \| "ghost" \| "link" | ❌ | `solid` | Button variant |
| `colorScheme` | "primary" \| "secondary" \| "success" \| "warning" \| "danger" \| "violet" | ❌ | `primary` | Button color scheme |
| `size` | "sm" \| "md" \| "lg" | ❌ | `md` | Button size |
| `fullWidth` | boolean | ❌ | `false` | Full width button |
| `loading` | boolean | ❌ | `false` | Loading state |
| `leftIcon` | React.ReactNode | ❌ | - | Icon to display on the left |
| `rightIcon` | React.ReactNode | ❌ | - | Icon to display on the right |
| `as` | "button" \| "a" | ❌ | `button` | The HTML tag to render |

## Examples

### Example 1

```tsx
<Button variant="solid" colorScheme="primary" size="md">
  Click me
</Button>
```

## Variants

### Variants

- `solid`
- `outline`
- `ghost`
- `link`

### Sizes

- `sm`
- `md`
- `lg`

### Color Schemes

- `primary`
- `secondary`
- `success`
- `warning`
- `danger`
- `violet`

## Accessibility

This component follows WAI-ARIA best practices:

- Semantic HTML elements
- Keyboard navigation support
- ARIA attributes for screen readers
- Focus management

## TypeScript

This component is fully typed. Import the props type:

```typescript
import { Button, ButtonProps } from '@intelation/ui';
```
