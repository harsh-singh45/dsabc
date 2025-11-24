'use client'

import { Button, Card, Grid, Box, Input, Textarea, Select, Checkbox, Radio } from '@intelation/ui'
import Link from 'next/link'

export default function FormsPage() {
  return (
    <div>
      <Box className="mb-8">
        <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Playground
        </Link>
        <h1 className="text-4xl font-bold mb-3">Forms</h1>
        <p className="text-xl text-gray-600">
          Form patterns and input examples.
        </p>
      </Box>

      {/* Basic Form */}
      <Card title="Basic Form" description="Standard form layout" className="mb-8">
        <form className="space-y-4">
          <Input
            label="Full Name"
            id="name"
            type="text"
            placeholder="John Doe"
            fullWidth
          />

          <Input
            label="Email Address"
            id="email"
            type="email"
            placeholder="john@example.com"
            fullWidth
          />

          <Textarea
            label="Message"
            id="message"
            rows={4}
            placeholder="Enter your message..."
            fullWidth
          />

          <div className="flex gap-3">
            <Button type="submit">Submit</Button>
            <Button type="button" variant="outline">Cancel</Button>
          </div>
        </form>
      </Card>

      {/* Two Column Form */}
      <Card title="Two Column Form" description="Grid layout form" className="mb-8">
        <form className="space-y-4">
          <Grid columns={2} gap="4">
            <Input
              label="First Name"
              id="firstName"
              type="text"
              fullWidth
            />

            <Input
              label="Last Name"
              id="lastName"
              type="text"
              fullWidth
            />

            <Input
              label="Phone"
              id="phone"
              type="tel"
              fullWidth
            />

            <Select
              label="Country"
              id="country"
              fullWidth
            >
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
              <option>Australia</option>
            </Select>
          </Grid>

          <Input
            label="Address"
            id="address"
            type="text"
            fullWidth
          />

          <Button type="submit" fullWidth>Save Profile</Button>
        </form>
      </Card>

      {/* Form with Validation States */}
      <Card title="Validation States" description="Form input states" className="mb-8">
        <div className="space-y-4">
          <Input
            label="Valid Input"
            id="valid"
            type="text"
            value="Valid value"
            success="Looks good!"
            fullWidth
            readOnly
          />

          <Input
            label="Invalid Input"
            id="error"
            type="text"
            value="Invalid value"
            error="✗ This field is required"
            fullWidth
            readOnly
          />

          <Input
            label="Warning Input"
            id="warning"
            type="text"
            value="Warning value"
            helperText="⚠ Please verify this value"
            fullWidth
            readOnly
          />
        </div>
      </Card>

      {/* Checkbox and Radio Buttons */}
      <Grid columns={2} gap="6">
        <Card title="Checkboxes" description="Multiple selection">
          <div className="space-y-3">
            <Checkbox label="Option 1" name="option1" />
            <Checkbox label="Option 2" name="option2" defaultChecked />
            <Checkbox label="Option 3" name="option3" />
          </div>
        </Card>

        <Card title="Radio Buttons" description="Single selection">
          <div className="space-y-3">
            <Radio label="Choice A" name="radio" value="a" defaultChecked />
            <Radio label="Choice B" name="radio" value="b" />
            <Radio label="Choice C" name="radio" value="c" />
          </div>
        </Card>
      </Grid>
    </div>
  )
}
