'use client'

import './globals.css'
import { Layout } from '@intelation/ui'
import { defaultHeaderConfig, defaultFooterConfig } from '../config/layout.config'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout
          header={defaultHeaderConfig}
          footer={defaultFooterConfig}
          stickyFooter={true}
        >
          {children as any}
        </Layout>
      </body>
    </html>
  )
}
