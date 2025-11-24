import type { Meta, StoryObj } from '@storybook/react';

import { AreaChart } from '@intelation/ui';

const meta: Meta<typeof AreaChart> = {
  title: 'Charts/AreaChart',
  component: AreaChart,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'AreaChart component for displaying trends with filled areas. Supports stacked mode, smooth curves, and multiple data series.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AreaChart>;

// Sample data
const monthlyLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const quarterlyLabels = ['Q1', 'Q2', 'Q3', 'Q4'];

export const Default: Story = {
  args: {
    labels: quarterlyLabels,
    datasets: [
      { label: 'Revenue', data: [120, 150, 180, 200] },
      { label: 'Expenses', data: [80, 90, 100, 110] },
    ],
    size: 'lg',
  },
};

export const WithExportControls: Story = {
  args: {
    labels: quarterlyLabels,
    datasets: [
      { label: 'Revenue', data: [120, 150, 180, 200] },
      { label: 'Expenses', data: [80, 90, 100, 110] },
    ],
    size: 'lg',
    showExportControls: true,
  },
};

export const SingleSeries: Story = {
  args: {
    labels: monthlyLabels,
    datasets: [{ label: 'Revenue', data: [100, 120, 140, 160, 180, 200] }],
    size: 'lg',
  },
};

export const Stacked: Story = {
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

export const StraightLines: Story = {
  args: {
    labels: quarterlyLabels,
    datasets: [
      { label: 'Revenue', data: [120, 150, 180, 200] },
      { label: 'Expenses', data: [80, 90, 100, 110] },
    ],
    size: 'lg',
    smooth: false,
  },
};

export const WithoutPoints: Story = {
  args: {
    labels: monthlyLabels,
    datasets: [
      { label: 'Series 1', data: [100, 120, 110, 140, 135, 160] },
      { label: 'Series 2', data: [80, 90, 95, 100, 110, 120] },
    ],
    size: 'lg',
    showPoints: false,
  },
};

export const CustomColors: Story = {
  args: {
    labels: quarterlyLabels,
    datasets: [
      { label: 'Revenue', data: [120, 150, 180, 200], color: '#10b981' },
      { label: 'Expenses', data: [80, 90, 100, 110], color: '#ef4444' },
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
      { label: 'Revenue', data: [120, 150, 180, 200] },
      { label: 'Expenses', data: [80, 90, 100, 110] },
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
    showPoints: false,
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

export const StackedRevenue: Story = {
  args: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      { label: 'Product A', data: [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95] },
      { label: 'Product B', data: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85] },
      { label: 'Product C', data: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75] },
    ],
    size: 'lg',
    stacked: true,
    xAxis: { label: 'Month' },
    yAxis: { label: 'Revenue ($K)' },
  },
};

export const TemperatureTrend: Story = {
  args: {
    labels: ['6am', '9am', '12pm', '3pm', '6pm', '9pm'],
    datasets: [
      { label: 'Temperature', data: [15, 18, 24, 28, 25, 20], color: '#f59e0b' },
    ],
    size: 'lg',
    showPoints: true,
    xAxis: { label: 'Time' },
    yAxis: { label: 'Temperature (°C)', min: 10, max: 30 },
  },
};

export const WebsiteTraffic: Story = {
  args: {
    labels: monthlyLabels,
    datasets: [
      { label: 'Visitors', data: [1200, 1400, 1600, 1800, 2000, 2200], color: '#8b5cf6' },
      { label: 'Page Views', data: [3000, 3500, 4000, 4500, 5000, 5500], color: '#06b6d4' },
    ],
    size: 'lg',
    smooth: true,
    xAxis: { label: 'Month' },
    yAxis: { label: 'Count' },
  },
};

export const SizeVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '600px' }}>
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Extra Small (xs)</h3>
        <AreaChart
          labels={quarterlyLabels}
          datasets={[{ label: 'Revenue', data: [120, 150, 180, 200] }]}
          size="xs"
          showLegend={false}
        />
      </div>
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Small (sm)</h3>
        <AreaChart
          labels={quarterlyLabels}
          datasets={[{ label: 'Revenue', data: [120, 150, 180, 200] }]}
          size="sm"
          showLegend={false}
        />
      </div>
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Medium (md)</h3>
        <AreaChart
          labels={quarterlyLabels}
          datasets={[{ label: 'Revenue', data: [120, 150, 180, 200] }]}
          size="md"
          showLegend={false}
        />
      </div>
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Large (lg)</h3>
        <AreaChart
          labels={quarterlyLabels}
          datasets={[{ label: 'Revenue', data: [120, 150, 180, 200] }]}
          size="lg"
          showLegend={false}
        />
      </div>
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Extra Large (xl)</h3>
        <AreaChart
          labels={quarterlyLabels}
          datasets={[{ label: 'Revenue', data: [120, 150, 180, 200] }]}
          size="xl"
          showLegend={false}
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
    stacked: false,
    smooth: true,
    showPoints: true,
    showGrid: true,
    showLegend: true,
    showExportControls: false,
  },
};
