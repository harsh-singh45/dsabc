import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "@intelation/ui";

const meta = {
  title: "Layout/Flex",
  component: Flex,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Flex component for flexbox layouts. Provides a simple API for common flexbox patterns with proper spacing using design tokens.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "select",
      options: ["row", "column", "row-reverse", "column-reverse"],
      description: "Flex direction",
    },
    gap: {
      control: "text",
      description: "Gap between items using spacing tokens",
    },
    align: {
      control: "select",
      options: ["start", "center", "end", "stretch", "baseline"],
      description: "Align items",
    },
    justify: {
      control: "select",
      options: ["start", "center", "end", "between", "around", "evenly"],
      description: "Justify content",
    },
    wrap: {
      control: "boolean",
      description: "Whether items should wrap",
    },
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoBox = ({ children, color = "#f3f4f6", style, className }: { children: React.ReactNode; color?: string; style?: React.CSSProperties; className?: string }) => (
  <div
    className={`p-4 rounded-lg border border-gray-200 ${className || ''}`}
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
    <Flex gap="4">
      <DemoBox>Item 1</DemoBox>
      <DemoBox>Item 2</DemoBox>
      <DemoBox>Item 3</DemoBox>
    </Flex>
  ),
};

export const Row: Story = {
  render: () => (
    <Flex direction="row" gap="4">
      <DemoBox>Item 1</DemoBox>
      <DemoBox>Item 2</DemoBox>
      <DemoBox>Item 3</DemoBox>
    </Flex>
  ),
};

export const Column: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <DemoBox>Item 1</DemoBox>
      <DemoBox>Item 2</DemoBox>
      <DemoBox>Item 3</DemoBox>
    </Flex>
  ),
};

export const AlignCenter: Story = {
  render: () => (
    <Flex direction="row" gap="4" align="center" className="h-48 border border-dashed border-gray-300">
      <DemoBox>Short</DemoBox>
      <DemoBox>
        Tall
        <br />
        Content
      </DemoBox>
      <DemoBox>Short</DemoBox>
    </Flex>
  ),
};

export const JustifyBetween: Story = {
  render: () => (
    <Flex direction="row" gap="4" justify="between" className="w-96 border border-dashed border-gray-300 p-4">
      <DemoBox>Left</DemoBox>
      <DemoBox>Center</DemoBox>
      <DemoBox>Right</DemoBox>
    </Flex>
  ),
};

export const JustifyCenter: Story = {
  render: () => (
    <Flex direction="row" gap="4" justify="center" className="w-96 border border-dashed border-gray-300 p-4">
      <DemoBox>Item 1</DemoBox>
      <DemoBox>Item 2</DemoBox>
    </Flex>
  ),
};

export const CenterBoth: Story = {
  render: () => (
    <Flex
      direction="row"
      gap="4"
      align="center"
      justify="center"
      className="w-96 h-48 border border-dashed border-gray-300"
    >
      <DemoBox>Centered</DemoBox>
    </Flex>
  ),
};

export const Wrap: Story = {
  render: () => (
    <Flex direction="row" gap="4" wrap className="w-96 border border-dashed border-gray-300 p-4">
      <DemoBox>Item 1</DemoBox>
      <DemoBox>Item 2</DemoBox>
      <DemoBox>Item 3</DemoBox>
      <DemoBox>Item 4</DemoBox>
      <DemoBox>Item 5</DemoBox>
      <DemoBox>Item 6</DemoBox>
    </Flex>
  ),
};

export const ResponsiveGaps: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h4 className="mb-2">Gap: 2</h4>
        <Flex gap="2">
          <DemoBox>Item 1</DemoBox>
          <DemoBox>Item 2</DemoBox>
          <DemoBox>Item 3</DemoBox>
        </Flex>
      </div>
      <div>
        <h4 className="mb-2">Gap: 4</h4>
        <Flex gap="4">
          <DemoBox>Item 1</DemoBox>
          <DemoBox>Item 2</DemoBox>
          <DemoBox>Item 3</DemoBox>
        </Flex>
      </div>
      <div>
        <h4 className="mb-2">Gap: 8</h4>
        <Flex gap="8">
          <DemoBox>Item 1</DemoBox>
          <DemoBox>Item 2</DemoBox>
          <DemoBox>Item 3</DemoBox>
        </Flex>
      </div>
    </div>
  ),
};

export const HeaderLayout: Story = {
  render: () => (
    <Flex
      direction="row"
      gap="4"
      align="center"
      justify="between"
      className="w-full max-w-3xl p-4 bg-gray-50 rounded-lg border border-gray-200"
    >
      <DemoBox color="#3b82f6" className="text-white">
        Logo
      </DemoBox>
      <Flex direction="row" gap="4">
        <DemoBox>Home</DemoBox>
        <DemoBox>About</DemoBox>
        <DemoBox>Contact</DemoBox>
      </Flex>
      <DemoBox color="#10b981" className="text-white">
        Profile
      </DemoBox>
    </Flex>
  ),
};
