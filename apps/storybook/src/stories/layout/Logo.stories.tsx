import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "@intelation/ui";

const meta = {
  title: "Layout/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "The Intelation logo component with multiple size and variant options. Can be used as a clickable element or static display.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "Size variant of the logo",
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
    },
    variant: {
      description: "Color variant of the logo",
      control: { type: "select" },
      options: ["default", "white", "dark"],
    },
    type: {
      description: "Display type - icon only, text only, or full logo",
      control: { type: "select" },
      options: ["icon", "text", "full"],
    },
    width: {
      description: "Custom width (overrides size)",
      control: { type: "text" },
    },
    height: {
      description: "Custom height (overrides size)",
      control: { type: "text" },
    },
    alt: {
      description: "Alt text for accessibility",
      control: { type: "text" },
    },
    clickable: {
      description: "Whether the logo should be clickable",
      control: { type: "boolean" },
    },
    loading: {
      description: "Show loading state",
      control: { type: "boolean" },
    },
    onClick: {
      description: "Click handler when clickable is true",
      action: "logo clicked",
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const ExtraLarge: Story = {
  args: {
    size: "xl",
  },
};

export const IconOnly: Story = {
  args: {
    type: "icon",
  },
};

export const TextOnly: Story = {
  args: {
    type: "text",
  },
};

export const WhiteVariant: Story = {
  args: {
    variant: "white",
  },
  decorators: [
    (Story: any) => (
      <div 
        className="p-8 rounded-lg"
        style={{ 
          background: "linear-gradient(0deg, #2E2B32 0%, #37343C 100%)"
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const DarkVariant: Story = {
  args: {
    variant: "dark",
  },
};

export const Clickable: Story = {
  args: {
    clickable: true,
    onClick: () => {
      alert("Logo clicked! In a real app, this would navigate to home.");
    },
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const CustomSize: Story = {
  args: {
    width: "200px",
    height: "60px",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8 items-start">
      <div>
        <h3 className="mb-2 text-sm font-semibold">Small</h3>
        <Logo size="sm" />
      </div>
      <div>
        <h3 className="mb-2 text-sm font-semibold">Medium</h3>
        <Logo size="md" />
      </div>
      <div>
        <h3 className="mb-2 text-sm font-semibold">Large</h3>
        <Logo size="lg" />
      </div>
      <div>
        <h3 className="mb-2 text-sm font-semibold">Extra Large</h3>
        <Logo size="xl" />
      </div>
    </div>
  ),
};

export const AllTypes: Story = {
  render: () => (
    <div className="flex flex-col gap-8 items-start">
      <div>
        <h3 className="mb-2 text-sm font-semibold">Icon Only</h3>
        <Logo type="icon" size="lg" />
      </div>
      <div>
        <h3 className="mb-2 text-sm font-semibold">Text Only</h3>
        <Logo type="text" size="lg" />
      </div>
      <div>
        <h3 className="mb-2 text-sm font-semibold">Full Logo</h3>
        <Logo type="full" size="lg" />
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-8 items-center text-center">
      <div>
        <h3 className="mb-4 text-sm font-semibold">Default</h3>
        <div className="p-4 bg-gray-50 rounded-lg">
          <Logo variant="default" size="lg" />
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-semibold">White</h3>
        <div 
          className="p-4 rounded-lg"
          style={{ 
            background: "linear-gradient(0deg, #2E2B32 0%, #37343C 100%)"
          }}
        >
          <Logo variant="white" size="lg" />
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-semibold">Dark</h3>
        <div className="p-4 bg-gray-200 rounded-lg">
          <Logo variant="dark" size="lg" />
        </div>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => (
    <div className="flex gap-8 items-center">
      <div>
        <h3 className="mb-2 text-sm font-semibold">Static Logo</h3>
        <Logo size="lg" />
      </div>
      <div>
        <h3 className="mb-2 text-sm font-semibold">Clickable Logo</h3>
        <Logo 
          size="lg" 
          clickable 
          onClick={() => alert("Navigating to home page...")} 
        />
      </div>
    </div>
  ),
};