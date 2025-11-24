'use client'

import { Card, Grid, Box, Button, Flex } from '@intelation/ui'
import Link from 'next/link'

export default function LandingLayoutPage() {
  const features = [
    {
      icon: 'Performance',
      title: 'Fast Performance',
      description: 'Lightning-fast load times and optimized for speed',
    },
    {
      icon: 'Design',
      title: 'Beautiful Design',
      description: 'Stunning UI components built with attention to detail',
    },
    {
      icon: 'Security',
      title: 'Secure',
      description: 'Enterprise-grade security for your peace of mind',
    },
    {
      icon: 'Mobile',
      title: 'Responsive',
      description: 'Works perfectly on all devices and screen sizes',
    },
    {
      icon: 'Speed',
      title: 'Easy to Use',
      description: 'Intuitive interface that anyone can master',
    },
    {
      icon: 'Settings',
      title: 'Customizable',
      description: 'Tailor every aspect to match your brand',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      content: 'This product has transformed how our team works. Highly recommended!',
    },
    {
      name: 'Michael Chen',
      role: 'Designer, Creative Co',
      content: 'The design system is incredibly well thought out and easy to implement.',
    },
    {
      name: 'Emily Davis',
      role: 'Developer, StartupXYZ',
      content: 'Best development experience I\'ve had. Documentation is top-notch.',
    },
  ]

  return (
    <div>
      <Box className="mb-8">
        <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Playground
        </Link>
        <h1 className="text-4xl font-bold mb-3">Landing Page Layout</h1>
        <p className="text-xl text-gray-600">
          Marketing-focused landing page template
        </p>
      </Box>

      {/* Hero Section */}
      <Card className="mb-12 border-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white">
        <div className="p-16 text-center">
          <h1 className="text-6xl font-bold mb-6">
            Build Amazing Products
          </h1>
          <p className="text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            The complete design system to create beautiful, accessible, and performant applications
          </p>
          <Flex justify="center" gap="4">
            <Button size="lg" as="button" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" as="button" className="border-white text-white hover:bg-white hover:text-blue-600">
              Watch Demo
            </Button>
          </Flex>

          <div className="mt-12 flex justify-center gap-8 text-sm opacity-80">
            <div>No credit card required</div>
            <div>14-day free trial</div>
            <div>Cancel anytime</div>
          </div>
        </div>
      </Card>

      {/* Social Proof */}
      <Box className="mb-16 text-center">
        <p className="text-gray-600 mb-6">Trusted by leading companies worldwide</p>
        <Flex justify="center" gap="12" className="opacity-50">
          <div className="text-2xl font-bold">Company A</div>
          <div className="text-2xl font-bold">Company B</div>
          <div className="text-2xl font-bold">Company C</div>
          <div className="text-2xl font-bold">Company D</div>
        </Flex>
      </Box>

      {/* Features Section */}
      <Box className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Everything you need to succeed</h2>
          <p className="text-xl text-gray-600">
            All the features you need in one powerful platform
          </p>
        </div>

        <Grid columns={3} gap="8">
          {features.map((feature, idx) => (
            <Card key={idx} className="text-center hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </Card>
          ))}
        </Grid>
      </Box>

      {/* CTA Section */}
      <Card className="mb-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
        <div className="p-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of teams already building with our platform
          </p>
          <Button size="lg" as="button" className="bg-white text-blue-600 hover:bg-gray-100">
            Start Your Free Trial
          </Button>
        </div>
      </Card>

      {/* Testimonials */}
      <Box className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What our customers say</h2>
          <p className="text-xl text-gray-600">
            Don&apos;t just take our word for it
          </p>
        </div>

        <Grid columns={3} gap="6">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="bg-gray-50">
              <div className="p-6">
                <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </Grid>
      </Box>

      {/* Pricing Section */}
      <Box className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-xl text-gray-600">
            Choose the plan that&apos;s right for you
          </p>
        </div>

        <Grid columns={3} gap="6">
          <Card className="border-2 border-gray-200">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>Up to 10 users</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>5 GB storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>Email support</span>
                </li>
              </ul>
              <Button fullWidth variant="outline">Get Started</Button>
            </div>
          </Card>

          <Card className="border-4 border-blue-500 shadow-xl transform scale-105">
            <div className="p-8">
              <div className="text-center mb-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$79</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>Unlimited users</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>50 GB storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>Priority support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>Advanced analytics</span>
                </li>
              </ul>
              <Button fullWidth colorScheme="primary">Get Started</Button>
            </div>
          </Card>

          <Card className="border-2 border-gray-200">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>Unlimited storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>24/7 phone support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  <span>Custom integrations</span>
                </li>
              </ul>
              <Button fullWidth variant="outline">Contact Sales</Button>
            </div>
          </Card>
        </Grid>
      </Box>

      {/* Final CTA */}
      <Card className="bg-gray-900 text-white border-0">
        <div className="p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Start building today</h2>
          <p className="text-lg mb-6 opacity-80">
            Join thousands of developers building amazing products
          </p>
          <Button size="lg" as="button" className="bg-blue-500 text-white hover:bg-blue-600">
            Get Started Now
          </Button>
        </div>
      </Card>
    </div>
  )
}
