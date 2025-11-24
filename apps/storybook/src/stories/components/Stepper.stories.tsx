import type { Meta, StoryObj } from "@storybook/react";
import { Stepper } from "@intelation/ui";
import type { StepItem } from "@intelation/ui";

const meta = {
  title: "Components/Stepper",
  component: Stepper,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "A stepper component for multi-step processes and workflows. Supports horizontal and vertical layouts, clickable steps, status indicators, and full accessibility.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    steps: {
      description: "Array of steps to display",
      control: false,
    },
    currentStep: {
      description: "Current active step index (0-based)",
      control: "number",
    },
    orientation: {
      description: "Orientation of the stepper",
      control: "select",
      options: ["horizontal", "vertical"],
    },
    clickable: {
      description: "Whether steps are clickable",
      control: "boolean",
    },
    size: {
      description: "Size variant",
      control: "select",
      options: ["sm", "md", "lg"],
    },
    showConnector: {
      description: "Whether to show connector lines between steps",
      control: "boolean",
    },
    connectorVariant: {
      description: "Connector line variant - 'behind' (line behind text with background), 'through' (line passes through with transparent text background), or 'progress' (progress bar below indicators)",
      control: "select",
      options: ["behind", "through", "progress"],
    },
    onStepClick: {
      description: "Callback when a step is clicked",
      action: "step clicked",
    },
  },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

const basicSteps: StepItem[] = [
  { id: "1", title: "Account Setup" },
  { id: "2", title: "Profile Information" },
  { id: "3", title: "Review & Confirm" },
];

const stepsWithDescriptions: StepItem[] = [
  {
    id: "1",
    title: "Create Account",
    description: "Enter your email and password",
  },
  {
    id: "2",
    title: "Personal Details",
    description: "Tell us about yourself",
  },
  {
    id: "3",
    title: "Preferences",
    description: "Customize your experience",
  },
  {
    id: "4",
    title: "Confirmation",
    description: "Review and complete setup",
  },
];

const complianceSteps: StepItem[] = [
  {
    id: "1",
    title: "Data Collection",
    description: "Upload files and documents",
  },
  {
    id: "2",
    title: "PII Detection",
    description: "Automated scanning in progress",
  },
  {
    id: "3",
    title: "Anonymization",
    description: "Apply anonymization rules",
  },
  {
    id: "4",
    title: "Validation",
    description: "Verify processed data",
  },
  {
    id: "5",
    title: "Export",
    description: "Download anonymized files",
  },
];

/**
 * Default horizontal stepper at step 2
 */
export const Default: Story = {
  args: {
    steps: basicSteps,
    currentStep: 1,
  },
};

/**
 * Stepper with descriptions for each step
 */
export const WithDescriptions: Story = {
  args: {
    steps: stepsWithDescriptions,
    currentStep: 1,
  },
};

/**
 * Clickable stepper where users can navigate between steps
 */
export const Clickable: Story = {
  args: {
    steps: basicSteps,
    currentStep: 1,
    clickable: true,
    onStepClick: (index, step) => {
      console.log("Clicked step:", index, step);
    },
  },
};

/**
 * Vertical orientation stepper
 */
export const Vertical: Story = {
  args: {
    steps: stepsWithDescriptions,
    currentStep: 2,
    orientation: "vertical",
  },
};

/**
 * Vertical clickable stepper
 */
export const VerticalClickable: Story = {
  args: {
    steps: stepsWithDescriptions,
    currentStep: 1,
    orientation: "vertical",
    clickable: true,
  },
};

/**
 * All steps completed
 */
export const AllCompleted: Story = {
  args: {
    steps: basicSteps,
    currentStep: 3,
  },
};

/**
 * Step with error status
 */
export const WithError: Story = {
  args: {
    steps: [
      { id: "1", title: "Account Setup", status: "completed" },
      { id: "2", title: "Payment", status: "error", description: "Payment failed" },
      { id: "3", title: "Confirmation", status: "pending" },
    ],
    currentStep: 1,
  },
};

/**
 * Steps with custom status
 */
export const CustomStatus: Story = {
  args: {
    steps: [
      { id: "1", title: "Upload", status: "completed" },
      { id: "2", title: "Processing", status: "current" },
      { id: "3", title: "Validation", status: "pending" },
      { id: "4", title: "Complete", status: "pending" },
    ],
    currentStep: 1,
  },
};

/**
 * Stepper with disabled step
 */
export const WithDisabled: Story = {
  args: {
    steps: [
      { id: "1", title: "Step 1", status: "completed" },
      { id: "2", title: "Step 2", status: "current" },
      { id: "3", title: "Step 3 (Locked)", status: "pending", disabled: true },
      { id: "4", title: "Step 4", status: "pending", disabled: true },
    ],
    currentStep: 1,
    clickable: true,
  },
};

/**
 * Small size stepper
 */
export const SmallSize: Story = {
  args: {
    steps: basicSteps,
    currentStep: 1,
    size: "sm",
  },
};

/**
 * Large size stepper
 */
export const LargeSize: Story = {
  args: {
    steps: stepsWithDescriptions,
    currentStep: 1,
    size: "lg",
  },
};

/**
 * Stepper without connector lines
 */
export const NoConnectors: Story = {
  args: {
    steps: basicSteps,
    currentStep: 1,
    showConnector: false,
  },
};

/**
 * Connector variant: Behind (Default)
 * Line appears behind text with white background masking it
 */
export const ConnectorBehind: Story = {
  args: {
    steps: stepsWithDescriptions,
    currentStep: 1,
    connectorVariant: "behind",
  },
};

/**
 * Connector variant: Through
 * Line passes through the entire stepper area, visible behind text
 */
export const ConnectorThrough: Story = {
  args: {
    steps: stepsWithDescriptions,
    currentStep: 1,
    connectorVariant: "through",
  },
};

/**
 * Connector variant: Progress
 * Progress bar style with colored bar below step indicators
 */
export const ConnectorProgress: Story = {
  args: {
    steps: stepsWithDescriptions,
    currentStep: 1,
    connectorVariant: "progress",
  },
};

/**
 * Comparison: All three connector variants side by side
 */
export const ConnectorVariantComparison: Story = {
  args: {
    steps: stepsWithDescriptions,
    currentStep: 1,
    orientation: "horizontal",
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
      <div>
        <h3 style={{ marginBottom: "16px", fontSize: "14px", fontWeight: 600 }}>
          Behind (Default) - Line behind text
        </h3>
        <Stepper
          {...args}
          connectorVariant="behind"
        />
      </div>
      <div>
        <h3 style={{ marginBottom: "16px", fontSize: "14px", fontWeight: 600 }}>
          Through - Line passes through
        </h3>
        <Stepper
          {...args}
          connectorVariant="through"
        />
      </div>
      <div>
        <h3 style={{ marginBottom: "16px", fontSize: "14px", fontWeight: 600 }}>
          Progress - Progress bar below
        </h3>
        <Stepper
          {...args}
          connectorVariant="progress"
        />
      </div>
    </div>
  ),
};

/**
 * Vertical connector variants comparison
 */
export const VerticalConnectorVariants: Story = {
  args: {
    steps: stepsWithDescriptions,
    currentStep: 1,
    orientation: "vertical",
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "48px" }}>
      <div style={{ flex: 1 }}>
        <h3 style={{ marginBottom: "16px", fontSize: "14px", fontWeight: 600 }}>
          Behind (Default)
        </h3>
        <Stepper
          {...args}
          connectorVariant="behind"
        />
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{ marginBottom: "16px", fontSize: "14px", fontWeight: 600 }}>
          Through
        </h3>
        <Stepper
          {...args}
          connectorVariant="through"
        />
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{ marginBottom: "16px", fontSize: "14px", fontWeight: 600 }}>
          Progress
        </h3>
        <Stepper
          {...args}
          connectorVariant="progress"
        />
      </div>
    </div>
  ),
};

/**
 * Compliance workflow example
 */
export const ComplianceWorkflow: Story = {
  args: {
    steps: complianceSteps,
    currentStep: 2,
    clickable: true,
  },
};

/**
 * Vertical compliance workflow
 */
export const VerticalComplianceWorkflow: Story = {
  args: {
    steps: complianceSteps,
    currentStep: 2,
    orientation: "vertical",
    clickable: true,
  },
};

/**
 * Playground for interactive testing
 */
export const Playground: Story = {
  args: {
    steps: stepsWithDescriptions,
    currentStep: 1,
    orientation: "horizontal",
    clickable: true,
    size: "md",
    showConnector: true,
    connectorVariant: "behind",
  },
};
