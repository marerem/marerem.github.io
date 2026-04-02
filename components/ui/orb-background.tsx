'use client'
import dynamic from 'next/dynamic'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const Orb = dynamic(() => import('./orb'), { ssr: false })

export function OrbBackground() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === 'dark'

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    >
      <div className="h-full w-full">
        <Orb
          hue={0}
          hoverIntensity={2}
          rotateOnHover
          forceHoverState={false}
          backgroundColor={isDark ? '#09090b' : '#ffffff'}
        />
      </div>
    </div>
  )
}
