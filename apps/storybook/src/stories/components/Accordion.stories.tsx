import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Accordion, AccordionItem } from '@intelation/ui';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'radio',
      options: ['single', 'multiple'],
      description: 'Expansion mode - single or multiple items can be open',
    },
    defaultExpanded: {
      control: 'object',
      description: 'Array of item IDs that should be expanded by default',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// Sample items
const basicItems: AccordionItem[] = [
  {
    id: 'item-1',
    trigger: 'What is the Intelation Design System?',
    content: 'The Intelation Design System is a comprehensive set of reusable components and design tokens built with React, TypeScript, and Tailwind CSS.',
  },
  {
    id: 'item-2',
    trigger: 'How do I install it?',
    content: 'You can install the package using npm: npm install @intelation/ui. Make sure to also install the required peer dependencies.',
  },
  {
    id: 'item-3',
    trigger: 'Is it accessible?',
    content: 'Yes! All components are built with WCAG 2.1 Level AA compliance in mind, including keyboard navigation and screen reader support.',
  },
];

const detailedItems: AccordionItem[] = [
  {
    id: 'features',
    trigger: 'Features',
    content: (
      <div>
        <p style={{ marginBottom: '12px' }}>The Accordion component includes:</p>
        <ul style={{ marginLeft: '20px', marginBottom: '12px' }}>
          <li>Single and multiple expansion modes</li>
          <li>Keyboard navigation support</li>
          <li>Customizable trigger content</li>
          <li>Smooth animations</li>
          <li>Disabled state support</li>
        </ul>
        <p style={{ margin: 0 }}>All features follow accessibility best practices.</p>
      </div>
    ),
  },
  {
    id: 'usage',
    trigger: 'Usage Example',
    content: (
      <div>
        <p style={{ marginBottom: '8px' }}>Basic usage:</p>
        <pre style={{
          backgroundColor: '#f5f5f5',
          padding: '12px',
          borderRadius: '4px',
          fontSize: '14px',
          overflow: 'auto',
        }}>
{`<Accordion
  items={items}
  mode="single"
  defaultExpanded={['item-1']}
/>`}
        </pre>
      </div>
    ),
  },
  {
    id: 'props',
    trigger: 'Props Documentation',
    content: (
      <div>
        <p style={{ marginBottom: '12px' }}><strong>Available Props:</strong></p>
        <ul style={{ marginLeft: '20px', listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '8px' }}><code>items</code>: AccordionItem[] - Array of accordion items</li>
          <li style={{ marginBottom: '8px' }}><code>mode</code>: 'single' | 'multiple' - Expansion behavior</li>
          <li style={{ marginBottom: '8px' }}><code>defaultExpanded</code>: string[] - Initially expanded items</li>
          <li style={{ marginBottom: '8px' }}><code>onExpandChange</code>: (ids: string[]) =&gt; void - Callback</li>
        </ul>
      </div>
    ),
  },
];

const disabledItems: AccordionItem[] = [
  {
    id: 'enabled-1',
    trigger: 'Active Section',
    content: 'This section is active and can be expanded.',
  },
  {
    id: 'disabled-1',
    trigger: 'Disabled Section',
    content: 'This content cannot be accessed.',
    disabled: true,
  },
  {
    id: 'enabled-2',
    trigger: 'Another Active Section',
    content: 'This section is also active and functional.',
  },
];

// Default story - Single mode
export const Default: Story = {
  args: {
    items: basicItems,
    mode: 'single',
  },
};

// Single mode with default expanded
export const SingleModeExpanded: Story = {
  args: {
    items: basicItems,
    mode: 'single',
    defaultExpanded: ['item-2'],
  },
};

// Multiple mode
export const MultipleMode: Story = {
  args: {
    items: basicItems,
    mode: 'multiple',
  },
};

// Multiple mode with multiple defaults expanded
export const MultipleModeExpanded: Story = {
  args: {
    items: basicItems,
    mode: 'multiple',
    defaultExpanded: ['item-1', 'item-3'],
  },
};

// Complex content
export const ComplexContent: Story = {
  args: {
    items: detailedItems,
    mode: 'single',
  },
};

// With disabled items
export const WithDisabledItems: Story = {
  args: {
    items: disabledItems,
    mode: 'single',
  },
};

// Controlled example
export const Controlled: Story = {
  render: () => {
    const [expanded, setExpanded] = useState<string[]>(['item-1']);

    return (
      <div>
        <div style={{ marginBottom: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setExpanded(['item-1'])}
            style={{
              padding: '8px 16px',
              backgroundColor: 'var(--color-brand-500)',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Open First
          </button>
          <button
            onClick={() => setExpanded(['item-2'])}
            style={{
              padding: '8px 16px',
              backgroundColor: 'var(--color-brand-500)',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Open Second
          </button>
          <button
            onClick={() => setExpanded(['item-3'])}
            style={{
              padding: '8px 16px',
              backgroundColor: 'var(--color-brand-500)',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Open Third
          </button>
          <button
            onClick={() => setExpanded([])}
            style={{
              padding: '8px 16px',
              backgroundColor: 'var(--color-gray-500)',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Close All
          </button>
        </div>
        <p style={{ marginBottom: '16px', color: 'var(--color-text-secondary)' }}>
          Current expanded: {expanded.length > 0 ? expanded.join(', ') : 'None'}
        </p>
        <Accordion
          items={basicItems}
          mode="single"
          expanded={expanded}
          onExpandChange={setExpanded}
        />
      </div>
    );
  },
};

// Settings panel use case
export const SettingsPanel: Story = {
  render: () => {
    const settingsItems: AccordionItem[] = [
      {
        id: 'account',
        trigger: 'Account Settings',
        content: (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}>
                Email
              </label>
              <input
                type="email"
                defaultValue="user@example.com"
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid var(--color-border-primary)',
                  borderRadius: '4px',
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}>
                Username
              </label>
              <input
                type="text"
                defaultValue="johndoe"
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid var(--color-border-primary)',
                  borderRadius: '4px',
                }}
              />
            </div>
          </div>
        ),
      },
      {
        id: 'notifications',
        trigger: 'Notification Preferences',
        content: (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" defaultChecked />
              Email notifications
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" defaultChecked />
              Push notifications
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" />
              SMS notifications
            </label>
          </div>
        ),
      },
      {
        id: 'privacy',
        trigger: 'Privacy & Security',
        content: (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" defaultChecked />
              Two-factor authentication
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <input type="checkbox" />
              Profile visibility
            </label>
            <button
              style={{
                padding: '8px 16px',
                backgroundColor: 'var(--color-red-500)',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                marginTop: '8px',
              }}
            >
              Delete Account
            </button>
          </div>
        ),
      },
    ];

    return <Accordion items={settingsItems} mode="single" />;
  },
};

// FAQ use case
export const FAQ: Story = {
  render: () => {
    const faqItems: AccordionItem[] = [
      {
        id: 'faq-1',
        trigger: 'What payment methods do you accept?',
        content: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers.',
      },
      {
        id: 'faq-2',
        trigger: 'How can I cancel my subscription?',
        content: 'You can cancel your subscription at any time from your account settings. Go to Billing > Subscription and click "Cancel Subscription". Your access will continue until the end of your billing period.',
      },
      {
        id: 'faq-3',
        trigger: 'Do you offer refunds?',
        content: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied with our service, contact our support team within 30 days of purchase for a full refund.',
      },
      {
        id: 'faq-4',
        trigger: 'Is my data secure?',
        content: 'Absolutely. We use industry-standard encryption (AES-256) for data at rest and TLS 1.3 for data in transit. Our infrastructure is SOC 2 Type II certified and GDPR compliant.',
      },
      {
        id: 'faq-5',
        trigger: 'Can I upgrade or downgrade my plan?',
        content: 'Yes, you can change your plan at any time. Upgrades take effect immediately, and you\'ll be charged the prorated difference. Downgrades take effect at the start of your next billing cycle.',
      },
    ];

    return <Accordion items={faqItems} mode="single" />;
  },
};

// Playground
export const Playground: Story = {
  args: {
    items: basicItems,
    mode: 'single',
    defaultExpanded: [],
  },
};
