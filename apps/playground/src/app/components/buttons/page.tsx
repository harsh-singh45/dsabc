'use client'

import { Button, Card, Grid, Box, Flex } from '@intelation/ui'
import Link from 'next/link'

export default function ButtonsPage() {
  return (
    <div>
      <Box className="mb-8">
        <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Playground
        </Link>
        <h1 className="text-4xl font-bold mb-3">Buttons</h1>
        <p className="text-xl text-gray-600">
          Explore different button variants, sizes, and states from the design system.
        </p>
      </Box>

      {/* Button Variants */}
      <Card className="mb-8 p-8">
        <h2 className="text-2xl font-semibold mb-6">Button Variants</h2>
        <Flex gap="4" wrap>
          <Button variant="solid" colorScheme="primary">Solid Primary</Button>
          <Button variant="solid" colorScheme="secondary">Solid Secondary</Button>
          <Button variant="outline" colorScheme="primary">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </Flex>
      </Card>

      {/* Color Schemes */}
      <Card className="mb-8 p-8">
        <h2 className="text-2xl font-semibold mb-6">Color Schemes</h2>
        <Flex gap="4" wrap>
          <Button colorScheme="primary">Primary</Button>
          <Button colorScheme="secondary">Secondary</Button>
          <Button colorScheme="success">Success</Button>
          <Button colorScheme="warning">Warning</Button>
          <Button colorScheme="danger">Danger</Button>
        </Flex>
      </Card>

      {/* Button Sizes */}
      <Card className="mb-8 p-8">
        <h2 className="text-2xl font-semibold mb-6">Button Sizes</h2>
        <Flex gap="4" align="center" wrap>
          <Button size="sm">Small Button</Button>
          <Button size="md">Medium Button</Button>
          <Button size="lg">Large Button</Button>
        </Flex>
      </Card>

      {/* Button States */}
      <Card className="mb-8 p-8">
        <h2 className="text-2xl font-semibold mb-6">Button States</h2>
        <Grid columns={2} gap="6">
          <div>
            <h3 className="text-lg font-medium mb-3">Default</h3>
            <Flex gap="4" wrap>
              <Button>Normal</Button>
              <Button disabled>Disabled</Button>
            </Flex>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">Loading</h3>
            <Flex gap="4" wrap>
              <Button loading>Loading...</Button>
              <Button colorScheme="secondary" loading>Processing</Button>
            </Flex>
          </div>
        </Grid>
      </Card>

      {/* Full Width Buttons */}
      <Card className="mb-8 p-8">
        <h2 className="text-2xl font-semibold mb-6">Full Width Buttons</h2>
        <div className="space-y-3">
          <Button fullWidth>Full Width Primary</Button>
          <Button fullWidth colorScheme="secondary">Full Width Secondary</Button>
          <Button fullWidth variant="outline">Full Width Outline</Button>
        </div>
      </Card>

      {/* Button with Icons */}
      <Card className="mb-8 p-8">
        <h2 className="text-2xl font-semibold mb-6">Buttons with Icons</h2>
        <Flex gap="4" wrap>
          <Button>Save Changes</Button>
          <Button colorScheme="secondary">Download</Button>
          <Button variant="outline">Add New</Button>
          <Button>Next Step</Button>
        </Flex>
      </Card>

      {/* Button Groups */}
      <Card className="p-8">
        <h2 className="text-2xl font-semibold mb-6">Button Groups</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-3">Action Groups</h3>
            <Flex gap="2">
              <Button>Save</Button>
              <Button colorScheme="secondary">Cancel</Button>
              <Button variant="outline">Preview</Button>
            </Flex>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">Toolbar</h3>
            <Flex gap="1">
              <Button variant="ghost" size="sm">Bold</Button>
              <Button variant="ghost" size="sm">Italic</Button>
              <Button variant="ghost" size="sm">Underline</Button>
              <span className="mx-2 border-l border-gray-300"></span>
              <Button variant="ghost" size="sm">Left</Button>
              <Button variant="ghost" size="sm">Center</Button>
              <Button variant="ghost" size="sm">Right</Button>
            </Flex>
          </div>
        </div>
      </Card>
    </div>
  )
}
