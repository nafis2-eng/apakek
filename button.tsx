'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { navLinks, site, waLink } from '@/lib/site'
import { Logo } from '@/components/logo'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-colors',
        scrolled
          ? 'border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80'
          : 'border-transparent bg-background',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:h-20 md:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label={site.name}>
          <Logo className="h-9 w-9" />
          <span className="flex flex-col leading-none">
            <span className="font-heading text-base font-bold text-primary md:text-lg">
              {site.name}
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              Kontraktor &amp; Konstruksi
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
          {navLinks.map((link) => {
            const active =
              link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-accent',
                  active ? 'text-accent' : 'text-foreground/80',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.phone}`}
            className="flex items-center gap-2 text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
          >
            <Phone className="h-4 w-4 text-accent" />
            {site.phoneLabel}
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants(),
              'h-10 bg-accent px-4 text-accent-foreground hover:bg-accent/90',
            )}
          >
            Konsultasi Gratis
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4" aria-label="Navigasi mobile">
            {navLinks.map((link) => {
              const active =
                link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'rounded-md px-3 py-3 text-base font-medium transition-colors',
                    active
                      ? 'bg-secondary text-accent'
                      : 'text-foreground/80 hover:bg-secondary',
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants(),
                'mt-2 h-11 w-full bg-accent text-accent-foreground hover:bg-accent/90',
              )}
            >
              Konsultasi Gratis
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
