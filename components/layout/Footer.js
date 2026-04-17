'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const year = new Date().getFullYear()
  const pathname = usePathname()

  function resolveHref(href) {
    if (href.startsWith('#')) {
      return pathname === '/' ? href : `/${href}`
    }
    return href
  }

  return (
    <footer className="border-t border-white/5 px-8 py-12">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="font-display text-lg font-semibold text-fog">Conor Murphy</span>
          <p className="text-fog-muted text-sm mt-1">© {year} All rights reserved.</p>
        </div>
        <nav className="flex flex-wrap gap-6 text-sm text-fog-muted">
          <Link href={resolveHref('#work')} className="hover:text-fog transition-colors duration-200">Work</Link>
          <Link href="/services" className="hover:text-fog transition-colors duration-200">Services</Link>
          <Link href="/pricing" className="hover:text-fog transition-colors duration-200">Pricing</Link>
          <Link href={resolveHref('#process')} className="hover:text-fog transition-colors duration-200">Process</Link>
          <Link href="/about" className="hover:text-fog transition-colors duration-200">About</Link>
          <Link href={resolveHref('#contact')} className="hover:text-fog transition-colors duration-200">Contact</Link>
        </nav>
      </div>
    </footer>
  )
}
