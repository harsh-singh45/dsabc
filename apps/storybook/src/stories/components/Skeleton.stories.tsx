import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '@intelation/ui';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'rectangular', 'circular'],
      description: 'Shape variant of the skeleton',
    },
    animation: {
      control: 'select',
      options: ['pulse', 'wave', 'none'],
      description: 'Animation type',
    },
    width: {
      control: 'text',
      description: 'Width of the skeleton (number or string)',
    },
    height: {
      control: 'text',
      description: 'Height of the skeleton (number or string)',
    },
    lines: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Number of skeleton lines (text variant only)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

/**
 * Default skeleton with text variant and pulse animation.
 */
export const Default: Story = {
  args: {
    variant: 'text',
    animation: 'pulse',
  },
};

/**
 * Text skeleton variants showing single line with different animations.
 */
export const TextVariant: Story = {
  render: () => (
    <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', color: '#374151' }}>Pulse Animation</h4>
        <Skeleton variant="text" animation="pulse" />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', color: '#374151' }}>Wave Animation</h4>
        <Skeleton variant="text" animation="wave" />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', color: '#374151' }}>No Animation</h4>
        <Skeleton variant="text" animation="none" />
      </div>
    </div>
  ),
};

/**
 * Multiple lines of text skeletons for paragraph loading.
 */
export const MultipleLines: Story = {
  render: () => (
    <div style={{ width: '600px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', color: '#374151' }}>3 Lines</h4>
        <Skeleton variant="text" lines={3} />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', color: '#374151' }}>5 Lines</h4>
        <Skeleton variant="text" lines={5} animation="wave" />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', color: '#374151' }}>Custom Width</h4>
        <Skeleton variant="text" lines={4} width="80%" />
      </div>
    </div>
  ),
};

/**
 * Rectangular skeleton for cards, images, and content blocks.
 */
export const RectangularVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', color: '#374151' }}>Default</h4>
        <Skeleton variant="rectangular" width={200} height={150} />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', color: '#374151' }}>Square</h4>
        <Skeleton variant="rectangular" width={120} height={120} animation="wave" />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', color: '#374151' }}>Wide</h4>
        <Skeleton variant="rectangular" width={300} height={80} />
      </div>
    </div>
  ),
};

/**
 * Circular skeleton for avatars and icons.
 */
export const CircularVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', color: '#374151' }}>Small</h4>
        <Skeleton variant="circular" width={32} height={32} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', color: '#374151' }}>Medium</h4>
        <Skeleton variant="circular" width={48} height={48} animation="wave" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', color: '#374151' }}>Large</h4>
        <Skeleton variant="circular" width={80} height={80} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', color: '#374151' }}>Extra Large</h4>
        <Skeleton variant="circular" width={120} height={120} animation="wave" />
      </div>
    </div>
  ),
};

/**
 * Animation comparison showing all three animation types.
 */
export const AnimationTypes: Story = {
  render: () => (
    <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', color: '#374151' }}>Pulse (Default)</h4>
        <Skeleton variant="rectangular" width="100%" height={100} animation="pulse" />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', color: '#374151' }}>Wave</h4>
        <Skeleton variant="rectangular" width="100%" height={100} animation="wave" />
      </div>
      <div>
        <h4 style={{ marginBottom: '8px', fontSize: '14px', color: '#374151' }}>None</h4>
        <Skeleton variant="rectangular" width="100%" height={100} animation="none" />
      </div>
    </div>
  ),
};

/**
 * Loading state for a user card with avatar, name, and description.
 */
export const LoadingCard: Story = {
  render: () => (
    <div style={{ 
      width: '320px', 
      padding: '24px', 
      border: '1px solid #e5e7eb', 
      borderRadius: '8px',
      backgroundColor: '#fff'
    }}>
      <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
        <Skeleton variant="circular" width={64} height={64} />
        <div style={{ flex: 1 }}>
          <Skeleton variant="text" width="70%" height="24px" style={{ marginBottom: '8px' }} />
          <Skeleton variant="text" width="50%" height="16px" />
        </div>
      </div>
      <Skeleton variant="text" lines={3} />
    </div>
  ),
};

/**
 * Loading state for a data table with rows and columns.
 */
export const LoadingTable: Story = {
  render: () => (
    <div style={{ 
      width: '700px', 
      padding: '16px',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      backgroundColor: '#fff'
    }}>
      {/* Table Header */}
      <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', paddingBottom: '12px', borderBottom: '2px solid #e5e7eb' }}>
        <Skeleton variant="text" width="30%" height="20px" />
        <Skeleton variant="text" width="25%" height="20px" />
        <Skeleton variant="text" width="25%" height="20px" />
        <Skeleton variant="text" width="20%" height="20px" />
      </div>
      
      {/* Table Rows */}
      {[...Array(5)].map((_, index) => (
        <div key={index} style={{ display: 'flex', gap: '16px', marginBottom: '12px', alignItems: 'center' }}>
          <Skeleton variant="circular" width={32} height={32} />
          <Skeleton variant="text" width="25%" />
          <Skeleton variant="text" width="25%" />
          <Skeleton variant="text" width="20%" />
          <Skeleton variant="text" width="15%" />
        </div>
      ))}
    </div>
  ),
};

/**
 * Loading state for a list of items with icons and text.
 */
export const LoadingList: Story = {
  render: () => (
    <div style={{ 
      width: '400px',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      backgroundColor: '#fff',
      overflow: 'hidden'
    }}>
      {[...Array(6)].map((_, index) => (
        <div 
          key={index} 
          style={{ 
            display: 'flex', 
            gap: '16px', 
            padding: '16px',
            alignItems: 'center',
            borderBottom: index < 5 ? '1px solid #e5e7eb' : 'none'
          }}
        >
          <Skeleton variant="circular" width={40} height={40} />
          <div style={{ flex: 1 }}>
            <Skeleton variant="text" width="60%" height="18px" style={{ marginBottom: '6px' }} />
            <Skeleton variant="text" width="80%" height="14px" />
          </div>
          <Skeleton variant="rectangular" width={60} height={24} />
        </div>
      ))}
    </div>
  ),
};

/**
 * Loading state for an image gallery grid.
 */
export const LoadingGallery: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(3, 1fr)', 
      gap: '16px',
      width: '600px'
    }}>
      {[...Array(6)].map((_, index) => (
        <div key={index}>
          <Skeleton variant="rectangular" width="100%" height={150} animation="wave" />
          <Skeleton variant="text" width="80%" height="16px" style={{ marginTop: '8px' }} />
          <Skeleton variant="text" width="60%" height="14px" style={{ marginTop: '4px' }} />
        </div>
      ))}
    </div>
  ),
};

/**
 * Loading state for a dashboard with stat cards.
 */
export const LoadingDashboard: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(3, 1fr)', 
      gap: '24px',
      width: '700px'
    }}>
      {[...Array(3)].map((_, index) => (
        <div 
          key={index}
          style={{ 
            padding: '24px',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            backgroundColor: '#fff'
          }}
        >
          <Skeleton variant="text" width="50%" height="16px" style={{ marginBottom: '12px' }} />
          <Skeleton variant="text" width="70%" height="32px" style={{ marginBottom: '16px' }} />
          <Skeleton variant="rectangular" width="100%" height={80} animation="wave" />
        </div>
      ))}
    </div>
  ),
};

/**
 * Article loading skeleton with header, metadata, and content.
 */
export const LoadingArticle: Story = {
  render: () => (
    <div style={{ width: '700px', padding: '32px', backgroundColor: '#fff' }}>
      {/* Title */}
      <Skeleton variant="text" width="80%" height="36px" style={{ marginBottom: '16px' }} />
      
      {/* Metadata */}
      <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', alignItems: 'center' }}>
        <Skeleton variant="circular" width={40} height={40} />
        <div style={{ flex: 1 }}>
          <Skeleton variant="text" width="30%" height="16px" style={{ marginBottom: '4px' }} />
          <Skeleton variant="text" width="20%" height="14px" />
        </div>
      </div>
      
      {/* Featured Image */}
      <Skeleton variant="rectangular" width="100%" height={300} animation="wave" style={{ marginBottom: '24px' }} />
      
      {/* Content */}
      <Skeleton variant="text" lines={8} />
    </div>
  ),
};

/**
 * Form loading skeleton with fields.
 */
export const LoadingForm: Story = {
  render: () => (
    <div style={{ 
      width: '500px', 
      padding: '24px',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      backgroundColor: '#fff'
    }}>
      {[...Array(4)].map((_, index) => (
        <div key={index} style={{ marginBottom: '24px' }}>
          <Skeleton variant="text" width="30%" height="16px" style={{ marginBottom: '8px' }} />
          <Skeleton variant="rectangular" width="100%" height={40} />
        </div>
      ))}
      
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '32px' }}>
        <Skeleton variant="rectangular" width={100} height={40} />
        <Skeleton variant="rectangular" width={100} height={40} />
      </div>
    </div>
  ),
};

/**
 * Playground for interactive testing with all controls.
 */
export const Playground: Story = {
  args: {
    variant: 'text',
    animation: 'pulse',
    width: '100%',
    lines: 1,
  },
  render: (args) => (
    <div style={{ width: '400px' }}>
      <Skeleton {...args} />
    </div>
  ),
};
