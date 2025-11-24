import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@intelation/ui";

const meta = {
  title: "Layout/Box",
  component: Box,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible container component for layouts. Use Box for simple containers with padding, margins, backgrounds, and borders.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: "select",
      options: ["div", "section", "article", "main", "aside", "header", "footer"],
      description: "The HTML element to render",
    },
    padding: {
      control: "text",
      description: "Padding using spacing tokens (e.g., '4', '8', 'md')",
    },
    margin: {
      control: "text",
      description: "Margin using spacing tokens (e.g., '4', '8', 'md')",
    },
    bg: {
      control: "text",
      description: "Background color using color tokens (e.g., 'brand-500', 'gray-100')",
    },
    borderRadius: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "full"],
      description: "Border radius",
    },
    border: {
      control: "text",
      description: "Border style (e.g., '1px solid #e5e7eb')",
    },
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is a Box component",
    padding: "4",
  },
};

export const WithBackground: Story = {
  args: {
    children: "Box with background color",
    padding: "6",
    bg: "brand-500",
    borderRadius: "md",
    style: { color: "white" },
  },
};

export const WithBorder: Story = {
  args: {
    children: "Box with border",
    padding: "4",
    border: "2px solid #3b82f6",
    borderRadius: "lg",
  },
};

export const AsCard: Story = {
  args: {
    children: (
      <>
        <h3 className="typography-heading-sm m-0 mb-2">
          Card-like Box
        </h3>
        <p className="typography-body-md m-0 text-gray-600">
          Using Box component as a card with padding, background, border radius, and shadow.
        </p>
      </>
    ),
    padding: "6",
    bg: "gray-50",
    borderRadius: "lg",
    border: "1px solid #e5e7eb",
    style: { maxWidth: "400px" },
  },
};

export const Nested: Story = {
  render: () => (
    <Box padding="6" bg="gray-100" borderRadius="lg">
      <h3 className="m-0 mb-4">Outer Box</h3>
      <Box padding="4" bg="white" borderRadius="md" border="1px solid #e5e7eb">
        <p className="m-0">Nested inner Box</p>
      </Box>
    </Box>
  ),
};

export const ResponsiveLayout: Story = {
  render: () => (
    <Box
      padding="8"
      bg="gray-50"
      borderRadius="xl"
      className="w-full max-w-xl"
    >
      <Box padding="4" bg="brand-500" borderRadius="md" margin="0 0 4 0" className="text-white">
        Header Section
      </Box>
      <Box padding="4" bg="white" borderRadius="md" border="1px solid #e5e7eb">
        Content Section
      </Box>
    </Box>
  ),
};
