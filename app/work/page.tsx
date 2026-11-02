import Link from 'next/link'
import { PROJECTS } from '../data'

export const metadata = {
  title: 'Work',
  alternates: { canonical: '/work' },
}

export default function WorkPage() {
  return (
    <main className="mx-auto max-w-[600px] px-5 pt-12 pb-20">
      <h1 className="mb-6 text-2xl font-semibold tracking-tight text-[var(--text)]">Work</h1>

      {PROJECTS.map((p) => {
        const content = (
          <>
            <p className="text-[15px] text-[var(--text)] group-hover:text-[var(--lime)] transition-colors">{p.name}</p>
            <p className="text-sm text-[var(--muted)]">{p.description}</p>
          </>
        )
        const className = 'group -mx-3 block rounded-lg px-3 py-3 transition-colors hover:bg-[var(--card)]'
        // external projects (e.g. GitHub) open in a new tab
        return p.link?.startsWith('http') ? (
          <a key={p.id} href={p.link} target="_blank" rel="noopener noreferrer" className={className}>
            {content}
          </a>
        ) : (
          <Link key={p.id} href={p.link || '#'} className={className}>
            {content}
          </Link>
        )
      })}
    </main>
  )
}
