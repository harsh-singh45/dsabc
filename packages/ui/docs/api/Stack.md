# Stack

**Category:** Components

## Description

Stack component for layout and spacing

## Import

```typescript
import { Stack } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `direction` | "horizontal" \| "vertical" | ❌ | `vertical` | The direction of the stack |
| `spacing` |  | ❌ | `24px` | The spacing between stack items (in pixels) |
| `align` | "start" \| "center" \| "end" \| "stretch" | ❌ | `stretch` | The alignment of items in the stack |
| `justify` | "start" \| "center" \| "end" \| "between" \| "around" \| "evenly" | ❌ | `start` | The justification of items in the stack |
| `wrap` | boolean | ❌ | `false` | Whether items should wrap to the next line |
| `as` | keyof JSX.IntrinsicElements | ❌ | `div` | The HTML tag to render |

## Examples

### Example 1

```tsx
<Stack direction="horizontal" spacing="16px" align="center">
  <Button>First</Button>
  <Button>Second</Button>
</Stack>
```

## Accessibility

This component follows WAI-ARIA best practices:

- Semantic HTML elements
- Keyboard navigation support
- ARIA attributes for screen readers
- Focus management

## TypeScript

This component is fully typed. Import the props type:

```typescript
import { Stack, StackProps } from '@intelation/ui';
```
