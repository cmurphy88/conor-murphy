import ContactForm from '@/components/ui/ContactForm'

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-accent"
      style={{ paddingBlock: 'var(--py-section)' }}
    >
      {/* Decorative oversized background text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none">
        <span
          className="font-display font-bold text-white/5 leading-none whitespace-nowrap"
          style={{ fontSize: '20vw' }}
        >
          Let's Talk
        </span>
      </div>

      <div className="relative px-8 max-w-[1440px] mx-auto text-center">
        <h2
          className="font-display font-semibold text-fog max-w-2xl mx-auto"
          style={{ fontSize: 'var(--text-h1)' }}
        >
          Let's get your business online properly.
        </h2>
        <p className="mt-6 text-fog/80 text-lg max-w-lg mx-auto leading-relaxed mb-12">
          Drop me a message and we'll have a quick chat about what you need. No commitment,
          no confusing proposals — just a straightforward conversation.
        </p>

        <ContactForm />

        <p className="mt-8 text-fog/50 text-sm">
          No commitment required · Plain English, always · Response within 24 hours
        </p>
      </div>
    </section>
  )
}
