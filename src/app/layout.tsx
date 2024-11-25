import { Metadata } from 'next'
import '../styles/globals.css'
import { siteConfig } from '@/config/site'

import { metadata } from './metadata'

export { metadata }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
