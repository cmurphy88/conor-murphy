import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { getAllPosts, getPostBySlug } from '@/lib/blog'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.frontmatter.title} — Conor Murphy`,
    description: post.frontmatter.excerpt,
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  const { frontmatter, content } = post

  return (
    <>
      <Navigation />
      <main>
        <article
          className="px-8 max-w-[720px] mx-auto"
          style={{ paddingBlock: 'var(--py-section)' }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-fog-muted text-sm hover:text-fog transition-colors duration-200 mb-12"
          >
            ← All posts
          </Link>

          <div className="flex items-center gap-3 text-fog-muted text-sm mb-6">
            <time dateTime={frontmatter.date}>{frontmatter.date}</time>
            <span>·</span>
            <span>{frontmatter.readTime}</span>
          </div>

          <h1
            className="font-display font-semibold text-fog mb-12"
            style={{ fontSize: 'var(--text-h2)' }}
          >
            {frontmatter.title}
          </h1>

          <div className="prose prose-invert prose-lg max-w-none
            prose-headings:font-display prose-headings:font-semibold prose-headings:text-fog
            prose-p:text-fog-muted prose-p:leading-relaxed
            prose-a:text-accent prose-a:no-underline hover:prose-a:underline
            prose-strong:text-fog
            prose-li:text-fog-muted
            prose-hr:border-white/10">
            <MDXRemote source={content} />
          </div>

          <div className="mt-16 pt-8 border-t border-white/10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-fog-muted text-sm hover:text-fog transition-colors duration-200"
            >
              ← Back to all posts
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
