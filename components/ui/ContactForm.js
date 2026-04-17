'use client'

import { useState } from 'react'

const inputClass =
  'w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-fog placeholder:text-fog/40 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-colors duration-200 text-sm'

const labelClass = 'block text-fog/80 text-sm font-medium mb-1.5'

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('')
  const [errors, setErrors] = useState({})

  function validate(data) {
    const errs = {}
    if (!data.name.trim()) errs.name = 'Please enter your name.'
    if (!data.email.trim()) {
      errs.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!data.message.trim()) errs.message = 'Please tell me a bit about what you need.'
    return errs
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = {
      name: form.name.value,
      businessName: form.businessName.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value,
      hearAbout: form.hearAbout.value,
      _gotcha: form._gotcha.value,
    }

    const errs = validate(data)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setErrors({})
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await res.json()
      if (result.success) {
        setStatus('success')
      } else {
        setErrorMessage(result.error || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMessage('Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="max-w-xl mx-auto text-center py-8">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="font-display text-2xl font-semibold text-fog mb-3">Message sent</h3>
        <p className="text-fog/70 leading-relaxed">
          Thanks for getting in touch. I'll get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-xl mx-auto text-left">
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name <span className="text-fog/40">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={inputClass}
            placeholder="John Smith"
          />
          {errors.name && <p className="mt-1.5 text-red-400 text-xs">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="businessName" className={labelClass}>
            Business name <span className="text-fog/40">optional</span>
          </label>
          <input
            id="businessName"
            name="businessName"
            type="text"
            autoComplete="organization"
            className={inputClass}
            placeholder="Smith's Hardware"
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email address <span className="text-fog/40">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={inputClass}
            placeholder="john@example.com"
          />
          {errors.email && <p className="mt-1.5 text-red-400 text-xs">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone number <span className="text-fog/40">optional</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="+44 7700 000000"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          Tell me a bit about your business and what you're looking for{' '}
          <span className="text-fog/40">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="I run a small plumbing business in Enniskillen and I'm looking for a website that helps me get more local enquiries..."
        />
        {errors.message && <p className="mt-1.5 text-red-400 text-xs">{errors.message}</p>}
      </div>

      <div className="mt-5">
        <label htmlFor="hearAbout" className={labelClass}>
          How did you hear about me? <span className="text-fog/40">optional</span>
        </label>
        <select
          id="hearAbout"
          name="hearAbout"
          className={`${inputClass} cursor-pointer`}
        >
          <option value="">Select an option</option>
          <option value="Word of mouth">Word of mouth</option>
          <option value="Google">Google</option>
          <option value="Social media">Social media</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {status === 'error' && (
        <p className="mt-5 text-red-400 text-sm">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-8 h-14 w-full sm:w-auto px-10 inline-flex items-center justify-center rounded-full bg-fog text-ink text-base font-medium hover:bg-fog/90 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
