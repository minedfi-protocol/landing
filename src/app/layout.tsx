import Navbar from '@/components/Navbar/Navbar'
import '../styles/globals.css'
import { metadata } from './metadata'
import { golos } from '@/lib/fonts'

export { metadata }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${golos.variable}`}>
      <body>
        <Navbar /> {children}
      </body>
    </html>
  )
}
