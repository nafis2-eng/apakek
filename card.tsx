'use client'

import { useEffect, useRef, useState } from 'react'
import { stats } from '@/lib/site'

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement | null>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 1600
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.round(eased * value))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function StatsCounter() {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <div className="font-heading text-4xl font-extrabold text-accent md:text-5xl">
            <Counter value={s.value} suffix={s.suffix} />
          </div>
          <p className="mt-2 text-sm font-medium text-primary-foreground/70">
            {s.label}
          </p>
        </div>
      ))}
    </div>
  )
}
