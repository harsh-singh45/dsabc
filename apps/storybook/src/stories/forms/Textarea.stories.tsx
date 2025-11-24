import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@intelation/ui";

const meta = {
  title: "Forms/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Textarea component for multiline text input with label, validation states, helper text, and customizable resize behavior.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "The size of the textarea",
    },
    resize: {
      control: "select",
      options: ["none", "vertical", "horizontal", "both"],
      description: "Resize behavior",
    },
    fullWidth: {
      control: "boolean",
      description: "Whether the textarea should take full width",
    },
    disabled: {
      control: "boolean",
      description: "Whether the textarea is disabled",
    },
    rows: {
      control: "number",
      description: "Number of visible text rows",
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
    rows: 4,
  },
};

export const WithLabel: Story = {
  args: {
    label: "Message",
    placeholder: "Enter your message",
    rows: 4,
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Description",
    placeholder: "Enter description",
    helperText: "Maximum 500 characters",
    rows: 4,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <Textarea size="sm" placeholder="Small textarea" label="Small" rows={3} />
      <Textarea size="md" placeholder="Medium textarea" label="Medium" rows={4} />
      <Textarea size="lg" placeholder="Large textarea" label="Large" rows={5} />
    </div>
  ),
};

export const ValidationStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '400px' }}>
      <Textarea
        label="Feedback"
        placeholder="Enter your feedback"
        error="Feedback is required"
        rows={4}
      />
      <Textarea
        label="Comment"
        placeholder="Enter comment"
        success="Comment saved successfully"
        rows={4}
      />
      <Textarea
        label="Notes"
        placeholder="Enter notes"
        helperText="Add any additional notes here"
        rows={4}
      />
    </div>
  ),
};

export const ResizeOptions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <Textarea resize="none" label="No Resize" placeholder="Cannot resize" rows={3} />
      <Textarea resize="vertical" label="Vertical Resize" placeholder="Resize vertically" rows={3} />
      <Textarea resize="horizontal" label="Horizontal Resize" placeholder="Resize horizontally" rows={3} />
      <Textarea resize="both" label="Both Directions" placeholder="Resize in both directions" rows={3} />
    </div>
  ),
};

export const RowsVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <Textarea label="Short (2 rows)" placeholder="2 visible rows" rows={2} />
      <Textarea label="Medium (4 rows)" placeholder="4 visible rows" rows={4} />
      <Textarea label="Tall (8 rows)" placeholder="8 visible rows" rows={8} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: "Disabled Textarea",
    placeholder: "Cannot edit",
    disabled: true,
    rows: 4,
  },
};

export const FullWidth: Story = {
  args: {
    label: "Full Width Textarea",
    placeholder: "This textarea takes full width",
    fullWidth: true,
    rows: 4,
  },
  decorators: [
    (Story: React.ComponentType) => (
      <div style={{ width: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const ErrorState: Story = {
  args: {
    label: "Message",
    placeholder: "Enter your message",
    error: "Message must be at least 10 characters",
    rows: 4,
  },
};

export const SuccessState: Story = {
  args: {
    label: "Review",
    placeholder: "Write your review",
    success: "Thank you for your review!",
    rows: 5,
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: "Bio",
    defaultValue: "Software engineer with 5+ years of experience in React and TypeScript.",
    rows: 4,
  },
};

export const RealWorldExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '500px' }}>
      <Textarea
        label="Product Description"
        placeholder="Describe your product..."
        helperText="Be clear and concise. Customers will see this on the product page."
        rows={6}
        size="md"
      />
      <Textarea
        label="Comment"
        placeholder="Leave a comment..."
        helperText="Maximum 500 characters"
        rows={4}
        size="sm"
        resize="none"
      />
      <Textarea
        label="Issue Description"
        placeholder="Describe the issue you're experiencing..."
        error="Please provide more details (minimum 20 characters)"
        rows={5}
        size="md"
      />
    </div>
  ),
};

export const LongContent: Story = {
  args: {
    label: "Article Content",
    defaultValue: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.

Sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    rows: 10,
  },
};
