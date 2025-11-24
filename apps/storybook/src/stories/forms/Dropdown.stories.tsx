import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "@intelation/ui";
import { useState } from "react";

const meta = {
  title: "Forms/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A tonal dropdown component for selecting options. Features a clean, modern design with smooth animations and keyboard support. Default options include time period selections: Last 30 days (default), Last 7 days, Last 90 days, and All time.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    options: {
      description: "Available options for the dropdown",
      control: "object",
    },
    defaultValue: {
      description: "Default selected value",
      control: "text",
    },
    value: {
      description: "Controlled selected value",
      control: "text",
    },
    onChange: {
      description: "Callback when selection changes",
      action: "changed",
    },
    placeholder: {
      description: "Placeholder text when no value is selected",
      control: "text",
    },
    disabled: {
      description: "Whether the dropdown is disabled",
      control: "boolean",
    },
    variant: {
      description: "Dropdown variant style",
      control: { type: "select" },
      options: ["tonal", "outlined", "filled"],
    },
    size: {
      description: "Size variant",
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    width: {
      description: "Width of the dropdown",
      control: "text",
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: "last-30-days",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <div>
        <label className="block mb-2 text-sm font-medium">
          Tonal (Default)
        </label>
        <Dropdown variant="tonal" defaultValue="last-30-days" />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium">
          Outlined
        </label>
        <Dropdown variant="outlined" defaultValue="last-30-days" />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium">
          Filled
        </label>
        <Dropdown variant="filled" defaultValue="last-30-days" />
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <div>
        <label className="block mb-2 text-sm font-medium">
          Small
        </label>
        <Dropdown size="small" defaultValue="last-30-days" />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium">
          Medium (Default)
        </label>
        <Dropdown size="medium" defaultValue="last-30-days" />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium">
          Large
        </label>
        <Dropdown size="large" defaultValue="last-30-days" />
      </div>
    </div>
  ),
};

export const CustomOptions: Story = {
  args: {
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
      { value: "option4", label: "Option 4" },
    ],
    defaultValue: "option1",
  },
};

export const WithDisabledOptions: Story = {
  args: {
    options: [
      { value: "last-30-days", label: "Last 30 days" },
      { value: "last-7-days", label: "Last 7 days", disabled: true },
      { value: "last-90-days", label: "Last 90 days" },
      { value: "all-time", label: "All time", disabled: true },
    ],
    defaultValue: "last-30-days",
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: "last-30-days",
    disabled: true,
  },
};

export const CustomWidth: Story = {
  args: {
    defaultValue: "last-30-days",
    width: "250px",
  },
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: "Select a time period",
  },
};

export const Controlled: Story = {
  render: () => {
    const ControlledDropdown = () => {
      const [value, setValue] = useState("last-30-days");
      
      return (
        <div className="flex flex-col gap-4 items-start">
          <Dropdown
            value={value}
            onChange={setValue}
          />
          <div className="px-4 py-3 bg-gray-100 rounded-lg text-sm font-mono">
            Selected value: <strong>{value}</strong>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setValue("last-7-days")}
              className="px-4 py-2 rounded-md border border-gray-300 bg-white cursor-pointer text-sm"
            >
              Set to Last 7 days
            </button>
            <button
              onClick={() => setValue("all-time")}
              className="px-4 py-2 rounded-md border border-gray-300 bg-white cursor-pointer text-sm"
            >
              Set to All time
            </button>
          </div>
        </div>
      );
    };
    
    return <ControlledDropdown />;
  },
};

export const InFormContext: Story = {
  render: () => {
    const FormExample = () => {
      const [period, setPeriod] = useState("last-30-days");
      const [category, setCategory] = useState("sales");
      
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Form submitted with:\nPeriod: ${period}\nCategory: ${category}`);
      };
      
      return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-6 bg-white rounded-xl shadow-sm min-w-[300px]">
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Time Period
            </label>
            <Dropdown
              value={period}
              onChange={setPeriod}
              width="100%"
            />
          </div>
          
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Category
            </label>
            <Dropdown
              value={category}
              onChange={setCategory}
              options={[
                { value: "sales", label: "Sales" },
                { value: "marketing", label: "Marketing" },
                { value: "operations", label: "Operations" },
                { value: "finance", label: "Finance" },
              ]}
              width="100%"
            />
          </div>
          
          <button
            type="submit"
            className="px-5 py-2.5 rounded-lg border-none bg-blue-500 text-white text-sm font-semibold cursor-pointer transition-colors hover:bg-blue-600"
          >
            Generate Report
          </button>
        </form>
      );
    };
    
    return <FormExample />;
  },
};

export const LongOptions: Story = {
  args: {
    options: [
      { value: "option1", label: "This is a very long option text that might overflow" },
      { value: "option2", label: "Another long option with lots of text content" },
      { value: "option3", label: "Short" },
      { value: "option4", label: "Medium length option" },
    ],
    defaultValue: "option1",
    width: "200px",
  },
};

export const ManyOptions: Story = {
  args: {
    options: Array.from({ length: 20 }, (_, i) => ({
      value: `option-${i + 1}`,
      label: `Option ${i + 1}`,
    })),
    defaultValue: "option-1",
  },
};
