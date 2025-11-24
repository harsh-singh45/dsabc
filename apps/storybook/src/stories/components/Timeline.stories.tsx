import type { Meta, StoryObj } from '@storybook/react';
import { Timeline, TimelineEvent } from '@intelation/ui';

const meta: Meta<typeof Timeline> = {
  title: 'Data Display/Timeline',
  component: Timeline,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['vertical', 'horizontal'],
      description: 'Timeline layout direction',
    },
    groupBy: {
      control: 'radio',
      options: ['none', 'date', 'category'],
      description: 'Group events by date or category',
    },
    expandable: {
      control: 'boolean',
      description: 'Allow events to be expanded to show details',
    },
    realTime: {
      control: 'boolean',
      description: 'Show real-time indicator',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

// Sample events data
const sampleEvents: TimelineEvent[] = [
  {
    id: '1',
    timestamp: new Date(Date.now() - 5 * 60000), // 5 minutes ago
    title: 'Document uploaded successfully',
    description: 'Annual_Report_2024.pdf was uploaded by John Doe',
    status: 'success',
    category: 'Upload',
    details: (
      <div>
        <p><strong>File Details:</strong></p>
        <ul>
          <li>Size: 2.4 MB</li>
          <li>Pages: 45</li>
          <li>Format: PDF</li>
          <li>Uploaded by: John Doe (john.doe@company.com)</li>
        </ul>
      </div>
    ),
  },
  {
    id: '2',
    timestamp: new Date(Date.now() - 15 * 60000), // 15 minutes ago
    title: 'Processing started',
    description: 'Document processing has begun',
    status: 'info',
    category: 'Processing',
  },
  {
    id: '3',
    timestamp: new Date(Date.now() - 30 * 60000), // 30 minutes ago
    title: 'Validation warning',
    description: 'Some fields require attention',
    status: 'warning',
    category: 'Validation',
    details: (
      <div>
        <p><strong>Warning Details:</strong></p>
        <ul>
          <li>Missing author information</li>
          <li>Document date is in the future</li>
          <li>Recommended: Review metadata before final submission</li>
        </ul>
      </div>
    ),
  },
  {
    id: '4',
    timestamp: new Date(Date.now() - 2 * 3600000), // 2 hours ago
    title: 'User authentication',
    description: 'User logged in from new device',
    status: 'info',
    category: 'Security',
  },
  {
    id: '5',
    timestamp: new Date(Date.now() - 4 * 3600000), // 4 hours ago
    title: 'Compliance check failed',
    description: 'Document does not meet compliance requirements',
    status: 'error',
    category: 'Compliance',
    details: (
      <div>
        <p><strong>Error Information:</strong></p>
        <ul>
          <li>Missing required signatures</li>
          <li>Encryption standard not met</li>
          <li>Action required: Update document and resubmit</li>
        </ul>
      </div>
    ),
  },
];

const yesterdayEvents: TimelineEvent[] = [
  {
    id: '6',
    timestamp: new Date(Date.now() - 25 * 3600000), // Yesterday
    title: 'Report generated',
    description: 'Monthly compliance report was generated',
    status: 'success',
    category: 'Reports',
  },
  {
    id: '7',
    timestamp: new Date(Date.now() - 26 * 3600000),
    title: 'System maintenance',
    description: 'Scheduled maintenance completed',
    status: 'info',
    category: 'System',
  },
];

// Stories
export const Default: Story = {
  args: {
    events: sampleEvents,
    orientation: 'vertical',
  },
};

export const Horizontal: Story = {
  args: {
    events: sampleEvents.slice(0, 4),
    orientation: 'horizontal',
  },
};

export const WithExpansion: Story = {
  args: {
    events: sampleEvents,
    orientation: 'vertical',
    expandable: true,
  },
};

export const GroupedByDate: Story = {
  args: {
    events: [...sampleEvents, ...yesterdayEvents],
    groupBy: 'date',
    expandable: true,
  },
};

export const GroupedByCategory: Story = {
  args: {
    events: sampleEvents,
    groupBy: 'category',
    expandable: true,
  },
};

export const RealTimeMode: Story = {
  args: {
    events: sampleEvents,
    realTime: true,
    expandable: true,
  },
};

export const AllStatuses: Story = {
  render: () => (
    <Timeline
      events={[
        {
          id: '1',
          timestamp: new Date(Date.now() - 5 * 60000),
          title: 'Success event',
          description: 'This is a success status event',
          status: 'success',
        },
        {
          id: '2',
          timestamp: new Date(Date.now() - 15 * 60000),
          title: 'Info event',
          description: 'This is an info status event',
          status: 'info',
        },
        {
          id: '3',
          timestamp: new Date(Date.now() - 25 * 60000),
          title: 'Warning event',
          description: 'This is a warning status event',
          status: 'warning',
        },
        {
          id: '4',
          timestamp: new Date(Date.now() - 35 * 60000),
          title: 'Error event',
          description: 'This is an error status event',
          status: 'error',
        },
      ]}
    />
  ),
};

export const WithCustomIcons: Story = {
  render: () => (
    <Timeline
      events={[
        {
          id: '1',
          timestamp: new Date(Date.now() - 5 * 60000),
          title: 'Document uploaded',
          description: 'File uploaded successfully',
          status: 'success',
          icon: (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 2V8M8 8L5.33333 5.33333M8 8L10.6667 5.33333M2.66667 14H13.3333C13.5101 14 13.6797 13.9298 13.8047 13.8047C13.9298 13.6797 14 13.5101 14 13.3333V6.66667C14 6.48986 13.9298 6.32029 13.8047 6.19526C13.6797 6.07024 13.5101 6 13.3333 6H10.6667L9.33333 4H6.66667L5.33333 6H2.66667C2.48986 6 2.32029 6.07024 2.19526 6.19526C2.07024 6.32029 2 6.48986 2 6.66667V13.3333C2 13.5101 2.07024 13.6797 2.19526 13.8047C2.32029 13.9298 2.48986 14 2.66667 14Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
        {
          id: '2',
          timestamp: new Date(Date.now() - 15 * 60000),
          title: 'User logged in',
          description: 'Authentication successful',
          status: 'info',
          icon: (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 8C9.65685 8 11 6.65685 11 5C11 3.34315 9.65685 2 8 2C6.34315 2 5 3.34315 5 5C5 6.65685 6.34315 8 8 8Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 14C3 12.6739 3.52678 11.4021 4.46447 10.4645C5.40215 9.52678 6.67392 9 8 9C9.32608 9 10.5979 9.52678 11.5355 10.4645C12.4732 11.4021 13 12.6739 13 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
        {
          id: '3',
          timestamp: new Date(Date.now() - 25 * 60000),
          title: 'Email sent',
          description: 'Notification email delivered',
          status: 'success',
          icon: (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M2.66667 4L8 8L13.3333 4M2.66667 4V12C2.66667 12.3536 3.03572 12.6667 3.33333 12.6667H12.6667C12.9643 12.6667 13.3333 12.3536 13.3333 12V4M2.66667 4C2.66667 3.64638 3.03572 3.33333 3.33333 3.33333H12.6667C12.9643 3.33333 13.3333 3.64638 13.3333 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
      ]}
    />
  ),
};

export const EmptyState: Story = {
  args: {
    events: [],
  },
};

export const SingleEvent: Story = {
  args: {
    events: [
      {
        id: '1',
        timestamp: new Date(),
        title: 'Single event',
        description: 'This is the only event in the timeline',
        status: 'success',
      },
    ],
  },
};

export const CustomDateFormat: Story = {
  args: {
    events: sampleEvents,
    formatDate: (date: Date) => {
      return date.toLocaleString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    },
  },
};

export const AuditLog: Story = {
  render: () => (
    <div style={{ maxWidth: '800px' }}>
      <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 600 }}>
        System Audit Log
      </h2>
      <Timeline
        events={[
          {
            id: '1',
            timestamp: new Date(Date.now() - 2 * 60000),
            title: 'User permissions updated',
            description: 'Admin role assigned to user@example.com',
            status: 'success',
            category: 'Security',
            details: (
              <div>
                <p><strong>Change Details:</strong></p>
                <p>Previous role: User</p>
                <p>New role: Admin</p>
                <p>Changed by: system.admin@example.com</p>
                <p>IP Address: 192.168.1.100</p>
              </div>
            ),
          },
          {
            id: '2',
            timestamp: new Date(Date.now() - 15 * 60000),
            title: 'Configuration updated',
            description: 'System settings were modified',
            status: 'info',
            category: 'Configuration',
          },
          {
            id: '3',
            timestamp: new Date(Date.now() - 45 * 60000),
            title: 'Failed login attempt',
            description: 'Multiple failed authentication attempts detected',
            status: 'warning',
            category: 'Security',
            details: (
              <div>
                <p><strong>Security Alert:</strong></p>
                <p>Username: suspicious.user@example.com</p>
                <p>Failed attempts: 5</p>
                <p>IP Address: 203.0.113.42</p>
                <p>Status: Account temporarily locked</p>
              </div>
            ),
          },
          {
            id: '4',
            timestamp: new Date(Date.now() - 2 * 3600000),
            title: 'Database backup completed',
            description: 'Scheduled backup finished successfully',
            status: 'success',
            category: 'Maintenance',
          },
          {
            id: '5',
            timestamp: new Date(Date.now() - 4 * 3600000),
            title: 'API rate limit exceeded',
            description: 'Client exceeded API request quota',
            status: 'error',
            category: 'API',
            details: (
              <div>
                <p><strong>Rate Limit Details:</strong></p>
                <p>Client ID: client_abc123</p>
                <p>Requests: 1,523 / 1,000 per hour</p>
                <p>Endpoint: /api/v1/documents</p>
                <p>Action: Rate limited for 1 hour</p>
              </div>
            ),
          },
        ]}
        groupBy="category"
        expandable
        realTime
      />
    </div>
  ),
};

export const Playground: Story = {
  args: {
    events: sampleEvents,
    orientation: 'vertical',
    groupBy: 'none',
    expandable: true,
    realTime: false,
  },
};
