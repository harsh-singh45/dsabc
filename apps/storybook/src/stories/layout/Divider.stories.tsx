import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '@intelation/ui';

const meta: Meta<typeof Divider> = {
  title: 'Layout/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Visual content separator with horizontal and vertical orientations. Supports labels, custom styles, and thickness variations.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the divider',
    },
    label: {
      control: 'text',
      description: 'Optional text label to display in the divider (horizontal only)',
    },
    dividerStyle: {
      control: 'select',
      options: ['solid', 'dashed', 'dotted'],
      description: 'Line style of the divider',
    },
    thickness: {
      control: 'select',
      options: [1, 2, 3],
      description: 'Thickness of the divider line in pixels',
    },
    color: {
      control: 'color',
      description: 'Custom color for the divider',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

/**
 * Default horizontal divider with standard styling
 */
export const Default: Story = {
  args: {},
  render: (args) => (
    <div>
      <p>Content above the divider</p>
      <Divider {...args} />
      <p>Content below the divider</p>
    </div>
  ),
};

/**
 * Horizontal divider variations with different styles
 */
export const HorizontalVariations: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-medium mb-4">Solid (Default)</h3>
        <Divider dividerStyle="solid" />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-4">Dashed</h3>
        <Divider dividerStyle="dashed" />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-4">Dotted</h3>
        <Divider dividerStyle="dotted" />
      </div>
    </div>
  ),
};

/**
 * Dividers with different thickness values
 */
export const Thickness: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-medium mb-4">Thickness 1px (Default)</h3>
        <Divider thickness={1} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-4">Thickness 2px</h3>
        <Divider thickness={2} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-4">Thickness 3px</h3>
        <Divider thickness={3} />
      </div>
    </div>
  ),
};

/**
 * Horizontal dividers with text labels
 */
export const WithLabels: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p>Create an account</p>
        <Divider label="OR" />
        <p>Sign in with existing account</p>
      </div>
      <div>
        <p>Basic Information</p>
        <Divider label="Personal Details" />
        <p>Name, email, phone</p>
      </div>
      <div>
        <p>Previous section</p>
        <Divider label="Section 2" />
        <p>Next section content</p>
      </div>
    </div>
  ),
};

/**
 * Vertical dividers for inline content separation
 */
export const Vertical: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="flex items-center gap-4" style={{ height: '100px' }}>
        <div className="flex-1 text-center">Column 1</div>
        <Divider orientation="vertical" />
        <div className="flex-1 text-center">Column 2</div>
        <Divider orientation="vertical" />
        <div className="flex-1 text-center">Column 3</div>
      </div>
      
      <div className="flex items-center gap-4" style={{ height: '60px' }}>
        <span>Item A</span>
        <Divider orientation="vertical" thickness={2} />
        <span>Item B</span>
        <Divider orientation="vertical" thickness={2} />
        <span>Item C</span>
      </div>
    </div>
  ),
};

/**
 * Vertical dividers with different styles
 */
export const VerticalStyles: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="flex items-center gap-4" style={{ height: '80px' }}>
        <span>Solid</span>
        <Divider orientation="vertical" dividerStyle="solid" />
        <span>Dashed</span>
        <Divider orientation="vertical" dividerStyle="dashed" />
        <span>Dotted</span>
        <Divider orientation="vertical" dividerStyle="dotted" />
        <span>End</span>
      </div>
    </div>
  ),
};

/**
 * Custom colored dividers
 */
export const CustomColors: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-medium mb-4">Primary Color</h3>
        <Divider color="var(--color-primary-500, #3b82f6)" thickness={2} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-4">Success Color</h3>
        <Divider color="var(--color-success-500, #10b981)" thickness={2} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-4">Warning Color</h3>
        <Divider color="var(--color-warning-500, #f59e0b)" thickness={2} />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-4">Danger Color</h3>
        <Divider color="var(--color-danger-500, #ef4444)" thickness={2} />
      </div>
    </div>
  ),
};

/**
 * Complete combinations of styles
 */
export const Combinations: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-medium mb-4">Thick Dashed with Label</h3>
        <Divider
          dividerStyle="dashed"
          thickness={3}
          label="Section Break"
        />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-4">Dotted with Custom Color</h3>
        <Divider
          dividerStyle="dotted"
          thickness={2}
          color="#9333ea"
        />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-4">Thick Solid</h3>
        <Divider
          dividerStyle="solid"
          thickness={3}
          color="var(--color-primary-500, #3b82f6)"
        />
      </div>
    </div>
  ),
};

/**
 * Form separation example
 */
export const FormExample: Story = {
  render: () => (
    <div className="max-w-md space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-3 py-2 border rounded mb-3"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      
      <Divider label="Address Details" />
      
      <div>
        <input
          type="text"
          placeholder="Street Address"
          className="w-full px-3 py-2 border rounded mb-3"
        />
        <input
          type="text"
          placeholder="City"
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      
      <Divider />
      
      <button className="w-full px-4 py-2 bg-blue-600 text-white rounded">
        Submit
      </button>
    </div>
  ),
};

/**
 * List separation example
 */
export const ListExample: Story = {
  render: () => (
    <div className="max-w-md">
      <div className="space-y-0">
        <div className="p-4 hover:bg-gray-50">
          <h3 className="font-medium">Item 1</h3>
          <p className="text-sm text-gray-600">Description for item 1</p>
        </div>
        <Divider />
        <div className="p-4 hover:bg-gray-50">
          <h3 className="font-medium">Item 2</h3>
          <p className="text-sm text-gray-600">Description for item 2</p>
        </div>
        <Divider />
        <div className="p-4 hover:bg-gray-50">
          <h3 className="font-medium">Item 3</h3>
          <p className="text-sm text-gray-600">Description for item 3</p>
        </div>
      </div>
    </div>
  ),
};

/**
 * Navigation toolbar example
 */
export const ToolbarExample: Story = {
  render: () => (
    <div className="p-4 bg-gray-100 rounded">
      <div className="flex items-center gap-4">
        <button className="px-3 py-1 text-sm bg-white rounded border hover:bg-gray-50">
          Save
        </button>
        <button className="px-3 py-1 text-sm bg-white rounded border hover:bg-gray-50">
          Export
        </button>
        <Divider orientation="vertical" />
        <button className="px-3 py-1 text-sm bg-white rounded border hover:bg-gray-50">
          Edit
        </button>
        <button className="px-3 py-1 text-sm bg-white rounded border hover:bg-gray-50">
          Delete
        </button>
        <Divider orientation="vertical" />
        <button className="px-3 py-1 text-sm bg-white rounded border hover:bg-gray-50">
          Settings
        </button>
      </div>
    </div>
  ),
};

/**
 * Interactive playground for testing all props
 */
export const Playground: Story = {
  args: {
    orientation: 'horizontal',
    dividerStyle: 'solid',
    thickness: 1,
    label: '',
    color: '',
  },
  render: (args) => (
    <div style={{ padding: '2rem', minHeight: args.orientation === 'vertical' ? '200px' : 'auto' }}>
      {args.orientation === 'vertical' ? (
        <div className="flex items-center gap-4" style={{ height: '100%' }}>
          <div>Left Side</div>
          <Divider {...args} />
          <div>Right Side</div>
        </div>
      ) : (
        <div>
          <p>Content above the divider</p>
          <Divider {...args} />
          <p>Content below the divider</p>
        </div>
      )}
    </div>
  ),
};
