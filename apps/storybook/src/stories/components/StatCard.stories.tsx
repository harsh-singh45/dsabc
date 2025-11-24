import type { Meta, StoryObj } from "@storybook/react";
import { StatCard, Card } from "@intelation/ui";
import { HiLockClosed, HiHeart, HiCheckCircle, HiStar, HiClock, HiTrendingUp, HiCurrencyDollar, HiUserGroup } from "react-icons/hi";

const meta = {
  title: "Components/StatCard",
  component: StatCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A compact statistics card component for displaying metrics with icons, labels, and values. Perfect for KPIs, compliance scores, and dashboard metrics. Now supports trend indicators, comparisons, formatting, and loading states.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      description: "Icon element to display",
      control: false,
    },
    iconColor: {
      description: "Icon color variant",
      control: { type: "select" },
      options: ["violet", "green", "cyan", "orange", "gray"],
    },
    label: {
      description: "Label text (secondary text above value)",
      control: "text",
    },
    value: {
      description: "Value text (primary text, emphasized)",
      control: "text",
    },
    size: {
      description: "Size variant",
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    format: {
      description: "Format type for the value",
      control: { type: "select" },
      options: ["default", "number", "currency", "percentage"],
    },
    loading: {
      description: "Loading state - shows skeleton placeholder",
      control: "boolean",
    },
    onClick: {
      description: "Click handler for the stat card",
      action: "clicked",
    },
  },
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <HiLockClosed />,
    iconColor: "violet",
    label: "GDPR",
    value: "91.6%",
  },
};

export const NumericValue: Story = {
  args: {
    icon: <HiStar />,
    iconColor: "orange",
    label: "Rating",
    value: 4.8,
  },
};

export const AllColors: Story = {
  args: {
    icon: <HiLockClosed />,
    label: "Example",
    value: "100%",
  },
  render: () => (
    <div className="flex flex-wrap gap-6">
      <StatCard
        icon={<HiLockClosed />}
        iconColor="violet"
        label="GDPR"
        value="91.6%"
      />
      <StatCard
        icon={<HiCheckCircle />}
        iconColor="green"
        label="Healthy"
        value="100%"
      />
      <StatCard
        icon={<HiHeart />}
        iconColor="cyan"
        label="HIPAA"
        value="89.6%"
      />
      <StatCard
        icon={<HiStar />}
        iconColor="orange"
        label="Rating"
        value="4.8"
      />
      <StatCard
        icon={<HiClock />}
        iconColor="gray"
        label="Uptime"
        value="99.9%"
      />
    </div>
  ),
};

export const Sizes: Story = {
  args: {
    icon: <HiLockClosed />,
    label: "Example",
    value: "100%",
  },
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-medium mb-3">Small</h3>
        <div className="flex gap-4">
          <StatCard
            icon={<HiLockClosed />}
            iconColor="violet"
            label="GDPR"
            value="91.6%"
            size="sm"
          />
          <StatCard
            icon={<HiHeart />}
            iconColor="cyan"
            label="HIPAA"
            value="89.6%"
            size="sm"
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-3">Medium (Default)</h3>
        <div className="flex gap-4">
          <StatCard
            icon={<HiLockClosed />}
            iconColor="violet"
            label="GDPR"
            value="91.6%"
            size="md"
          />
          <StatCard
            icon={<HiHeart />}
            iconColor="cyan"
            label="HIPAA"
            value="89.6%"
            size="md"
          />
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-3">Large</h3>
        <div className="flex gap-4">
          <StatCard
            icon={<HiLockClosed />}
            iconColor="violet"
            label="GDPR"
            value="91.6%"
            size="lg"
          />
          <StatCard
            icon={<HiHeart />}
            iconColor="cyan"
            label="HIPAA"
            value="89.6%"
            size="lg"
          />
        </div>
      </div>
    </div>
  ),
};

export const Clickable: Story = {
  args: {
    icon: <HiLockClosed />,
    iconColor: "violet",
    label: "GDPR",
    value: "91.6%",
    onClick: () => alert("StatCard clicked!"),
  },
};

export const InCard: Story = {
  args: {
    icon: <HiLockClosed />,
    label: "Example",
    value: "100%",
  },
  render: () => (
    <Card title="Compliance Overview" description="Framework compliance scores">
      <div className="flex gap-6 py-4">
        <StatCard
          icon={<HiLockClosed />}
          iconColor="violet"
          label="GDPR"
          value="91.6%"
        />
        <StatCard
          icon={<HiHeart />}
          iconColor="cyan"
          label="HIPAA"
          value="89.6%"
        />
        <StatCard
          icon={<HiCheckCircle />}
          iconColor="green"
          label="SOC 2"
          value="100%"
        />
      </div>
    </Card>
  ),
};

export const CompactLayout: Story = {
  args: {
    icon: <HiCheckCircle />,
    label: "Example",
    value: "100%",
  },
  render: () => (
    <Card title="System Metrics">
      <div className="grid grid-cols-2 gap-4 py-4">
        <StatCard
          icon={<HiCheckCircle />}
          iconColor="green"
          label="Status"
          value="Healthy"
          size="sm"
        />
        <StatCard
          icon={<HiClock />}
          iconColor="cyan"
          label="Uptime"
          value="99.9%"
          size="sm"
        />
        <StatCard
          icon={<HiStar />}
          iconColor="orange"
          label="Rating"
          value="4.8"
          size="sm"
        />
        <StatCard
          icon={<HiHeart />}
          iconColor="violet"
          label="Health"
          value="91%"
          size="sm"
        />
      </div>
    </Card>
  ),
};

export const VerticalStack: Story = {
  args: {
    icon: <HiLockClosed />,
    label: "Example",
    value: "100%",
  },
  render: () => (
    <Card title="Compliance Frameworks" description="Current status">
      <div className="flex flex-col gap-4 py-4">
        <StatCard
          icon={<HiLockClosed />}
          iconColor="violet"
          label="GDPR Compliance"
          value="91.6%"
        />
        <StatCard
          icon={<HiHeart />}
          iconColor="cyan"
          label="HIPAA Compliance"
          value="89.6%"
        />
        <StatCard
          icon={<HiCheckCircle />}
          iconColor="green"
          label="SOC 2 Type II"
          value="100%"
        />
        <StatCard
          icon={<HiStar />}
          iconColor="orange"
          label="ISO 27001"
          value="95.0%"
        />
      </div>
    </Card>
  ),
};

export const WithClickHandlers: Story = {
  args: {
    icon: <HiLockClosed />,
    label: "Example",
    value: "100%",
  },
  render: () => (
    <Card title="Click any metric for details">
      <div className="flex gap-6 py-4">
        <StatCard
          icon={<HiLockClosed />}
          iconColor="violet"
          label="GDPR"
          value="91.6%"
          onClick={() => console.log("GDPR clicked")}
        />
        <StatCard
          icon={<HiHeart />}
          iconColor="cyan"
          label="HIPAA"
          value="89.6%"
          onClick={() => console.log("HIPAA clicked")}
        />
        <StatCard
          icon={<HiCheckCircle />}
          iconColor="green"
          label="SOC 2"
          value="100%"
          onClick={() => console.log("SOC 2 clicked")}
        />
      </div>
    </Card>
  ),
};

export const WithTrends: Story = {
  args: {
    icon: <HiTrendingUp />,
    label: "Example",
    value: "100",
  },
  render: () => (
    <Card title="Metrics with Trend Indicators">
      <div className="flex flex-col gap-4 py-4">
        <StatCard
          icon={<HiTrendingUp />}
          iconColor="green"
          label="Revenue"
          value="$125,000"
          trend={{ direction: "up", value: 12.5, label: "vs last month" }}
        />
        <StatCard
          icon={<HiCurrencyDollar />}
          iconColor="orange"
          label="Expenses"
          value="$45,000"
          trend={{ direction: "down", value: 5.2, label: "vs last month" }}
        />
        <StatCard
          icon={<HiUserGroup />}
          iconColor="cyan"
          label="Active Users"
          value={8532}
          format="number"
          trend={{ direction: "neutral", value: 0, label: "no change" }}
        />
      </div>
    </Card>
  ),
};

export const WithComparison: Story = {
  args: {
    icon: <HiCurrencyDollar />,
    label: "Example",
    value: "100",
  },
  render: () => (
    <Card title="Metrics with Period Comparison">
      <div className="flex flex-col gap-4 py-4">
        <StatCard
          icon={<HiCurrencyDollar />}
          iconColor="green"
          label="Monthly Revenue"
          value="$125,000"
          comparison={{ value: "$110,000", label: "last month" }}
        />
        <StatCard
          icon={<HiUserGroup />}
          iconColor="cyan"
          label="Total Users"
          value={8532}
          format="number"
          comparison={{ value: 7891, label: "previous period" }}
        />
        <StatCard
          icon={<HiStar />}
          iconColor="orange"
          label="Satisfaction"
          value={4.8}
          comparison={{ value: 4.6, label: "last quarter" }}
        />
      </div>
    </Card>
  ),
};

export const WithFormatting: Story = {
  args: {
    icon: <HiCurrencyDollar />,
    label: "Example",
    value: 0,
  },
  render: () => (
    <Card title="Value Formatting Examples">
      <div className="grid grid-cols-2 gap-4 py-4">
        <StatCard
          icon={<HiCurrencyDollar />}
          iconColor="green"
          label="Revenue"
          value={125000}
          format="currency"
          size="sm"
        />
        <StatCard
          icon={<HiUserGroup />}
          iconColor="cyan"
          label="Users"
          value={1234567}
          format="number"
          size="sm"
        />
        <StatCard
          icon={<HiLockClosed />}
          iconColor="violet"
          label="Compliance"
          value={91.6}
          format="percentage"
          size="sm"
        />
        <StatCard
          icon={<HiStar />}
          iconColor="orange"
          label="Rating"
          value={4.8}
          format="default"
          size="sm"
        />
      </div>
    </Card>
  ),
};

export const WithLoading: Story = {
  args: {
    icon: <HiTrendingUp />,
    label: "Example",
    value: "100",
  },
  render: () => (
    <Card title="Loading States">
      <div className="flex flex-col gap-4 py-4">
        <StatCard
          icon={<HiTrendingUp />}
          iconColor="green"
          label="Revenue"
          value="$125,000"
          loading={true}
        />
        <StatCard
          icon={<HiUserGroup />}
          iconColor="cyan"
          label="Active Users"
          value={8532}
          format="number"
          trend={{ direction: "up", value: 12.5 }}
          loading={true}
        />
        <StatCard
          icon={<HiLockClosed />}
          iconColor="violet"
          label="Compliance"
          value="91.6%"
          loading={false}
        />
      </div>
    </Card>
  ),
};

export const FullFeatured: Story = {
  args: {
    icon: <HiTrendingUp />,
    label: "Example",
    value: 0,
  },
  render: () => (
    <Card title="Dashboard Metrics - Full Featured">
      <div className="grid grid-cols-2 gap-6 py-4">
        <StatCard
          icon={<HiTrendingUp />}
          iconColor="green"
          label="Monthly Revenue"
          value={125000}
          format="currency"
          trend={{ direction: "up", value: 12.5, label: "vs last month" }}
          comparison={{ value: "$110,000", label: "previous" }}
        />
        <StatCard
          icon={<HiUserGroup />}
          iconColor="cyan"
          label="Active Users"
          value={8532}
          format="number"
          trend={{ direction: "up", value: 8.3, label: "vs last week" }}
          comparison={{ value: 7891, label: "previous" }}
        />
        <StatCard
          icon={<HiLockClosed />}
          iconColor="violet"
          label="GDPR Compliance"
          value={91.6}
          format="percentage"
          trend={{ direction: "up", value: 2.1, label: "improvement" }}
        />
        <StatCard
          icon={<HiStar />}
          iconColor="orange"
          label="Satisfaction Score"
          value={4.8}
          trend={{ direction: "neutral", value: 0, label: "stable" }}
          comparison={{ value: 4.8, label: "last quarter" }}
        />
      </div>
    </Card>
  ),
};

export const TrendVariations: Story = {
  args: {
    icon: <HiTrendingUp />,
    label: "Example",
    value: "100",
  },
  render: () => (
    <div className="flex flex-col gap-6">
      <Card title="Positive Trends">
        <div className="flex gap-6 py-4">
          <StatCard
            icon={<HiTrendingUp />}
            iconColor="green"
            label="Revenue"
            value="$125,000"
            trend={{ direction: "up", value: 12.5 }}
          />
          <StatCard
            icon={<HiUserGroup />}
            iconColor="green"
            label="Users"
            value={8532}
            format="number"
            trend={{ direction: "up", value: 8.3 }}
          />
        </div>
      </Card>
      
      <Card title="Negative Trends">
        <div className="flex gap-6 py-4">
          <StatCard
            icon={<HiCurrencyDollar />}
            iconColor="orange"
            label="Costs"
            value="$45,000"
            trend={{ direction: "down", value: 5.2 }}
          />
          <StatCard
            icon={<HiClock />}
            iconColor="orange"
            label="Response Time"
            value="245ms"
            trend={{ direction: "down", value: 15.7 }}
          />
        </div>
      </Card>
      
      <Card title="Neutral Trends">
        <div className="flex gap-6 py-4">
          <StatCard
            icon={<HiHeart />}
            iconColor="gray"
            label="Status"
            value="Stable"
            trend={{ direction: "neutral", value: 0 }}
          />
          <StatCard
            icon={<HiCheckCircle />}
            iconColor="gray"
            label="Uptime"
            value="99.9%"
            trend={{ direction: "neutral", value: 0 }}
          />
        </div>
      </Card>
    </div>
  ),
};
