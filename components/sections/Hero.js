'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import Link from 'next/link'

gsap.registerPlugin(SplitText)

export default function Hero() {
  const containerRef = useRef(null)

  useGSAP(() => {
    const headlineSplit = new SplitText('[data-hero-headline]', { type: 'lines,words', mask: 'lines' })
    const subSplit = new SplitText('[data-hero-sub]', { type: 'lines', mask: 'lines' })

    const tl = gsap.timeline({ delay: 0.2 })

    tl.fromTo(headlineSplit.lines,
      { y: '110%' },
      { y: '0%', duration: 1, stagger: 0.1, ease: 'power4.out' }
    )
    .fromTo(subSplit.lines,
      { y: '110%' },
      { y: '0%', duration: 0.8, stagger: 0.08, ease: 'power3.out' },
      '-=0.55'
    )
    .fromTo('[data-hero-cta]',
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.4'
    )
    .fromTo('[data-hero-scroll]',
      { opacity: 0 },
      { opacity: 1, duration: 0.8 },
      '-=0.2'
    )

    return () => {
      headlineSplit.revert()
      subSplit.revert()
    }
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center px-8 pt-32 pb-24 max-w-[1440px] mx-auto"
    >
      <h1
        data-hero-headline
        className="font-display font-semibold leading-[0.93] tracking-tight text-fog max-w-5xl"
        style={{ fontSize: 'var(--text-hero)' }}
      >
        Websites for local businesses that actually bring in work.
      </h1>

      <p
        data-hero-sub
        className="mt-8 text-fog-muted max-w-md leading-relaxed"
        style={{ fontSize: 'var(--text-h3)' }}
      >
        Simple, professional websites built for tradespeople, restaurants, and local shops across Ireland. Up and running in 2 weeks.
      </p>

      <div data-hero-cta className="mt-12" style={{ opacity: 0 }}>
        <Link
          href="#contact"
          className="inline-flex h-14 items-center px-8 rounded-full bg-accent text-fog text-base font-medium hover:bg-accent-hover transition-colors duration-200"
        >
          Start Your Project
        </Link>
      </div>

      <div
        data-hero-scroll
        className="absolute bottom-12 left-8 flex items-center gap-4 text-fog-muted text-sm"
        style={{ opacity: 0 }}
      >
        <div className="w-px h-12 bg-fog-muted/30" />
        Scroll to explore
      </div>
    </section>
  )
}
