# PieChart

**Category:** Components

## Description

PieChart component for displaying part-to-whole relationships

## Import

```typescript
import { PieChart } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `data` | PieChartDataPoint[] | ✅ | - | Data points with labels, values, and optional colors |
| `size` | ChartSize | ❌ | `lg` | Chart size |
| `donut` | boolean | ❌ | `false` | Enable donut mode (center cutout) |
| `showPercentages` | boolean | ❌ | `false` | Show percentage labels on slices |
| `showLegend` | boolean | ❌ | `true` | Show legend |
| `showExportControls` | boolean | ❌ | `false` | Show export controls (PNG/SVG) |
| `onExport` | (format: ExportFormat) => void | ❌ | - | Callback when export button is clicked |
| `className` | string | ❌ | - | Custom class name |
| `'aria-label'` | string | ❌ | - | Accessible label for the chart |

## Examples

### Example 1

```tsx
<PieChart
  data={[
    { label: 'Product A', value: 30 },
    { label: 'Product B', value: 45 },
    { label: 'Product C', value: 25 },
  ]}
  size="lg"
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
import { PieChart, PieChartProps } from '@intelation/ui';
```
