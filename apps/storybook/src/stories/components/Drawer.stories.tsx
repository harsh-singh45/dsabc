import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button, Drawer } from "@intelation/ui";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "select",
      options: ["left", "right", "top", "bottom"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "full"],
    },
    variant: {
      control: "select",
      options: ["temporary", "persistent"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

// Helper component for interactive stories
const DrawerExample = ({ children, ...props }: Partial<React.ComponentProps<typeof Drawer>>) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: "2rem" }}>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer {...props} open={open} onClose={() => setOpen(false)}>
        {children || <div><p>This is the drawer content.</p></div>}
      </Drawer>
    </div>
  );
};

export const Default: Story = {
  render: () => (
    <DrawerExample direction="right" title="Drawer Title">
      <div>
        <p>This is the drawer content.</p>
        <p>You can put any content here.</p>
      </div>
    </DrawerExample>
  ),
};

export const LeftDirection: Story = {
  render: () => (
    <DrawerExample direction="left" title="Left Drawer">
      <p>Drawer slides from the left</p>
    </DrawerExample>
  ),
};

export const RightDirection: Story = {
  render: () => (
    <DrawerExample direction="right" title="Right Drawer">
      <p>Drawer slides from the right</p>
    </DrawerExample>
  ),
};

export const TopDirection: Story = {
  render: () => (
    <DrawerExample direction="top" title="Top Drawer">
      <p>Drawer slides from the top</p>
    </DrawerExample>
  ),
};

export const BottomDirection: Story = {
  render: () => (
    <DrawerExample direction="bottom" title="Bottom Drawer">
      <p>Drawer slides from the bottom</p>
    </DrawerExample>
  ),
};

export const SmallSize: Story = {
  render: () => (
    <DrawerExample size="sm" title="Small Drawer">
      <p>Small drawer (320px width / 240px height)</p>
    </DrawerExample>
  ),
};

export const MediumSize: Story = {
  render: () => (
    <DrawerExample size="md" title="Medium Drawer">
      <p>Medium drawer (480px width / 360px height)</p>
    </DrawerExample>
  ),
};

export const LargeSize: Story = {
  render: () => (
    <DrawerExample size="lg" title="Large Drawer">
      <p>Large drawer (640px width / 480px height)</p>
    </DrawerExample>
  ),
};

export const FullSize: Story = {
  render: () => (
    <DrawerExample size="full" title="Full Size Drawer">
      <p>Full viewport size drawer</p>
    </DrawerExample>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <DrawerExample
      title="Drawer with Footer"
      footer={
        <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
          <Button variant="outline">Cancel</Button>
          <Button variant="solid">Save</Button>
        </div>
      }
    >
      <div>
        <h3 style={{ marginTop: 0 }}>Settings</h3>
        <p>Configure your preferences here.</p>
        <label style={{ display: "block", marginBottom: "1rem" }}>
          <input type="checkbox" /> Enable notifications
        </label>
        <label style={{ display: "block", marginBottom: "1rem" }}>
          <input type="checkbox" /> Dark mode
        </label>
      </div>
    </DrawerExample>
  ),
};

export const PersistentVariant: Story = {
  render: () => {
    const [open, setOpen] = useState(true);

    return (
      <div style={{ display: "flex", height: "500px", border: "1px solid #e5e7eb" }}>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          variant="persistent"
          direction="left"
          size="sm"
          title="Navigation"
        >
          <nav>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ padding: "0.5rem 0" }}>Dashboard</li>
              <li style={{ padding: "0.5rem 0" }}>Projects</li>
              <li style={{ padding: "0.5rem 0" }}>Settings</li>
              <li style={{ padding: "0.5rem 0" }}>Help</li>
            </ul>
          </nav>
        </Drawer>
        <div style={{ flex: 1, padding: "1.5rem" }}>
          <h2>Main Content</h2>
          <p>This is a persistent drawer. It doesn't have an overlay and doesn't block interaction with the main content.</p>
          <Button onClick={() => setOpen(!open)}>
            {open ? "Close" : "Open"} Drawer
          </Button>
        </div>
      </div>
    );
  },
};

export const NavigationDrawer: Story = {
  render: () => (
    <DrawerExample direction="left" size="sm" title="Navigation">
      <nav>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li style={{ padding: "0.75rem 0", borderBottom: "1px solid #e5e7eb" }}>
            <a href="#dashboard" style={{ textDecoration: "none", color: "#696CFF", fontWeight: 500 }}>
              Dashboard
            </a>
          </li>
          <li style={{ padding: "0.75rem 0", borderBottom: "1px solid #e5e7eb" }}>
            <a href="#files" style={{ textDecoration: "none", color: "#374151" }}>
              Files
            </a>
          </li>
          <li style={{ padding: "0.75rem 0", borderBottom: "1px solid #e5e7eb" }}>
            <a href="#reports" style={{ textDecoration: "none", color: "#374151" }}>
              Reports
            </a>
          </li>
          <li style={{ padding: "0.75rem 0", borderBottom: "1px solid #e5e7eb" }}>
            <a href="#settings" style={{ textDecoration: "none", color: "#374151" }}>
              Settings
            </a>
          </li>
          <li style={{ padding: "0.75rem 0" }}>
            <a href="#help" style={{ textDecoration: "none", color: "#374151" }}>
              Help
            </a>
          </li>
        </ul>
      </nav>
    </DrawerExample>
  ),
};

export const FilterDrawer: Story = {
  render: () => (
    <DrawerExample direction="right" size="md" title="Filters">
      <div>
        <div style={{ marginBottom: "1.5rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500 }}>
            Status
          </label>
          <select style={{ width: "100%", padding: "0.5rem", border: "1px solid #d1d5db", borderRadius: "0.375rem" }}>
            <option>All</option>
            <option>Active</option>
            <option>Completed</option>
            <option>Pending</option>
          </select>
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500 }}>
            Date Range
          </label>
          <input 
            type="date" 
            style={{ width: "100%", padding: "0.5rem", border: "1px solid #d1d5db", borderRadius: "0.375rem", marginBottom: "0.5rem" }}
          />
          <input 
            type="date" 
            style={{ width: "100%", padding: "0.5rem", border: "1px solid #d1d5db", borderRadius: "0.375rem" }}
          />
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500 }}>
            Category
          </label>
          <div>
            <label style={{ display: "block", marginBottom: "0.5rem" }}>
              <input type="checkbox" /> Documents
            </label>
            <label style={{ display: "block", marginBottom: "0.5rem" }}>
              <input type="checkbox" /> Images
            </label>
            <label style={{ display: "block", marginBottom: "0.5rem" }}>
              <input type="checkbox" /> Videos
            </label>
          </div>
        </div>
      </div>
    </DrawerExample>
  ),
};

export const FormDrawer: Story = {
  render: () => (
    <DrawerExample
      direction="right"
      size="lg"
      title="Create New Item"
      footer={
        <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
          <Button variant="outline">Cancel</Button>
          <Button variant="solid">Create</Button>
        </div>
      }
    >
      <form>
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500 }}>
            Title
          </label>
          <input 
            type="text" 
            placeholder="Enter title"
            style={{ width: "100%", padding: "0.5rem", border: "1px solid #d1d5db", borderRadius: "0.375rem" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500 }}>
            Description
          </label>
          <textarea 
            rows={4}
            placeholder="Enter description"
            style={{ width: "100%", padding: "0.5rem", border: "1px solid #d1d5db", borderRadius: "0.375rem" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500 }}>
            Category
          </label>
          <select style={{ width: "100%", padding: "0.5rem", border: "1px solid #d1d5db", borderRadius: "0.375rem" }}>
            <option>Select category</option>
            <option>Work</option>
            <option>Personal</option>
            <option>Other</option>
          </select>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <input type="checkbox" />
            <span>Mark as important</span>
          </label>
        </div>
      </form>
    </DrawerExample>
  ),
};

export const ScrollableContent: Story = {
  render: () => (
    <DrawerExample title="Long Content" direction="right" size="md">
      <div>
        <h3>Section 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <h3>Section 2</h3>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <h3>Section 3</h3>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <h3>Section 4</h3>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h3>Section 5</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <h3>Section 6</h3>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <h3>Section 7</h3>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <h3>Section 8</h3>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </DrawerExample>
  ),
};

export const FileBrowserDrawer: Story = {
  render: () => (
    <DrawerExample direction="left" size="sm" title="File Browser">
      <div>
        <h4 style={{ marginTop: 0 }}>Recent Files</h4>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ padding: "0.5rem 0", borderBottom: "1px solid #e5e7eb" }}>
            document.pdf
          </li>
          <li style={{ padding: "0.5rem 0", borderBottom: "1px solid #e5e7eb" }}>
            report.xlsx
          </li>
          <li style={{ padding: "0.5rem 0", borderBottom: "1px solid #e5e7eb" }}>
            analysis.docx
          </li>
        </ul>
      </div>
    </DrawerExample>
  ),
};

export const ComplianceFilters: Story = {
  render: () => (
    <DrawerExample direction="right" size="md" title="Compliance Filters">
      <div>
        <p>Filter compliance reports by framework, date, and status.</p>
        <div style={{ marginTop: "1rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500 }}>
            Framework
          </label>
          <select style={{ width: "100%", padding: "0.5rem", border: "1px solid #d1d5db", borderRadius: "0.375rem" }}>
            <option>GDPR</option>
            <option>HIPAA</option>
            <option>CCPA</option>
          </select>
        </div>
      </div>
    </DrawerExample>
  ),
};

export const AuditLogDetails: Story = {
  render: () => (
    <DrawerExample direction="bottom" size="lg" title="Audit Log Details">
      <div>
        <p><strong>Action:</strong> File Anonymization</p>
        <p><strong>User:</strong> admin@example.com</p>
        <p><strong>Timestamp:</strong> 2025-11-04 14:30:22</p>
        <p><strong>Status:</strong> Completed</p>
        <p><strong>Details:</strong> Successfully anonymized 127 PII entities in document.pdf</p>
      </div>
    </DrawerExample>
  ),
};


