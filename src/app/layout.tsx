import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const notoSansJP = Noto_Sans_JP({ 
  weight: "400",
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: 'TRETÅR（トレートール TRETAR） | 上野 ボードゲームスペース',
  description: 'TRETÅR（トレートール TRETAR） | 上野駅入谷口徒歩3分のボードゲームスペースです。こだわりの空間でゆったりとしたボードゲーム時間をお楽しみください。',
  keywords: ['Boardgame', 'ボードゲーム', 'ボドゲ', 'ボドゲカフェ', '上野'],
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
      <body className={notoSansJP.className}>{children}</body>
      <GoogleAnalytics gaId="G-3V6JSZGNVS" />
    </html>
  )
}
