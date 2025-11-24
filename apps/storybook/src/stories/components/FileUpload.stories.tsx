import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload } from '@intelation/ui';
import { useState } from 'react';

const meta = {
  title: 'File Management/FileUpload',
  component: FileUpload,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'FileUpload component with drag-and-drop support, file validation, progress tracking, and preview thumbnails. Essential for document upload workflows in the Intelation Platform.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    accept: {
      control: 'object',
      description: 'Accepted file types (MIME types)',
    },
    maxFiles: {
      control: 'number',
      description: 'Maximum number of files',
    },
    maxSize: {
      control: 'number',
      description: 'Maximum file size in bytes',
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple file selection',
    },
    dragAndDrop: {
      control: 'boolean',
      description: 'Enable drag and drop',
    },
    showPreview: {
      control: 'boolean',
      description: 'Show preview thumbnails for images',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    multiple: true,
    dragAndDrop: true,
    showPreview: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

// Single file upload
export const SingleFile: Story = {
  args: {
    multiple: false,
    dragAndDrop: true,
    showPreview: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

// With file type restrictions
export const WithFileTypes: Story = {
  args: {
    accept: ['image/png', 'image/jpeg', 'application/pdf'],
    multiple: true,
    dragAndDrop: true,
    showPreview: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

// With size limit
export const WithSizeLimit: Story = {
  args: {
    maxSize: 5 * 1024 * 1024, // 5MB
    multiple: true,
    dragAndDrop: true,
    showPreview: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

// With max files limit
export const WithMaxFiles: Story = {
  args: {
    maxFiles: 3,
    multiple: true,
    dragAndDrop: true,
    showPreview: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

// Without drag and drop
export const WithoutDragDrop: Story = {
  args: {
    multiple: true,
    dragAndDrop: false,
    showPreview: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

// Without preview
export const WithoutPreview: Story = {
  args: {
    multiple: true,
    dragAndDrop: true,
    showPreview: false,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

// Disabled state
export const Disabled: Story = {
  args: {
    multiple: true,
    dragAndDrop: true,
    showPreview: true,
    disabled: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

// With upload simulation
export const WithUpload: Story = {
  render: () => {
    const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

    const handleUpload = async (file: File) => {
      // Simulate upload delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // Random success/failure for demo
      if (Math.random() > 0.3) {
        setUploadedFiles((prev) => [...prev, file.name]);
      } else {
        throw new Error('Network error - upload failed');
      }
    };

    return (
      <div style={{ width: '600px' }}>
        <FileUpload
          multiple
          dragAndDrop
          showPreview
          onUpload={handleUpload}
          onUploadComplete={(results) => {
            console.log('Upload complete:', results);
          }}
        />
        {uploadedFiles.length > 0 && (
          <div style={{ marginTop: '1rem', padding: '1rem', background: '#f0fdf4', borderRadius: '0.5rem' }}>
            <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '14px', fontWeight: 600 }}>Uploaded Files:</h4>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '13px' }}>
              {uploadedFiles.map((name, idx) => (
                <li key={idx}>{name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  },
};

// With callbacks
export const WithCallbacks: Story = {
  render: () => {
    const handleFilesSelected = (files: File[]) => {
      console.log('Files selected:', files);
      alert(`${files.length} file(s) selected:\n${files.map(f => f.name).join('\n')}`);
    };

    const handleFileRemove = (fileId: string) => {
      console.log('File removed:', fileId);
    };

    return (
      <div style={{ width: '600px' }}>
        <FileUpload
          multiple
          dragAndDrop
          showPreview
          onFilesSelected={handleFilesSelected}
          onFileRemove={handleFileRemove}
        />
        <p style={{ marginTop: '1rem', fontSize: '13px', color: '#6b7280' }}>
          Open browser console to see callbacks
        </p>
      </div>
    );
  },
};

// Document anonymization use case
export const DocumentAnonymization: Story = {
  render: () => {
    const [processedDocs, setProcessedDocs] = useState<string[]>([]);

    const handleUpload = async (file: File) => {
      // Simulate document processing
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setProcessedDocs((prev) => [...prev, file.name]);
    };

    return (
      <div style={{ width: '700px' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '18px', fontWeight: 600 }}>
            Document Anonymization Upload
          </h3>
          <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>
            Upload documents for PII detection and anonymization processing
          </p>
        </div>

        <FileUpload
          accept={[
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'text/plain',
          ]}
          maxSize={10 * 1024 * 1024} // 10MB
          maxFiles={10}
          multiple
          dragAndDrop
          showPreview={false}
          onUpload={handleUpload}
        />

        {processedDocs.length > 0 && (
          <div style={{ 
            marginTop: '1.5rem', 
            padding: '1rem', 
            background: 'linear-gradient(135deg, rgba(105, 108, 255, 0.08) 0%, rgba(105, 108, 255, 0.16) 100%)',
            borderRadius: '0.5rem',
            border: '1px solid rgba(105, 108, 255, 0.2)'
          }}>
            <h4 style={{ margin: '0 0 0.75rem 0', fontSize: '14px', fontWeight: 600, color: '#696CFF' }}>
              ✓ Processed Documents ({processedDocs.length})
            </h4>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '13px', color: '#4b5563' }}>
              {processedDocs.map((name, idx) => (
                <li key={idx} style={{ marginBottom: '0.25rem' }}>{name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  },
};

// Compliance file upload
export const ComplianceFileUpload: Story = {
  render: () => {
    return (
      <div style={{ width: '700px' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '18px', fontWeight: 600 }}>
            Compliance Evidence Upload
          </h3>
          <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>
            Upload supporting documents for compliance framework audits (GDPR, HIPAA, SOC 2)
          </p>
        </div>

        <FileUpload
          accept={[
            'application/pdf',
            'image/png',
            'image/jpeg',
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          ]}
          maxSize={25 * 1024 * 1024} // 25MB
          maxFiles={20}
          multiple
          dragAndDrop
          showPreview
        />

        <div style={{ 
          marginTop: '1.5rem', 
          padding: '1rem', 
          background: '#fef9c3',
          borderRadius: '0.5rem',
          border: '1px solid #fde047'
        }}>
          <p style={{ margin: 0, fontSize: '13px', color: '#854d0e' }}>
            <strong>Note:</strong> All uploaded files will be encrypted and stored securely in compliance with data protection regulations.
          </p>
        </div>
      </div>
    );
  },
};

// Image upload with preview
export const ImageUpload: Story = {
  args: {
    accept: ['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
    multiple: true,
    dragAndDrop: true,
    showPreview: true,
    maxSize: 5 * 1024 * 1024, // 5MB
  },
  decorators: [
    (Story) => (
      <div style={{ width: '600px' }}>
        <div style={{ marginBottom: '1rem' }}>
          <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '16px', fontWeight: 600 }}>
            Image Upload
          </h3>
          <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>
            Upload images with thumbnail preview
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
};

// Playground
export const Playground: Story = {
  args: {
    accept: undefined,
    maxFiles: undefined,
    maxSize: undefined,
    multiple: true,
    dragAndDrop: true,
    showPreview: true,
    disabled: false,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '600px' }}>
        <Story />
      </div>
    ),
  ],
};
