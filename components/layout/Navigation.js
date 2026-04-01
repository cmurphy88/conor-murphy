'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${
          scrolled ? 'py-4 bg-ink/90 backdrop-blur-md border-b border-white/5' : 'py-7'
        }`}
      >
        <nav className="max-w-[1440px] mx-auto px-8 flex items-center justify-between">
          <Link href="/" className="font-display text-xl font-semibold tracking-tight text-fog">
            Conor Murphy
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-fog-muted hover:text-fog transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <Link
              href="#contact"
              className="hidden md:flex h-10 items-center px-5 rounded-full bg-accent text-fog text-sm font-medium hover:bg-accent-hover transition-colors duration-200"
            >
              Let's Talk
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
              aria-label="Toggle menu"
              data-cursor-hover
            >
              <span className={`block h-px bg-fog transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
              <span className={`block h-px bg-fog transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px bg-fog transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-ink flex flex-col items-center justify-center gap-8 md:hidden transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {NAV_LINKS.map(link => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="font-display text-4xl font-semibold text-fog hover:text-accent transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="mt-4 h-14 px-8 flex items-center rounded-full bg-accent text-fog text-lg font-medium"
        >
          Let's Talk
        </Link>
      </div>
    </>
  )
}
