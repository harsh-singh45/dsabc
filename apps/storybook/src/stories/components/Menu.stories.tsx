import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from "@intelation/ui";
import type { MenuItem } from "@intelation/ui";

// Sample icons for stories
const EditIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

const DuplicateIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const DeleteIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const ShareIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
  </svg>
);

const FolderIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
  </svg>
);

const FileIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const meta = {
  title: "Components/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A versatile menu component for dropdown menus, context menus, and nested navigation. Features keyboard navigation, nested submenus, checkbox/radio items, and full accessibility support.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    trigger: {
      description: "The element that triggers the menu when clicked",
      control: false,
    },
    items: {
      description: "Array of menu items to display",
      control: false,
    },
    open: {
      description: "Controlled open state",
      control: "boolean",
    },
    defaultOpen: {
      description: "Default open state (uncontrolled)",
      control: "boolean",
    },
    position: {
      description: "Position of the menu relative to the trigger",
      control: "select",
      options: ["bottom-start", "bottom-end", "top-start", "top-end", "left", "right"],
    },
    closeOnSelect: {
      description: "Whether to close the menu after selecting an item",
      control: "boolean",
    },
    closeOnClickOutside: {
      description: "Whether to close the menu when clicking outside",
      control: "boolean",
    },
    size: {
      description: "Size variant for the menu",
      control: "select",
      options: ["sm", "md", "lg"],
    },
    width: {
      description: "Fixed width for the menu",
      control: "text",
    },
    maxHeight: {
      description: "Maximum height for the menu (will scroll if content exceeds)",
      control: "text",
    },
    ariaLabel: {
      description: "ARIA label for the menu",
      control: "text",
    },
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample menu items
const basicItems: MenuItem[] = [
  { id: "edit", label: "Edit", icon: <EditIcon />, onClick: () => alert("Edit clicked") },
  { id: "duplicate", label: "Duplicate", icon: <DuplicateIcon />, onClick: () => alert("Duplicate clicked") },
  { id: "delete", label: "Delete", icon: <DeleteIcon />, onClick: () => alert("Delete clicked") },
];

const itemsWithSeparators: MenuItem[] = [
  { id: "edit", label: "Edit", icon: <EditIcon /> },
  { id: "duplicate", label: "Duplicate", icon: <DuplicateIcon /> },
  { id: "sep1", label: "", separator: true },
  { id: "download", label: "Download", icon: <DownloadIcon /> },
  { id: "share", label: "Share", icon: <ShareIcon /> },
  { id: "sep2", label: "", separator: true },
  { id: "delete", label: "Delete", icon: <DeleteIcon /> },
];

const itemsWithDescriptions: MenuItem[] = [
  { 
    id: "edit", 
    label: "Edit", 
    description: "Make changes to this item",
    icon: <EditIcon /> 
  },
  { 
    id: "duplicate", 
    label: "Duplicate", 
    description: "Create a copy of this item",
    icon: <DuplicateIcon /> 
  },
  { 
    id: "delete", 
    label: "Delete", 
    description: "Permanently remove this item",
    icon: <DeleteIcon /> 
  },
];

const itemsWithShortcuts: MenuItem[] = [
  { id: "edit", label: "Edit", icon: <EditIcon />, shortcut: "⌘E" },
  { id: "duplicate", label: "Duplicate", icon: <DuplicateIcon />, shortcut: "⌘D" },
  { id: "delete", label: "Delete", icon: <DeleteIcon />, shortcut: "⌘⌫" },
];

const checkboxItems: MenuItem[] = [
  { id: "grid", label: "Show Grid", type: "checkbox", checked: true },
  { id: "rulers", label: "Show Rulers", type: "checkbox", checked: false },
  { id: "guides", label: "Show Guides", type: "checkbox", checked: true },
  { id: "snap", label: "Snap to Grid", type: "checkbox", checked: false },
];

const radioItems: MenuItem[] = [
  { id: "light", label: "Light", type: "radio", checked: true },
  { id: "dark", label: "Dark", type: "radio", checked: false },
  { id: "auto", label: "Auto", type: "radio", checked: false },
];

const nestedItems: MenuItem[] = [
  { id: "new", label: "New", icon: <FolderIcon />, submenu: [
    { id: "document", label: "Document", icon: <FileIcon /> },
    { id: "spreadsheet", label: "Spreadsheet", icon: <FileIcon /> },
    { id: "presentation", label: "Presentation", icon: <FileIcon /> },
  ]},
  { id: "open", label: "Open", icon: <FolderIcon /> },
  { id: "sep1", label: "", separator: true },
  { id: "save", label: "Save", icon: <DownloadIcon />, shortcut: "⌘S" },
  { id: "share", label: "Share", icon: <ShareIcon />, submenu: [
    { id: "email", label: "Email" },
    { id: "link", label: "Copy Link" },
    { id: "social", label: "Social Media" },
  ]},
  { id: "sep2", label: "", separator: true },
  { id: "delete", label: "Delete", icon: <DeleteIcon /> },
];

const itemsWithDisabled: MenuItem[] = [
  { id: "edit", label: "Edit", icon: <EditIcon /> },
  { id: "duplicate", label: "Duplicate", icon: <DuplicateIcon />, disabled: true },
  { id: "delete", label: "Delete", icon: <DeleteIcon /> },
];

/**
 * Default menu with basic items
 */
export const Default: Story = {
  args: {
    trigger: <button style={{ padding: "8px 16px", borderRadius: "6px", border: "1px solid #e5e7eb", background: "#fff", cursor: "pointer" }}>Actions</button>,
    items: basicItems,
    size: "md",
    position: "bottom-start",
  },
};

/**
 * Menu with separators between groups of items
 */
export const WithSeparators: Story = {
  args: {
    trigger: <button style={{ padding: "8px 16px", borderRadius: "6px", border: "1px solid #e5e7eb", background: "#fff", cursor: "pointer" }}>File</button>,
    items: itemsWithSeparators,
  },
};

/**
 * Menu items with descriptions for additional context
 */
export const WithDescriptions: Story = {
  args: {
    trigger: <button style={{ padding: "8px 16px", borderRadius: "6px", border: "1px solid #e5e7eb", background: "#fff", cursor: "pointer" }}>Actions</button>,
    items: itemsWithDescriptions,
    width: "280px",
  },
};

/**
 * Menu items with keyboard shortcuts
 */
export const WithShortcuts: Story = {
  args: {
    trigger: <button style={{ padding: "8px 16px", borderRadius: "6px", border: "1px solid #e5e7eb", background: "#fff", cursor: "pointer" }}>Edit</button>,
    items: itemsWithShortcuts,
  },
};

/**
 * Menu with checkbox items for multi-select options
 */
export const CheckboxItems: Story = {
  args: {
    trigger: <button style={{ padding: "8px 16px", borderRadius: "6px", border: "1px solid #e5e7eb", background: "#fff", cursor: "pointer" }}>View</button>,
    items: checkboxItems,
    closeOnSelect: false,
  },
};

/**
 * Menu with radio items for single-select options
 */
export const RadioItems: Story = {
  args: {
    trigger: <button style={{ padding: "8px 16px", borderRadius: "6px", border: "1px solid #e5e7eb", background: "#fff", cursor: "pointer" }}>Theme</button>,
    items: radioItems,
  },
};

/**
 * Menu with nested submenus
 */
export const NestedSubmenus: Story = {
  args: {
    trigger: <button style={{ padding: "8px 16px", borderRadius: "6px", border: "1px solid #e5e7eb", background: "#fff", cursor: "pointer" }}>File</button>,
    items: nestedItems,
    width: "200px",
  },
};

/**
 * Menu with disabled items
 */
export const WithDisabledItems: Story = {
  args: {
    trigger: <button style={{ padding: "8px 16px", borderRadius: "6px", border: "1px solid #e5e7eb", background: "#fff", cursor: "pointer" }}>Actions</button>,
    items: itemsWithDisabled,
  },
};

/**
 * Small size menu
 */
export const SmallSize: Story = {
  args: {
    trigger: <button style={{ padding: "6px 12px", fontSize: "0.875rem", borderRadius: "4px", border: "1px solid #e5e7eb", background: "#fff", cursor: "pointer" }}>Actions</button>,
    items: basicItems,
    size: "sm",
  },
};

/**
 * Large size menu
 */
export const LargeSize: Story = {
  args: {
    trigger: <button style={{ padding: "10px 20px", fontSize: "1rem", borderRadius: "8px", border: "1px solid #e5e7eb", background: "#fff", cursor: "pointer" }}>Actions</button>,
    items: basicItems,
    size: "lg",
  },
};

/**
 * Menu positioned at the top
 */
export const TopPosition: Story = {
  args: {
    trigger: <button style={{ padding: "8px 16px", borderRadius: "6px", border: "1px solid #e5e7eb", background: "#fff", cursor: "pointer" }}>Actions</button>,
    items: basicItems,
    position: "top-start",
  },
};

/**
 * Menu positioned on the right
 */
export const RightPosition: Story = {
  args: {
    trigger: <button style={{ padding: "8px 16px", borderRadius: "6px", border: "1px solid #e5e7eb", background: "#fff", cursor: "pointer" }}>Actions</button>,
    items: basicItems,
    position: "right",
  },
};

/**
 * Playground for interactive testing
 */
export const Playground: Story = {
  args: {
    trigger: <button style={{ padding: "8px 16px", borderRadius: "6px", border: "1px solid #e5e7eb", background: "#fff", cursor: "pointer" }}>Open Menu</button>,
    items: nestedItems,
    size: "md",
    position: "bottom-start",
    closeOnSelect: true,
    closeOnClickOutside: true,
    width: "220px",
    maxHeight: "400px",
  },
};
