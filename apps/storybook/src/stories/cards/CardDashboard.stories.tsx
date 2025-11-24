import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardSection, ListItem, Metric, MetricGroup, DonutChart, GaugeChart, BarChart, Dropdown, StatCard } from "@intelation/ui";
import { tokens } from "@intelation/tokens";
import { BiFile, BiMusic, BiText, BiPlug } from "react-icons/bi";
import { HiLockClosed, HiHeart, HiCheckCircle } from "react-icons/hi";

const meta = {
  title: "Cards/Card (Dashboard)",
  component: Card,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Complete dashboard card examples combining metrics, charts, and data visualization for real-world applications.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "Card title text",
      control: "text",
    },
    description: {
      description: "Card description text",
      control: "text",
    },
    children: {
      description: "Card content",
      control: false,
    },
    showMenu: {
      description: "Whether to show the menu button (three dots)",
      control: "boolean",
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MetricsWithChart: Story = {
  args: {
    title: "Processing Statistics",
    description: "Volume metrics and performance data",
    showMenu: true,
    children: (
      <div className="flex flex-col">
        <div className="flex items-start justify-between gap-6">
          <MetricGroup>
            <Metric value="278 MB" label="Processing Volume" />
            <Metric value="40,836" label="Total Items" />
          </MetricGroup>

          <div className="flex-shrink-0">
            <DonutChart
              data={[
                { label: "Text Requests", value: 65.9, color: '#03C3EC' },
                { label: "Documents", value: 21.1, color: '#696CFF' },
                { label: "API Calls", value: 9.8, color: '#FFB113' },
                { label: "Audio Files", value: 3.2, color: '#71DD37' },
              ]}
              centerText={{ value: "40.8K", label: "Items" }}
              size="xs"
            />
          </div>
        </div>

        <div className="mt-2">
          <ListItem
            icon={<BiFile />}
            iconColor="violet"
            title="Documents"
            value="8,605"
            valuePosition="right"
          />
          <ListItem
            icon={<BiMusic />}
            iconColor="green"
            title="Audio Files"
            value="1,309"
            valuePosition="right"
          />
          <ListItem
            icon={<BiText />}
            iconColor="cyan"
            title="Text Requests"
            value="26,900"
            valuePosition="right"
          />
          <ListItem
            icon={<BiPlug />}
            iconColor="orange"
            title="API Calls"
            value="4,022"
            valuePosition="right"
          />
        </div>
      </div>
    ),
  },
};

export const RiskOverview: Story = {
  args: {
    title: "Risk Overview",
    description: "Risk distribution and compliance metrics",
    showMenu: true,
    children: (
      <div className="flex flex-col gap-6">
        <div className="flex items-start justify-between gap-6">
          <MetricGroup>
            <Metric value="64,812" label="Total Detected" />
            <Metric value="60,324" label="Total Anonymized" />
          </MetricGroup>

          <div className="flex-shrink-0">
            <DonutChart
              data={[
                { label: "Anonymized", value: 73.3, color: '#92D050' },
                { label: "Pending", value: 26.7, color: '#E0E0E0' },
              ]}
              centerText={{ value: "73.3%", label: "Complete" }}
              size="xs"
            />
          </div>
        </div>

        <div>
          <BarChart
            labels={["High", "Medium", "Low"]}
            datasets={[
              {
                label: "Risk Level",
                data: [65, 25, 10],
              },
            ]}
            size="sm"
          />
        </div>
      </div>
    ),
  },
};

export const ComplianceCoverage: Story = {
  args: {
    showMenu: true,
    children: (
      <>
        <CardSection 
          flex={2}
          title="Compliance Coverage"
          description="Active frameworks and countries covered"
        >
          <BarChart
            labels={["Germany", "France", "Netherlands", "Italy", "USA"]}
            datasets={[
              {
                label: "Compliance Score",
                data: [95, 89, 93, 100, 89],
                color: tokens.color.custom.link
              },
            ]}
            size="md"
            showGrid={true}
            yAxis={{
              display: true,
              min: 70,
              max: 100,
              format: 'percentage'
            }}
          />
        </CardSection>

        <CardSection 
          flex={1}
        >
          <div className="flex flex-col gap-6">
            <div className="flex justify-center" style={{ marginBottom: '30px' }}>
              <Dropdown 
                defaultValue="last-30-days"
                variant="tonal"
                size="medium"
                width="167px"
              />
            </div>

            <div className="flex justify-center">
              <GaugeChart
                value={87.5}
                label="Good"
                size="sm"
              />
            </div>

            <div style={{ textAlign: 'center' }}>
              <h4 style={{ 
                fontSize: '13px', 
                fontWeight: '600', 
                color: 'var(--color-custom-textSecondary)',
                marginBottom: '46px',
                marginTop: '15px'
              }}>
                Compliance Score
              </h4>
              
              <div className="flex justify-center mb-3" style={{ gap: '30px' }}>
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
              </div>
            </div>
          </div>
        </CardSection>
      </>
    ),
  },
  parameters: {
    layout: "padded",
  },
};

export const SystemHealth: Story = {
  args: {
    title: "System Health",
    description: "Monitor system status and performance",
    showMenu: true,
    style: {
      width: '362px',
      height: '234px'
    },
    children: (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px 0px 12px',
        gap: '12px',
        width: '100%',
        flex: 'none',
        alignSelf: 'stretch'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0px 24px',
          gap: '50px',
          width: '100%',
          flex: 'none',
          alignSelf: 'stretch'
        }}>
          <StatCard
            icon={<HiCheckCircle />}
            iconColor="green"
            label="Status"
            value="Healthy"
          />

          <div style={{ flex: 'none' }}>
            <GaugeChart
              value={91.9}
              label="Uptime"
              size="sm"
              startColor="#E8F9DF"
              endColor="#71DD37"
              inactiveColor="#f0f0f0"
            />
          </div>
        </div>

        <div style={{
          fontFamily: 'Manrope',
          fontWeight: '500',
          fontSize: '12px',
          lineHeight: '22px',
          color: 'var(--color-custom-textSecondary)',
          flex: 'none'
        }}>
          Last updated: 2 min ago
        </div>
      </div>
    ),
  },
  parameters: {
    layout: "padded",
  },
};

export const DashboardLayout: Story = {
  args: {},
  render: () => (
    <div className="grid grid-cols-12 gap-6 max-w-screen-2xl">
      <div className="col-span-8">
        <Card
          title="Regional Coverage"
          description="Active frameworks and country coverage by region"
          showMenu={true}
        >
          <div className="py-4">
            <BarChart
              labels={["Germany", "France", "Italy", "Spain", "Netherlands", "Belgium"]}
              datasets={[
                {
                  label: "Active Frameworks",
                  data: [12, 31, 13, 11, 18, 15],
                },
                {
                  label: "Countries Covered",
                  data: [9, 11, 8, 10, 7, 9],
                },
              ]}
              size="lg"
            />
          </div>
        </Card>
      </div>
      
      <div className="col-span-4 flex flex-col gap-6">
        <Card
          title="System Health"
          description="Current status overview"
          showMenu={true}
        >
          <div className="flex justify-center py-4">
            <DonutChart
              data={[
                { label: "Active", value: 30, color: '#29D0D8' },
                { label: "Healthy", value: 25, color: '#92D050' },
                { label: "Warning", value: 38.1, color: '#8068F4' },
                { label: "Inactive", value: 6.9, color: '#E0E0E0' },
              ]}
              centerText={{ value: "93.1%", label: "Healthy" }}
              size="md"
            />
          </div>
        </Card>
        
        <Card
          title="Performance Score"
          description="Overall system performance"
          showMenu={true}
        >
          <div className="flex justify-center py-4">
            <GaugeChart
              value={78.5}
              size="md"
            />
          </div>
        </Card>
      </div>
    </div>
  ),
  parameters: {
    layout: "padded",
  },
};
