'use client';
import { Inter } from 'next/font/google'
import './globals.css'
<link
  href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
  rel="stylesheet"
/>

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>

    </html>
  )
}
