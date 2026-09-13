import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Noto_Sans_JP } from 'next/font/google'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-noto-jp',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://fsif.example.com'),
  title: {
    default: '未来宇宙産業フォーラム FSIF | 宇宙を、みんなのものにする。',
    template: '%s | FSIF 未来宇宙産業フォーラム',
  },
  description:
    '未来宇宙産業フォーラム（Future Space Industry Forum / FSIF）は、すべての人に宇宙とかかわる選択肢をつくる組織です。コミュニティ、ワーキンググループ、イベント、シンクタンクの4事業とプロダクト開発を通じて宇宙をみんなのものにします。',
  keywords: ['FSIF', '未来宇宙産業フォーラム', '宇宙', '宇宙産業', 'Cosmo Base', 'Orbit', '宇宙ビジネス'],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: 'FSIF 未来宇宙産業フォーラム',
    title: '未来宇宙産業フォーラム FSIF',
    description: '宇宙を、みんなのものにする。すべての人に、宇宙とかかわる選択肢を。',
    images: ['/images/hero-forum.png'],
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansJP.variable} bg-background`}
    >
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-fsif-blue focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          本文へスキップ
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
