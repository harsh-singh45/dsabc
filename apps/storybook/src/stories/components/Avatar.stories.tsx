import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "@intelation/ui";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Avatar component for displaying user profile images, initials, or fallback icons with customizable sizes, shapes, and color schemes.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "The size of the avatar",
    },
    shape: {
      control: "select",
      options: ["circle", "square"],
      description: "The shape of the avatar",
    },
    colorScheme: {
      control: "select",
      options: ["primary", "secondary", "success", "danger", "warning", "gradient"],
      description: "The color scheme for initials-based avatars",
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  args: {
    src: "https://i.pravatar.cc/150?img=1",
    alt: "User Avatar",
  },
};

export const WithInitials: Story = {
  args: {
    name: "John Doe",
    alt: "John Doe",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Avatar size="xs" name="John Doe" alt="Extra Small" />
      <Avatar size="sm" name="John Doe" alt="Small" />
      <Avatar size="md" name="John Doe" alt="Medium" />
      <Avatar size="lg" name="John Doe" alt="Large" />
      <Avatar size="xl" name="John Doe" alt="Extra Large" />
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Avatar shape="circle" name="Circle Avatar" alt="Circle" />
      <Avatar shape="square" name="Square Avatar" alt="Square" />
    </div>
  ),
};

export const ColorSchemes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      <Avatar colorScheme="primary" name="Primary User" alt="Primary" />
      <Avatar colorScheme="secondary" name="Secondary User" alt="Secondary" />
      <Avatar colorScheme="success" name="Success User" alt="Success" />
      <Avatar colorScheme="danger" name="Danger User" alt="Danger" />
      <Avatar colorScheme="warning" name="Warning User" alt="Warning" />
      <Avatar colorScheme="gradient" name="Gradient User" alt="Gradient" />
    </div>
  ),
};

export const WithImages: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Avatar src="https://i.pravatar.cc/150?img=1" alt="User 1" size="md" />
      <Avatar src="https://i.pravatar.cc/150?img=2" alt="User 2" size="md" />
      <Avatar src="https://i.pravatar.cc/150?img=3" alt="User 3" size="md" />
      <Avatar src="https://i.pravatar.cc/150?img=4" alt="User 4" size="md" />
    </div>
  ),
};

export const FallbackStates: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{ textAlign: 'center' }}>
        <Avatar name="John Doe" alt="With Name" />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>With Name</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar alt="No Name or Image" />
        <div style={{ fontSize: '12px', marginTop: '8px' }}>No Name/Image</div>
      </div>
    </div>
  ),
};

export const DifferentNames: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      <Avatar name="Alice Johnson" alt="Alice Johnson" colorScheme="primary" />
      <Avatar name="Bob Smith" alt="Bob Smith" colorScheme="secondary" />
      <Avatar name="Charlie Brown" alt="Charlie Brown" colorScheme="success" />
      <Avatar name="Diana Prince" alt="Diana Prince" colorScheme="danger" />
      <Avatar name="Eve Adams" alt="Eve Adams" colorScheme="warning" />
      <Avatar name="Frank Miller" alt="Frank Miller" colorScheme="gradient" />
    </div>
  ),
};

export const AvatarGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ display: 'flex', marginLeft: 0 }}>
        {[1, 2, 3, 4, 5].map((num, index) => (
          <div
            key={num}
            style={{
              marginLeft: index > 0 ? '-12px' : '0',
              position: 'relative',
              zIndex: 5 - index,
            }}
          >
            <Avatar
              src={`https://i.pravatar.cc/150?img=${num}`}
              alt={`User ${num}`}
              size="md"
              style={{ border: '2px solid white' }}
            />
          </div>
        ))}
      </div>
    </div>
  ),
};

export const WithBadge: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px' }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <Avatar src="https://i.pravatar.cc/150?img=1" alt="Online User" size="lg" />
        <div
          style={{
            position: 'absolute',
            bottom: '4px',
            right: '4px',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#10b981',
            border: '2px solid white',
          }}
        />
      </div>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <Avatar src="https://i.pravatar.cc/150?img=2" alt="Away User" size="lg" />
        <div
          style={{
            position: 'absolute',
            bottom: '4px',
            right: '4px',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#f59e0b',
            border: '2px solid white',
          }}
        />
      </div>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <Avatar src="https://i.pravatar.cc/150?img=3" alt="Offline User" size="lg" />
        <div
          style={{
            position: 'absolute',
            bottom: '4px',
            right: '4px',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#6b7280',
            border: '2px solid white',
          }}
        />
      </div>
    </div>
  ),
};

export const RealWorldExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '400px' }}>
      <div>
        <h4 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>User Profile Header</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Avatar src="https://i.pravatar.cc/150?img=10" alt="Sarah Johnson" size="xl" />
          <div>
            <div style={{ fontWeight: 600, fontSize: '18px' }}>Sarah Johnson</div>
            <div style={{ color: '#6b7280', fontSize: '14px' }}>Product Designer</div>
          </div>
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Team Members</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { name: "Alex Chen", role: "Engineering Lead", img: 11 },
            { name: "Maria Garcia", role: "UX Designer", img: 12 },
            { name: "James Wilson", role: "Frontend Developer", img: 13 },
          ].map((member) => (
            <div key={member.name} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Avatar src={`https://i.pravatar.cc/150?img=${member.img}`} alt={member.name} size="md" />
              <div>
                <div style={{ fontWeight: 500, fontSize: '14px' }}>{member.name}</div>
                <div style={{ color: '#6b7280', fontSize: '12px' }}>{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Comment Section</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { name: "Emily Brown", comment: "Great work on this feature!", time: "2h ago" },
            { name: "David Lee", comment: "Looking forward to the next update.", time: "5h ago" },
          ].map((comment, index) => (
            <div key={index} style={{ display: 'flex', gap: '12px' }}>
              <Avatar name={comment.name} alt={comment.name} size="sm" colorScheme="primary" />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ fontWeight: 600, fontSize: '14px' }}>{comment.name}</span>
                  <span style={{ color: '#6b7280', fontSize: '12px' }}>{comment.time}</span>
                </div>
                <div style={{ fontSize: '14px' }}>{comment.comment}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const AllSizesWithImages: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Avatar size="xs" src="https://i.pravatar.cc/150?img=20" alt="XS" />
      <Avatar size="sm" src="https://i.pravatar.cc/150?img=21" alt="SM" />
      <Avatar size="md" src="https://i.pravatar.cc/150?img=22" alt="MD" />
      <Avatar size="lg" src="https://i.pravatar.cc/150?img=23" alt="LG" />
      <Avatar size="xl" src="https://i.pravatar.cc/150?img=24" alt="XL" />
    </div>
  ),
};

export const AllSizesWithInitials: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Avatar size="xs" name="Extra Small" alt="XS" colorScheme="primary" />
      <Avatar size="sm" name="Small Size" alt="SM" colorScheme="secondary" />
      <Avatar size="md" name="Medium Size" alt="MD" colorScheme="success" />
      <Avatar size="lg" name="Large Size" alt="LG" colorScheme="danger" />
      <Avatar size="xl" name="Extra Large" alt="XL" colorScheme="warning" />
    </div>
  ),
};
