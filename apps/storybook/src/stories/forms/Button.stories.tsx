import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@intelation/ui";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Button component with multiple variants, sizes, and color schemes. Supports loading states, icons, and full-width layouts.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "outline", "ghost", "link"],
      description: "The visual style of the button",
    },
    colorScheme: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "danger", "violet"],
      description: "The color scheme of the button",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "The size of the button",
    },
    fullWidth: {
      control: "boolean",
      description: "Whether the button should take full width",
    },
    loading: {
      control: "boolean",
      description: "Whether the button is in loading state",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <Button variant="solid">Solid Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="ghost">Ghost Button</Button>
      <Button variant="link">Link Button</Button>
    </div>
  ),
};

export const ColorSchemes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <Button colorScheme="primary">Primary</Button>
      <Button colorScheme="secondary">Secondary</Button>
      <Button colorScheme="success">Success</Button>
      <Button colorScheme="warning">Warning</Button>
      <Button colorScheme="danger">Danger</Button>
      <Button colorScheme="violet">Violet</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <Button
        leftIcon={
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm1 11H7V7h2v4zm0-5H7V4h2v2z" />
          </svg>
        }
      >
        Left Icon
      </Button>
      <Button
        rightIcon={
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0l5.657 5.657-1.414 1.414L9 3.828V12H7V3.828L3.757 7.07 2.343 5.657z" />
          </svg>
        }
      >
        Right Icon
      </Button>
      <Button
        leftIcon={
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0L6.59 1.41 12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8z" />
          </svg>
        }
        rightIcon={
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0l5.657 5.657-1.414 1.414L9 3.828V12H7V3.828L3.757 7.07 2.343 5.657z" />
          </svg>
        }
      >
        Both Icons
      </Button>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <Button loading>Loading</Button>
      <Button variant="outline" loading>
        Loading
      </Button>
      <Button variant="ghost" loading>
        Loading
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button disabled>Disabled</Button>
      <Button variant="outline" disabled>
        Disabled
      </Button>
      <Button variant="ghost" disabled>
        Disabled
      </Button>
    </div>
  ),
};

export const FullWidth: Story = {
  args: {
    children: "Full Width Button",
    fullWidth: true,
  },
  decorators: [
    (Story: React.ComponentType) => (
      <div style={{ width: '384px' }}>
        <Story />
      </div>
    ),
  ],
};

export const OutlineVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <Button variant="outline" colorScheme="primary">
        Primary Outline
      </Button>
      <Button variant="outline" colorScheme="secondary">
        Secondary Outline
      </Button>
      <Button variant="outline" colorScheme="success">
        Success Outline
      </Button>
      <Button variant="outline" colorScheme="warning">
        Warning Outline
      </Button>
      <Button variant="outline" colorScheme="danger">
        Danger Outline
      </Button>
    </div>
  ),
};

export const GhostVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <Button variant="ghost" colorScheme="primary">
        Primary Ghost
      </Button>
      <Button variant="ghost" colorScheme="secondary">
        Secondary Ghost
      </Button>
      <Button variant="ghost" colorScheme="success">
        Success Ghost
      </Button>
      <Button variant="ghost" colorScheme="warning">
        Warning Ghost
      </Button>
      <Button variant="ghost" colorScheme="danger">
        Danger Ghost
      </Button>
    </div>
  ),
};
