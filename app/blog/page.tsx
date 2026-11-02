'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { siteConfig } from '@/site.config'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const VARIANTS_ITEM = {
  hidden: { opacity: 0, y: 15, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

export default function BlogPage() {
  return (
    <div className="mx-auto w-[min(calc(100%-36px),800px)] pt-28 pb-24">
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-[family-name:var(--font-geist-mono)] text-xs font-semibold tracking-wider text-[var(--muted)] uppercase transition-colors hover:text-[var(--text)]"
      >
        ← Home
      </Link>

      <motion.div
        variants={VARIANTS_CONTAINER}
        initial="hidden"
        animate="visible"
        className="mt-10"
      >
        <motion.p variants={VARIANTS_ITEM} className="mb-12 max-w-[600px] text-[15px] leading-relaxed text-[var(--muted)]">
          Together with my co-author Juni (officially my supervisor), I keep this small blog of
          ideas and discussions. If something here sparks your
          interest, or you have something to say or add,{' '}
          <a href={siteConfig.socialLinks.find((l) => l.label === 'LinkedIn')?.link} target="_blank" rel="noopener noreferrer" className="text-[var(--text)] underline decoration-[var(--line2)] underline-offset-4 hover:decoration-[var(--text)]">my DMs are always open</a>.
          Let&apos;s keep it humble and respectful here :)
        </motion.p>
        <motion.div variants={VARIANTS_ITEM} className="mt-4">
          {siteConfig.blogPosts.map((post) => {
            const comingSoon = post.link === '#'
            const content = (
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h2 className="flex items-center gap-3 text-xl font-semibold tracking-tight text-[var(--text)] transition-colors group-hover:text-[var(--lime)]">
                    {post.title}
                    {comingSoon && (
                      <span className="rounded-full border border-[var(--line)] bg-[var(--card)] px-2.5 py-0.5 font-[family-name:var(--font-geist-mono)] text-[10px] font-semibold tracking-wider text-[var(--muted)] uppercase">
                        Coming soon
                      </span>
                    )}
                  </h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-[var(--muted)]">
                    {post.description}
                  </p>
                </div>
                {!comingSoon && (
                  <span className="mt-1 shrink-0 font-[family-name:var(--font-geist-mono)] text-xs font-semibold text-[var(--lime)] opacity-0 transition-opacity group-hover:opacity-100">
                    Read →
                  </span>
                )}
              </div>
            )
            return comingSoon ? (
              <div
                key={post.uid}
                className="group block border-t border-[var(--line)] py-8 cursor-default opacity-70"
              >
                {content}
              </div>
            ) : (
              <Link
                key={post.uid}
                href={post.link}
                className="group block border-t border-[var(--line)] py-8 transition-all hover:pl-3"
              >
                {content}
              </Link>
            )
          })}
          <div className="border-t border-[var(--line)]" />
        </motion.div>
      </motion.div>
    </div>
  )
}
