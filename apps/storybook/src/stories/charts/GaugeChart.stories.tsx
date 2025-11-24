import type { Meta, StoryObj } from '@storybook/react';
import { GaugeChart } from '@intelation/ui';
import { useState } from 'react';

const meta = {
  title: 'Charts/GaugeChart',
  component: GaugeChart,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A semi-circular gauge chart with animated segments and color interpolation. Perfect for displaying scores, progress, or performance metrics.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 0.1 },
      description: 'Current value (0-100)',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Size of the gauge',
    },
    segments: {
      control: { type: 'number', min: 10, max: 100 },
      description: 'Number of segments in the gauge',
    },
    startColor: {
      control: { type: 'color' },
      description: 'Start color for active segments',
    },
    endColor: {
      control: { type: 'color' },
      description: 'End color for active segments',
    },
    inactiveColor: {
      control: { type: 'color' },
      description: 'Inactive segment color',
    },
    animated: {
      control: { type: 'boolean' },
      description: 'Whether to animate value changes',
    },
    showControls: {
      control: { type: 'boolean' },
      description: 'Show slider control',
    },
  },
} satisfies Meta<typeof GaugeChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 87.5,
    size: 'md',
    animated: true,
    showControls: false,
  },
};

export const WithControls: Story = {
  args: {
    value: 75,
    size: 'md',
    animated: true,
    showControls: true,
  },
};

export const Small: Story = {
  args: {
    value: 45,
    size: 'sm',
    animated: true,
  },
};

export const Large: Story = {
  args: {
    value: 92,
    size: 'lg',
    animated: true,
  },
};

export const ExtraLarge: Story = {
  args: {
    value: 68,
    size: 'xl',
    animated: true,
  },
};

export const Poor: Story = {
  args: {
    value: 25,
    size: 'md',
    animated: true,
  },
};

export const Fair: Story = {
  args: {
    value: 55,
    size: 'md',
    animated: true,
  },
};

export const Good: Story = {
  args: {
    value: 80,
    size: 'md',
    animated: true,
  },
};

export const Excellent: Story = {
  args: {
    value: 95,
    size: 'md',
    animated: true,
  },
};

export const CustomColors: Story = {
  args: {
    value: 70,
    size: 'md',
    startColor: '#fbbf24',
    endColor: '#dc2626',
    inactiveColor: '#fee2e2',
    animated: true,
  },
};

export const CustomLabel: Story = {
  args: {
    value: 65,
    size: 'md',
    label: 'Satisfactory',
    animated: true,
  },
};

export const MoreSegments: Story = {
  args: {
    value: 80,
    size: 'md',
    segments: 80,
    animated: true,
  },
};

export const FewerSegments: Story = {
  args: {
    value: 80,
    size: 'md',
    segments: 20,
    animated: true,
  },
};

export const Interactive: Story = {
  args: {
    value: 50,
  },
  render: () => {
    const [value, setValue] = useState(50);
    
    return (
      <div className="flex flex-col gap-8 items-center">
        <GaugeChart 
          value={value} 
          size="lg"
          animated={true}
        />
        <div className="w-80">
          <label className="block mb-2 text-sm font-medium">
            Adjust Value: {value.toFixed(1)}%
          </label>
          <input
            type="range"
            min="0"
            max="100"
            step="0.1"
            value={value}
            onChange={(e) => setValue(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
      </div>
    );
  },
};

export const AllSizes: Story = {
  args: {
    value: 75,
  },
  render: () => (
    <div className="flex gap-8 flex-wrap items-center justify-center">
      <div className="text-center">
        <GaugeChart value={75} size="sm" />
        <p className="mt-4 text-sm text-gray-600">Small</p>
      </div>
      <div className="text-center">
        <GaugeChart value={75} size="md" />
        <p className="mt-4 text-sm text-gray-600">Medium</p>
      </div>
      <div className="text-center">
        <GaugeChart value={75} size="lg" />
        <p className="mt-4 text-sm text-gray-600">Large</p>
      </div>
      <div className="text-center">
        <GaugeChart value={75} size="xl" />
        <p className="mt-4 text-sm text-gray-600">Extra Large</p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
