# FileList

**Category:** Components

## Description

FileList component - extends List component with file-specific features

## Import

```typescript
import { FileList } from '@intelation/ui';
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `files` | FileItem[] | ✅ | - | Array of files to display |
| `view` | "list" \| "grid" | ❌ | `list` | View mode for displaying files |
| `selectable` | boolean | ❌ | `false` | Whether files can be selected |
| `multiSelect` | boolean | ❌ | `false` | Whether multiple files can be selected |
| `selectedIds` | string[] | ❌ | - | Controlled selected file IDs |
| `onSelectionChange` | (selectedIds: string[]) => void | ❌ | - | Callback when selection changes |
| `onFileClick` | (file: FileItem) => void | ❌ | - | Callback when a file is clicked |
| `onDownload` | (file: FileItem) => void | ❌ | - | Callback when download action is triggered |
| `onDelete` | (file: FileItem) => void | ❌ | - | Callback when delete action is triggered |
| `onProcess` | (file: FileItem) => void | ❌ | - | Callback when process action is triggered (Intelation-specific) |
| `showStatus` | boolean | ❌ | `true` | Whether to show file status indicators |
| `showActions` | boolean | ❌ | `true` | Whether to show file actions |
| `maxHeight` |  | ❌ | - | Maximum height for the file list (enables scrolling) |
| `showDividers` | boolean | ❌ | `false` | Whether to show dividers between items |
| `className` | string | ❌ | - | Additional CSS class names |

## Accessibility

This component follows WAI-ARIA best practices:

- Semantic HTML elements
- Keyboard navigation support
- ARIA attributes for screen readers
- Focus management

## TypeScript

This component is fully typed. Import the props type:

```typescript
import { FileList, FileListProps } from '@intelation/ui';
```
