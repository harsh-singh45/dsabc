import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "@intelation/ui";
import type { SidebarItem } from "@intelation/ui";

const meta: Meta<typeof Sidebar> = {
  title: "Layout/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Sidebar component for main navigation with hierarchical menu structure, collapsible sections, icons, badges, and search functionality.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    collapsed: {
      control: "boolean",
      description: "Whether the sidebar is collapsed",
    },
    showSearch: {
      control: "boolean",
      description: "Whether to show search functionality",
    },
    width: {
      control: "text",
      description: "Width of the sidebar when expanded",
    },
    collapsedWidth: {
      control: "text",
      description: "Width of the sidebar when collapsed",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const basicItems: SidebarItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="11" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="3" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="11" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    href: "/dashboard",
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 17L7 13L11 15L17 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M13 9H17V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    href: "/analytics",
    badge: 5,
  },
  {
    id: "users",
    label: "Users",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="2" />
        <path d="M4 17C4 13.6863 6.68629 11 10 11C13.3137 11 16 13.6863 16 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    href: "/users",
  },
  {
    id: "settings",
    label: "Settings",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
        <path d="M10 2V5M10 15V18M18 10H15M5 10H2M15.66 4.34L13.54 6.46M6.46 13.54L4.34 15.66M15.66 15.66L13.54 13.54M6.46 6.46L4.34 4.34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    href: "/settings",
  },
];

const hierarchicalItems: SidebarItem[] = [
  {
    id: "home",
    label: "Home",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 10L10 3L17 10M5 8V17H8V13H12V17H15V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    href: "/",
  },
  {
    id: "projects",
    label: "Projects",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="5" width="14" height="12" rx="1" stroke="currentColor" strokeWidth="2" />
        <path d="M3 9H17" stroke="currentColor" strokeWidth="2" />
        <path d="M8 5V3H12V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    badge: 12,
    children: [
      {
        id: "active-projects",
        label: "Active Projects",
        href: "/projects/active",
      },
      {
        id: "archived",
        label: "Archived",
        href: "/projects/archived",
      },
      {
        id: "templates",
        label: "Templates",
        href: "/projects/templates",
      },
    ],
  },
  {
    id: "team",
    label: "Team",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="7" cy="6" r="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="13" cy="6" r="2" stroke="currentColor" strokeWidth="2" />
        <path d="M3 14C3 12.3431 4.34315 11 6 11H8C9.65685 11 11 12.3431 11 14V17H3V14Z" stroke="currentColor" strokeWidth="2" />
        <path d="M9 14C9 12.3431 10.3431 11 12 11H14C15.6569 11 17 12.3431 17 14V17H9V14Z" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    children: [
      {
        id: "members",
        label: "Members",
        href: "/team/members",
        badge: 24,
      },
      {
        id: "roles",
        label: "Roles & Permissions",
        href: "/team/roles",
      },
      {
        id: "invitations",
        label: "Invitations",
        href: "/team/invitations",
        badge: 3,
      },
    ],
  },
  {
    id: "reports",
    label: "Reports",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M5 17V10M10 17V7M15 17V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="3" y="3" width="14" height="14" rx="1" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    children: [
      {
        id: "overview",
        label: "Overview",
        href: "/reports/overview",
      },
      {
        id: "sales",
        label: "Sales Reports",
        href: "/reports/sales",
      },
      {
        id: "custom",
        label: "Custom Reports",
        href: "/reports/custom",
        children: [
          {
            id: "saved-reports",
            label: "Saved Reports",
            href: "/reports/custom/saved",
          },
          {
            id: "create-report",
            label: "Create New",
            href: "/reports/custom/create",
          },
        ],
      },
    ],
  },
  {
    id: "help",
    label: "Help & Support",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="2" />
        <path d="M10 14V14.5M10 6.5C8.61929 6.5 7.5 7.61929 7.5 9C7.5 9.5 7.7 10 8 10.5C8.5 11 9 11.5 10 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    href: "/help",
  },
];

export const Default: Story = {
  render: (args) => {
    /* eslint-disable react-hooks/rules-of-hooks */
    const [activeId, setActiveId] = useState("dashboard");
    /* eslint-enable react-hooks/rules-of-hooks */
    return (
      <div style={{ display: "flex", height: "600px", border: "1px solid #e5e7eb" }}>
        <Sidebar
          {...args}
          items={basicItems}
          activeItemId={activeId}
          onItemClick={(item) => {
            setActiveId(item.id);
            // eslint-disable-next-line no-console
            console.log("Clicked:", item);
          }}
        />
        <div style={{ flex: 1, padding: "2rem", backgroundColor: "#f9fafb" }}>
          <h1 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "600" }}>Main Content</h1>
          <p style={{ marginTop: "1rem", color: "#6b7280" }}>
            Click sidebar items to navigate
          </p>
        </div>
      </div>
    );
  },
};

export const Collapsed: Story = {
  render: () => {
    /* eslint-disable react-hooks/rules-of-hooks */
    const [collapsed, setCollapsed] = useState(false);
    const [activeId, setActiveId] = useState("dashboard");
    /* eslint-enable react-hooks/rules-of-hooks */
    return (
      <div style={{ display: "flex", height: "600px", border: "1px solid #e5e7eb" }}>
        <Sidebar
          items={basicItems}
          collapsed={collapsed}
          onToggle={setCollapsed}
          activeItemId={activeId}
          onItemClick={(item) => setActiveId(item.id)}
        />
        <div style={{ flex: 1, padding: "2rem", backgroundColor: "#f9fafb" }}>
          <h1 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "600" }}>
            Collapsed Sidebar
          </h1>
          <p style={{ marginTop: "1rem", color: "#6b7280" }}>
            Toggle the sidebar to expand/collapse it
          </p>
        </div>
      </div>
    );
  },
};

export const WithHierarchy: Story = {
  render: () => {
    /* eslint-disable react-hooks/rules-of-hooks */
    const [collapsed, setCollapsed] = useState(false);
    const [activeId, setActiveId] = useState("dashboard");
    /* eslint-enable react-hooks/rules-of-hooks */
    return (
      <div style={{ display: "flex", height: "700px", border: "1px solid #e5e7eb" }}>
        <Sidebar
          items={hierarchicalItems}
          collapsed={collapsed}
          onToggle={setCollapsed}
          activeItemId={activeId}
          onItemClick={(item) => {
            setActiveId(item.id);
            // eslint-disable-next-line no-console
            console.log("Clicked:", item);
          }}
        />
        <div style={{ flex: 1, padding: "2rem", backgroundColor: "#f9fafb" }}>
          <h1 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "600" }}>
            Hierarchical Navigation
          </h1>
          <p style={{ marginTop: "1rem", color: "#6b7280" }}>
            Nested items auto-expand when their children are active
          </p>
        </div>
      </div>
    );
  },
};

export const WithSearch: Story = {
  render: () => {
    /* eslint-disable react-hooks/rules-of-hooks */
    const [activeId, setActiveId] = useState("dashboard");
    /* eslint-enable react-hooks/rules-of-hooks */
    return (
      <div style={{ display: "flex", height: "700px", border: "1px solid #e5e7eb" }}>
        <Sidebar
          items={hierarchicalItems}
          showSearch
          activeItemId={activeId}
          onItemClick={(item) => setActiveId(item.id)}
          onSearchChange={(value) => {
            // eslint-disable-next-line no-console
            console.log("Search:", value);
          }}
        />
        <div style={{ flex: 1, padding: "2rem", backgroundColor: "#f9fafb" }}>
          <h1 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "600" }}>
            Sidebar with Search
          </h1>
          <p style={{ marginTop: "1rem", color: "#6b7280" }}>
            Search filters items and auto-expands matching nested items
          </p>
        </div>
      </div>
    );
  },
};

export const WithBadges: Story = {
  render: () => {
    const itemsWithBadges: SidebarItem[] = [
      {
        id: "inbox",
        label: "Inbox",
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M3 7L10 3L17 7V15L10 19L3 15V7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          </svg>
        ),
        href: "/inbox",
        badge: 12,
      },
      {
        id: "notifications",
        label: "Notifications",
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 3C7.23858 3 5 5.23858 5 8V11L3 13V14H17V13L15 11V8C15 5.23858 12.7614 3 10 3Z" stroke="currentColor" strokeWidth="2" />
            <path d="M8 14V15C8 16.1046 8.89543 17 10 17C11.1046 17 12 16.1046 12 15V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
        href: "/notifications",
        badge: 99,
      },
      {
        id: "messages",
        label: "Messages",
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M3 6C3 4.89543 3.89543 4 5 4H15C16.1046 4 17 4.89543 17 6V12C17 13.1046 16.1046 14 15 14H7L3 17V6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          </svg>
        ),
        href: "/messages",
        badge: 5,
      },
      {
        id: "tasks",
        label: "Tasks",
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="4" y="4" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="2" />
            <path d="M7 10L9 12L13 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
        href: "/tasks",
      },
    ];

    return (
      <div style={{ display: "flex", height: "600px", border: "1px solid #e5e7eb" }}>
        <Sidebar items={itemsWithBadges} activeItemId="inbox" />
        <div style={{ flex: 1, padding: "2rem", backgroundColor: "#f9fafb" }}>
          <h1 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "600" }}>
            Badge Indicators
          </h1>
          <p style={{ marginTop: "1rem", color: "#6b7280" }}>
            Badges show counts and notifications
          </p>
        </div>
      </div>
    );
  },
};

export const WithDisabledItems: Story = {
  render: () => {
    const itemsWithDisabled: SidebarItem[] = [
      {
        id: "overview",
        label: "Overview",
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="2" />
          </svg>
        ),
        href: "/overview",
      },
      {
        id: "reports",
        label: "Reports",
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 17V10M10 17V7M15 17V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
        href: "/reports",
        disabled: true,
      },
      {
        id: "analytics",
        label: "Analytics (Coming Soon)",
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M3 17L7 13L11 15L17 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
        href: "/analytics",
        disabled: true,
      },
      {
        id: "settings",
        label: "Settings",
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
          </svg>
        ),
        href: "/settings",
      },
    ];

    return (
      <div style={{ display: "flex", height: "600px", border: "1px solid #e5e7eb" }}>
        <Sidebar items={itemsWithDisabled} activeItemId="overview" />
        <div style={{ flex: 1, padding: "2rem", backgroundColor: "#f9fafb" }}>
          <h1 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "600" }}>
            Disabled Items
          </h1>
          <p style={{ marginTop: "1rem", color: "#6b7280" }}>
            Some items can be disabled and are not clickable
          </p>
        </div>
      </div>
    );
  },
};

export const CustomWidth: Story = {
  render: () => {
    /* eslint-disable react-hooks/rules-of-hooks */
    const [collapsed, setCollapsed] = useState(false);
    /* eslint-enable react-hooks/rules-of-hooks */
    return (
      <div style={{ display: "flex", height: "600px", border: "1px solid #e5e7eb" }}>
        <Sidebar
          items={basicItems}
          collapsed={collapsed}
          onToggle={setCollapsed}
          width="320px"
          collapsedWidth="48px"
        />
        <div style={{ flex: 1, padding: "2rem", backgroundColor: "#f9fafb" }}>
          <h1 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "600" }}>
            Custom Width
          </h1>
          <p style={{ marginTop: "1rem", color: "#6b7280" }}>
            Expanded: 320px, Collapsed: 48px
          </p>
        </div>
      </div>
    );
  },
};

export const IntelationDashboard: Story = {
  render: () => {
    /* eslint-disable react-hooks/rules-of-hooks */
    const [collapsed, setCollapsed] = useState(false);
    const [activeId, setActiveId] = useState("dashboard");
    /* eslint-enable react-hooks/rules-of-hooks */

    const intelationItems: SidebarItem[] = [
      {
        id: "dashboard",
        label: "Dashboard",
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="3" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
            <rect x="11" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
            <rect x="3" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
            <rect x="11" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
          </svg>
        ),
        href: "/dashboard",
      },
      {
        id: "anonymization",
        label: "Anonymization",
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 3C7.5 3 5.5 5 5.5 7.5C5.5 8.5 5.8 9.4 6.3 10.1L3 17H7V15H9V13H11L13.9 10.1C14.6 10.6 15.5 10.9 16.5 10.9C19 10.9 21 8.9 21 6.4C21 3.9 19 1.9 16.5 1.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
        badge: 3,
        children: [
          {
            id: "upload",
            label: "Upload Files",
            href: "/anonymization/upload",
          },
          {
            id: "processing",
            label: "Processing Queue",
            href: "/anonymization/processing",
            badge: 3,
          },
          {
            id: "completed",
            label: "Completed",
            href: "/anonymization/completed",
          },
        ],
      },
      {
        id: "compliance",
        label: "Compliance",
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 3L4 6V10C4 14 7 17 10 19C13 17 16 14 16 10V6L10 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M7 10L9 12L13 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
        children: [
          {
            id: "frameworks",
            label: "Frameworks",
            href: "/compliance/frameworks",
          },
          {
            id: "reports",
            label: "Reports",
            href: "/compliance/reports",
          },
          {
            id: "audit-log",
            label: "Audit Log",
            href: "/compliance/audit-log",
          },
        ],
      },
      {
        id: "entities",
        label: "Entities",
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="3" y="4" width="14" height="12" rx="1" stroke="currentColor" strokeWidth="2" />
            <path d="M7 8H13M7 12H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
        href: "/entities",
      },
      {
        id: "settings",
        label: "Settings",
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
            <path d="M10 2V5M10 15V18M18 10H15M5 10H2M15.66 4.34L13.54 6.46M6.46 13.54L4.34 15.66M15.66 15.66L13.54 13.54M6.46 6.46L4.34 4.34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
        href: "/settings",
      },
    ];

    return (
      <div style={{ display: "flex", height: "700px", border: "1px solid #e5e7eb" }}>
        <Sidebar
          items={intelationItems}
          collapsed={collapsed}
          onToggle={setCollapsed}
          showSearch
          activeItemId={activeId}
          onItemClick={(item) => setActiveId(item.id)}
        />
        <div style={{ flex: 1, padding: "2rem", backgroundColor: "#f9fafb" }}>
          <h1 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "600" }}>
            Intelation Platform
          </h1>
          <p style={{ marginTop: "1rem", color: "#6b7280" }}>
            Application-specific navigation structure
          </p>
        </div>
      </div>
    );
  },
};

export const Playground: Story = {
  args: {
    items: hierarchicalItems,
    collapsed: false,
    showSearch: true,
    activeItemId: "home",
    width: "280px",
    collapsedWidth: "64px",
  },
  render: (args) => {
    /* eslint-disable react-hooks/rules-of-hooks */
    const [collapsed, setCollapsed] = useState(args.collapsed);
    const [activeId, setActiveId] = useState(args.activeItemId);
    /* eslint-enable react-hooks/rules-of-hooks */

    return (
      <div style={{ display: "flex", height: "700px", border: "1px solid #e5e7eb" }}>
        <Sidebar
          {...args}
          collapsed={collapsed}
          onToggle={setCollapsed}
          activeItemId={activeId}
          onItemClick={(item) => {
            setActiveId(item.id);
            // eslint-disable-next-line no-console
            console.log("Clicked:", item);
          }}
        />
        <div style={{ flex: 1, padding: "2rem", backgroundColor: "#f9fafb" }}>
          <h1 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "600" }}>Playground</h1>
          <p style={{ marginTop: "1rem", color: "#6b7280" }}>
            Experiment with sidebar props in the controls panel
          </p>
        </div>
      </div>
    );
  },
};
