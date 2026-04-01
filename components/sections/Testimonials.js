'use client'

import FadeUp from '@/components/animations/FadeUp'
import SectionLabel from '@/components/ui/SectionLabel'
import TextReveal from '@/components/animations/TextReveal'
import { TESTIMONIALS } from '@/lib/placeholder-data'

export default function Testimonials() {
  return (
    <section className="px-8 max-w-[1440px] mx-auto" style={{ paddingBlock: 'var(--py-section)' }}>
      <FadeUp>
        <SectionLabel>Client Results</SectionLabel>
      </FadeUp>
      <TextReveal
        as="h2"
        className="font-display font-semibold mt-4 mb-16 max-w-xl"
        style={{ fontSize: 'var(--text-h2)' }}
      >
        What local businesses say
      </TextReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <FadeUp key={t.name} delay={i * 0.12}>
            <blockquote className="flex flex-col gap-6 p-6 md:p-8 rounded-xl bg-ink-soft border border-white/5 h-full">
              <span className="text-accent font-mono text-sm font-medium">{t.metric}</span>
              <p className="text-fog leading-relaxed flex-1">"{t.quote}"</p>
              <footer>
                <cite className="not-italic">
                  <span className="block text-fog font-medium text-sm">{t.name}</span>
                  <span className="block text-fog-muted text-sm">{t.title}</span>
                </cite>
              </footer>
            </blockquote>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
