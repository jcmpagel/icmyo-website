import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'ICMYO - International Coordination Meeting of Youth Organizations',
  description: 'Official website of the International Coordination Meeting of Youth Organizations',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="5c2688cc-f803-48f3-87f4-b84cdbd91276"
          strategy="afterInteractive"
          defer
        />
      </head>
      <body>{children}</body>
    </html>
  )
}