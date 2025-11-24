import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '@intelation/ui';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    children: 'This is an informational alert message.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success!',
    children: 'Your operation completed successfully.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    children: 'Please review this important warning message.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    children: 'An error occurred. Please try again.',
  },
};

export const Dismissible: Story = {
  args: {
    variant: 'info',
    title: 'Dismissible Alert',
    dismissible: true,
    children: 'Click the X button to dismiss this alert.',
  },
};

export const WithActions: Story = {
  args: {
    variant: 'warning',
    title: 'Action Required',
    children: 'Your subscription is about to expire.',
    actions: (
      <>
        <button style={{ padding: '4px 12px', border: '1px solid', borderRadius: '4px', cursor: 'pointer' }}>
          Renew Now
        </button>
        <button style={{ padding: '4px 12px', border: '1px solid', borderRadius: '4px', cursor: 'pointer', background: 'transparent' }}>
          Remind Later
        </button>
      </>
    ),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert variant="info" title="Information">This is an info alert.</Alert>
      <Alert variant="success" title="Success">Operation completed successfully.</Alert>
      <Alert variant="warning" title="Warning">Please be careful with this action.</Alert>
      <Alert variant="error" title="Error">Something went wrong.</Alert>
    </div>
  ),
};
