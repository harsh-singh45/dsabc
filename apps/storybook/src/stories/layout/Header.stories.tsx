import type { Meta, StoryObj } from "@storybook/react";
import { Header, Logo } from "@intelation/ui";
import type { NavigationItem, ProfileMenuItem, UserProfile } from "@intelation/ui";

// Sample icons for the story
const UserIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const LogoutIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
);

const HelpIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// Sample logo component using the design system's Logo component
const SampleLogo = () => (
  <Logo 
    variant="white" 
    size="md" 
    type="full"
    clickable={false}
  />
);

const meta = {
  title: "Layout/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "A responsive header component with logo, navigation menu, and profile dropdown. Features gradient background and customizable navigation items.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    logo: {
      description: "Logo element to display on the left side",
      control: false,
    },
    navigationItems: {
      description: "Array of navigation items for the center menu",
      control: false,
    },
    userProfile: {
      description: "User profile information for the profile section",
      control: false,
    },
    profileMenuItems: {
      description: "Array of menu items for the profile dropdown",
      control: false,
    },
    fixed: {
      description: "Whether the header should have a fixed position",
      control: "boolean",
    },
    maxWidth: {
      description: "Maximum width for the header content container (header background is always full-width)",
      control: "text",
    },
    onLogoClick: {
      description: "Handler for logo click events",
      action: "logo clicked",
    },
    onProfileClick: {
      description: "Handler for profile click events (when no dropdown items)",
      action: "profile clicked",
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data
const sampleNavigationItems: NavigationItem[] = [
  { id: "dashboard", label: "Dashboard", href: "/dashboard", active: true },
  { id: "analytics", label: "Analytics", href: "/analytics" },
  { id: "automation", label: "Automation", href: "/automation" },
  { id: "api", label: "API", href: "/api" },
  { id: "privacy", label: "Privacy Controls", href: "/privacy" },
  { id: "tests", label: "Tests", href: "/tests" },
];

const sampleUserProfile: UserProfile = {
  name: "Intelation AI",
  email: "ai@intelation.com",
  initials: "IA",
};

const sampleProfileMenuItems: ProfileMenuItem[] = [
  { id: "profile", label: "Profile", icon: <UserIcon /> },
  { id: "settings", label: "Settings", icon: <SettingsIcon /> },
  { id: "help", label: "Help & Support", icon: <HelpIcon /> },
  { id: "separator1", label: "", separator: true },
  { id: "logout", label: "Logout", icon: <LogoutIcon /> },
];

export const Default: Story = {
  args: {
    logo: <SampleLogo />,
    navigationItems: sampleNavigationItems,
    userProfile: sampleUserProfile,
    profileMenuItems: sampleProfileMenuItems,
  },
};

export const WithAvatar: Story = {
  args: {
    logo: <SampleLogo />,
    navigationItems: sampleNavigationItems,
    userProfile: {
      ...sampleUserProfile,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
    },
    profileMenuItems: sampleProfileMenuItems,
  },
};

export const MinimalNavigation: Story = {
  args: {
    logo: <SampleLogo />,
    navigationItems: [
      { id: "home", label: "Home", href: "/", active: true },
      { id: "about", label: "About", href: "/about" },
      { id: "contact", label: "Contact", href: "/contact" },
    ],
    userProfile: sampleUserProfile,
    profileMenuItems: sampleProfileMenuItems,
  },
};

export const WithoutProfileDropdown: Story = {
  args: {
    logo: <SampleLogo />,
    navigationItems: sampleNavigationItems,
    userProfile: sampleUserProfile,
    profileMenuItems: [],
  },
};

export const WithoutProfileIcon: Story = {
  args: {
    logo: <SampleLogo />,
    navigationItems: sampleNavigationItems,
    userProfile: {
      ...sampleUserProfile,
      hideAvatar: true,
    },
    profileMenuItems: sampleProfileMenuItems,
  },
  parameters: {
    docs: {
      description: {
        story: "Profile section without avatar/icon - displays only the user's name and dropdown. Set hideAvatar to true in userProfile to hide the avatar icon while keeping the profile functionality.",
      },
    },
  },
};

export const LogoOnly: Story = {
  args: {
    logo: <SampleLogo />,
    navigationItems: [],
  },
};

export const NavigationOnly: Story = {
  args: {
    navigationItems: sampleNavigationItems,
  },
};

export const Fixed: Story = {
  args: {
    logo: <SampleLogo />,
    navigationItems: sampleNavigationItems,
    userProfile: sampleUserProfile,
    profileMenuItems: sampleProfileMenuItems,
    fixed: true,
  },
  decorators: [
    (Story: any) => (
      <div className="pt-[100px] min-h-[200vh]">
        <Story />
        <div className="p-8 bg-gray-50">
          <h2>Scroll down to test fixed positioning</h2>
          <p>The header should remain at the top when scrolling.</p>
          {Array.from({ length: 50 }, (_, i) => (
            <p key={i}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          ))}
        </div>
      </div>
    ),
  ],
};

export const CustomMaxWidth: Story = {
  args: {
    logo: <SampleLogo />,
    navigationItems: sampleNavigationItems,
    userProfile: sampleUserProfile,
    profileMenuItems: sampleProfileMenuItems,
    maxWidth: "900px",
  },
  parameters: {
    docs: {
      description: {
        story: "The header background always stretches full-width, but the content container can be constrained to different maximum widths. Default is 1180px. This example shows a narrower 900px width.",
      },
    },
  },
};

export const LongNavigationItems: Story = {
  args: {
    logo: <SampleLogo />,
    navigationItems: [
      { id: "dashboard", label: "Dashboard & Analytics", href: "/dashboard", active: true },
      { id: "automation", label: "Process Automation", href: "/automation" },
      { id: "integration", label: "API Integration", href: "/integration" },
      { id: "privacy", label: "Privacy & Compliance", href: "/privacy" },
      { id: "reporting", label: "Advanced Reporting", href: "/reporting" },
      { id: "settings", label: "System Configuration", href: "/settings" },
    ],
    userProfile: sampleUserProfile,
    profileMenuItems: sampleProfileMenuItems,
  },
};

export const WithDisabledItems: Story = {
  args: {
    logo: <SampleLogo />,
    navigationItems: [
      { id: "dashboard", label: "Dashboard", href: "/dashboard", active: true },
      { id: "analytics", label: "Analytics", href: "/analytics" },
      { id: "automation", label: "Automation", href: "/automation", disabled: true },
      { id: "api", label: "API", href: "/api" },
      { id: "privacy", label: "Privacy Controls", href: "/privacy", disabled: true },
    ],
    userProfile: sampleUserProfile,
    profileMenuItems: [
      { id: "profile", label: "Profile", icon: <UserIcon /> },
      { id: "settings", label: "Settings", icon: <SettingsIcon />, disabled: true },
      { id: "help", label: "Help & Support", icon: <HelpIcon /> },
      { id: "separator1", label: "", separator: true },
      { id: "logout", label: "Logout", icon: <LogoutIcon /> },
    ],
  },
};

export const Interactive: Story = {
  args: {
    logo: <SampleLogo />,
    navigationItems: sampleNavigationItems.map(item => ({
      ...item,
      onClick: (clickedItem: NavigationItem) => {
        console.log(`Navigation item clicked: ${clickedItem.label}`);
        // In a real app, you might update the active state or navigate
        alert(`Navigated to ${clickedItem.label}`);
      }
    })),
    userProfile: sampleUserProfile,
    profileMenuItems: sampleProfileMenuItems.map(item => ({
      ...item,
      onClick: item.separator ? undefined : (clickedItem: ProfileMenuItem) => {
        console.log(`Profile menu item clicked: ${clickedItem.label}`);
        alert(`Clicked on ${clickedItem.label}`);
      }
    })),
    onLogoClick: () => {
      console.log("Logo clicked");
      alert("Logo clicked - navigating to home");
    },
  },
};

export const WithClickableLogo: Story = {
  args: {
    logo: (
      <Logo 
        variant="white" 
        size="md" 
        type="full"
        clickable={true}
        onClick={() => alert("Logo clicked - navigating to home")}
      />
    ),
    navigationItems: sampleNavigationItems,
    userProfile: sampleUserProfile,
    profileMenuItems: sampleProfileMenuItems,
  },
};

export const WithIconOnlyLogo: Story = {
  args: {
    logo: (
      <Logo 
        variant="white" 
        size="lg" 
        type="icon"
        clickable={false}
      />
    ),
    navigationItems: sampleNavigationItems,
    userProfile: sampleUserProfile,
    profileMenuItems: sampleProfileMenuItems,
  },
};

export const WithNameOnly: Story = {
  args: {
    logo: <SampleLogo />,
    navigationItems: sampleNavigationItems,
    userProfile: {
      name: "Intelation AI",
      initials: "IA",
    },
    profileMenuItems: sampleProfileMenuItems,
  },
  parameters: {
    docs: {
      description: {
        story: "Profile section showing only the user's name and avatar/initials, without the email address. Simply omit the email property from userProfile.",
      },
    },
  },
};