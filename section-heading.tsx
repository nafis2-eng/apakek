'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, MapPin, Calendar, User, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ProjectCard } from '@/components/project-card'
import { projects, type Project } from '@/lib/site'

const filters = [
  { key: 'all', label: 'Semua' },
  { key: 'residential', label: 'Residensial' },
  { key: 'commercial', label: 'Komersial' },
  { key: 'industrial', label: 'Industrial' },
] as const

export function PortfolioGallery() {
  const [filter, setFilter] = useState<string>('all')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const filtered =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  const active = activeIndex !== null ? filtered[activeIndex] : null

  const close = useCallback(() => setActiveIndex(null), [])
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % filtered.length)),
    [filtered.length],
  )
  const prev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? i : (i - 1 + filtered.length) % filtered.length,
      ),
    [filtered.length],
  )

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active, close, next, prev])

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => {
              setFilter(f.key)
              setActiveIndex(null)
            }}
            className={cn(
              'rounded-full px-5 py-2 text-sm font-medium transition-colors',
              filter === f.key
                ? 'bg-accent text-accent-foreground'
                : 'border border-border bg-card text-foreground/70 hover:border-accent/40 hover:text-accent',
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>

      {active && <Lightbox project={active} onClose={close} onNext={next} onPrev={prev} />}
    </>
  )
}

function Lightbox({
  project,
  onClose,
  onNext,
  onPrev,
}: {
  project: Project
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`Detail proyek ${project.title}`}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Tutup"
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
      >
        <X className="h-6 w-6" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        aria-label="Sebelumnya"
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 md:left-6"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        aria-label="Berikutnya"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 md:right-6"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div
        className="w-full max-w-3xl overflow-hidden rounded-2xl bg-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[16/10]">
          <Image
            src={project.image || '/placeholder.svg'}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
          <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
            {project.categoryLabel}
          </span>
        </div>
        <div className="p-6">
          <h3 className="font-heading text-xl font-bold text-foreground">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" />
              {project.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4 text-accent" />
              {project.year}
            </span>
            <span className="inline-flex items-center gap-2">
              <User className="h-4 w-4 text-accent" />
              {project.client}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
