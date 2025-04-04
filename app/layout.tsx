// In app/layout.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ICMYO - International Coordination Meeting of Youth Organizations',
  description: 'Official website of the International Coordination Meeting of Youth Organizations',
  // Add other metadata as needed
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}