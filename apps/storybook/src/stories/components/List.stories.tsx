import type { Meta, StoryObj } from '@storybook/react';
import { List, ListItemData } from '@intelation/ui';
import React from 'react';

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of items to display in the list',
    },
    variant: {
      control: 'select',
      options: ['default', 'toolbar'],
      description: 'Visual variant of the list',
    },
    selectable: {
      control: 'boolean',
      description: 'Whether items can be selected',
    },
    multiSelect: {
      control: 'boolean',
      description: 'Whether multiple items can be selected',
    },
    selectedIds: {
      control: 'object',
      description: 'Controlled selected item IDs',
    },
    virtualScrolling: {
      control: 'boolean',
      description: 'Enable virtual scrolling for large lists',
    },
    groupBy: {
      control: 'text',
      description: 'Property to group items by',
    },
    maxHeight: {
      control: 'text',
      description: 'Maximum height for the list',
    },
    showDividers: {
      control: 'boolean',
      description: 'Show dividers between items',
    },
  },
};

export default meta;
type Story = StoryObj<typeof List>;

// Sample items
const basicItems: ListItemData[] = [
  { id: '1', content: 'First Item' },
  { id: '2', content: 'Second Item' },
  { id: '3', content: 'Third Item' },
  { id: '4', content: 'Fourth Item' },
  { id: '5', content: 'Fifth Item' },
];

const itemsWithContent: ListItemData[] = [
  {
    id: '1',
    content: (
      <div>
        <div style={{ fontWeight: 600 }}>Project Alpha</div>
        <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
          Updated 2 hours ago
        </div>
      </div>
    ),
  },
  {
    id: '2',
    content: (
      <div>
        <div style={{ fontWeight: 600 }}>Project Beta</div>
        <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
          Updated yesterday
        </div>
      </div>
    ),
  },
  {
    id: '3',
    content: (
      <div>
        <div style={{ fontWeight: 600 }}>Project Gamma</div>
        <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
          Updated last week
        </div>
      </div>
    ),
  },
];

const itemsWithActions: ListItemData[] = [
  {
    id: '1',
    content: 'Document.pdf',
    actions: [
      {
        label: 'Download',
        icon: '⬇',
        onClick: (item) => alert(`Downloading ${item.content}`),
      },
      {
        label: 'Delete',
        icon: '🗑',
        onClick: (item) => alert(`Deleting ${item.content}`),
      },
    ],
  },
  {
    id: '2',
    content: 'Spreadsheet.xlsx',
    actions: [
      {
        label: 'Download',
        icon: '⬇',
        onClick: (item) => alert(`Downloading ${item.content}`),
      },
      {
        label: 'Delete',
        icon: '🗑',
        onClick: (item) => alert(`Deleting ${item.content}`),
      },
    ],
  },
  {
    id: '3',
    content: 'Presentation.pptx',
    disabled: true,
    actions: [
      {
        label: 'Download',
        icon: '⬇',
        onClick: (item) => alert(`Downloading ${item.content}`),
        disabled: true,
      },
    ],
  },
];

const nestedItems: ListItemData[] = [
  {
    id: '1',
    content: 'Documents',
    children: [
      { id: '1-1', content: 'Report.pdf' },
      { id: '1-2', content: 'Invoice.pdf' },
      {
        id: '1-3',
        content: 'Archive',
        children: [
          { id: '1-3-1', content: 'Old Report.pdf' },
          { id: '1-3-2', content: 'Old Invoice.pdf' },
        ],
      },
    ],
  },
  {
    id: '2',
    content: 'Images',
    children: [
      { id: '2-1', content: 'Photo1.jpg' },
      { id: '2-2', content: 'Photo2.png' },
    ],
  },
  {
    id: '3',
    content: 'Videos',
  },
];

const groupedItems: ListItemData[] = [
  { id: '1', content: 'Report.pdf', metadata: { type: 'Documents' } },
  { id: '2', content: 'Invoice.pdf', metadata: { type: 'Documents' } },
  { id: '3', content: 'Photo.jpg', metadata: { type: 'Images' } },
  { id: '4', content: 'Banner.png', metadata: { type: 'Images' } },
  { id: '5', content: 'Video.mp4', metadata: { type: 'Videos' } },
  { id: '6', content: 'Tutorial.mp4', metadata: { type: 'Videos' } },
];

export const Default: Story = {
  args: {
    items: basicItems,
  },
};

export const Selectable: Story = {
  args: {
    items: basicItems,
    selectable: true,
  },
};

export const MultiSelect: Story = {
  args: {
    items: basicItems,
    selectable: true,
    multiSelect: true,
  },
};

export const WithDividers: Story = {
  args: {
    items: basicItems,
    showDividers: true,
  },
};

export const WithRichContent: Story = {
  args: {
    items: itemsWithContent,
    selectable: true,
  },
};

export const WithActions: Story = {
  args: {
    items: itemsWithActions,
  },
};

export const WithSelectableActions: Story = {
  args: {
    items: itemsWithActions,
    selectable: true,
    multiSelect: true,
  },
};

export const NestedList: Story = {
  args: {
    items: nestedItems,
  },
};

export const NestedSelectable: Story = {
  args: {
    items: nestedItems,
    selectable: true,
    multiSelect: true,
  },
};

export const GroupedList: Story = {
  args: {
    items: groupedItems,
    groupBy: 'type',
  },
};

export const GroupedSelectable: Story = {
  args: {
    items: groupedItems,
    groupBy: 'type',
    selectable: true,
    multiSelect: true,
  },
};

export const WithMaxHeight: Story = {
  args: {
    items: Array.from({ length: 20 }, (_, i) => ({
      id: `item-${i}`,
      content: `Item ${i + 1}`,
    })),
    maxHeight: '300px',
    selectable: true,
  },
};

export const DisabledItems: Story = {
  args: {
    items: [
      { id: '1', content: 'Active Item' },
      { id: '2', content: 'Disabled Item', disabled: true },
      { id: '3', content: 'Another Active Item' },
      { id: '4', content: 'Another Disabled Item', disabled: true },
    ],
    selectable: true,
  },
};

export const FileList: Story = {
  render: () => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>([]);

    const files: ListItemData[] = [
      {
        id: '1',
        content: (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', width: '100%' }}>
            <span style={{ fontSize: '1.5rem' }}>📄</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600 }}>Annual Report 2024.pdf</div>
              <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>2.4 MB • Modified today</div>
            </div>
          </div>
        ),
        actions: [
          {
            label: 'Download',
            icon: '⬇',
            onClick: (item) => console.log('Download', item),
          },
          {
            label: 'Share',
            icon: '↗',
            onClick: (item) => console.log('Share', item),
          },
          {
            label: 'More',
            icon: '⋯',
            onClick: (item) => console.log('More options', item),
          },
        ],
      },
      {
        id: '2',
        content: (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', width: '100%' }}>
            <span style={{ fontSize: '1.5rem' }}>📊</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600 }}>Q4 Analytics.xlsx</div>
              <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>1.1 MB • Modified yesterday</div>
            </div>
          </div>
        ),
        actions: [
          {
            label: 'Download',
            icon: '⬇',
            onClick: (item) => console.log('Download', item),
          },
          {
            label: 'Share',
            icon: '↗',
            onClick: (item) => console.log('Share', item),
          },
          {
            label: 'More',
            icon: '⋯',
            onClick: (item) => console.log('More options', item),
          },
        ],
      },
      {
        id: '3',
        content: (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', width: '100%' }}>
            <span style={{ fontSize: '1.5rem' }}>🖼</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600 }}>Banner Design.png</div>
              <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>856 KB • Modified 3 days ago</div>
            </div>
          </div>
        ),
        actions: [
          {
            label: 'Download',
            icon: '⬇',
            onClick: (item) => console.log('Download', item),
          },
          {
            label: 'Share',
            icon: '↗',
            onClick: (item) => console.log('Share', item),
          },
          {
            label: 'More',
            icon: '⋯',
            onClick: (item) => console.log('More options', item),
          },
        ],
      },
    ];

    return (
      <div style={{ width: '600px' }}>
        <div style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: '#f3f4f6', borderRadius: '0.375rem' }}>
          <strong>Selected:</strong> {selectedIds.length > 0 ? selectedIds.join(', ') : 'None'}
        </div>
        <List
          items={files}
          selectable
          multiSelect
          selectedIds={selectedIds}
          onSelectionChange={setSelectedIds}
        />
      </div>
    );
  },
};

export const NavigationMenu: Story = {
  render: () => {
    const menuItems: ListItemData[] = [
      {
        id: 'dashboard',
        content: (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span>📊</span>
            <span>Dashboard</span>
          </div>
        ),
      },
      {
        id: 'projects',
        content: (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span>📁</span>
            <span>Projects</span>
          </div>
        ),
        children: [
          { id: 'projects-active', content: 'Active Projects' },
          { id: 'projects-archived', content: 'Archived Projects' },
        ],
      },
      {
        id: 'team',
        content: (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span>👥</span>
            <span>Team</span>
          </div>
        ),
      },
      {
        id: 'settings',
        content: (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span>⚙️</span>
            <span>Settings</span>
          </div>
        ),
        children: [
          { id: 'settings-profile', content: 'Profile' },
          { id: 'settings-security', content: 'Security' },
          { id: 'settings-notifications', content: 'Notifications' },
        ],
      },
    ];

    return (
      <div style={{ width: '300px' }}>
        <List
          items={menuItems}
          onItemClick={(item) => console.log('Navigate to:', item.id)}
        />
      </div>
    );
  },
};

export const Playground: Story = {
  args: {
    items: basicItems,
    selectable: true,
    multiSelect: false,
    showDividers: false,
    maxHeight: undefined,
  },
};

// Toolbar Variant
export const Toolbar: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    variant: 'toolbar',
    items: [
      {
        id: 'home',
        content: (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>Home</span>
          </div>
        ),
      },
      {
        id: 'search',
        content: (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <span>Search</span>
          </div>
        ),
      },
      {
        id: 'settings',
        content: (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v6m0 6v6m9-9h-6m-6 0H3" />
            </svg>
            <span>Settings</span>
          </div>
        ),
      },
      {
        id: 'profile',
        content: (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span>Profile</span>
          </div>
        ),
      },
    ],
    selectable: true,
    selectedIds: ['home'],
  },
};

// Toolbar - Anonymization Tools
export const ToolbarAnonymization: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    variant: 'toolbar',
    items: [
      {
        id: 'redact',
        content: (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="3" y1="9" x2="21" y2="9" />
              <line x1="3" y1="15" x2="21" y2="15" />
            </svg>
            <span>Redact</span>
          </div>
        ),
      },
      {
        id: 'mask',
        content: (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span>Mask</span>
          </div>
        ),
      },
      {
        id: 'anonymize',
        content: (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" y1="19" x2="12" y2="23" />
              <line x1="8" y1="23" x2="16" y2="23" />
            </svg>
            <span>Anonymize</span>
          </div>
        ),
      },
      {
        id: 'pseudonymize',
        content: (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="8.5" cy="7" r="4" />
              <line x1="20" y1="8" x2="20" y2="14" />
              <line x1="23" y1="11" x2="17" y2="11" />
            </svg>
            <span>Pseudonymize</span>
          </div>
        ),
      },
      {
        id: 'encrypt',
        content: (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span>Encrypt</span>
          </div>
        ),
      },
    ],
    selectable: true,
    selectedIds: ['redact'],
    onItemClick: (item: any) => console.log('Tool clicked:', item.id),
  },
};

// Toolbar - Many Items
export const ToolbarManyItems: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    variant: 'toolbar',
    items: Array.from({ length: 15 }, (_, i) => ({
      id: `tool-${i + 1}`,
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          <span>Tool {i + 1}</span>
        </div>
      ),
    })),
    selectable: true,
    selectedIds: ['tool-1'],
  },
};
