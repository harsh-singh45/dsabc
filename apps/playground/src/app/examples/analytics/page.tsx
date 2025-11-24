'use client'

import { Card, Grid, Box, DonutChart, GaugeChart, Button, Flex, Table } from '@intelation/ui'
import Link from 'next/link'

export default function AnalyticsPage() {
  const trafficData = [
    { label: 'Desktop', value: 5420, color: '#3B82F6' },
    { label: 'Mobile', value: 3280, color: '#10B981' },
    { label: 'Tablet', value: 1840, color: '#F59E0B' },
  ]

  const salesByCategory = [
    { label: 'Electronics', value: 42, color: '#8B5CF6' },
    { label: 'Clothing', value: 28, color: '#EC4899' },
    { label: 'Food & Beverage', value: 18, color: '#06B6D4' },
    { label: 'Other', value: 12, color: '#84CC16' },
  ]

  const recentOrders = [
    { id: '#12453', customer: 'John Doe', amount: '$1,234', status: 'Completed', date: '2024-10-25' },
    { id: '#12452', customer: 'Jane Smith', amount: '$856', status: 'Pending', date: '2024-10-25' },
    { id: '#12451', customer: 'Bob Johnson', amount: '$2,100', status: 'Completed', date: '2024-10-24' },
    { id: '#12450', customer: 'Alice Williams', amount: '$567', status: 'Cancelled', date: '2024-10-24' },
  ]

  return (
    <div>
      <Box className="mb-8">
        <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Playground
        </Link>
        <Flex justify="between" align="center">
          <div>
            <h1 className="text-4xl font-bold mb-2">Analytics Dashboard</h1>
            <p className="text-xl text-gray-600">
              Complete analytics page example
            </p>
          </div>
          <div>
            <Button>Export Report</Button>
          </div>
        </Flex>
      </Box>

      {/* KPI Cards */}
      <Grid columns={4} gap="6" className="mb-8">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <div className="p-6">
            <div className="text-sm font-medium text-blue-600 mb-2">Total Revenue</div>
            <div className="text-3xl font-bold text-gray-900">$54,239</div>
            <div className="text-sm text-green-600 mt-2">+12.5% from last month</div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <div className="p-6">
            <div className="text-sm font-medium text-green-600 mb-2">New Customers</div>
            <div className="text-3xl font-bold text-gray-900">1,429</div>
            <div className="text-sm text-green-600 mt-2">+8.1% from last month</div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <div className="p-6">
            <div className="text-sm font-medium text-purple-600 mb-2">Total Orders</div>
            <div className="text-3xl font-bold text-gray-900">3,842</div>
            <div className="text-sm text-red-600 mt-2">-3.2% from last month</div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <div className="p-6">
            <div className="text-sm font-medium text-orange-600 mb-2">Conversion Rate</div>
            <div className="text-3xl font-bold text-gray-900">3.42%</div>
            <div className="text-sm text-green-600 mt-2">+1.3% from last month</div>
          </div>
        </Card>
      </Grid>

      {/* Charts Row */}
      <Grid columns={2} gap="6" className="mb-8">
        <Card title="Traffic Sources" description="Visitors by device type">
          <div className="flex justify-center items-center h-80">
            <DonutChart 
              data={trafficData}
              showLegend={true}
              centerText={{
                value: '10.5K',
                label: 'Total Visitors',
              }}
            />
          </div>
        </Card>

        <Card title="Sales Distribution" description="Revenue by category (%)">
          <div className="flex justify-center items-center h-80">
            <DonutChart 
              data={salesByCategory}
              showLegend={true}
              centerText={{
                value: '100%',
                label: 'Categories',
              }}
            />
          </div>
        </Card>
      </Grid>

      {/* Performance Metrics */}
      <Grid columns={3} gap="6" className="mb-8">
        <Card title="Server Performance" description="CPU utilization">
          <div className="flex flex-col items-center justify-center py-6">
            <GaugeChart value={68} label="CPU" size="md" />
            <p className="mt-4 text-sm text-gray-600">68% Load Average</p>
          </div>
        </Card>

        <Card title="Memory Usage" description="RAM allocation">
          <div className="flex flex-col items-center justify-center py-6">
            <GaugeChart value={54} label="RAM" size="md" />
            <p className="mt-4 text-sm text-gray-600">54% Memory Used</p>
          </div>
        </Card>

        <Card title="Storage Capacity" description="Disk space">
          <div className="flex flex-col items-center justify-center py-6">
            <GaugeChart value={82} label="Disk" size="md" />
            <p className="mt-4 text-sm text-gray-600">82% Capacity</p>
          </div>
        </Card>
      </Grid>

      {/* Recent Orders Table */}
      <Card title="Recent Orders" description="Latest transactions">
        <Table
          columns={[
            { id: 'id', label: 'Order ID', field: 'id' },
            { id: 'customer', label: 'Customer', field: 'customer' },
            { id: 'amount', label: 'Amount', field: 'amount' },
            { id: 'status', label: 'Status', field: 'status' },
            { id: 'date', label: 'Date', field: 'date' },
          ]}
          data={recentOrders.map((order) => ({
            ...order,
            status: (
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {order.status}
              </span>
            ),
            actions: (
              <div className="flex justify-end">
                <Button size="sm" variant="ghost">View</Button>
              </div>
            ),
          }))}
        />

        <div className="mt-4 px-6 pb-4">
          <Button variant="outline" fullWidth>View All Orders</Button>
        </div>
      </Card>
    </div>
  )
}
