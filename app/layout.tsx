import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ICMYO - International Coordination Meeting of Youth Organizations',
  description: 'Official website of the International Coordination Meeting of Youth Organizations',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
