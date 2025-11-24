'use client'

import { Card, Grid, Box, Button, Avatar } from '@intelation/ui'
import Link from 'next/link'

export default function DashboardLayoutPage() {
  return (
    <div>
      <Box className="mb-8">
        <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Playground
        </Link>
        <h1 className="text-4xl font-bold mb-3">Dashboard Layout</h1>
        <p className="text-xl text-gray-600">
          Pre-built dashboard layout structure
        </p>
      </Box>

      {/* Hero Section */}
      <Card className="mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-2">Welcome back, User!</h2>
          <p className="text-lg opacity-90 mb-6">
            Here&apos;s what&apos;s happening with your projects today.
          </p>
          <Button as="button" className="bg-white text-blue-600 hover:bg-gray-100">
            Get Started
          </Button>
        </div>
      </Card>

      {/* Stats Grid */}
      <Grid columns={4} gap="6" className="mb-8">
        <Card className="border-l-4 border-blue-500">
          <div className="p-6">
            <div className="text-sm text-gray-600 mb-1">Active Users</div>
            <div className="text-3xl font-bold">2,543</div>
            <div className="text-xs text-green-600 mt-2">+15.3%</div>
          </div>
        </Card>

        <Card className="border-l-4 border-green-500">
          <div className="p-6">
            <div className="text-sm text-gray-600 mb-1">Revenue</div>
            <div className="text-3xl font-bold">$12.5K</div>
            <div className="text-xs text-green-600 mt-2">+8.2%</div>
          </div>
        </Card>

        <Card className="border-l-4 border-purple-500">
          <div className="p-6">
            <div className="text-sm text-gray-600 mb-1">Conversions</div>
            <div className="text-3xl font-bold">284</div>
            <div className="text-xs text-red-600 mt-2">-2.4%</div>
          </div>
        </Card>

        <Card className="border-l-4 border-orange-500">
          <div className="p-6">
            <div className="text-sm text-gray-600 mb-1">Avg. Session</div>
            <div className="text-3xl font-bold">4m 32s</div>
            <div className="text-xs text-green-600 mt-2">+12.1%</div>
          </div>
        </Card>
      </Grid>

      {/* Main Content Area */}
      <Grid columns={3} gap="6" className="mb-8">
        <div className="col-span-2">
          <Card title="Overview" description="Key metrics over time">
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
              <p className="text-gray-400">Chart placeholder - Line chart would go here</p>
            </div>
          </Card>
        </div>

        <Card title="Quick Actions" description="Common tasks">
          <div className="space-y-3">
            <Button fullWidth variant="outline">
              New Project
            </Button>
            <Button fullWidth variant="outline">
              Invite Team
            </Button>
            <Button fullWidth variant="outline">
              View Reports
            </Button>
            <Button fullWidth variant="outline">
              Settings
            </Button>
          </div>
        </Card>
      </Grid>

      {/* Activity Feed */}
      <Grid columns={2} gap="6">
        <Card title="Recent Activity" description="Latest updates">
          <div className="space-y-4">
            <div className="flex gap-3 pb-3 border-b border-gray-200">
              <Avatar name="John Doe" size="md" colorScheme="primary" />
              <div className="flex-1">
                <p className="text-sm text-gray-900 font-medium">John Doe created a new project</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>

            <div className="flex gap-3 pb-3 border-b border-gray-200">
              <Avatar name="Jane Smith" size="md" colorScheme="success" />
              <div className="flex-1">
                <p className="text-sm text-gray-900 font-medium">Jane Smith completed a task</p>
                <p className="text-xs text-gray-500">4 hours ago</p>
              </div>
            </div>

            <div className="flex gap-3 pb-3 border-b border-gray-200">
              <Avatar name="Bob Johnson" size="md" colorScheme="secondary" />
              <div className="flex-1">
                <p className="text-sm text-gray-900 font-medium">Bob Johnson uploaded a file</p>
                <p className="text-xs text-gray-500">Yesterday</p>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <Button variant="link" size="sm">View all activity →</Button>
          </div>
        </Card>

        <Card title="Team Members" description="Active team">
          <div className="space-y-3">
            {['Alice Johnson', 'Charlie Brown', 'Diana Prince', 'Evan Williams'].map((name) => (
              <div key={name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Avatar name={name} size="md" colorScheme="gradient" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{name}</p>
                    <p className="text-xs text-gray-500">Online</p>
                  </div>
                </div>
                <Button size="sm" variant="ghost">Message</Button>
              </div>
            ))}
          </div>
        </Card>
      </Grid>
    </div>
  )
}
