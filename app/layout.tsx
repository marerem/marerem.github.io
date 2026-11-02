import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import 'katex/dist/katex.min.css'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { TerminalChat } from '@/components/ui/terminal-chat'
import { siteConfig } from '@/site.config'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#09090b',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  alternates: { canonical: '/' },
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.metaDescription,
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={siteConfig.locale} suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} tracking-tight antialiased`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="dark"
        >
          <div className="relative min-h-screen font-[family-name:var(--font-geist)]">
            <Header />
            {children}
            <Footer />
          </div>
          <TerminalChat />
        </ThemeProvider>
      </body>
    </html>
  )
}
