import type { Meta, StoryObj } from '@storybook/react';;
import { Stack } from '@intelation/ui';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Layout/Stack',
  component: Stack,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A flexible layout component for arranging items in a single direction with consistent spacing and responsive behavior. Perfect for organizing buttons, cards, form elements, or any content that needs structured spacing.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['vertical', 'horizontal'],
      description: 'The direction items are arranged in the stack',
    },
    spacing: {
      control: { type: 'select' },
      options: ['0', 'px', '0.5', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24'],
      description: 'The spacing between stack items using design tokens',
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'stretch'],
      description: 'Cross-axis alignment of items',
    },
    justify: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
      description: 'Main-axis justification of items',
    },
    wrap: {
      control: { type: 'boolean' },
      description: 'Whether items should wrap to the next line',
    },
    as: {
      control: { type: 'select' },
      options: ['div', 'section', 'article', 'aside', 'nav', 'main', 'header', 'footer'],
      description: 'The HTML element to render as',
    },
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample components for demonstration
const SampleCard = ({ children, color = '#f3f4f6' }: { children: React.ReactNode; color?: string }) => (
  <div 
    className="p-4 rounded-lg border border-gray-200 min-w-32 text-center"
    style={{ backgroundColor: color }}
  >
    {children}
  </div>
);

// Basic vertical stack
export const VerticalStack: Story = {
  args: {
    direction: 'vertical',
    spacing: '4',
    align: 'stretch',
  },
  render: (args) => (
    <Stack {...args}>
      <button className="px-4 py-2.5 bg-blue-500 text-white border-none rounded-md cursor-pointer">First Button</button>
      <button className="px-4 py-2.5 bg-transparent text-gray-500 border border-gray-500 rounded-md cursor-pointer">Second Button</button>
      <button className="px-4 py-2.5 bg-transparent text-green-500 border-none rounded-md cursor-pointer">Third Button</button>
    </Stack>
  ),
};

// Horizontal stack
export const HorizontalStack: Story = {
  args: {
    direction: 'horizontal',
    spacing: '4',
    align: 'center',
  },
  render: (args) => (
    <Stack {...args}>
      <button className="px-3 py-1.5 bg-blue-500 text-white border-none rounded-md cursor-pointer text-sm">Small</button>
      <button className="px-4 py-2.5 bg-blue-500 text-white border-none rounded-md cursor-pointer text-base">Medium</button>
      <button className="px-6 py-3 bg-blue-500 text-white border-none rounded-md cursor-pointer text-lg">Large</button>
    </Stack>
  ),
};

// Different spacing options
export const SpacingVariations: Story = {
  render: () => (
    <Stack direction="vertical" spacing="8">
      <div>
        <h3 className="m-0 mb-2 text-sm font-semibold">Tight Spacing (spacing="1")</h3>
        <Stack direction="horizontal" spacing="1">
          <SampleCard color="#fee2e2">Item 1</SampleCard>
          <SampleCard color="#fee2e2">Item 2</SampleCard>
          <SampleCard color="#fee2e2">Item 3</SampleCard>
        </Stack>
      </div>
      
      <div>
        <h3 className="m-0 mb-2 text-sm font-semibold">Medium Spacing (spacing="4")</h3>
        <Stack direction="horizontal" spacing="4">
          <SampleCard color="#dbeafe">Item 1</SampleCard>
          <SampleCard color="#dbeafe">Item 2</SampleCard>
          <SampleCard color="#dbeafe">Item 3</SampleCard>
        </Stack>
      </div>
      
      <div>
        <h3 className="m-0 mb-2 text-sm font-semibold">Large Spacing (spacing="8")</h3>
        <Stack direction="horizontal" spacing="8">
          <SampleCard color="#dcfce7">Item 1</SampleCard>
          <SampleCard color="#dcfce7">Item 2</SampleCard>
          <SampleCard color="#dcfce7">Item 3</SampleCard>
        </Stack>
      </div>
    </Stack>
  ),
};

// Alignment options
export const AlignmentOptions: Story = {
  render: () => (
    <Stack direction="vertical" spacing="6">
      <div>
        <h3 className="m-0 mb-2 text-sm font-semibold">Align Start</h3>
        <div className="border border-dashed border-gray-300 p-4 h-24">
          <Stack direction="horizontal" spacing="4" align="start">
            <SampleCard>Short</SampleCard>
            <SampleCard><div className="h-10 leading-10">Tall Content</div></SampleCard>
            <SampleCard>Short</SampleCard>
          </Stack>
        </div>
      </div>
      
      <div>
        <h3 className="m-0 mb-2 text-sm font-semibold">Align Center</h3>
        <div className="border border-dashed border-gray-300 p-4 h-24">
          <Stack direction="horizontal" spacing="4" align="center">
            <SampleCard>Short</SampleCard>
            <SampleCard><div className="h-10 leading-10">Tall Content</div></SampleCard>
            <SampleCard>Short</SampleCard>
          </Stack>
        </div>
      </div>
      
      <div>
        <h3 className="m-0 mb-2 text-sm font-semibold">Align Stretch</h3>
        <div className="border border-dashed border-gray-300 p-4 h-24">
          <Stack direction="horizontal" spacing="4" align="stretch">
            <SampleCard>Short</SampleCard>
            <SampleCard><div className="h-10 leading-10">Tall Content</div></SampleCard>
            <SampleCard>Short</SampleCard>
          </Stack>
        </div>
      </div>
    </Stack>
  ),
};

// Justification options
export const JustificationOptions: Story = {
  render: () => (
    <Stack direction="vertical" spacing="6">
      <div>
        <h3 className="m-0 mb-2 text-sm font-semibold">Justify Start</h3>
        <div className="border border-dashed border-gray-300 p-4 w-full">
          <Stack direction="horizontal" spacing="4" justify="start">
            <SampleCard color="#fee2e2">Item 1</SampleCard>
            <SampleCard color="#fee2e2">Item 2</SampleCard>
            <SampleCard color="#fee2e2">Item 3</SampleCard>
          </Stack>
        </div>
      </div>
      
      <div>
        <h3 className="m-0 mb-2 text-sm font-semibold">Justify Center</h3>
        <div className="border border-dashed border-gray-300 p-4 w-full">
          <Stack direction="horizontal" spacing="4" justify="center">
            <SampleCard color="#dbeafe">Item 1</SampleCard>
            <SampleCard color="#dbeafe">Item 2</SampleCard>
            <SampleCard color="#dbeafe">Item 3</SampleCard>
          </Stack>
        </div>
      </div>
      
      <div>
        <h3 className="m-0 mb-2 text-sm font-semibold">Justify Between</h3>
        <div className="border border-dashed border-gray-300 p-4 w-full">
          <Stack direction="horizontal" spacing="4" justify="between">
            <SampleCard color="#dcfce7">Item 1</SampleCard>
            <SampleCard color="#dcfce7">Item 2</SampleCard>
            <SampleCard color="#dcfce7">Item 3</SampleCard>
          </Stack>
        </div>
      </div>
      
      <div>
        <h3 className="m-0 mb-2 text-sm font-semibold">Justify Evenly</h3>
        <div className="border border-dashed border-gray-300 p-4 w-full">
          <Stack direction="horizontal" spacing="4" justify="evenly">
            <SampleCard color="#fef3c7">Item 1</SampleCard>
            <SampleCard color="#fef3c7">Item 2</SampleCard>
            <SampleCard color="#fef3c7">Item 3</SampleCard>
          </Stack>
        </div>
      </div>
    </Stack>
  ),
};

// Wrapping behavior
export const WrappingBehavior: Story = {
  render: () => (
    <Stack direction="vertical" spacing="6">
      <div>
        <h3 className="m-0 mb-2 text-sm font-semibold">No Wrap (default)</h3>
        <div className="border border-dashed border-gray-300 p-4 w-80 overflow-hidden">
          <Stack direction="horizontal" spacing="4" wrap={false}>
            <SampleCard>Item 1</SampleCard>
            <SampleCard>Item 2</SampleCard>
            <SampleCard>Item 3</SampleCard>
            <SampleCard>Item 4</SampleCard>
            <SampleCard>Item 5</SampleCard>
          </Stack>
        </div>
      </div>
      
      <div>
        <h3 className="m-0 mb-2 text-sm font-semibold">With Wrap</h3>
        <div className="border border-dashed border-gray-300 p-4 w-80">
          <Stack direction="horizontal" spacing="4" wrap={true}>
            <SampleCard>Item 1</SampleCard>
            <SampleCard>Item 2</SampleCard>
            <SampleCard>Item 3</SampleCard>
            <SampleCard>Item 4</SampleCard>
            <SampleCard>Item 5</SampleCard>
          </Stack>
        </div>
      </div>
    </Stack>
  ),
};

// Responsive behavior demo
export const ResponsiveBehavior: Story = {
  render: () => (
    <div className="border border-dashed border-gray-300 p-4">
      <h3 className="m-0 mb-4 text-sm font-semibold">
        Responsive Stack (vertical on mobile, horizontal on desktop)
      </h3>
      <p className="m-0 mb-4 text-xs text-gray-500">
        Resize your browser window to see the direction change at the 'md' breakpoint (768px)
      </p>
      <Stack 
        direction={{ base: 'vertical', md: 'horizontal' }}
        spacing={{ base: '2', md: '6' }}
        align={{ base: 'stretch', md: 'center' }}
      >
        <button className="px-4 py-2.5 bg-blue-500 text-white border-none rounded-md cursor-pointer">Mobile: Full Width</button>
        <button className="px-4 py-2.5 bg-transparent text-gray-500 border border-gray-500 rounded-md cursor-pointer">Desktop: Side by Side</button>
        <button className="px-4 py-2.5 bg-transparent text-green-500 border-none rounded-md cursor-pointer">Responsive Spacing</button>
      </Stack>
    </div>
  ),
};

// Semantic HTML example
export const SemanticHTML: Story = {
  render: () => (
    <Stack direction="vertical" spacing="6">
      <div>
        <h3 className="m-0 mb-2 text-sm font-semibold">Navigation Stack (as="nav")</h3>
        <Stack as="nav" direction="horizontal" spacing="6" align="center">
          <button className="px-4 py-2.5 bg-transparent text-blue-500 border-none rounded-md cursor-pointer">Home</button>
          <button className="px-4 py-2.5 bg-transparent text-blue-500 border-none rounded-md cursor-pointer">About</button>
          <button className="px-4 py-2.5 bg-transparent text-blue-500 border-none rounded-md cursor-pointer">Services</button>
          <button className="px-4 py-2.5 bg-transparent text-blue-500 border-none rounded-md cursor-pointer">Contact</button>
        </Stack>
      </div>
      
      <div>
        <h3 className="m-0 mb-2 text-sm font-semibold">Article Section (as="section")</h3>
        <Stack as="section" direction="vertical" spacing="4">
          <SampleCard>Article Header</SampleCard>
          <SampleCard>Article Content</SampleCard>
          <SampleCard>Article Footer</SampleCard>
        </Stack>
      </div>
    </Stack>
  ),
};

// Real-world form example
export const FormLayout: Story = {
  render: () => (
    <div className="max-w-sm border border-gray-200 rounded-lg p-6">
      <h3 className="m-0 mb-4 text-base font-semibold">Contact Form</h3>
      <Stack direction="vertical" spacing="4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Name
          </label>
          <input 
            type="text" 
            placeholder="Enter your name"
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">
            Email
          </label>
          <input 
            type="email" 
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea 
            placeholder="Enter your message"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm resize-y"
          />
        </div>
        
        <Stack direction="horizontal" spacing="3" justify="end">
          <button className="px-4 py-2.5 bg-transparent text-gray-500 border border-gray-300 rounded-md cursor-pointer">Cancel</button>
          <button className="px-4 py-2.5 bg-blue-500 text-white border-none rounded-md cursor-pointer">Send Message</button>
        </Stack>
      </Stack>
    </div>
  ),
};

// Interactive playground
export const Playground: Story = {
  args: {
    direction: 'horizontal',
    spacing: '4',
    align: 'center',
    justify: 'start',
    wrap: false,
    as: 'div',
  },
  render: (args) => (
    <div className="border border-dashed border-gray-300 p-4 min-h-32">
      <Stack {...args}>
        <SampleCard color="#fee2e2">Item 1</SampleCard>
        <SampleCard color="#dbeafe">Item 2</SampleCard>
        <SampleCard color="#dcfce7">Item 3</SampleCard>
        <SampleCard color="#fef3c7">Item 4</SampleCard>
      </Stack>
    </div>
  ),
};