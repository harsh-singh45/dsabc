import type { Meta, StoryObj } from "@storybook/react";
import { Metric, MetricGroup, Card } from "@intelation/ui";

const meta = {
  title: "Data Display/Metric",
  component: Metric,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A metric component for displaying statistical values with labels. Designed to be used within Card components.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      description: "The metric value to display",
      control: "text",
    },
    label: {
      description: "The metric label/description",
      control: "text",
    },
  },
} satisfies Meta<typeof Metric>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "278 MB",
    label: "Processing Volume",
  },
};

export const NumericValue: Story = {
  args: {
    value: 93.1,
    label: "Success Rate",
  },
};

export const Percentage: Story = {
  args: {
    value: "93.1%",
    label: "Completion Rate",
  },
};

export const LargeNumber: Story = {
  args: {
    value: "1,234,567",
    label: "Total Records",
  },
};

export const InCard: Story = {
  args: {
    value: "278 MB",
    label: "Processing Volume",
  },
  render: () => (
    <Card title="Statistics" description="Key performance metrics">
      <MetricGroup>
        <Metric value="278 MB" label="Processing Volume" />
        <Metric value="93.1%" label="Success Rate" />
      </MetricGroup>
    </Card>
  ),
};

export const MultipleMetrics: Story = {
  args: {
    value: "278 MB",
    label: "Processing Volume",
  },
  render: () => (
    <MetricGroup>
      <Metric value="278 MB" label="Processing Volume" />
      <Metric value="93.1%" label="Success Rate" />
      <Metric value="8,605" label="Documents Processed" />
      <Metric value="99.9%" label="Uptime" />
    </MetricGroup>
  ),
};

export const WithCustomGap: Story = {
  args: {
    value: "100",
    label: "Metric One",
  },
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-sm font-medium mb-2">Gap: 2</h3>
        <MetricGroup className="gap-2">
          <Metric value="100" label="Metric One" />
          <Metric value="200" label="Metric Two" />
        </MetricGroup>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Gap: 4 (Default)</h3>
        <MetricGroup className="gap-4">
          <Metric value="100" label="Metric One" />
          <Metric value="200" label="Metric Two" />
        </MetricGroup>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Gap: 6</h3>
        <MetricGroup className="gap-6">
          <Metric value="100" label="Metric One" />
          <Metric value="200" label="Metric Two" />
        </MetricGroup>
      </div>
    </div>
  ),
};

export const HorizontalLayout: Story = {
  args: {
    value: "278 MB",
    label: "Processing Volume",
  },
  render: () => (
    <Card title="Dashboard Metrics">
      <div className="flex gap-8 py-4">
        <Metric value="278 MB" label="Processing Volume" />
        <Metric value="93.1%" label="Success Rate" />
        <Metric value="8,605" label="Documents" />
      </div>
    </Card>
  ),
};

export const InGrid: Story = {
  args: {
    value: "278 MB",
    label: "Processing Volume",
  },
  render: () => (
    <Card title="Performance Overview" description="System metrics at a glance">
      <div className="grid grid-cols-2 gap-6 py-4">
        <Metric value="278 MB" label="Processing Volume" />
        <Metric value="93.1%" label="Success Rate" />
        <Metric value="8,605" label="Documents" />
        <Metric value="4,022" label="API Calls" />
      </div>
    </Card>
  ),
};
