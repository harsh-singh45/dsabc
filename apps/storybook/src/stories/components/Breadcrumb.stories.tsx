import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb, BreadcrumbItem } from '@intelation/ui';

const meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Breadcrumb navigation component that displays the current page location within a navigational hierarchy.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'Array of breadcrumb items to display',
      control: 'object',
    },
    separator: {
      description: 'Custom separator between breadcrumb items',
      control: 'text',
    },
    maxItems: {
      description: 'Maximum number of items to display before collapsing',
      control: 'number',
    },
    onItemClick: {
      description: 'Callback when a breadcrumb item is clicked',
      action: 'clicked',
    },
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic breadcrumb items
const basicItems: BreadcrumbItem[] = [
  { id: '1', label: 'Home', href: '/' },
  { id: '2', label: 'Products', href: '/products' },
  { id: '3', label: 'Electronics', href: '/products/electronics' },
  { id: '4', label: 'Laptop' },
];

// Icon component for demo
const HomeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 6L8 2L14 6V13C14 13.2652 13.8946 13.5196 13.7071 13.7071C13.5196 13.8946 13.2652 14 13 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V6Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 14V8H10V14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FolderIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6L7.33333 4H12.6667C13.0203 4 13.3594 4.14048 13.6095 4.39052C13.8595 4.64057 14 4.97971 14 5.33333V12.6667Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Default: Story = {
  args: {
    items: basicItems,
  },
};

export const WithCustomSeparator: Story = {
  args: {
    items: basicItems,
    separator: '>',
  },
};

export const WithArrowSeparator: Story = {
  args: {
    items: basicItems,
    separator: '→',
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      {
        id: '1',
        label: 'Home',
        href: '/',
        icon: <HomeIcon />,
      },
      {
        id: '2',
        label: 'Documents',
        href: '/documents',
        icon: <FolderIcon />,
      },
      {
        id: '3',
        label: 'Projects',
        href: '/documents/projects',
        icon: <FolderIcon />,
      },
      {
        id: '4',
        label: 'Report.pdf',
        icon: <FolderIcon />,
      },
    ],
  },
};

export const WithClickHandler: Story = {
  args: {
    items: basicItems,
    onItemClick: (item) => {
      console.log('Clicked:', item.label);
      alert(`Navigating to: ${item.label}`);
    },
  },
};

export const WithMaxItems: Story = {
  args: {
    items: [
      { id: '1', label: 'Home', href: '/' },
      { id: '2', label: 'Products', href: '/products' },
      { id: '3', label: 'Electronics', href: '/electronics' },
      { id: '4', label: 'Computers', href: '/computers' },
      { id: '5', label: 'Laptops', href: '/laptops' },
      { id: '6', label: 'Gaming Laptops', href: '/gaming-laptops' },
      { id: '7', label: 'MSI Gaming Laptop' },
    ],
    maxItems: 4,
  },
};

export const LongPath: Story = {
  args: {
    items: [
      { id: '1', label: 'Home', href: '/' },
      { id: '2', label: 'Administration', href: '/admin' },
      { id: '3', label: 'User Management', href: '/admin/users' },
      { id: '4', label: 'Roles & Permissions', href: '/admin/users/roles' },
      { id: '5', label: 'System Administrator Role' },
    ],
  },
};

export const SingleItem: Story = {
  args: {
    items: [{ id: '1', label: 'Dashboard' }],
  },
};

export const TwoItems: Story = {
  args: {
    items: [
      { id: '1', label: 'Home', href: '/' },
      { id: '2', label: 'About' },
    ],
  },
};

export const ComplianceWorkflow: Story = {
  name: 'Compliance Workflow Example',
  args: {
    items: [
      { id: '1', label: 'Dashboard', href: '/dashboard' },
      { id: '2', label: 'Compliance', href: '/compliance' },
      { id: '3', label: 'GDPR Analysis', href: '/compliance/gdpr' },
      { id: '4', label: 'Data Processing Report' },
    ],
    separator: '/',
  },
};

export const FileSystemNavigation: Story = {
  name: 'File System Navigation',
  args: {
    items: [
      { id: '1', label: 'My Documents', href: '/documents', icon: <FolderIcon /> },
      { id: '2', label: 'Work', href: '/documents/work', icon: <FolderIcon /> },
      { id: '3', label: 'Q4 Reports', href: '/documents/work/q4', icon: <FolderIcon /> },
      { id: '4', label: 'Financial Report 2025.xlsx', icon: <FolderIcon /> },
    ],
    separator: '/',
  },
};

export const Playground: Story = {
  args: {
    items: basicItems,
    separator: '/',
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test different breadcrumb configurations.',
      },
    },
  },
};
