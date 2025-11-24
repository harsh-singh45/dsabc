import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Design System/Typography",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Typography system showcasing font families, sizes, weights, and variants used throughout the Intelation design system.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const FontFamilies: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="typography-heading-lg" style={{ marginBottom: '24px' }}>Font Families</h2>
        
        <div className="grid gap-6">
          <div>
            <h3 className="typography-body-lg text-gray-500" style={{ marginBottom: '12px' }}>Manrope (All Typography)</h3>
            <div className="font-sans text-xl border border-gray-200 rounded-lg bg-gray-50" style={{ padding: '24px' }}>
              The quick brown fox jumps over the lazy dog
            </div>
            <p className="typography-body-sm text-gray-500" style={{ marginTop: '12px' }}>
              Single font for all typography - headings, body text, labels, code, and UI elements
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const DisplayStyles: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="typography-heading-lg" style={{ marginBottom: '24px' }}>Display Typography</h2>
        
        <div className="flex flex-col gap-8">
          <div className="typography-display-2xl">Display 2XL</div>
          <div className="typography-display-xl">Display XL</div>
          <div className="typography-display-lg">Display Large</div>
        </div>
      </div>
    </div>
  ),
};

export const HeadingStyles: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="typography-heading-lg" style={{ marginBottom: '24px' }}>Heading Typography</h2>
        
        <div className="flex flex-col gap-6">
          <div className="typography-heading-xl">Heading XL - Main page titles</div>
          <div className="typography-heading-lg">Heading Large - Section headers</div>
          <div className="typography-heading-md">Heading Medium - Subsection titles</div>
          <div className="typography-heading-sm">Heading Small - Component titles</div>
          <div className="typography-heading-xs">Heading XS - Minor headings</div>
        </div>
      </div>
    </div>
  ),
};

export const BodyStyles: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="typography-heading-lg" style={{ marginBottom: '24px' }}>Body Typography</h2>
        
        <div className="flex flex-col gap-6">
          <div className="typography-body-xl">
            Body XL - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Used for important content and introductory paragraphs.
          </div>
          <div className="typography-body-lg">
            Body Large - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="typography-body-md">
            Body Medium - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </div>
          <div className="typography-body-sm">
            Body Small - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Used for secondary content, captions, and smaller text blocks.
          </div>
          <div className="typography-body-xs">
            Body XS - Lorem ipsum dolor sit amet, consectetur adipiscing elit. For fine print, footnotes, and minimal text.
          </div>
        </div>
      </div>
    </div>
  ),
};

export const LabelStyles: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="typography-heading-lg" style={{ marginBottom: '24px' }}>Labels & Special Text</h2>
        
        <div className="flex flex-col gap-6 items-start">
          <div className="typography-label-lg">Label Large - Form labels, important tags</div>
          <div className="typography-label-md">Label Medium - Standard form labels</div>
          <div className="typography-label-sm">Label Small - Compact form labels</div>
          <div className="typography-caption">Caption - Image captions and supplementary text</div>
          <div className="typography-overline">Overline - Section identifiers</div>
        </div>
      </div>
    </div>
  ),
};

export const CodeStyles: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="typography-heading-lg" style={{ marginBottom: '24px' }}>Code Typography</h2>
        
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="typography-body-lg" style={{ marginBottom: '12px' }}>Code Large</h3>
            <div className="typography-code-lg bg-gray-100 rounded-lg border border-gray-200" style={{ padding: '16px' }}>
              {`function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}`}
            </div>
          </div>
          
          <div>
            <h3 className="typography-body-lg" style={{ marginBottom: '12px' }}>Code Medium</h3>
            <div className="typography-code-md bg-gray-100 rounded-lg border border-gray-200" style={{ padding: '16px' }}>
{`const API_URL = "https://api.intelation.com";
const response = await fetch(API_URL);`}
            </div>
          </div>
          
          <div>
            <h3 className="typography-body-lg" style={{ marginBottom: '12px' }}>Code Small</h3>
            <div className="typography-code-sm bg-gray-100 rounded-lg border border-gray-200" style={{ padding: '16px' }}>
              npm install @intelation/ui
            </div>
          </div>
          
          <div>
            <h3 className="typography-body-lg" style={{ marginBottom: '12px' }}>Inline Code</h3>
            <p className="typography-body-md">
              Use the <code className="font-mono bg-gray-100 rounded text-sm" style={{ padding: '4px 8px' }}>useState</code> hook to manage component state.
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => {
    // Define variants to display (matches the CSS classes generated)
    const variants = [
      { name: 'display-2xl', category: 'Display', description: '72px • 700 • 90px • -0.02em' },
      { name: 'display-xl', category: 'Display', description: '60px • 700 • 72px • -0.02em' },
      { name: 'display-lg', category: 'Display', description: '48px • 600 • 60px • -0.02em' },
      { name: 'heading-xl', category: 'Heading', description: '36px • 600 • 44px • -0.01em' },
      { name: 'heading-lg', category: 'Heading', description: '30px • 600 • 38px' },
      { name: 'heading-md', category: 'Heading', description: '24px • 600 • 32px' },
      { name: 'heading-sm', category: 'Heading', description: '20px • 600 • 28px' },
      { name: 'heading-xs', category: 'Heading', description: '18px • 600 • 28px' },
      { name: 'body-xl', category: 'Body', description: '20px • 400 • 30px' },
      { name: 'body-lg', category: 'Body', description: '18px • 400 • 28px' },
      { name: 'body-md', category: 'Body', description: '16px • 400 • 24px' },
      { name: 'body-sm', category: 'Body', description: '14px • 400 • 20px' },
      { name: 'body-xs', category: 'Body', description: '12px • 400 • 18px' },
      { name: 'code-lg', category: 'Code', description: '16px • 400 • 24px (monospace)' },
      { name: 'code-md', category: 'Code', description: '14px • 400 • 20px (monospace)' },
      { name: 'code-sm', category: 'Code', description: '12px • 400 • 18px (monospace)' },
      { name: 'label-lg', category: 'Label', description: '16px • 500 • 24px' },
      { name: 'label-md', category: 'Label', description: '14px • 500 • 20px' },
      { name: 'label-sm', category: 'Label', description: '12px • 500 • 18px' },
      { name: 'caption', category: 'Special', description: '12px • 400 • 16px • 0.01em' },
      { name: 'overline', category: 'Special', description: '12px • 500 • 16px • 0.08em • uppercase' },
    ];

    return (
      <div className="flex flex-col gap-8" style={{ paddingTop: '32px', paddingBottom: '32px' }}>
        <div>
          <h1 className="typography-heading-xl" style={{ marginBottom: '32px' }}>
            Complete Typography System
          </h1>
          
          {variants.map(({ name, category, description }) => (
            <div key={name} className="border border-gray-200 rounded-lg bg-gray-50" style={{ marginBottom: '16px', padding: '24px' }}>
              <div className="typography-body-sm text-gray-500 font-medium font-sans" style={{ marginBottom: '12px' }}>
                .typography-{name} <span className="text-gray-400 font-normal">({category})</span>
              </div>
              <div className={`typography-${name}`} style={{ marginBottom: '12px' }}>
                {name.includes('display') || name.includes('heading') 
                  ? `This is ${name} typography`
                  : name.includes('code')
                  ? 'const message = "Hello, World!";'
                  : name === 'overline'
                  ? 'Section Label'
                  : name === 'caption'
                  ? 'This is a caption for an image or supplementary content'
                  : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
              </div>
              <div className="text-xs text-gray-400 font-sans">
                {description}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const ResponsiveText: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="typography-heading-lg" style={{ marginBottom: '16px' }}>Responsive Typography</h2>
        <p className="typography-body-md text-gray-500" style={{ marginBottom: '16px' }}>
          Resize your browser window to see how typography adapts across breakpoints.
        </p>
        
        <div className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight font-sans" style={{ marginBottom: '16px' }}>
          Responsive Display Text
        </div>
        
        <div className="text-base md:text-lg lg:text-xl leading-relaxed max-w-prose font-sans">
          This text uses fluid typography with CSS clamp() to scale smoothly between minimum and maximum font sizes based on viewport width. This creates a more harmonious reading experience across all device sizes.
        </div>
      </div>
    </div>
  ),
};