'use client'
// Custom interactive diagram: the same readout for noul / score / choice, only the candidate list changes.
import { useState } from 'react'

type Row = { token: string; p: number; candidate?: boolean; id?: number }

// Illustrative full-vocabulary probabilities at the answer position (top tokens only)
const QUESTIONS: Record<string, { prompt: string; rows: Row[] }> = {
  noul: {
    prompt: 'Is it lucky to find a four-leaf clover?  Allowed answers: yes, no',
    rows: [
      { token: ' yes', p: 0.62, candidate: true, id: 9542 },
      { token: ' Yes', p: 0.14 },
      { token: 'yes', p: 0.05 },
      { token: ' no', p: 0.04, candidate: true, id: 874 },
      { token: ' The', p: 0.03 },
      { token: ' Based', p: 0.02 },
      { token: '\\n', p: 0.02 },
      { token: ' No', p: 0.01 },
    ],
  },
  score: {
    prompt: '“both awful and appealing.”  Levels: 0 very negative … 4 very positive',
    rows: [
      { token: '2', p: 0.38, candidate: true },
      { token: '3', p: 0.18, candidate: true },
      { token: '1', p: 0.12, candidate: true },
      { token: ' Neutral', p: 0.08 },
      { token: ' The', p: 0.04 },
      { token: '4', p: 0.03, candidate: true },
      { token: '\\n', p: 0.03 },
      { token: '0', p: 0.02, candidate: true },
    ],
  },
  choice: {
    prompt: 'Mold on bread — what should the student do next?  Options: A, B, C, D',
    rows: [
      { token: ' A', p: 0.71, candidate: true },
      { token: ' Check', p: 0.06 },
      { token: ' B', p: 0.06, candidate: true },
      { token: ' D', p: 0.05, candidate: true },
      { token: ' C', p: 0.03, candidate: true },
      { token: ' The', p: 0.03 },
      { token: '\\n', p: 0.02 },
      { token: ' a', p: 0.01 },
    ],
  },
}

export function CandidateMask() {
  const [type, setType] = useState<keyof typeof QUESTIONS>('noul')
  const [masked, setMasked] = useState(false)
  const { prompt, rows } = QUESTIONS[type]
  const candSum = rows.filter((r) => r.candidate).reduce((s, r) => s + r.p, 0)
  const k = rows.filter((r) => r.candidate).length
  const shownSum = masked ? 1 : rows.reduce((s, r) => s + r.p, 0)

  return (
    <div className="not-prose rounded-2xl border border-[var(--line)] bg-[var(--card)] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-1 rounded-lg border border-[var(--line)] p-0.5" role="tablist">
          {Object.keys(QUESTIONS).map((t) => (
            <button key={t} type="button" role="tab" aria-selected={t === type} onClick={() => setType(t)}
              className={`rounded-md px-3 py-1 font-mono text-xs transition-colors ${t === type ? 'bg-[var(--card2)] text-[var(--text)]' : 'text-[var(--muted)] hover:text-[var(--text)]'}`}>
              {t}
            </button>
          ))}
        </div>
        <label className="flex cursor-pointer items-center gap-2 text-xs text-[var(--muted)]">
          <input type="checkbox" checked={masked} onChange={(e) => setMasked(e.target.checked)} className="peer sr-only" />
          <span className="relative h-5 w-9 rounded-full bg-[var(--line2)] transition-colors peer-checked:bg-[var(--cyan)] peer-focus-visible:outline-2 peer-focus-visible:outline-[var(--muted)] after:absolute after:top-0.5 after:left-0.5 after:size-4 after:rounded-full after:bg-white after:transition-transform peer-checked:after:translate-x-4" />
          mask to allowed answers
        </label>
      </div>

      <p className="mt-4 font-mono text-xs text-[var(--soft)]">{prompt}</p>

      <div className="mt-4 space-y-1.5">
        {rows.map((r) => {
          const p = masked ? (r.candidate ? r.p / candSum : 0) : r.p
          return (
            <div key={r.token} className={`grid grid-cols-[72px_1fr_44px] items-center gap-3 transition-opacity duration-300 ${masked && !r.candidate ? 'opacity-30' : ''}`}>
              <span className={`truncate font-mono text-xs ${r.candidate ? 'text-[var(--cyan)]' : 'text-[var(--muted)]'}`}>
                “{r.token}”
              </span>
              <div className="h-3 rounded-sm bg-[var(--card2)]">
                <div className={`h-full rounded-sm transition-[width] duration-500 ease-out ${r.candidate ? 'bg-[var(--cyan)]' : 'bg-[var(--muted)]'}`} style={{ width: `${(p * 100).toFixed(1)}%` }} />
              </div>
              <span className="text-right font-mono text-xs text-[var(--text)]">{masked && !r.candidate ? '—' : p.toFixed(2)}</span>
            </div>
          )
        })}
        <div className={`grid grid-cols-[72px_1fr_44px] gap-3 font-mono text-xs text-[var(--muted)] transition-opacity ${masked ? 'opacity-30' : ''}`}>
          <span>…</span><span>151,9xx other tokens</span><span className="text-right">{masked ? '—' : (1 - rows.reduce((s, r) => s + r.p, 0)).toFixed(2)}</span>
        </div>
      </div>

      <p className="mt-4 border-t border-[var(--line)] pt-3 text-xs text-[var(--muted)]">
        K = <span className="text-[var(--text)]">{k}</span> candidates ·{' '}
        {masked
          ? <>conditional P sums to <span className="text-[var(--text)]">{shownSum.toFixed(2)}</span></>
          : <>raw P of the candidates sums to only <span className="text-[var(--text)]">{candSum.toFixed(2)}</span></>}
        {type === 'noul' && <> · token ids “ yes” = 9542, “ no” = 874</>}
      </p>
    </div>
  )
}
