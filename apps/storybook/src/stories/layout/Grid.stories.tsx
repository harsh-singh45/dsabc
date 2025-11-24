import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "@intelation/ui";

const meta = {
  title: "Layout/Grid",
  component: Grid,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Grid component for grid layouts. Provides a simple API for creating responsive grid layouts with proper spacing using design tokens.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    columns: {
      control: "number",
      description: "Number of columns",
    },
    rows: {
      control: "number",
      description: "Number of rows",
    },
    gap: {
      control: "text",
      description: "Gap between items using spacing tokens",
    },
    columnGap: {
      control: "text",
      description: "Gap between columns",
    },
    rowGap: {
      control: "text",
      description: "Gap between rows",
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoBox = ({ children, color = "#f3f4f6", style, className }: { children: React.ReactNode; color?: string; style?: React.CSSProperties; className?: string }) => (
  <div
    className={`p-4 rounded-lg border border-gray-200 text-center ${className || ''}`}
    style={{
      backgroundColor: color,
      ...style,
    }}
  >
    {children}
  </div>
);

export const Default: Story = {
  render: () => (
    <Grid columns={3} gap="4">
      <DemoBox>Item 1</DemoBox>
      <DemoBox>Item 2</DemoBox>
      <DemoBox>Item 3</DemoBox>
      <DemoBox>Item 4</DemoBox>
      <DemoBox>Item 5</DemoBox>
      <DemoBox>Item 6</DemoBox>
    </Grid>
  ),
};

export const TwoColumns: Story = {
  render: () => (
    <Grid columns={2} gap="6">
      <DemoBox>Item 1</DemoBox>
      <DemoBox>Item 2</DemoBox>
      <DemoBox>Item 3</DemoBox>
      <DemoBox>Item 4</DemoBox>
    </Grid>
  ),
};

export const FourColumns: Story = {
  render: () => (
    <Grid columns={4} gap="4">
      <DemoBox>Item 1</DemoBox>
      <DemoBox>Item 2</DemoBox>
      <DemoBox>Item 3</DemoBox>
      <DemoBox>Item 4</DemoBox>
      <DemoBox>Item 5</DemoBox>
      <DemoBox>Item 6</DemoBox>
      <DemoBox>Item 7</DemoBox>
      <DemoBox>Item 8</DemoBox>
    </Grid>
  ),
};

export const CustomGap: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h4 className="mb-2">Gap: 2</h4>
        <Grid columns={3} gap="2">
          <DemoBox>Item 1</DemoBox>
          <DemoBox>Item 2</DemoBox>
          <DemoBox>Item 3</DemoBox>
        </Grid>
      </div>
      <div>
        <h4 className="mb-2">Gap: 6</h4>
        <Grid columns={3} gap="6">
          <DemoBox>Item 1</DemoBox>
          <DemoBox>Item 2</DemoBox>
          <DemoBox>Item 3</DemoBox>
        </Grid>
      </div>
      <div>
        <h4 className="mb-2">Gap: 10</h4>
        <Grid columns={3} gap="10">
          <DemoBox>Item 1</DemoBox>
          <DemoBox>Item 2</DemoBox>
          <DemoBox>Item 3</DemoBox>
        </Grid>
      </div>
    </div>
  ),
};

export const DifferentColumnAndRowGaps: Story = {
  render: () => (
    <Grid columns={3} columnGap="8" rowGap="2">
      <DemoBox>Item 1</DemoBox>
      <DemoBox>Item 2</DemoBox>
      <DemoBox>Item 3</DemoBox>
      <DemoBox>Item 4</DemoBox>
      <DemoBox>Item 5</DemoBox>
      <DemoBox>Item 6</DemoBox>
    </Grid>
  ),
};

export const TemplateColumns: Story = {
  render: () => (
    <Grid templateColumns="200px 1fr 200px" gap="4">
      <DemoBox>Sidebar</DemoBox>
      <DemoBox>Main Content</DemoBox>
      <DemoBox>Sidebar</DemoBox>
    </Grid>
  ),
};

export const AutoRows: Story = {
  render: () => (
    <Grid columns={3} templateRows="auto 1fr auto" gap="4" className="h-96">
      <DemoBox color="#3b82f6" className="text-white col-span-full">
        Header
      </DemoBox>
      <DemoBox>Item 1</DemoBox>
      <DemoBox>Item 2</DemoBox>
      <DemoBox>Item 3</DemoBox>
      <DemoBox color="#10b981" className="text-white col-span-full">
        Footer
      </DemoBox>
    </Grid>
  ),
};

export const CardGrid: Story = {
  render: () => (
    <Grid columns={3} gap="6" className="max-w-4xl">
      {[1, 2, 3, 4, 5, 6].map((num) => (
        <div
          key={num}
          className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm"
        >
          <h3 className="m-0 mb-2 text-lg font-semibold">Card {num}</h3>
          <p className="m-0 text-gray-500 text-sm">
            This is a card with some content inside a grid layout.
          </p>
        </div>
      ))}
    </Grid>
  ),
};

export const ResponsiveGrid: Story = {
  render: () => (
    <div className="w-full max-w-6xl">
      <Grid columns={4} gap="6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
          <DemoBox key={num}>Item {num}</DemoBox>
        ))}
      </Grid>
      <p className="mt-4 text-sm text-gray-500">
        Note: Responsive behavior would typically be handled with CSS or Tailwind classes
      </p>
    </div>
  ),
};

export const DashboardLayout: Story = {
  render: () => (
    <Grid columns={12} gap="6" className="w-full max-w-6xl">
      <div className="col-span-12 p-4 bg-blue-500 text-white rounded-lg">
        Header (Full Width)
      </div>
      <div className="col-span-3 p-4 bg-gray-100 rounded-lg">
        Sidebar (3 cols)
      </div>
      <div className="col-span-9 p-4 bg-gray-100 rounded-lg">
        Main Content (9 cols)
      </div>
      <div className="col-span-12 p-4 bg-green-600 text-white rounded-lg">
        Footer (Full Width)
      </div>
    </Grid>
  ),
};
