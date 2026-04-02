'use client'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { siteConfig } from '@/site.config'

const THEMES_OPTIONS = [
  { label: 'Light', id: 'light', icon: <SunIcon className="h-3.5 w-3.5" /> },
  { label: 'Dark', id: 'dark', icon: <MoonIcon className="h-3.5 w-3.5" /> },
  { label: 'System', id: 'system', icon: <MonitorIcon className="h-3.5 w-3.5" /> },
]

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <AnimatedBackground
      className="pointer-events-none rounded-lg bg-zinc-100 dark:bg-zinc-800"
      defaultValue={theme}
      transition={{ type: 'spring', bounce: 0, duration: 0.2 }}
      enableHover={false}
      onValueChange={(id) => setTheme(id as string)}
    >
      {THEMES_OPTIONS.map((t) => (
        <button
          key={t.id}
          className="inline-flex h-6 w-6 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50"
          type="button"
          aria-label={`Switch to ${t.label} theme`}
          data-id={t.id}
        >
          {t.icon}
        </button>
      ))}
    </AnimatedBackground>
  )
}

const NAV_ITEMS = siteConfig.navItems

export function Header() {
  const [activeSection, setActiveSection] = useState<string>(NAV_ITEMS[0]?.id ?? 'bio')

  useEffect(() => {
    const handleScroll = () => {
      const lastItem = NAV_ITEMS[NAV_ITEMS.length - 1]
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      if (atBottom && lastItem) {
        setActiveSection(lastItem.id)
        return
      }

      const scrollY = window.scrollY + window.innerHeight / 3
      let current: string = NAV_ITEMS[0]?.id ?? 'bio'

      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id)
        if (el && el.offsetTop <= scrollY) {
          current = item.id
        }
      }

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <header className="mb-8">
        <button
          onClick={scrollToTop}
          className="text-2xl font-semibold text-black dark:text-white"
        >
          {siteConfig.name}
        </button>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="mt-0.5 text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          {siteConfig.title}
        </TextEffect>
      </header>
      <nav className="sticky top-0 z-40 -mx-4 mb-8 flex items-center gap-5 rounded-2xl border border-zinc-200/60 bg-white/50 px-4 py-3 backdrop-blur-sm dark:border-zinc-800/60 dark:bg-zinc-900/30">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`font-[family-name:var(--font-geist-mono)] text-sm transition-colors ${
              activeSection === item.id
                ? 'text-black dark:text-white'
                : 'text-zinc-400 hover:text-zinc-900 dark:text-[#bbbbc4] dark:hover:text-zinc-100'
            }`}
          >
            {item.label}
          </a>
        ))}
        <div className="ml-auto">
          <ThemeSwitch />
        </div>
      </nav>
    </>
  )
}
