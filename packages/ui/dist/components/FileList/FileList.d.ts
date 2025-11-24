import React from 'react';
import './FileList.css';
export interface FileItem {
    /**
     * Unique identifier for the file
     */
    id: string;
    /**
     * File name with extension
     */
    name: string;
    /**
     * File type/extension (e.g., 'pdf', 'docx', 'png')
     */
    type: string;
    /**
     * File size in bytes
     */
    size: number;
    /**
     * Date the file was modified or uploaded
     */
    date: Date;
    /**
     * Processing or upload status
     */
    status?: 'pending' | 'processing' | 'completed' | 'error';
    /**
     * Optional description or metadata
     */
    description?: string;
    /**
     * Any additional metadata
     */
    metadata?: Record<string, unknown>;
}
export interface FileListProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
    /**
     * Array of files to display
     */
    files: FileItem[];
    /**
     * View mode for displaying files
     * @default 'list'
     */
    view?: 'list' | 'grid';
    /**
     * Whether files can be selected
     * @default false
     */
    selectable?: boolean;
    /**
     * Whether multiple files can be selected
     * @default false
     */
    multiSelect?: boolean;
    /**
     * Controlled selected file IDs
     */
    selectedIds?: string[];
    /**
     * Callback when selection changes
     */
    onSelectionChange?: (selectedIds: string[]) => void;
    /**
     * Callback when a file is clicked
     */
    onFileClick?: (file: FileItem) => void;
    /**
     * Callback when download action is triggered
     */
    onDownload?: (file: FileItem) => void;
    /**
     * Callback when delete action is triggered
     */
    onDelete?: (file: FileItem) => void;
    /**
     * Callback when process action is triggered (Intelation-specific)
     */
    onProcess?: (file: FileItem) => void;
    /**
     * Whether to show file status indicators
     * @default true
     */
    showStatus?: boolean;
    /**
     * Whether to show file actions
     * @default true
     */
    showActions?: boolean;
    /**
     * Maximum height for the file list (enables scrolling)
     */
    maxHeight?: string | number;
    /**
     * Whether to show dividers between items
     * @default false
     */
    showDividers?: boolean;
    /**
     * Additional CSS class names
     */
    className?: string;
}
/**
 * FileList component - extends List component with file-specific features
 */
export declare const FileList: React.ForwardRefExoticComponent<FileListProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=FileList.d.ts.map