'use client'
// Mafs: with two candidates, softmax = sigmoid of the logit gap; calibration stretches (T) and shifts (b) it.
import { useState } from 'react'
import { Mafs, Coordinates, Plot, Point, Line, MovablePoint } from 'mafs'
import 'mafs/core.css'

const sigmoid = (x: number) => 1 / (1 + Math.exp(-x))
const DELTA_EXAMPLE = Math.log(0.62 / 0.04) // ≈ 2.74, the clover example

function Slider({ label, value, min, max, step, onChange }: {
  label: string; value: number; min: number; max: number; step: number; onChange: (v: number) => void
}) {
  return (
    <label className="flex items-center gap-3 text-xs text-[var(--muted)]">
      <span className="w-24 font-mono">{label}</span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(+e.target.value)} className="flex-1 accent-[var(--cyan)]" />
      <span className="w-10 text-right font-mono text-[var(--text)]">{value.toFixed(2)}</span>
    </label>
  )
}

export function NoulCalibration() {
  const [delta, setDelta] = useState(DELTA_EXAMPLE)
  const [T, setT] = useState(1)
  const [b, setB] = useState(0)
  const p = (d: number) => sigmoid((d + b) / T)
  const clamp = (d: number) => Math.max(-8, Math.min(8, d))

  return (
    <div className="viz-mafs not-prose rounded-2xl border border-[var(--line)] bg-[var(--card)] p-5">
      {/* Mafs sets its colors on .MafsView, so override there to follow the site theme */}
      <style>{`.viz-mafs .MafsView { --mafs-bg: transparent; --mafs-fg: var(--muted); --mafs-line-color: var(--line); --mafs-origin-color: var(--line2); font-size: 11px; }`}</style>
      <Mafs height={240} viewBox={{ x: [-8, 8], y: [-0.1, 1.1] }} preserveAspectRatio={false} pan={false}>
        <Coordinates.Cartesian
          xAxis={{ lines: 2, labels: (x) => (x % 4 === 0 ? String(x) : '') }}
          yAxis={{ lines: 0.5, labels: (y) => (y === 0 || y === 0.5 || y === 1 ? String(y) : '') }}
          subdivisions={false}
        />
        {/* uncalibrated reference */}
        <Plot.OfX y={sigmoid} color="var(--muted)" opacity={0.35} />
        <Plot.OfX y={p} color="var(--cyan)" />
        <Line.Segment point1={[delta, 0]} point2={[delta, p(delta)]} color="var(--lime)" style="dashed" opacity={0.6} />
        <Point x={delta} y={0} color="var(--lime)" />
        <MovablePoint point={[delta, p(delta)]} constrain={([x]) => [clamp(x), p(clamp(x))]} onMove={([x]) => setDelta(clamp(x))} color="var(--lime)" />
      </Mafs>

      <p className="mt-3 font-mono text-xs text-[var(--soft)]">
        Δ = ℓ<sub>yes</sub> − ℓ<sub>no</sub> = {delta.toFixed(2)} → P(yes) = σ((Δ + b) / T) ={' '}
        <span className="text-[var(--lime)]">{p(delta).toFixed(3)}</span>
      </p>
      <div className="mt-4 space-y-2">
        <Slider label="temperature T" value={T} min={0.5} max={4} step={0.05} onChange={setT} />
        <Slider label="yes-bias b" value={b} min={-3} max={3} step={0.05} onChange={setB} />
      </div>
      <button type="button" onClick={() => { setDelta(DELTA_EXAMPLE); setT(1); setB(0) }} className="mt-3 text-xs text-[var(--muted)] hover:text-[var(--text)]">
        reset
      </button>
    </div>
  )
}
