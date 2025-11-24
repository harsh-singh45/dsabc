import type { Meta, StoryObj } from '@storybook/react';
import { DonutChart } from '@intelation/ui';

const meta = {
  title: 'Charts/DonutChart',
  component: DonutChart,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable donut chart with optional center text display. Built with Chart.js for smooth animations and interactions.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Size of the chart',
    },
    showLegend: {
      control: { type: 'boolean' },
      description: 'Show legend',
    },
    animated: {
      control: { type: 'boolean' },
      description: 'Enable animations',
    },
  },
} satisfies Meta<typeof DonutChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
  { label: 'Cyan', value: 30, color: '#29D0D8' },
  { label: 'Green', value: 25, color: '#92D050' },
  { label: 'Violet', value: 38.1, color: '#8068F4' },
  { label: 'Gray', value: 6.9, color: '#E0E0E0' },
];

export const Default: Story = {
  args: {
    data: sampleData,
    size: 'md',
    animated: true,
    showLegend: false,
  },
};

export const WithCenterText: Story = {
  args: {
    data: sampleData,
    centerText: {
      value: '93.1%',
      label: 'Healthy',
    },
    size: 'md',
    animated: true,
    showLegend: false,
  },
};

export const WithLegend: Story = {
  args: {
    data: sampleData,
    centerText: {
      value: '93.1%',
      label: 'Healthy',
    },
    size: 'md',
    animated: true,
    showLegend: true,
  },
};

export const Small: Story = {
  args: {
    data: sampleData,
    centerText: {
      value: '93.1%',
      label: 'Healthy',
    },
    size: 'sm',
    animated: true,
  },
};

export const Large: Story = {
  args: {
    data: sampleData,
    centerText: {
      value: '93.1%',
      label: 'Healthy',
    },
    size: 'lg',
    animated: true,
  },
};

export const ExtraLarge: Story = {
  args: {
    data: sampleData,
    centerText: {
      value: '93.1%',
      label: 'Healthy',
    },
    size: 'xl',
    animated: true,
  },
};

export const ServerStatus: Story = {
  args: {
    data: [
      { label: 'Active', value: 30, color: '#29D0D8' },
      { label: 'Healthy', value: 25, color: '#92D050' },
      { label: 'Processing', value: 38.1, color: '#8068F4' },
      { label: 'Idle', value: 6.9, color: '#E0E0E0' },
    ],
    centerText: {
      value: '93.1%',
      label: 'Healthy',
    },
    size: 'md',
    animated: true,
  },
};

export const ProjectProgress: Story = {
  args: {
    data: [
      { label: 'Completed', value: 65, color: '#10b981' },
      { label: 'In Progress', value: 25, color: '#f59e0b' },
      { label: 'Pending', value: 10, color: '#6b7280' },
    ],
    centerText: {
      value: '65%',
      label: 'Complete',
    },
    size: 'md',
    animated: true,
  },
};

export const Budget: Story = {
  args: {
    data: [
      { label: 'Spent', value: 72, color: '#ef4444' },
      { label: 'Remaining', value: 28, color: '#22c55e' },
    ],
    centerText: {
      value: '$72K',
      label: 'Spent',
    },
    size: 'md',
    animated: true,
  },
};

export const UserDistribution: Story = {
  args: {
    data: [
      { label: 'Desktop', value: 45, color: '#3b82f6' },
      { label: 'Mobile', value: 40, color: '#8b5cf6' },
      { label: 'Tablet', value: 15, color: '#ec4899' },
    ],
    centerText: {
      value: '10.5K',
      label: 'Users',
    },
    size: 'md',
    animated: true,
    showLegend: true,
  },
};

export const CustomColors: Story = {
  args: {
    data: [
      { label: 'Category A', value: 40 },
      { label: 'Category B', value: 30 },
      { label: 'Category C', value: 20 },
      { label: 'Category D', value: 10 },
    ],
    defaultColors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24'],
    centerText: {
      value: '100',
      label: 'Total',
    },
    size: 'md',
    animated: true,
  },
};

export const AllSizes: Story = {
  args: {
    data: sampleData,
  },
  render: () => (
    <div className="flex gap-8 flex-wrap items-center justify-center">
      <div className="text-center">
        <DonutChart 
          data={sampleData} 
          centerText={{ value: '93.1%', label: 'Healthy' }}
          size="sm" 
        />
        <p className="mt-4 text-sm text-gray-600">Small</p>
      </div>
      <div className="text-center">
        <DonutChart 
          data={sampleData} 
          centerText={{ value: '93.1%', label: 'Healthy' }}
          size="md" 
        />
        <p className="mt-4 text-sm text-gray-600">Medium</p>
      </div>
      <div className="text-center">
        <DonutChart 
          data={sampleData} 
          centerText={{ value: '93.1%', label: 'Healthy' }}
          size="lg" 
        />
        <p className="mt-4 text-sm text-gray-600">Large</p>
      </div>
      <div className="text-center">
        <DonutChart 
          data={sampleData} 
          centerText={{ value: '93.1%', label: 'Healthy' }}
          size="xl" 
        />
        <p className="mt-4 text-sm text-gray-600">Extra Large</p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
