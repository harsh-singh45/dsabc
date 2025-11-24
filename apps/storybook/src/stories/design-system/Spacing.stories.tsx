import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Design System/Spacing',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Spacing scale using Tailwind CSS utilities. Consistent spacing ensures visual harmony and helps create clear visual hierarchies.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const SpacingItem = ({ size, pixels }: { size: string; pixels: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '8px 0' }}>
    <div style={{ width: '64px', fontSize: '14px', fontFamily: 'monospace', color: '#4b5563' }}>{size}</div>
    <div style={{ width: '80px', fontSize: '14px', color: '#6b7280' }}>{pixels}</div>
    <div style={{ flex: 1 }}>
      <div
        style={{ height: '32px', backgroundColor: 'var(--color-violet-500)', borderRadius: '4px', width: pixels }}
      />
    </div>
  </div>
);

export const SpacingScale: Story = {
  render: () => (
    <div style={{ maxWidth: '1024px' }}>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>Spacing Scale</h2>
        <p style={{ color: '#4b5563' }}>
          Use these spacing values for margins, padding, and gaps. Based on a 4px base unit.
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <SpacingItem size="0" pixels="0px" />
        <SpacingItem size="0.5" pixels="2px" />
        <SpacingItem size="1" pixels="4px" />
        <SpacingItem size="1.5" pixels="6px" />
        <SpacingItem size="2" pixels="8px" />
        <SpacingItem size="2.5" pixels="10px" />
        <SpacingItem size="3" pixels="12px" />
        <SpacingItem size="3.5" pixels="14px" />
        <SpacingItem size="4" pixels="16px" />
        <SpacingItem size="5" pixels="20px" />
        <SpacingItem size="6" pixels="24px" />
        <SpacingItem size="7" pixels="28px" />
        <SpacingItem size="8" pixels="32px" />
        <SpacingItem size="9" pixels="36px" />
        <SpacingItem size="10" pixels="40px" />
        <SpacingItem size="11" pixels="44px" />
        <SpacingItem size="12" pixels="48px" />
        <SpacingItem size="14" pixels="56px" />
        <SpacingItem size="16" pixels="64px" />
        <SpacingItem size="20" pixels="80px" />
        <SpacingItem size="24" pixels="96px" />
        <SpacingItem size="28" pixels="112px" />
        <SpacingItem size="32" pixels="128px" />
      </div>
    </div>
  ),
};

export const SpacingExamples: Story = {
  render: () => (
    <div style={{ maxWidth: '1024px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Padding Examples</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ backgroundColor: '#f3f4f6', borderRadius: '4px' }}>
            <div style={{ padding: '8px', backgroundColor: 'var(--color-violet-500)', color: 'white', borderRadius: '4px' }}>p-2 (8px)</div>
          </div>
          <div style={{ backgroundColor: '#f3f4f6', borderRadius: '4px' }}>
            <div style={{ padding: '16px', backgroundColor: 'var(--color-violet-500)', color: 'white', borderRadius: '4px' }}>p-4 (16px)</div>
          </div>
          <div style={{ backgroundColor: '#f3f4f6', borderRadius: '4px' }}>
            <div style={{ padding: '24px', backgroundColor: 'var(--color-violet-500)', color: 'white', borderRadius: '4px' }}>p-6 (24px)</div>
          </div>
          <div style={{ backgroundColor: '#f3f4f6', borderRadius: '4px' }}>
            <div style={{ padding: '32px', backgroundColor: 'var(--color-violet-500)', color: 'white', borderRadius: '4px' }}>p-8 (32px)</div>
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Margin Examples</h3>
        <div style={{ backgroundColor: '#f3f4f6', padding: '16px', borderRadius: '4px' }}>
          <div style={{ marginBottom: '8px', backgroundColor: 'var(--color-violet-500)', color: 'white', padding: '8px', borderRadius: '4px' }}>mb-2 (8px)</div>
          <div style={{ marginBottom: '16px', backgroundColor: 'var(--color-violet-500)', color: 'white', padding: '8px', borderRadius: '4px' }}>mb-4 (16px)</div>
          <div style={{ marginBottom: '24px', backgroundColor: 'var(--color-violet-500)', color: 'white', padding: '8px', borderRadius: '4px' }}>mb-6 (24px)</div>
          <div style={{ marginBottom: '32px', backgroundColor: 'var(--color-violet-500)', color: 'white', padding: '8px', borderRadius: '4px' }}>mb-8 (32px)</div>
          <div style={{ backgroundColor: 'var(--color-violet-500)', color: 'white', padding: '8px', borderRadius: '4px' }}>Last item</div>
        </div>
      </div>

      <div>
        <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '16px' }}>Gap Examples (Flexbox)</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '14px', color: '#4b5563', marginBottom: '8px' }}>gap-2 (8px)</div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--color-violet-500)', borderRadius: '4px' }}></div>
              <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--color-violet-500)', borderRadius: '4px' }}></div>
              <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--color-violet-500)', borderRadius: '4px' }}></div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: '14px', color: '#4b5563', marginBottom: '8px' }}>gap-4 (16px)</div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--color-violet-500)', borderRadius: '4px' }}></div>
              <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--color-violet-500)', borderRadius: '4px' }}></div>
              <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--color-violet-500)', borderRadius: '4px' }}></div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: '14px', color: '#4b5563', marginBottom: '8px' }}>gap-6 (24px)</div>
            <div style={{ display: 'flex', gap: '24px' }}>
              <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--color-violet-500)', borderRadius: '4px' }}></div>
              <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--color-violet-500)', borderRadius: '4px' }}></div>
              <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--color-violet-500)', borderRadius: '4px' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const SpacingGuidelines: Story = {
  render: () => (
    <div style={{ maxWidth: '1024px' }}>
      <div style={{ maxWidth: 'none' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>Spacing Guidelines</h2>
        
        <h3 style={{ fontSize: '18px', fontWeight: 600, marginTop: '24px', marginBottom: '12px' }}>Common Patterns</h3>
        <ul style={{ paddingLeft: '24px', marginBottom: '24px', lineHeight: '1.75' }}>
          <li><strong>Tight spacing (2-4):</strong> Between related elements like icon and text</li>
          <li><strong>Normal spacing (4-6):</strong> Between form fields, list items</li>
          <li><strong>Comfortable spacing (6-8):</strong> Between sections, cards</li>
          <li><strong>Loose spacing (8-12):</strong> Between major sections</li>
        </ul>

        <h3 style={{ fontSize: '18px', fontWeight: 600, marginTop: '24px', marginBottom: '12px' }}>Component Spacing</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '24px 0' }}>
          <div style={{ backgroundColor: '#f9fafb', padding: '24px', borderRadius: '8px' }}>
            <div style={{ fontWeight: 500, marginBottom: '8px' }}>Card padding: p-6 (24px)</div>
            <div style={{ fontSize: '14px', color: '#4b5563' }}>Standard padding for card content</div>
          </div>
          <div style={{ backgroundColor: '#f9fafb', padding: '24px', borderRadius: '8px' }}>
            <div style={{ fontWeight: 500, marginBottom: '8px' }}>Button padding: px-4 py-2</div>
            <div style={{ fontSize: '14px', color: '#4b5563' }}>Horizontal 16px, Vertical 8px</div>
          </div>
          <div style={{ backgroundColor: '#f9fafb', padding: '24px', borderRadius: '8px' }}>
            <div style={{ fontWeight: 500, marginBottom: '8px' }}>Input padding: px-3 py-2</div>
            <div style={{ fontSize: '14px', color: '#4b5563' }}>Horizontal 12px, Vertical 8px</div>
          </div>
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: 600, marginTop: '24px', marginBottom: '12px' }}>Layout Spacing</h3>
        <ul style={{ paddingLeft: '24px', marginBottom: '24px', lineHeight: '1.75' }}>
          <li><strong>Container padding:</strong> px-4 (mobile), px-6 (tablet), px-8 (desktop)</li>
          <li><strong>Section spacing:</strong> py-12 to py-16</li>
          <li><strong>Content max-width:</strong> 1180px (--layout-containerMaxWidth)</li>
        </ul>
      </div>
    </div>
  ),
};
