'use client'
import { TextMorph } from '@/components/ui/text-morph'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { useEffect, useState } from 'react'
import Link from 'next/link'

function CopyButton() {
  const [text, setText] = useState('Copy')
  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''

  useEffect(() => {
    setTimeout(() => {
      setText('Copy')
    }, 2000)
  }, [text])

  return (
    <button
      onClick={() => {
        setText('Copied')
        navigator.clipboard.writeText(currentUrl)
      }}
      className="font-base flex items-center gap-1 text-center text-sm text-[var(--muted)] transition-colors hover:text-[var(--text)]"
      type="button"
    >
      <TextMorph>{text}</TextMorph>
      <span>URL</span>
    </button>
  )
}

export function BlogArticle({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgress
        className="fixed top-0 z-50 h-0.5 bg-[#c6ff4a] dark:bg-[#c6ff4a]"
        springOptions={{ bounce: 0 }}
      />

      <div className="mx-auto w-[min(calc(100%-36px),800px)] pt-28 pb-4">
        <div className="flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-geist-mono)] text-xs font-semibold tracking-wider text-[var(--muted)] uppercase transition-colors hover:text-[var(--text)]"
          >
            ← All posts
          </Link>
          <CopyButton />
        </div>
      </div>

      <main className="mx-auto w-[min(calc(100%-36px),800px)] pb-24">
        <article className="case-study-content">{children}</article>
      </main>
    </>
  )
}
