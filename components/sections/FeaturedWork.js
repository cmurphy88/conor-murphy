'use client'

import { useState } from 'react'
import Link from 'next/link'
import FadeUp from '@/components/animations/FadeUp'
import TextReveal from '@/components/animations/TextReveal'
import SectionLabel from '@/components/ui/SectionLabel'
import { PROJECTS } from '@/lib/placeholder-data'

function WorkCard({ project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden rounded-xl aspect-[4/3]"
      data-cursor-hover
    >
      {/* Background */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{
          backgroundColor: project.color,
          transform: hovered ? 'scale(1.05)' : 'scale(1)',
          willChange: 'transform',
        }}
      />

      {/* Hover overlay */}
      <div
        className="absolute inset-0 z-10 flex flex-col justify-end p-8 transition-all duration-500"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(10px)',
        }}
      >
        <span className="font-mono text-fog-muted text-sm">
          {project.category} — {project.year}
        </span>
        <h3 className="font-display text-2xl font-semibold text-fog mt-1">
          {project.title}
        </h3>
        <span className="mt-2 text-accent text-sm font-medium">{project.result}</span>
      </div>

      {/* Default title */}
      <div
        className="absolute bottom-8 left-8 z-10 transition-opacity duration-300"
        style={{ opacity: hovered ? 0 : 1 }}
      >
        <h3 className="font-display text-xl font-semibold text-fog">{project.title}</h3>
      </div>
    </article>
  )
}

export default function FeaturedWork() {
  return (
    <section id="work" className="px-8 max-w-[1440px] mx-auto" style={{ paddingBlock: 'var(--py-section)' }}>
      <FadeUp>
        <SectionLabel>Selected Work</SectionLabel>
      </FadeUp>

      <div className="flex items-end justify-between mt-4 mb-16">
        <TextReveal
          as="h2"
          className="font-display font-semibold max-w-lg"
          style={{ fontSize: 'var(--text-h2)' }}
        >
          Local businesses we've helped grow
        </TextReveal>
        <Link
          href="#"
          className="hidden md:flex items-center gap-2 text-fog-muted hover:text-fog text-sm transition-colors duration-200"
        >
          View all work →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, i) => (
          <FadeUp key={project.id} delay={i * 0.1}>
            <WorkCard project={project} />
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
