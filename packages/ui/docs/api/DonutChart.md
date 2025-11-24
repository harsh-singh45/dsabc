# DonutChart

**Category:** Components

## Description

DonutChart - A customizable donut chart with optional center text

## Import

```typescript
import { DonutChart } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | ChartDataPoint[] | ✅ | - | Chart data array |
| `centerText` | CenterTextConfig | ❌ | - | Center text configuration |
| `size` | ChartSize | ❌ | `md` | Size of the chart |
| `defaultColors` | string[] | ❌ | - | Default colors if not specified in data |
| `showLegend` | boolean | ❌ | `false` | Show legend |
| `animated` | boolean | ❌ | `true` | Enable animations |
| `onSegmentClick` | (segment: ChartDataPoint, index: number) => void | ❌ | - | Callback when segment is clicked |
| `className` | string | ❌ | - | Additional CSS classes |
| `'aria-label'` | string | ❌ | - | Custom aria-label for accessibility |

## Examples

### Example 1

```tsx
<DonutChart
  data={[
    { label: 'Active', value: 30 },
    { label: 'Healthy', value: 25 },
  ]}
  centerText={{ value: '93.1%', label: 'Healthy' }}
/>
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
import { DonutChart, DonutChartProps } from '@intelation/ui';
```
