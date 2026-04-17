import FadeUp from '@/components/animations/FadeUp'
import SectionLabel from '@/components/ui/SectionLabel'
import PricingCard from '@/components/ui/PricingCard'
import { PRICING_TIERS } from '@/lib/placeholder-data'

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="px-8 max-w-[1440px] mx-auto"
      style={{ paddingBlock: 'var(--py-section)' }}
    >
      <FadeUp>
        <SectionLabel>Pricing</SectionLabel>
      </FadeUp>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between mt-4 mb-16 gap-4">
        <h2
          className="font-display font-semibold max-w-lg"
          style={{ fontSize: 'var(--text-h2)' }}
        >
          Simple, honest pricing
        </h2>
        <p className="text-fog-muted text-sm max-w-xs md:text-right leading-relaxed">
          One-off build cost, then a low monthly plan. No hidden fees.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {PRICING_TIERS.map((tier, i) => (
          <FadeUp key={tier.id} delay={i * 0.1}>
            <PricingCard tier={tier} />
          </FadeUp>
        ))}
      </div>

      <FadeUp>
        <p className="mt-8 text-center text-fog-muted text-sm max-w-lg mx-auto leading-relaxed">
          Monthly plan covers hosting, your domain renewal, maintenance, and minor updates. No hidden fees.
        </p>
      </FadeUp>
    </section>
  )
}
