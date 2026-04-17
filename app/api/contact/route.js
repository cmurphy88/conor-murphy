import { Resend } from 'resend'

export async function POST(request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await request.json()
    const { name, businessName, email, phone, message, hearAbout, _gotcha } = body

    // Honeypot — silent success to fool bots
    if (_gotcha) {
      return Response.json({ success: true })
    }

    // Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return Response.json({ success: false, error: 'Name is required.' }, { status: 400 })
    }
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ success: false, error: 'A valid email address is required.' }, { status: 400 })
    }
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return Response.json({ success: false, error: 'Message is required.' }, { status: 400 })
    }

    const lines = [
      `Name: ${name.trim()}`,
      businessName ? `Business: ${businessName.trim()}` : null,
      `Email: ${email.trim()}`,
      phone ? `Phone: ${phone.trim()}` : null,
      `\nMessage:\n${message.trim()}`,
      hearAbout ? `\nHow they heard about us: ${hearAbout}` : null,
    ].filter(Boolean)

    await resend.emails.send({
      from: process.env.CONTACT_FORM_FROM,
      to: process.env.CONTACT_FORM_TO,
      subject: `New enquiry from ${name.trim()}`,
      text: lines.join('\n'),
    })

    return Response.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return Response.json(
      { success: false, error: 'Something went wrong. Please try again or email directly.' },
      { status: 500 }
    )
  }
}
