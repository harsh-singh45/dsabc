import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Badge } from './Badge';

describe('Badge', () => {
  describe('Rendering', () => {
    it('renders with children', () => {
      render(<Badge>Test Badge</Badge>);
      expect(screen.getByText('Test Badge')).toBeInTheDocument();
    });

    it('renders with default props', () => {
      const { container } = render(<Badge>Default</Badge>);
      const badge = container.firstChild as HTMLElement;
      expect(badge).toHaveClass('badge');
      expect(badge).toHaveClass('badge--primary');
      expect(badge).toHaveClass('badge--md');
      expect(badge).toHaveClass('badge--solid');
      expect(badge).toHaveClass('badge--pill');
    });

    it('renders with custom className', () => {
      const { container } = render(<Badge className="custom-class">Test</Badge>);
      expect(container.firstChild).toHaveClass('custom-class');
    });

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLSpanElement>();
      render(<Badge ref={ref}>Test</Badge>);
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });
  });

  describe('Variants', () => {
    it('renders primary variant', () => {
      const { container } = render(<Badge variant="primary">Primary</Badge>);
      expect(container.firstChild).toHaveClass('badge--primary');
    });

    it('renders secondary variant', () => {
      const { container } = render(<Badge variant="secondary">Secondary</Badge>);
      expect(container.firstChild).toHaveClass('badge--secondary');
    });

    it('renders success variant', () => {
      const { container } = render(<Badge variant="success">Success</Badge>);
      expect(container.firstChild).toHaveClass('badge--success');
    });

    it('renders warning variant', () => {
      const { container } = render(<Badge variant="warning">Warning</Badge>);
      expect(container.firstChild).toHaveClass('badge--warning');
    });

    it('renders danger variant', () => {
      const { container } = render(<Badge variant="danger">Danger</Badge>);
      expect(container.firstChild).toHaveClass('badge--danger');
    });
  });

  describe('Sizes', () => {
    it('renders small size', () => {
      const { container } = render(<Badge size="sm">Small</Badge>);
      expect(container.firstChild).toHaveClass('badge--sm');
    });

    it('renders medium size', () => {
      const { container } = render(<Badge size="md">Medium</Badge>);
      expect(container.firstChild).toHaveClass('badge--md');
    });

    it('renders large size', () => {
      const { container } = render(<Badge size="lg">Large</Badge>);
      expect(container.firstChild).toHaveClass('badge--lg');
    });
  });

  describe('Badge Styles', () => {
    it('renders solid style', () => {
      const { container } = render(<Badge badgeStyle="solid">Solid</Badge>);
      expect(container.firstChild).toHaveClass('badge--solid');
    });

    it('renders outline style', () => {
      const { container } = render(<Badge badgeStyle="outline">Outline</Badge>);
      expect(container.firstChild).toHaveClass('badge--outline');
    });
  });

  describe('Shapes', () => {
    it('renders pill shape', () => {
      const { container } = render(<Badge shape="pill">Pill</Badge>);
      expect(container.firstChild).toHaveClass('badge--pill');
    });

    it('renders rectangular shape', () => {
      const { container } = render(<Badge shape="rectangular">Rectangular</Badge>);
      expect(container.firstChild).toHaveClass('badge--rectangular');
    });
  });

  describe('Icon', () => {
    it('renders with icon', () => {
      const icon = <span data-testid="test-icon">★</span>;
      render(<Badge icon={icon}>With Icon</Badge>);
      expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    });

    it('renders icon in correct container', () => {
      const icon = <span data-testid="test-icon">★</span>;
      const { container } = render(<Badge icon={icon}>Test</Badge>);
      const iconContainer = container.querySelector('.badge__icon');
      expect(iconContainer).toBeInTheDocument();
      expect(iconContainer).toContainElement(screen.getByTestId('test-icon'));
    });

    it('renders without icon when not provided', () => {
      const { container } = render(<Badge>No Icon</Badge>);
      const iconContainer = container.querySelector('.badge__icon');
      expect(iconContainer).not.toBeInTheDocument();
    });
  });

  describe('Removable Badge', () => {
    it('renders remove button when removable is true', () => {
      render(
        <Badge removable onRemove={() => {}}>
          Removable
        </Badge>
      );
      expect(screen.getByLabelText('Remove')).toBeInTheDocument();
    });

    it('does not render remove button when removable is false', () => {
      render(<Badge removable={false}>Not Removable</Badge>);
      expect(screen.queryByLabelText('Remove')).not.toBeInTheDocument();
    });

    it('calls onRemove when remove button is clicked', async () => {
      const user = userEvent.setup();
      const onRemove = jest.fn();
      render(
        <Badge removable onRemove={onRemove}>
          Remove Me
        </Badge>
      );

      const removeButton = screen.getByLabelText('Remove');
      await user.click(removeButton);

      expect(onRemove).toHaveBeenCalledTimes(1);
    });

    it('stops event propagation when remove button is clicked', async () => {
      const user = userEvent.setup();
      const onRemove = jest.fn();
      const onBadgeClick = jest.fn();

      render(
        <Badge removable onRemove={onRemove} onClick={onBadgeClick}>
          Test
        </Badge>
      );

      const removeButton = screen.getByLabelText('Remove');
      await user.click(removeButton);

      expect(onRemove).toHaveBeenCalledTimes(1);
      expect(onBadgeClick).not.toHaveBeenCalled();
    });

    it('renders remove button with correct SVG icon', () => {
      const { container } = render(
        <Badge removable onRemove={() => {}}>
          Test
        </Badge>
      );
      const svg = container.querySelector('.badge__remove svg');
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute('aria-hidden', 'true');
    });
  });

  describe('Accessibility', () => {
    it('has correct ARIA label for remove button', () => {
      render(
        <Badge removable onRemove={() => {}}>
          Test
        </Badge>
      );
      const removeButton = screen.getByLabelText('Remove');
      expect(removeButton).toHaveAttribute('aria-label', 'Remove');
    });

    it('has correct button type for remove button', () => {
      render(
        <Badge removable onRemove={() => {}}>
          Test
        </Badge>
      );
      const removeButton = screen.getByLabelText('Remove');
      expect(removeButton).toHaveAttribute('type', 'button');
    });

    it('supports custom HTML attributes', () => {
      render(
        <Badge data-testid="custom-badge" aria-label="Custom badge">
          Test
        </Badge>
      );
      const badge = screen.getByTestId('custom-badge');
      expect(badge).toHaveAttribute('aria-label', 'Custom badge');
    });
  });

  describe('Complex Scenarios', () => {
    it('renders with all props combined', () => {
      const icon = <span data-testid="icon">★</span>;
      const onRemove = jest.fn();

      const { container } = render(
        <Badge
          variant="success"
          size="lg"
          badgeStyle="outline"
          shape="rectangular"
          removable
          onRemove={onRemove}
          icon={icon}
          className="custom-class"
        >
          Complete Badge
        </Badge>
      );

      const badge = container.firstChild as HTMLElement;
      expect(badge).toHaveClass('badge');
      expect(badge).toHaveClass('badge--success');
      expect(badge).toHaveClass('badge--lg');
      expect(badge).toHaveClass('badge--outline');
      expect(badge).toHaveClass('badge--rectangular');
      expect(badge).toHaveClass('custom-class');
      expect(screen.getByTestId('icon')).toBeInTheDocument();
      expect(screen.getByLabelText('Remove')).toBeInTheDocument();
      expect(screen.getByText('Complete Badge')).toBeInTheDocument();
    });

    it('handles multiple badges with different variants', () => {
      render(
        <>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="danger">Danger</Badge>
        </>
      );

      expect(screen.getByText('Primary')).toBeInTheDocument();
      expect(screen.getByText('Success')).toBeInTheDocument();
      expect(screen.getByText('Danger')).toBeInTheDocument();
    });

    it('renders with long text content', () => {
      const longText = 'This is a very long badge text that should wrap or truncate';
      render(<Badge>{longText}</Badge>);
      expect(screen.getByText(longText)).toBeInTheDocument();
    });

    it('renders with numeric children', () => {
      render(<Badge>{42}</Badge>);
      expect(screen.getByText('42')).toBeInTheDocument();
    });

    it('renders with React element children', () => {
      render(
        <Badge>
          <strong>Bold Text</strong>
        </Badge>
      );
      expect(screen.getByText('Bold Text')).toBeInTheDocument();
    });
  });

  describe('Event Handlers', () => {
    it('handles onClick event', async () => {
      const user = userEvent.setup();
      const onClick = jest.fn();
      render(<Badge onClick={onClick}>Clickable</Badge>);

      await user.click(screen.getByText('Clickable'));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('handles onMouseEnter event', async () => {
      const user = userEvent.setup();
      const onMouseEnter = jest.fn();
      render(<Badge onMouseEnter={onMouseEnter}>Hoverable</Badge>);

      await user.hover(screen.getByText('Hoverable'));
      expect(onMouseEnter).toHaveBeenCalledTimes(1);
    });

    it('handles onMouseLeave event', async () => {
      const user = userEvent.setup();
      const onMouseLeave = jest.fn();
      render(<Badge onMouseLeave={onMouseLeave}>Hoverable</Badge>);

      const badge = screen.getByText('Hoverable');
      await user.hover(badge);
      await user.unhover(badge);
      expect(onMouseLeave).toHaveBeenCalledTimes(1);
    });
  });
});
