import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import SectionLabel from '@/components/ui/SectionLabel'
import { SERVICES } from '@/lib/placeholder-data'

export const metadata = {
  title: 'Services — Conor Murphy',
  description: 'Web design, domain and email setup, hosting, booking systems, and online payments for local businesses in Fermanagh and Northern Ireland.',
}

const SERVICE_ICONS = {
  'design-development': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  'domain-email': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  'hosting-maintenance': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  'booking-systems': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  'online-payments': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="4" width="22" height="16" rx="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  ),
}

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Header */}
        <section
          className="px-8 max-w-[1440px] mx-auto"
          style={{ paddingBlock: 'var(--py-section)' }}
        >
          <SectionLabel>Services</SectionLabel>
          <h1
            className="font-display font-semibold mt-4 mb-4 max-w-xl"
            style={{ fontSize: 'var(--text-h1)' }}
          >
            Everything your business needs online
          </h1>
          <p className="text-fog-muted max-w-lg mb-16 leading-relaxed">
            From the first website to taking payments online — I handle the whole thing in plain English, with no jargon and no unnecessary extras.
          </p>

          {/* Services list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 rounded-xl overflow-hidden">
            {SERVICES.map(service => (
              <div key={service.id} className="bg-ink-soft p-8 md:p-10">
                <div className="text-accent mb-5">
                  {SERVICE_ICONS[service.id]}
                </div>
                <h2
                  className="font-display font-semibold text-fog mb-3"
                  style={{ fontSize: 'var(--text-h3)' }}
                >
                  {service.title}
                </h2>
                <p className="text-fog-muted leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          className="px-8 max-w-[1440px] mx-auto text-center border-t border-white/5"
          style={{ paddingBlock: 'var(--py-section)' }}
        >
          <h2
            className="font-display font-semibold text-fog mb-4"
            style={{ fontSize: 'var(--text-h2)' }}
          >
            Not sure what you need?
          </h2>
          <p className="text-fog-muted mb-8 max-w-md mx-auto leading-relaxed">
            Just get in touch. We'll have a quick chat about your business and I'll tell you honestly what would actually help.
          </p>
          <Link
            href="/#contact"
            className="inline-flex h-14 items-center justify-center px-8 rounded-full bg-accent text-fog text-base font-medium hover:bg-accent-hover transition-colors duration-200"
          >
            Get in touch
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
