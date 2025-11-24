# Checkbox

**Category:** Components

## Description

Checkbox component for boolean selection with label

## Import

```typescript
import { Checkbox } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `label` | string | ❌ | - | Checkbox label |
| `helperText` | string | ❌ | - | Helper text below the checkbox |
| `error` | string | ❌ | - | Error message (shows error state) |
| `size` | "sm" \| "md" \| "lg" | ❌ | `md` | Checkbox size |
| `containerClassName` | string | ❌ | - | Container className |

## Examples

### Example 1

```tsx
<Checkbox 
  label="Accept terms and conditions" 
  name="terms"
/>
```

### Example 2

```tsx
<Checkbox 
  label="Subscribe to newsletter" 
  helperText="We'll send you weekly updates"
  defaultChecked
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
import { Checkbox, CheckboxProps } from '@intelation/ui';
```
