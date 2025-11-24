import type { Meta, StoryObj } from '@storybook/react';

import { PieChart } from '@intelation/ui';

const meta: Meta<typeof PieChart> = {
  title: 'Charts/PieChart',
  component: PieChart,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'PieChart component for displaying part-to-whole relationships. Supports pie and donut modes with optional percentage labels.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PieChart>;

// Sample data
const productData = [
  { label: 'Product A', value: 30 },
  { label: 'Product B', value: 45 },
  { label: 'Product C', value: 25 },
];

const marketShareData = [
  { label: 'Company A', value: 35 },
  { label: 'Company B', value: 28 },
  { label: 'Company C', value: 22 },
  { label: 'Others', value: 15 },
];

const budgetData = [
  { label: 'Engineering', value: 40 },
  { label: 'Marketing', value: 25 },
  { label: 'Sales', value: 20 },
  { label: 'Operations', value: 15 },
];

export const Default: Story = {
  args: {
    data: productData,
    size: 'lg',
  },
};

export const WithExportControls: Story = {
  args: {
    data: productData,
    size: 'lg',
    showExportControls: true,
  },
};

export const DonutMode: Story = {
  args: {
    data: productData,
    size: 'lg',
    donut: true,
  },
};

export const WithPercentages: Story = {
  args: {
    data: productData,
    size: 'lg',
    showPercentages: true,
  },
};

export const DonutWithPercentages: Story = {
  args: {
    data: productData,
    size: 'lg',
    donut: true,
    showPercentages: true,
  },
};

export const CustomColors: Story = {
  args: {
    data: [
      { label: 'Red', value: 30, color: '#ef4444' },
      { label: 'Green', value: 45, color: '#10b981' },
      { label: 'Blue', value: 25, color: '#3b82f6' },
    ],
    size: 'lg',
  },
};

export const NoLegend: Story = {
  args: {
    data: productData,
    size: 'lg',
    showLegend: false,
  },
};

export const MarketShare: Story = {
  args: {
    data: marketShareData,
    size: 'lg',
    donut: true,
    showPercentages: true,
  },
};

export const BudgetAllocation: Story = {
  args: {
    data: budgetData,
    size: 'lg',
    showPercentages: true,
  },
};

export const TwoCategories: Story = {
  args: {
    data: [
      { label: 'Completed', value: 75 },
      { label: 'Remaining', value: 25 },
    ],
    size: 'lg',
    donut: true,
  },
};

export const ManyCategories: Story = {
  args: {
    data: [
      { label: 'Category 1', value: 15 },
      { label: 'Category 2', value: 12 },
      { label: 'Category 3', value: 18 },
      { label: 'Category 4', value: 10 },
      { label: 'Category 5', value: 14 },
      { label: 'Category 6', value: 11 },
      { label: 'Category 7', value: 20 },
    ],
    size: 'lg',
    showPercentages: true,
  },
};

export const BrandedColors: Story = {
  args: {
    data: [
      { label: 'Primary', value: 40, color: '#8b5cf6' },
      { label: 'Secondary', value: 30, color: '#06b6d4' },
      { label: 'Accent', value: 20, color: '#10b981' },
      { label: 'Neutral', value: 10, color: '#64748b' },
    ],
    size: 'lg',
    donut: true,
  },
};

export const TrafficSources: Story = {
  args: {
    data: [
      { label: 'Direct', value: 35 },
      { label: 'Organic Search', value: 28 },
      { label: 'Social Media', value: 22 },
      { label: 'Referral', value: 10 },
      { label: 'Email', value: 5 },
    ],
    size: 'lg',
    showPercentages: true,
  },
};

export const DeviceUsage: Story = {
  args: {
    data: [
      { label: 'Desktop', value: 45, color: '#3b82f6' },
      { label: 'Mobile', value: 40, color: '#10b981' },
      { label: 'Tablet', value: 15, color: '#f59e0b' },
    ],
    size: 'lg',
    donut: true,
    showPercentages: true,
  },
};

export const SizeVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 style={{ marginBottom: '0.5rem' }}>Extra Small (xs)</h3>
        <PieChart data={productData} donut={true} showLegend={false} size="xs" />
      </div>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 style={{ marginBottom: '0.5rem' }}>Small (sm)</h3>
        <PieChart data={productData} donut={true} showLegend={false} size="sm" />
      </div>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 style={{ marginBottom: '0.5rem' }}>Medium (md)</h3>
        <PieChart data={productData} donut={true} showLegend={false} size="md" />
      </div>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 style={{ marginBottom: '0.5rem' }}>Large (lg)</h3>
        <PieChart data={productData} donut={true} showLegend={false} size="lg" />
      </div>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 style={{ marginBottom: '0.5rem' }}>Extra Large (xl)</h3>
        <PieChart data={productData} donut={true} showLegend={false} size="xl" />
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    data: productData,
    size: 'lg',
    donut: false,
    showPercentages: false,
    showLegend: true,
    showExportControls: false,
  },
};
