import React from 'react';
import './FileUpload.css';
export interface UploadedFile {
    /**
     * Unique identifier for the file
     */
    id: string;
    /**
     * File object
     */
    file: File;
    /**
     * File name
     */
    name: string;
    /**
     * File size in bytes
     */
    size: number;
    /**
     * File MIME type
     */
    type: string;
    /**
     * Upload progress (0-100)
     */
    progress: number;
    /**
     * Upload status
     */
    status: 'pending' | 'uploading' | 'completed' | 'error';
    /**
     * Error message if status is 'error'
     */
    error?: string;
    /**
     * Preview URL for image files
     */
    preview?: string;
}
export interface UploadProgress {
    /**
     * File ID
     */
    fileId: string;
    /**
     * Upload progress (0-100)
     */
    progress: number;
    /**
     * Upload status
     */
    status: 'pending' | 'uploading' | 'completed' | 'error';
}
export interface FileUploadProps {
    /**
     * Accepted file types (MIME types)
     * @example ['image/png', 'image/jpeg', 'application/pdf']
     */
    accept?: string[];
    /**
     * Maximum number of files
     * @default undefined (unlimited)
     */
    maxFiles?: number;
    /**
     * Maximum file size in bytes
     * @default undefined (no limit)
     */
    maxSize?: number;
    /**
     * Allow multiple file selection
     * @default true
     */
    multiple?: boolean;
    /**
     * Enable drag and drop
     * @default true
     */
    dragAndDrop?: boolean;
    /**
     * Show preview thumbnails for images
     * @default true
     */
    showPreview?: boolean;
    /**
     * Callback when files are selected
     */
    onFilesSelected?: (files: File[]) => void;
    /**
     * Callback when upload progress changes
     */
    onUploadProgress?: (progress: UploadProgress[]) => void;
    /**
     * Callback when upload is complete
     */
    onUploadComplete?: (results: UploadedFile[]) => void;
    /**
     * Callback when file is removed
     */
    onFileRemove?: (fileId: string) => void;
    /**
     * Custom upload function
     * If not provided, files will be marked as completed immediately
     */
    onUpload?: (file: File) => Promise<void>;
    /**
     * Disabled state
     * @default false
     */
    disabled?: boolean;
    /**
     * Additional CSS class names
     */
    className?: string;
}
/**
 * FileUpload component for file upload with drag-and-drop support
 *
 * @example
 * ```tsx
 * <FileUpload
 *   accept={['image/*', 'application/pdf']}
 *   maxFiles={5}
 *   maxSize={5 * 1024 * 1024} // 5MB
 *   onFilesSelected={(files) => console.log(files)}
 * />
 * ```
 *
 * @example
 * ```tsx
 * <FileUpload
 *   multiple={false}
 *   onUpload={async (file) => {
 *     await uploadToServer(file);
 *   }}
 * />
 * ```
 */
export declare const FileUpload: React.ForwardRefExoticComponent<FileUploadProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=FileUpload.d.ts.map