import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { blogPosts } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Blog & Artikel',
  description:
    'Tips konstruksi, tren desain, dan edukasi seputar dunia bangunan dari tim ahli Rahayu Cipta Mandiri.',
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <>
      <PageHero
        eyebrow="Blog & Artikel"
        title="Wawasan Seputar Konstruksi"
        description="Tips praktis, tren desain terkini, dan edukasi untuk membantu Anda membuat keputusan terbaik."
        breadcrumb="Blog"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg lg:grid-cols-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
                <Image
                  src={featured.image || "/placeholder.svg"}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center p-6 md:p-10">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-accent/15 px-3 py-1 font-semibold text-accent-foreground">
                    {featured.category}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" /> {featured.readingTime}
                  </span>
                </div>
                <h2 className="mt-4 font-heading text-2xl font-bold text-balance text-foreground md:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{featured.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-accent-foreground">
                  Baca Selengkapnya
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 100}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="rounded-full bg-accent/15 px-3 py-1 font-semibold text-accent-foreground">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" /> {post.readingTime}
                      </span>
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-bold text-balance text-foreground">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent-foreground">
                      Baca Selengkapnya
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
