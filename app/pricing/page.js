import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import SectionLabel from '@/components/ui/SectionLabel'
import PricingCard from '@/components/ui/PricingCard'
import { PRICING_TIERS, PRICING_FAQ } from '@/lib/placeholder-data'

export const metadata = {
  title: 'Pricing — Conor Murphy',
  description: 'Simple, honest pricing for local business websites. One-off build cost, then a low monthly plan. No hidden fees.',
}

export default function PricingPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Header */}
        <section
          className="px-8 max-w-[1440px] mx-auto"
          style={{ paddingBlock: 'var(--py-section)' }}
        >
          <SectionLabel>Pricing</SectionLabel>
          <h1
            className="font-display font-semibold mt-4 mb-4 max-w-xl"
            style={{ fontSize: 'var(--text-h1)' }}
          >
            Simple, honest pricing
          </h1>
          <p className="text-fog-muted max-w-lg mb-16 leading-relaxed">
            A one-off build cost to get your site made, then a low monthly plan that covers everything — hosting, your domain, and ongoing maintenance.
          </p>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mb-8">
            {PRICING_TIERS.map(tier => (
              <PricingCard key={tier.id} tier={tier} />
            ))}
          </div>

          <p className="text-center text-fog-muted text-sm max-w-lg mx-auto leading-relaxed">
            Monthly plan covers hosting, your domain renewal, maintenance, and minor updates. No hidden fees.
          </p>
        </section>

        {/* FAQ */}
        <section
          className="px-8 max-w-[720px] mx-auto pb-0"
          style={{ paddingBlockEnd: 'var(--py-section)' }}
        >
          <SectionLabel>FAQ</SectionLabel>
          <h2
            className="font-display font-semibold mt-4 mb-12"
            style={{ fontSize: 'var(--text-h2)' }}
          >
            Common questions
          </h2>

          <div className="space-y-10">
            {PRICING_FAQ.map((item, i) => (
              <div key={i} className="border-b border-white/5 pb-10 last:border-0 last:pb-0">
                <h3
                  className="font-display font-semibold text-fog mb-3"
                  style={{ fontSize: 'var(--text-h3)' }}
                >
                  {item.question}
                </h3>
                <p className="text-fog-muted leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          className="px-8 max-w-[1440px] mx-auto text-center"
          style={{ paddingBlock: 'var(--py-section)' }}
        >
          <h2
            className="font-display font-semibold text-fog max-w-xl mx-auto mb-6"
            style={{ fontSize: 'var(--text-h2)' }}
          >
            Ready to get started?
          </h2>
          <p className="text-fog-muted mb-8 max-w-md mx-auto leading-relaxed">
            Get in touch and we'll figure out which option is right for your business.
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
