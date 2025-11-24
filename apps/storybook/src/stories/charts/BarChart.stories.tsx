import type { Meta, StoryObj } from '@storybook/react';

import { BarChart } from '../../../../../packages/ui/src/components/charts/BarChart';

const meta: Meta<typeof BarChart> = {
  title: 'Charts/BarChart',
  component: BarChart,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'BarChart component for displaying categorical data comparisons. Supports vertical/horizontal orientation, stacked mode, and grouped datasets.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BarChart>;

// Sample data
const monthlyLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const quarterlyLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
const productLabels = ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'];

export const Default: Story = {
  args: {
    labels: quarterlyLabels,
    datasets: [
      { label: 'Sales', data: [120, 150, 180, 200] },
      { label: 'Costs', data: [80, 90, 100, 110] },
    ],
    size: 'lg',
  },
};

export const WithExportControls: Story = {
  args: {
    labels: quarterlyLabels,
    datasets: [
      { label: 'Sales', data: [120, 150, 180, 200] },
      { label: 'Costs', data: [80, 90, 100, 110] },
    ],
    size: 'lg',
    showExportControls: true,
  },
};

export const SingleDataset: Story = {
  args: {
    labels: monthlyLabels,
    datasets: [{ label: 'Revenue', data: [100, 120, 140, 160, 180, 200] }],
    size: 'lg',
  },
};

export const HorizontalBars: Story = {
  args: {
    labels: productLabels,
    datasets: [{ label: 'Sales', data: [150, 120, 180, 90, 200] }],
    size: 'lg',
    orientation: 'horizontal',
  },
};

export const StackedBars: Story = {
  args: {
    labels: quarterlyLabels,
    datasets: [
      { label: 'Product A', data: [50, 60, 70, 80] },
      { label: 'Product B', data: [40, 50, 60, 70] },
      { label: 'Product C', data: [30, 40, 50, 60] },
    ],
    size: 'lg',
    stacked: true,
  },
};

export const StackedHorizontal: Story = {
  args: {
    labels: ['Team A', 'Team B', 'Team C', 'Team D'],
    datasets: [
      { label: 'Completed', data: [50, 60, 45, 70] },
      { label: 'In Progress', data: [20, 15, 25, 10] },
      { label: 'Planned', data: [30, 25, 30, 20] },
    ],
    size: 'lg',
    orientation: 'horizontal',
    stacked: true,
  },
};

export const GroupedBars: Story = {
  args: {
    labels: quarterlyLabels,
    datasets: [
      { label: '2023', data: [100, 120, 140, 160] },
      { label: '2024', data: [120, 150, 180, 200] },
    ],
    size: 'lg',
    stacked: false,
  },
};

export const CustomColors: Story = {
  args: {
    labels: quarterlyLabels,
    datasets: [
      { label: 'Sales', data: [120, 150, 180, 200], color: '#10b981' },
      { label: 'Costs', data: [80, 90, 100, 110], color: '#ef4444' },
      { label: 'Profit', data: [40, 60, 80, 90], color: '#3b82f6' },
    ],
    size: 'lg',
  },
};

export const WithAxisLabels: Story = {
  args: {
    labels: quarterlyLabels,
    datasets: [
      { label: 'Revenue', data: [120, 150, 180, 200] },
      { label: 'Expenses', data: [80, 90, 100, 110] },
    ],
    size: 'lg',
    xAxis: { label: 'Quarter' },
    yAxis: { label: 'Amount ($K)' },
  },
};

export const CustomYAxisRange: Story = {
  args: {
    labels: quarterlyLabels,
    datasets: [{ label: 'Performance (%)', data: [65, 72, 68, 85] }],
    size: 'lg',
    yAxis: { label: 'Performance', min: 0, max: 100 },
  },
};

export const NoGrid: Story = {
  args: {
    labels: quarterlyLabels,
    datasets: [
      { label: 'Sales', data: [120, 150, 180, 200] },
      { label: 'Costs', data: [80, 90, 100, 110] },
    ],
    size: 'lg',
    showGrid: false,
  },
};

export const NoLegend: Story = {
  args: {
    labels: monthlyLabels,
    datasets: [{ label: 'Revenue', data: [100, 120, 140, 160, 180, 200] }],
    size: 'lg',
    showLegend: false,
  },
};

export const MinimalStyle: Story = {
  args: {
    labels: quarterlyLabels,
    datasets: [{ label: 'Data', data: [120, 150, 180, 200] }],
    size: 'lg',
    showGrid: false,
    showLegend: false,
  },
};

export const MultipleDataSeries: Story = {
  args: {
    labels: monthlyLabels,
    datasets: [
      { label: 'Direct Sales', data: [50, 60, 70, 80, 90, 100] },
      { label: 'Online Sales', data: [40, 50, 60, 70, 80, 90] },
      { label: 'Partner Sales', data: [30, 40, 50, 60, 70, 80] },
      { label: 'Referral Sales', data: [20, 30, 40, 50, 60, 70] },
    ],
    size: 'lg',
  },
};

export const DepartmentBudget: Story = {
  args: {
    labels: ['Engineering', 'Marketing', 'Sales', 'Operations', 'HR'],
    datasets: [
      { label: 'Allocated', data: [500, 300, 400, 250, 150], color: '#3b82f6' },
      { label: 'Spent', data: [480, 320, 380, 240, 140], color: '#ef4444' },
    ],
    size: 'lg',
    orientation: 'horizontal',
    xAxis: { label: 'Budget ($K)' },
    yAxis: { label: 'Department' },
  },
};

export const YearlyComparison: Story = {
  args: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      { label: '2023', data: [100, 110, 105, 115, 120, 130, 125, 135, 140, 145, 150, 160] },
      { label: '2024', data: [120, 130, 125, 140, 150, 165, 160, 175, 180, 190, 200, 210] },
    ],
    size: 'xl',
    xAxis: { label: 'Month' },
    yAxis: { label: 'Sales ($K)' },
  },
};

export const ProductPerformance: Story = {
  args: {
    labels: productLabels,
    datasets: [
      { label: 'Q1', data: [120, 150, 100, 180, 140], color: '#8b5cf6' },
      { label: 'Q2', data: [140, 160, 110, 200, 160], color: '#06b6d4' },
      { label: 'Q3', data: [160, 180, 130, 220, 180], color: '#10b981' },
      { label: 'Q4', data: [180, 200, 150, 240, 200], color: '#f59e0b' },
    ],
    size: 'lg',
    xAxis: { label: 'Products' },
    yAxis: { label: 'Units Sold' },
  },
};

export const NegativeValues: Story = {
  args: {
    labels: quarterlyLabels,
    datasets: [{ label: 'Profit/Loss', data: [100, -50, 150, -30] }],
    size: 'lg',
    yAxis: { label: 'Amount ($K)', min: -100, max: 200 },
  },
};

export const SizeVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '600px' }}>
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Extra Small (xs)</h3>
        <BarChart
          labels={quarterlyLabels}
          datasets={[{ label: 'Sales', data: [120, 150, 180, 200] }]}
          size="xs"
        />
      </div>
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Small (sm)</h3>
        <BarChart
          labels={quarterlyLabels}
          datasets={[{ label: 'Sales', data: [120, 150, 180, 200] }]}
          size="sm"
        />
      </div>
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Medium (md)</h3>
        <BarChart
          labels={quarterlyLabels}
          datasets={[{ label: 'Sales', data: [120, 150, 180, 200] }]}
          size="md"
        />
      </div>
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Large (lg)</h3>
        <BarChart
          labels={quarterlyLabels}
          datasets={[{ label: 'Sales', data: [120, 150, 180, 200] }]}
          size="lg"
        />
      </div>
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Extra Large (xl)</h3>
        <BarChart
          labels={quarterlyLabels}
          datasets={[{ label: 'Sales', data: [120, 150, 180, 200] }]}
          size="xl"
        />
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    labels: quarterlyLabels,
    datasets: [
      { label: 'Series 1', data: [120, 150, 180, 200] },
      { label: 'Series 2', data: [80, 90, 100, 110] },
    ],
    size: 'lg',
    orientation: 'vertical',
    stacked: false,
    showGrid: true,
    showLegend: true,
    showExportControls: false,
  },
};
