import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '@intelation/ui';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      description: 'URL to navigate to',
    },
    variant: {
      control: 'select',
      options: ['default', 'nav', 'breadcrumb'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Link size',
    },
    active: {
      control: 'boolean',
      description: 'Whether the link is active/current',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the link is disabled',
    },
    underline: {
      control: 'boolean',
      description: 'Whether to show underline',
    },
    external: {
      control: 'boolean',
      description: 'Whether to open in new tab',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

// Icon components for examples
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
  </svg>
);

// Default story
export const Default: Story = {
  args: {
    href: '#',
    children: 'Link text',
  },
};

// Variants
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Link href="#" variant="default">Default Link</Link>
      <Link href="#" variant="nav">Navigation Link</Link>
      <Link href="#" variant="breadcrumb">Breadcrumb Link</Link>
    </div>
  ),
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
      <Link href="#" size="sm">Small Link</Link>
      <Link href="#" size="md">Medium Link (default)</Link>
      <Link href="#" size="lg">Large Link</Link>
    </div>
  ),
};

// States
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Link href="#">Normal Link</Link>
      <Link href="#" active>Active Link</Link>
      <Link href="#" disabled>Disabled Link</Link>
    </div>
  ),
};

// With Icons
export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Link href="#" leftIcon={<HomeIcon />}>Home</Link>
      <Link href="#" rightIcon={<ArrowRightIcon />}>Next Page</Link>
      <Link href="#" leftIcon={<HomeIcon />} rightIcon={<ArrowRightIcon />}>
        Home to Next
      </Link>
    </div>
  ),
};

// Navigation Menu Example
export const NavigationMenu: Story = {
  render: () => (
    <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '250px' }}>
      <Link href="/dashboard" variant="nav" active leftIcon={<HomeIcon />}>
        Dashboard
      </Link>
      <Link href="/users" variant="nav" leftIcon={<HomeIcon />}>
        Users
      </Link>
      <Link href="/settings" variant="nav" leftIcon={<HomeIcon />}>
        Settings
      </Link>
      <Link href="/help" variant="nav" disabled leftIcon={<HomeIcon />}>
        Help (Disabled)
      </Link>
    </nav>
  ),
};

// Underline Options
export const UnderlineOptions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Link href="#" underline>With underline</Link>
      <Link href="#" underline={false}>Without underline</Link>
      <Link href="#" variant="nav">Nav (no underline by default)</Link>
      <Link href="#" variant="nav" underline>Nav with underline</Link>
    </div>
  ),
};

// External Links
export const ExternalLinks: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Link href="https://github.com" external>
        GitHub
      </Link>
      <Link href="https://github.com" external rightIcon={<ExternalLinkIcon />}>
        GitHub (with icon)
      </Link>
      <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
        Manual external link
      </Link>
    </div>
  ),
};

// Breadcrumb Usage
export const BreadcrumbUsage: Story = {
  render: () => (
    <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <Link href="/" variant="breadcrumb">Home</Link>
      <span>/</span>
      <Link href="/products" variant="breadcrumb">Products</Link>
      <span>/</span>
      <Link href="/products/electronics" variant="breadcrumb" active>
        Electronics
      </Link>
    </nav>
  ),
};

// Playground
export const Playground: Story = {
  args: {
    href: '#',
    variant: 'default',
    size: 'md',
    children: 'Click me',
    active: false,
    disabled: false,
    underline: undefined,
    external: false,
  },
};
