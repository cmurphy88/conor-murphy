'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionLabel from '@/components/ui/SectionLabel'
import TextReveal from '@/components/animations/TextReveal'
import { PROCESS_STEPS } from '@/lib/placeholder-data'

gsap.registerPlugin(ScrollTrigger)

export default function Process() {
  const listRef = useRef(null)

  useGSAP(() => {
    const items = listRef.current.querySelectorAll('[data-process-item]')
    gsap.fromTo(items,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: listRef.current,
          start: 'top 72%',
          once: true,
        },
      }
    )
  }, { scope: listRef })

  return (
    <section id="process" className="px-8 max-w-[1440px] mx-auto" style={{ paddingBlock: 'var(--py-section)' }}>
      <SectionLabel>How We Work</SectionLabel>
      <TextReveal
        as="h2"
        className="font-display font-semibold mt-4 mb-16 max-w-xl"
        style={{ fontSize: 'var(--text-h2)' }}
      >
        Simple from start to finish
      </TextReveal>

      <div ref={listRef} className="divide-y divide-white/10">
        {PROCESS_STEPS.map(step => (
          <div
            key={step.number}
            data-process-item
            className="flex gap-8 md:gap-16 py-10"
            style={{ opacity: 0 }}
          >
            <span className="font-mono text-accent text-sm pt-1 shrink-0">{step.number}</span>
            <div className="flex-1 md:flex md:items-start md:gap-16">
              <h3
                className="font-display font-semibold text-fog md:w-48 shrink-0 mb-3 md:mb-0"
                style={{ fontSize: 'var(--text-h3)' }}
              >
                {step.title}
              </h3>
              <p className="text-fog-muted leading-relaxed max-w-lg">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
