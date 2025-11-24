import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Avatar } from './Avatar';

describe('Avatar', () => {
  describe('Rendering', () => {
    it('renders with default props', () => {
      render(<Avatar />);
      const avatar = screen.getByText('?');
      expect(avatar).toBeInTheDocument();
    });

    it('renders with image src', () => {
      render(<Avatar src="/avatar.jpg" alt="User avatar" />);
      const img = screen.getByRole('img', { name: /user avatar/i });
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', '/avatar.jpg');
    });

    it('renders initials from name', () => {
      render(<Avatar name="John Doe" />);
      expect(screen.getByText('JD')).toBeInTheDocument();
    });

    it('renders initials for single name', () => {
      render(<Avatar name="John" />);
      expect(screen.getByText('J')).toBeInTheDocument();
    });

    it('renders initials for multiple names (takes first two)', () => {
      render(<Avatar name="John Paul Doe" />);
      expect(screen.getByText('JP')).toBeInTheDocument();
    });

    it('renders custom className', () => {
      render(<Avatar className="custom-avatar" name="Test" />);
      const avatar = screen.getByText('T').parentElement;
      expect(avatar).toHaveClass('custom-avatar');
    });
  });

  describe('Avatar Sizes', () => {
    it('renders extra small size', () => {
      render(<Avatar size="xs" name="Test" />);
      const avatar = screen.getByText('T').parentElement;
      expect(avatar).toHaveClass('avatar--xs');
    });

    it('renders small size', () => {
      render(<Avatar size="sm" name="Test" />);
      const avatar = screen.getByText('T').parentElement;
      expect(avatar).toHaveClass('avatar--sm');
    });

    it('renders medium size (default)', () => {
      render(<Avatar name="Test" />);
      const avatar = screen.getByText('T').parentElement;
      expect(avatar).toHaveClass('avatar--md');
    });

    it('renders large size', () => {
      render(<Avatar size="lg" name="Test" />);
      const avatar = screen.getByText('T').parentElement;
      expect(avatar).toHaveClass('avatar--lg');
    });

    it('renders extra large size', () => {
      render(<Avatar size="xl" name="Test" />);
      const avatar = screen.getByText('T').parentElement;
      expect(avatar).toHaveClass('avatar--xl');
    });
  });

  describe('Avatar Shapes', () => {
    it('renders circle shape (default)', () => {
      render(<Avatar name="Test" />);
      const avatar = screen.getByText('T').parentElement;
      expect(avatar).toHaveClass('avatar--circle');
    });

    it('renders square shape', () => {
      render(<Avatar shape="square" name="Test" />);
      const avatar = screen.getByText('T').parentElement;
      expect(avatar).toHaveClass('avatar--square');
    });
  });

  describe('Color Schemes', () => {
    it('renders primary color scheme (default)', () => {
      render(<Avatar name="Test" />);
      const avatar = screen.getByText('T').parentElement;
      expect(avatar).toHaveClass('avatar--primary');
    });

    it('renders secondary color scheme', () => {
      render(<Avatar colorScheme="secondary" name="Test" />);
      const avatar = screen.getByText('T').parentElement;
      expect(avatar).toHaveClass('avatar--secondary');
    });

    it('renders success color scheme', () => {
      render(<Avatar colorScheme="success" name="Test" />);
      const avatar = screen.getByText('T').parentElement;
      expect(avatar).toHaveClass('avatar--success');
    });

    it('renders danger color scheme', () => {
      render(<Avatar colorScheme="danger" name="Test" />);
      const avatar = screen.getByText('T').parentElement;
      expect(avatar).toHaveClass('avatar--danger');
    });

    it('renders warning color scheme', () => {
      render(<Avatar colorScheme="warning" name="Test" />);
      const avatar = screen.getByText('T').parentElement;
      expect(avatar).toHaveClass('avatar--warning');
    });

    it('renders gradient color scheme', () => {
      render(<Avatar colorScheme="gradient" name="Test" />);
      const avatar = screen.getByText('T').parentElement;
      expect(avatar).toHaveClass('avatar--gradient');
    });

    it('does not apply color scheme when image is provided', () => {
      render(<Avatar src="/avatar.jpg" alt="Avatar" colorScheme="primary" />);
      const img = screen.getByRole('img');
      const avatar = img.parentElement;
      expect(avatar).not.toHaveClass('avatar--primary');
    });
  });

  describe('Image Priority', () => {
    it('shows image when both src and name are provided', () => {
      render(<Avatar src="/avatar.jpg" alt="Avatar" name="John Doe" />);
      expect(screen.getByRole('img')).toBeInTheDocument();
      expect(screen.queryByText('JD')).not.toBeInTheDocument();
    });

    it('shows initials when no image src', () => {
      render(<Avatar name="Jane Smith" />);
      expect(screen.getByText('JS')).toBeInTheDocument();
      expect(screen.queryByRole('img')).not.toBeInTheDocument();
    });

    it('shows question mark when no src and no name', () => {
      render(<Avatar />);
      expect(screen.getByText('?')).toBeInTheDocument();
    });
  });

  describe('Alt Text', () => {
    it('uses alt prop for image', () => {
      render(<Avatar src="/avatar.jpg" alt="Profile picture" />);
      const img = screen.getByAltText(/profile picture/i);
      expect(img).toBeInTheDocument();
    });

    it('falls back to name for alt text when alt is not provided', () => {
      render(<Avatar src="/avatar.jpg" name="John Doe" />);
      const img = screen.getByAltText(/john doe/i);
      expect(img).toBeInTheDocument();
    });

    it('uses default alt text when no alt or name provided', () => {
      render(<Avatar src="/avatar.jpg" />);
      const img = screen.getByAltText(/avatar/i);
      expect(img).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<Avatar ref={ref} name="Test" />);
      
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it('spreads additional props', () => {
      render(<Avatar data-testid="custom-avatar" aria-label="User profile" name="Test" />);
      const avatar = screen.getByTestId('custom-avatar');
      
      expect(avatar).toHaveAttribute('aria-label', 'User profile');
    });

    it('image has proper alt attribute', () => {
      render(<Avatar src="/avatar.jpg" alt="John Doe profile picture" />);
      const img = screen.getByRole('img');
      
      expect(img).toHaveAccessibleName();
    });
  });

  describe('Initials Generation', () => {
    it('converts initials to uppercase', () => {
      render(<Avatar name="john doe" />);
      expect(screen.getByText('JD')).toBeInTheDocument();
    });

    it('handles names with extra spaces', () => {
      render(<Avatar name="  John   Doe  " />);
      expect(screen.getByText('JD')).toBeInTheDocument();
    });

    it('handles names with special characters', () => {
      render(<Avatar name="Jean-Paul Sartre" />);
      expect(screen.getByText('JS')).toBeInTheDocument();
    });

    it('takes only first two initials', () => {
      render(<Avatar name="John Paul George Ringo" />);
      const text = screen.getByText('JP');
      expect(text).toBeInTheDocument();
      expect(text.textContent).toHaveLength(2);
    });
  });

  describe('Image Loading', () => {
    it('renders image with correct src', () => {
      render(<Avatar src="https://example.com/avatar.jpg" alt="Avatar" />);
      const img = screen.getByRole('img') as HTMLImageElement;
      expect(img.src).toBe('https://example.com/avatar.jpg');
    });

    it('image has correct CSS class', () => {
      render(<Avatar src="/avatar.jpg" alt="Avatar" />);
      const img = screen.getByRole('img');
      expect(img).toHaveClass('avatar-image');
    });
  });
});
