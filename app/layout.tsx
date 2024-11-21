import type { Metadata } from 'next'
import { Inter, Comfortaa } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
const inter = Inter({ subsets: ['latin'] })
const comfortaa = Comfortaa({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: 'PingMe Core - Smart Communication Analytics',
  description: 'Transform your customer conversations into actionable insights',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={comfortaa.className}>
      <body className={`${inter.className} bg-gradient-to-b from-[#0f172a] to-[#020617] min-h-screen text-gray-100`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
