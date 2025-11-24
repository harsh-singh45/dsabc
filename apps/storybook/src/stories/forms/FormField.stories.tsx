import type { Meta, StoryObj } from "@storybook/react";
import { FormField, Input, Select, Textarea } from "@intelation/ui";

const meta = {
  title: "Forms/FormField",
  component: FormField,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Flexible form field wrapper that provides consistent layout, labeling, and validation messaging for any form input. Supports top and left label positioning, required indicators, helper text, and validation states.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label text for the form field",
    },
    labelPosition: {
      control: "select",
      options: ["top", "left"],
      description: "Position of the label relative to the input",
    },
    required: {
      control: "boolean",
      description: "Whether the field is required (shows asterisk)",
    },
    helperText: {
      control: "text",
      description: "Helper text displayed below the input",
    },
    error: {
      control: "text",
      description: "Error message (overrides helperText)",
    },
    success: {
      control: "text",
      description: "Success message (overrides helperText)",
    },
  },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Email Address",
    children: <Input type="email" placeholder="Enter your email" />,
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Username",
    helperText: "Choose a unique username between 3-20 characters",
    children: <Input placeholder="Enter username" />,
  },
};

export const Required: Story = {
  args: {
    label: "Password",
    required: true,
    children: <Input type="password" placeholder="Enter password" />,
  },
};

export const WithError: Story = {
  args: {
    label: "Email Address",
    error: "Please enter a valid email address",
    children: <Input type="email" value="invalid-email" />,
  },
};

export const WithSuccess: Story = {
  args: {
    label: "Username",
    success: "Username is available!",
    children: <Input value="john_doe" />,
  },
};

export const LeftLabelPosition: Story = {
  args: {
    label: "Full Name",
    labelPosition: "left",
    children: <Input placeholder="John Doe" />,
  },
};

export const LeftLabelWithHelperText: Story = {
  args: {
    label: "Company",
    labelPosition: "left",
    helperText: "Enter your company or organization name",
    children: <Input placeholder="Acme Inc." />,
  },
};

export const WithSelect: Story = {
  args: {
    label: "Country",
    required: true,
    helperText: "Select your country of residence",
    children: (
      <Select>
        <option value="">Select country</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
        <option value="au">Australia</option>
      </Select>
    ),
  },
};

export const WithTextarea: Story = {
  args: {
    label: "Description",
    helperText: "Provide a brief description (max 500 characters)",
    children: (
      <Textarea
        placeholder="Enter description..."
        rows={4}
      />
    ),
  },
};

export const DisabledInput: Story = {
  args: {
    label: "Account ID",
    helperText: "This field is auto-generated and cannot be modified",
    children: <Input value="ACC-2024-12345" disabled />,
  },
};

export const LongLabelAndError: Story = {
  args: {
    label: "Detailed Business Address with Additional Information",
    error:
      "The address you entered appears to be incomplete. Please provide a complete street address including street number, street name, city, state, and postal code.",
    children: <Input value="123 Main" />,
  },
};

export const MultipleFields: Story = {
  args: {
    children: <Input />,
  },
  render: () => (
    <div style={{ maxWidth: "600px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <FormField label="First Name" required>
        <Input placeholder="John" />
      </FormField>
      <FormField label="Last Name" required>
        <Input placeholder="Doe" />
      </FormField>
      <FormField label="Email" required helperText="We'll never share your email">
        <Input type="email" placeholder="john.doe@example.com" />
      </FormField>
      <FormField
        label="Phone Number"
        helperText="Optional: Include country code"
      >
        <Input type="tel" placeholder="+1 (555) 123-4567" />
      </FormField>
      <FormField
        label="Role"
        required
        helperText="Select your primary role"
      >
        <Select>
          <option value="">Select role</option>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
          <option value="manager">Manager</option>
        </Select>
      </FormField>
    </div>
  ),
};

export const LeftLabelForm: Story = {
  args: {
    children: <Input />,
  },
  render: () => (
    <div style={{ maxWidth: "800px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <FormField label="Username" labelPosition="left" required>
        <Input placeholder="Choose username" />
      </FormField>
      <FormField label="Email" labelPosition="left" required>
        <Input type="email" placeholder="your.email@example.com" />
      </FormField>
      <FormField
        label="Country"
        labelPosition="left"
        helperText="Your country of residence"
      >
        <Select>
          <option value="">Select country</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="ca">Canada</option>
        </Select>
      </FormField>
      <FormField
        label="Bio"
        labelPosition="left"
        helperText="Tell us about yourself"
      >
        <Textarea rows={3} placeholder="Enter your bio..." />
      </FormField>
    </div>
  ),
};

export const ValidationStates: Story = {
  args: {
    children: <Input />,
  },
  render: () => (
    <div style={{ maxWidth: "600px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <FormField label="Valid Email" success="Email format is correct">
        <Input type="email" value="user@example.com" />
      </FormField>
      <FormField label="Invalid Email" error="Please enter a valid email address">
        <Input type="email" value="invalid-email" />
      </FormField>
      <FormField label="Neutral State" helperText="Enter your email address">
        <Input type="email" placeholder="email@example.com" />
      </FormField>
    </div>
  ),
};
