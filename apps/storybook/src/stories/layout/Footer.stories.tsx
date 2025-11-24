import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "@intelation/ui";

const meta: Meta<typeof Footer> = {
  title: "Layout/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Footer component with transparent background. Copyright text appears on the left, and navigation links on the right. The footer is responsive and adapts to mobile screens by stacking content vertically.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Footer>;

// Sample data
const sampleLinks = [
  { id: "privacy", label: "Privacy Policy", href: "/privacy" },
  { id: "terms", label: "Terms of Service", href: "/terms" },
  { id: "contact", label: "Contact", href: "/contact" },
];

/**
 * Default footer with copyright and links
 */
export const Default: Story = {
  args: {
    copyright: "© 2025 Intelation. All rights reserved.",
    links: sampleLinks,
  },
};

/**
 * Footer with only copyright text, no links
 */
export const CopyrightOnly: Story = {
  args: {
    copyright: "© 2025 Intelation. All rights reserved.",
    links: [],
  },
};

/**
 * Footer with many links
 */
export const ManyLinks: Story = {
  args: {
    copyright: "© 2025 Intelation. All rights reserved.",
    links: [
      { id: "about", label: "About Us", href: "/about" },
      { id: "careers", label: "Careers", href: "/careers" },
      { id: "blog", label: "Blog", href: "/blog" },
      { id: "privacy", label: "Privacy Policy", href: "/privacy" },
      { id: "terms", label: "Terms of Service", href: "/terms" },
      { id: "cookies", label: "Cookie Policy", href: "/cookies" },
      { id: "contact", label: "Contact", href: "/contact" },
    ],
  },
};

/**
 * Footer with custom copyright text
 */
export const CustomCopyright: Story = {
  args: {
    copyright: "Copyright © 2025 Your Company Name, Inc. • All rights reserved",
    links: sampleLinks,
  },
};

/**
 * Footer with clickable links that have onClick handlers
 */
export const WithClickHandlers: Story = {
  args: {
    copyright: "© 2025 Intelation. All rights reserved.",
    links: [
      {
        id: "privacy",
        label: "Privacy Policy",
        onClick: (link) => alert(`Clicked: ${link.label}`),
      },
      {
        id: "terms",
        label: "Terms of Service",
        onClick: (link) => alert(`Clicked: ${link.label}`),
      },
      {
        id: "contact",
        label: "Contact",
        onClick: (link) => alert(`Clicked: ${link.label}`),
      },
    ],
  },
};

/**
 * Footer in a page context with content above
 */
export const InPageContext: Story = {
  args: {
    copyright: "© 2025 Intelation. All rights reserved.",
    links: sampleLinks,
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen flex flex-col">
        {/* Page Content */}
        <div className="flex-1 p-8 bg-gray-50">
          <h1 className="mb-4">Page Content</h1>
          <p>This is an example of how the footer appears at the bottom of a page.</p>
          <p>The footer has a transparent background, so it adapts to any page design.</p>
        </div>
        
        {/* Footer at the bottom */}
        <Story />
      </div>
    ),
  ],
};

/**
 * Footer with custom max width
 */
export const CustomMaxWidth: Story = {
  args: {
    copyright: "© 2025 Intelation. All rights reserved.",
    links: sampleLinks,
    style: { maxWidth: "900px", margin: "0 auto" },
  },
  parameters: {
    docs: {
      description: {
        story: "Footer content can be styled with custom CSS, including max-width constraints.",
      },
    },
  },
};
