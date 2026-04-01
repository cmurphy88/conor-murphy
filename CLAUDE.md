# Conor Murphy — Portfolio Site

A personal portfolio site for Conor Murphy, a Fermanagh-based web designer and developer who builds websites for local businesses (tradespeople, restaurants, shops, service businesses).

## Stack

- **Next.js 16.2.2** — App Router, all new files go in `app/` or `components/`
- **React 19**
- **Tailwind CSS v4** — configured entirely via `@theme inline` in `app/globals.css`, no `tailwind.config.js`
- **GSAP + @gsap/react** — all scroll and entrance animations; use `useGSAP` (not `useEffect`) for GSAP code
- **Lenis** — smooth scrolling, synced to GSAP ticker in `components/providers/SmoothScrollProvider.js`
- **Framer Motion** — available for page transitions if needed

## Design System

### Colors
Defined as Tailwind utilities via `@theme inline` in `app/globals.css`:

| Token | Value | Usage |
|---|---|---|
| `bg-ink` | `#0D0D0D` | Page background |
| `bg-ink-soft` | `#141414` | Cards, panels |
| `text-fog` | `#F0F0F0` | Primary text |
| `text-fog-muted` | `#A0A0A0` | Secondary/muted text |
| `bg-accent` / `text-accent` | `#4F46E5` | CTAs, interactive highlights |
| `bg-accent-hover` | `#4338CA` | Hover state for accent |

The palette is **dark-first by design** — there is no light mode toggle.

### Typography
- **Display font:** Clash Display (variable, self-hosted in `app/fonts/`), referenced as `font-display` class or `var(--font-clash-display)`. Use for all headings and the logo.
- **Body font:** Geist Sans, referenced as `font-sans` or `var(--font-geist-sans)`. Use for all body copy, labels, and UI text.

Fluid type scale (use via inline `style` or extend Tailwind as needed):

| Token | Value |
|---|---|
| `--text-hero` | `clamp(3rem, 1rem + 8vw, 8rem)` |
| `--text-h1` | `clamp(2.5rem, 1rem + 5vw, 5.5rem)` |
| `--text-h2` | `clamp(1.75rem, 1rem + 3vw, 3.5rem)` |
| `--text-h3` | `clamp(1.25rem, 1rem + 1.5vw, 2rem)` |
| `--text-body` | `clamp(1rem, 0.9rem + 0.3vw, 1.125rem)` |

### Spacing
Section vertical padding uses `--py-section` (`clamp(5rem, 10vw, 7.5rem)`). Apply as `style={{ paddingBlock: 'var(--py-section)' }}`. Use an 8px base scale (0.5rem increments) for component-level spacing.

### Visual Details
- **Film grain:** Applied globally via `body::before` in `globals.css` — do not add additional grain
- **Custom cursor:** Dot + ring, managed by `components/ui/CustomCursor.js` — do not add `cursor-pointer` classes; the cursor already transforms on hover over `a`, `button`, and `[data-cursor-hover]` elements
- **Selection colour:** Indigo accent
- **Scrollbar:** Hidden globally — Lenis handles scrolling

## Mobile-First Design

**Always design and build for mobile first, then enhance for larger screens.**

- Start with a single-column layout and add `md:` / `lg:` breakpoints to introduce multi-column grids
- Touch targets must be at least 48×48px — use `h-12` (48px) or larger for all buttons and interactive elements
- The custom cursor and its hover effects are hidden on touch devices (`@media (hover: none)`) — do not rely on hover for essential content
- Smooth scroll (Lenis) is disabled when `prefers-reduced-motion` is set — layouts must work without it
- Parallax and scroll-triggered animations should be subtle; do not depend on them to reveal content
- Navigation collapses to a full-screen overlay menu on mobile — keep nav links short
- Use `clamp()` for all font sizes and section spacing so they scale smoothly without breakpoint jumps
- Test at 390px (iPhone) width as the baseline

## Component Structure

```
components/
  providers/
    SmoothScrollProvider.js   ← 'use client', Lenis + GSAP ticker
  layout/
    Navigation.js             ← 'use client'
    Footer.js                 ← server component
  ui/
    CustomCursor.js           ← 'use client'
    SectionLabel.js           ← server component, small-caps label above headings
  sections/
    Hero.js                   ← 'use client'
    LogoBar.js                ← server component
    FeaturedWork.js           ← 'use client'
    Process.js                ← 'use client'
    Testimonials.js           ← 'use client'
    AboutBlogTeaser.js        ← 'use client'
    FinalCTA.js               ← server component
  animations/
    FadeUp.js                 ← 'use client', reusable scroll-triggered fade+rise
    TextReveal.js             ← 'use client', GSAP SplitText line-mask reveal
```

Mark a component `'use client'` only when it uses React hooks or browser APIs. Server components are preferred otherwise.

## Animation Rules

- **Only animate `transform` and `opacity`** — never `width`, `height`, `margin`, `top`, etc.
- Use `useGSAP({ scope: ref })` instead of `useEffect` for all GSAP code
- Register GSAP plugins (`ScrollTrigger`, `SplitText`) at the module level inside `'use client'` files only
- Wrap scroll-triggered sections in `<FadeUp>` or `<TextReveal>` from `components/animations/`
- Always pass `once: true` to `ScrollTrigger` — animations should not reverse on scroll-out
- Respect `prefers-reduced-motion` — the global CSS disables transitions; GSAP animations should also check this or use Lenis's built-in guard

## Content & Tone

The target audience is **small and local Irish businesses** — tradespeople, hospitality, retail, professional services. All copy should be:

- Plain English — no jargon, no corporate-speak
- Conversational and direct
- Focused on outcomes the business owner cares about (more enquiries, showing up on Google, looking professional)

## Placeholder Data

All placeholder content lives in `lib/placeholder-data.js` — projects, testimonials, process steps, blog posts, and site constants. Edit content there; do not hardcode strings in components.

**Real projects:**
- **Baked by Ann** (`bakedbyann.co.uk`) — wedding cake portfolio + workshops booking site for a Northern Ireland baker. Image at `public/images/work/baked-by-ann.webp`.
