# FileUpload

**Category:** Components

## Description

FileUpload component for file upload with drag-and-drop support

## Import

```typescript
import { FileUpload } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `accept` | string[] | ❌ | - | Accepted file types (MIME types) |
| `maxFiles` | number | ❌ | `undefined (unlimited)` | Maximum number of files |
| `maxSize` | number | ❌ | `undefined (no limit)` | Maximum file size in bytes |
| `multiple` | boolean | ❌ | `true` | Allow multiple file selection |
| `dragAndDrop` | boolean | ❌ | `true` | Enable drag and drop |
| `showPreview` | boolean | ❌ | `true` | Show preview thumbnails for images |
| `onFilesSelected` | (files: File[]) => void | ❌ | - | Callback when files are selected |
| `onUploadProgress` | (progress: UploadProgress[]) => void | ❌ | - | Callback when upload progress changes |
| `onUploadComplete` | (results: UploadedFile[]) => void | ❌ | - | Callback when upload is complete |
| `onFileRemove` | (fileId: string) => void | ❌ | - | Callback when file is removed |
| `onUpload` | (file: File) => Promise<void> | ❌ | - | Custom upload function
If not provided, files will be marked as completed immediately |
| `disabled` | boolean | ❌ | `false` | Disabled state |
| `className` | string | ❌ | - | Additional CSS class names |

## Examples

### Example 1

```tsx
<FileUpload
  accept={['image/*', 'application/pdf']}
  maxFiles={5}
  maxSize={5 * 1024 * 1024} // 5MB
  onFilesSelected={(files) => console.log(files)}
/>
```

### Example 2

```tsx
<FileUpload
  multiple={false}
  onUpload={async (file) => {
    await uploadToServer(file);
  }}
/>
```

## Accessibility

This component follows WAI-ARIA best practices:

- Semantic HTML elements
- Keyboard navigation support
- ARIA attributes for screen readers
- Focus management

## TypeScript

This component is fully typed. Import the props type:

```typescript
import { FileUpload, FileUploadProps } from '@intelation/ui';
```
