'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { WORK_EXPERIENCE, SOCIAL_LINKS, PHOTOS } from './data'
import { siteConfig } from '@/site.config'
import { PhotoStack } from '@/components/ui/photo-stack'

// renders "[label](url)" segments of a highlight as links
function WithLinks({ text }: { text: string }) {
  const parts = text.split(/\[([^\]]+)\]\(([^)]+)\)/)
  return (
    <>
      {parts.map((part, i) =>
        i % 3 === 1 ? (
          <a key={i} href={parts[i + 1]} target="_blank" rel="noopener noreferrer"
            className="text-[var(--text)] underline decoration-[var(--line2)] underline-offset-4 hover:decoration-[var(--text)]">
            {part}
          </a>
        ) : i % 3 === 0 ? part : null,
      )}
    </>
  )
}

function ExperienceItem({ job }: { job: (typeof WORK_EXPERIENCE)[0] }) {
  const [open, setOpen] = useState(false)
  const highlights = (job as any).highlights as string[] | undefined
  const stack = (job as any).stack as string[] | undefined

  const expandable = !!highlights?.length
  const row = (
    <>
      <span className="flex items-baseline gap-2">
        {/* chevron hints the row expands; turns down when open */}
        <svg
          viewBox="0 0 12 12"
          aria-hidden="true"
          className={`size-2.5 shrink-0 self-center text-[var(--muted)] transition-transform duration-200 group-hover:text-[var(--text)] ${open ? 'rotate-90' : ''} ${expandable ? '' : 'invisible'}`}
        >
          <path d="M4 2l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>
          <span className="text-[var(--text)]">{job.title}</span>
          {job.company && <span className="text-[var(--muted)]"> at {job.company}</span>}
        </span>
      </span>
      <span className="shrink-0 font-[family-name:var(--font-geist-mono)] text-xs text-[var(--muted)]">
        {job.start === job.end ? job.start : `${job.start}–${job.end}`}
      </span>
    </>
  )
  const rowClass = 'group -mx-3 flex w-[calc(100%+1.5rem)] items-baseline justify-between gap-3 rounded-lg px-3 py-2 text-left text-sm'

  return (
    <div>
      {expandable ? (
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className={`${rowClass} cursor-pointer transition-colors hover:bg-[var(--card)]`}
        >
          {row}
        </button>
      ) : (
        <div className={rowClass}>{row}</div>
      )}
      <AnimatePresence>
        {open && highlights && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="overflow-hidden pb-3 pl-[2px] text-sm text-[var(--muted)]"
          >
            {/* bullets sit under the chevron, text lines up with the job title */}
            <ul className="list-disc pl-4 marker:text-[var(--line2)]">
              {highlights.map((h, i) => (
                <li key={i} className="py-0.5"><WithLinks text={h} /></li>
              ))}
            </ul>
            {stack && (
              <p className="mt-2 pl-4 font-[family-name:var(--font-geist-mono)] text-xs font-semibold text-[var(--soft)]">
                {stack.join(' · ')}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Personal() {
  return (
    <>
      <main className="mx-auto max-w-[600px] px-5 pt-12 pb-20">

      <div className="mb-10 flex items-center gap-6">
        <PhotoStack photos={PHOTOS} compact />
        <div>
          <p className="text-2xl font-semibold tracking-tight text-[var(--text)]">{siteConfig.name}</p>
          <p className="text-sm text-[var(--muted)]">Basel, Switzerland</p>
        </div>
      </div>

      <div className="space-y-4 text-[15px] leading-relaxed text-[var(--muted)]">
        <p className="text-lg text-[var(--text)]">
          Hi, I&apos;m Mariia, and this is my cat Juni. Welcome to our little corner of the internet.
        </p>
        <p>
          I&apos;m a full-stack ML engineer, from model to interface, or at least someone always trying to become a better one.
          I&apos;m curious about both the fundamentals and the latest trends, and I love figuring
          out how new ideas can solve real, existing problems. I get interested in things very
          easily, which keeps me learning every day (and keeps 100+ tabs open in my browser).
        </p>
      </div>

      <div className="mt-4 flex gap-4 text-sm">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--muted)] hover:text-[var(--text)]"
          >
            {link.label}
          </a>
        ))}
        <a
          href={`mailto:${siteConfig.email.user}@${siteConfig.email.domain}`}
          className="text-[var(--muted)] hover:text-[var(--text)]"
        >
          Email
        </a>
        <a href={siteConfig.cvPath} target="_blank" rel="noreferrer" className="text-[var(--muted)] hover:text-[var(--text)]">
          CV
        </a>
      </div>

      {/* experience */}
      <h2 className="mt-16 mb-2 text-sm font-semibold text-[var(--muted)] uppercase tracking-wider">Experience</h2>

      {WORK_EXPERIENCE.map((job) => (
        <ExperienceItem key={job.id} job={job} />
      ))}

      {/* education */}
      <h2 className="mt-16 mb-2 text-sm font-semibold text-[var(--muted)] uppercase tracking-wider">Education</h2>

      {siteConfig.education.map((edu) => (
        <div key={edu.degree} className="py-2 text-sm">
          <div className="flex items-baseline justify-between gap-3">
            <span className="text-[var(--text)]">{edu.degree}</span>
            <span className="shrink-0 font-[family-name:var(--font-geist-mono)] text-xs text-[var(--muted)]">
              {edu.start}–{edu.end}
            </span>
          </div>
          <p className="text-[var(--muted)]">
            {edu.school}
            {'detail' in edu && (
              <>
                {' · '}
                {'detailLink' in edu ? (
                  <a href={edu.detailLink} target="_blank" rel="noopener noreferrer" className="underline decoration-[var(--line2)] underline-offset-4 hover:text-[var(--text)] hover:decoration-[var(--text)]">
                    {edu.detail}
                  </a>
                ) : (
                  edu.detail
                )}
              </>
            )}
          </p>
        </div>
      ))}

    </main>
    </>
  )
}
