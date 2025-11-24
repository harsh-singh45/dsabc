import type { Meta, StoryObj } from '@storybook/react';
import { FileList } from '@intelation/ui';
import type { FileItem } from '@intelation/ui';
import { useState } from 'react';

// Sample file data
const sampleFiles: FileItem[] = [
  {
    id: '1',
    name: 'Annual_Report_2024.pdf',
    type: 'pdf',
    size: 2048000, // 2MB
    date: new Date('2024-11-01'),
    status: 'completed',
    description: 'Financial report for fiscal year 2024',
  },
  {
    id: '2',
    name: 'Project_Proposal.docx',
    type: 'docx',
    size: 512000, // 500KB
    date: new Date('2024-11-02'),
    status: 'processing',
    description: 'Q4 marketing campaign proposal',
  },
  {
    id: '3',
    name: 'Budget_Analysis.xlsx',
    type: 'xlsx',
    size: 1024000, // 1MB
    date: new Date('2024-11-03'),
    status: 'pending',
    description: 'Department budget breakdown',
  },
  {
    id: '4',
    name: 'Team_Photo.png',
    type: 'png',
    size: 204800, // 200KB
    date: new Date('2024-11-04'),
    status: 'completed',
  },
  {
    id: '5',
    name: 'Failed_Upload.pdf',
    type: 'pdf',
    size: 3145728, // 3MB
    date: new Date('2024-11-05'),
    status: 'error',
    description: 'Upload failed due to network error',
  },
  {
    id: '6',
    name: 'Meeting_Notes.txt',
    type: 'txt',
    size: 8192, // 8KB
    date: new Date('2024-11-05'),
    status: 'completed',
  },
];

const complianceFiles: FileItem[] = [
  {
    id: 'c1',
    name: 'GDPR_Compliance_Certificate.pdf',
    type: 'pdf',
    size: 1536000,
    date: new Date('2024-10-15'),
    status: 'completed',
    description: 'GDPR compliance audit certificate',
  },
  {
    id: 'c2',
    name: 'Data_Processing_Agreement.docx',
    type: 'docx',
    size: 768000,
    date: new Date('2024-10-20'),
    status: 'completed',
    description: 'DPA with third-party vendor',
  },
  {
    id: 'c3',
    name: 'Privacy_Impact_Assessment.xlsx',
    type: 'xlsx',
    size: 921600,
    date: new Date('2024-10-25'),
    status: 'processing',
    description: 'PIA for new data system',
  },
  {
    id: 'c4',
    name: 'HIPAA_Audit_Report.pdf',
    type: 'pdf',
    size: 2097152,
    date: new Date('2024-10-30'),
    status: 'pending',
    description: 'Annual HIPAA compliance audit',
  },
];

const meta = {
  title: 'File Management/FileList',
  component: FileList,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'FileList component extends the List component with file-specific features including file type icons, metadata display, status indicators, and file actions. Perfect for document management systems and file browsers.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    files: {
      control: 'object',
      description: 'Array of files to display',
    },
    view: {
      control: 'radio',
      options: ['list', 'grid'],
      description: 'View mode for displaying files',
    },
    selectable: {
      control: 'boolean',
      description: 'Whether files can be selected',
    },
    multiSelect: {
      control: 'boolean',
      description: 'Whether multiple files can be selected',
    },
    showStatus: {
      control: 'boolean',
      description: 'Whether to show file status badges',
    },
    showActions: {
      control: 'boolean',
      description: 'Whether to show file action buttons',
    },
    showDividers: {
      control: 'boolean',
      description: 'Whether to show dividers between items',
    },
    maxHeight: {
      control: 'text',
      description: 'Maximum height for scrolling',
    },
  },
} satisfies Meta<typeof FileList>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    files: sampleFiles,
    view: 'list',
    showStatus: true,
    showActions: true,
  },
};

// Grid view
export const GridView: Story = {
  args: {
    files: sampleFiles,
    view: 'grid',
    showStatus: true,
    showActions: true,
  },
};

// List view
export const ListView: Story = {
  args: {
    files: sampleFiles,
    view: 'list',
    showStatus: true,
    showActions: true,
  },
};

// With selection
export const WithSelection: Story = {
  args: {
    files: sampleFiles,
  },
  render: () => {
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    return (
      <div>
        <div style={{ marginBottom: '1rem', fontSize: '14px', color: '#6b7280' }}>
          Selected: {selectedIds.length} file(s)
          {selectedIds.length > 0 && (
            <button
              onClick={() => setSelectedIds([])}
              style={{
                marginLeft: '1rem',
                padding: '0.25rem 0.75rem',
                fontSize: '13px',
                background: '#696CFF',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Clear Selection
            </button>
          )}
        </div>
        <FileList
          files={sampleFiles}
          selectable
          multiSelect
          selectedIds={selectedIds}
          onSelectionChange={setSelectedIds}
          showStatus
          showActions
        />
      </div>
    );
  },
};

// With actions
export const WithActions: Story = {
  args: {
    files: sampleFiles,
  },
  render: () => {
    const handleDownload = (file: FileItem) => {
      console.log('Download:', file.name);
      alert(`Downloading: ${file.name}`);
    };

    const handleDelete = (file: FileItem) => {
      console.log('Delete:', file.name);
      if (confirm(`Delete ${file.name}?`)) {
        alert(`Deleted: ${file.name}`);
      }
    };

    const handleProcess = (file: FileItem) => {
      console.log('Process:', file.name);
      alert(`Processing: ${file.name}`);
    };

    return (
      <FileList
        files={sampleFiles}
        onDownload={handleDownload}
        onDelete={handleDelete}
        onProcess={handleProcess}
        showStatus
      />
    );
  },
};

// Grid view with selection
export const GridWithSelection: Story = {
  args: {
    files: sampleFiles,
  },
  render: () => {
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    return (
      <div>
        <div style={{ marginBottom: '1rem', fontSize: '14px', color: '#6b7280' }}>
          Selected: {selectedIds.length} file(s)
        </div>
        <FileList
          files={sampleFiles}
          view="grid"
          selectable
          multiSelect
          selectedIds={selectedIds}
          onSelectionChange={setSelectedIds}
          showStatus
          showActions
        />
      </div>
    );
  },
};

// Without status badges
export const WithoutStatus: Story = {
  args: {
    files: sampleFiles,
    view: 'list',
    showStatus: false,
    showActions: true,
  },
};

// Without actions
export const WithoutActions: Story = {
  args: {
    files: sampleFiles,
    view: 'list',
    showStatus: true,
    showActions: false,
  },
};

// With dividers
export const WithDividers: Story = {
  args: {
    files: sampleFiles,
    view: 'list',
    showStatus: true,
    showActions: true,
    showDividers: true,
  },
};

// With max height (scrollable)
export const Scrollable: Story = {
  args: {
    files: [...sampleFiles, ...sampleFiles, ...sampleFiles], // Triple the files
    view: 'list',
    showStatus: true,
    showActions: true,
    maxHeight: '400px',
  },
};

// Empty state
export const Empty: Story = {
  args: {
    files: [],
    view: 'list',
  },
};

// Document anonymization use case
export const DocumentAnonymization: Story = {
  args: {
    files: [],
  },
  render: () => {
    const anonymizationFiles: FileItem[] = [
      {
        id: 'a1',
        name: 'Patient_Records_Jan2024.pdf',
        type: 'pdf',
        size: 4194304,
        date: new Date('2024-10-01'),
        status: 'completed',
        description: 'PII removed, anonymized successfully',
      },
      {
        id: 'a2',
        name: 'Medical_Report_12345.docx',
        type: 'docx',
        size: 1048576,
        date: new Date('2024-10-15'),
        status: 'processing',
        description: 'Anonymization in progress...',
      },
      {
        id: 'a3',
        name: 'Lab_Results_Batch_03.xlsx',
        type: 'xlsx',
        size: 2097152,
        date: new Date('2024-10-20'),
        status: 'pending',
        description: 'Queued for anonymization',
      },
      {
        id: 'a4',
        name: 'Failed_Document.pdf',
        type: 'pdf',
        size: 3145728,
        date: new Date('2024-10-25'),
        status: 'error',
        description: 'PII detection failed - manual review required',
      },
    ];

    const handleProcess = (file: FileItem) => {
      alert(`Starting anonymization for: ${file.name}`);
    };

    const handleDownload = (file: FileItem) => {
      if (file.status === 'completed') {
        alert(`Downloading anonymized file: ${file.name}`);
      } else {
        alert('File must be completed before download');
      }
    };

    return (
      <div>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '18px', fontWeight: 600 }}>
            Document Anonymization Pipeline
          </h3>
          <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>
            View and manage documents in the PII detection and anonymization workflow
          </p>
        </div>

        <FileList
          files={anonymizationFiles}
          onProcess={handleProcess}
          onDownload={handleDownload}
          showStatus
        />
      </div>
    );
  },
};

// Compliance files use case
export const ComplianceFiles: Story = {
  args: {
    files: complianceFiles,
  },
  render: () => {
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    const handleDownload = (file: FileItem) => {
      alert(`Downloading compliance document: ${file.name}`);
    };

    return (
      <div>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '18px', fontWeight: 600 }}>
            Compliance Documentation
          </h3>
          <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>
            GDPR, HIPAA, and SOC 2 compliance audit files and certificates
          </p>
        </div>

        <FileList
          files={complianceFiles}
          selectable
          multiSelect
          selectedIds={selectedIds}
          onSelectionChange={setSelectedIds}
          onDownload={handleDownload}
          showStatus
        />

        {selectedIds.length > 0 && (
          <div
            style={{
              marginTop: '1.5rem',
              padding: '1rem',
              background: '#f0fdf4',
              borderRadius: '0.5rem',
              border: '1px solid #86efac',
            }}
          >
            <p style={{ margin: 0, fontSize: '14px', color: '#15803d', fontWeight: 500 }}>
              {selectedIds.length} file(s) selected for bulk download
            </p>
          </div>
        )}
      </div>
    );
  },
};

// File browser interface
export const FileBrowser: Story = {
  args: {
    files: sampleFiles,
  },
  render: () => {
    const [view, setView] = useState<'list' | 'grid'>('list');
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    return (
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
            padding: '0.75rem 1rem',
            background: '#f9fafb',
            borderRadius: '0.5rem',
            border: '1px solid #e5e7eb',
          }}
        >
          <div style={{ fontSize: '14px', color: '#6b7280' }}>
            {sampleFiles.length} files • {selectedIds.length} selected
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={() => setView('list')}
              style={{
                padding: '0.5rem 1rem',
                fontSize: '14px',
                background: view === 'list' ? '#696CFF' : 'white',
                color: view === 'list' ? 'white' : '#374151',
                border: '1px solid #e5e7eb',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              List
            </button>
            <button
              onClick={() => setView('grid')}
              style={{
                padding: '0.5rem 1rem',
                fontSize: '14px',
                background: view === 'grid' ? '#696CFF' : 'white',
                color: view === 'grid' ? 'white' : '#374151',
                border: '1px solid #e5e7eb',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Grid
            </button>
          </div>
        </div>

        <FileList
          files={sampleFiles}
          view={view}
          selectable
          multiSelect
          selectedIds={selectedIds}
          onSelectionChange={setSelectedIds}
          onDownload={(file) => alert(`Download: ${file.name}`)}
          onDelete={(file) => confirm(`Delete ${file.name}?`)}
          showStatus
        />
      </div>
    );
  },
};

// Single file selection
export const SingleSelection: Story = {
  args: {
    files: sampleFiles,
  },
  render: () => {
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    return (
      <div>
        <div style={{ marginBottom: '1rem', fontSize: '14px', color: '#6b7280' }}>
          {selectedIds.length > 0
            ? `Selected: ${sampleFiles.find((f) => f.id === selectedIds[0])?.name}`
            : 'No file selected'}
        </div>
        <FileList
          files={sampleFiles}
          selectable
          multiSelect={false}
          selectedIds={selectedIds}
          onSelectionChange={setSelectedIds}
          showStatus
        />
      </div>
    );
  },
};

// With file click handler
export const WithFileClick: Story = {
  args: {
    files: sampleFiles,
  },
  render: () => {
    const [lastClicked, setLastClicked] = useState<string | null>(null);

    const handleFileClick = (file: FileItem) => {
      setLastClicked(file.name);
    };

    return (
      <div>
        {lastClicked && (
          <div
            style={{
              marginBottom: '1rem',
              padding: '0.75rem 1rem',
              background: '#eff6ff',
              borderRadius: '0.5rem',
              border: '1px solid #bfdbfe',
              fontSize: '14px',
              color: '#1e40af',
            }}
          >
            Last clicked: <strong>{lastClicked}</strong>
          </div>
        )}
        <FileList files={sampleFiles} onFileClick={handleFileClick} showStatus />
      </div>
    );
  },
};

// Playground
export const Playground: Story = {
  args: {
    files: sampleFiles,
    view: 'list',
    selectable: false,
    multiSelect: false,
    showStatus: true,
    showActions: true,
    showDividers: false,
    maxHeight: undefined,
  },
};
