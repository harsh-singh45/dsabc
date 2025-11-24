# Select

**Category:** Components

## Description

Select component for dropdown selection with label and validation states

## Import

```typescript
import { Select } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `label` | string | ❌ | - | Select label |
| `helperText` | string | ❌ | - | Helper text below the select |
| `error` | string | ❌ | - | Error message (shows error state) |
| `success` | string | ❌ | - | Success message (shows success state) |
| `size` | "sm" \| "md" \| "lg" | ❌ | `md` | Select size |
| `fullWidth` | boolean | ❌ | `false` | Full width select |
| `options` | SelectOption[] | ❌ | - | Options array |
| `placeholder` | string | ❌ | - | Placeholder option text |
| `containerClassName` | string | ❌ | - | Container className |

## Examples

### Example 1

```tsx
<Select 
  label="Country" 
  placeholder="Select country..."
  options={[
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' }
  ]}
/>
```

### Example 2

```tsx
<Select label="Category" error="Category is required">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</Select>
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
import { Select, SelectProps } from '@intelation/ui';
```
