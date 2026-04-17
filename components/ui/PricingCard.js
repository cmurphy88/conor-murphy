'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function PricingCard({ tier }) {
  const pathname = usePathname()
  return (
    <div
      className={`relative flex flex-col rounded-xl p-8 border transition-colors duration-200 ${
        tier.highlighted
          ? 'bg-accent border-accent/60 shadow-lg shadow-accent/10'
          : 'bg-ink-soft border-white/5'
      }`}
    >
      {tier.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-medium px-3 py-1 rounded-full bg-fog text-ink">
          Most popular
        </span>
      )}

      <div className="mb-6">
        <h3
          className={`font-display font-semibold mb-1 ${
            tier.highlighted ? 'text-fog' : 'text-fog'
          }`}
          style={{ fontSize: 'var(--text-h3)' }}
        >
          {tier.name}
        </h3>
        <p className={`text-sm leading-relaxed ${tier.highlighted ? 'text-fog/70' : 'text-fog-muted'}`}>
          {tier.description}
        </p>
      </div>

      <div className="mb-6">
        <span
          className={`font-display font-semibold ${tier.highlighted ? 'text-fog' : 'text-fog'}`}
          style={{ fontSize: 'var(--text-h2)' }}
        >
          {tier.price}
        </span>
        <p className={`text-sm mt-1 ${tier.highlighted ? 'text-fog/60' : 'text-fog-muted'}`}>
          then {tier.monthly}
        </p>
      </div>

      <ul className="flex-1 space-y-3 mb-8">
        {tier.features.map(feature => (
          <li key={feature} className="flex items-start gap-3">
            <span className={`mt-0.5 flex-shrink-0 text-sm ${tier.highlighted ? 'text-fog' : 'text-accent'}`}>
              ✓
            </span>
            <span className={`text-sm ${tier.highlighted ? 'text-fog/80' : 'text-fog-muted'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href={pathname === '/' ? '#contact' : '/#contact'}
        className={`h-12 flex items-center justify-center rounded-full text-sm font-medium transition-colors duration-200 ${
          tier.highlighted
            ? 'bg-fog text-ink hover:bg-fog/90'
            : 'border border-white/15 text-fog hover:border-white/30'
        }`}
      >
        {tier.cta}
      </Link>
    </div>
  )
}
