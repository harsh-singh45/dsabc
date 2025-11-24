# Grid

**Category:** Components

## Description

Grid component for grid layouts

## Import

```typescript
import { Grid } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `columns` | number | ❌ | - | Number of columns |
| `rows` | "auto" | ❌ | - | Number of rows |
| `gap` | string | ❌ | `4` | Gap between items using spacing tokens |
| `columnGap` | string | ❌ | - | Gap between columns using spacing tokens |
| `rowGap` | string | ❌ | - | Gap between rows using spacing tokens |
| `templateColumns` | string | ❌ | - | Template columns CSS value |
| `templateRows` | string | ❌ | - | Template rows CSS value |
| `as` | keyof JSX.IntrinsicElements | ❌ | `div` | The HTML tag to render |

## Examples

### Example 1

```tsx
<Grid columns={3} gap="6">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Grid>
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
import { Grid, GridProps } from '@intelation/ui';
```
