'use client'
import { useState } from 'react'

export type StackPhoto = {
  src: string
  alt: string
  caption: string
  /** CSS object-position, to keep the subject in frame */
  position?: string
}

// index = order in the deck (0 is the front card); the rest fan out behind it
const CARD_POSITIONS = {
  large: [
    'rotate-0 z-30',
    'rotate-[5deg] translate-x-3 z-20',
    '-rotate-[5deg] -translate-x-3 z-10',
  ],
  // compact: tilted like a pinned photo; back cards fan out on hover to hint it's a deck
  compact: [
    '-rotate-3 z-30 group-hover:rotate-0',
    'rotate-[4deg] translate-x-1 z-20 group-hover:rotate-[8deg] group-hover:translate-x-4',
    '-rotate-[6deg] -translate-x-1 z-10 group-hover:-rotate-[10deg] group-hover:-translate-x-4',
  ],
}

export function PhotoStack({ photos, compact = false }: { photos: StackPhoto[]; compact?: boolean }) {
  const [front, setFront] = useState(0)
  const next = () => setFront((front + 1) % photos.length)
  const positions = CARD_POSITIONS[compact ? 'compact' : 'large']

  const deck = (
    <button
      type="button"
      onClick={next}
      title={compact ? 'tap to shuffle' : undefined}
      aria-label={`Photo ${front + 1} of ${photos.length}: ${photos[front].caption}. Show next photo`}
      className={`group relative shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--muted)] ${
        compact
          ? 'ml-2 size-36 rounded-3xl focus-visible:outline-offset-4 sm:size-48'
          : 'aspect-[4/5] w-[240px] rounded-2xl focus-visible:outline-offset-8 sm:w-[260px]'
      }`}
    >
      {photos.map((photo, i) => {
        const order = (i - front + photos.length) % photos.length
        return (
          <img
            key={photo.src}
            src={photo.src}
            alt={order === 0 ? photo.alt : ''}
            style={{ objectPosition: photo.position }}
            className={`absolute inset-0 h-full w-full rounded-2xl object-cover shadow-[0_8px_24px_rgba(0,0,0,0.22)] ring-1 ring-[var(--line)] transition duration-500 ease-out motion-reduce:transition-none ${positions[Math.min(order, positions.length - 1)]}`}
          />
        )
      })}
    </button>
  )

  if (compact) return deck

  return (
    <div className="flex flex-col items-center">
      {deck}
      <div className="mt-5 flex items-center gap-2 text-xs text-[var(--muted)]">
        {photos.map((photo, i) => (
          <span
            key={photo.src}
            className={`size-1.5 rounded-full transition-colors ${i === front ? 'bg-[var(--text)]' : 'bg-[var(--line)]'}`}
          />
        ))}
        <span className="ml-2" aria-live="polite">
          {photos[front].caption} · tap to shuffle
        </span>
      </div>
    </div>
  )
}
