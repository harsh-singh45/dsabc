# FormField

**Category:** Components

## Description

FormField component provides consistent layout and styling for form inputs

## Import

```typescript
import { FormField } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `label` | string | ❌ | - | Label text for the form field |
| `labelPosition` | "top" \| "left" \| "floating" | ❌ | `top` | Label position |
| `helperText` | string | ❌ | - | Helper text displayed below the field |
| `error` | string | ❌ | - | Error message (sets error state and displays message) |
| `success` | string | ❌ | - | Success message (sets success state and displays message) |
| `required` | boolean | ❌ | `false` | Whether the field is required |
| `size` | "sm" \| "md" \| "lg" | ❌ | `md` | Size of the form field |
| `htmlFor` | string | ❌ | - | ID for the form field (links label to input) |
| `children` | React.ReactNode | ✅ | - | Form field content (input, select, textarea, etc.) |
| `labelClassName` | string | ❌ | - | Custom label className |
| `disabled` | boolean | ❌ | `false` | Disable the form field |

## Examples

### Example 1

```tsx
<FormField label="Email" required error="Email is required">
  <Input type="email" />
</FormField>
```

### Example 2

```tsx
<FormField 
  label="Username" 
  labelPosition="left" 
  helperText="Choose a unique username"
  size="lg"
>
  <Input />
</FormField>
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
import { FormField, FormFieldProps } from '@intelation/ui';
```
