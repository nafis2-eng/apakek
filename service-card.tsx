import Image from 'next/image'
import { MapPin, Calendar } from 'lucide-react'
import type { Project } from '@/lib/site'

export function ProjectCard({
  project,
  onClick,
}: {
  project: Project
  onClick?: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group block w-full overflow-hidden rounded-xl border border-border bg-card text-left transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image || '/placeholder.svg'}
          alt={`Proyek ${project.title} di ${project.location}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
          {project.categoryLabel}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-heading text-lg font-bold text-foreground">
          {project.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5 text-accent" />
            {project.location}
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5 text-accent" />
            {project.year}
          </span>
        </div>
      </div>
    </button>
  )
}
