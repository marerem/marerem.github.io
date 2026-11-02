'use client'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { siteConfig } from '@/site.config'

function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="text-sm text-[var(--muted)] hover:text-[var(--text)]"
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'dark' ? 'light' : 'dark'}
    </button>
  )
}

export function Header() {
  return (
    <header className="mx-auto flex max-w-[600px] items-center justify-between px-5 pt-6">
      <Link href="/about" className="text-sm text-[var(--muted)] hover:text-[var(--text)]">
        {siteConfig.name.split(' ')[0].toLowerCase()}
      </Link>
      <nav className="flex gap-4 text-sm text-[var(--muted)]">
        <Link href="/work" className="hover:text-[var(--text)]">work</Link>
        <Link href="/blog" className="hover:text-[var(--text)]">blog</Link>
        <a href={`mailto:${siteConfig.email.user}@${siteConfig.email.domain}`} className="hover:text-[var(--text)]">contact</a>
        <ThemeToggle />
      </nav>
    </header>
  )
}
