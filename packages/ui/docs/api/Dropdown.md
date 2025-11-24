# Dropdown

**Category:** Components

## Description

Dropdown component with tonal styling

## Import

```typescript
import { Dropdown } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `options` | DropdownOption[] | ❌ | `[` | Available options for the dropdown |
| `defaultValue` | string | ❌ | `last-30-days` | Default selected value |
| `value` | string | ❌ | - | Controlled selected value |
| `onChange` | (value: string) => void | ❌ | - | Callback when selection changes |
| `placeholder` | string | ❌ | - | Placeholder text when no value is selected |
| `disabled` | boolean | ❌ | `false` | Whether the dropdown is disabled |
| `variant` | "tonal" \| "outlined" \| "filled" | ❌ | `tonal` | Dropdown variant style |
| `size` | "small" \| "medium" \| "large" | ❌ | `medium` | Size variant |
| `width` |  | ❌ | `auto` | Width of the dropdown |

## Examples

### Example 1

```tsx
<Dropdown 
  defaultValue="last-30-days"
  onChange={(value) => console.log(value)}
/>
```

## Variants

### Variants

- `tonal`
- `outlined`
- `filled`

### Sizes

- `small`
- `medium`
- `large`

## Accessibility

This component follows WAI-ARIA best practices:

- Semantic HTML elements
- Keyboard navigation support
- ARIA attributes for screen readers
- Focus management

## TypeScript

This component is fully typed. Import the props type:

```typescript
import { Dropdown, DropdownProps } from '@intelation/ui';
```
