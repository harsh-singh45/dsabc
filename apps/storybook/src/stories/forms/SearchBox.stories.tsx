import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SearchBox, SearchSuggestion, SearchCategory } from '@intelation/ui';

const meta = {
  title: 'Forms/SearchBox',
  component: SearchBox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Advanced search component with autocomplete, filtering, and search history for entity and file search in the Intelation Platform.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size variant of the search box',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state',
    },
    showHistory: {
      control: 'boolean',
      description: 'Enable search history',
    },
    showClear: {
      control: 'boolean',
      description: 'Show clear button',
    },
    debounceMs: {
      control: 'number',
      description: 'Debounce delay in milliseconds',
    },
    maxSuggestions: {
      control: 'number',
      description: 'Maximum number of suggestions to display',
    },
  },
} satisfies Meta<typeof SearchBox>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockSuggestions: SearchSuggestion[] = [
  { id: '1', text: 'John Doe', category: 'contacts' },
  { id: '2', text: 'Jane Smith', category: 'contacts' },
  { id: '3', text: 'John Adams', category: 'contacts' },
  { id: '4', text: 'New York', category: 'locations' },
  { id: '5', text: 'Los Angeles', category: 'locations' },
  { id: '6', text: 'Chicago', category: 'locations' },
  { id: '7', text: 'Email Address', category: 'pii' },
  { id: '8', text: 'Phone Number', category: 'pii' },
  { id: '9', text: 'Social Security Number', category: 'pii' },
  { id: '10', text: 'Credit Card', category: 'pii' },
];

const categories: SearchCategory[] = [
  { id: 'contacts', label: 'Contacts' },
  { id: 'locations', label: 'Locations' },
  { id: 'pii', label: 'PII' },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]);

    const handleChange = (newValue: string) => {
      setValue(newValue);
      if (newValue.trim()) {
        const filtered = mockSuggestions.filter(s =>
          s.text.toLowerCase().includes(newValue.toLowerCase())
        );
        setFilteredSuggestions(filtered);
      } else {
        setFilteredSuggestions([]);
      }
    };

    return (
      <div style={{ width: '400px' }}>
        <SearchBox
          value={value}
          onChange={handleChange}
          onSearch={(query) => console.log('Search:', query)}
          suggestions={filteredSuggestions}
          placeholder="Search..."
        />
      </div>
    );
  },
};

export const WithCategories: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>();
    const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]);

    const handleChange = (newValue: string) => {
      setValue(newValue);
      if (newValue.trim()) {
        let filtered = mockSuggestions.filter(s =>
          s.text.toLowerCase().includes(newValue.toLowerCase())
        );
        if (selectedCategory) {
          filtered = filtered.filter(s => s.category === selectedCategory);
        }
        setFilteredSuggestions(filtered);
      } else {
        setFilteredSuggestions([]);
      }
    };

    return (
      <div style={{ width: '500px' }}>
        <SearchBox
          value={value}
          onChange={handleChange}
          onSearch={(query) => console.log('Search:', query)}
          suggestions={filteredSuggestions}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          placeholder="Search entities..."
        />
      </div>
    );
  },
};

export const Loading: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div style={{ width: '400px' }}>
        <SearchBox
          value={value}
          onChange={setValue}
          loading
          placeholder="Loading suggestions..."
        />
      </div>
    );
  },
};

export const WithHistory: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div style={{ width: '400px' }}>
        <SearchBox
          value={value}
          onChange={setValue}
          onSearch={(query) => console.log('Search:', query)}
          showHistory
          placeholder="Type to search or click to see history..."
        />
      </div>
    );
  },
};

export const SmallSize: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]);

    const handleChange = (newValue: string) => {
      setValue(newValue);
      if (newValue.trim()) {
        const filtered = mockSuggestions.filter(s =>
          s.text.toLowerCase().includes(newValue.toLowerCase())
        );
        setFilteredSuggestions(filtered);
      } else {
        setFilteredSuggestions([]);
      }
    };

    return (
      <div style={{ width: '300px' }}>
        <SearchBox
          value={value}
          onChange={handleChange}
          suggestions={filteredSuggestions}
          size="sm"
          placeholder="Small search..."
        />
      </div>
    );
  },
};

export const LargeSize: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]);

    const handleChange = (newValue: string) => {
      setValue(newValue);
      if (newValue.trim()) {
        const filtered = mockSuggestions.filter(s =>
          s.text.toLowerCase().includes(newValue.toLowerCase())
        );
        setFilteredSuggestions(filtered);
      } else {
        setFilteredSuggestions([]);
      }
    };

    return (
      <div style={{ width: '600px' }}>
        <SearchBox
          value={value}
          onChange={handleChange}
          suggestions={filteredSuggestions}
          size="lg"
          placeholder="Large search..."
        />
      </div>
    );
  },
};

export const NoClearButton: Story = {
  render: () => {
    const [value, setValue] = useState('test query');

    return (
      <div style={{ width: '400px' }}>
        <SearchBox
          value={value}
          onChange={setValue}
          showClear={false}
          placeholder="Search without clear button..."
        />
      </div>
    );
  },
};

export const CustomDebounce: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]);

    const handleChange = (newValue: string) => {
      setValue(newValue);
      console.log('Debounced change:', newValue);
      if (newValue.trim()) {
        const filtered = mockSuggestions.filter(s =>
          s.text.toLowerCase().includes(newValue.toLowerCase())
        );
        setFilteredSuggestions(filtered);
      } else {
        setFilteredSuggestions([]);
      }
    };

    return (
      <div style={{ width: '400px' }}>
        <SearchBox
          value={value}
          onChange={handleChange}
          suggestions={filteredSuggestions}
          debounceMs={1000}
          placeholder="Type and wait 1 second..."
        />
      </div>
    );
  },
};

export const MaxSuggestions: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div style={{ width: '400px' }}>
        <SearchBox
          value={value}
          onChange={setValue}
          suggestions={mockSuggestions}
          maxSuggestions={3}
          placeholder="Limited to 3 suggestions..."
        />
      </div>
    );
  },
};

export const IntelationPlatformExample: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>();
    const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]);
    const [loading, setLoading] = useState(false);

    const handleChange = (newValue: string) => {
      setValue(newValue);
      setLoading(true);

      // Simulate API call
      setTimeout(() => {
        if (newValue.trim()) {
          let filtered = mockSuggestions.filter(s =>
            s.text.toLowerCase().includes(newValue.toLowerCase())
          );
          if (selectedCategory) {
            filtered = filtered.filter(s => s.category === selectedCategory);
          }
          setFilteredSuggestions(filtered);
        } else {
          setFilteredSuggestions([]);
        }
        setLoading(false);
      }, 500);
    };

    return (
      <div style={{ width: '600px' }}>
        <h3 style={{ marginBottom: '16px', color: 'var(--color-text-primary)' }}>
          Entity Search
        </h3>
        <SearchBox
          value={value}
          onChange={handleChange}
          onSearch={(query) => alert(`Searching for: ${query}`)}
          suggestions={filteredSuggestions}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          loading={loading}
          showHistory
          size="md"
          placeholder="Search contacts, locations, or PII entities..."
        />
      </div>
    );
  },
};
