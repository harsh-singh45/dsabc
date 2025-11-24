import type { Meta, StoryObj } from "@storybook/react";
import { Toast, ToastProvider, useToast } from "@intelation/ui";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "error"],
      description: "Toast variant",
    },
    message: {
      control: "text",
      description: "Toast message content",
    },
    title: {
      control: "text",
      description: "Toast title",
    },
    duration: {
      control: "number",
      description: "Auto-dismiss duration in milliseconds (0 = no auto-dismiss)",
    },
    showProgress: {
      control: "boolean",
      description: "Show progress bar for auto-dismiss countdown",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    message: "This is a toast notification",
    duration: 0,
  },
};

export const WithTitle: Story = {
  args: {
    title: "Notification",
    message: "This is a toast with a title",
    duration: 0,
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    title: "Information",
    message: "Here's some useful information for you",
    duration: 0,
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Success!",
    message: "Your changes have been saved successfully",
    duration: 0,
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Warning",
    message: "Please review your changes before continuing",
    duration: 0,
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    title: "Error",
    message: "Failed to save changes. Please try again.",
    duration: 0,
  },
};

export const WithActions: Story = {
  args: {
    variant: "info",
    title: "Update Available",
    message: "A new version of the application is available",
    actions: [
      { label: "Update Now", onClick: () => console.log("Update clicked") },
      { label: "Later", onClick: () => console.log("Later clicked") },
    ],
    duration: 0,
  },
};

export const WithProgress: Story = {
  args: {
    variant: "success",
    message: "This toast will auto-dismiss in 5 seconds",
    duration: 5000,
    showProgress: true,
  },
};

export const WithoutProgress: Story = {
  args: {
    variant: "info",
    message: "This toast will auto-dismiss in 5 seconds (no progress bar)",
    duration: 5000,
    showProgress: false,
  },
};

export const LongMessage: Story = {
  args: {
    variant: "info",
    title: "Long Message",
    message:
      "This is a much longer toast message to demonstrate how the component handles multiple lines of text. The toast should expand to fit the content while maintaining its maximum width.",
    duration: 0,
  },
};

export const CustomIcon: Story = {
  args: {
    variant: "info",
    title: "Custom Icon",
    message: "This toast uses a custom icon",
    icon: "🎉",
    duration: 0,
  },
};

// Interactive example with ToastProvider
const ToastProviderExample = () => {
  const { showToast } = useToast();

  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
      <button
        onClick={() =>
          showToast({
            variant: "success",
            message: "Success notification",
            duration: 3000,
          })
        }
        style={{
          padding: "8px 16px",
          backgroundColor: "#22c55e",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Show Success Toast
      </button>
      <button
        onClick={() =>
          showToast({
            variant: "error",
            title: "Error",
            message: "Something went wrong",
            duration: 3000,
          })
        }
        style={{
          padding: "8px 16px",
          backgroundColor: "#ef4444",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Show Error Toast
      </button>
      <button
        onClick={() =>
          showToast({
            variant: "warning",
            title: "Warning",
            message: "Please be careful",
            duration: 3000,
          })
        }
        style={{
          padding: "8px 16px",
          backgroundColor: "#eab308",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Show Warning Toast
      </button>
      <button
        onClick={() =>
          showToast({
            variant: "info",
            title: "Update Available",
            message: "A new version is available",
            actions: [
              { label: "Update", onClick: () => console.log("Update") },
              { label: "Dismiss", onClick: () => console.log("Dismiss") },
            ],
            duration: 5000,
          })
        }
        style={{
          padding: "8px 16px",
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Show Toast with Actions
      </button>
    </div>
  );
};

export const WithProvider: Story = {
  render: () => (
    <ToastProvider position="top-right">
      <ToastProviderExample />
    </ToastProvider>
  ),
};

export const Playground: Story = {
  args: {
    variant: "info",
    title: "Playground Toast",
    message: "Customize this toast using the controls below",
    duration: 0,
    showProgress: true,
  },
};
