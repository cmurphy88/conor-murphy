'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import FadeUp from '@/components/animations/FadeUp'
import SectionLabel from '@/components/ui/SectionLabel'
import TextReveal from '@/components/animations/TextReveal'
import { BLOG_POSTS } from '@/lib/placeholder-data'

gsap.registerPlugin(ScrollTrigger)

export default function AboutBlogTeaser() {
  const imageRef = useRef(null)

  useGSAP(() => {
    gsap.to(imageRef.current, {
      y: -60,
      ease: 'none',
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, { scope: imageRef })

  return (
    <section id="about" className="px-8 max-w-[1440px] mx-auto" style={{ paddingBlock: 'var(--py-section)' }}>
      {/* About — two column */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <SectionLabel>About</SectionLabel>
          <TextReveal
            as="h2"
            className="font-display font-semibold mt-4 mb-6 max-w-md"
            style={{ fontSize: 'var(--text-h2)' }}
          >
            Local business websites, done properly.
          </TextReveal>
          <FadeUp>
            <p className="text-fog-muted leading-relaxed mb-4">
              I'm Conor — a web designer based in Dublin. I build websites for local businesses
              that want to be found online and make a good impression when people arrive. Butchers,
              restaurants, tradespeople, solicitors — if you serve a local community, I can help.
            </p>
            <p className="text-fog-muted leading-relaxed mb-8">
              No jargon, no bloated packages. Just a site that works for your business.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-fog text-sm font-medium border-b border-fog/20 pb-0.5 hover:border-fog transition-colors duration-200"
            >
              More about me →
            </Link>
          </FadeUp>
        </div>

        {/* Portrait placeholder */}
        <div className="relative overflow-hidden rounded-xl aspect-[3/4]">
          <div
            ref={imageRef}
            className="w-full h-[115%] bg-ink-soft flex items-center justify-center -mt-[7.5%]"
            style={{ willChange: 'transform' }}
          >
            <span className="text-fog-muted text-sm">Portrait photo</span>
          </div>
        </div>
      </div>

      {/* Blog preview */}
      <div id="blog">
        <div className="flex items-center justify-between mb-10">
          <SectionLabel>Thinking</SectionLabel>
          <Link href="#" className="text-fog-muted text-sm hover:text-fog transition-colors duration-200">
            All posts →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BLOG_POSTS.slice(0, 2).map((post, i) => (
            <FadeUp key={post.slug} delay={i * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block p-8 rounded-xl bg-ink-soft border border-white/5 hover:border-white/10 transition-colors duration-200"
              >
                <div className="flex items-center gap-3 text-fog-muted text-sm mb-4">
                  <time dateTime={post.date}>{post.date}</time>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3
                  className="font-display font-semibold text-fog group-hover:text-accent transition-colors duration-200 mb-3"
                  style={{ fontSize: 'var(--text-h3)' }}
                >
                  {post.title}
                </h3>
                <p className="text-fog-muted text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
