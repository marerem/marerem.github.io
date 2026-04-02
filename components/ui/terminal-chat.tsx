'use client'
import { siteConfig } from '@/site.config'
import { AnimatePresence, motion } from 'motion/react'
import { useCallback, useEffect, useRef, useState } from 'react'

type KnowledgeEntry = { keywords: string[]; response: string }

function interpolate(template: string): string {
  const github =
    siteConfig.socialLinks.find((l) => l.label === 'Github')?.link ?? ''
  const linkedin =
    siteConfig.socialLinks.find((l) => l.label === 'LinkedIn')?.link ?? ''
  return template
    .replace(/\{name\}/g, siteConfig.name.split(' ')[0] ?? siteConfig.name)
    .replace(/\{handle\}/g, siteConfig.terminal.handle)
    .replace(/\{emailDisplay\}/g, siteConfig.email.display)
    .replace(/\{github\}/g, github.replace('https://', ''))
    .replace(/\{linkedin\}/g, linkedin.replace('https://www.', ''))
}

const KNOWLEDGE: KnowledgeEntry[] = siteConfig.terminal.knowledge.map((k) => ({
  keywords: [...k.keywords, ...siteConfig.name.toLowerCase().split(' ')],
  response: interpolate(k.response),
}))

function scoreTerm(query: string, keyword: string): number {
  const q = query.toLowerCase()
  const k = keyword.toLowerCase()
  if (q === k) return 3
  if (q.includes(k) || k.includes(q)) return 2
  let common = 0
  for (let i = 0; i < Math.min(q.length, k.length); i++) {
    if (q[i] === k[i]) common++
    else break
  }
  return common >= 3 ? 1 : 0
}

function getResponse(input: string): string {
  const words = input
    .toLowerCase()
    .split(/\s+/)
    .filter((w) => w.length > 1)
  let best: KnowledgeEntry | null = null
  let bestScore = 0

  for (const entry of KNOWLEDGE) {
    let entryScore = 0
    for (const word of words) {
      for (const kw of entry.keywords) {
        entryScore += scoreTerm(word, kw)
      }
    }
    if (entryScore > bestScore) {
      bestScore = entryScore
      best = entry
    }
  }

  if (best && bestScore >= 2) return best.response
  return "Hmm, I don't have info on that. Try `experience`, `projects`, `skills`, `education`, or `contact`."
}

type Message = { type: 'input' | 'output'; text: string }

export function TerminalChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { type: 'output', text: interpolate(siteConfig.terminal.greeting) },
  ])
  const [input, setInput] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight })
    })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
  }, [isOpen])

  const handleSubmit = useCallback(() => {
    const trimmed = input.trim()
    if (!trimmed) return
    const response = getResponse(trimmed)
    setMessages((prev) => [
      ...prev,
      { type: 'input', text: trimmed },
      { type: 'output', text: response },
    ])
    setInput('')
  }, [input])

  const promptText = interpolate(siteConfig.terminal.prompt)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-4 bottom-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white shadow-lg transition-transform hover:scale-105 dark:bg-zinc-100 dark:text-zinc-900"
        aria-label="Toggle chat"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={`fixed right-4 bottom-16 z-50 overflow-hidden rounded-lg border border-zinc-700 bg-[#1a1a1a] shadow-2xl ${
              isExpanded ? 'h-[70vh] w-[420px]' : 'h-80 w-80'
            }`}
          >
            <div className="flex items-center gap-1.5 bg-[#2a2a2a] px-3 py-2">
              <button
                onClick={() => setIsOpen(false)}
                className="h-3 w-3 rounded-full bg-red-500 transition-opacity hover:opacity-80"
                aria-label="Close"
              />
              <button
                onClick={() => setIsExpanded(false)}
                className="h-3 w-3 rounded-full bg-yellow-500 transition-opacity hover:opacity-80"
                aria-label="Minimize"
              />
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="h-3 w-3 rounded-full bg-green-500 transition-opacity hover:opacity-80"
                aria-label="Expand"
              />
              <span className="ml-2 font-[family-name:var(--font-geist-mono)] text-[10px] text-zinc-400">
                {promptText}
              </span>
            </div>

            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-3"
              style={{ height: 'calc(100% - 72px)' }}
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`mb-2 font-[family-name:var(--font-geist-mono)] text-xs ${
                    msg.type === 'input'
                      ? 'text-zinc-500'
                      : 'whitespace-pre-wrap text-green-400'
                  }`}
                >
                  {msg.type === 'input' ? `$ ${msg.text}` : msg.text}
                </div>
              ))}
            </div>

            <div className="border-t border-zinc-700 px-3 py-2">
              <div className="flex items-center gap-2">
                <span className="font-[family-name:var(--font-geist-mono)] text-xs text-green-500">
                  $
                </span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                  className="flex-1 bg-transparent font-[family-name:var(--font-geist-mono)] text-xs text-green-300 outline-none placeholder:text-zinc-600"
                  placeholder="Type a keyword..."
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
