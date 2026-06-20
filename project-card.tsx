import Link from 'next/link'
import { MessageCircle, ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'
import { site, waLink } from '@/lib/site'

export function CtaSection() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="font-heading text-3xl font-bold text-balance text-primary-foreground md:text-4xl">
            Punya rencana proyek? Mari wujudkan bersama kami.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/70">
            Konsultasikan kebutuhan konstruksi atau renovasi Anda secara gratis. Tim {site.name}
            {' '}siap membantu dari perencanaan hingga serah terima.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'h-11 bg-accent px-6 text-accent-foreground hover:bg-accent/90',
              )}
            >
              <MessageCircle className="h-5 w-5" />
              Konsultasi via WhatsApp
            </a>
            <Link
              href="/kontak"
              className={cn(
                buttonVariants({ size: 'lg', variant: 'outline' }),
                'h-11 border-primary-foreground/30 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground',
              )}
            >
              Minta Penawaran Gratis
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
