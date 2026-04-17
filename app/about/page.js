import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata = {
  title: 'About — Conor Murphy',
  description: 'Conor Murphy is a web designer based in Fermanagh who builds websites for local businesses across Northern Ireland.',
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        <section
          className="px-8 max-w-[1440px] mx-auto"
          style={{ paddingBlock: 'var(--py-section)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Text */}
            <div>
              <SectionLabel>About</SectionLabel>
              <h1
                className="font-display font-semibold mt-4 mb-8"
                style={{ fontSize: 'var(--text-h2)' }}
              >
                Local business websites, done properly.
              </h1>

              <div className="space-y-5 text-fog-muted leading-relaxed">
                <p>
                  I'm Conor, a web designer based in Fermanagh. I build websites for local businesses
                  — tradespeople, restaurants, shops, service businesses — that want to be found online
                  and make a good impression when people arrive.
                </p>
                <p>
                  I started CM Designs because I kept seeing local businesses lose out online — not
                  because their work was bad, but because their web presence didn't reflect it. They
                  either had no website at all, or one that was outdated, slow, or impossible to update.
                  Most had paid decent money for it.
                </p>
                <p>
                  I wanted to offer something different: a genuinely useful website, built to last,
                  with someone you can actually call if something needs changing. No agencies, no
                  handoffs, no disappearing acts after launch.
                </p>
                <p>
                  What makes CM Designs different is that it's just me. You deal with one person
                  from the first conversation to launch and beyond. I speak plain English, I'll
                  tell you honestly what you need (and what you don't), and I understand the
                  specific challenges of running a small business in a local community.
                </p>
                <p>
                  If you want a website that works as hard as you do, I'd love to hear from you.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/#work"
                  className="h-12 inline-flex items-center px-6 rounded-full bg-accent text-fog text-sm font-medium hover:bg-accent-hover transition-colors duration-200"
                >
                  See my work
                </Link>
                <Link
                  href="/#contact"
                  className="h-12 inline-flex items-center px-6 rounded-full border border-white/15 text-fog text-sm font-medium hover:border-white/30 transition-colors duration-200"
                >
                  Get in touch
                </Link>
              </div>
            </div>

            {/* Portrait placeholder */}
            <div className="relative overflow-hidden rounded-xl aspect-[3/4] lg:sticky lg:top-28">
              <div className="w-full h-full bg-ink-soft flex items-center justify-center">
                <span className="text-fog-muted text-sm">Portrait photo</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
