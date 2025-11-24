# Radio

**Category:** Components

## Description

Radio component for single selection within a group

## Import

```typescript
import { Radio } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `label` | string | ❌ | - | Radio label |
| `helperText` | string | ❌ | - | Helper text below the radio |
| `error` | string | ❌ | - | Error message (shows error state) |
| `size` | "sm" \| "md" \| "lg" | ❌ | `md` | Radio size |
| `containerClassName` | string | ❌ | - | Container className |

## Examples

### Example 1

```tsx
<Radio 
  label="Option A" 
  name="choice"
  value="a"
/>
<Radio 
  label="Option B" 
  name="choice"
  value="b"
/>
```

### Example 2

```tsx
<Radio 
  label="Premium Plan" 
  helperText="Best value for teams"
  name="plan"
  value="premium"
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
import { Radio, RadioProps } from '@intelation/ui';
```
