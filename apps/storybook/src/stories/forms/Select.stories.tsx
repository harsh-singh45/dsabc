import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "@intelation/ui";

const meta = {
  title: "Forms/Select",
  component: Select,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Select component for choosing from a list of options with label, validation states, and helper text support.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "The size of the select",
    },
    fullWidth: {
      control: "boolean",
      description: "Whether the select should take full width",
    },
    disabled: {
      control: "boolean",
      description: "Whether the select is disabled",
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleOptions = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
];

const countryOptions = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "ca", label: "Canada" },
  { value: "au", label: "Australia" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
];

export const Default: Story = {
  args: {
    options: sampleOptions,
    placeholder: "Select an option",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Framework",
    options: sampleOptions,
    placeholder: "Choose your framework",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Country",
    options: countryOptions,
    placeholder: "Select your country",
    helperText: "Choose the country for shipping",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Select size="sm" label="Small" options={sampleOptions} placeholder="Select..." />
      <Select size="md" label="Medium" options={sampleOptions} placeholder="Select..." />
      <Select size="lg" label="Large" options={sampleOptions} placeholder="Select..." />
    </div>
  ),
};

export const ValidationStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '300px' }}>
      <Select
        label="Framework"
        options={sampleOptions}
        placeholder="Select framework"
        error="Please select a framework"
      />
      <Select
        label="Country"
        options={countryOptions}
        placeholder="Select country"
        success="Country selected successfully"
      />
      <Select
        label="Language"
        options={[
          { value: "en", label: "English" },
          { value: "es", label: "Spanish" },
          { value: "fr", label: "French" },
        ]}
        placeholder="Select language"
        helperText="Choose your preferred language"
      />
    </div>
  ),
};

export const WithDisabledOptions: Story = {
  args: {
    label: "Subscription Plan",
    options: [
      { value: "free", label: "Free" },
      { value: "basic", label: "Basic - $9/month" },
      { value: "pro", label: "Pro - $29/month" },
      { value: "enterprise", label: "Enterprise - Contact Sales", disabled: true },
    ],
    placeholder: "Select a plan",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Select",
    options: sampleOptions,
    placeholder: "Cannot select",
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    label: "Full Width Select",
    options: countryOptions,
    placeholder: "Select country",
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
    label: "Framework",
    options: sampleOptions,
    placeholder: "Select framework",
    error: "This field is required",
  },
};

export const SuccessState: Story = {
  args: {
    label: "Framework",
    options: sampleOptions,
    placeholder: "Select framework",
    defaultValue: "react",
    success: "Framework selected successfully",
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: "Country",
    options: countryOptions,
    defaultValue: "us",
  },
};

export const LargeOptionsList: Story = {
  args: {
    label: "City",
    options: [
      { value: "nyc", label: "New York City" },
      { value: "la", label: "Los Angeles" },
      { value: "chicago", label: "Chicago" },
      { value: "houston", label: "Houston" },
      { value: "phoenix", label: "Phoenix" },
      { value: "philadelphia", label: "Philadelphia" },
      { value: "san-antonio", label: "San Antonio" },
      { value: "san-diego", label: "San Diego" },
      { value: "dallas", label: "Dallas" },
      { value: "san-jose", label: "San Jose" },
      { value: "austin", label: "Austin" },
      { value: "jacksonville", label: "Jacksonville" },
      { value: "fort-worth", label: "Fort Worth" },
      { value: "columbus", label: "Columbus" },
      { value: "charlotte", label: "Charlotte" },
    ],
    placeholder: "Select a city",
    helperText: "Choose from major US cities",
  },
};

export const RealWorldExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '400px' }}>
      <Select
        label="Payment Method"
        options={[
          { value: "credit", label: "Credit Card" },
          { value: "debit", label: "Debit Card" },
          { value: "paypal", label: "PayPal" },
          { value: "crypto", label: "Cryptocurrency", disabled: true },
        ]}
        placeholder="Choose payment method"
        helperText="Select how you'd like to pay"
        size="md"
      />
      <Select
        label="Priority"
        options={[
          { value: "low", label: "Low" },
          { value: "medium", label: "Medium" },
          { value: "high", label: "High" },
          { value: "urgent", label: "Urgent" },
        ]}
        placeholder="Select priority"
        error="Priority is required for this issue"
        size="sm"
      />
      <Select
        label="Department"
        options={[
          { value: "engineering", label: "Engineering" },
          { value: "design", label: "Design" },
          { value: "marketing", label: "Marketing" },
          { value: "sales", label: "Sales" },
          { value: "support", label: "Customer Support" },
        ]}
        defaultValue="engineering"
        success="Department assigned successfully"
        size="lg"
      />
    </div>
  ),
};

export const GroupedConcepts: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Select
        label="Role"
        options={[
          { value: "admin", label: "Administrator" },
          { value: "editor", label: "Editor" },
          { value: "viewer", label: "Viewer" },
          { value: "guest", label: "Guest", disabled: true },
        ]}
        placeholder="Select user role"
        helperText="Choose access level"
      />
    </div>
  ),
};
