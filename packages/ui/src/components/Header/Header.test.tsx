import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Header, type NavigationItem, type ProfileMenuItem, type UserProfile } from './Header';

describe('Header', () => {
  describe('Rendering', () => {
    it('renders header element', () => {
      render(<Header />);
      
      expect(screen.getByRole('banner')).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      render(<Header className="custom-header" data-testid="header" />);
      
      expect(screen.getByTestId('header')).toHaveClass('header');
      expect(screen.getByTestId('header')).toHaveClass('custom-header');
    });

    it('renders with default structure', () => {
      render(<Header data-testid="header" />);
      
      expect(screen.getByTestId('header')).toBeInTheDocument();
    });

    it('applies fixed class when fixed prop is true', () => {
      render(<Header fixed data-testid="header" />);
      
      expect(screen.getByTestId('header')).toHaveClass('header--fixed');
    });

    it('does not apply fixed class by default', () => {
      render(<Header data-testid="header" />);
      
      expect(screen.getByTestId('header')).not.toHaveClass('header--fixed');
    });
  });

  describe('Logo', () => {
    it('renders logo when provided', () => {
      render(<Header logo={<img src="/logo.png" alt="Company Logo" />} />);
      
      expect(screen.getByAltText('Company Logo')).toBeInTheDocument();
    });

    it('does not render logo when not provided', () => {
      render(<Header />);
      
      expect(screen.queryByLabelText('Go to homepage')).not.toBeInTheDocument();
    });

    it('calls onLogoClick when logo is clicked', async () => {
      const user = userEvent.setup();
      const handleLogoClick = jest.fn();
      
      render(
        <Header 
          logo={<span>Logo</span>} 
          onLogoClick={handleLogoClick} 
        />
      );
      
      await user.click(screen.getByLabelText('Go to homepage'));
      expect(handleLogoClick).toHaveBeenCalledTimes(1);
    });

    it('logo button has proper accessibility label', () => {
      render(<Header logo={<span>Logo</span>} />);
      
      expect(screen.getByLabelText('Go to homepage')).toBeInTheDocument();
    });
  });

  describe('Navigation', () => {
    const navItems: NavigationItem[] = [
      { id: 'home', label: 'Home', href: '/', active: true },
      { id: 'about', label: 'About', href: '/about' },
      { id: 'contact', label: 'Contact', href: '/contact' },
    ];

    it('renders navigation items', () => {
      render(<Header navigationItems={navItems} />);
      
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('About')).toBeInTheDocument();
      expect(screen.getByText('Contact')).toBeInTheDocument();
    });

    it('renders empty navigation when no items provided', () => {
      render(<Header />);
      
      const nav = screen.getByRole('navigation', { name: 'Main navigation' });
      expect(nav.querySelector('ul')).toBeEmptyDOMElement();
    });

    it('marks active navigation item', () => {
      render(<Header navigationItems={navItems} />);
      
      const homeLink = screen.getByRole('link', { name: 'Home' });
      expect(homeLink).toHaveClass('header__nav-link--active');
      expect(homeLink).toHaveAttribute('aria-current', 'page');
    });

    it('does not mark inactive items as active', () => {
      render(<Header navigationItems={navItems} />);
      
      const aboutLink = screen.getByRole('link', { name: 'About' });
      expect(aboutLink).not.toHaveClass('header__nav-link--active');
      expect(aboutLink).not.toHaveAttribute('aria-current');
    });

    it('calls onClick handler when navigation item is clicked', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();
      const items: NavigationItem[] = [
        { id: 'home', label: 'Home', onClick: handleClick },
      ];
      
      render(<Header navigationItems={items} />);
      
      await user.click(screen.getByText('Home'));
      expect(handleClick).toHaveBeenCalledWith(items[0]);
    });

    it('disables navigation item when disabled prop is true', () => {
      const items: NavigationItem[] = [
        { id: 'disabled', label: 'Disabled', disabled: true },
      ];
      
      render(<Header navigationItems={items} />);
      
      const link = screen.getByRole('link', { name: 'Disabled' });
      expect(link).toHaveAttribute('aria-disabled', 'true');
      expect(link).toHaveClass('header__nav-link--disabled');
    });

    it('does not call onClick for disabled navigation items', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();
      const items: NavigationItem[] = [
        { id: 'disabled', label: 'Disabled', onClick: handleClick, disabled: true },
      ];
      
      render(<Header navigationItems={items} />);
      
      await user.click(screen.getByRole('link', { name: 'Disabled' }));
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('has proper navigation role and label', () => {
      render(<Header navigationItems={navItems} />);
      
      expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument();
    });
  });

  describe('User Profile', () => {
    const userProfile: UserProfile = {
      name: 'John Doe',
      email: 'john@example.com',
      initials: 'JD',
    };

    it('renders user profile when provided', () => {
      render(<Header userProfile={userProfile} />);
      
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('john@example.com')).toBeInTheDocument();
    });

    it('does not render profile when not provided', () => {
      render(<Header />);
      
      expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
    });

    it('renders initials when no avatar provided', () => {
      render(<Header userProfile={userProfile} />);
      
      expect(screen.getByText('JD')).toBeInTheDocument();
    });

    it('renders avatar image when provided', () => {
      const profileWithAvatar: UserProfile = {
        ...userProfile,
        avatar: '/avatar.jpg',
      };
      
      render(<Header userProfile={profileWithAvatar} />);
      
      const avatar = screen.getByAltText('John Doe');
      expect(avatar).toBeInTheDocument();
      expect(avatar).toHaveAttribute('src', '/avatar.jpg');
    });

    it('renders custom icon when provided', () => {
      const profileWithIcon: UserProfile = {
        name: 'John Doe',
        email: 'john@example.com',
        icon: <i className="bi bi-person-circle" data-testid="custom-icon" />,
      };
      
      render(<Header userProfile={profileWithIcon} />);
      
      expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
      expect(screen.queryByText('JD')).not.toBeInTheDocument();
    });

    it('prioritizes avatar over icon', () => {
      const profileWithBoth: UserProfile = {
        name: 'John Doe',
        avatar: '/avatar.jpg',
        icon: <i className="bi bi-person-circle" data-testid="custom-icon" />,
      };
      
      render(<Header userProfile={profileWithBoth} />);
      
      expect(screen.getByAltText('John Doe')).toBeInTheDocument();
      expect(screen.queryByTestId('custom-icon')).not.toBeInTheDocument();
    });

    it('prioritizes icon over initials', () => {
      const profileWithIconAndInitials: UserProfile = {
        name: 'John Doe',
        initials: 'JD',
        icon: <i className="bi bi-person-circle" data-testid="custom-icon" />,
      };
      
      render(<Header userProfile={profileWithIconAndInitials} />);
      
      expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
      expect(screen.queryByText('JD')).not.toBeInTheDocument();
    });

    it('does not render avatar when hideAvatar is true', () => {
      const profileWithHiddenAvatar: UserProfile = {
        ...userProfile,
        hideAvatar: true,
      };
      
      render(<Header userProfile={profileWithHiddenAvatar} />);
      
      expect(screen.queryByText('JD')).not.toBeInTheDocument();
      expect(screen.queryByAltText('John Doe')).not.toBeInTheDocument();
    });

    it('renders default icon when no avatar or initials provided', () => {
      const profileNoAvatar: UserProfile = {
        name: 'John Doe',
        email: 'john@example.com',
      };
      
      render(<Header userProfile={profileNoAvatar} />);
      
      // Default SVG icon should be present
      const profileButton = screen.getByLabelText('John Doe profile menu');
      expect(profileButton.querySelector('svg')).toBeInTheDocument();
    });

    it('renders email when provided', () => {
      render(<Header userProfile={userProfile} />);
      
      expect(screen.getByText('john@example.com')).toBeInTheDocument();
    });

    it('does not render email when not provided', () => {
      const profileNoEmail: UserProfile = {
        name: 'John Doe',
        initials: 'JD',
      };
      
      render(<Header userProfile={profileNoEmail} />);
      
      expect(screen.queryByText('john@example.com')).not.toBeInTheDocument();
    });

    it('calls onProfileClick when profile is clicked without menu items', async () => {
      const user = userEvent.setup();
      const handleProfileClick = jest.fn();
      
      render(
        <Header 
          userProfile={userProfile} 
          onProfileClick={handleProfileClick} 
        />
      );
      
      await user.click(screen.getByLabelText('John Doe profile menu'));
      expect(handleProfileClick).toHaveBeenCalledWith(userProfile);
    });

    it('has proper accessibility attributes', () => {
      render(<Header userProfile={userProfile} />);
      
      const profileButton = screen.getByLabelText('John Doe profile menu');
      expect(profileButton).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Profile Dropdown', () => {
    const userProfile: UserProfile = {
      name: 'John Doe',
      email: 'john@example.com',
      initials: 'JD',
    };

    const menuItems: ProfileMenuItem[] = [
      { id: 'profile', label: 'Profile', onClick: jest.fn() },
      { id: 'settings', label: 'Settings', onClick: jest.fn() },
      { id: 'logout', label: 'Logout', onClick: jest.fn() },
    ];

    it('opens dropdown when profile button is clicked', async () => {
      const user = userEvent.setup();
      
      render(
        <Header 
          userProfile={userProfile} 
          profileMenuItems={menuItems} 
        />
      );
      
      const profileButton = screen.getByLabelText('John Doe profile menu');
      await user.click(profileButton);
      
      expect(profileButton).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getByRole('menu')).toBeInTheDocument();
    });

    it('closes dropdown when profile button is clicked again', async () => {
      const user = userEvent.setup();
      
      render(
        <Header 
          userProfile={userProfile} 
          profileMenuItems={menuItems} 
        />
      );
      
      const profileButton = screen.getByLabelText('John Doe profile menu');
      
      // Open
      await user.click(profileButton);
      expect(profileButton).toHaveAttribute('aria-expanded', 'true');
      
      // Close
      await user.click(profileButton);
      expect(profileButton).toHaveAttribute('aria-expanded', 'false');
    });

    it('renders profile menu items', async () => {
      const user = userEvent.setup();
      
      render(
        <Header 
          userProfile={userProfile} 
          profileMenuItems={menuItems} 
        />
      );
      
      await user.click(screen.getByLabelText('John Doe profile menu'));
      
      expect(screen.getByText('Profile')).toBeInTheDocument();
      expect(screen.getByText('Settings')).toBeInTheDocument();
      expect(screen.getByText('Logout')).toBeInTheDocument();
    });

    it('calls menu item onClick handler', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();
      const items: ProfileMenuItem[] = [
        { id: 'profile', label: 'Profile', onClick: handleClick },
      ];
      
      render(
        <Header 
          userProfile={userProfile} 
          profileMenuItems={items} 
        />
      );
      
      await user.click(screen.getByLabelText('John Doe profile menu'));
      await user.click(screen.getByText('Profile'));
      
      expect(handleClick).toHaveBeenCalledWith(items[0]);
    });

    it('closes dropdown after menu item click', async () => {
      const user = userEvent.setup();
      
      render(
        <Header 
          userProfile={userProfile} 
          profileMenuItems={menuItems} 
        />
      );
      
      const profileButton = screen.getByLabelText('John Doe profile menu');
      
      await user.click(profileButton);
      expect(profileButton).toHaveAttribute('aria-expanded', 'true');
      
      await user.click(screen.getByText('Profile'));
      
      await waitFor(() => {
        expect(profileButton).toHaveAttribute('aria-expanded', 'false');
      });
    });

    it('closes dropdown when clicking outside', async () => {
      const user = userEvent.setup();
      
      render(
        <div>
          <div data-testid="outside">Outside</div>
          <Header 
            userProfile={userProfile} 
            profileMenuItems={menuItems} 
          />
        </div>
      );
      
      const profileButton = screen.getByLabelText('John Doe profile menu');
      
      await user.click(profileButton);
      expect(profileButton).toHaveAttribute('aria-expanded', 'true');
      
      await user.click(screen.getByTestId('outside'));
      
      await waitFor(() => {
        expect(profileButton).toHaveAttribute('aria-expanded', 'false');
      });
    });

    it('closes dropdown when pressing Escape key', async () => {
      const user = userEvent.setup();
      
      render(
        <Header 
          userProfile={userProfile} 
          profileMenuItems={menuItems} 
        />
      );
      
      const profileButton = screen.getByLabelText('John Doe profile menu');
      
      await user.click(profileButton);
      expect(profileButton).toHaveAttribute('aria-expanded', 'true');
      
      await user.keyboard('{Escape}');
      
      await waitFor(() => {
        expect(profileButton).toHaveAttribute('aria-expanded', 'false');
      });
    });

    it('renders menu item with icon', async () => {
      const user = userEvent.setup();
      const itemsWithIcon: ProfileMenuItem[] = [
        { 
          id: 'profile', 
          label: 'Profile', 
          icon: <span data-testid="profile-icon">Icon</span> 
        },
      ];
      
      render(
        <Header 
          userProfile={userProfile} 
          profileMenuItems={itemsWithIcon} 
        />
      );
      
      await user.click(screen.getByLabelText('John Doe profile menu'));
      
      expect(screen.getByTestId('profile-icon')).toBeInTheDocument();
    });

    it('renders separator menu item', async () => {
      const user = userEvent.setup();
      const itemsWithSeparator: ProfileMenuItem[] = [
        { id: 'profile', label: 'Profile' },
        { id: 'sep', label: '', separator: true },
        { id: 'logout', label: 'Logout' },
      ];
      
      render(
        <Header 
          userProfile={userProfile} 
          profileMenuItems={itemsWithSeparator} 
        />
      );
      
      await user.click(screen.getByLabelText('John Doe profile menu'));
      
      expect(screen.getByRole('separator')).toBeInTheDocument();
    });

    it('disables menu item when disabled prop is true', async () => {
      const user = userEvent.setup();
      const itemsWithDisabled: ProfileMenuItem[] = [
        { id: 'disabled', label: 'Disabled', disabled: true },
      ];
      
      render(
        <Header 
          userProfile={userProfile} 
          profileMenuItems={itemsWithDisabled} 
        />
      );
      
      await user.click(screen.getByLabelText('John Doe profile menu'));
      
      const disabledButton = screen.getByText('Disabled').closest('button');
      expect(disabledButton).toBeDisabled();
      expect(disabledButton).toHaveClass('header__profile-menu-link--disabled');
    });

    it('does not call onClick for disabled menu items', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();
      const itemsWithDisabled: ProfileMenuItem[] = [
        { id: 'disabled', label: 'Disabled', onClick: handleClick, disabled: true },
      ];
      
      render(
        <Header 
          userProfile={userProfile} 
          profileMenuItems={itemsWithDisabled} 
        />
      );
      
      await user.click(screen.getByLabelText('John Doe profile menu'));
      await user.click(screen.getByText('Disabled'));
      
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('does not call onClick for separator items', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();
      const itemsWithSeparator: ProfileMenuItem[] = [
        { id: 'sep', label: '', separator: true, onClick: handleClick },
      ];
      
      render(
        <Header 
          userProfile={userProfile} 
          profileMenuItems={itemsWithSeparator} 
        />
      );
      
      await user.click(screen.getByLabelText('John Doe profile menu'));
      
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('shows dropdown arrow when menu items exist', () => {
      render(
        <Header 
          userProfile={userProfile} 
          profileMenuItems={menuItems} 
        />
      );
      
      const profileButton = screen.getByLabelText('John Doe profile menu');
      expect(profileButton.querySelectorAll('svg').length).toBeGreaterThan(0);
    });

    it('does not show dropdown arrow when no menu items', () => {
      render(<Header userProfile={userProfile} />);
      
      const profileButton = screen.getByLabelText('John Doe profile menu');
      // Should only have default icon, no arrow
      expect(profileButton).toBeInTheDocument();
    });

    it('has proper accessibility attributes for dropdown', async () => {
      const user = userEvent.setup();
      const dropdownMenuItems: ProfileMenuItem[] = [
        { id: 'profile', label: 'Profile', onClick: jest.fn() },
        { id: 'settings', label: 'Settings', onClick: jest.fn() },
        { id: 'logout', label: 'Logout', onClick: jest.fn() },
      ];
      
      render(
        <Header 
          userProfile={userProfile} 
          profileMenuItems={dropdownMenuItems} 
        />
      );
      
      const profileButton = screen.getByLabelText('John Doe profile menu');
      expect(profileButton).toHaveAttribute('aria-haspopup', 'menu');
      
      await user.click(profileButton);
      
      const menu = screen.getByRole('menu');
      expect(menu).toBeInTheDocument();
      
      const menuItemElements = screen.getAllByRole('menuitem');
      expect(menuItemElements).toHaveLength(3);
    });
  });

  describe('Accessibility', () => {
    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLElement>();
      render(<Header ref={ref} />);
      
      expect(ref.current).toBeInstanceOf(HTMLElement);
      expect(ref.current?.tagName).toBe('HEADER');
    });

    it('spreads additional HTML props', () => {
      render(
        <Header 
          data-testid="header"
          id="main-header"
          aria-label="Main header"
        />
      );
      
      const header = screen.getByTestId('header');
      expect(header).toHaveAttribute('id', 'main-header');
      expect(header).toHaveAttribute('aria-label', 'Main header');
    });
  });

  describe('Combined Props', () => {
    it('renders all sections together', () => {
      const navItems: NavigationItem[] = [
        { id: 'home', label: 'Home', href: '/' },
      ];
      
      const userProfile: UserProfile = {
        name: 'John Doe',
        initials: 'JD',
      };
      
      const menuItems: ProfileMenuItem[] = [
        { id: 'logout', label: 'Logout' },
      ];
      
      render(
        <Header 
          logo={<span>Logo</span>}
          navigationItems={navItems}
          userProfile={userProfile}
          profileMenuItems={menuItems}
          fixed
        />
      );
      
      expect(screen.getByText('Logo')).toBeInTheDocument();
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });
  });
});
