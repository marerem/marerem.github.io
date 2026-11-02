'use client'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import Link from 'next/link'

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ScrollProgress
        className="fixed top-0 z-50 h-0.5 bg-[#c6ff4a] dark:bg-[#c6ff4a]"
        springOptions={{ bounce: 0 }}
      />

      {/* Back link */}
      <div className="mx-auto w-[min(calc(100%-36px),800px)] pt-28 pb-4">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-[family-name:var(--font-geist-mono)] text-xs font-semibold tracking-wider text-[var(--muted)] uppercase transition-colors hover:text-[var(--text)]"
        >
          ← Back to work
        </Link>
      </div>

      {/* Article content */}
      <main className="mx-auto w-[min(calc(100%-36px),800px)] pb-24">
        <article className="case-study-content">{children}</article>
      </main>
    </>
  )
}
