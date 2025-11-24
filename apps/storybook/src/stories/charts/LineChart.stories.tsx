import type { Meta, StoryObj } from '@storybook/react';
import { LineChart } from '@intelation/ui';

const meta = {
  title: 'Charts/LineChart',
  component: LineChart,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A flexible line chart component for displaying time series and continuous data. Supports multiple datasets, smooth/straight lines, filled areas, and customizable styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the chart',
    },
    showGrid: {
      control: { type: 'boolean' },
      description: 'Show grid lines',
    },
    showPoints: {
      control: { type: 'boolean' },
      description: 'Show data points on the line',
    },
    smooth: {
      control: { type: 'boolean' },
      description: 'Use smooth curved lines',
    },
    showLegend: {
      control: { type: 'boolean' },
      description: 'Show legend',
    },
    showExportControls: {
      control: { type: 'boolean' },
      description: 'Show export controls',
    },
  },
} satisfies Meta<typeof LineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Sales 2024',
      data: [120, 150, 180, 200, 190, 220],
    },
    {
      label: 'Sales 2023',
      data: [100, 130, 150, 160, 170, 180],
    },
  ],
};

export const Default: Story = {
  args: {
    labels: salesData.labels,
    datasets: salesData.datasets,
    size: 'lg',
    showGrid: true,
    showPoints: true,
    smooth: true,
    showLegend: true,
  },
};

export const WithExportControls: Story = {
  args: {
    labels: salesData.labels,
    datasets: salesData.datasets,
    size: 'lg',
    showExportControls: true,
  },
};

export const SingleLine: Story = {
  args: {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Revenue',
        data: [45000, 52000, 61000, 58000],
      },
    ],
    size: 'lg',
  },
};

export const StraightLines: Story = {
  args: {
    labels: salesData.labels,
    datasets: salesData.datasets,
    size: 'lg',
    smooth: false,
  },
};

export const WithoutPoints: Story = {
  args: {
    labels: salesData.labels,
    datasets: salesData.datasets,
    size: 'lg',
    showPoints: false,
  },
};

export const FilledAreas: Story = {
  args: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Active Users',
        data: [450, 520, 480, 590, 610, 580, 620],
        fill: true,
      },
      {
        label: 'New Signups',
        data: [120, 150, 130, 180, 190, 170, 200],
        fill: true,
      },
    ],
    size: 'lg',
  },
};

export const CustomColors: Story = {
  args: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Product A',
        data: [30, 45, 38, 52],
        color: '#8068F4',
      },
      {
        label: 'Product B',
        data: [25, 35, 42, 48],
        color: '#29D0D8',
      },
      {
        label: 'Product C',
        data: [20, 30, 28, 35],
        color: '#92D050',
      },
    ],
    size: 'lg',
  },
};

export const DashedLines: Story = {
  args: {
    labels: salesData.labels,
    datasets: [
      {
        label: 'Actual',
        data: [120, 150, 180, 200, 190, 220],
      },
      {
        label: 'Projected',
        data: [120, 145, 175, 210, 230, 250],
        borderDash: [5, 5],
      },
    ],
    size: 'lg',
  },
};

export const WithAxisLabels: Story = {
  args: {
    labels: salesData.labels,
    datasets: salesData.datasets,
    size: 'lg',
    xAxis: {
      label: 'Month',
    },
    yAxis: {
      label: 'Revenue ($1000)',
    },
  },
};

export const CustomYAxisRange: Story = {
  args: {
    labels: salesData.labels,
    datasets: salesData.datasets,
    size: 'lg',
    yAxis: {
      label: 'Sales',
      min: 0,
      max: 300,
    },
  },
};

export const NoGrid: Story = {
  args: {
    labels: salesData.labels,
    datasets: salesData.datasets,
    size: 'lg',
    showGrid: false,
  },
};

export const NoLegend: Story = {
  args: {
    labels: salesData.labels,
    datasets: salesData.datasets,
    size: 'lg',
    showLegend: false,
  },
};

export const MinimalStyle: Story = {
  args: {
    labels: ['A', 'B', 'C', 'D', 'E'],
    datasets: [
      {
        label: 'Data',
        data: [10, 20, 15, 25, 30],
      },
    ],
    size: 'md',
    showGrid: false,
    showPoints: false,
    showLegend: false,
  },
};

export const MultipleDataSeries: Story = {
  args: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Direct Sales',
        data: [120, 150, 180, 200, 190, 220, 240, 260],
        color: 'var(--color-chart-violet)',
      },
      {
        label: 'Partner Sales',
        data: [80, 90, 100, 110, 120, 130, 140, 150],
        color: 'var(--color-chart-cyan)',
      },
      {
        label: 'Online Sales',
        data: [60, 70, 85, 95, 100, 110, 125, 135],
        color: 'var(--color-chart-green)',
      },
      {
        label: 'Retail Sales',
        data: [40, 50, 55, 65, 70, 80, 85, 95],
        color: 'var(--color-chart-purple)',
      },
    ],
    size: 'xl',
    showExportControls: true,
  },
};

export const TemperatureData: Story = {
  args: {
    labels: ['12 AM', '4 AM', '8 AM', '12 PM', '4 PM', '8 PM'],
    datasets: [
      {
        label: 'Temperature (°F)',
        data: [62, 58, 64, 72, 78, 68],
        fill: true,
      },
    ],
    size: 'lg',
    xAxis: {
      label: 'Time of Day',
    },
    yAxis: {
      label: 'Temperature (°F)',
      min: 50,
      max: 85,
    },
  },
};

export const StockPrice: Story = {
  args: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Stock Price',
        data: [142.5, 145.8, 143.2, 147.6, 149.3],
      },
    ],
    size: 'lg',
    xAxis: {
      label: 'Day',
    },
    yAxis: {
      label: 'Price ($)',
      min: 140,
      max: 152,
    },
    showGrid: true,
    smooth: false,
  },
};

export const SizeVariants: Story = {
  render: (args) => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-medium mb-2">Extra Small (xs)</h3>
        <LineChart
          {...args}
          size="xs"
        />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Small (sm)</h3>
        <LineChart
          {...args}
          size="sm"
        />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Medium (md)</h3>
        <LineChart
          {...args}
          size="md"
        />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Large (lg)</h3>
        <LineChart
          {...args}
          size="lg"
        />
      </div>
    </div>
  ),
  args: {
    labels: ['A', 'B', 'C', 'D'],
    datasets: [{ label: 'Data', data: [10, 20, 15, 25] }],
    showLegend: false,
  },
};

export const Playground: Story = {
  args: {
    labels: salesData.labels,
    datasets: salesData.datasets,
    size: 'lg',
    showGrid: true,
    showPoints: true,
    smooth: true,
    showLegend: true,
    showExportControls: true,
  },
};
