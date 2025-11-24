# AreaChart

**Category:** Components

## Description

AreaChart component for displaying trends with filled areas

## Import

```typescript
import { AreaChart } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `labels` | string[] | ✅ | - | Labels for the x-axis |
| `datasets` | AreaChartDataset[] | ✅ | - | Array of datasets to display |
| `size` | ChartSize | ❌ | `lg` | Chart size |
| `stacked` | boolean | ❌ | `false` | Enable stacked mode |
| `smooth` | boolean | ❌ | `true` | Enable smooth curves (bezier) |
| `showPoints` | boolean | ❌ | `true` | Show data points on lines |
| `showGrid` | boolean | ❌ | `true` | Show grid lines |
| `showLegend` | boolean | ❌ | `true` | Show legend |
| `showExportControls` | boolean | ❌ | `false` | Show export controls (PNG/SVG) |
| `xAxis` | {
    label?: string;
    display?: boolean;
  } | ❌ | - | X-axis configuration |
| `yAxis` | {
    label?: string;
    display?: boolean;
    min?: number;
    max?: number;
  } | ❌ | - | Y-axis configuration |
| `onExport` | (format: ExportFormat) => void | ❌ | - | Callback when export button is clicked |
| `className` | string | ❌ | - | Custom class name |
| `'aria-label'` | string | ❌ | - | Accessible label for the chart |

## Examples

### Example 1

```tsx
<AreaChart
  labels={['Jan', 'Feb', 'Mar', 'Apr']}
  datasets={[
    { label: 'Revenue', data: [100, 120, 140, 160] },
    { label: 'Expenses', data: [80, 90, 95, 100] },
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
import { AreaChart, AreaChartProps } from '@intelation/ui';
```
