import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from '@intelation/ui';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'Modal size',
    },
    title: {
      control: 'text',
      description: 'Modal title',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Show close button',
    },
    closeOnOutsideClick: {
      control: 'boolean',
      description: 'Close when clicking outside modal',
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'Close when pressing Escape key',
    },
    open: {
      control: 'boolean',
      description: 'Modal open state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

// Helper component for interactive stories
const ModalExample = ({ children, ...props }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          padding: '10px 20px',
          backgroundColor: 'var(--color-primary)',
          color: 'white',
          border: 'none',
          borderRadius: 'var(--borderRadius-md)',
          cursor: 'pointer',
          fontSize: 'var(--fontSize-base)',
          fontWeight: 'var(--fontWeight-medium)',
        }}
      >
        Open Modal
      </button>
      <Modal {...props} open={open} onClose={() => setOpen(false)}>
        {children}
      </Modal>
    </>
  );
};

// Default story
export const Default: Story = {
  render: () => (
    <ModalExample title="Default Modal">
      <p style={{ margin: 0 }}>This is a basic modal with default settings.</p>
    </ModalExample>
  ),
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <ModalExample size="sm" title="Small Modal">
        <p style={{ margin: 0 }}>Small modal (400px max width)</p>
      </ModalExample>
      <ModalExample size="md" title="Medium Modal">
        <p style={{ margin: 0 }}>Medium modal (600px max width)</p>
      </ModalExample>
      <ModalExample size="lg" title="Large Modal">
        <p style={{ margin: 0 }}>Large modal (800px max width)</p>
      </ModalExample>
      <ModalExample size="xl" title="Extra Large Modal">
        <p style={{ margin: 0 }}>Extra large modal (1000px max width)</p>
      </ModalExample>
      <ModalExample size="full" title="Full Size Modal">
        <p style={{ margin: 0 }}>Full size modal (95vw max width)</p>
      </ModalExample>
    </div>
  ),
};

// With Footer
export const WithFooter: Story = {
  render: () => {
    const FooterExample = () => {
      const [open, setOpen] = useState(false);

      return (
        <>
          <button
            onClick={() => setOpen(true)}
            style={{
              padding: '10px 20px',
              backgroundColor: 'var(--color-primary)',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--borderRadius-md)',
              cursor: 'pointer',
              fontSize: 'var(--fontSize-base)',
              fontWeight: 'var(--fontWeight-medium)',
            }}
          >
            Open Modal with Footer
          </button>
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            title="Confirm Action"
            footer={
              <>
                <button
                  onClick={() => setOpen(false)}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: 'transparent',
                    color: 'var(--color-text-secondary)',
                    border: '1px solid var(--color-border-primary)',
                    borderRadius: 'var(--borderRadius-md)',
                    cursor: 'pointer',
                    fontSize: 'var(--fontSize-sm)',
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    alert('Confirmed!');
                    setOpen(false);
                  }}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: 'var(--color-primary)',
                    color: 'white',
                    border: 'none',
                    borderRadius: 'var(--borderRadius-md)',
                    cursor: 'pointer',
                    fontSize: 'var(--fontSize-sm)',
                    fontWeight: 'var(--fontWeight-medium)',
                  }}
                >
                  Confirm
                </button>
              </>
            }
          >
            <p style={{ margin: 0 }}>Are you sure you want to proceed with this action?</p>
          </Modal>
        </>
      );
    };

    return <FooterExample />;
  },
};

// Without Close Button
export const WithoutCloseButton: Story = {
  render: () => (
    <ModalExample title="No Close Button" showCloseButton={false}>
      <p style={{ margin: 0 }}>
        This modal doesn't have a close button. You can still close it by clicking outside or
        pressing Escape.
      </p>
    </ModalExample>
  ),
};

// Prevent Outside Click
export const PreventOutsideClick: Story = {
  render: () => (
    <ModalExample
      title="Prevent Outside Click"
      closeOnOutsideClick={false}
      closeOnEscape={false}
    >
      <p style={{ margin: 0 }}>
        This modal can only be closed using the close button. Clicking outside or pressing Escape
        won't work.
      </p>
    </ModalExample>
  ),
};

// Scrollable Content
export const ScrollableContent: Story = {
  render: () => (
    <ModalExample title="Scrollable Content" size="md">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <p>This modal has a lot of content that requires scrolling.</p>
        {Array.from({ length: 30 }, (_, i) => (
          <p key={i} style={{ margin: 0 }}>
            Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        ))}
      </div>
    </ModalExample>
  ),
};

// Form Example
export const FormExample: Story = {
  render: () => {
    const FormModalExample = () => {
      const [open, setOpen] = useState(false);
      const [formData, setFormData] = useState({ name: '', email: '', message: '' });

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Form submitted:\n${JSON.stringify(formData, null, 2)}`);
        setOpen(false);
        setFormData({ name: '', email: '', message: '' });
      };

      return (
        <>
          <button
            onClick={() => setOpen(true)}
            style={{
              padding: '10px 20px',
              backgroundColor: 'var(--color-primary)',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--borderRadius-md)',
              cursor: 'pointer',
              fontSize: 'var(--fontSize-base)',
              fontWeight: 'var(--fontWeight-medium)',
            }}
          >
            Open Form Modal
          </button>
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            title="Contact Form"
            size="md"
            footer={
              <>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: 'transparent',
                    color: 'var(--color-text-secondary)',
                    border: '1px solid var(--color-border-primary)',
                    borderRadius: 'var(--borderRadius-md)',
                    cursor: 'pointer',
                    fontSize: 'var(--fontSize-sm)',
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  form="contact-form"
                  style={{
                    padding: '8px 16px',
                    backgroundColor: 'var(--color-primary)',
                    color: 'white',
                    border: 'none',
                    borderRadius: 'var(--borderRadius-md)',
                    cursor: 'pointer',
                    fontSize: 'var(--fontSize-sm)',
                    fontWeight: 'var(--fontWeight-medium)',
                  }}
                >
                  Submit
                </button>
              </>
            }
          >
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <div>
                <label
                  htmlFor="name"
                  style={{
                    display: 'block',
                    marginBottom: '4px',
                    fontSize: 'var(--fontSize-sm)',
                    fontWeight: 'var(--fontWeight-medium)',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid var(--color-border-primary)',
                    borderRadius: 'var(--borderRadius-md)',
                    fontSize: 'var(--fontSize-base)',
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  style={{
                    display: 'block',
                    marginBottom: '4px',
                    fontSize: 'var(--fontSize-sm)',
                    fontWeight: 'var(--fontWeight-medium)',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid var(--color-border-primary)',
                    borderRadius: 'var(--borderRadius-md)',
                    fontSize: 'var(--fontSize-base)',
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: 'block',
                    marginBottom: '4px',
                    fontSize: 'var(--fontSize-sm)',
                    fontWeight: 'var(--fontWeight-medium)',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid var(--color-border-primary)',
                    borderRadius: 'var(--borderRadius-md)',
                    fontSize: 'var(--fontSize-base)',
                    resize: 'vertical',
                  }}
                />
              </div>
            </form>
          </Modal>
        </>
      );
    };

    return <FormModalExample />;
  },
};

// Confirmation Dialog
export const ConfirmationDialog: Story = {
  render: () => {
    const ConfirmExample = () => {
      const [open, setOpen] = useState(false);

      return (
        <>
          <button
            onClick={() => setOpen(true)}
            style={{
              padding: '10px 20px',
              backgroundColor: 'var(--color-danger)',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--borderRadius-md)',
              cursor: 'pointer',
              fontSize: 'var(--fontSize-base)',
              fontWeight: 'var(--fontWeight-medium)',
            }}
          >
            Delete Item
          </button>
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            title="Confirm Deletion"
            size="sm"
            footer={
              <>
                <button
                  onClick={() => setOpen(false)}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: 'transparent',
                    color: 'var(--color-text-secondary)',
                    border: '1px solid var(--color-border-primary)',
                    borderRadius: 'var(--borderRadius-md)',
                    cursor: 'pointer',
                    fontSize: 'var(--fontSize-sm)',
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    alert('Item deleted!');
                    setOpen(false);
                  }}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: 'var(--color-danger)',
                    color: 'white',
                    border: 'none',
                    borderRadius: 'var(--borderRadius-md)',
                    cursor: 'pointer',
                    fontSize: 'var(--fontSize-sm)',
                    fontWeight: 'var(--fontWeight-medium)',
                  }}
                >
                  Delete
                </button>
              </>
            }
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p style={{ margin: 0, color: 'var(--color-text-primary)' }}>
                Are you sure you want to delete this item? This action cannot be undone.
              </p>
              <div
                style={{
                  padding: '12px',
                  backgroundColor: 'var(--color-background-secondary)',
                  borderRadius: 'var(--borderRadius-md)',
                  fontSize: 'var(--fontSize-sm)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                <strong>Warning:</strong> All associated data will be permanently removed.
              </div>
            </div>
          </Modal>
        </>
      );
    };

    return <ConfirmExample />;
  },
};

// Playground
export const Playground: Story = {
  args: {
    open: true,
    title: 'Modal Title',
    size: 'md',
    showCloseButton: true,
    closeOnOutsideClick: true,
    closeOnEscape: true,
    children: <p style={{ margin: 0 }}>Modal content goes here...</p>,
  },
  render: (args) => {
    const PlaygroundExample = () => {
      const [open, setOpen] = useState(false);

      return (
        <>
          <button
            onClick={() => setOpen(true)}
            style={{
              padding: '10px 20px',
              backgroundColor: 'var(--color-primary)',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--borderRadius-md)',
              cursor: 'pointer',
              fontSize: 'var(--fontSize-base)',
              fontWeight: 'var(--fontWeight-medium)',
            }}
          >
            Open Modal
          </button>
          <Modal {...args} open={open} onClose={() => setOpen(false)} />
        </>
      );
    };

    return <PlaygroundExample />;
  },
};
