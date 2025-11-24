import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@intelation/ui";
import { useState } from "react";

const meta = {
  title: "Forms/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Toggle switch component for binary on/off states. Supports multiple sizes, label positioning, loading states, and both controlled and uncontrolled modes. Fully accessible with keyboard navigation.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the switch",
    },
    labelPosition: {
      control: "select",
      options: ["left", "right"],
      description: "Position of the label relative to the switch",
    },
    label: {
      control: "text",
      description: "Label text for the switch",
    },
    disabled: {
      control: "boolean",
      description: "Whether the switch is disabled",
    },
    loading: {
      control: "boolean",
      description: "Whether the switch is in loading state",
    },
    checked: {
      control: "boolean",
      description: "Controlled checked state",
    },
    defaultChecked: {
      control: "boolean",
      description: "Default checked state (uncontrolled)",
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Enable notifications",
  },
};

export const Checked: Story = {
  args: {
    label: "Enable notifications",
    defaultChecked: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
      <Switch size="sm" label="Small switch" />
      <Switch size="md" label="Medium switch" defaultChecked />
      <Switch size="lg" label="Large switch" />
    </div>
  ),
};

export const LabelPositions: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
      <Switch label="Label on left" labelPosition="left" />
      <Switch label="Label on right" labelPosition="right" defaultChecked />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
      <Switch label="Disabled unchecked" disabled />
      <Switch label="Disabled checked" disabled defaultChecked />
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
      <Switch label="Loading unchecked" loading />
      <Switch label="Loading checked" loading defaultChecked />
    </div>
  ),
};

export const WithoutLabel: Story = {
  args: {},
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
        <Switch
          label={`Notifications are ${checked ? "enabled" : "disabled"}`}
          checked={checked}
          onChange={(newChecked) => setChecked(newChecked)}
        />
        <button
          onClick={() => setChecked(!checked)}
          style={{
            padding: "0.5rem 1rem",
            background: "var(--color-primary)",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Toggle via button
        </button>
        <p style={{ margin: 0 }}>Current state: {checked ? "ON" : "OFF"}</p>
      </div>
    );
  },
};

export const SettingsPanel: Story = {
  render: () => {
    const [settings, setSettings] = useState({
      notifications: true,
      emails: false,
      darkMode: true,
      autoSave: true,
      analytics: false,
    });

    const updateSetting = (key: keyof typeof settings) => (checked: boolean) => {
      setSettings((prev) => ({ ...prev, [key]: checked }));
    };

    return (
      <div
        style={{
          width: "400px",
          padding: "1.5rem",
          background: "var(--color-background-white)",
          border: "1px solid var(--color-border-primary)",
          borderRadius: "8px",
        }}
      >
        <h3 style={{ margin: "0 0 1.5rem 0", fontSize: "1.25rem" }}>Settings</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Switch
            label="Push Notifications"
            checked={settings.notifications}
            onChange={updateSetting("notifications")}
          />
          <Switch
            label="Email Notifications"
            checked={settings.emails}
            onChange={updateSetting("emails")}
          />
          <Switch
            label="Dark Mode"
            checked={settings.darkMode}
            onChange={updateSetting("darkMode")}
          />
          <Switch
            label="Auto-save"
            checked={settings.autoSave}
            onChange={updateSetting("autoSave")}
          />
          <Switch
            label="Analytics & Tracking"
            checked={settings.analytics}
            onChange={updateSetting("analytics")}
          />
        </div>
      </div>
    );
  },
};

export const AllSizesWithStates: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <h4 style={{ margin: "0 0 1rem 0" }}>Small</h4>
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Switch size="sm" label="Unchecked" />
          <Switch size="sm" label="Checked" defaultChecked />
          <Switch size="sm" label="Disabled" disabled />
          <Switch size="sm" label="Loading" loading />
        </div>
      </div>
      <div>
        <h4 style={{ margin: "0 0 1rem 0" }}>Medium</h4>
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Switch size="md" label="Unchecked" />
          <Switch size="md" label="Checked" defaultChecked />
          <Switch size="md" label="Disabled" disabled />
          <Switch size="md" label="Loading" loading />
        </div>
      </div>
      <div>
        <h4 style={{ margin: "0 0 1rem 0" }}>Large</h4>
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Switch size="lg" label="Unchecked" />
          <Switch size="lg" label="Checked" defaultChecked />
          <Switch size="lg" label="Disabled" disabled />
          <Switch size="lg" label="Loading" loading />
        </div>
      </div>
    </div>
  ),
};

export const LabelVariations: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
      <Switch label="Short label" />
      <Switch label="This is a longer label that provides more context about what the switch controls" />
      <Switch labelPosition="left" label="Left-aligned label" />
      <Switch labelPosition="left" label="Left-aligned with a very long descriptive label text" />
    </div>
  ),
};

export const FormIntegration: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      terms: false,
      newsletter: false,
      marketing: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert(JSON.stringify(formData, null, 2));
    };

    return (
      <form
        onSubmit={handleSubmit}
        style={{
          width: "400px",
          padding: "1.5rem",
          background: "var(--color-background-white)",
          border: "1px solid var(--color-border-primary)",
          borderRadius: "8px",
        }}
      >
        <h3 style={{ margin: "0 0 1.5rem 0" }}>Sign Up</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }}>
          <Switch
            label="I agree to the Terms and Conditions"
            checked={formData.terms}
            onChange={(checked) => setFormData({ ...formData, terms: checked })}
          />
          <Switch
            label="Subscribe to newsletter"
            checked={formData.newsletter}
            onChange={(checked) => setFormData({ ...formData, newsletter: checked })}
          />
          <Switch
            label="Receive marketing emails"
            checked={formData.marketing}
            onChange={(checked) => setFormData({ ...formData, marketing: checked })}
          />
        </div>
        <button
          type="submit"
          disabled={!formData.terms}
          style={{
            width: "100%",
            padding: "0.75rem",
            background: formData.terms ? "var(--color-primary)" : "var(--color-border-primary)",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: formData.terms ? "pointer" : "not-allowed",
            fontSize: "1rem",
          }}
        >
          Submit
        </button>
      </form>
    );
  },
};
