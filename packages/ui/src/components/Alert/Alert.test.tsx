import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Alert } from './Alert';

describe('Alert', () => {
  describe('Rendering', () => {
    it('renders with default props', () => {
      render(<Alert>Test alert</Alert>);
      const alert = screen.getByRole('alert');
      expect(alert).toBeInTheDocument();
      expect(screen.getByText('Test alert')).toBeInTheDocument();
    });

    it('renders with title', () => {
      render(<Alert title="Alert Title">Alert message</Alert>);
      expect(screen.getByText('Alert Title')).toBeInTheDocument();
      expect(screen.getByText('Alert message')).toBeInTheDocument();
    });

    it('renders with custom icon', () => {
      render(<Alert icon={<span data-testid="custom-icon">!</span>}>Alert</Alert>);
      expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    });

    it('renders without icon when icon is null', () => {
      const { container } = render(<Alert icon={null}>Alert</Alert>);
      expect(container.querySelector('.alert__icon')).not.toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it.each(['info', 'success', 'warning', 'error'] as const)(
      'renders %s variant',
      (variant) => {
        const { container } = render(<Alert variant={variant}>Test</Alert>);
        expect(container.firstChild).toHaveClass(`alert--${variant}`);
      }
    );
  });

  describe('Dismissible', () => {
    it('shows close button when dismissible', () => {
      render(<Alert dismissible>Test</Alert>);
      expect(screen.getByLabelText('Dismiss alert')).toBeInTheDocument();
    });

    it('hides alert when close button is clicked', async () => {
      const user = userEvent.setup();
      render(<Alert dismissible>Test alert</Alert>);
      
      const closeButton = screen.getByLabelText('Dismiss alert');
      await user.click(closeButton);
      
      expect(screen.queryByText('Test alert')).not.toBeInTheDocument();
    });

    it('calls onDismiss when dismissed', async () => {
      const user = userEvent.setup();
      const onDismiss = jest.fn();
      render(<Alert dismissible onDismiss={onDismiss}>Test</Alert>);
      
      await user.click(screen.getByLabelText('Dismiss alert'));
      expect(onDismiss).toHaveBeenCalledTimes(1);
    });
  });

  describe('Actions', () => {
    it('renders action buttons', () => {
      render(
        <Alert actions={<button>Action Button</button>}>
          Alert with action
        </Alert>
      );
      expect(screen.getByText('Action Button')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has role="alert"', () => {
      render(<Alert>Test</Alert>);
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('has aria-live="polite"', () => {
      render(<Alert>Test</Alert>);
      expect(screen.getByRole('alert')).toHaveAttribute('aria-live', 'polite');
    });
  });

  describe('forwardRef', () => {
    it('forwards ref to container div', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<Alert ref={ref}>Test</Alert>);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
      expect(ref.current).toHaveClass('alert');
    });
  });
});
