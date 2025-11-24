# Box

**Category:** Components

## Description

Box component - A flexible container component for layouts

## Import

```typescript
import { Box } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `as` | keyof JSX.IntrinsicElements | ❌ | `div` | The HTML tag to render |
| `padding` | string | ❌ | - | Padding value using spacing tokens |
| `margin` | string | ❌ | - | Margin value using spacing tokens |
| `bg` | string | ❌ | - | Background color using color tokens |
| `borderRadius` | string | ❌ | - | Border radius using border radius tokens |
| `border` | string | ❌ | - | Border style |
| `width` | string | ❌ | - | Width |
| `height` | string | ❌ | - | Height |
| `display` | string | ❌ | - | Display property |

## Examples

### Example 1

```tsx
<Box padding="4" bg="gray-100" borderRadius="md">
  Content
</Box>
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
import { Box, BoxProps } from '@intelation/ui';
```
