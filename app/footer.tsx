'use client'

export function Footer() {
  return (
    <footer className="mx-auto max-w-[600px] px-5 pb-10 text-xs text-[var(--muted)]">
      &copy; {new Date().getFullYear()}
    </footer>
  )
}
