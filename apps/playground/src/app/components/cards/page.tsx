'use client'

import { Card, Grid, Box } from '@intelation/ui'
import Link from 'next/link'

export default function CardsPage() {
  return (
    <div>
      <Box className="mb-8">
        <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Playground
        </Link>
        <h1 className="text-4xl font-bold mb-3">Cards</h1>
        <p className="text-xl text-gray-600">
          Versatile card components for displaying content.
        </p>
      </Box>

      {/* Basic Cards */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Basic Cards</h2>
        <Grid columns={3} gap="6">
          <Card 
            title="Simple Card" 
            description="A card with just title and description"
          />
          
          <Card 
            title="Card with Content"
            description="This card has additional content below"
          >
            <p className="text-gray-600">
              This is the card content area. You can put any content here.
            </p>
          </Card>
          
          <Card title="Menu Disabled" showMenu={false}>
            <p className="text-gray-600">
              This card doesn&apos;t show the menu button.
            </p>
          </Card>
        </Grid>
      </div>

      {/* Card Variants */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Card Variants</h2>
        <Grid columns={2} gap="6">
          <Card 
            variant="default"
            title="Default Variant"
            description="The standard card style"
          >
            <div className="p-4 bg-gray-50 rounded">
              <p className="text-sm text-gray-600">Content area with some styling</p>
            </div>
          </Card>
          
          <Card 
            variant="list"
            title="List Variant"
            description="Optimized for list items"
          >
            <ul className="space-y-2">
              <li className="py-2 border-b border-gray-200">List item 1</li>
              <li className="py-2 border-b border-gray-200">List item 2</li>
              <li className="py-2">List item 3</li>
            </ul>
          </Card>
        </Grid>
      </div>

      {/* Image Overlay Cards */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Image Overlay Cards</h2>
        <Grid columns={3} gap="6">
          <Card 
            variant="image-overlay"
            backgroundImage="https://images.unsplash.com/photo-1557683316-973673baf926?w=400"
            title="Mountain View"
            description="Beautiful landscape"
            className="h-64"
          />
          
          <Card 
            variant="image-overlay"
            backgroundImage="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400"
            title="Ocean Sunset"
            description="Peaceful evening"
            className="h-64"
          />
          
          <Card 
            variant="image-overlay"
            backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400"
            title="Mountain Peak"
            description="Adventure awaits"
            className="h-64"
          />
        </Grid>
      </div>

      {/* Clickable Cards */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Clickable Cards</h2>
        <Grid columns={3} gap="6">
          <Card 
            title="Link Card"
            description="Click to navigate"
            href="/components/buttons"
          >
            <p className="text-sm text-gray-600">This card is a link to the buttons page</p>
          </Card>
          
          <Card 
            title="External Link"
            description="Opens in new tab"
            href="https://github.com"
            target="_blank"
          >
            <p className="text-sm text-gray-600">Opens GitHub in a new tab</p>
          </Card>
          
          <Card 
            title="Another Link"
            description="Navigate easily"
            href="/components/tables"
          >
            <p className="text-sm text-gray-600">Go to tables page</p>
          </Card>
        </Grid>
      </div>

      {/* Content-Rich Cards */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Content-Rich Cards</h2>
        <Grid columns={2} gap="6">
          <Card 
            title="Statistics Card"
            description="Key metrics at a glance"
          >
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="text-center p-4 bg-blue-50 rounded">
                <div className="text-3xl font-bold text-blue-600">1,234</div>
                <div className="text-sm text-gray-600">Users</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded">
                <div className="text-3xl font-bold text-green-600">$52K</div>
                <div className="text-sm text-gray-600">Revenue</div>
              </div>
            </div>
          </Card>
          
          <Card 
            title="Feature Card"
            description="Highlight important features"
          >
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-500">•</span>
                <span className="text-gray-700">Feature one included</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">•</span>
                <span className="text-gray-700">Feature two available</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">•</span>
                <span className="text-gray-700">Feature three ready</span>
              </li>
            </ul>
          </Card>
        </Grid>
      </div>

      {/* Custom Styled Cards */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Custom Styled Cards</h2>
        <Grid columns={3} gap="6">
          <Card 
            title="Primary Theme"
            className="border-2 border-blue-500 bg-blue-50"
          >
            <p className="text-gray-700">Card with custom blue styling</p>
          </Card>
          
          <Card 
            title="Success Theme"
            className="border-2 border-green-500 bg-green-50"
          >
            <p className="text-gray-700">Card with custom green styling</p>
          </Card>
          
          <Card 
            title="Warning Theme"
            className="border-2 border-yellow-500 bg-yellow-50"
          >
            <p className="text-gray-700">Card with custom yellow styling</p>
          </Card>
        </Grid>
      </div>
    </div>
  )
}
