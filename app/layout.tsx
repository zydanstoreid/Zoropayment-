import type { Metadata, Viewport } from "next"
import { Inter, Manrope } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

export const metadata: Metadata = {
  title: "ZoroPayment — Payment & Deposit Premium",
  description:
    "ZoroPayment menyediakan layanan payment & deposit premium. Dukungan DANA, OVO, GoPay, ShopeePay, Transfer Bank, dan QRIS. Bonus referral Rp20.000 untuk member baru.",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#1f2a26",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${inter.variable} ${manrope.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
