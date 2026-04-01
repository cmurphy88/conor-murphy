const LOGOS = [
  "Brennan's Butchers",
  'The Ivy Room',
  'Clancy & Sons',
  'Hanlon Hardware',
  'The Corner Bakery',
  'Doyle Solicitors',
]

export default function LogoBar() {
  return (
    <section className="py-10 px-8 border-y border-white/5">
      <div className="max-w-[1440px] mx-auto flex flex-wrap items-center gap-x-12 gap-y-6">
        <span className="text-fog-muted text-sm shrink-0 mr-4">Trusted by</span>
        {LOGOS.map(name => (
          <span
            key={name}
            className="font-display font-semibold text-lg tracking-tight text-fog-muted/30"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  )
}
