import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import ClientI18nProvider from "./components/ClientI18nProvider"

export const metadata: Metadata = {
  title: "Ricardo Ferreira | Portfolio",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="h-svh overflow-hidden bg-background antialiased">
        <ClientI18nProvider>
          {children}
        </ClientI18nProvider>
      </body>
    </html>
  )
}
