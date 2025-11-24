import type { Meta, StoryObj } from "@storybook/react";
import { DataGrid } from "@intelation/ui";
import type { DataGridColumn } from "@intelation/ui";

interface SampleUser extends Record<string, unknown> {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  age: number;
  joinDate: string;
  salary: number;
}

const sampleData: SampleUser[] = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@company.com",
    role: "Software Engineer",
    status: "Active",
    age: 28,
    joinDate: "2022-01-15",
    salary: 95000,
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@company.com",
    role: "Product Manager",
    status: "Active",
    age: 35,
    joinDate: "2020-03-22",
    salary: 110000,
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie.brown@company.com",
    role: "Designer",
    status: "Inactive",
    age: 42,
    joinDate: "2019-07-10",
    salary: 88000,
  },
  {
    id: 4,
    name: "Diana Prince",
    email: "diana.prince@company.com",
    role: "Engineering Manager",
    status: "Active",
    age: 31,
    joinDate: "2021-05-18",
    salary: 125000,
  },
  {
    id: 5,
    name: "Eve Martinez",
    email: "eve.martinez@company.com",
    role: "Data Scientist",
    status: "Active",
    age: 29,
    joinDate: "2021-09-03",
    salary: 105000,
  },
  {
    id: 6,
    name: "Frank Wilson",
    email: "frank.wilson@company.com",
    role: "DevOps Engineer",
    status: "Active",
    age: 33,
    joinDate: "2020-11-12",
    salary: 98000,
  },
  {
    id: 7,
    name: "Grace Lee",
    email: "grace.lee@company.com",
    role: "QA Engineer",
    status: "Inactive",
    age: 27,
    joinDate: "2022-02-28",
    salary: 82000,
  },
  {
    id: 8,
    name: "Henry Davis",
    email: "henry.davis@company.com",
    role: "Software Engineer",
    status: "Active",
    age: 30,
    joinDate: "2021-06-14",
    salary: 92000,
  },
];

const columns: DataGridColumn<SampleUser>[] = [
  {
    id: "name",
    label: "Name",
    field: "name",
    sortable: true,
    filterable: true,
    filterType: "text",
    width: "180px",
  },
  {
    id: "email",
    label: "Email",
    field: "email",
    filterable: true,
    filterType: "text",
    width: "220px",
  },
  {
    id: "role",
    label: "Role",
    field: "role",
    sortable: true,
    filterable: true,
    filterType: "select",
    filterOptions: [
      { label: "Software Engineer", value: "Software Engineer" },
      { label: "Product Manager", value: "Product Manager" },
      { label: "Designer", value: "Designer" },
      { label: "Engineering Manager", value: "Engineering Manager" },
      { label: "Data Scientist", value: "Data Scientist" },
      { label: "DevOps Engineer", value: "DevOps Engineer" },
      { label: "QA Engineer", value: "QA Engineer" },
    ],
    width: "180px",
  },
  {
    id: "status",
    label: "Status",
    field: "status",
    align: "center",
    sortable: true,
    filterable: true,
    filterType: "select",
    filterOptions: [
      { label: "Active", value: "Active" },
      { label: "Inactive", value: "Inactive" },
    ],
    width: "120px",
    render: (value: unknown) => (
      <span
        className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold"
        style={{
          backgroundColor: value === "Active" ? "#10b981" : "#6b7280",
          color: "white",
        }}
      >
        {String(value)}
      </span>
    ),
  },
  {
    id: "age",
    label: "Age",
    field: "age",
    align: "center",
    sortable: true,
    filterable: true,
    filterType: "number",
    width: "80px",
  },
  {
    id: "joinDate",
    label: "Join Date",
    field: "joinDate",
    sortable: true,
    filterable: true,
    filterType: "date",
    width: "140px",
  },
  {
    id: "salary",
    label: "Salary",
    field: "salary",
    align: "right",
    sortable: true,
    filterable: true,
    filterType: "number",
    width: "120px",
    render: (value: unknown) => {
      return `$${Number(value).toLocaleString()}`;
    },
  },
];

const meta = {
  title: "Data Display/DataGrid",
  component: DataGrid,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Advanced data grid component with filtering, sorting, selection, and export capabilities. Extends the Table component with powerful data manipulation features.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    filterable: {
      control: { type: "boolean" },
      description: "Enable column filtering",
    },
    exportable: {
      control: { type: "boolean" },
      description: "Enable data export",
    },
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
  },
} satisfies Meta<typeof DataGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    columns: columns as DataGridColumn[],
    data: sampleData as Record<string, unknown>[],
  },
  parameters: {
    docs: {
      description: {
        story: "Basic DataGrid without any advanced features enabled.",
      },
    },
  },
};

// With Filtering
export const WithFiltering: Story = {
  args: {
    columns: columns as DataGridColumn[],
    data: sampleData as Record<string, unknown>[],
    filterable: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "DataGrid with filtering enabled. Click the 'Filters' button to show filter inputs for each column. Supports text, select, number, and date filters.",
      },
    },
  },
};

// With Export
export const WithExport: Story = {
  args: {
    columns: columns as DataGridColumn[],
    data: sampleData as Record<string, unknown>[],
    exportable: true,
  },
  parameters: {
    docs: {
      description: {
        story: "DataGrid with export functionality. Click 'Export CSV' to download the data.",
      },
    },
  },
};

// Full Featured
export const FullFeatured: Story = {
  args: {
    columns: columns as DataGridColumn[],
    data: sampleData as Record<string, unknown>[],
    filterable: true,
    exportable: true,
    selectable: true,
    stickyHeader: true,
    variant: "striped",
    density: "comfortable",
  },
  parameters: {
    docs: {
      description: {
        story:
          "DataGrid with all features enabled: filtering, export, row selection, sticky header, and striped variant.",
      },
    },
  },
};

// Compact Density
export const CompactDensity: Story = {
  args: {
    columns: columns as DataGridColumn[],
    data: sampleData as Record<string, unknown>[],
    filterable: true,
    density: "compact",
  },
  parameters: {
    docs: {
      description: {
        story: "DataGrid with compact spacing to display more data in less vertical space.",
      },
    },
  },
};

// Bordered Variant
export const BorderedVariant: Story = {
  args: {
    columns: columns as DataGridColumn[],
    data: sampleData as Record<string, unknown>[],
    filterable: true,
    variant: "bordered",
  },
  parameters: {
    docs: {
      description: {
        story: "DataGrid with borders between columns for better visual separation.",
      },
    },
  },
};

// With Loading State
export const LoadingState: Story = {
  args: {
    columns: columns as DataGridColumn[],
    data: sampleData as Record<string, unknown>[],
    filterable: true,
    loading: true,
  },
  parameters: {
    docs: {
      description: {
        story: "DataGrid in loading state with skeleton loaders.",
      },
    },
  },
};

// Empty State
export const EmptyState: Story = {
  args: {
    columns: columns as DataGridColumn[],
    data: [],
    filterable: true,
    emptyMessage: "No employees found",
  },
  parameters: {
    docs: {
      description: {
        story: "DataGrid with no data showing empty state message.",
      },
    },
  },
};

// Large Dataset
const largeDataset = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Employee ${i + 1}`,
  email: `employee${i + 1}@company.com`,
  role: ["Software Engineer", "Product Manager", "Designer"][i % 3],
  status: i % 3 === 0 ? "Inactive" : "Active",
  age: 25 + (i % 20),
  joinDate: new Date(2020 + (i % 4), (i % 12), 1).toISOString().split("T")[0],
  salary: 80000 + (i % 10) * 10000,
}));

export const LargeDataset: Story = {
  args: {
    columns: columns as DataGridColumn[],
    data: largeDataset as Record<string, unknown>[],
    filterable: true,
    exportable: true,
    stickyHeader: true,
    maxHeight: "600px",
  },
  parameters: {
    docs: {
      description: {
        story:
          "DataGrid with 100 rows demonstrating performance with larger datasets. Use filters to narrow down results.",
      },
    },
  },
};

// Custom Styling
export const CustomStyling: Story = {
  args: {
    columns: columns as DataGridColumn[],
    data: sampleData as Record<string, unknown>[],
    filterable: true,
    exportable: true,
    className: "shadow-xl rounded-xl",
  },
  parameters: {
    docs: {
      description: {
        story: "DataGrid with custom className for additional styling.",
      },
    },
  },
};

// Minimal Columns
const minimalColumns: DataGridColumn<SampleUser>[] = [
  {
    id: "name",
    label: "Name",
    field: "name",
    sortable: true,
    filterable: true,
    filterType: "text",
  },
  {
    id: "email",
    label: "Email",
    field: "email",
    filterable: true,
    filterType: "text",
  },
  {
    id: "status",
    label: "Status",
    field: "status",
    filterable: true,
    filterType: "select",
    filterOptions: [
      { label: "Active", value: "Active" },
      { label: "Inactive", value: "Inactive" },
    ],
  },
];

export const MinimalColumns: Story = {
  args: {
    columns: minimalColumns as DataGridColumn[],
    data: sampleData as Record<string, unknown>[],
    filterable: true,
    exportable: true,
  },
  parameters: {
    docs: {
      description: {
        story: "DataGrid with minimal column set for simpler displays.",
      },
    },
  },
};

// Playground
export const Playground: Story = {
  args: {
    columns: columns as DataGridColumn[],
    data: sampleData as Record<string, unknown>[],
    filterable: true,
    exportable: true,
    selectable: false,
    variant: "default",
    density: "comfortable",
    stickyHeader: false,
    loading: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive playground to experiment with all DataGrid properties.",
      },
    },
  },
};
