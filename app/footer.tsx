'use client'
import { TextLoop } from '@/components/ui/text-loop'

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-100 px-0 py-4 dark:border-zinc-800">
      <div className="flex items-center justify-between">
        <a href="https://mariia.ch" target="_blank" rel="noopener noreferrer">
          <TextLoop className="text-xs text-zinc-500">
            <span>GitHub/GitLab @marerem</span>
            <span>© 2026 MIT License.</span>
          </TextLoop>
        </a>
      </div>
    </footer>
  )
}
