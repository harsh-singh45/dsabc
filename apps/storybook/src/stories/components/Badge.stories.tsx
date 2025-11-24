import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@intelation/ui';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'success', 'warning', 'danger'],
      description: 'Visual variant of the badge',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the badge',
    },
    badgeStyle: {
      control: 'radio',
      options: ['solid', 'outline'],
      description: 'Style of the badge',
    },
    shape: {
      control: 'radio',
      options: ['pill', 'rectangular'],
      description: 'Shape of the badge',
    },
    removable: {
      control: 'boolean',
      description: 'Whether the badge can be removed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// Default
export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

// Variants - Solid
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
    </div>
  ),
};

// Variants - Outline
export const VariantsOutline: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge variant="primary" badgeStyle="outline">
        Primary
      </Badge>
      <Badge variant="secondary" badgeStyle="outline">
        Secondary
      </Badge>
      <Badge variant="success" badgeStyle="outline">
        Success
      </Badge>
      <Badge variant="warning" badgeStyle="outline">
        Warning
      </Badge>
      <Badge variant="danger" badgeStyle="outline">
        Danger
      </Badge>
    </div>
  ),
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

// Shapes
export const Shapes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge shape="pill">Pill Shape</Badge>
      <Badge shape="rectangular">Rectangular</Badge>
    </div>
  ),
};

// With Icons
export const WithIcons: Story = {
  render: () => {
    const CheckIcon = () => (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.6667 3.5L5.25 9.91667L2.33333 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );

    const AlertIcon = () => (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 4.66667V7M7 9.33333H7.00667M12.8333 7C12.8333 10.2217 10.2217 12.8333 7 12.8333C3.77834 12.8333 1.16667 10.2217 1.16667 7C1.16667 3.77834 3.77834 1.16667 7 1.16667C10.2217 1.16667 12.8333 3.77834 12.8333 7Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );

    const StarIcon = () => (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 1.16667L8.85583 5.02083L13.0833 5.63417L10.0417 8.58917L10.7117 12.8333L7 10.8467L3.28833 12.8333L3.95833 8.58917L0.916667 5.63417L5.14417 5.02083L7 1.16667Z" />
      </svg>
    );

    return (
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
        <Badge variant="success" icon={<CheckIcon />}>
          Verified
        </Badge>
        <Badge variant="warning" icon={<AlertIcon />}>
          Alert
        </Badge>
        <Badge variant="primary" icon={<StarIcon />}>
          Featured
        </Badge>
      </div>
    );
  },
};

// Removable Badges
export const Removable: Story = {
  render: () => {
    const handleRemove = (label: string) => {
      alert(`Removed: ${label}`);
    };

    return (
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
        <Badge variant="primary" removable onRemove={() => handleRemove('Primary')}>
          Primary
        </Badge>
        <Badge variant="success" removable onRemove={() => handleRemove('Success')}>
          Success
        </Badge>
        <Badge variant="warning" removable onRemove={() => handleRemove('Warning')}>
          Warning
        </Badge>
        <Badge variant="danger" removable onRemove={() => handleRemove('Danger')}>
          Danger
        </Badge>
      </div>
    );
  },
};

// Use Cases - Status Indicators
export const StatusIndicators: Story = {
  render: () => {
    const CheckIcon = () => (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.6667 3.5L5.25 9.91667L2.33333 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );

    const ClockIcon = () => (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 3.5V7L9.33333 8.16667M12.8333 7C12.8333 10.2217 10.2217 12.8333 7 12.8333C3.77834 12.8333 1.16667 10.2217 1.16667 7C1.16667 3.77834 3.77834 1.16667 7 1.16667C10.2217 1.16667 12.8333 3.77834 12.8333 7Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );

    const XIcon = () => (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>
            Compliance Status
          </h4>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Badge variant="success" icon={<CheckIcon />} size="sm">
              Compliant
            </Badge>
            <Badge variant="warning" icon={<ClockIcon />} size="sm">
              Pending Review
            </Badge>
            <Badge variant="danger" icon={<XIcon />} size="sm">
              Non-Compliant
            </Badge>
          </div>
        </div>

        <div>
          <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>
            Processing Status
          </h4>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Badge variant="primary" size="sm">
              Processing
            </Badge>
            <Badge variant="success" size="sm">
              Completed
            </Badge>
            <Badge variant="danger" size="sm">
              Failed
            </Badge>
          </div>
        </div>

        <div>
          <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>Entity Types</h4>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Badge variant="primary" badgeStyle="outline" size="sm">
              PII
            </Badge>
            <Badge variant="secondary" badgeStyle="outline" size="sm">
              Location
            </Badge>
            <Badge variant="success" badgeStyle="outline" size="sm">
              Contact
            </Badge>
          </div>
        </div>
      </div>
    );
  },
};

// Tag Collection with Removable Badges
export const TagCollection: Story = {
  render: () => {
    const tags = ['React', 'TypeScript', 'Tailwind', 'Storybook', 'Jest'];

    return (
      <div
        style={{
          padding: '16px',
          backgroundColor: 'var(--color-background-secondary)',
          borderRadius: 'var(--borderRadius-lg)',
        }}
      >
        <h4 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>
          Selected Technologies
        </h4>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {tags.map((tag) => (
            <Badge key={tag} variant="primary" removable onRemove={() => alert(`Remove ${tag}`)}>
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    );
  },
};

// Counts and Notifications
export const CountsAndNotifications: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>Inbox</span>
        <Badge variant="danger" size="sm" shape="pill">
          12
        </Badge>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>Notifications</span>
        <Badge variant="primary" size="sm" shape="pill">
          5
        </Badge>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>Pending Tasks</span>
        <Badge variant="warning" size="sm" shape="pill">
          23
        </Badge>
      </div>
    </div>
  ),
};

// Playground
export const Playground: Story = {
  args: {
    children: 'Badge Text',
    variant: 'primary',
    size: 'md',
    badgeStyle: 'solid',
    shape: 'pill',
    removable: false,
  },
};
