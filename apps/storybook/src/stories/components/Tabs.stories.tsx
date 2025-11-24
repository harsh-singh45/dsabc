import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "@intelation/ui";
import type { TabItem } from "@intelation/ui";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Tabs organize content into separate views where only one view can be visible at a time. Supports keyboard navigation and ARIA attributes for accessibility.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    activeTab: {
      control: "text",
      description: "ID of the currently active tab (controlled)",
    },
    defaultActiveTab: {
      control: "text",
      description: "ID of the default active tab (uncontrolled)",
    },
    onChange: {
      action: "tab changed",
      description: "Callback fired when active tab changes",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "The orientation of the tabs",
    },
    variant: {
      control: "select",
      options: ["underline", "pills", "cards"],
      description: "The visual style of the tabs",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "The size of the tabs",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

// Sample tab items for stories
const basicTabs: TabItem[] = [
  {
    id: "profile",
    label: "Profile",
    content: (
      <div>
        <h3 style={{ marginTop: 0 }}>User Profile</h3>
        <p>Manage your personal information and preferences.</p>
        <p>Update your profile picture, bio, and contact details.</p>
      </div>
    ),
  },
  {
    id: "security",
    label: "Security",
    content: (
      <div>
        <h3 style={{ marginTop: 0 }}>Security Settings</h3>
        <p>Configure password, two-factor authentication, and security preferences.</p>
        <p>Review recent login activity and active sessions.</p>
      </div>
    ),
  },
  {
    id: "notifications",
    label: "Notifications",
    content: (
      <div>
        <h3 style={{ marginTop: 0 }}>Notification Preferences</h3>
        <p>Choose which notifications you want to receive.</p>
        <p>Configure email, push, and in-app notification settings.</p>
      </div>
    ),
  },
  {
    id: "billing",
    label: "Billing",
    content: (
      <div>
        <h3 style={{ marginTop: 0 }}>Billing Information</h3>
        <p>View your subscription plan and payment history.</p>
        <p>Update payment methods and billing address.</p>
      </div>
    ),
  },
];

// Tabs with icons
const tabsWithIcons: TabItem[] = [
  {
    id: "home",
    label: "Home",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 2l6 5v7H2V7l6-5zm0 1.5L3 8v5h10V8l-5-4.5z" />
      </svg>
    ),
    content: <div><h3 style={{ marginTop: 0 }}>Home</h3><p>Welcome to the home page.</p></div>,
  },
  {
    id: "search",
    label: "Search",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M11.5 7a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM12.854 11.793l3 3-.708.707-3-3a6 6 0 111.415-1.414z" />
      </svg>
    ),
    content: <div><h3 style={{ marginTop: 0 }}>Search</h3><p>Search for content across the platform.</p></div>,
  },
  {
    id: "settings",
    label: "Settings",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 10a2 2 0 100-4 2 2 0 000 4zm-.5-7h1v1.5h-1V3zm0 8.5h1V13h-1v-1.5zM3 7.5h1.5v1H3v-1zm8.5 0H13v1h-1.5v-1z" />
      </svg>
    ),
    content: <div><h3 style={{ marginTop: 0 }}>Settings</h3><p>Configure your preferences and settings.</p></div>,
  },
];

// Tabs with disabled items
const tabsWithDisabled: TabItem[] = [
  {
    id: "overview",
    label: "Overview",
    content: <div><p>Overview content is available.</p></div>,
  },
  {
    id: "analytics",
    label: "Analytics",
    content: <div><p>Analytics content is available.</p></div>,
  },
  {
    id: "reports",
    label: "Reports (Coming Soon)",
    content: <div><p>Reports will be available soon.</p></div>,
    disabled: true,
  },
  {
    id: "export",
    label: "Export Data",
    content: <div><p>Export functionality is available.</p></div>,
  },
];

// Default Story - Horizontal Underline
export const Default: Story = {
  args: {
    items: basicTabs,
    defaultActiveTab: "profile",
  },
};

// Pills Variant
export const Pills: Story = {
  args: {
    items: basicTabs,
    defaultActiveTab: "profile",
    variant: "pills",
  },
};

// Cards Variant
export const Cards: Story = {
  args: {
    items: basicTabs,
    defaultActiveTab: "profile",
    variant: "cards",
  },
};

// Vertical Orientation
export const Vertical: Story = {
  args: {
    items: basicTabs,
    defaultActiveTab: "profile",
    orientation: "vertical",
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "800px" }}>
        <Story />
      </div>
    ),
  ],
};

// Vertical with Pills
export const VerticalPills: Story = {
  args: {
    items: basicTabs,
    defaultActiveTab: "profile",
    orientation: "vertical",
    variant: "pills",
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "800px" }}>
        <Story />
      </div>
    ),
  ],
};

// With Icons
export const WithIcons: Story = {
  args: {
    items: tabsWithIcons,
    defaultActiveTab: "home",
    variant: "pills",
  },
};

// With Disabled Tabs
export const WithDisabledTabs: Story = {
  args: {
    items: tabsWithDisabled,
    defaultActiveTab: "overview",
  },
};

// Small Size
export const SmallSize: Story = {
  args: {
    items: basicTabs.slice(0, 3),
    defaultActiveTab: "profile",
    size: "sm",
  },
};

// Large Size
export const LargeSize: Story = {
  args: {
    items: basicTabs.slice(0, 3),
    defaultActiveTab: "profile",
    size: "lg",
  },
};

// Controlled Example
export const Controlled: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState("tab1");

    const controlledTabs: TabItem[] = [
      {
        id: "tab1",
        label: "Tab 1",
        content: (
          <div>
            <p>This is a controlled tabs component.</p>
            <p>Current active tab: <strong>{activeTab}</strong></p>
            <button
              onClick={() => setActiveTab("tab2")}
              style={{
                padding: "8px 16px",
                marginTop: "8px",
                cursor: "pointer",
              }}
            >
              Go to Tab 2
            </button>
          </div>
        ),
      },
      {
        id: "tab2",
        label: "Tab 2",
        content: (
          <div>
            <p>You can control tab switching programmatically.</p>
            <button
              onClick={() => setActiveTab("tab3")}
              style={{
                padding: "8px 16px",
                marginTop: "8px",
                cursor: "pointer",
              }}
            >
              Go to Tab 3
            </button>
          </div>
        ),
      },
      {
        id: "tab3",
        label: "Tab 3",
        content: (
          <div>
            <p>Controlled state is useful for complex scenarios.</p>
            <button
              onClick={() => setActiveTab("tab1")}
              style={{
                padding: "8px 16px",
                marginTop: "8px",
                cursor: "pointer",
              }}
            >
              Back to Tab 1
            </button>
          </div>
        ),
      },
    ];

    return (
      <Tabs
        {...args}
        items={controlledTabs}
        activeTab={activeTab}
        onChange={setActiveTab}
      />
    );
  },
};

// Dashboard Example
export const DashboardExample: Story = {
  args: {
    items: [
      {
        id: "overview",
        label: "Overview",
        icon: (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M2 2h5v5H2V2zm7 0h5v5H9V2zM2 9h5v5H2V9zm7 0h5v5H9V9z" />
          </svg>
        ),
        content: (
          <div>
            <h3 style={{ marginTop: 0 }}>Dashboard Overview</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
              <div style={{ padding: "16px", border: "1px solid #e0e0e0", borderRadius: "8px" }}>
                <div style={{ fontSize: "14px", color: "#666" }}>Total Users</div>
                <div style={{ fontSize: "24px", fontWeight: "bold", marginTop: "8px" }}>12,345</div>
              </div>
              <div style={{ padding: "16px", border: "1px solid #e0e0e0", borderRadius: "8px" }}>
                <div style={{ fontSize: "14px", color: "#666" }}>Revenue</div>
                <div style={{ fontSize: "24px", fontWeight: "bold", marginTop: "8px" }}>$54,321</div>
              </div>
              <div style={{ padding: "16px", border: "1px solid #e0e0e0", borderRadius: "8px" }}>
                <div style={{ fontSize: "14px", color: "#666" }}>Active Sessions</div>
                <div style={{ fontSize: "24px", fontWeight: "bold", marginTop: "8px" }}>892</div>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "analytics",
        label: "Analytics",
        icon: (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M1 13h14v1H1v-1zm1-2h2v2H2v-2zm3-3h2v5H5V8zm3-4h2v9H8V4zm3 2h2v7h-2V6z" />
          </svg>
        ),
        content: (
          <div>
            <h3 style={{ marginTop: 0 }}>Analytics Dashboard</h3>
            <p>View detailed analytics and insights about your application.</p>
            <div style={{ marginTop: "16px", padding: "16px", backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
              <p style={{ margin: 0 }}>Chart and graphs would be displayed here.</p>
            </div>
          </div>
        ),
      },
      {
        id: "users",
        label: "Users",
        icon: (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 8a3 3 0 100-6 3 3 0 000 6zm0 1c-3.5 0-6 2-6 4v1h12v-1c0-2-2.5-4-6-4z" />
          </svg>
        ),
        content: (
          <div>
            <h3 style={{ marginTop: 0 }}>User Management</h3>
            <p>Manage user accounts, permissions, and access levels.</p>
            <div style={{ marginTop: "16px" }}>
              <div style={{ padding: "12px", border: "1px solid #e0e0e0", borderRadius: "4px", marginBottom: "8px" }}>
                <strong>John Doe</strong> - john@example.com
              </div>
              <div style={{ padding: "12px", border: "1px solid #e0e0e0", borderRadius: "4px", marginBottom: "8px" }}>
                <strong>Jane Smith</strong> - jane@example.com
              </div>
              <div style={{ padding: "12px", border: "1px solid #e0e0e0", borderRadius: "4px" }}>
                <strong>Bob Johnson</strong> - bob@example.com
              </div>
            </div>
          </div>
        ),
      },
    ],
    defaultActiveTab: "overview",
    variant: "underline",
    size: "md",
  },
};

// Playground
export const Playground: Story = {
  args: {
    items: basicTabs,
    defaultActiveTab: "profile",
    orientation: "horizontal",
    variant: "underline",
    size: "md",
  },
};
