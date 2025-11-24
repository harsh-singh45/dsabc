import type { Meta, StoryObj } from "@storybook/react";
import { Layout, Logo } from "@intelation/ui";

const meta: Meta<typeof Layout> = {
  title: "Layout/Layout",
  component: Layout,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Layout wrapper component that provides consistent page structure with Header, Footer, and main content area. Highly flexible and customizable.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Layout>;

// Sample data
const sampleNavItems = [
  { id: "home", label: "Home", href: "/", active: true },
  { id: "about", label: "About", href: "/about" },
  { id: "services", label: "Services", href: "/services" },
  { id: "contact", label: "Contact", href: "/contact" },
];

const sampleUserProfile = {
  name: "John Doe",
  email: "john.doe@example.com",
  initials: "JD",
};

const sampleProfileMenuItems = [
  { id: "profile", label: "Profile", onClick: () => alert("Profile clicked") },
  { id: "settings", label: "Settings", onClick: () => alert("Settings clicked") },
  { id: "separator", label: "", separator: true },
  { id: "logout", label: "Logout", onClick: () => alert("Logout clicked") },
];

const sampleFooterLinks = [
  { id: "privacy", label: "Privacy Policy", href: "/privacy" },
  { id: "terms", label: "Terms of Service", href: "/terms" },
  { id: "contact", label: "Contact", href: "/contact" },
];

// Use Intelation Logo component with icon-only variant as default
const DefaultLogo = () => (
  <Logo 
    variant="white" 
    size="lg" 
    type="icon"
    clickable={false}
  />
);

const SampleContent = ({ height = "400px" }: { height?: string }) => (
  <div 
    className="p-8 bg-gray-50 rounded-lg"
    style={{ minHeight: height }}
  >
    <h1 className="text-3xl font-bold mb-4">
      Page Content
    </h1>
    <p className="text-base text-gray-500 mb-4">
      This is where your page content goes. The Layout component provides a consistent
      structure with optional header and footer.
    </p>
    <p className="text-base text-gray-500">
      You can customize the content area with different max widths, padding, and even
      remove the container for full-width layouts.
    </p>
  </div>
);

/**
 * Default layout with header, content, and footer
 */
export const Default: Story = {
  args: {
    header: {
      logo: <DefaultLogo />,
      navigationItems: sampleNavItems,
      userProfile: sampleUserProfile,
      profileMenuItems: sampleProfileMenuItems,
    },
    footer: {
      copyright: "© 2025 Intelation. All rights reserved.",
      links: sampleFooterLinks,
    },
    children: <SampleContent />,
  },
};

/**
 * Layout without header - only content and footer
 */
export const NoHeader: Story = {
  args: {
    header: false,
    footer: {
      copyright: "© 2025 Intelation. All rights reserved.",
      links: sampleFooterLinks,
    },
    children: <SampleContent />,
  },
};

/**
 * Layout without footer - only header and content
 */
export const NoFooter: Story = {
  args: {
    header: {
      logo: <DefaultLogo />,
      navigationItems: sampleNavItems,
      userProfile: sampleUserProfile,
      profileMenuItems: sampleProfileMenuItems,
    },
    footer: false,
    children: <SampleContent />,
  },
};

/**
 * Content only - no header or footer (useful for auth pages)
 */
export const ContentOnly: Story = {
  args: {
    header: false,
    footer: false,
    children: (
      <div 
        className="flex items-center justify-center min-h-screen"
        style={{ 
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        }}
      >
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">
            Login
          </h2>
          <p className="text-gray-500 mb-6">
            This is an example of a content-only layout without header or footer.
          </p>
          <button className="w-full px-3 py-3 bg-[#667eea] text-white border-none rounded-md text-base font-semibold cursor-pointer">
            Sign In
          </button>
        </div>
      </div>
    ),
  },
};

/**
 * Full width content - no container constraints
 */
export const FullWidth: Story = {
  args: {
    header: {
      logo: <DefaultLogo />,
      navigationItems: sampleNavItems,
      userProfile: sampleUserProfile,
      profileMenuItems: sampleProfileMenuItems,
    },
    footer: {
      copyright: "© 2025 Intelation. All rights reserved.",
      links: sampleFooterLinks,
    },
    fullWidth: true,
    children: (
      <div 
        className="py-16 px-8 text-white text-center"
        style={{ 
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        }}
      >
        <h1 className="text-5xl font-bold mb-4">
          Full Width Layout
        </h1>
        <p className="text-xl opacity-90">
          This content stretches to the full width of the viewport
        </p>
      </div>
    ),
  },
};

/**
 * Sticky footer - footer stays at bottom even with short content
 */
export const StickyFooter: Story = {
  args: {
    header: {
      logo: <DefaultLogo />,
      navigationItems: sampleNavItems,
      userProfile: sampleUserProfile,
      profileMenuItems: sampleProfileMenuItems,
    },
    footer: {
      copyright: "© 2025 Intelation. All rights reserved.",
      links: sampleFooterLinks,
    },
    stickyFooter: true,
    children: (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">
          Short Content Page
        </h1>
        <p className="text-gray-500">
          This page has minimal content, but the footer stays at the bottom of the viewport.
        </p>
      </div>
    ),
  },
};

/**
 * Custom content width
 */
export const CustomContentWidth: Story = {
  args: {
    header: {
      logo: <DefaultLogo />,
      navigationItems: sampleNavItems,
      userProfile: sampleUserProfile,
      profileMenuItems: sampleProfileMenuItems,
    },
    footer: {
      copyright: "© 2025 Intelation. All rights reserved.",
      links: sampleFooterLinks,
    },
    contentMaxWidth: "800px",
    children: <SampleContent />,
  },
  parameters: {
    docs: {
      description: {
        story: "Content area can be constrained to different maximum widths. Default is 1180px.",
      },
    },
  },
};

/**
 * Custom content padding
 */
export const CustomContentPadding: Story = {
  args: {
    header: {
      logo: <DefaultLogo />,
      navigationItems: sampleNavItems,
      userProfile: sampleUserProfile,
      profileMenuItems: sampleProfileMenuItems,
    },
    footer: {
      copyright: "© 2025 Intelation. All rights reserved.",
      links: sampleFooterLinks,
    },
    contentPadding: "4rem",
    children: <SampleContent height="300px" />,
  },
};

/**
 * Fixed header layout
 */
export const FixedHeader: Story = {
  args: {
    header: {
      logo: <DefaultLogo />,
      navigationItems: sampleNavItems,
      userProfile: sampleUserProfile,
      profileMenuItems: sampleProfileMenuItems,
      fixed: true,
    },
    footer: {
      copyright: "© 2025 Intelation. All rights reserved.",
      links: sampleFooterLinks,
    },
    children: (
      <div className="pt-20">
        <SampleContent height="1200px" />
        <div className="p-8 bg-gray-200 mt-8">
          <h2 className="text-2xl font-bold mb-4">
            Scroll to Test Fixed Header
          </h2>
          <p className="text-gray-500">
            The header remains fixed at the top while scrolling. Add padding-top to content 
            to account for the fixed header height.
          </p>
        </div>
      </div>
    ),
  },
};

/**
 * Real-world example - Blog layout
 */
export const BlogLayout: Story = {
  args: {
    header: {
      logo: <DefaultLogo />,
      navigationItems: sampleNavItems,
      userProfile: sampleUserProfile,
      profileMenuItems: sampleProfileMenuItems,
    },
    footer: {
      copyright: "© 2025 Intelation. All rights reserved.",
      links: sampleFooterLinks,
    },
    contentMaxWidth: "900px",
    stickyFooter: true,
    children: (
      <article className="py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Building a Design System with React
          </h1>
          <div className="text-gray-500 text-sm">
            Published on October 21, 2025 • 5 min read
          </div>
        </header>
        <div className="text-lg leading-7 text-gray-700">
          <p className="mb-6">
            A design system is a collection of reusable components, guided by clear standards, 
            that can be assembled together to build any number of applications.
          </p>
          <p className="mb-6">
            In this article, we'll explore how to create a scalable design system using React, 
            TypeScript, and modern tooling.
          </p>
          <h2 className="text-3xl font-bold mb-4 mt-8">
            Getting Started
          </h2>
          <p className="mb-6">
            The first step in building a design system is defining your design tokens...
          </p>
        </div>
      </article>
    ),
  },
};
