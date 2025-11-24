import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Design System/Shadows',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Box shadow tokens for creating depth and elevation in the UI. Shadows help establish visual hierarchy and focus.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const ShadowBox = ({ name, token, description }: { name: string; token: string; description?: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div
      style={{
        width: '128px',
        height: '128px',
        backgroundColor: 'white',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '12px',
        boxShadow: `var(${token})`
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '14px', fontWeight: 500, color: '#111827' }}>{name}</div>
      </div>
    </div>
    <div style={{ fontSize: '12px', fontFamily: 'monospace', color: '#6b7280' }}>{token}</div>
    {description && <div style={{ fontSize: '12px', color: '#4b5563', marginTop: '4px', textAlign: 'center' }}>{description}</div>}
  </div>
);

export const AllShadows: Story = {
  render: () => (
    <div style={{ maxWidth: '1536px' }}>
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>Shadow Scale</h2>
        <p style={{ color: '#4b5563' }}>
          Box shadows create depth and help distinguish elements from the background.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '32px' 
      }}>
        <ShadowBox
          name="None"
          token="--boxShadow-none"
          description="No shadow"
        />
        <ShadowBox
          name="SM"
          token="--boxShadow-sm"
          description="Subtle shadow"
        />
        <ShadowBox
          name="Base"
          token="--boxShadow-base"
          description="Default shadow"
        />
        <ShadowBox
          name="MD"
          token="--boxShadow-md"
          description="Medium shadow"
        />
        <ShadowBox
          name="LG"
          token="--boxShadow-lg"
          description="Large shadow"
        />
        <ShadowBox
          name="XL"
          token="--boxShadow-xl"
          description="Extra large"
        />
        <ShadowBox
          name="2XL"
          token="--boxShadow-2xl"
          description="Largest shadow"
        />
        <ShadowBox
          name="Inner"
          token="--boxShadow-inner"
          description="Inset shadow"
        />
      </div>
    </div>
  ),
};

export const SpecialShadows: Story = {
  render: () => (
    <div style={{ maxWidth: '1536px' }}>
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>Special Shadows</h2>
        <p style={{ color: '#4b5563' }}>
          Custom shadows for specific components.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '32px' 
      }}>
        <ShadowBox
          name="Header"
          token="--boxShadow-header"
          description="Header component shadow"
        />
      </div>
    </div>
  ),
};

export const ShadowExamples: Story = {
  render: () => (
    <div style={{ maxWidth: '1536px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Card Shadows</h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px' 
        }}>
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            padding: '24px',
            boxShadow: 'var(--boxShadow-sm)' 
          }}>
            <h4 style={{ fontWeight: 500, marginBottom: '8px' }}>Subtle Card</h4>
            <p style={{ fontSize: '14px', color: '#4b5563' }}>Uses shadow-sm for minimal elevation</p>
          </div>
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            padding: '24px',
            boxShadow: 'var(--boxShadow-base)' 
          }}>
            <h4 style={{ fontWeight: 500, marginBottom: '8px' }}>Default Card</h4>
            <p style={{ fontSize: '14px', color: '#4b5563' }}>Uses shadow-base for standard elevation</p>
          </div>
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            padding: '24px',
            boxShadow: 'var(--boxShadow-lg)' 
          }}>
            <h4 style={{ fontWeight: 500, marginBottom: '8px' }}>Elevated Card</h4>
            <p style={{ fontSize: '14px', color: '#4b5563' }}>Uses shadow-lg for prominent elevation</p>
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Interactive States</h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px' 
        }}>
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            padding: '24px',
            boxShadow: 'var(--boxShadow-sm)',
            transition: 'box-shadow 0.2s' 
          }}>
            <h4 style={{ fontWeight: 500, marginBottom: '8px' }}>Rest State</h4>
            <p style={{ fontSize: '14px', color: '#4b5563' }}>shadow-sm</p>
          </div>
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            padding: '24px',
            boxShadow: 'var(--boxShadow-md)',
            transition: 'box-shadow 0.2s' 
          }}>
            <h4 style={{ fontWeight: 500, marginBottom: '8px' }}>Hover State</h4>
            <p style={{ fontSize: '14px', color: '#4b5563' }}>shadow-md</p>
          </div>
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            padding: '24px',
            boxShadow: 'var(--boxShadow-lg)',
            transition: 'box-shadow 0.2s' 
          }}>
            <h4 style={{ fontWeight: 500, marginBottom: '8px' }}>Active/Focus State</h4>
            <p style={{ fontSize: '14px', color: '#4b5563' }}>shadow-lg</p>
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Modal/Dropdown Shadows</h3>
        <div style={{ backgroundColor: '#f3f4f6', padding: '32px', borderRadius: '8px' }}>
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '8px', 
            padding: '24px',
            maxWidth: '448px',
            margin: '0 auto',
            boxShadow: 'var(--boxShadow-2xl)' 
          }}>
            <h4 style={{ fontWeight: 500, marginBottom: '8px' }}>Modal Dialog</h4>
            <p style={{ fontSize: '14px', color: '#4b5563' }}>Uses shadow-2xl for maximum elevation above content</p>
            <button style={{ 
              marginTop: '16px',
              padding: '8px 16px',
              backgroundColor: 'var(--color-violet-500)',
              color: 'white',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}>
              Action
            </button>
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Inset Shadow</h3>
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '8px', 
          padding: '24px',
          boxShadow: 'var(--boxShadow-inner)' 
        }}>
          <h4 style={{ fontWeight: 500, marginBottom: '8px' }}>Inner Shadow</h4>
          <p style={{ fontSize: '14px', color: '#4b5563' }}>
            Used for pressed states, input fields, or to create recessed appearance
          </p>
        </div>
      </div>
    </div>
  ),
};

export const ShadowGuidelines: Story = {
  render: () => (
    <div style={{ maxWidth: '1024px' }}>
      <div style={{ maxWidth: 'none' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>Shadow Usage Guidelines</h2>
        
        <h3 style={{ fontSize: '18px', fontWeight: 600, marginTop: '24px', marginBottom: '12px' }}>Elevation Levels</h3>
        <ul style={{ paddingLeft: '24px', marginBottom: '24px', lineHeight: '1.75' }}>
          <li><strong>shadow-none:</strong> Flat elements, icons, text</li>
          <li><strong>shadow-sm:</strong> Subtle cards, list items</li>
          <li><strong>shadow-base:</strong> Standard cards, panels</li>
          <li><strong>shadow-md:</strong> Hover states, active cards</li>
          <li><strong>shadow-lg:</strong> Dropdowns, tooltips, popovers</li>
          <li><strong>shadow-xl:</strong> Modals, dialogs</li>
          <li><strong>shadow-2xl:</strong> Maximum elevation for overlays</li>
          <li><strong>shadow-inner:</strong> Input fields, pressed states</li>
        </ul>

        <h3 style={{ fontSize: '18px', fontWeight: 600, marginTop: '24px', marginBottom: '12px' }}>Best Practices</h3>
        <ul style={{ paddingLeft: '24px', marginBottom: '24px', lineHeight: '1.75' }}>
          <li>Use shadows consistently to indicate elevation hierarchy</li>
          <li>Higher elevation = larger shadow = more important/closer to user</li>
          <li>Animate shadows on hover for interactive elements</li>
          <li>Don't overuse large shadows - they can make UI feel heavy</li>
          <li>Consider reducing shadows in dark mode</li>
        </ul>

        <h3 style={{ fontSize: '18px', fontWeight: 600, marginTop: '24px', marginBottom: '12px' }}>Component Recommendations</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '24px 0' }}>
          <div style={{ backgroundColor: '#f9fafb', padding: '16px', borderRadius: '8px' }}>
            <div style={{ fontWeight: 500, marginBottom: '4px' }}>Cards</div>
            <div style={{ fontSize: '14px', color: '#4b5563' }}>Rest: shadow-sm | Hover: shadow-md</div>
          </div>
          <div style={{ backgroundColor: '#f9fafb', padding: '16px', borderRadius: '8px' }}>
            <div style={{ fontWeight: 500, marginBottom: '4px' }}>Dropdowns</div>
            <div style={{ fontSize: '14px', color: '#4b5563' }}>shadow-lg for menu items</div>
          </div>
          <div style={{ backgroundColor: '#f9fafb', padding: '16px', borderRadius: '8px' }}>
            <div style={{ fontWeight: 500, marginBottom: '4px' }}>Modals</div>
            <div style={{ fontSize: '14px', color: '#4b5563' }}>shadow-2xl for maximum prominence</div>
          </div>
          <div style={{ backgroundColor: '#f9fafb', padding: '16px', borderRadius: '8px' }}>
            <div style={{ fontWeight: 500, marginBottom: '4px' }}>Inputs</div>
            <div style={{ fontSize: '14px', color: '#4b5563' }}>shadow-inner for depth, shadow-base on focus</div>
          </div>
        </div>
      </div>
    </div>
  ),
};
