import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardSection, ListItem, DonutChart, GaugeChart, BarChart } from "@intelation/ui";
import { HiArrowRight, HiDocumentText, HiMusicNote, HiUser, HiLockClosed, HiHeart } from "react-icons/hi";

const meta = {
  title: "Cards/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A card component with title, description, and content area. Features clean styling with shadow and rounded corners.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "Card title text",
      control: "text",
    },
    description: {
      description: "Card description text",
      control: "text",
    },
    children: {
      description: "Card content",
      control: false,
    },
    showMenu: {
      description: "Whether to show the menu button (three dots)",
      control: "boolean",
    },
    onMenuClick: {
      description: "Handler for menu button click",
      action: "menu clicked",
    },
    variant: {
      description: "Card variant style",
      control: { type: "select" },
      options: ["default", "image-overlay", "list"],
    },
    backgroundImage: {
      description: "Background image URL (used with image-overlay variant)",
      control: "text",
    },
    href: {
      description: "Optional link to make the entire card clickable",
      control: "text",
    },
    target: {
      description: "Link target attribute (e.g., '_blank' for new tab)",
      control: "text",
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Card Title",
    description: "This is a card description that provides additional context about the card content.",
    children: (
      <div className="py-4">
        <p className="m-0">Card content goes here. You can put any React components or HTML elements inside the card.</p>
      </div>
    ),
  },
};

export const TitleOnly: Story = {
  args: {
    title: "Card Title",
    children: (
      <div className="py-4">
        <p className="m-0">Card with only a title and content, no description.</p>
      </div>
    ),
  },
};

export const DescriptionOnly: Story = {
  args: {
    description: "This card has only a description without a title.",
    children: (
      <div className="py-4">
        <p className="m-0">Card content with description but no title.</p>
      </div>
    ),
  },
};

export const ContentOnly: Story = {
  args: {
    children: (
      <div>
        <p className="m-0">Simple card with just content, no header section.</p>
      </div>
    ),
  },
};

export const LongContent: Story = {
  args: {
    title: "Long Content Example",
    description: "This card demonstrates how the component handles longer content.",
    children: (
      <div className="py-4">
        <p className="mt-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
          nostrud exercitation ullamco laboris.
        </p>
        <p className="mb-0">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
      </div>
    ),
  },
};

export const WithCustomContent: Story = {
  args: {
    title: "Custom Content",
    description: "Card with various types of content elements.",
    children: (
      <div className="flex flex-col gap-4 pt-4">
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded border border-gray-300 bg-gray-50 cursor-pointer">
            Action 1
          </button>
          <button className="px-4 py-2 rounded border border-gray-300 bg-gray-50 cursor-pointer">
            Action 2
          </button>
        </div>
        <div className="p-4 bg-gray-100 rounded">
          Additional content area
        </div>
      </div>
    ),
  },
};

export const WithoutMenu: Story = {
  args: {
    title: "No Menu Button",
    description: "This card has the menu button hidden.",
    showMenu: false,
    children: (
      <div className="py-4">
        <p className="m-0">Card without a menu button in the top right corner.</p>
      </div>
    ),
  },
};

export const InteractiveMenu: Story = {
  args: {
    title: "Interactive Card",
    description: "Click the three dots to see the menu action.",
    onMenuClick: () => alert("Menu clicked! You can open a dropdown menu here."),
    children: (
      <div className="py-4">
        <p className="m-0">This card has an interactive menu button.</p>
      </div>
    ),
  },
};

export const ImageOverlay: Story = {
  args: {
    title: "Intelation AI",
    description: "Advanced AI-powered data processing",
    variant: "image-overlay",
    backgroundImage: "/images/intelation-ai.jpg",
    showMenu: false,
    href: "/ai-processing",
  },
};

export const ClickableCard: Story = {
  args: {
    title: "Clickable Card",
    description: "Click anywhere on this card to navigate",
    href: "https://www.example.com",
    target: "_blank",
    children: (
      <div className="py-4">
        <p className="m-0">This entire card is clickable and will open in a new tab.</p>
      </div>
    ),
  },
};

export const ListVariant: Story = {
  args: {
    variant: "list",
    title: "Team Members",
    description: "Active team members in your organization",
    children: (
      <>
        <ListItem
          icon={<HiArrowRight />}
          iconColor="violet"
          title="John Doe"
          value="Active"
          valuePosition="right"
        />
        <ListItem
          icon={<HiDocumentText />}
          iconColor="green"
          title="Jane Smith"
          value="Active"
          valuePosition="right"
        />
        <ListItem
          icon={<HiMusicNote />}
          iconColor="cyan"
          title="Michael Brown"
          value="Away"
          valuePosition="right"
        />
        <ListItem
          icon={<HiDocumentText />}
          iconColor="orange"
          title="Sarah Davis"
          value="Offline"
          valuePosition="right"
        />
      </>
    ),
  },
};

export const ListWithBottomValues: Story = {
  args: {
    variant: "list",
    title: "Recent Activities",
    children: (
      <>
        <ListItem
          icon={<HiLockClosed />}
          iconColor="gray"
          title="Document Updated"
          value="2 minutes ago"
          valuePosition="bottom"
        />
        <ListItem
          icon={<HiHeart />}
          iconColor="violet"
          title="Task Completed"
          value="15 minutes ago"
          valuePosition="bottom"
        />
        <ListItem
          icon={<HiArrowRight />}
          iconColor="green"
          title="New Comment"
          value="1 hour ago"
          valuePosition="bottom"
        />
      </>
    ),
  },
};

export const ListWithoutValues: Story = {
  args: {
    variant: "list",
    title: "Menu Items",
    children: (
      <>
        <ListItem
          icon={<HiDocumentText />}
          iconColor="orange"
          title="Dashboard"
        />
        <ListItem
          icon={<HiMusicNote />}
          iconColor="cyan"
          title="Analytics"
        />
        <ListItem
          icon={<HiDocumentText />}
          iconColor="violet"
          title="Settings"
        />
        <ListItem
          icon={<HiUser />}
          iconColor="gray"
          title="Profile"
        />
      </>
    ),
  },
};

export const ListClickable: Story = {
  args: {
    variant: "list",
    title: "Notifications",
    children: (
      <>
        <ListItem
          icon={<span style={{ fontSize: "18px" }}>✓</span>}
          iconColor="green"
          title="New message from John"
          value="5m"
          valuePosition="right"
          onClick={() => alert("Notification clicked!")}
        />
        <ListItem
          icon={<span style={{ fontSize: "18px" }}>→</span>}
          iconColor="orange"
          title="Project milestone reached"
          value="1h"
          valuePosition="right"
          onClick={() => alert("Notification clicked!")}
        />
        <ListItem
          icon={<HiDocumentText />}
          iconColor="cyan"
          title="Deployment successful"
          value="3h"
          valuePosition="right"
          onClick={() => alert("Notification clicked!")}
        />
      </>
    ),
  },
};

export const ListWithImages: Story = {
  args: {
    variant: "list",
    title: "Recent Files",
    children: (
      <>
        <ListItem
          icon="https://via.placeholder.com/40/3b82f6/ffffff?text=PDF"
          title="Project Proposal.pdf"
          value="2.4 MB"
          valuePosition="right"
        />
        <ListItem
          icon="https://via.placeholder.com/40/10b981/ffffff?text=DOC"
          title="Meeting Notes.docx"
          value="156 KB"
          valuePosition="right"
        />
        <ListItem
          icon="https://via.placeholder.com/40/f59e0b/ffffff?text=XLS"
          title="Budget 2025.xlsx"
          value="845 KB"
          valuePosition="right"
        />
        <ListItem
          icon="https://via.placeholder.com/40/8b5cf6/ffffff?text=PPT"
          title="Presentation.pptx"
          value="5.1 MB"
          valuePosition="right"
        />
      </>
    ),
  },
};

export const WithDonutChart: Story = {
  args: {
    title: "System Health",
    description: "Current system status overview",
    showMenu: true,
    children: (
      <div className="flex justify-center py-4">
        <DonutChart
          data={[
            { label: "Active", value: 30, color: '#29D0D8' },
            { label: "Healthy", value: 25, color: '#92D050' },
            { label: "Warning", value: 38.1, color: '#8068F4' },
            { label: "Inactive", value: 6.9, color: '#E0E0E0' },
          ]}
          centerText={{ value: "93.1%", label: "Healthy" }}
          size="md"
        />
      </div>
    ),
  },
};

export const WithGaugeChart: Story = {
  args: {
    title: "Performance Score",
    description: "Overall system performance metric",
    showMenu: true,
    children: (
      <div className="flex justify-center py-4">
        <GaugeChart
          value={78.5}
          size="md"
        />
      </div>
    ),
  },
};

export const WithMixedBarChart: Story = {
  args: {
    title: "Regional Coverage",
    description: "Active frameworks and country coverage by region",
    showMenu: true,
    children: (
      <div className="py-4">
        <BarChart
          labels={["Germany", "France", "Italy", "Spain", "Netherlands", "Belgium"]}
          datasets={[
            {
              label: "Active Frameworks",
              data: [12, 31, 13, 11, 18, 15],
            },
            {
              label: "Countries Covered",
              data: [9, 11, 8, 10, 7, 9],
            },
          ]}
          size="lg"
        />
      </div>
    ),
  },
  parameters: {
    layout: "padded",
  },
};

// Sectioned Card Examples

export const TwoSections: Story = {
  args: {
    showMenu: true,
    children: (
      <>
        <CardSection 
          flex={2}
          title="Left Section"
          description="This is the left section with flex value of 2. It takes up twice the space of the right section."
        >
          <div className="py-4">
            <p className="m-0 text-sm text-gray-600">
              Card content goes here. You can add charts, metrics, or any other content.
            </p>
          </div>
        </CardSection>
        <CardSection 
          flex={1}
          title="Right Section"
          description="This is the right section with flex value of 1."
        >
          <div className="py-4">
            <p className="m-0 text-sm text-gray-600">
              Additional content for the right section.
            </p>
          </div>
        </CardSection>
      </>
    ),
  },
  parameters: {
    layout: "padded",
  },
};

export const ThreeSections: Story = {
  args: {
    showMenu: true,
    children: (
      <>
        <CardSection flex={1} title="Active Users" description="Current active users">
          <div className="flex flex-col items-center justify-center py-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">42</div>
            <div className="text-sm text-gray-600">Users online</div>
          </div>
        </CardSection>
        <CardSection flex={1} title="Completed" description="Tasks completed today">
          <div className="flex flex-col items-center justify-center py-6">
            <div className="text-4xl font-bold text-green-600 mb-2">127</div>
            <div className="text-sm text-gray-600">Total tasks</div>
          </div>
        </CardSection>
        <CardSection flex={1} title="Pending" description="Tasks awaiting review">
          <div className="flex flex-col items-center justify-center py-6">
            <div className="text-4xl font-bold text-purple-600 mb-2">8</div>
            <div className="text-sm text-gray-600">In queue</div>
          </div>
        </CardSection>
      </>
    ),
  },
  parameters: {
    layout: "padded",
  },
};

export const SectionsWithCharts: Story = {
  args: {
    showMenu: true,
    children: (
      <>
        <CardSection flex={2} title="Monthly Revenue" description="Revenue trends over the past six months">
          <BarChart
            labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]}
            datasets={[
              {
                label: "Revenue",
                data: [12, 19, 15, 17, 22, 24],
              },
            ]}
            size="md"
          />
        </CardSection>
        <CardSection flex={1} title="Product Distribution" description="Sales by product category">
          <div className="flex justify-center py-4">
            <DonutChart
              data={[
                { label: "Product A", value: 30 },
                { label: "Product B", value: 25 },
                { label: "Product C", value: 20 },
                { label: "Product D", value: 25 },
              ]}
              size="sm"
            />
          </div>
        </CardSection>
      </>
    ),
  },
  parameters: {
    layout: "padded",
  },
};

export const SectionsWithDividerGaps: Story = {
  args: {
    showMenu: true,
    children: (
      <>
        <CardSection flex={1} dividerGap="none" title="No Gap" description="Divider touches top and bottom">
          <div className="py-4">
            <p className="m-0 text-sm text-gray-600">
              Gap setting: none
            </p>
          </div>
        </CardSection>
        <CardSection flex={1} dividerGap="sm" title="Small Gap" description="16px gap from top and bottom">
          <div className="py-4">
            <p className="m-0 text-sm text-gray-600">
              Gap setting: sm
            </p>
          </div>
        </CardSection>
        <CardSection flex={1} dividerGap="md" title="Medium Gap" description="30px gap from top and bottom (default)">
          <div className="py-4">
            <p className="m-0 text-sm text-gray-600">
              Gap setting: md
            </p>
          </div>
        </CardSection>
        <CardSection flex={1} title="No Divider" description="Last section has no divider">
          <div className="py-4">
            <p className="m-0 text-sm text-gray-600">
              No divider shown
            </p>
          </div>
        </CardSection>
      </>
    ),
  },
  parameters: {
    layout: "padded",
  },
};

export const FixedAndFlexibleSections: Story = {
  args: {
    showMenu: true,
    children: (
      <>
        <CardSection flex="200px" title="Fixed Width" description="This section has a fixed width of 200px">
          <div className="py-4">
            <p className="m-0 text-sm text-gray-600">
              Fixed at 200px
            </p>
          </div>
        </CardSection>
        <CardSection flex={1} title="Flexible Width" description="This section takes up the remaining space">
          <div className="py-4">
            <p className="m-0 text-sm text-gray-600">
              Grows to fill available space
            </p>
          </div>
        </CardSection>
      </>
    ),
  },
  parameters: {
    layout: "padded",
  },
};

export const SectionsWithMetrics: Story = {
  args: {
    showMenu: true,
    children: (
      <>
        <CardSection flex={1} title="Response Time" description="Average API response time">
          <div className="flex flex-col items-center justify-center py-6">
            <div className="text-5xl font-bold text-blue-600 mb-1">124ms</div>
            <div className="text-xs text-green-600 font-medium">↓ 12% faster</div>
          </div>
        </CardSection>
        <CardSection flex={1} title="Throughput" description="Requests per second">
          <div className="flex flex-col items-center justify-center py-6">
            <div className="text-5xl font-bold text-purple-600 mb-1">2.4K</div>
            <div className="text-xs text-green-600 font-medium">↑ 8% increase</div>
          </div>
        </CardSection>
        <CardSection flex={1} title="Error Rate" description="Failed requests percentage">
          <div className="flex flex-col items-center justify-center py-6">
            <div className="text-5xl font-bold text-green-600 mb-1">0.02%</div>
            <div className="text-xs text-green-600 font-medium">↓ 0.05% lower</div>
          </div>
        </CardSection>
      </>
    ),
  },
  parameters: {
    layout: "padded",
  },
};
