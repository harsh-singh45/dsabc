import type { Meta, StoryObj } from '@storybook/react';
import { NavItem } from '@intelation/ui';

const meta: Meta<typeof NavItem> = {
  title: 'Components/NavItem',
  component: NavItem,
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      description: 'URL to navigate to',
    },
    active: {
      control: 'boolean',
      description: 'Whether the nav item is active/current',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the nav item is disabled',
    },
    collapsed: {
      control: 'boolean',
      description: 'Whether the sidebar is in collapsed mode',
    },
    badge: {
      control: 'text',
      description: 'Badge content (count or text)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavItem>;

// Icon components for examples
const DashboardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
  </svg>
);

const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
  </svg>
);

const BellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
  </svg>
);

const DocumentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
  </svg>
);

// Default story
export const Default: Story = {
  args: {
    href: '#',
    icon: <DashboardIcon />,
    children: 'Dashboard',
  },
};

// States
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '250px' }}>
      <NavItem href="/dashboard" icon={<DashboardIcon />}>
        Normal
      </NavItem>
      <NavItem href="/dashboard" icon={<DashboardIcon />} active>
        Active
      </NavItem>
      <NavItem href="/dashboard" icon={<DashboardIcon />} disabled>
        Disabled
      </NavItem>
    </div>
  ),
};

// With Badges
export const WithBadges: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '250px' }}>
      <NavItem href="/notifications" icon={<BellIcon />} badge={5}>
        Notifications
      </NavItem>
      <NavItem href="/messages" icon={<DocumentIcon />} badge={12}>
        Messages
      </NavItem>
      <NavItem href="/updates" icon={<BellIcon />} badge="new">
        Updates
      </NavItem>
    </div>
  ),
};

// Sidebar Navigation (Expanded)
export const SidebarExpanded: Story = {
  render: () => (
    <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '250px', padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
      <NavItem href="/dashboard" icon={<DashboardIcon />} active>
        Dashboard
      </NavItem>
      <NavItem href="/users" icon={<UsersIcon />}>
        Users
      </NavItem>
      <NavItem href="/notifications" icon={<BellIcon />} badge={5}>
        Notifications
      </NavItem>
      <NavItem href="/documents" icon={<DocumentIcon />}>
        Documents
      </NavItem>
      <NavItem href="/settings" icon={<SettingsIcon />}>
        Settings
      </NavItem>
    </nav>
  ),
};

// Sidebar Navigation (Collapsed)
export const SidebarCollapsed: Story = {
  render: () => (
    <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '64px', padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
      <NavItem href="/dashboard" icon={<DashboardIcon />} collapsed tooltip="Dashboard" active>
        Dashboard
      </NavItem>
      <NavItem href="/users" icon={<UsersIcon />} collapsed tooltip="Users">
        Users
      </NavItem>
      <NavItem href="/notifications" icon={<BellIcon />} collapsed badge={5} tooltip="Notifications">
        Notifications
      </NavItem>
      <NavItem href="/documents" icon={<DocumentIcon />} collapsed tooltip="Documents">
        Documents
      </NavItem>
      <NavItem href="/settings" icon={<SettingsIcon />} collapsed tooltip="Settings">
        Settings
      </NavItem>
    </nav>
  ),
};

// Without Icons
export const WithoutIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '250px' }}>
      <NavItem href="/home">Home</NavItem>
      <NavItem href="/about" active>About</NavItem>
      <NavItem href="/contact">Contact</NavItem>
    </div>
  ),
};

// Comparison: Expanded vs Collapsed
export const ExpandedVsCollapsed: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      {/* Expanded */}
      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '14px', fontWeight: 600 }}>Expanded</h3>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '250px', padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          <NavItem href="/dashboard" icon={<DashboardIcon />} active>
            Dashboard
          </NavItem>
          <NavItem href="/notifications" icon={<BellIcon />} badge={5}>
            Notifications
          </NavItem>
          <NavItem href="/settings" icon={<SettingsIcon />}>
            Settings
          </NavItem>
        </nav>
      </div>

      {/* Collapsed */}
      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '14px', fontWeight: 600 }}>Collapsed</h3>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '64px', padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          <NavItem href="/dashboard" icon={<DashboardIcon />} collapsed tooltip="Dashboard" active>
            Dashboard
          </NavItem>
          <NavItem href="/notifications" icon={<BellIcon />} collapsed badge={5} tooltip="Notifications">
            Notifications
          </NavItem>
          <NavItem href="/settings" icon={<SettingsIcon />} collapsed tooltip="Settings">
            Settings
          </NavItem>
        </nav>
      </div>
    </div>
  ),
};

// Playground
export const Playground: Story = {
  args: {
    href: '#',
    icon: <DashboardIcon />,
    children: 'Navigation Item',
    active: false,
    disabled: false,
    collapsed: false,
    badge: undefined,
  },
};
