import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TRETÅR | ボードゲームスペース',
  description: 'TRETÅR（トレートール）：上野駅徒歩３分のボードゲームスペース',
  keywords: ['Boardgame', 'ボードゲーム', 'ボドゲ', '上野'],
  metadataBase: new URL('https://tre-tar.com'),
  openGraph: {
    images: '/gallery/IMG_5012.jpeg',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-3V6JSZGNVS" />
    </html>
  )
}
