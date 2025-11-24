import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Design System/Border Radius',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Border radius tokens for rounded corners. Consistent border radius creates a cohesive, polished appearance.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const RadiusBox = ({ name, token, pixels }: { name: string; token: string; pixels: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div
      style={{
        width: '128px',
        height: '128px',
        backgroundColor: 'var(--color-violet-500)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '12px',
        borderRadius: `var(${token})`
      }}
    >
      <div style={{ textAlign: 'center', color: 'white' }}>
        <div style={{ fontSize: '14px', fontWeight: 500 }}>{name}</div>
        <div style={{ fontSize: '12px', opacity: 0.8 }}>{pixels}</div>
      </div>
    </div>
    <div style={{ fontSize: '12px', fontFamily: 'monospace', color: '#6b7280' }}>{token}</div>
  </div>
);

export const AllRadii: Story = {
  render: () => (
    <div style={{ maxWidth: '1536px' }}>
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>Border Radius Scale</h2>
        <p style={{ color: '#4b5563' }}>
          Border radius values for creating rounded corners on elements.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '32px' 
      }}>
        <RadiusBox name="None" token="--borderRadius-none" pixels="0px" />
        <RadiusBox name="SM" token="--borderRadius-sm" pixels="2px" />
        <RadiusBox name="Base" token="--borderRadius-base" pixels="4px" />
        <RadiusBox name="MD" token="--borderRadius-md" pixels="6px" />
        <RadiusBox name="LG" token="--borderRadius-lg" pixels="8px" />
        <RadiusBox name="LG+" token="--borderRadius-lg-plus" pixels="10px" />
        <RadiusBox name="XL" token="--borderRadius-xl" pixels="12px" />
        <RadiusBox name="2XL" token="--borderRadius-2xl" pixels="16px" />
        <RadiusBox name="3XL" token="--borderRadius-3xl" pixels="24px" />
        <RadiusBox name="Full" token="--borderRadius-full" pixels="9999px" />
      </div>
    </div>
  ),
};

export const ComponentExamples: Story = {
  render: () => (
    <div style={{ maxWidth: '1536px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Buttons</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          <button
            style={{
              padding: '8px 16px',
              backgroundColor: 'var(--color-violet-500)',
              color: 'white',
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer',
              borderRadius: 'var(--borderRadius-none)'
            }}
          >
            None (0px)
          </button>
          <button
            style={{
              padding: '8px 16px',
              backgroundColor: 'var(--color-violet-500)',
              color: 'white',
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer',
              borderRadius: 'var(--borderRadius-sm)'
            }}
          >
            SM (2px)
          </button>
          <button
            style={{
              padding: '8px 16px',
              backgroundColor: 'var(--color-violet-500)',
              color: 'white',
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer',
              borderRadius: 'var(--borderRadius-base)'
            }}
          >
            Base (4px)
          </button>
          <button
            style={{
              padding: '8px 16px',
              backgroundColor: 'var(--color-violet-500)',
              color: 'white',
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer',
              borderRadius: 'var(--borderRadius-md)'
            }}
          >
            MD (6px)
          </button>
          <button
            style={{
              padding: '8px 16px',
              backgroundColor: 'var(--color-violet-500)',
              color: 'white',
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer',
              borderRadius: 'var(--borderRadius-lg)'
            }}
          >
            LG (8px)
          </button>
          <button
            style={{
              padding: '8px 16px',
              backgroundColor: 'var(--color-violet-500)',
              color: 'white',
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer',
              borderRadius: 'var(--borderRadius-full)'
            }}
          >
            Full (Pill)
          </button>
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Cards</h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px' 
        }}>
          <div
            style={{
              backgroundColor: 'white',
              padding: '24px',
              boxShadow: 'var(--boxShadow-md)',
              borderRadius: 'var(--borderRadius-base)'
            }}
          >
            <h4 style={{ fontWeight: 500, marginBottom: '8px' }}>Base Radius</h4>
            <p style={{ fontSize: '14px', color: '#4b5563' }}>4px - Subtle rounded corners</p>
          </div>
          <div
            style={{
              backgroundColor: 'white',
              padding: '24px',
              boxShadow: 'var(--boxShadow-md)',
              borderRadius: 'var(--borderRadius-lg)'
            }}
          >
            <h4 style={{ fontWeight: 500, marginBottom: '8px' }}>LG Radius</h4>
            <p style={{ fontSize: '14px', color: '#4b5563' }}>8px - Standard card radius</p>
          </div>
          <div
            style={{
              backgroundColor: 'white',
              padding: '24px',
              boxShadow: 'var(--boxShadow-md)',
              borderRadius: 'var(--borderRadius-xl)'
            }}
          >
            <h4 style={{ fontWeight: 500, marginBottom: '8px' }}>XL Radius</h4>
            <p style={{ fontSize: '14px', color: '#4b5563' }}>12px - More pronounced</p>
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Badges & Pills</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <span
            style={{
              padding: '4px 12px',
              backgroundColor: 'var(--color-violet-500)',
              color: 'white',
              fontSize: '14px',
              fontWeight: 500,
              borderRadius: 'var(--borderRadius-base)'
            }}
          >
            Base
          </span>
          <span
            style={{
              padding: '4px 12px',
              backgroundColor: '#10b981',
              color: 'white',
              fontSize: '14px',
              fontWeight: 500,
              borderRadius: 'var(--borderRadius-md)'
            }}
          >
            Medium
          </span>
          <span
            style={{
              padding: '4px 12px',
              backgroundColor: '#eab308',
              color: 'white',
              fontSize: '14px',
              fontWeight: 500,
              borderRadius: 'var(--borderRadius-lg)'
            }}
          >
            Large
          </span>
          <span
            style={{
              padding: '4px 12px',
              backgroundColor: '#ef4444',
              color: 'white',
              fontSize: '14px',
              fontWeight: 500,
              borderRadius: 'var(--borderRadius-full)'
            }}
          >
            Full (Pill)
          </span>
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Avatars & Icons</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              backgroundColor: 'var(--color-violet-500)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 700,
              borderRadius: 'var(--borderRadius-base)'
            }}
          >
            4px
          </div>
          <div
            style={{
              width: '64px',
              height: '64px',
              backgroundColor: 'var(--color-violet-500)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 700,
              borderRadius: 'var(--borderRadius-lg)'
            }}
          >
            8px
          </div>
          <div
            style={{
              width: '64px',
              height: '64px',
              backgroundColor: 'var(--color-violet-500)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 700,
              borderRadius: 'var(--borderRadius-xl)'
            }}
          >
            12px
          </div>
          <div
            style={{
              width: '64px',
              height: '64px',
              backgroundColor: 'var(--color-violet-500)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 700,
              borderRadius: 'var(--borderRadius-full)'
            }}
          >
            Full
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Input Fields</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '448px' }}>
          <input
            type="text"
            placeholder="Base radius (4px)"
            style={{
              width: '100%',
              padding: '8px 16px',
              border: '1px solid #d1d5db',
              outline: 'none',
              borderRadius: 'var(--borderRadius-base)'
            }}
          />
          <input
            type="text"
            placeholder="MD radius (6px)"
            style={{
              width: '100%',
              padding: '8px 16px',
              border: '1px solid #d1d5db',
              outline: 'none',
              borderRadius: 'var(--borderRadius-md)'
            }}
          />
          <input
            type="text"
            placeholder="LG radius (8px)"
            style={{
              width: '100%',
              padding: '8px 16px',
              border: '1px solid #d1d5db',
              outline: 'none',
              borderRadius: 'var(--borderRadius-lg)'
            }}
          />
        </div>
      </div>
    </div>
  ),
};

export const RadiusGuidelines: Story = {
  render: () => (
    <div style={{ maxWidth: '1024px' }}>
      <div style={{ maxWidth: 'none' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>Border Radius Usage Guidelines</h2>
        
        <h3 style={{ fontSize: '18px', fontWeight: 600, marginTop: '24px', marginBottom: '12px' }}>Common Use Cases</h3>
        <ul style={{ paddingLeft: '24px', marginBottom: '24px', lineHeight: '1.75' }}>
          <li><strong>none (0px):</strong> Sharp corners, formal elements</li>
          <li><strong>sm (2px):</strong> Very subtle rounding, code blocks</li>
          <li><strong>base (4px):</strong> Default for most UI elements</li>
          <li><strong>md (6px):</strong> Input fields, smaller cards</li>
          <li><strong>lg (8px):</strong> Cards, panels, containers</li>
          <li><strong>xl (12px):</strong> Large cards, modals</li>
          <li><strong>2xl (16px):</strong> Hero sections, featured content</li>
          <li><strong>3xl (24px):</strong> Very large elements</li>
          <li><strong>full (9999px):</strong> Pills, circular avatars</li>
        </ul>

        <h3 style={{ fontSize: '18px', fontWeight: 600, marginTop: '24px', marginBottom: '12px' }}>Component Recommendations</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '24px 0' }}>
          <div style={{ backgroundColor: '#f9fafb', padding: '16px', borderRadius: '8px' }}>
            <div style={{ fontWeight: 500, marginBottom: '4px' }}>Buttons</div>
            <div style={{ fontSize: '14px', color: '#4b5563' }}>base (4px) or md (6px) for standard buttons, full for pill buttons</div>
          </div>
          <div style={{ backgroundColor: '#f9fafb', padding: '16px', borderRadius: '8px' }}>
            <div style={{ fontWeight: 500, marginBottom: '4px' }}>Cards</div>
            <div style={{ fontSize: '14px', color: '#4b5563' }}>lg (8px) or xl (12px) for standard cards</div>
          </div>
          <div style={{ backgroundColor: '#f9fafb', padding: '16px', borderRadius: '8px' }}>
            <div style={{ fontWeight: 500, marginBottom: '4px' }}>Input Fields</div>
            <div style={{ fontSize: '14px', color: '#4b5563' }}>base (4px) or md (6px) for form inputs</div>
          </div>
          <div style={{ backgroundColor: '#f9fafb', padding: '16px', borderRadius: '8px' }}>
            <div style={{ fontWeight: 500, marginBottom: '4px' }}>Badges</div>
            <div style={{ fontSize: '14px', color: '#4b5563' }}>base (4px) for rectangular, full for pill badges</div>
          </div>
          <div style={{ backgroundColor: '#f9fafb', padding: '16px', borderRadius: '8px' }}>
            <div style={{ fontWeight: 500, marginBottom: '4px' }}>Avatars</div>
            <div style={{ fontSize: '14px', color: '#4b5563' }}>lg (8px) for rounded, full for circular</div>
          </div>
          <div style={{ backgroundColor: '#f9fafb', padding: '16px', borderRadius: '8px' }}>
            <div style={{ fontWeight: 500, marginBottom: '4px' }}>Modals</div>
            <div style={{ fontSize: '14px', color: '#4b5563' }}>lg (8px) or xl (12px) for dialog boxes</div>
          </div>
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: 600, marginTop: '24px', marginBottom: '12px' }}>Best Practices</h3>
        <ul style={{ paddingLeft: '24px', marginBottom: '24px', lineHeight: '1.75' }}>
          <li>Maintain consistency - use the same radius for similar components</li>
          <li>Larger elements can have larger radius values</li>
          <li>Consider the overall design language - modern designs use more rounding</li>
          <li>Ensure border radius works well with component padding</li>
          <li>Test radius values at different screen sizes</li>
        </ul>
      </div>
    </div>
  ),
};
