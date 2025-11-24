import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Design System/Colors',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Design system color tokens including brand colors, semantic colors, and theme-specific colors. All colors are defined as CSS custom properties (variables) for consistent theming.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const ColorSwatch = ({ name, value }: { name: string; value: string }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px', borderRadius: '4px' }}>
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '8px',
          border: '1px solid #e5e7eb',
          boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
          flexShrink: 0,
          backgroundColor: `var(${value})`
        }}
        title={value}
      />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: '14px', fontWeight: 500, color: '#111827' }}>{name}</div>
        <div style={{ fontSize: '12px', color: '#6b7280', fontFamily: 'monospace' }}>{value}</div>
      </div>
    </div>
  );
};

const ColorScale = ({ colors, title }: { colors: Array<{ name: string; value: string }>; title: string }) => (
  <div style={{ marginBottom: '32px' }}>
    <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px', color: '#111827' }}>{title}</h3>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '8px' }}>
      {colors.map((color) => (
        <ColorSwatch key={color.value} name={color.name} value={color.value} />
      ))}
    </div>
  </div>
);

export const BrandColors: Story = {
  render: () => (
    <div style={{ maxWidth: '1400px' }}>
      <ColorScale
        title="Brand Colors"
        colors={[
          { name: 'Brand 50', value: '--color-brand-50' },
          { name: 'Brand 100', value: '--color-brand-100' },
          { name: 'Brand 200', value: '--color-brand-200' },
          { name: 'Brand 300', value: '--color-brand-300' },
          { name: 'Brand 400', value: '--color-brand-400' },
          { name: 'Brand 500', value: '--color-brand-500' },
          { name: 'Brand 600', value: '--color-brand-600' },
          { name: 'Brand 700', value: '--color-brand-700' },
          { name: 'Brand 800', value: '--color-brand-800' },
          { name: 'Brand 900', value: '--color-brand-900' },
          { name: 'Brand 950', value: '--color-brand-950' },
        ]}
      />
    </div>
  ),
};

export const GrayColors: Story = {
  render: () => (
    <div className="max-w-7xl">
      <ColorScale
        title="Gray Scale"
        colors={[
          { name: 'Gray 50', value: '--color-gray-50' },
          { name: 'Gray 100', value: '--color-gray-100' },
          { name: 'Gray 200', value: '--color-gray-200' },
          { name: 'Gray 300', value: '--color-gray-300' },
          { name: 'Gray 400', value: '--color-gray-400' },
          { name: 'Gray 500', value: '--color-gray-500' },
          { name: 'Gray 600', value: '--color-gray-600' },
          { name: 'Gray 700', value: '--color-gray-700' },
          { name: 'Gray 800', value: '--color-gray-800' },
          { name: 'Gray 900', value: '--color-gray-900' },
          { name: 'Gray 950', value: '--color-gray-950' },
        ]}
      />
    </div>
  ),
};

export const SemanticColors: Story = {
  render: () => (
    <div className="max-w-7xl">
      <ColorScale
        title="Success"
        colors={[
          { name: 'Green 50', value: '--color-green-50' },
          { name: 'Green 100', value: '--color-green-100' },
          { name: 'Green 200', value: '--color-green-200' },
          { name: 'Green 300', value: '--color-green-300' },
          { name: 'Green 400', value: '--color-green-400' },
          { name: 'Green 500', value: '--color-green-500' },
          { name: 'Green 600', value: '--color-green-600' },
          { name: 'Green 700', value: '--color-green-700' },
          { name: 'Green 800', value: '--color-green-800' },
          { name: 'Green 900', value: '--color-green-900' },
          { name: 'Green 950', value: '--color-green-950' },
        ]}
      />
      <ColorScale
        title="Danger"
        colors={[
          { name: 'Red 50', value: '--color-red-50' },
          { name: 'Red 100', value: '--color-red-100' },
          { name: 'Red 200', value: '--color-red-200' },
          { name: 'Red 300', value: '--color-red-300' },
          { name: 'Red 400', value: '--color-red-400' },
          { name: 'Red 500', value: '--color-red-500' },
          { name: 'Red 600', value: '--color-red-600' },
          { name: 'Red 700', value: '--color-red-700' },
          { name: 'Red 800', value: '--color-red-800' },
          { name: 'Red 900', value: '--color-red-900' },
          { name: 'Red 950', value: '--color-red-950' },
        ]}
      />
      <ColorScale
        title="Warning"
        colors={[
          { name: 'Yellow 50', value: '--color-yellow-50' },
          { name: 'Yellow 100', value: '--color-yellow-100' },
          { name: 'Yellow 200', value: '--color-yellow-200' },
          { name: 'Yellow 300', value: '--color-yellow-300' },
          { name: 'Yellow 400', value: '--color-yellow-400' },
          { name: 'Yellow 500', value: '--color-yellow-500' },
          { name: 'Yellow 600', value: '--color-yellow-600' },
          { name: 'Yellow 700', value: '--color-yellow-700' },
          { name: 'Yellow 800', value: '--color-yellow-800' },
          { name: 'Yellow 900', value: '--color-yellow-900' },
          { name: 'Yellow 950', value: '--color-yellow-950' },
        ]}
      />
    </div>
  ),
};

export const VioletColors: Story = {
  render: () => (
    <div className="max-w-7xl">
      <ColorScale
        title="Violet (Primary UI)"
        colors={[
          { name: 'Violet 50', value: '--color-violet-50' },
          { name: 'Violet 100', value: '--color-violet-100' },
          { name: 'Violet 200', value: '--color-violet-200' },
          { name: 'Violet 300', value: '--color-violet-300' },
          { name: 'Violet 400', value: '--color-violet-400' },
          { name: 'Violet 500', value: '--color-violet-500' },
          { name: 'Violet 600', value: '--color-violet-600' },
          { name: 'Violet 700', value: '--color-violet-700' },
          { name: 'Violet 800', value: '--color-violet-800' },
          { name: 'Violet 900', value: '--color-violet-900' },
          { name: 'Violet 950', value: '--color-violet-950' },
        ]}
      />
    </div>
  ),
};

export const PurpleColors: Story = {
  render: () => (
    <div className="max-w-7xl">
      <ColorScale
        title="Purple"
        colors={[
          { name: 'Purple 50', value: '--color-purple-50' },
          { name: 'Purple 100', value: '--color-purple-100' },
          { name: 'Purple 200', value: '--color-purple-200' },
          { name: 'Purple 300', value: '--color-purple-300' },
          { name: 'Purple 400', value: '--color-purple-400' },
          { name: 'Purple 500', value: '--color-purple-500' },
          { name: 'Purple 600', value: '--color-purple-600' },
          { name: 'Purple 700', value: '--color-purple-700' },
          { name: 'Purple 800', value: '--color-purple-800' },
          { name: 'Purple 900', value: '--color-purple-900' },
          { name: 'Purple 950', value: '--color-purple-950' },
        ]}
      />
    </div>
  ),
};

export const UIColors: Story = {
  render: () => (
    <div className="max-w-7xl">
      <ColorScale
        title="Primary"
        colors={[
          { name: 'Primary', value: '--color-primary' },
          { name: 'Primary Hover', value: '--color-primaryHover' },
          { name: 'Primary Active', value: '--color-primaryActive' },
          { name: 'Primary Alpha', value: '--color-primary-alpha' },
        ]}
      />
      <ColorScale
        title="Secondary"
        colors={[
          { name: 'Secondary', value: '--color-secondary' },
          { name: 'Secondary Hover', value: '--color-secondaryHover' },
          { name: 'Secondary Active', value: '--color-secondaryActive' },
          { name: 'Secondary Alpha', value: '--color-secondary-alpha' },
        ]}
      />
      <ColorScale
        title="Success"
        colors={[
          { name: 'Success', value: '--color-success' },
          { name: 'Success Hover', value: '--color-successHover' },
          { name: 'Success Alpha', value: '--color-success-alpha' },
        ]}
      />
      <ColorScale
        title="Warning"
        colors={[
          { name: 'Warning', value: '--color-warning' },
          { name: 'Warning Hover', value: '--color-warningHover' },
          { name: 'Warning Alpha', value: '--color-warning-alpha' },
        ]}
      />
      <ColorScale
        title="Danger"
        colors={[
          { name: 'Danger', value: '--color-danger' },
          { name: 'Danger Hover', value: '--color-dangerHover' },
          { name: 'Danger Alpha', value: '--color-danger-alpha' },
        ]}
      />
    </div>
  ),
};

export const TextColors: Story = {
  render: () => (
    <div className="max-w-7xl">
      <ColorScale
        title="Text Colors"
        colors={[
          { name: 'Text Primary', value: '--color-text-primary' },
          { name: 'Text Secondary', value: '--color-text-secondary' },
          { name: 'Text Tertiary', value: '--color-text-tertiary' },
          { name: 'Text Inverse', value: '--color-text-inverse' },
          { name: 'Metric Value', value: '--color-text-metric-value' },
          { name: 'Metric Label', value: '--color-text-metric-label' },
        ]}
      />
    </div>
  ),
};

export const BackgroundColors: Story = {
  render: () => (
    <div className="max-w-7xl">
      <ColorScale
        title="Background Colors"
        colors={[
          { name: 'Background White', value: '--color-background-white' },
          { name: 'Background Primary', value: '--color-background-primary' },
          { name: 'Background Secondary', value: '--color-background-secondary' },
          { name: 'Background Tertiary', value: '--color-background-tertiary' },
          { name: 'Background Inverse', value: '--color-background-inverse' },
          { name: 'Page Background', value: '--color-background-page' },
        ]}
      />
    </div>
  ),
};

export const ChartColors: Story = {
  render: () => (
    <div className="max-w-7xl">
      <ColorScale
        title="Chart Colors"
        colors={[
          { name: 'Chart Cyan', value: '--color-chart-cyan' },
          { name: 'Chart Cyan Bright', value: '--color-chart-cyanBright' },
          { name: 'Chart Green', value: '--color-chart-green' },
          { name: 'Chart Violet', value: '--color-chart-violet' },
          { name: 'Chart Purple', value: '--color-chart-purple' },
          { name: 'Chart Teal', value: '--color-chart-teal' },
          { name: 'Chart Red', value: '--color-chart-red' },
          { name: 'Chart Light Gray', value: '--color-chart-lightGray' },
          { name: 'Chart Dark Gray', value: '--color-chart-darkGray' },
        ]}
      />
      <ColorScale
        title="Chart UI"
        colors={[
          { name: 'Grid Line', value: '--color-chart-gridLine' },
          { name: 'Grid Line Dashed', value: '--color-chart-gridLineDashed' },
          { name: 'Zero Line', value: '--color-chart-zeroLine' },
          { name: 'Border White', value: '--color-chart-borderWhite' },
          { name: 'Text Dark', value: '--color-chart-textDark' },
          { name: 'Text Gray', value: '--color-chart-textGray' },
          { name: 'Text Label', value: '--color-chart-textLabel' },
        ]}
      />
    </div>
  ),
};

export const IconColors: Story = {
  render: () => (
    <div className="max-w-7xl">
      <ColorScale
        title="Icon Colors"
        colors={[
          { name: 'Icon Violet BG', value: '--color-icon-violet-bg' },
          { name: 'Icon Violet FG', value: '--color-icon-violet-fg' },
          { name: 'Icon Green BG', value: '--color-icon-green-bg' },
          { name: 'Icon Green FG', value: '--color-icon-green-fg' },
          { name: 'Icon Cyan BG', value: '--color-icon-cyan-bg' },
          { name: 'Icon Cyan FG', value: '--color-icon-cyan-fg' },
          { name: 'Icon Orange BG', value: '--color-icon-orange-bg' },
          { name: 'Icon Orange FG', value: '--color-icon-orange-fg' },
          { name: 'Icon Gray BG', value: '--color-icon-gray-bg' },
          { name: 'Icon Gray FG', value: '--color-icon-gray-fg' },
        ]}
      />
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div className="max-w-7xl">
      <ColorScale
        title="Brand Colors"
        colors={[
          { name: 'Brand 50', value: '--color-brand-50' },
          { name: 'Brand 100', value: '--color-brand-100' },
          { name: 'Brand 200', value: '--color-brand-200' },
          { name: 'Brand 300', value: '--color-brand-300' },
          { name: 'Brand 400', value: '--color-brand-400' },
          { name: 'Brand 500', value: '--color-brand-500' },
          { name: 'Brand 600', value: '--color-brand-600' },
          { name: 'Brand 700', value: '--color-brand-700' },
          { name: 'Brand 800', value: '--color-brand-800' },
          { name: 'Brand 900', value: '--color-brand-900' },
          { name: 'Brand 950', value: '--color-brand-950' },
        ]}
      />
      <ColorScale
        title="Violet"
        colors={[
          { name: 'Violet 50', value: '--color-violet-50' },
          { name: 'Violet 100', value: '--color-violet-100' },
          { name: 'Violet 200', value: '--color-violet-200' },
          { name: 'Violet 300', value: '--color-violet-300' },
          { name: 'Violet 400', value: '--color-violet-400' },
          { name: 'Violet 500', value: '--color-violet-500' },
          { name: 'Violet 600', value: '--color-violet-600' },
          { name: 'Violet 700', value: '--color-violet-700' },
          { name: 'Violet 800', value: '--color-violet-800' },
          { name: 'Violet 900', value: '--color-violet-900' },
          { name: 'Violet 950', value: '--color-violet-950' },
        ]}
      />
      <ColorScale
        title="Gray Scale"
        colors={[
          { name: 'Gray 50', value: '--color-gray-50' },
          { name: 'Gray 100', value: '--color-gray-100' },
          { name: 'Gray 200', value: '--color-gray-200' },
          { name: 'Gray 300', value: '--color-gray-300' },
          { name: 'Gray 400', value: '--color-gray-400' },
          { name: 'Gray 500', value: '--color-gray-500' },
          { name: 'Gray 600', value: '--color-gray-600' },
          { name: 'Gray 700', value: '--color-gray-700' },
          { name: 'Gray 800', value: '--color-gray-800' },
          { name: 'Gray 900', value: '--color-gray-900' },
          { name: 'Gray 950', value: '--color-gray-950' },
        ]}
      />
    </div>
  ),
};
