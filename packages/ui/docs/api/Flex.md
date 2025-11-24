# Flex

**Category:** Components

## Description

Flex component for flexbox layouts

## Import

```typescript
import { Flex } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `direction` | "row" \| "column" \| "row-reverse" \| "column-reverse" | ❌ | `row` | Flex direction |
| `gap` | string | ❌ | `4` | Gap between items using spacing tokens |
| `align` | "start" \| "center" \| "end" \| "stretch" \| "baseline" | ❌ | `stretch` | Align items |
| `justify` | "start" \| "center" \| "end" \| "between" \| "around" \| "evenly" | ❌ | `start` | Justify content |
| `wrap` | "wrap" \| "nowrap" \| "wrap-reverse" | ❌ | `false` | Flex wrap |
| `as` | keyof JSX.IntrinsicElements | ❌ | `div` | The HTML tag to render |

## Examples

### Example 1

```tsx
<Flex direction="row" gap="4" align="center" justify="between">
  <Button>Left</Button>
  <Button>Right</Button>
</Flex>
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
import { Flex, FlexProps } from '@intelation/ui';
```
