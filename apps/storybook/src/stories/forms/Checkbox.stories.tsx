import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@intelation/ui";
import { useState } from "react";

const meta = {
  title: "Forms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Checkbox component for selecting multiple options with label, validation states, helper text, and indeterminate state support.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "The size of the checkbox",
    },
    disabled: {
      control: "boolean",
      description: "Whether the checkbox is disabled",
    },
    checked: {
      control: "boolean",
      description: "Whether the checkbox is checked",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Option",
  },
};

export const CheckboxGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox label="React" value="react" />
      <Checkbox label="Vue" value="vue" />
      <Checkbox label="Angular" value="angular" />
      <Checkbox label="Svelte" value="svelte" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox size="sm" label="Small" value="sm" />
      <Checkbox size="md" label="Medium" value="md" />
      <Checkbox size="lg" label="Large" value="lg" />
    </div>
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox
        label="Email notifications"
        helperText="Receive updates via email"
        value="email"
      />
      <Checkbox
        label="SMS notifications"
        helperText="Receive updates via text message"
        value="sms"
      />
      <Checkbox
        label="Push notifications"
        helperText="Receive updates in-app"
        value="push"
      />
    </div>
  ),
};

export const ValidationStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Checkbox
        label="Option with error"
        error="This option has an error"
        value="error"
      />
      <Checkbox
        label="Option with helper text"
        helperText="Additional information"
        value="helper"
      />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox label="Disabled unchecked" value="unchecked" disabled />
      <Checkbox label="Disabled checked" value="checked" disabled checked />
    </div>
  ),
};

export const CheckedByDefault: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox label="Option 1" value="1" checked />
      <Checkbox label="Option 2" value="2" />
      <Checkbox label="Option 3" value="3" checked />
    </div>
  ),
};

export const ControlledCheckboxes: Story = {
  render: () => {
    const ControlledExample = () => {
      const [selected, setSelected] = useState<string[]>(["option1"]);

      const handleChange = (value: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
          setSelected([...selected, value]);
        } else {
          setSelected(selected.filter(item => item !== value));
        }
      };

      return (
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
            <Checkbox
              label="Option 1"
              value="option1"
              checked={selected.includes("option1")}
              onChange={handleChange("option1")}
            />
            <Checkbox
              label="Option 2"
              value="option2"
              checked={selected.includes("option2")}
              onChange={handleChange("option2")}
            />
            <Checkbox
              label="Option 3"
              value="option3"
              checked={selected.includes("option3")}
              onChange={handleChange("option3")}
            />
          </div>
          <div style={{ padding: '12px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
            <strong>Selected:</strong> {selected.length > 0 ? selected.join(", ") : "None"}
          </div>
        </div>
      );
    };

    return <ControlledExample />;
  },
};

export const RealWorldExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '400px' }}>
      <div>
        <h4 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Email Preferences</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Checkbox
            label="Product Updates"
            helperText="Get notified about new features and improvements"
            value="product"
            checked
            size="md"
          />
          <Checkbox
            label="Marketing Emails"
            helperText="Receive promotional offers and announcements"
            value="marketing"
            size="md"
          />
          <Checkbox
            label="Weekly Newsletter"
            helperText="Get a weekly digest of the latest news"
            value="newsletter"
            checked
            size="md"
          />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Terms and Conditions</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Checkbox
            label="I agree to the Terms of Service"
            error="You must agree to continue"
            value="terms"
            size="sm"
          />
          <Checkbox
            label="I agree to the Privacy Policy"
            error="You must agree to continue"
            value="privacy"
            size="sm"
          />
          <Checkbox
            label="Subscribe to newsletter (optional)"
            helperText="You can unsubscribe at any time"
            value="subscribe"
            size="sm"
          />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Feature Flags</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Checkbox
            label="Enable Dark Mode"
            helperText="Use dark theme across the app"
            value="darkmode"
            checked
            size="md"
          />
          <Checkbox
            label="Enable Beta Features"
            helperText="Test new features before they're released"
            value="beta"
            size="md"
          />
          <Checkbox
            label="Enable Analytics"
            helperText="Help us improve by sharing usage data"
            value="analytics"
            checked
            size="md"
          />
        </div>
      </div>
    </div>
  ),
};

export const InlineLayout: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
      <Checkbox label="Option 1" value="1" />
      <Checkbox label="Option 2" value="2" />
      <Checkbox label="Option 3" value="3" />
      <Checkbox label="Option 4" value="4" />
    </div>
  ),
};
