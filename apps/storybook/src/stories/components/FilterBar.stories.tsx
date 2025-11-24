import type { Meta, StoryObj } from '@storybook/react';
import { FilterBar } from '@intelation/ui';
import { HiViewList, HiViewGrid, HiTemplate } from 'react-icons/hi';

const meta: Meta<typeof FilterBar> = {
  title: 'Data Display/FilterBar',
  component: FilterBar,
  tags: ['autodocs'],
  argTypes: {
    searchValue: {
      control: 'text',
      description: 'Current search value',
    },
    showSearch: {
      control: 'boolean',
      description: 'Show search box',
    },
    searchPlaceholder: {
      control: 'text',
      description: 'Search placeholder text',
    },
    showSort: {
      control: 'boolean',
      description: 'Show sort dropdown',
    },
    showViewModes: {
      control: 'boolean',
      description: 'Show view mode toggles',
    },
    showClearAll: {
      control: 'boolean',
      description: 'Show clear all filters button',
    },
    showResultsCount: {
      control: 'boolean',
      description: 'Show results count',
    },
    resultsCount: {
      control: 'number',
      description: 'Results count to display',
    },
  },
};

export default meta;
type Story = StoryObj<typeof FilterBar>;

// 1. Default story
export const Default: Story = {
  args: {
    quickFilters: [
      { id: 'all', label: 'All', value: 'all', active: true, count: 156 },
      { id: 'active', label: 'Active', value: 'active', count: 45 },
      { id: 'pending', label: 'Pending', value: 'pending', count: 12 },
    ],
    onQuickFilterClick: (id) => console.log('Quick filter clicked:', id),
  },
};

// 2. With Active Filters
export const WithActiveFilters: Story = {
  args: {
    quickFilters: [
      { id: 'all', label: 'All', value: 'all' },
      { id: 'active', label: 'Active', value: 'active', active: true },
    ],
    activeFilters: [
      { id: 'status', label: 'Status', value: 'active', displayValue: 'Active' },
      { id: 'date', label: 'Date', value: '2024-01-01', displayValue: 'Last 7 days' },
      { id: 'type', label: 'Type', value: 'document', displayValue: 'Documents' },
    ],
    onQuickFilterClick: (id) => console.log('Quick filter clicked:', id),
    onFilterRemove: (id) => console.log('Filter removed:', id),
    onClearAll: () => console.log('Clear all clicked'),
  },
};

// 3. With Sort
export const WithSort: Story = {
  args: {
    sortOptions: [
      { value: 'name', label: 'Name' },
      { value: 'date', label: 'Date' },
      { value: 'size', label: 'Size' },
      { value: 'status', label: 'Status' },
    ],
    sortValue: 'name',
    onSortChange: (value) => console.log('Sort changed:', value),
  },
};

// 4. With View Modes
export const WithViewModes: Story = {
  args: {
    viewModes: [
      { id: 'list', icon: <HiViewList />, label: 'List view' },
      { id: 'grid', icon: <HiViewGrid />, label: 'Grid view' },
      { id: 'card', icon: <HiTemplate />, label: 'Card view' },
    ],
    currentViewMode: 'list',
    showViewModes: true,
    onViewModeChange: (mode) => console.log('View mode changed:', mode),
  },
};

// 5. Full Featured
export const FullFeatured: Story = {
  args: {
    searchValue: '',
    searchPlaceholder: 'Search files...',
    quickFilters: [
      { id: 'all', label: 'All', value: 'all', active: true, count: 156 },
      { id: 'active', label: 'Active', value: 'active', count: 45 },
      { id: 'pending', label: 'Pending', value: 'pending', count: 12 },
      { id: 'archived', label: 'Archived', value: 'archived', count: 99 },
    ],
    activeFilters: [
      { id: 'status', label: 'Status', value: 'active', displayValue: 'Active' },
      { id: 'date', label: 'Date', value: '2024-01-01', displayValue: 'Today' },
    ],
    sortOptions: [
      { value: 'name', label: 'Name' },
      { value: 'date', label: 'Date' },
      { value: 'size', label: 'Size' },
    ],
    sortValue: 'name',
    viewModes: [
      { id: 'list', icon: <HiViewList />, label: 'List view' },
      { id: 'grid', icon: <HiViewGrid />, label: 'Grid view' },
    ],
    currentViewMode: 'list',
    showViewModes: true,
    showResultsCount: true,
    resultsCount: 45,
    onSearchChange: (value) => console.log('Search:', value),
    onQuickFilterClick: (id) => console.log('Quick filter:', id),
    onFilterRemove: (id) => console.log('Remove filter:', id),
    onClearAll: () => console.log('Clear all'),
    onSortChange: (value) => console.log('Sort:', value),
    onViewModeChange: (mode) => console.log('View mode:', mode),
  },
};

// 6. Search Only
export const SearchOnly: Story = {
  args: {
    searchPlaceholder: 'Search documents...',
    showSort: false,
    showViewModes: false,
    onSearchChange: (value) => console.log('Search:', value),
  },
};

// 7. Quick Filters Only
export const QuickFiltersOnly: Story = {
  args: {
    showSearch: false,
    quickFilters: [
      { id: 'today', label: 'Today', value: 'today', active: true, count: 12 },
      { id: 'week', label: 'This Week', value: 'week', count: 45 },
      { id: 'month', label: 'This Month', value: 'month', count: 156 },
      { id: 'year', label: 'This Year', value: 'year', count: 892 },
    ],
    showSort: false,
    showViewModes: false,
    onQuickFilterClick: (id) => console.log('Quick filter:', id),
  },
};

// 8. With Results Count
export const WithResultsCount: Story = {
  args: {
    searchPlaceholder: 'Search...',
    quickFilters: [
      { id: 'all', label: 'All', value: 'all', active: true },
    ],
    showResultsCount: true,
    resultsCount: 1247,
    onSearchChange: (value) => console.log('Search:', value),
    onQuickFilterClick: (id) => console.log('Quick filter:', id),
  },
};

// 9. Empty State
export const EmptyState: Story = {
  args: {
    searchPlaceholder: 'Search...',
    onSearchChange: (value) => console.log('Search:', value),
  },
};

// 10. Real World - File List
export const RealWorld_FileList: Story = {
  args: {
    searchValue: '',
    searchPlaceholder: 'Search files by name...',
    quickFilters: [
      { id: 'all', label: 'All Files', value: 'all', active: true, count: 234 },
      { id: 'documents', label: 'Documents', value: 'documents', count: 89 },
      { id: 'images', label: 'Images', value: 'images', count: 67 },
      { id: 'videos', label: 'Videos', value: 'videos', count: 23 },
      { id: 'other', label: 'Other', value: 'other', count: 55 },
    ],
    activeFilters: [
      { id: 'size', label: 'Size', value: 'large', displayValue: 'Larger than 10MB' },
    ],
    sortOptions: [
      { value: 'name', label: 'Name' },
      { value: 'date', label: 'Date Modified' },
      { value: 'size', label: 'File Size' },
      { value: 'type', label: 'File Type' },
    ],
    sortValue: 'date',
    viewModes: [
      { id: 'list', icon: <HiViewList />, label: 'List view' },
      { id: 'grid', icon: <HiViewGrid />, label: 'Grid view' },
    ],
    currentViewMode: 'grid',
    showViewModes: true,
    showResultsCount: true,
    resultsCount: 89,
    onSearchChange: (value) => console.log('Search:', value),
    onQuickFilterClick: (id) => console.log('Filter:', id),
    onFilterRemove: (id) => console.log('Remove:', id),
    onClearAll: () => console.log('Clear all'),
    onSortChange: (value) => console.log('Sort:', value),
    onViewModeChange: (mode) => console.log('View:', mode),
  },
};

// 11. Real World - Data Table
export const RealWorld_DataTable: Story = {
  args: {
    searchValue: '',
    searchPlaceholder: 'Search customers...',
    quickFilters: [
      { id: 'all', label: 'All', value: 'all', count: 1247 },
      { id: 'active', label: 'Active', value: 'active', active: true, count: 892 },
      { id: 'inactive', label: 'Inactive', value: 'inactive', count: 234 },
      { id: 'trial', label: 'Trial', value: 'trial', count: 121 },
    ],
    activeFilters: [
      { id: 'plan', label: 'Plan', value: 'enterprise', displayValue: 'Enterprise' },
      { id: 'region', label: 'Region', value: 'us-west', displayValue: 'US West' },
      { id: 'revenue', label: 'Revenue', value: '10000', displayValue: '> $10,000' },
    ],
    sortOptions: [
      { value: 'name', label: 'Company Name' },
      { value: 'created', label: 'Date Created' },
      { value: 'revenue', label: 'Monthly Revenue' },
      { value: 'users', label: 'User Count' },
    ],
    sortValue: 'revenue',
    showResultsCount: true,
    resultsCount: 67,
    onSearchChange: (value) => console.log('Search:', value),
    onQuickFilterClick: (id) => console.log('Filter:', id),
    onFilterRemove: (id) => console.log('Remove:', id),
    onClearAll: () => console.log('Clear all'),
    onSortChange: (value) => console.log('Sort:', value),
  },
};

// 12. Playground
export const Playground: Story = {
  args: {
    searchValue: '',
    searchPlaceholder: 'Search...',
    showSearch: true,
    quickFilters: [
      { id: 'all', label: 'All', value: 'all', active: true, count: 100 },
      { id: 'active', label: 'Active', value: 'active', count: 45 },
      { id: 'inactive', label: 'Inactive', value: 'inactive', count: 55 },
    ],
    activeFilters: [],
    sortOptions: [
      { value: 'name', label: 'Name' },
      { value: 'date', label: 'Date' },
    ],
    sortValue: 'name',
    showSort: true,
    viewModes: [
      { id: 'list', icon: <HiViewList />, label: 'List view' },
      { id: 'grid', icon: <HiViewGrid />, label: 'Grid view' },
    ],
    currentViewMode: 'list',
    showViewModes: true,
    showClearAll: true,
    showResultsCount: true,
    resultsCount: 100,
    onSearchChange: (value) => console.log('Search:', value),
    onQuickFilterClick: (id) => console.log('Quick filter:', id),
    onFilterRemove: (id) => console.log('Filter removed:', id),
    onClearAll: () => console.log('Clear all clicked'),
    onSortChange: (value) => console.log('Sort changed:', value),
    onViewModeChange: (mode) => console.log('View mode changed:', mode),
  },
};
