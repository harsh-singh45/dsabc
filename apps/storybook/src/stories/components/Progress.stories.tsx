import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '@intelation/ui';

const meta = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress value (0-100) for determinate mode',
    },
    variant: {
      control: 'select',
      options: ['linear', 'circular'],
      description: 'Visual variant of the progress indicator',
    },
    mode: {
      control: 'select',
      options: ['determinate', 'indeterminate'],
      description: 'Mode of the progress indicator',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the progress indicator',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success'],
      description: 'Color variant',
    },
    showLabel: {
      control: 'boolean',
      description: 'Whether to show the percentage label',
    },
    label: {
      control: 'text',
      description: 'Custom label text',
    },
    thickness: {
      control: { type: 'range', min: 2, max: 10, step: 1 },
      description: 'Stroke thickness for circular variant',
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
    variant: 'linear',
    size: 'md',
    color: 'primary',
  },
  render: (args) => (
    <div style={{ width: '400px' }}>
      <Progress {...args} />
    </div>
  ),
};

export const LinearVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '400px' }}>
      <div>
        <p style={{ marginBottom: '0.5rem', fontSize: '14px', color: '#6b7280' }}>0% Complete</p>
        <Progress value={0} />
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem', fontSize: '14px', color: '#6b7280' }}>30% Complete</p>
        <Progress value={30} />
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem', fontSize: '14px', color: '#6b7280' }}>60% Complete</p>
        <Progress value={60} />
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem', fontSize: '14px', color: '#6b7280' }}>100% Complete</p>
        <Progress value={100} />
      </div>
    </div>
  ),
};

export const LinearIndeterminate: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <p style={{ marginBottom: '0.5rem', fontSize: '14px', color: '#6b7280' }}>Loading...</p>
      <Progress mode="indeterminate" />
    </div>
  ),
};

export const LinearSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '400px' }}>
      <div>
        <p style={{ marginBottom: '0.5rem', fontSize: '14px', color: '#6b7280' }}>Small (4px height)</p>
        <Progress value={60} size="sm" />
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem', fontSize: '14px', color: '#6b7280' }}>Medium (8px height)</p>
        <Progress value={60} size="md" />
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem', fontSize: '14px', color: '#6b7280' }}>Large (12px height)</p>
        <Progress value={60} size="lg" />
      </div>
    </div>
  ),
};

export const LinearColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '400px' }}>
      <div>
        <p style={{ marginBottom: '0.5rem', fontSize: '14px', color: '#6b7280' }}>Primary</p>
        <Progress value={70} color="primary" />
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem', fontSize: '14px', color: '#6b7280' }}>Secondary</p>
        <Progress value={70} color="secondary" />
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem', fontSize: '14px', color: '#6b7280' }}>Success</p>
        <Progress value={70} color="success" />
      </div>
    </div>
  ),
};

export const CircularVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
      <div style={{ textAlign: 'center' }}>
        <Progress value={0} variant="circular" />
        <p style={{ marginTop: '0.5rem', fontSize: '14px', color: '#6b7280' }}>0%</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Progress value={25} variant="circular" />
        <p style={{ marginTop: '0.5rem', fontSize: '14px', color: '#6b7280' }}>25%</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Progress value={50} variant="circular" />
        <p style={{ marginTop: '0.5rem', fontSize: '14px', color: '#6b7280' }}>50%</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Progress value={75} variant="circular" />
        <p style={{ marginTop: '0.5rem', fontSize: '14px', color: '#6b7280' }}>75%</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Progress value={100} variant="circular" />
        <p style={{ marginTop: '0.5rem', fontSize: '14px', color: '#6b7280' }}>100%</p>
      </div>
    </div>
  ),
};

export const CircularIndeterminate: Story = {
  render: () => (
    <div style={{ textAlign: 'center' }}>
      <Progress mode="indeterminate" variant="circular" />
      <p style={{ marginTop: '0.5rem', fontSize: '14px', color: '#6b7280' }}>Loading...</p>
    </div>
  ),
};

export const CircularSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Progress value={60} variant="circular" size="sm" />
        <p style={{ marginTop: '0.5rem', fontSize: '14px', color: '#6b7280' }}>Small (32px)</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Progress value={60} variant="circular" size="md" />
        <p style={{ marginTop: '0.5rem', fontSize: '14px', color: '#6b7280' }}>Medium (48px)</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Progress value={60} variant="circular" size="lg" />
        <p style={{ marginTop: '0.5rem', fontSize: '14px', color: '#6b7280' }}>Large (64px)</p>
      </div>
    </div>
  ),
};

export const CircularColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
      <div style={{ textAlign: 'center' }}>
        <Progress value={70} variant="circular" color="primary" />
        <p style={{ marginTop: '0.5rem', fontSize: '14px', color: '#6b7280' }}>Primary</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Progress value={70} variant="circular" color="secondary" />
        <p style={{ marginTop: '0.5rem', fontSize: '14px', color: '#6b7280' }}>Secondary</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Progress value={70} variant="circular" color="success" />
        <p style={{ marginTop: '0.5rem', fontSize: '14px', color: '#6b7280' }}>Success</p>
      </div>
    </div>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', width: '400px' }}>
      <div>
        <p style={{ marginBottom: '1rem', fontSize: '14px', fontWeight: 600 }}>Linear with percentage</p>
        <Progress value={65} showLabel />
      </div>
      <div>
        <p style={{ marginBottom: '1rem', fontSize: '14px', fontWeight: 600 }}>Linear with custom label</p>
        <Progress value={45} label="Uploading files..." />
      </div>
      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: '1rem', fontSize: '14px', fontWeight: 600 }}>Circular with percentage</p>
          <Progress value={80} variant="circular" showLabel size="lg" />
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: '1rem', fontSize: '14px', fontWeight: 600 }}>Circular with custom label</p>
          <Progress value={60} variant="circular" label="60%" size="lg" />
        </div>
      </div>
    </div>
  ),
};

export const CircularThickness: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Progress value={70} variant="circular" size="lg" thickness={2} />
        <p style={{ marginTop: '0.5rem', fontSize: '14px', color: '#6b7280' }}>Thickness: 2px</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Progress value={70} variant="circular" size="lg" thickness={4} />
        <p style={{ marginTop: '0.5rem', fontSize: '14px', color: '#6b7280' }}>Thickness: 4px (default)</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Progress value={70} variant="circular" size="lg" thickness={8} />
        <p style={{ marginTop: '0.5rem', fontSize: '14px', color: '#6b7280' }}>Thickness: 8px</p>
      </div>
    </div>
  ),
};

export const IntelationUseCases: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', width: '500px' }}>
      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '16px', fontWeight: 600 }}>File Upload Progress</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#6b7280' }}>
            <span>document.pdf</span>
            <span>2.4 MB</span>
          </div>
          <Progress value={73} size="lg" color="primary" showLabel />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '16px', fontWeight: 600 }}>Anonymization Processing</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Progress mode="indeterminate" variant="circular" size="lg" color="primary" />
          <div>
            <p style={{ fontSize: '14px', fontWeight: 500 }}>Analyzing document...</p>
            <p style={{ fontSize: '13px', color: '#6b7280', marginTop: '0.25rem' }}>
              Detecting PII entities
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '16px', fontWeight: 600 }}>Report Generation</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#6b7280' }}>
            <span>Compliance Report Q4 2025</span>
            <span>Complete</span>
          </div>
          <Progress value={100} size="md" color="success" showLabel />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', fontSize: '16px', fontWeight: 600 }}>Batch Processing Status</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '0.5rem' }}>
              <span>Files processed</span>
              <span style={{ fontWeight: 500 }}>42 / 100</span>
            </div>
            <Progress value={42} size="md" color="primary" />
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '0.5rem' }}>
              <span>Entities detected</span>
              <span style={{ fontWeight: 500 }}>1,247</span>
            </div>
            <Progress value={68} size="md" color="success" />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    value: 65,
    variant: 'linear',
    mode: 'determinate',
    size: 'md',
    color: 'primary',
    showLabel: false,
    label: '',
    thickness: 4,
  },
  render: (args) => (
    <div style={{ width: args.variant === 'linear' ? '400px' : 'auto' }}>
      <Progress {...args} />
    </div>
  ),
};
