export const SITE = {
  name: 'Conor Murphy',
  tagline: 'Web Design & Development',
  email: 'conormurphy9966@gmail.com',
}

export const PROJECTS = [
  {
    id: 1,
    slug: 'baked-by-ann',
    title: 'Baked by Ann',
    category: 'Web Design & Development',
    year: '2025',
    result: 'Wedding cakes & workshop bookings',
    description:
      'A two-in-one site for a local baker — a wedding cake portfolio with a custom enquiry form (including inspiration image uploads) and a workshops booking page for hen parties, baby showers, and team days.',
    url: 'https://bakedbyann.co.uk',
    image: '/images/work/baked-by-ann.webp',
    color: '#0D2220',
  },
  // {
  //   id: 2,
  //   slug: 'the-ivy-room',
  //   title: 'The Ivy Room',
  //   category: 'Web Design & Branding',
  //   year: '2025',
  //   result: '3× table booking increase',
  //   color: '#0A1A0F',
  // },
  // {
  //   id: 3,
  //   slug: 'clancy-and-sons-plumbing',
  //   title: 'Clancy & Sons Plumbing',
  //   category: 'Web Design & Local SEO',
  //   year: '2024',
  //   result: '+80% local enquiries',
  //   color: '#0A1220',
  // },
]

export const TESTIMONIALS = [
  {
    quote:
      "I had no website at all before this. Now brides contact me through the site every week and the workshops page has been brilliant for hen parties. It's paid for itself many times over.",
    name: 'Ann',
    title: 'Owner, Baked by Ann',
    metric: 'bakedbyann.co.uk',
  },
  // {
  //   quote:
  //     'Conor understood exactly what we needed — something that felt warm and inviting, not corporate. Our bookings filled up within a week of going live.',
  //   name: 'Aoife Kelly',
  //   title: 'Owner, The Ivy Room',
  //   metric: '3× table bookings',
  // },
  // {
  //   quote:
  //     "We were relying entirely on word of mouth. Now we show up when people search for a plumber nearby and the phone hasn't stopped.",
  //   name: 'Pádraig Clancy',
  //   title: 'Director, Clancy & Sons Plumbing',
  //   metric: '+80% local enquiries',
  // },
]

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Chat',
    description:
      'We have a quick call to talk about your business, what you need, and who your customers are. No forms, no jargon — just a conversation.',
  },
  {
    number: '02',
    title: 'Plan',
    description:
      'I put together a simple plan: what pages you need, what information goes where, and what the site needs to do for your business.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      "You'll see exactly what the site will look like before anything gets built. One round of changes included — most clients need very few.",
  },
  {
    number: '04',
    title: 'Build',
    description:
      'I build the site and make sure it loads fast, looks great on phones, and shows up properly on Google.',
  },
  {
    number: '05',
    title: 'Launch',
    description:
      "Your site goes live and I make sure everything's working. If anything needs tweaking in the first month, I'm on it.",
  },
]

export const BLOG_POSTS = [
  {
    slug: 'does-your-local-business-need-a-website',
    title: 'Does Your Local Business Actually Need a Website in 2025?',
    date: '2025-03-15',
    readTime: '4 min read',
    excerpt:
      'Google Maps and Instagram are great, but 76% of people still visit a website before deciding to contact a local business.',
  },
  {
    slug: 'what-makes-a-good-local-business-website',
    title: "What Makes a Good Local Business Website (And What Doesn't)",
    date: '2025-02-20',
    readTime: '5 min read',
    excerpt:
      "Most local business sites fail for the same three reasons. Here's how to avoid them and turn your site into your best salesperson.",
  },
  {
    slug: 'local-seo-basics',
    title:
      'Local SEO in Plain English: How to Show Up When People Search Near You',
    date: '2025-01-14',
    readTime: '6 min read',
    excerpt:
      "You don't need to understand algorithms. You need to understand your customers. Here's what actually moves the needle for local search.",
  },
]

export const PRICING_TIERS = [
  {
    id: 'starter',
    name: 'Starter',
    price: '£500',
    monthly: '£35/month',
    description: 'Everything you need to get your business online properly.',
    features: [
      'Up to 4 pages',
      'Contact form',
      'Mobile responsive',
      'Custom domain setup',
      'Professional email address',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    id: 'standard',
    name: 'Standard',
    price: '£650',
    monthly: '£35/month',
    description: 'Everything in Starter, plus room to grow.',
    features: [
      'Up to 6 pages',
      'Everything in Starter',
      'Gallery or menu section',
      'Basic SEO setup',
    ],
    cta: 'Get Started',
    highlighted: true,
  },
  {
    id: 'extended',
    name: 'Extended',
    price: 'From £800',
    monthly: '£45/month',
    description: 'For businesses that need something a bit more bespoke.',
    features: [
      'Custom number of pages',
      'Everything in Standard',
      'Booking system integration',
      'Payment processing',
      'Bespoke quote',
    ],
    cta: 'Get a Quote',
    highlighted: false,
  },
]

export const PRICING_FAQ = [
  {
    question: "What's included in the monthly plan?",
    answer:
      'Hosting, domain renewal, SSL certificate, minor text and image updates (up to 1 hour per month), bug fixes, and site monitoring. If your site goes down for any reason, I sort it.',
  },
  {
    question: "What counts as an extra?",
    answer:
      "New pages, major redesigns, e-commerce setup, booking system integration, and additional email accounts are all quoted separately. I'll always give you a clear price before starting any extra work.",
  },
  {
    question: 'Do I own my website?',
    answer:
      "Yes. Your domain is always yours — it's registered in your name. If you ever decide to move on, I'll transfer everything to you. No hostage-taking.",
  },
  {
    question: "What if I need something not listed?",
    answer:
      "Just get in touch and we'll work out a fair price. I'm not trying to upsell you — if it's a small job, I'll tell you. No surprises.",
  },
  {
    question: 'How do online payments work?',
    answer:
      'Payments go directly to your bank account via Stripe. I handle all the technical setup — you just need a bank account. Stripe charges a small transaction fee (around 1.5% + 25p per payment) which goes to them, not to me.',
  },
]

export const SERVICES = [
  {
    id: 'design-development',
    title: 'Website Design & Development',
    description:
      'Every site I build is custom — no templates, no page builders. Built fast, mobile-first, and designed to last. You get a site that looks the part and actually works for your business.',
  },
  {
    id: 'domain-email',
    title: 'Domain & Email Setup',
    description:
      'A proper web address (like yourbusiness.co.uk) and a professional email (like hello@yourbusiness.co.uk) make a real difference to how customers see you. I handle the whole setup — you just tell me what you want it to say.',
  },
  {
    id: 'hosting-maintenance',
    title: 'Hosting & Maintenance',
    description:
      'Your site stays live, fast, and up to date. The monthly plan covers hosting, your domain renewal, minor updates, and site monitoring. If something goes wrong, I fix it.',
  },
  {
    id: 'booking-systems',
    title: 'Booking Systems',
    description:
      'Let customers book appointments, classes, or consultations directly through your site — no phone calls needed. Integrates with tools like TidyCal so bookings land straight in your calendar.',
  },
  {
    id: 'online-payments',
    title: 'Online Payments',
    description:
      'Take card payments through your site via Stripe. The money goes straight to your bank account — I handle the technical setup and you keep control of everything.',
  },
]
