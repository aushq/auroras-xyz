import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Auroras Inc.',
  description: `Inspired by the aurora's brilliance—Auroras Tech delivers tailored game, internet & tech services. Bridging creativity and technology to redefine digital possibilities | auroras.xyz`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
