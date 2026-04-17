import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import SectionLabel from '@/components/ui/SectionLabel'
import { getAllPosts } from '@/lib/blog'

export const metadata = {
  title: 'Blog — Conor Murphy',
  description: 'Plain-English articles on web design, local SEO, and getting more from your business website.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Navigation />
      <main>
        <section
          className="px-8 max-w-[1440px] mx-auto"
          style={{ paddingBlock: 'var(--py-section)' }}
        >
          <SectionLabel>Thinking</SectionLabel>
          <h1
            className="font-display font-semibold mt-4 mb-4 max-w-xl"
            style={{ fontSize: 'var(--text-h1)' }}
          >
            Articles & advice for local businesses
          </h1>
          <p className="text-fog-muted max-w-lg mb-16 leading-relaxed">
            Plain-English writing on web design, local SEO, and getting more from your online presence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map(post => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block p-8 rounded-xl bg-ink-soft border border-white/5 hover:border-white/10 transition-colors duration-200"
              >
                <div className="flex items-center gap-3 text-fog-muted text-sm mb-4">
                  <time dateTime={post.date}>{post.date}</time>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2
                  className="font-display font-semibold text-fog group-hover:text-accent transition-colors duration-200 mb-3"
                  style={{ fontSize: 'var(--text-h3)' }}
                >
                  {post.title}
                </h2>
                <p className="text-fog-muted text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="inline-block mt-4 text-accent text-sm font-medium">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
