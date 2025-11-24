import type { Meta, StoryObj } from "@storybook/react";
import { Box, Breadcrumb, Tabs } from "@intelation/ui";
import type { BreadcrumbItem, TabItem } from "@intelation/ui";

const meta = {
  title: "Layout/PageHeader",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "PageHeader is a composition pattern using existing components (Breadcrumb, Tabs, Box, Flex, Button) to create consistent page headers with title, breadcrumbs, actions, and optional tabs.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleBreadcrumbs: BreadcrumbItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "dashboard", label: "Dashboard", href: "/dashboard" },
  { id: "analytics", label: "Analytics", active: true },
];

const sampleTabs: TabItem[] = [
  { id: "overview", label: "Overview", content: <div className="p-4">Overview content</div> },
  { id: "details", label: "Details", content: <div className="p-4">Details content</div> },
  { id: "settings", label: "Settings", content: <div className="p-4">Settings content</div> },
];

export const BasicPageHeader: Story = {
  render: () => (
    <Box className="space-y-4">
      <Breadcrumb items={sampleBreadcrumbs} />
      <Box>
        <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
        <p className="text-sm text-gray-600 mt-1">View and analyze your data insights</p>
      </Box>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: "Basic page header with breadcrumbs, title, subtitle, and action buttons.",
      },
    },
  },
};

export const WithTabs: Story = {
  render: () => (
    <Box className="space-y-4">
      <Breadcrumb items={sampleBreadcrumbs} />
      <Box>
        <h1 className="text-2xl font-bold text-gray-900">Project Settings</h1>
        <p className="text-sm text-gray-600 mt-1">Configure your project preferences</p>
      </Box>
      <Tabs items={sampleTabs} defaultActiveTab="overview" />
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: "Page header with integrated tabs for content organization.",
      },
    },
  },
};

export const WithSubtitle: Story = {
  render: () => (
    <Box className="space-y-4">
      <Breadcrumb items={sampleBreadcrumbs} />
      <Box>
        <h1 className="text-2xl font-bold text-gray-900">Document Processing</h1>
        <p className="text-sm text-gray-600 mt-1">Monitor your document anonymization pipeline</p>
      </Box>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: "Page header with subtitle text for additional context.",
      },
    },
  },
};

export const ComplianceReport: Story = {
  render: () => (
    <Box className="space-y-4">
      <Breadcrumb 
        items={[
          { id: "home", label: "Home", href: "/" },
          { id: "compliance", label: "Compliance", href: "/compliance" },
          { id: "gdpr", label: "GDPR Report", active: true },
        ]} 
      />
      <Box>
        <h1 className="text-2xl font-bold text-gray-900">GDPR Compliance Report</h1>
        <p className="text-sm text-gray-600 mt-1">Last updated: November 5, 2025 at 10:30 AM</p>
      </Box>
      <Tabs 
        items={[
          { id: "summary", label: "Executive Summary", content: <div className="p-4">Summary content</div> },
          { id: "findings", label: "Findings", content: <div className="p-4">Findings content</div> },
          { id: "recommendations", label: "Recommendations", content: <div className="p-4">Recommendations content</div> },
          { id: "history", label: "Audit History", content: <div className="p-4">History content</div> },
        ]} 
        defaultActiveTab="summary"
      />
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: "Intelation-specific page header for compliance reporting with metadata and multiple tabs.",
      },
    },
  },
};

export const MinimalHeader: Story = {
  render: () => (
    <Box className="space-y-4">
      <Breadcrumb items={sampleBreadcrumbs} />
      <h1 className="text-2xl font-bold text-gray-900">Page Title</h1>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: "Minimal page header with just breadcrumbs and title.",
      },
    },
  },
};

export const WithMetadata: Story = {
  render: () => (
    <Box className="space-y-4">
      <Breadcrumb items={sampleBreadcrumbs} />
      <Box>
        <h1 className="text-2xl font-bold text-gray-900">Entity Details</h1>
        <p className="text-sm text-gray-600 mt-1">Last modified: November 5, 2025 by John Doe</p>
      </Box>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: "Page header with metadata information in subtitle.",
      },
    },
  },
};

export const DataTableView: Story = {
  render: () => (
    <Box className="space-y-4">
      <Breadcrumb 
        items={[
          { id: "home", label: "Home", href: "/" },
          { id: "files", label: "Files", active: true },
        ]} 
      />
      <Box>
        <h1 className="text-2xl font-bold text-gray-900">Document Library</h1>
        <p className="text-sm text-gray-600 mt-1">Manage and organize your documents</p>
      </Box>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story: "Page header for data table and list views.",
      },
    },
  },
};
