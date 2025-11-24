'use client'

import Link from 'next/link'
import { Card, Grid, Box } from '@intelation/ui'

const navigationSections = [
  {
    title: 'Components',
    description: 'Explore individual design system components',
    color: 'bg-blue-50 border-blue-200',
    items: [
      { name: 'Buttons', href: '/components/buttons', description: 'Primary, secondary, and icon buttons' },
      { name: 'Cards', href: '/components/cards', description: 'Content cards with various layouts' },
      { name: 'Tables', href: '/components/tables', description: 'Data tables with sorting and pagination' },
      { name: 'Charts', href: '/components/charts', description: 'Donut, gauge, and other chart types' },
      { name: 'Forms', href: '/components/forms', description: 'Form inputs and validation patterns' },
    ],
  },
  {
    title: 'Layout Templates',
    description: 'Pre-built page layouts ready to use',
    color: 'bg-purple-50 border-purple-200',
    items: [
      { name: 'Dashboard', href: '/layouts/dashboard', description: 'Analytics dashboard layout' },
      { name: 'Landing Page', href: '/layouts/landing', description: 'Marketing landing page layout' },
    ],
  },
  {
    title: 'Full Examples',
    description: 'Complete page implementations',
    color: 'bg-green-50 border-green-200',
    items: [
      { name: 'Analytics Dashboard', href: '/examples/analytics', description: 'Full analytics page with charts' },
      { name: 'User Management', href: '/examples/user-management', description: 'User table with CRUD operations' },
      { name: 'Settings Page', href: '/examples/settings', description: 'Settings with form sections' },
    ],
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      <Box className="mb-12">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">
          Design System Playground
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Interactive playground for testing and experimenting with production-ready components from the Intelation Design System.
          Build complete pages and explore real-world usage patterns.
        </p>
      </Box>

      <div className="space-y-12">
        {navigationSections.map((section) => (
          <section key={section.title}>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {section.title}
              </h2>
              <p className="text-gray-600">{section.description}</p>
            </div>

            <Grid columns={3} gap="6">
              {section.items.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Card 
                    className={`${section.color} border-2 hover:shadow-lg transition-all cursor-pointer h-full p-6`}
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </Card>
                </Link>
              ))}
            </Grid>
          </section>
        ))}
      </div>

      <Box className="mt-16 p-6 bg-gray-100 rounded-lg border-2 border-gray-300">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">
          What is this Playground?
        </h2>
        <ul className="space-y-2 text-gray-700">
          <li>Uses <strong>production-ready</strong> components from <code className="bg-gray-200 px-2 py-1 rounded">@intelation/ui</code></li>
          <li>Tests real-world usage patterns and page compositions</li>
          <li>Provides copy-paste ready examples for your applications</li>
          <li>Validates component behavior in actual Next.js environment</li>
        </ul>
      </Box>
    </div>
  )
}
