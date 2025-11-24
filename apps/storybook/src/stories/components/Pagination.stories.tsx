import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Pagination, Table } from "@intelation/ui";

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A pagination component for navigating through pages of content. Features smart ellipsis rendering, keyboard navigation, and multiple style variants.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    currentPage: {
      description: "Current active page (1-indexed)",
      control: { type: "number", min: 1 },
    },
    totalPages: {
      description: "Total number of pages",
      control: { type: "number", min: 1 },
    },
    onPageChange: {
      description: "Callback when page changes",
      action: "page changed",
    },
    siblingCount: {
      description: "Number of pages to show on each side of current page",
      control: { type: "number", min: 0, max: 5 },
    },
    boundaryCount: {
      description: "Number of pages to show at start and end",
      control: { type: "number", min: 0, max: 3 },
    },
    showFirstLast: {
      description: "Show first and last page buttons",
      control: "boolean",
    },
    showPrevNext: {
      description: "Show previous and next buttons",
      control: "boolean",
    },
    size: {
      description: "Size variant",
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    variant: {
      description: "Visual variant",
      control: { type: "select" },
      options: ["default", "outlined", "rounded"],
    },
    disabled: {
      description: "Disable all interactions",
      control: "boolean",
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive wrapper component for stories
const PaginationWrapper = (args: any) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage || 1);
  
  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onPageChange={(page) => {
        setCurrentPage(page);
        args.onPageChange?.(page);
      }}
    />
  );
};

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
  },
  render: (args) => <PaginationWrapper {...args} />,
};

export const SmallSize: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    size: "sm",
  },
  render: (args) => <PaginationWrapper {...args} />,
};

export const LargeSize: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    size: "lg",
  },
  render: (args) => <PaginationWrapper {...args} />,
};

export const OutlinedVariant: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
    variant: "outlined",
  },
  render: (args) => <PaginationWrapper {...args} />,
};

export const RoundedVariant: Story = {
  args: {
    currentPage: 4,
    totalPages: 10,
    variant: "rounded",
  },
  render: (args) => <PaginationWrapper {...args} />,
};

export const RoundedOutlined: Story = {
  args: {
    currentPage: 4,
    totalPages: 10,
    variant: "rounded",
  },
  render: (args) => (
    <div className="flex flex-col gap-8 items-center">
      <div>
        <p className="mb-4 text-center text-gray-500">Rounded</p>
        <PaginationWrapper {...args} variant="rounded" />
      </div>
      <div>
        <p className="mb-4 text-center text-gray-500">Rounded + Outlined</p>
        <PaginationWrapper {...args} variant="rounded" className="pagination--outlined" />
      </div>
    </div>
  ),
};

export const WithManyPages: Story = {
  args: {
    currentPage: 15,
    totalPages: 50,
  },
  render: (args) => <PaginationWrapper {...args} />,
};

export const FewPages: Story = {
  args: {
    currentPage: 2,
    totalPages: 5,
  },
  render: (args) => <PaginationWrapper {...args} />,
};

export const SinglePage: Story = {
  args: {
    currentPage: 1,
    totalPages: 1,
  },
  render: (args) => <PaginationWrapper {...args} />,
};

export const CustomSiblingCount: Story = {
  args: {
    currentPage: 10,
    totalPages: 20,
    siblingCount: 2,
  },
  render: (args) => <PaginationWrapper {...args} />,
};

export const CustomBoundaryCount: Story = {
  args: {
    currentPage: 10,
    totalPages: 20,
    boundaryCount: 2,
  },
  render: (args) => <PaginationWrapper {...args} />,
};

export const ExtendedRange: Story = {
  args: {
    currentPage: 10,
    totalPages: 20,
    siblingCount: 3,
    boundaryCount: 2,
  },
  render: (args) => <PaginationWrapper {...args} />,
};

export const WithoutFirstLast: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    showFirstLast: false,
  },
  render: (args) => <PaginationWrapper {...args} />,
};

export const WithoutPrevNext: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    showPrevNext: false,
  },
  render: (args) => <PaginationWrapper {...args} />,
};

export const Minimal: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    showFirstLast: false,
    showPrevNext: false,
  },
  render: (args) => <PaginationWrapper {...args} />,
};

export const DisabledState: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    disabled: true,
  },
  render: (args) => <PaginationWrapper {...args} />,
};

export const FirstPage: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
  },
  render: (args) => <PaginationWrapper {...args} />,
};

export const LastPage: Story = {
  args: {
    currentPage: 10,
    totalPages: 10,
  },
  render: (args) => <PaginationWrapper {...args} />,
};

export const AllSizes: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
  },
  render: (args) => (
    <div className="flex flex-col gap-8 items-center">
      <div>
        <p className="mb-4 text-center text-gray-500">Small</p>
        <PaginationWrapper {...args} size="sm" />
      </div>
      <div>
        <p className="mb-4 text-center text-gray-500">Medium (Default)</p>
        <PaginationWrapper {...args} size="md" />
      </div>
      <div>
        <p className="mb-4 text-center text-gray-500">Large</p>
        <PaginationWrapper {...args} size="lg" />
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
  },
  render: (args) => (
    <div className="flex flex-col gap-8 items-center">
      <div>
        <p className="mb-4 text-center text-gray-500">Default</p>
        <PaginationWrapper {...args} variant="default" />
      </div>
      <div>
        <p className="mb-4 text-center text-gray-500">Outlined</p>
        <PaginationWrapper {...args} variant="outlined" />
      </div>
      <div>
        <p className="mb-4 text-center text-gray-500">Rounded</p>
        <PaginationWrapper {...args} variant="rounded" />
      </div>
    </div>
  ),
};

export const WithTable = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    
    // Sample data
    const allData = Array.from({ length: 43 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      role: ["Admin", "Editor", "Viewer"][i % 3],
      status: ["Active", "Inactive"][i % 2],
    }));
    
    const totalPages = Math.ceil(allData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = allData.slice(startIndex, endIndex);
    
    const columns = [
      {
        id: "id",
        label: "ID",
        field: "id",
        sortable: true,
        width: "80px",
      },
      {
        id: "name",
        label: "Name",
        field: "name",
        sortable: true,
      },
      {
        id: "email",
        label: "Email",
        field: "email",
        sortable: true,
      },
      {
        id: "role",
        label: "Role",
        field: "role",
        sortable: true,
        align: "center" as const,
      },
      {
        id: "status",
        label: "Status",
        field: "status",
        align: "right" as const,
        render: (value: string) => (
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
              value === "Active" 
                ? "bg-green-100 text-green-800" 
                : "bg-red-100 text-red-800"
            }`}
          >
            {value}
          </span>
        ),
      },
    ];
    
    return (
      <div className="w-full max-w-4xl">
        <div className="mb-4">
          <h3 className="m-0 mb-2 text-xl font-semibold">
            User Management
          </h3>
          <p className="m-0 text-gray-500 text-sm">
            Showing {startIndex + 1}-{Math.min(endIndex, allData.length)} of {allData.length} users
          </p>
        </div>
        
        <Table
          columns={columns}
          data={currentData}
          variant="striped"
          density="comfortable"
        />
        
        <div className="mt-6 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            variant="outlined"
          />
        </div>
      </div>
    );
  },
  parameters: {
    layout: "padded",
  },
};

export const WithTableCompact = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    
    // Sample data
    const allData = Array.from({ length: 87 }, (_, i) => ({
      id: i + 1,
      product: `Product ${i + 1}`,
      category: ["Electronics", "Clothing", "Food", "Books"][i % 4],
      price: `$${(Math.random() * 100 + 10).toFixed(2)}`,
      stock: Math.floor(Math.random() * 100),
    }));
    
    const totalPages = Math.ceil(allData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = allData.slice(startIndex, endIndex);
    
    const columns = [
      {
        id: "id",
        label: "ID",
        field: "id",
        width: "60px",
      },
      {
        id: "product",
        label: "Product",
        field: "product",
        sortable: true,
      },
      {
        id: "category",
        label: "Category",
        field: "category",
        sortable: true,
      },
      {
        id: "price",
        label: "Price",
        field: "price",
        align: "right" as const,
      },
      {
        id: "stock",
        label: "Stock",
        field: "stock",
        align: "right" as const,
        render: (value: number) => (
          <span className={value < 20 ? "text-red-600 font-medium" : "text-green-700 font-medium"}>
            {value}
          </span>
        ),
      },
    ];
    
    return (
      <div className="w-full max-w-3xl">
        <div className="mb-4 flex justify-between items-center">
          <div>
            <h3 className="m-0 text-lg font-semibold">
              Product Inventory
            </h3>
          </div>
          <p className="m-0 text-gray-500 text-sm">
            Page {currentPage} of {totalPages}
          </p>
        </div>
        
        <Table
          columns={columns}
          data={currentData}
          variant="bordered"
          density="compact"
        />
        
        <div className="mt-4 flex justify-between items-center">
          <p className="m-0 text-gray-500 text-sm">
            {allData.length} total items
          </p>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            size="sm"
            variant="rounded"
          />
        </div>
      </div>
    );
  },
  parameters: {
    layout: "padded",
  },
};

export const EdgeCases = {
  render: () => (
    <div className="flex flex-col gap-12 items-center">
      <div className="text-center">
        <p className="mb-4 text-gray-500 font-medium">
          First Page (Prev/First buttons disabled)
        </p>
        <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
      </div>
      
      <div className="text-center">
        <p className="mb-4 text-gray-500 font-medium">
          Last Page (Next/Last buttons disabled)
        </p>
        <Pagination currentPage={10} totalPages={10} onPageChange={() => {}} />
      </div>
      
      <div className="text-center">
        <p className="mb-4 text-gray-500 font-medium">
          Only One Page (All nav buttons disabled)
        </p>
        <Pagination currentPage={1} totalPages={1} onPageChange={() => {}} />
      </div>
      
      <div className="text-center">
        <p className="mb-4 text-gray-500 font-medium">
          Two Pages
        </p>
        <PaginationWrapper currentPage={1} totalPages={2} />
      </div>
      
      <div className="text-center">
        <p className="mb-4 text-gray-500 font-medium">
          Many Pages (100 total)
        </p>
        <PaginationWrapper currentPage={50} totalPages={100} />
      </div>
    </div>
  ),
};

export const KeyboardNavigation: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
  },
  render: (args) => (
    <div className="text-center">
      <p className="mb-4 text-gray-500">
        Try keyboard navigation:
      </p>
      <ul className="list-none p-0 m-0 mb-6 text-gray-700 text-sm">
        <li>← Arrow Left: Previous page</li>
        <li>→ Arrow Right: Next page</li>
        <li>Home: First page</li>
        <li>End: Last page</li>
        <li>Enter/Space: Activate focused button</li>
      </ul>
      <PaginationWrapper {...args} />
    </div>
  ),
};
