# Input

**Category:** Components

## Description

Input component for text input with label, validation states, and icons

## Import

```typescript
import { Input } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `label` | string | ❌ | - | Input label |
| `helperText` | string | ❌ | - | Helper text below the input |
| `error` | string | ❌ | - | Error message (shows error state) |
| `success` | string | ❌ | - | Success message (shows success state) |
| `size` | "sm" \| "md" \| "lg" | ❌ | `md` | Input size |
| `fullWidth` | boolean | ❌ | `false` | Full width input |
| `leftIcon` | React.ReactNode | ❌ | - | Left icon element |
| `rightIcon` | React.ReactNode | ❌ | - | Right icon element |
| `containerClassName` | string | ❌ | - | Container className |

## Examples

### Example 1

```tsx
<Input 
  label="Email" 
  placeholder="Enter email..." 
  type="email"
/>
```

### Example 2

```tsx
<Input 
  label="Username" 
  error="Username is required"
  leftIcon={<UserIcon />}
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
import { Input, InputProps } from '@intelation/ui';
```
