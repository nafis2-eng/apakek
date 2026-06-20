import Link from 'next/link'
import { MapPin, Phone, Clock, Mail } from 'lucide-react'
import { navLinks, services, site } from '@/lib/site'
import { Logo } from '@/components/logo'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-6 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2">
            <Logo className="h-9 w-9 bg-primary-foreground/10" />
            <span className="font-heading text-lg font-bold">{site.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
            {site.tagline}. Kontraktor terpercaya di {site.location} sejak {site.founded}.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={site.social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary-foreground/10 p-2 transition-colors hover:bg-accent">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.18a6.66 6.66 0 1 0 0 13.32 6.66 6.66 0 0 0 0-13.32zm0 10.98a4.32 4.32 0 1 1 0-8.64 4.32 4.32 0 0 1 0 8.64zm6.92-11.26a1.56 1.56 0 1 1-3.12 0 1.56 1.56 0 0 1 3.12 0z" />
              </svg>
            </a>
            <a href={site.social.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary-foreground/10 p-2 transition-colors hover:bg-accent">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href={site.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary-foreground/10 p-2 transition-colors hover:bg-accent">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
            Navigasi
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-primary-foreground/70 transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
            Layanan
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/layanan#${s.slug}`} className="text-primary-foreground/70 transition-colors hover:text-accent">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
            Kontak
          </h3>
          <ul className="mt-4 space-y-3.5 text-sm text-primary-foreground/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{site.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={`tel:${site.phone}`} className="hover:text-accent">
                {site.phoneLabel} ({site.contactPerson})
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${site.email}`} className="hover:text-accent">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-primary-foreground/60 md:flex-row md:px-6">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. Hak cipta dilindungi.
          </p>
          <p>Membangun Kepercayaan, Mewujudkan Impian.</p>
        </div>
      </div>
    </footer>
  )
}
