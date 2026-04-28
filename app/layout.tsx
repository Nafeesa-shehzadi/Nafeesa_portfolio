import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nafeesa Shehzadi - Frontend Engineer',
  description: 'Frontend Software Engineer specializing in React, Next.js, TypeScript & AI integrations.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
