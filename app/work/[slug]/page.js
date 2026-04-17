import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { getAllWork, getWorkBySlug } from '@/lib/work'

export async function generateStaticParams() {
  const projects = getAllWork()
  return projects.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = getWorkBySlug(slug)
  if (!project) return {}
  return {
    title: `${project.frontmatter.title} — Conor Murphy`,
    description: project.frontmatter.excerpt,
  }
}

export default async function WorkCaseStudyPage({ params }) {
  const { slug } = await params
  const project = getWorkBySlug(slug)

  if (!project) notFound()

  const { frontmatter, content } = project

  return (
    <>
      <Navigation />
      <main>
        <article
          className="px-8 max-w-[1440px] mx-auto"
          style={{ paddingBlock: 'var(--py-section)' }}
        >
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-fog-muted text-sm hover:text-fog transition-colors duration-200 mb-12"
          >
            ← All work
          </Link>

          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
            <div>
              <span className="text-fog-muted text-sm font-mono">
                {frontmatter.category} — {frontmatter.year}
              </span>
              <h1
                className="font-display font-semibold text-fog mt-3 mb-4"
                style={{ fontSize: 'var(--text-h1)' }}
              >
                {frontmatter.title}
              </h1>
              {frontmatter.result && (
                <p className="text-fog-muted leading-relaxed">{frontmatter.result}</p>
              )}
              {frontmatter.url && (
                <a
                  href={frontmatter.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 text-accent text-sm font-medium hover:underline"
                >
                  Visit live site ↗
                </a>
              )}
            </div>
          </div>

          {/* Hero image */}
          {frontmatter.image && (
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-ink-soft mb-16">
              <Image
                src={frontmatter.image}
                alt={frontmatter.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 90vw"
              />
            </div>
          )}

          {/* Body */}
          <div className="max-w-[720px] mx-auto">
            <div className="prose prose-invert prose-lg max-w-none
              prose-headings:font-display prose-headings:font-semibold prose-headings:text-fog
              prose-p:text-fog-muted prose-p:leading-relaxed
              prose-a:text-accent prose-a:no-underline hover:prose-a:underline
              prose-strong:text-fog
              prose-li:text-fog-muted
              prose-blockquote:border-l-accent prose-blockquote:text-fog-muted
              prose-hr:border-white/10">
              <MDXRemote source={content} />
            </div>

            <div className="mt-16 pt-8 border-t border-white/10">
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 text-fog-muted text-sm hover:text-fog transition-colors duration-200"
              >
                ← Back to all work
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
