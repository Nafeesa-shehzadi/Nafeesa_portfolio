import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nafeesa Shehzadi - Frontend Engineer',
  description: 'Frontend Software Engineer with 3 years of experience in React, Next.js, React Native, and AI integrations including RAG systems and agentic workflows.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
