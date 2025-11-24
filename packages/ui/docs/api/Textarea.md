# Textarea

**Category:** Components

## Description

Textarea component for multiline text input with label and validation states

## Import

```typescript
import { Textarea } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `label` | string | ❌ | - | Textarea label |
| `helperText` | string | ❌ | - | Helper text below the textarea |
| `error` | string | ❌ | - | Error message (shows error state) |
| `success` | string | ❌ | - | Success message (shows success state) |
| `size` | "sm" \| "md" \| "lg" | ❌ | `md` | Textarea size |
| `fullWidth` | boolean | ❌ | `false` | Full width textarea |
| `containerClassName` | string | ❌ | - | Container className |
| `resize` | "none" \| "vertical" \| "horizontal" \| "both" | ❌ | `vertical` | Resize behavior |

## Examples

### Example 1

```tsx
<Textarea 
  label="Message" 
  placeholder="Enter your message..." 
  rows={4}
/>
```

### Example 2

```tsx
<Textarea 
  label="Description" 
  error="Description is required"
  rows={6}
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
import { Textarea, TextareaProps } from '@intelation/ui';
```
