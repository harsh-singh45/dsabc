import React from "react";
import type { Column, TableProps } from "../Table";
import "./DataGrid.css";
export type FilterValue = string | number | boolean | [number, number] | [Date, Date] | null;
export type FilterType = "text" | "select" | "number" | "date" | "numberRange" | "dateRange";
export interface DataGridSelectOption {
    label: string;
    value: string | number;
}
export interface DataGridColumn<T = Record<string, unknown>> extends Column<T> {
    /**
     * Enable filtering for this column
     * @default false
     */
    filterable?: boolean;
    /**
     * Type of filter to display
     * @default "text"
     */
    filterType?: FilterType;
    /**
     * Options for select-type filters
     */
    filterOptions?: DataGridSelectOption[];
    /**
     * Enable inline editing for this column
     * @default false
     */
    editable?: boolean;
    /**
     * Type of input for editing
     * @default "text"
     */
    editType?: "text" | "number" | "select" | "date";
    /**
     * Options for select-type editing
     */
    editOptions?: DataGridSelectOption[];
    /**
     * Validation function for edited values
     */
    validate?: (value: unknown) => string | null;
    /**
     * Whether column is resizable
     * @default true
     */
    resizable?: boolean;
    /**
     * Whether column can be hidden
     * @default true
     */
    hideable?: boolean;
    /**
     * Minimum column width
     */
    minWidth?: number;
    /**
     * Maximum column width
     */
    maxWidth?: number;
}
export interface DataGridProps<T = Record<string, unknown>> extends Omit<TableProps<T>, "columns" | "data" | "onSort"> {
    /**
     * Column definitions with DataGrid-specific options
     */
    columns: DataGridColumn<T>[];
    /**
     * Table data
     */
    data: T[];
    /**
     * Enable column filtering
     * @default false
     */
    filterable?: boolean;
    /**
     * Current filter values
     */
    filters?: Record<string, FilterValue>;
    /**
     * Callback when filters change
     */
    onFilterChange?: (filters: Record<string, FilterValue>) => void;
    /**
     * Enable inline editing
     * @default false
     */
    editable?: boolean;
    /**
     * Callback when cell is edited
     */
    onCellEdit?: (rowIndex: number, columnId: string, value: unknown) => void;
    /**
     * Callback when data changes
     */
    onDataChange?: (newData: T[]) => void;
    /**
     * Enable column resizing
     * @default false
     */
    resizableColumns?: boolean;
    /**
     * Enable column reordering
     * @default false
     */
    reorderableColumns?: boolean;
    /**
     * Column visibility state
     */
    columnVisibility?: Record<string, boolean>;
    /**
     * Callback when column is resized
     */
    onColumnResize?: (columnId: string, width: number) => void;
    /**
     * Callback when columns are reordered
     */
    onColumnReorder?: (columnIds: string[]) => void;
    /**
     * Persist column configuration to localStorage
     * @default false
     */
    persistColumnConfig?: boolean;
    /**
     * Enable virtual scrolling for large datasets
     * @default false
     */
    virtualScrolling?: boolean;
    /**
     * Row height for virtual scrolling
     * @default 48
     */
    rowHeight?: number;
    /**
     * Enable export functionality
     * @default false
     */
    exportable?: boolean;
    /**
     * Export formats to enable
     * @default ["csv"]
     */
    exportFormats?: ("csv" | "excel")[];
    /**
     * Pagination configuration
     */
    pagination?: {
        page: number;
        pageSize: number;
        totalItems: number;
        onPageChange: (page: number) => void;
        onPageSizeChange: (size: number) => void;
    };
    /**
     * Enable multi-column sorting
     * @default false
     */
    multiSort?: boolean;
    /**
     * Current sort state for multi-sort
     */
    sortState?: Array<{
        columnId: string;
        direction: "asc" | "desc";
    }>;
    /**
     * Callback when sort changes
     */
    onSortChange?: (sortState: Array<{
        columnId: string;
        direction: "asc" | "desc";
    }>) => void;
}
export declare const DataGrid: <T extends Record<string, unknown> = Record<string, unknown>>(props: DataGridProps<T> & {
    ref?: React.Ref<HTMLDivElement>;
}) => React.ReactElement;
//# sourceMappingURL=DataGrid.d.ts.map