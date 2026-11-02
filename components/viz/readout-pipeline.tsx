'use client'
// Motion: the noul readout as a five-step animation, prompt -> P(yes).
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView, useReducedMotion } from 'motion/react'

const STEPS = [
  { label: 'Prompt', text: 'Jev renders the state (any fields, or plain text), the instructions and the allowed answers; the prompt ends right at the answer cue.' },
  { label: 'Forward pass', text: 'One forward pass over the prompt. No generation, no sampling.' },
  { label: 'Logits', text: 'At the last position: one logit for every token in the vocabulary — 151,936 of them.' },
  { label: 'Mask', text: 'Keep only the allowed answers. For noul that is always two tokens: “ yes” and “ no”.' },
  { label: 'Softmax', text: 'Softmax over the two → a distribution that sums to 1.' },
]

// deterministic pseudo-random heights so server and client render the same bars
const N_BARS = 72
const YES = 41
const NO = 17
const HEIGHTS = Array.from({ length: N_BARS }, (_, i) => {
  if (i === YES) return 56
  if (i === NO) return 30
  const r = ((i * 2654435761) % 2 ** 32) / 2 ** 32
  return 4 + Math.round(r * r * 26)
})

const P_YES = 0.94

export function ReadoutPipeline() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.5 })
  const reduce = useReducedMotion()
  const [step, setStep] = useState(0)
  const [playing, setPlaying] = useState(true)

  useEffect(() => {
    if (!playing || !inView || reduce) return
    const id = setTimeout(() => setStep((s) => (s + 1) % STEPS.length), step === STEPS.length - 1 ? 3500 : 2200)
    return () => clearTimeout(id)
  }, [step, playing, inView, reduce])

  const go = (s: number) => { setPlaying(false); setStep(s) }

  return (
    <div ref={ref} className="not-prose rounded-2xl border border-[var(--line)] bg-[var(--card)] p-5">
      <svg viewBox="0 0 640 210" className="block w-full" role="img" aria-label={`Step ${step + 1}: ${STEPS[step].label}`}>
        {/* prompt */}
        <g>
          {['state {passage, question}', 'instructions …', 'Allowed answers: yes, no', 'Answer:'].map((t, i) => (
            <g key={t}>
              <rect x={0} y={34 + i * 34} width={170} height={26} rx={6} fill="var(--card2)" stroke={i === 3 ? 'var(--cyan)' : 'var(--line)'} />
              <text x={10} y={51 + i * 34} fontSize={11} fill={i === 3 ? 'var(--cyan)' : 'var(--soft)'} fontFamily="ui-monospace, monospace">{t}</text>
            </g>
          ))}
          <motion.rect x={64} y={142} width={7} height={14} fill="var(--cyan)"
            animate={{ opacity: step === 0 ? [1, 0, 1] : 0 }} transition={{ duration: 1, repeat: step === 0 ? Infinity : 0 }} />
        </g>

        {/* model */}
        <rect x={196} y={40} width={112} height={130} rx={12} fill="var(--card2)" stroke={step === 1 ? 'var(--violet)' : 'var(--line)'} strokeWidth={step === 1 ? 2 : 1} />
        <text x={252} y={98} textAnchor="middle" fontSize={11} fill="var(--text)" fontFamily="ui-monospace, monospace">Qwen3.6</text>
        <text x={252} y={114} textAnchor="middle" fontSize={9} fill="var(--muted)" fontFamily="ui-monospace, monospace">35B-A3B</text>
        <motion.circle r={5} cy={105} fill="var(--violet)"
          initial={false}
          animate={step === 1 ? { cx: [172, 334], opacity: [0, 1, 1, 0] } : { cx: 172, opacity: 0 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }} />

        {/* logits strip */}
        <g transform="translate(336 0)">
          {HEIGHTS.map((h, i) => {
            const isCand = i === YES || i === NO
            const visible = step >= 2
            const masked = step >= 3 && !isCand
            return (
              <motion.rect key={i} x={i * 4.2} width={3} rx={1}
                fill={isCand && step >= 3 ? (i === YES ? 'var(--lime)' : 'var(--orange)') : 'var(--muted)'}
                initial={false}
                animate={{
                  y: 170 - (visible ? h : 0) * 1.8,
                  height: (visible ? h : 0) * 1.8,
                  opacity: masked ? 0.08 : visible ? 0.9 : 0,
                }}
                transition={{ duration: 0.5, delay: step === 2 ? i * 0.006 : 0 }} />
            )
          })}
          <AnimatePresence>
            {step === 2 && (
              <motion.text key="vocab" x={150} y={190} textAnchor="middle" fontSize={10} fill="var(--muted)" fontFamily="ui-monospace, monospace"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>151,936 logits (a sample shown)</motion.text>
            )}
            {step >= 3 && (
              <motion.g key="labels" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <text x={YES * 4.2 + 1.5} y={190} textAnchor="middle" fontSize={10} fill="var(--lime)" fontFamily="ui-monospace, monospace">“ yes” 9542</text>
                <text x={NO * 4.2 + 1.5} y={190} textAnchor="middle" fontSize={10} fill="var(--orange)" fontFamily="ui-monospace, monospace">“ no” 874</text>
              </motion.g>
            )}
          </AnimatePresence>
        </g>

        {/* softmax result */}
        <AnimatePresence>
          {step === 4 && (
            <motion.g key="softmax" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <rect x={336} y={10} width={300} height={56} rx={10} fill="var(--bg)" stroke="var(--line)" />
              {[['P(yes)', P_YES, 'var(--lime)'], ['P(no)', 1 - P_YES, 'var(--orange)']].map(([label, p, color], i) => (
                <g key={label as string}>
                  <text x={348} y={33 + i * 20} fontSize={10} fill="var(--soft)" fontFamily="ui-monospace, monospace">{label}</text>
                  <motion.rect x={400} y={24 + i * 20} height={11} rx={3} fill={color as string}
                    initial={{ width: 0 }} animate={{ width: 150 * (p as number) }} transition={{ duration: 0.6, ease: 'easeOut' }} />
                  <text x={592} y={33 + i * 20} textAnchor="end" fontSize={10} fill="var(--text)" fontFamily="ui-monospace, monospace">{(p as number).toFixed(2)}</text>
                </g>
              ))}
            </motion.g>
          )}
        </AnimatePresence>
      </svg>

      <p className="mt-3 min-h-[2.5em] text-sm text-[var(--muted)]">
        <span className="font-semibold text-[var(--text)]">{step + 1}. {STEPS[step].label}.</span> {STEPS[step].text}
      </p>

      <div className="mt-3 flex items-center gap-2">
        <button type="button" onClick={() => setPlaying(!playing)} className="rounded-md border border-[var(--line)] px-2.5 py-1 text-xs text-[var(--text)] hover:bg-[var(--card2)]">
          {playing ? 'pause' : 'play'}
        </button>
        {STEPS.map((s, i) => (
          <button key={s.label} type="button" onClick={() => go(i)} aria-label={`Go to step ${i + 1}: ${s.label}`}
            className={`h-1.5 rounded-full transition-all ${i === step ? 'w-6 bg-[var(--text)]' : 'w-1.5 bg-[var(--line2)]'}`} />
        ))}
      </div>
    </div>
  )
}
