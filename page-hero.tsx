'use client'

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import { MoveHorizontal } from 'lucide-react'

export function BeforeAfter() {
  const [pos, setPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, pct)))
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-2xl border border-border"
      onMouseMove={(e) => dragging.current && setFromClientX(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchMove={(e) => setFromClientX(e.touches[0].clientX)}
    >
      <Image
        src="/images/after.png"
        alt="Hasil setelah renovasi"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src="/images/before.png"
          alt="Kondisi sebelum renovasi"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <span className="absolute left-3 top-3 rounded-full bg-primary/80 px-3 py-1 text-xs font-semibold text-primary-foreground">
        Sebelum
      </span>
      <span className="absolute right-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
        Sesudah
      </span>

      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-background"
        style={{ left: `${pos}%` }}
      >
        <button
          type="button"
          aria-label="Geser pembanding sebelum dan sesudah"
          onMouseDown={() => (dragging.current = true)}
          onTouchStart={() => (dragging.current = true)}
          className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-background text-primary shadow-lg ring-2 ring-accent"
        >
          <MoveHorizontal className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
