import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "@intelation/ui";
import { useState } from "react";

const meta = {
  title: "Forms/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Radio button component for selecting a single option from a group with label, validation states, and helper text support.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "The size of the radio button",
    },
    disabled: {
      control: "boolean",
      description: "Whether the radio button is disabled",
    },
    checked: {
      control: "boolean",
      description: "Whether the radio button is checked",
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Option",
    name: "default",
  },
};

export const RadioGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Radio label="React" name="framework" value="react" />
      <Radio label="Vue" name="framework" value="vue" />
      <Radio label="Angular" name="framework" value="angular" />
      <Radio label="Svelte" name="framework" value="svelte" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Radio size="sm" label="Small" name="size-demo" value="sm" />
      <Radio size="md" label="Medium" name="size-demo" value="md" />
      <Radio size="lg" label="Large" name="size-demo" value="lg" />
    </div>
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Radio
        label="Email notifications"
        helperText="Receive updates via email"
        name="notification"
        value="email"
      />
      <Radio
        label="SMS notifications"
        helperText="Receive updates via text message"
        name="notification"
        value="sms"
      />
      <Radio
        label="Push notifications"
        helperText="Receive updates in-app"
        name="notification"
        value="push"
      />
    </div>
  ),
};

export const ValidationStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Radio
        label="Option with error"
        error="This option has an error"
        name="validation"
        value="error"
      />
      <Radio
        label="Option with helper text"
        helperText="Additional information"
        name="validation"
        value="helper"
      />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Radio label="Disabled unchecked" name="disabled" value="unchecked" disabled />
      <Radio label="Disabled checked" name="disabled" value="checked" disabled checked />
    </div>
  ),
};

export const CheckedByDefault: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Radio label="Option 1" name="default-check" value="1" checked />
      <Radio label="Option 2" name="default-check" value="2" />
      <Radio label="Option 3" name="default-check" value="3" />
    </div>
  ),
};

export const ControlledRadioGroup: Story = {
  render: () => {
    const ControlledExample = () => {
      const [selected, setSelected] = useState("option1");

      return (
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
            <Radio
              label="Option 1"
              name="controlled"
              value="option1"
              checked={selected === "option1"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSelected(e.target.value)}
            />
            <Radio
              label="Option 2"
              name="controlled"
              value="option2"
              checked={selected === "option2"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSelected(e.target.value)}
            />
            <Radio
              label="Option 3"
              name="controlled"
              value="option3"
              checked={selected === "option3"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSelected(e.target.value)}
            />
          </div>
          <div style={{ padding: '12px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
            <strong>Selected:</strong> {selected}
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
        <h4 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Shipping Method</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Radio
            label="Standard Shipping"
            helperText="5-7 business days - Free"
            name="shipping"
            value="standard"
            checked
            size="md"
          />
          <Radio
            label="Express Shipping"
            helperText="2-3 business days - $9.99"
            name="shipping"
            value="express"
            size="md"
          />
          <Radio
            label="Overnight Shipping"
            helperText="Next business day - $24.99"
            name="shipping"
            value="overnight"
            size="md"
          />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Subscription Plan</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Radio
            label="Monthly - $9.99/month"
            helperText="Cancel anytime"
            name="plan"
            value="monthly"
            size="sm"
          />
          <Radio
            label="Yearly - $99.99/year"
            helperText="Save 17% compared to monthly (Most popular)"
            name="plan"
            value="yearly"
            size="sm"
          />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Privacy Settings</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Radio
            label="Public"
            helperText="Anyone can view your profile"
            name="privacy"
            value="public"
            size="md"
          />
          <Radio
            label="Friends Only"
            helperText="Only friends can view your profile"
            name="privacy"
            value="friends"
            checked
            size="md"
          />
          <Radio
            label="Private"
            helperText="Only you can view your profile"
            name="privacy"
            value="private"
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
      <Radio label="Option 1" name="inline" value="1" />
      <Radio label="Option 2" name="inline" value="2" />
      <Radio label="Option 3" name="inline" value="3" />
      <Radio label="Option 4" name="inline" value="4" />
    </div>
  ),
};
