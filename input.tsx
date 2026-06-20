import { Star } from 'lucide-react'

type Props = {
  name: string
  role: string
  rating: number
  quote: string
  initials: string
}

export function TestimonialCard({ name, role, rating, quote, initials }: Props) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={
              i < rating
                ? 'h-4 w-4 fill-accent text-accent'
                : 'h-4 w-4 text-muted-foreground/30'
            }
          />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground/80">
        {`"${quote}"`}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground">
          {initials}
        </span>
        <span>
          <span className="block font-semibold text-foreground">{name}</span>
          <span className="block text-sm text-muted-foreground">{role}</span>
        </span>
      </figcaption>
    </figure>
  )
}
