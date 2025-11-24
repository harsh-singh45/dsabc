# Switch

**Category:** Components

## Description

Switch component for toggling between two states

## Import

```typescript
import { Switch } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `checked` | boolean | ❌ | - | Whether the switch is checked (controlled mode) |
| `defaultChecked` | boolean | ❌ | `false` | Default checked state (uncontrolled mode) |
| `onChange` | (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void | ❌ | - | Callback when switch state changes |
| `size` | "sm" \| "md" \| "lg" | ❌ | `md` | Switch size |
| `loading` | boolean | ❌ | `false` | Loading state - shows loading indicator |
| `label` | string | ❌ | - | Label text for the switch |
| `labelPosition` | "left" \| "right" | ❌ | `right` | Label position |
| `disabled` | boolean | ❌ | `false` | Disabled state |
| `id` | string | ❌ | - | ID for the switch input |
| `containerClassName` | string | ❌ | - | Container className |

## Examples

### Example 1

```tsx
<Switch label="Enable notifications" />
```

### Example 2

```tsx
<Switch 
  checked={enabled}
  onChange={(checked) => setEnabled(checked)}
  size="lg"
/>
```

## Variants

### Sizes

- `sm`
- `md`
- `lg`

## Accessibility

This component follows WAI-ARIA best practices:

- Semantic HTML elements
- Keyboard navigation support
- ARIA attributes for screen readers
- Focus management

## TypeScript

This component is fully typed. Import the props type:

```typescript
import { Switch, SwitchProps } from '@intelation/ui';
```
