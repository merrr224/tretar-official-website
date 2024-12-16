import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Inter } from 'next/font/google'
import Script from 'next/script';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TRETÅR - 上野駅から一番近くて安いボードゲームカフェ（トレートール TRETAR）',
  description: 'TRETÅR（トレートール TRETAR） | 上野駅入谷口徒歩3分のボードゲームスペースです。こだわりの空間でゆったりとしたボードゲーム時間をお楽しみください。',
  keywords: ['Boardgame', 'ボードゲーム', 'ボドゲ', 'ボドゲカフェ', 'ボードゲームスペース','アナログゲーム', '上野', '東京'],
  metadataBase: new URL('https://tre-tar.com'),
  openGraph: {
    title: 'TRETÅR - 上野駅から一番近くて安いボードゲームカフェ（トレートール TRETAR）',
    description: 'TRETÅR（トレートール TRETAR） | 上野駅入谷口徒歩3分のボードゲームスペースです。こだわりの空間でゆったりとしたボードゲーム時間をお楽しみください。',
    siteName: 'TRETAR',
    images: '/gallery/IMG_5012.jpeg',
    locale: 'ja_JP',
  },
  icons: {
    apple: '/logo/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TRETÅR",
    "alternateName": "TRETAR",
    "url": "https://tre-tar.com/"
  };
  
  return (
    <html lang="ja">
      <Script
        id="json-ld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-3V6JSZGNVS" />
    </html>
  )
}
