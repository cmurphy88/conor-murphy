'use client'

import Image from 'next/image'
import FadeUp from '@/components/animations/FadeUp'
import TextReveal from '@/components/animations/TextReveal'
import SectionLabel from '@/components/ui/SectionLabel'
import { PROJECTS } from '@/lib/placeholder-data'

function WorkCard({ project }) {
  const sharedClass = 'group relative overflow-hidden rounded-xl aspect-[4/3]'

  const inner = (
    <>
      {/* Background — scales on hover (desktop only) */}
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105 [will-change:transform]">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full" style={{ backgroundColor: project.color }} />
        )}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Detail overlay:
          - Desktop: hidden until hover
          - Mobile (hover:none): always visible */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 transition-all duration-500
        opacity-0 translate-y-2.5
        group-hover:opacity-100 group-hover:translate-y-0
        [@media(hover:none)]:opacity-100 [@media(hover:none)]:translate-y-0"
      >
        <span className="font-mono text-fog-muted text-sm">
          {project.category} — {project.year}
        </span>
        <h3 className="font-display text-2xl font-semibold text-fog mt-1">
          {project.title}
        </h3>
        {project.description ? (
          <p className="mt-2 text-fog/70 text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        ) : (
          <span className="mt-2 text-accent text-sm font-medium">
            {project.result}
          </span>
        )}
        {project.url && (
          <span className="mt-3 text-fog-muted text-xs font-mono">↗ Visit site</span>
        )}
      </div>

      {/* Default title:
          - Desktop: visible until hover
          - Mobile (hover:none): hidden (detail overlay is always shown instead) */}
      <div className="absolute bottom-8 left-8 z-10 transition-opacity duration-300
        opacity-100
        group-hover:opacity-0
        [@media(hover:none)]:opacity-0"
      >
        <h3 className="font-display text-xl font-semibold text-fog">{project.title}</h3>
      </div>
    </>
  )

  if (project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`block ${sharedClass}`}
        data-cursor-hover
      >
        {inner}
      </a>
    )
  }

  return (
    <article className={sharedClass} data-cursor-hover>
      {inner}
    </article>
  )
}

export default function FeaturedWork() {
  return (
    <section
      id="work"
      className="px-8 max-w-[1440px] mx-auto"
      style={{ paddingBlock: 'var(--py-section)' }}
    >
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
        {/* Placeholder for when there are more than one worked on */}
        {/* <Link
          href="#"
          className="hidden md:flex items-center gap-2 text-fog-muted hover:text-fog text-sm transition-colors duration-200"
        >
          View all work →
        </Link> */}
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
