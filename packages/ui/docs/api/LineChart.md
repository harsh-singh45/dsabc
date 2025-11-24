# LineChart

**Category:** Components

## Description

LineChart component for displaying time series and continuous data

## Import

```typescript
import { LineChart } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `labels` | string[] | ✅ | - | Labels for the x-axis |
| `datasets` | LineChartDataset[] | ✅ | - | Array of datasets to display |
| `size` | ChartSize | ❌ | `lg` | Chart size |
| `showGrid` | boolean | ❌ | `true` | Show grid lines |
| `showPoints` | boolean | ❌ | `true` | Show data points on the line |
| `smooth` | boolean | ❌ | `true` | Use smooth curved lines instead of straight lines |
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
<LineChart
  labels={['Jan', 'Feb', 'Mar', 'Apr']}
  datasets={[
    { label: 'Sales', data: [120, 150, 180, 200] },
    { label: 'Costs', data: [80, 90, 100, 110] },
  ]}
  size="lg"
  showGrid={true}
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
import { LineChart, LineChartProps } from '@intelation/ui';
```
