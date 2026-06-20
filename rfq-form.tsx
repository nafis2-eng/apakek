import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function PageHero({
  title,
  description,
  breadcrumb,
}: {
  title: string
  description?: string
  breadcrumb: string
}) {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-primary-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary-foreground) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-sm text-primary-foreground/60"
        >
          <Link href="/" className="transition-colors hover:text-accent">
            Beranda
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-primary-foreground">{breadcrumb}</span>
        </nav>
        <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-balance text-primary-foreground md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/75 md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
