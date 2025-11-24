'use client'

import { DonutChart, GaugeChart, Card, Grid, Box } from '@intelation/ui'
import Link from 'next/link'

export default function ChartsPage() {
  const trafficData = [
    { label: 'Desktop', value: 450, color: '#3B82F6' },
    { label: 'Mobile', value: 320, color: '#10B981' },
    { label: 'Tablet', value: 180, color: '#F59E0B' },
  ]

  const salesData = [
    { label: 'Electronics', value: 35, color: '#8B5CF6' },
    { label: 'Clothing', value: 25, color: '#EC4899' },
    { label: 'Food', value: 20, color: '#06B6D4' },
    { label: 'Books', value: 12, color: '#F97316' },
    { label: 'Other', value: 8, color: '#84CC16' },
  ]

  return (
    <div>
      <Box className="mb-8">
        <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Playground
        </Link>
        <h1 className="text-4xl font-bold mb-3">Charts</h1>
        <p className="text-xl text-gray-600">
          Visualize data with donut charts and gauge charts.
        </p>
      </Box>

      {/* Donut Charts */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Donut Charts</h2>
        <Grid columns={2} gap="6">
          <Card title="Traffic Sources" description="User traffic by device">
            <div className="flex justify-center items-center h-64">
              <DonutChart data={trafficData} />
            </div>
          </Card>

          <Card title="Sales by Category" description="Revenue distribution (%)">
            <div className="flex justify-center items-center h-64">
              <DonutChart data={salesData} />
            </div>
          </Card>
        </Grid>
      </div>

      {/* Donut Charts with Options */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Donut Charts with Legend</h2>
        <Grid columns={2} gap="6">
          <Card title="With Legend" description="Showing labels">
            <div className="flex justify-center items-center h-64">
              <DonutChart 
                data={trafficData}
                showLegend={true}
              />
            </div>
          </Card>

          <Card title="With Center Text" description="Custom center display">
            <div className="flex justify-center items-center h-64">
              <DonutChart 
                data={salesData}
                showLegend={true}
                centerText={{
                  value: '100%',
                  label: 'Total',
                }}
              />
            </div>
          </Card>
        </Grid>
      </div>

      {/* Different Sizes */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Chart Sizes</h2>
        <Grid columns={3} gap="6">
          <Card title="Small" description="Compact view">
            <div className="flex justify-center items-center h-48">
              <DonutChart data={trafficData} size="sm" />
            </div>
          </Card>

          <Card title="Medium" description="Default size">
            <div className="flex justify-center items-center h-48">
              <DonutChart data={trafficData} size="md" />
            </div>
          </Card>

          <Card title="Large" description="Expanded view">
            <div className="flex justify-center items-center h-48">
              <DonutChart data={trafficData} size="lg" />
            </div>
          </Card>
        </Grid>
      </div>

      {/* Gauge Charts */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Gauge Charts</h2>
        <Grid columns={3} gap="6">
          <Card title="Performance" description="System performance metric">
            <div className="flex flex-col items-center justify-center h-48">
              <GaugeChart value={75} />
              <p className="mt-4 text-sm text-gray-600">75% Efficiency</p>
            </div>
          </Card>

          <Card title="Storage" description="Disk usage">
            <div className="flex flex-col items-center justify-center h-48">
              <GaugeChart value={90} />
              <p className="mt-4 text-sm text-gray-600">450GB / 500GB</p>
            </div>
          </Card>

          <Card title="Progress" description="Project completion">
            <div className="flex flex-col items-center justify-center h-48">
              <GaugeChart value={92} />
              <p className="mt-4 text-sm text-gray-600">92% Complete</p>
            </div>
          </Card>
        </Grid>
      </div>

      {/* Gauge Charts with Different Values */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Gauge Charts - Different Ranges</h2>
        <Grid columns={3} gap="6">
          <Card title="Low Range" description="25% capacity">
            <div className="flex flex-col items-center justify-center h-48">
              <GaugeChart value={25} label="Low" />
              <p className="mt-4 text-sm text-gray-600">Low Usage</p>
            </div>
          </Card>

          <Card title="Medium Range" description="50% capacity">
            <div className="flex flex-col items-center justify-center h-48">
              <GaugeChart value={50} label="Medium" />
              <p className="mt-4 text-sm text-gray-600">Medium Usage</p>
            </div>
          </Card>

          <Card title="High Range" description="95% capacity">
            <div className="flex flex-col items-center justify-center h-48">
              <GaugeChart value={95} label="Critical" />
              <p className="mt-4 text-sm text-gray-600">High Usage</p>
            </div>
          </Card>
        </Grid>
      </div>

      {/* Gauge Sizes */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Gauge Sizes</h2>
        <Grid columns={3} gap="6">
          <Card title="Small Gauge">
            <div className="flex justify-center items-center h-40">
              <GaugeChart value={68} size="sm" />
            </div>
          </Card>

          <Card title="Medium Gauge">
            <div className="flex justify-center items-center h-40">
              <GaugeChart value={68} size="md" />
            </div>
          </Card>

          <Card title="Large Gauge">
            <div className="flex justify-center items-center h-40">
              <GaugeChart value={68} size="lg" />
            </div>
          </Card>
        </Grid>
      </div>

      {/* Combined Dashboard Example */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Dashboard Example</h2>
        <Grid columns={2} gap="6">
          <Card title="User Engagement" description="Active users by platform">
            <div className="flex justify-center items-center h-64">
              <DonutChart 
                data={trafficData}
                showLegend={true}
                centerText={{
                  value: '950',
                  label: 'Total Users',
                }}
              />
            </div>
          </Card>

          <div className="space-y-6">
            <Card title="CPU Usage" description="Current processor load">
              <div className="flex justify-center items-center h-28">
                <GaugeChart value={68} label="CPU" size="sm" />
              </div>
            </Card>

            <Card title="Memory Usage" description="RAM utilization">
              <div className="flex justify-center items-center h-28">
                <GaugeChart value={42} label="RAM" size="sm" />
              </div>
            </Card>
          </div>
        </Grid>
      </div>
    </div>
  )
}
