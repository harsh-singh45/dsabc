import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '@intelation/ui';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    trigger: {
      control: 'select',
      options: ['hover', 'click', 'focus'],
    },
    theme: {
      control: 'select',
      options: ['dark', 'light'],
    },
    delay: {
      control: 'number',
    },
    maxWidth: {
      control: 'number',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'This is a helpful tooltip',
    children: <button style={{ padding: '8px 16px', cursor: 'pointer' }}>Hover me</button>,
  },
};

export const Positions = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Tooltip content="Top tooltip" position="top">
        <button style={{ padding: '8px 16px', cursor: 'pointer' }}>Top</button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" position="bottom">
        <button style={{ padding: '8px 16px', cursor: 'pointer' }}>Bottom</button>
      </Tooltip>
      <Tooltip content="Left tooltip" position="left">
        <button style={{ padding: '8px 16px', cursor: 'pointer' }}>Left</button>
      </Tooltip>
      <Tooltip content="Right tooltip" position="right">
        <button style={{ padding: '8px 16px', cursor: 'pointer' }}>Right</button>
      </Tooltip>
    </div>
  ),
};

export const Triggers = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Tooltip content="Appears on hover" trigger="hover">
        <button style={{ padding: '8px 16px', cursor: 'pointer' }}>Hover trigger</button>
      </Tooltip>
      <Tooltip content="Appears on click" trigger="click">
        <button style={{ padding: '8px 16px', cursor: 'pointer' }}>Click trigger</button>
      </Tooltip>
      <Tooltip content="Appears on focus" trigger="focus">
        <button style={{ padding: '8px 16px', cursor: 'pointer' }}>Focus trigger</button>
      </Tooltip>
    </div>
  ),
};

export const Themes = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Tooltip content="Dark theme tooltip" theme="dark">
        <button style={{ padding: '8px 16px', cursor: 'pointer' }}>Dark theme</button>
      </Tooltip>
      <Tooltip content="Light theme tooltip" theme="light">
        <button style={{ padding: '8px 16px', cursor: 'pointer' }}>Light theme</button>
      </Tooltip>
    </div>
  ),
};

export const WithDelay = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Tooltip content="No delay" delay={0}>
        <button style={{ padding: '8px 16px', cursor: 'pointer' }}>No delay</button>
      </Tooltip>
      <Tooltip content="200ms delay" delay={200}>
        <button style={{ padding: '8px 16px', cursor: 'pointer' }}>200ms delay</button>
      </Tooltip>
      <Tooltip content="500ms delay" delay={500}>
        <button style={{ padding: '8px 16px', cursor: 'pointer' }}>500ms delay</button>
      </Tooltip>
    </div>
  ),
};

export const CustomMaxWidth = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Tooltip 
        content="This is a very long tooltip text that will wrap based on the maxWidth setting. It demonstrates how content adapts to width constraints."
        maxWidth={150}
      >
        <button style={{ padding: '8px 16px', cursor: 'pointer' }}>MaxWidth: 150px</button>
      </Tooltip>
      <Tooltip 
        content="This is a very long tooltip text that will wrap based on the maxWidth setting. It demonstrates how content adapts to width constraints."
        maxWidth={300}
      >
        <button style={{ padding: '8px 16px', cursor: 'pointer' }}>MaxWidth: 300px</button>
      </Tooltip>
    </div>
  ),
};

export const RichContent = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Tooltip 
        content={
          <div>
            <strong>Compliance Status</strong>
            <div style={{ marginTop: '4px' }}>
              <div>✓ GDPR Compliant</div>
              <div>✓ HIPAA Compliant</div>
              <div>✗ SOC 2 Pending</div>
            </div>
          </div>
        }
      >
        <button style={{ padding: '8px 16px', cursor: 'pointer' }}>View compliance</button>
      </Tooltip>
      
      <Tooltip 
        content={
          <div>
            <div style={{ fontWeight: 600, marginBottom: '4px' }}>Entity Details</div>
            <div style={{ fontSize: '12px' }}>
              <div>Type: PII</div>
              <div>Location: EU</div>
              <div>Status: Active</div>
            </div>
          </div>
        }
      >
        <button style={{ padding: '8px 16px', cursor: 'pointer' }}>Entity info</button>
      </Tooltip>
    </div>
  ),
};

export const DisabledState = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Tooltip content="This tooltip is enabled">
        <button style={{ padding: '8px 16px', cursor: 'pointer' }}>Enabled tooltip</button>
      </Tooltip>
      <Tooltip content="This tooltip is disabled" disabled>
        <button style={{ padding: '8px 16px', cursor: 'not-allowed', opacity: 0.5 }}>Disabled tooltip</button>
      </Tooltip>
    </div>
  ),
};

export const IntelationUseCases = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      <div>
        <h3 style={{ marginBottom: '12px' }}>File Processing Status</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Tooltip content="Processing: 45% complete" position="top">
            <span style={{ padding: '4px 12px', background: '#fef9c3', borderRadius: '4px', cursor: 'help' }}>
              ⏳ Processing
            </span>
          </Tooltip>
          <Tooltip content="Anonymization completed successfully" position="top">
            <span style={{ padding: '4px 12px', background: '#dcfce7', borderRadius: '4px', cursor: 'help' }}>
              ✓ Completed
            </span>
          </Tooltip>
          <Tooltip content="Error: File format not supported" position="top">
            <span style={{ padding: '4px 12px', background: '#fee2e2', borderRadius: '4px', cursor: 'help' }}>
              ✗ Error
            </span>
          </Tooltip>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '12px' }}>Entity Type Indicators</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Tooltip 
            content={
              <div>
                <strong>Personal Identifiable Information</strong>
                <div style={{ marginTop: '4px', fontSize: '12px' }}>
                  Includes names, emails, phone numbers, addresses
                </div>
              </div>
            }
            maxWidth={250}
          >
            <span style={{ padding: '4px 12px', background: '#dbeafe', borderRadius: '4px', cursor: 'help' }}>
              PII
            </span>
          </Tooltip>
          <Tooltip 
            content={
              <div>
                <strong>Location Data</strong>
                <div style={{ marginTop: '4px', fontSize: '12px' }}>
                  GPS coordinates, addresses, geolocation
                </div>
              </div>
            }
            maxWidth={250}
          >
            <span style={{ padding: '4px 12px', background: '#fef3c7', borderRadius: '4px', cursor: 'help' }}>
              Location
            </span>
          </Tooltip>
          <Tooltip 
            content={
              <div>
                <strong>Contact Information</strong>
                <div style={{ marginTop: '4px', fontSize: '12px' }}>
                  Email addresses, phone numbers, social media
                </div>
              </div>
            }
            maxWidth={250}
          >
            <span style={{ padding: '4px 12px', background: '#e9d5ff', borderRadius: '4px', cursor: 'help' }}>
              Contact
            </span>
          </Tooltip>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '12px' }}>Compliance Framework Help</h3>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Tooltip 
            content="General Data Protection Regulation - EU data protection law"
            trigger="hover"
          >
            <button style={{ padding: '8px 16px', cursor: 'help', background: 'transparent', border: '1px solid #ccc', borderRadius: '4px' }}>
              What is GDPR?
            </button>
          </Tooltip>
          <Tooltip 
            content="Health Insurance Portability and Accountability Act - US healthcare data protection"
            trigger="hover"
          >
            <button style={{ padding: '8px 16px', cursor: 'help', background: 'transparent', border: '1px solid #ccc', borderRadius: '4px' }}>
              What is HIPAA?
            </button>
          </Tooltip>
          <Tooltip 
            content="California Consumer Privacy Act - California state privacy law"
            trigger="hover"
          >
            <button style={{ padding: '8px 16px', cursor: 'help', background: 'transparent', border: '1px solid #ccc', borderRadius: '4px' }}>
              What is CCPA?
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    content: 'Customize this tooltip',
    position: 'top',
    trigger: 'hover',
    theme: 'dark',
    delay: 0,
    maxWidth: 200,
    disabled: false,
    children: <button style={{ padding: '8px 16px', cursor: 'pointer' }}>Interact with me</button>,
  },
};
