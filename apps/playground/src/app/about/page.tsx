'use client'

import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4">About Anonymization</h1>
      <p className="text-lg mb-6">
        This application provides tools and features for data anonymization,
        ensuring privacy and compliance with data protection regulations.
      </p>
      
      <div className="space-y-4 mb-8">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Data masking and anonymization</li>
          <li>Secure data handling</li>
          <li>Compliance with GDPR and other regulations</li>
          <li>Built with modern web technologies</li>
        </ul>
      </div>

      <Link href="/">
        <button className="px-4 py-2 bg-transparent text-blue-600 border border-blue-600 rounded-md hover:bg-blue-100">
          Back to Home
        </button>
      </Link>
    </>
  )
}
