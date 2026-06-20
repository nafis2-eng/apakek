import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Service } from '@/lib/site'
import { ServiceIcon } from '@/components/service-icon'

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/layanan#${service.slug}`}
      className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors group-hover:bg-accent">
        <ServiceIcon icon={service.icon} />
      </span>
      <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {service.short}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
        Selengkapnya
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  )
}
