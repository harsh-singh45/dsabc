import type { Meta, StoryObj } from '@storybook/react';
import { DataCard, DataField, CardAction, Badge } from '@intelation/ui';
import { HiPencil, HiTrash, HiEye, HiUserCircle, HiMail, HiPhone } from 'react-icons/hi';

const meta = {
  title: 'Cards/DataCard',
  component: DataCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'DataCard component for structured information display. Perfect for showing compliance data, entity details, user profiles, and any structured data with fields.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'Card title',
      control: 'text',
    },
    subtitle: {
      description: 'Optional subtitle',
      control: 'text',
    },
    fields: {
      description: 'Array of data fields to display',
      control: 'object',
    },
    layout: {
      description: 'Layout mode for fields',
      control: { type: 'radio' },
      options: ['grid', 'list'],
    },
    status: {
      description: 'Status indicator',
      control: { type: 'select' },
      options: [undefined, 'active', 'inactive', 'warning', 'error'],
    },
    expandable: {
      description: 'Whether card content is expandable',
      control: 'boolean',
    },
    avatar: {
      description: 'Avatar image URL or custom component',
      control: 'text',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '800px', width: '100%' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DataCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data
const userFields: DataField[] = [
  { label: 'Full Name', value: 'Sarah Johnson' },
  { label: 'Email', value: 'sarah.johnson@example.com', type: 'link' },
  { label: 'Phone', value: '+1 (555) 123-4567' },
  { label: 'Department', value: 'Engineering' },
  { label: 'Role', value: 'Senior Developer', type: 'badge' },
  { label: 'Location', value: 'San Francisco, CA' },
];

const complianceFields: DataField[] = [
  { label: 'Framework', value: 'GDPR', type: 'badge' },
  { label: 'Status', value: 'Compliant', type: 'badge' },
  { label: 'Last Audit', value: 'November 1, 2025' },
  { label: 'Next Review', value: 'February 1, 2026' },
  { label: 'Risk Level', value: 'Low' },
  { label: 'Certification', value: 'ISO 27001' },
];

const entityFields: DataField[] = [
  { label: 'Entity ID', value: 'ENT-2025-001' },
  { label: 'Type', value: 'Corporation', type: 'badge' },
  { label: 'Jurisdiction', value: 'Delaware, USA' },
  { label: 'Founded', value: 'January 15, 2020' },
  { label: 'Registration', value: 'Active', type: 'badge' },
  { label: 'Tax ID', value: '***-**-4567' },
];

const actions: CardAction[] = [
  {
    label: 'Edit',
    onClick: () => console.log('Edit clicked'),
    icon: <HiPencil />,
    variant: 'secondary',
  },
  {
    label: 'Delete',
    onClick: () => console.log('Delete clicked'),
    icon: <HiTrash />,
    variant: 'danger',
  },
];

export const Default: Story = {
  args: {
    title: 'User Profile',
    subtitle: 'Employee Information',
    fields: userFields,
    layout: 'grid',
  },
};

export const WithAvatar: Story = {
  args: {
    title: 'Sarah Johnson',
    subtitle: 'Senior Developer',
    avatar: 'https://i.pravatar.cc/150?img=5',
    fields: userFields,
    layout: 'grid',
    status: 'active',
  },
};

export const WithCustomAvatar: Story = {
  args: {
    title: 'John Doe',
    subtitle: 'Product Manager',
    avatar: <HiUserCircle size={48} color="#696CFF" />,
    fields: [
      { label: 'Email', value: 'john.doe@example.com', type: 'link' },
      { label: 'Phone', value: '+1 (555) 987-6543' },
      { label: 'Department', value: 'Product' },
      { label: 'Status', value: 'Active', type: 'badge' },
    ],
    layout: 'grid',
    status: 'active',
  },
};

export const WithActions: Story = {
  args: {
    title: 'User Profile',
    subtitle: 'Employee Information',
    fields: userFields,
    layout: 'grid',
    actions: actions,
  },
};

export const ListLayout: Story = {
  args: {
    title: 'Entity Details',
    subtitle: 'Business Entity Information',
    fields: entityFields,
    layout: 'list',
    status: 'active',
  },
};

export const GridLayout: Story = {
  args: {
    title: 'Compliance Information',
    subtitle: 'GDPR Compliance Status',
    fields: complianceFields,
    layout: 'grid',
    status: 'active',
  },
};

export const StatusActive: Story = {
  args: {
    title: 'Active User',
    subtitle: 'Currently logged in',
    fields: userFields.slice(0, 4),
    status: 'active',
  },
};

export const StatusInactive: Story = {
  args: {
    title: 'Inactive User',
    subtitle: 'Account suspended',
    fields: userFields.slice(0, 4),
    status: 'inactive',
  },
};

export const StatusWarning: Story = {
  args: {
    title: 'Warning Status',
    subtitle: 'Action required',
    fields: complianceFields.slice(0, 4),
    status: 'warning',
  },
};

export const StatusError: Story = {
  args: {
    title: 'Error Status',
    subtitle: 'Compliance issue detected',
    fields: complianceFields.slice(0, 4),
    status: 'error',
  },
};

export const Expandable: Story = {
  args: {
    title: 'Collapsible Card',
    subtitle: 'Click the arrow to expand/collapse',
    fields: userFields,
    layout: 'grid',
    expandable: true,
  },
};

export const ExpandableWithActions: Story = {
  args: {
    title: 'User Profile',
    subtitle: 'Manage user information',
    fields: userFields,
    layout: 'grid',
    expandable: true,
    actions: actions,
    status: 'active',
  },
};

export const WithFieldSpans: Story = {
  args: {
    title: 'Custom Grid Layout',
    subtitle: 'Fields with different column spans',
    fields: [
      { label: 'Title', value: 'Full Width Title', span: 3 },
      { label: 'First Name', value: 'John' },
      { label: 'Last Name', value: 'Doe' },
      { label: 'Email', value: 'john.doe@example.com', span: 2 },
      { label: 'Phone', value: '+1 (555) 123-4567' },
      { label: 'Address', value: '123 Main St, San Francisco, CA 94105', span: 3 },
    ],
    layout: 'grid',
  },
};

export const MixedFieldTypes: Story = {
  args: {
    title: 'Mixed Field Types',
    subtitle: 'Demonstrating different field rendering',
    fields: [
      { label: 'Text Field', value: 'Simple text value', type: 'text' },
      { label: 'Badge Field', value: 'Active', type: 'badge' },
      { label: 'Link Field', value: 'example.com', type: 'link' },
      {
        label: 'Custom Field',
        value: (
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <HiMail size={16} />
            <span>Custom rendered content</span>
          </div>
        ),
        type: 'custom',
      },
    ],
    layout: 'grid',
  },
};

export const WithFooter: Story = {
  args: {
    title: 'User Profile',
    subtitle: 'Employee Information',
    fields: userFields,
    layout: 'grid',
    footer: (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>
          Last updated: November 5, 2025
        </span>
        <button
          style={{
            padding: '4px 12px',
            fontSize: '13px',
            border: '1px solid var(--color-gray-300)',
            borderRadius: '6px',
            background: 'transparent',
            cursor: 'pointer',
          }}
        >
          View History
        </button>
      </div>
    ),
  },
};

export const CompleteExample: Story = {
  args: {
    title: 'Sarah Johnson',
    subtitle: 'Senior Software Engineer',
    avatar: 'https://i.pravatar.cc/150?img=5',
    status: 'active',
    fields: [
      { label: 'Employee ID', value: 'EMP-2025-001' },
      { label: 'Email', value: 'sarah.johnson@example.com', type: 'link' },
      { label: 'Phone', value: '+1 (555) 123-4567' },
      { label: 'Department', value: 'Engineering' },
      { label: 'Role', value: 'Senior Developer', type: 'badge' },
      { label: 'Location', value: 'San Francisco, CA' },
      { label: 'Start Date', value: 'January 15, 2020' },
      { label: 'Manager', value: 'John Smith', type: 'link' },
      { label: 'Status', value: 'Active', type: 'badge' },
    ],
    layout: 'grid',
    expandable: true,
    actions: [
      {
        label: 'View',
        onClick: () => console.log('View clicked'),
        icon: <HiEye />,
        variant: 'secondary',
      },
      {
        label: 'Edit',
        onClick: () => console.log('Edit clicked'),
        icon: <HiPencil />,
        variant: 'primary',
      },
    ],
    footer: (
      <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>
        Last updated: November 5, 2025 at 10:30 AM
      </div>
    ),
  },
};

export const ComplianceCard: Story = {
  args: {
    title: 'GDPR Compliance',
    subtitle: 'Data Protection Framework',
    status: 'active',
    fields: [
      { label: 'Framework', value: 'GDPR', type: 'badge' },
      { label: 'Status', value: 'Compliant', type: 'badge' },
      { label: 'Last Audit', value: 'November 1, 2025' },
      { label: 'Next Review', value: 'February 1, 2026' },
      { label: 'Risk Level', value: 'Low' },
      { label: 'Certification', value: 'ISO 27001' },
      { label: 'Data Controller', value: 'Company Inc.' },
      { label: 'DPO Contact', value: 'dpo@example.com', type: 'link' },
    ],
    layout: 'grid',
    actions: [
      {
        label: 'View Report',
        onClick: () => console.log('View report'),
        variant: 'primary',
      },
    ],
  },
};

export const MinimalCard: Story = {
  args: {
    title: 'Simple Card',
    fields: [
      { label: 'Field 1', value: 'Value 1' },
      { label: 'Field 2', value: 'Value 2' },
    ],
  },
};

export const DisabledActions: Story = {
  args: {
    title: 'Read-Only Profile',
    subtitle: 'View permissions only',
    fields: userFields.slice(0, 4),
    actions: [
      {
        label: 'Edit',
        onClick: () => console.log('Edit clicked'),
        icon: <HiPencil />,
        variant: 'secondary',
        disabled: true,
      },
      {
        label: 'Delete',
        onClick: () => console.log('Delete clicked'),
        icon: <HiTrash />,
        variant: 'danger',
        disabled: true,
      },
    ],
  },
};

export const LongContent: Story = {
  args: {
    title: 'Detailed Information',
    subtitle: 'Card with extensive data',
    fields: [
      { label: 'Short Field', value: 'Value' },
      {
        label: 'Long Field',
        value:
          'This is a very long field value that demonstrates how the card handles extensive text content. It should wrap properly and maintain readability.',
        span: 2,
      },
      { label: 'URL', value: 'https://example.com/very-long-url-path/to/resource', type: 'link' },
      { label: 'Description', value: 'Another lengthy description field', span: 3 },
    ],
    layout: 'grid',
  },
};

export const Playground: Story = {
  args: {
    title: 'Playground Card',
    subtitle: 'Customize me!',
    fields: [
      { label: 'Name', value: 'John Doe' },
      { label: 'Email', value: 'john@example.com', type: 'link' },
      { label: 'Status', value: 'Active', type: 'badge' },
      { label: 'Location', value: 'New York, NY' },
    ],
    layout: 'grid',
    status: 'active',
    expandable: true,
    actions: [
      {
        label: 'Edit',
        onClick: () => alert('Edit clicked'),
        variant: 'primary',
      },
    ],
  },
};
