import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@intelation/ui";

const meta = {
  title: "Forms/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Input component for text input with label, validation states, helper text, and icon support. Supports multiple sizes and full-width layouts.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "The size of the input",
    },
    fullWidth: {
      control: "boolean",
      description: "Whether the input should take full width",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
    },
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url"],
      description: "The type of input",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
    helperText: "Choose a unique username",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input size="sm" placeholder="Small input" label="Small" />
      <Input size="md" placeholder="Medium input" label="Medium" />
      <Input size="lg" placeholder="Large input" label="Large" />
    </div>
  ),
};

export const ValidationStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
      <Input
        label="Email"
        placeholder="Enter email"
        error="Email is required"
      />
      <Input
        label="Username"
        placeholder="Enter username"
        success="Username is available"
      />
      <Input
        label="Name"
        placeholder="Enter name"
        helperText="Enter your full name"
      />
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input
        label="Search"
        placeholder="Search..."
        leftIcon={
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM18 18l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter password"
        rightIcon={
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 3C6 3 2.73 5.11 1 8.5 2.73 11.89 6 14 10 14s7.27-2.11 9-5.5C17.27 5.11 14 3 10 3z" stroke="currentColor" strokeWidth="2"/>
            <circle cx="10" cy="8.5" r="2.5" stroke="currentColor" strokeWidth="2"/>
          </svg>
        }
      />
      <Input
        label="Amount"
        placeholder="0.00"
        type="number"
        leftIcon={
          <span style={{ fontSize: '14px', fontWeight: 600 }}>$</span>
        }
        rightIcon={
          <span style={{ fontSize: '12px', color: '#6b7280' }}>USD</span>
        }
      />
    </div>
  ),
};

export const InputTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input label="Text" type="text" placeholder="Enter text" />
      <Input label="Email" type="email" placeholder="name@example.com" />
      <Input label="Password" type="password" placeholder="Enter password" />
      <Input label="Number" type="number" placeholder="0" />
      <Input label="Tel" type="tel" placeholder="+1 (555) 000-0000" />
      <Input label="URL" type="url" placeholder="https://example.com" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    placeholder: "Cannot edit",
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    label: "Full Width Input",
    placeholder: "This input takes full width",
    fullWidth: true,
  },
  decorators: [
    (Story: React.ComponentType) => (
      <div style={{ width: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const ErrorState: Story = {
  args: {
    label: "Email Address",
    placeholder: "Enter your email",
    type: "email",
    error: "Please enter a valid email address",
  },
};

export const SuccessState: Story = {
  args: {
    label: "Username",
    placeholder: "Choose a username",
    success: "This username is available",
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: "Name",
    defaultValue: "John Doe",
  },
};

export const AllFeatures: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '400px' }}>
      <Input
        label="Search Products"
        placeholder="Type to search..."
        helperText="Search by name, category, or SKU"
        size="lg"
        leftIcon={
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM18 18l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        }
      />
      <Input
        label="Email Address"
        type="email"
        placeholder="name@company.com"
        error="This email is already registered"
        size="md"
      />
      <Input
        label="Promo Code"
        placeholder="Enter code"
        success="Valid code! 20% discount applied"
        size="sm"
      />
    </div>
  ),
};
