import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "@intelation/ui";

const meta = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A flexible table component for displaying tabular data. Supports sorting, selection, multiple variants, and responsive design.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "striped", "bordered"],
      description: "Visual variant of the table",
    },
    density: {
      control: { type: "select" },
      options: ["compact", "comfortable", "spacious"],
      description: "Row spacing density",
    },
    stickyHeader: {
      control: { type: "boolean" },
      description: "Keep header visible when scrolling",
    },
    selectable: {
      control: { type: "boolean" },
      description: "Enable row selection with checkboxes",
    },
    loading: {
      control: { type: "boolean" },
      description: "Show loading skeleton",
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data for anonymization logs
const sampleData = [
  {
    id: 1,
    timestamp: "2025-10-23 14:30:25",
    source: "Dashboard",
    actor: "user",
    field: "Email Address",
    method: "Replace",
    status: "Success",
    details: "john.doe@example.com → an***ed@example.com",
  },
  {
    id: 2,
    timestamp: "2025-10-23 14:28:15",
    source: "API",
    actor: "system",
    field: "Phone Number",
    method: "Mask",
    status: "Success",
    details: "+1-555-1234 → +1-***-****",
  },
  {
    id: 3,
    timestamp: "2025-10-23 14:25:10",
    source: "Dashboard",
    actor: "user",
    field: "SSN",
    method: "Redact",
    status: "Success",
    details: "123-45-6789 → ***-**-****",
  },
  {
    id: 4,
    timestamp: "2025-10-23 14:20:45",
    source: "Import",
    actor: "admin",
    field: "Credit Card",
    method: "Tokenize",
    status: "Completed",
    details: "4532-****-****-1234",
  },
  {
    id: 5,
    timestamp: "2025-10-23 14:15:30",
    source: "Dashboard",
    actor: "user",
    field: "Address",
    method: "Generalize",
    status: "Success",
    details: "123 Main St → City, State",
  },
];

// Badge component for status
const StatusBadge = ({ status }: { status: string }) => {
  const colors: Record<string, string> = {
    Success: "#73E37A",
    Completed: "#73E37A",
    Failed: "#FF6B6B",
    Pending: "#FFB84D",
  };

  return (
    <span
      className="inline-block px-3 py-1 rounded-xl text-xs font-semibold text-white"
      style={{
        backgroundColor: colors[status] || "#E0E0E0",
      }}
    >
      {status}
    </span>
  );
};

// Badge component for source
const SourceBadge = ({ source }: { source: string }) => {
  const colors: Record<string, string> = {
    Dashboard: "#7E6BF2",
    API: "#1AB7EA",
    Import: "#3AA0FF",
    Export: "#FFB84D",
  };

  return (
    <span
      className="inline-block px-3 py-1 rounded-xl text-xs font-semibold text-white"
      style={{
        backgroundColor: colors[source] || "#E0E0E0",
      }}
    >
      {source}
    </span>
  );
};

// Badge component for actor
const ActorBadge = ({ actor }: { actor: string }) => {
  return (
    <span className="inline-block px-3 py-1 rounded-xl text-xs font-semibold text-white bg-blue-500">
      {actor}
    </span>
  );
};

// Method badge
const MethodBadge = ({ method }: { method: string }) => {
  const colors: Record<string, string> = {
    Replace: "#1AB7EA",
    Mask: "#7E6BF2",
    Redact: "#8C8C8C",
    Tokenize: "#3AA0FF",
    Generalize: "#FFB84D",
  };

  return (
    <span
      className="inline-block px-3 py-1 rounded-xl text-xs font-medium text-white"
      style={{
        backgroundColor: colors[method] || "#E0E0E0",
      }}
    >
      {method}
    </span>
  );
};

// Basic columns
const basicColumns = [
  {
    id: "timestamp",
    label: "Timestamp",
    field: "timestamp",
    sortable: true,
  },
  {
    id: "source",
    label: "Source",
    field: "source",
    sortable: true,
    render: (value: unknown) => <SourceBadge source={String(value)} />,
  },
  {
    id: "actor",
    label: "Actor",
    field: "actor",
    sortable: true,
    render: (value: unknown) => <ActorBadge actor={String(value)} />,
  },
  {
    id: "field",
    label: "Field",
    field: "field",
    sortable: true,
  },
  {
    id: "method",
    label: "Method",
    field: "method",
    sortable: true,
    render: (value: unknown) => <MethodBadge method={String(value)} />,
  },
  {
    id: "status",
    label: "Status",
    field: "status",
    align: "center" as const,
    sortable: true,
    render: (value: unknown) => <StatusBadge status={String(value)} />,
  },
  {
    id: "details",
    label: "Details",
    field: "details",
  },
];

export const Default: Story = {
  args: {
    columns: basicColumns,
    data: sampleData,
  },
};

export const Sortable: Story = {
  args: {
    columns: basicColumns,
    data: sampleData,
  },
  parameters: {
    docs: {
      description: {
        story: "Click on column headers to sort data in ascending or descending order.",
      },
    },
  },
};

export const Selectable: Story = {
  args: {
    columns: basicColumns,
    data: sampleData,
    selectable: true,
    onSelectionChange: (selected) => {
      console.log("Selected rows:", selected);
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Enable row selection with checkboxes. Select individual rows or use the header checkbox to select all.",
      },
    },
  },
};

export const StripedVariant: Story = {
  args: {
    columns: basicColumns,
    data: sampleData,
    variant: "striped",
  },
  parameters: {
    docs: {
      description: {
        story: "Alternating row colors for better readability.",
      },
    },
  },
};

export const BorderedVariant: Story = {
  args: {
    columns: basicColumns,
    data: sampleData,
    variant: "bordered",
  },
  parameters: {
    docs: {
      description: {
        story: "Table with borders between columns.",
      },
    },
  },
};

export const CompactDensity: Story = {
  args: {
    columns: basicColumns,
    data: sampleData,
    density: "compact",
  },
  parameters: {
    docs: {
      description: {
        story: "Compact spacing for displaying more data in less space.",
      },
    },
  },
};

export const SpaciousDensity: Story = {
  args: {
    columns: basicColumns,
    data: sampleData,
    density: "spacious",
  },
  parameters: {
    docs: {
      description: {
        story: "Spacious layout with more breathing room.",
      },
    },
  },
};

export const StickyHeader: Story = {
  args: {
    columns: basicColumns,
    data: [...sampleData, ...sampleData, ...sampleData],
    stickyHeader: true,
    maxHeight: "400px",
  },
  parameters: {
    docs: {
      description: {
        story: "Header remains visible when scrolling through data.",
      },
    },
  },
};

export const Loading: Story = {
  args: {
    columns: basicColumns,
    data: [],
    loading: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Loading state with skeleton placeholders.",
      },
    },
  },
};

export const EmptyState: Story = {
  args: {
    columns: basicColumns,
    data: [],
    emptyMessage: "No anonymization logs found",
  },
  parameters: {
    docs: {
      description: {
        story: "Display message when no data is available.",
      },
    },
  },
};

export const WithRowClick: Story = {
  args: {
    columns: basicColumns,
    data: sampleData,
    onRowClick: (row) => {
      alert(`Clicked row: ${row.field} - ${row.details}`);
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Clickable rows with hover effect. Click any row to see details.",
      },
    },
  },
};

export const CustomAlignment: Story = {
  args: {
    columns: [
      {
        id: "timestamp",
        label: "Timestamp",
        field: "timestamp",
        align: "left",
      },
      {
        id: "field",
        label: "Field",
        field: "field",
        align: "center",
      },
      {
        id: "method",
        label: "Method",
        field: "method",
        align: "center",
        render: (value: unknown) => <MethodBadge method={String(value)} />,
      },
      {
        id: "status",
        label: "Status",
        field: "status",
        align: "right",
        render: (value: unknown) => <StatusBadge status={String(value)} />,
      },
    ],
    data: sampleData,
  },
  parameters: {
    docs: {
      description: {
        story: "Customize text alignment for each column (left, center, right).",
      },
    },
  },
};

export const MixedConfiguration: Story = {
  args: {
    columns: basicColumns,
    data: sampleData,
    variant: "striped",
    density: "comfortable",
    selectable: true,
    stickyHeader: true,
    maxHeight: "500px",
    onRowClick: (row) => {
      console.log("Row clicked:", row);
    },
    onSelectionChange: (selected) => {
      console.log("Selection changed:", selected);
    },
    onSort: (columnId, direction) => {
      console.log("Sort:", columnId, direction);
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Table with multiple features enabled: striped rows, selection, sticky header, and click handlers.",
      },
    },
  },
};

// Simple data for basic examples
const simpleData = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User" },
  { id: 4, name: "Alice Williams", email: "alice@example.com", role: "Manager" },
];

export const SimpleTable: Story = {
  args: {
    columns: [
      { id: "name", label: "Name", field: "name", sortable: true },
      { id: "email", label: "Email", field: "email", sortable: true },
      { id: "role", label: "Role", field: "role", sortable: true },
    ],
    data: simpleData,
  },
  parameters: {
    docs: {
      description: {
        story: "A simple table with basic columns and data.",
      },
    },
  },
};

export const WithActions: Story = {
  args: {
    columns: [
      { id: "name", label: "Name", field: "name", sortable: true },
      { id: "email", label: "Email", field: "email", sortable: true },
      { id: "role", label: "Role", field: "role", sortable: true },
      {
        id: "actions",
        label: "Actions",
        field: "id",
        align: "center",
        render: (_value: unknown, row: Record<string, unknown>) => (
          <div className="flex gap-2 justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                alert(`Edit ${row.name}`);
              }}
              className="px-3 py-1 text-xs bg-purple-600 text-white border-none rounded cursor-pointer"
            >
              Edit
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                alert(`Delete ${row.name}`);
              }}
              className="px-3 py-1 text-xs bg-red-500 text-white border-none rounded cursor-pointer"
            >
              Delete
            </button>
          </div>
        ),
      },
    ],
    data: simpleData,
  },
  parameters: {
    docs: {
      description: {
        story: "Table with action buttons in each row using custom cell rendering.",
      },
    },
  },
};

// --- Audit Trail & Data Processed stories (from user spec)

const auditColumns = [
  { id: "datetime", label: "Date / Time", field: "datetime", sortable: true, width: "220px" },
  { 
    id: "actor", 
    label: "Actor", 
    field: "actor", 
    sortable: true, 
    width: "100px",
    render: (value: unknown) => (
      <span className="inline-block px-2.5 py-1 rounded-xl text-xs font-semibold bg-blue-500 text-white">
        {String(value)}
      </span>
    ),
  },
  { id: "action", label: "Action", field: "action", sortable: false },
  { 
    id: "source", 
    label: "Source", 
    field: "source", 
    sortable: true,
    render: (value: unknown) => {
      const val = String(value);
      return (
        <span 
          className="inline-block px-2.5 py-1 rounded-xl text-xs font-semibold text-white"
          style={{
            backgroundColor: val === "Dashboard" ? "#7E6BF2" : val === "API" ? "#1AB7EA" : "#8C8C8C",
          }}
        >
          {val}
        </span>
      );
    },
  },
  { 
    id: "status", 
    label: "Status", 
    field: "status", 
    sortable: true, 
    align: "center" as const,
    render: (value: unknown) => (
      <span className="inline-block px-2.5 py-1 rounded-xl text-xs font-semibold bg-green-400 text-white">
        {String(value)}
      </span>
    ),
  },
  { 
    id: "requestId", 
    label: "Request ID", 
    field: "requestId", 
    sortable: false, 
    width: "140px",
    render: (value: unknown) => (
      <span className="font-mono text-xs text-gray-500">
        {String(value)}
      </span>
    ),
  },
  { id: "details", label: "Details", field: "details", width: "64px", align: "center" as const },
];

const auditData = [
  {
    datetime: "10/10/2025 11:29:17 AM",
    actor: "user",
    action: "Anonymization Executed (Text)",
    source: "Dashboard",
    status: "Success",
    requestId: "ca74af96...",
    details: (
      <div className="py-2 text-gray-800 text-xs leading-relaxed">
        <div className="mb-2">
          <strong className="text-gray-800">Request ID:</strong> 
          <span className="ml-2 font-mono text-gray-500">ca74af96-7d2e-4f31-b8c0-e942a3c8f1d2</span>
        </div>
        <div className="mb-2">
          <strong className="text-gray-800">Files Processed:</strong> 
          <span className="ml-2">3</span>
        </div>
        <div className="mb-2">
          <strong className="text-gray-800">Duration:</strong> 
          <span className="ml-2">342ms</span>
        </div>
        <div>
          <strong className="text-gray-800">Notes:</strong> 
          <span className="ml-2">Completed without errors. All PII entities successfully anonymized.</span>
        </div>
      </div>
    ),
  },
  {
    datetime: "10/09/2025 09:12:02 AM",
    actor: "system",
    action: "Anonymization Executed (Replace)",
    source: "API",
    status: "Success",
    requestId: "b21e7f2c...",
    details: (
      <div className="py-2 text-gray-800 text-xs leading-relaxed">
        <div className="mb-2">
          <strong className="text-gray-800">Request ID:</strong> 
          <span className="ml-2 font-mono text-gray-500">b21e7f2c-9a4b-4e12-a5c1-f843b2d9e8f3</span>
        </div>
        <div className="mb-2">
          <strong className="text-gray-800">Files Processed:</strong> 
          <span className="ml-2">2</span>
        </div>
        <div>
          <strong className="text-gray-800">Notes:</strong> 
          <span className="ml-2">Automated batch processing via API endpoint.</span>
        </div>
      </div>
    ),
  },
];

const processedColumns = [
  { id: "datetime", label: "Date / Time", field: "datetime", sortable: true, width: "220px" },
  { 
    id: "method", 
    label: "Method", 
    field: "method", 
    sortable: true, 
    width: "120px",
    render: (value: unknown) => {
      const val = String(value);
      return (
        <span 
          className="inline-block px-2.5 py-1 rounded-xl text-xs font-semibold text-white"
          style={{
            backgroundColor: val === "Replace" ? "#1AB7EA" : val === "Redact" ? "#8C8C8C" : "#7E6BF2",
          }}
        >
          {val}
        </span>
      );
    },
  },
  { 
    id: "characters", 
    label: "Characters", 
    field: "characters", 
    sortable: true, 
    align: "right" as const,
    render: (value: unknown) => (
      <span className="font-semibold text-gray-800">
        {Number(value).toLocaleString()}
      </span>
    ),
  },
  { 
    id: "entities", 
    label: "PII Entities", 
    field: "entities", 
    sortable: true, 
    align: "right" as const,
    render: (value: unknown) => (
      <span className="font-semibold text-gray-800">
        {String(value)}
      </span>
    ),
  },
  { 
    id: "execTime", 
    label: "Execution Time", 
    field: "execTime", 
    sortable: true, 
    align: "right" as const,
    render: (value: unknown) => (
      <span className="font-mono text-xs text-gray-500">
        {String(value)}
      </span>
    ),
  },
  { 
    id: "status", 
    label: "Status", 
    field: "status", 
    sortable: true, 
    align: "center" as const,
    render: (value: unknown) => (
      <span className="inline-block px-2.5 py-1 rounded-xl text-xs font-semibold bg-green-400 text-white">
        {String(value)}
      </span>
    ),
  },
];

const processedData = [
  {
    datetime: "10/10/2025 11:29:17 AM",
    method: "Replace",
    characters: 1143,
    entities: 46,
    execTime: "99ms",
    status: "Completed",
  },
  {
    datetime: "10/09/2025 09:12:02 AM",
    method: "Redact",
    characters: 502,
    entities: 12,
    execTime: "48ms",
    status: "Completed",
  },
];

export const AuditTrailRecords: Story = {
  args: {
    columns: auditColumns as any,
    data: auditData,
    expandable: true,
    renderRowDetails: (row) => String(row.details) as React.ReactNode,
    emptyMessage: "No audit records",
  },
};

export const DataProcessed: Story = {
  args: {
    columns: processedColumns as any,
    data: processedData,
    expandable: false,
    emptyMessage: "No data processed",
  },
};

// Hierarchical / Tree Stories

interface FileSystemItem extends Record<string, unknown> {
  id: string;
  name: string;
  type: 'Folder' | 'File';
  size?: string;
  modified?: string;
  children?: FileSystemItem[];
}

const fileSystemData: FileSystemItem[] = [
  {
    id: '1',
    name: 'Documents',
    type: 'Folder',
    modified: '2025-11-04',
    children: [
      {
        id: '1-1',
        name: 'Work',
        type: 'Folder',
        modified: '2025-11-03',
        children: [
          { id: '1-1-1', name: 'Q4_Report.pdf', type: 'File', size: '2.3 MB', modified: '2025-11-01' },
          { id: '1-1-2', name: 'Presentation.pptx', type: 'File', size: '5.1 MB', modified: '2025-11-02' },
          { id: '1-1-3', name: 'Budget.xlsx', type: 'File', size: '1.8 MB', modified: '2025-10-30' },
        ],
      },
      {
        id: '1-2',
        name: 'Personal',
        type: 'Folder',
        modified: '2025-10-28',
        children: [
          { id: '1-2-1', name: 'Resume.docx', type: 'File', size: '245 KB', modified: '2025-10-25' },
          { id: '1-2-2', name: 'Photo.jpg', type: 'File', size: '3.2 MB', modified: '2025-10-20' },
        ],
      },
      { id: '1-3', name: 'Archive', type: 'Folder', modified: '2025-09-15' },
    ],
  },
  {
    id: '2',
    name: 'Downloads',
    type: 'Folder',
    modified: '2025-11-05',
    children: [
      { id: '2-1', name: 'installer.exe', type: 'File', size: '45.2 MB', modified: '2025-11-05' },
      { id: '2-2', name: 'document.pdf', type: 'File', size: '1.2 MB', modified: '2025-11-04' },
      { id: '2-3', name: 'image.png', type: 'File', size: '856 KB', modified: '2025-11-03' },
    ],
  },
  {
    id: '3',
    name: 'Projects',
    type: 'Folder',
    modified: '2025-11-04',
    children: [
      {
        id: '3-1',
        name: 'Website',
        type: 'Folder',
        modified: '2025-11-04',
        children: [
          { id: '3-1-1', name: 'index.html', type: 'File', size: '12 KB', modified: '2025-11-04' },
          { id: '3-1-2', name: 'styles.css', type: 'File', size: '8 KB', modified: '2025-11-03' },
          {
            id: '3-1-3',
            name: 'assets',
            type: 'Folder',
            modified: '2025-11-02',
            children: [
              { id: '3-1-3-1', name: 'logo.svg', type: 'File', size: '4 KB', modified: '2025-11-02' },
              { id: '3-1-3-2', name: 'hero.jpg', type: 'File', size: '1.8 MB', modified: '2025-11-01' },
            ],
          },
        ],
      },
      {
        id: '3-2',
        name: 'Mobile App',
        type: 'Folder',
        modified: '2025-10-30',
      },
    ],
  },
  { id: '4', name: 'README.md', type: 'File', size: '4 KB', modified: '2025-11-01' },
  { id: '5', name: 'LICENSE.txt', type: 'File', size: '1 KB', modified: '2025-10-15' },
];

const fileSystemColumns = [
  {
    id: 'name',
    label: 'Name',
    field: 'name',
    sortable: true,
  },
  {
    id: 'type',
    label: 'Type',
    field: 'type',
    render: (value: string) => (
      <span
        className="inline-block px-2.5 py-1 rounded-xl text-xs font-semibold text-white"
        style={{
          backgroundColor: value === 'Folder' ? '#7E6BF2' : '#1AB7EA',
        }}
      >
        {value}
      </span>
    ),
  },
  {
    id: 'size',
    label: 'Size',
    field: 'size',
    align: 'right' as const,
  },
  {
    id: 'modified',
    label: 'Modified',
    field: 'modified',
    sortable: true,
  },
];

export const HierarchicalFileSystem: Story = {
  args: {
    columns: fileSystemColumns as any,
    data: fileSystemData,
    hierarchical: true,
    showTreeLines: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'File system explorer with hierarchical structure. Click expand/collapse buttons or use toolbar to expand/collapse all.',
      },
    },
  },
};

export const HierarchicalExpanded: Story = {
  args: {
    columns: fileSystemColumns as any,
    data: fileSystemData,
    hierarchical: true,
    defaultExpanded: true,
    showTreeLines: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Hierarchical table with all rows expanded by default.',
      },
    },
  },
};

export const HierarchicalNoLines: Story = {
  args: {
    columns: fileSystemColumns as any,
    data: fileSystemData,
    hierarchical: true,
    showTreeLines: false,
    defaultExpanded: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Hierarchical table without tree lines, using indentation only.',
      },
    },
  },
};

export const HierarchicalMaxDepth: Story = {
  args: {
    columns: fileSystemColumns as any,
    data: fileSystemData,
    hierarchical: true,
    maxDepth: 2,
    defaultExpanded: true,
    showTreeLines: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Hierarchical table with maximum nesting depth limit of 2 levels.',
      },
    },
  },
};

// Organization Chart Example
interface OrgItem extends Record<string, unknown> {
  id: string;
  name: string;
  role: string;
  department: string;
  email: string;
  children?: OrgItem[];
}

const orgData: OrgItem[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO',
    department: 'Executive',
    email: 'sarah.j@company.com',
    children: [
      {
        id: '1-1',
        name: 'Michael Chen',
        role: 'CTO',
        department: 'Technology',
        email: 'michael.c@company.com',
        children: [
          {
            id: '1-1-1',
            name: 'Emma Wilson',
            role: 'Engineering Manager',
            department: 'Engineering',
            email: 'emma.w@company.com',
            children: [
              { id: '1-1-1-1', name: 'James Brown', role: 'Senior Developer', department: 'Engineering', email: 'james.b@company.com' },
              { id: '1-1-1-2', name: 'Lisa Anderson', role: 'Developer', department: 'Engineering', email: 'lisa.a@company.com' },
            ],
          },
          {
            id: '1-1-2',
            name: 'David Lee',
            role: 'DevOps Lead',
            department: 'Operations',
            email: 'david.l@company.com',
          },
        ],
      },
      {
        id: '1-2',
        name: 'Amanda Smith',
        role: 'CFO',
        department: 'Finance',
        email: 'amanda.s@company.com',
        children: [
          {
            id: '1-2-1',
            name: 'Robert Taylor',
            role: 'Accounting Manager',
            department: 'Finance',
            email: 'robert.t@company.com',
          },
          {
            id: '1-2-2',
            name: 'Jennifer Martinez',
            role: 'Financial Analyst',
            department: 'Finance',
            email: 'jennifer.m@company.com',
          },
        ],
      },
      {
        id: '1-3',
        name: 'Daniel Kim',
        role: 'VP of Sales',
        department: 'Sales',
        email: 'daniel.k@company.com',
        children: [
          { id: '1-3-1', name: 'Michelle Davis', role: 'Sales Manager', department: 'Sales', email: 'michelle.d@company.com' },
          { id: '1-3-2', name: 'Christopher White', role: 'Account Executive', department: 'Sales', email: 'chris.w@company.com' },
        ],
      },
    ],
  },
];

const orgColumns = [
  { id: 'name', label: 'Name', field: 'name', sortable: true },
  { id: 'role', label: 'Role', field: 'role' },
  { id: 'department', label: 'Department', field: 'department', sortable: true },
  { id: 'email', label: 'Email', field: 'email' },
];

export const OrganizationChart: Story = {
  args: {
    columns: orgColumns as any,
    data: orgData,
    hierarchical: true,
    defaultExpanded: true,
    showTreeLines: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Organization chart displayed as a hierarchical table showing reporting structure.',
      },
    },
  },
};

export const HierarchicalWithSelection: Story = {
  args: {
    columns: fileSystemColumns as any,
    data: fileSystemData,
    hierarchical: true,
    selectable: true,
    defaultExpanded: true,
    showTreeLines: true,
    onSelectionChange: (selected) => {
      console.log('Selected items:', selected);
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Hierarchical table with row selection. Select individual files or folders.',
      },
    },
  },
};

export const HierarchicalCompact: Story = {
  args: {
    columns: fileSystemColumns as any,
    data: fileSystemData,
    hierarchical: true,
    density: 'compact',
    defaultExpanded: true,
    showTreeLines: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Hierarchical table with compact density for displaying more data.',
      },
    },
  },
};
