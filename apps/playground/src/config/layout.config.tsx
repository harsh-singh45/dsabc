'use client'

import { Logo, type NavigationItem, type ProfileMenuItem, type FooterLink } from '@intelation/ui'

/**
 * Navigation items for the header
 */
export const navigationItems: NavigationItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
    active: false,
  },
  {
    id: 'about',
    label: 'About',
    href: '/about',
    active: false,
  },
  {
    id: 'anonymization',
    label: 'Anonymization',
    href: '/anonymization',
    active: false,
  },
  {
    id: 'icons',
    label: 'Icons',
    href: '/icons',
    active: false,
  },
]

/**
 * Profile menu items
 */
export const profileMenuItems: ProfileMenuItem[] = [
  {
    id: 'profile',
    label: 'Profile',
    onClick: (_item) => {
      // eslint-disable-next-line no-console
      console.log('Navigate to profile')
    },
  },
  {
    id: 'settings',
    label: 'Settings',
    onClick: (_item) => {
      // eslint-disable-next-line no-console
      console.log('Navigate to settings')
    },
  },
  {
    id: 'separator',
    label: '',
    separator: true,
  },
  {
    id: 'logout',
    label: 'Logout',
    onClick: (_item) => {
      // eslint-disable-next-line no-console
      console.log('Logout user')
    },
  },
]

/**
 * Footer links
 */
export const footerLinks: FooterLink[] = [
  {
    id: 'privacy',
    label: 'Privacy Policy',
    href: '/privacy',
  },
  {
    id: 'terms',
    label: 'Terms of Service',
    href: '/terms',
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '/contact',
  },
]

/**
 * Default header configuration
 */
export const defaultHeaderConfig = {
  logo: <Logo variant="white" size="lg" type="icon" />,
  navigationItems,
  userProfile: {
    name: 'John Doe',
    hideAvatar: true,
  },
  profileMenuItems,
  onLogoClick: () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/'
    }
  },
}

/**
 * Default footer configuration
 */
export const defaultFooterConfig = {
  copyright: '© 2025 Intelation. All rights reserved.',
  links: footerLinks,
}
