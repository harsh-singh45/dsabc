import React from 'react';
import './FilterBar.css';
export interface QuickFilter {
    id: string;
    label: string;
    value: any;
    active?: boolean;
    count?: number;
}
export interface SortOption {
    value: string;
    label: string;
}
export interface ViewMode {
    id: 'list' | 'grid' | 'card';
    icon?: React.ReactNode;
    label?: string;
}
export interface ActiveFilter {
    id: string;
    label: string;
    value: any;
    displayValue?: string;
}
export interface FilterBarProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Current search value
     */
    searchValue?: string;
    /**
     * Callback when search changes
     */
    onSearchChange?: (value: string) => void;
    /**
     * Show search box
     * @default true
     */
    showSearch?: boolean;
    /**
     * Search placeholder text
     * @default "Search..."
     */
    searchPlaceholder?: string;
    /**
     * Quick filter buttons
     */
    quickFilters?: QuickFilter[];
    /**
     * Callback when quick filter is clicked
     */
    onQuickFilterClick?: (filterId: string) => void;
    /**
     * Available sort options
     */
    sortOptions?: SortOption[];
    /**
     * Current sort value
     */
    sortValue?: string;
    /**
     * Callback when sort changes
     */
    onSortChange?: (sortValue: string) => void;
    /**
     * Show sort dropdown
     * @default true
     */
    showSort?: boolean;
    /**
     * Available view modes
     */
    viewModes?: ViewMode[];
    /**
     * Current view mode
     */
    currentViewMode?: 'list' | 'grid' | 'card';
    /**
     * Callback when view mode changes
     */
    onViewModeChange?: (mode: 'list' | 'grid' | 'card') => void;
    /**
     * Show view mode toggles
     * @default false
     */
    showViewModes?: boolean;
    /**
     * Active filters (displayed as removable chips)
     */
    activeFilters?: ActiveFilter[];
    /**
     * Callback when filter chip is removed
     */
    onFilterRemove?: (filterId: string) => void;
    /**
     * Show clear all filters button
     * @default true
     */
    showClearAll?: boolean;
    /**
     * Callback when clear all is clicked
     */
    onClearAll?: () => void;
    /**
     * Results count to display
     */
    resultsCount?: number;
    /**
     * Show results count
     * @default false
     */
    showResultsCount?: boolean;
}
export declare const FilterBar: React.ForwardRefExoticComponent<FilterBarProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=FilterBar.d.ts.map