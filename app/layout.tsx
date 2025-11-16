import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Cinzel } from "next/font/google"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" })

const _utmTimes = localFont({
  src: "../public/fonts/UTM-Times.ttf",
  variable: "--font-utm-times",
})

export const metadata: Metadata = {
  title: "Lumbera Haven",
  description: "A castle where the light of mind meets the shadows of curiosity",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
