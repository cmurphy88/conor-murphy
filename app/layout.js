import localFont from 'next/font/local'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider'
import CustomCursor from '@/components/ui/CustomCursor'

const clashDisplay = localFont({
  src: [
    { path: './fonts/ClashDisplay-Variable.woff2', style: 'normal' },
    { path: './fonts/ClashDisplay-Variable.woff', style: 'normal' },
  ],
  variable: '--font-clash-display',
  display: 'swap',
  weight: '200 700',
})

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Conor Murphy — Web Design & Development',
  description: 'Strategy-first web design and development for ambitious brands.',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${clashDisplay.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-ink text-fog overflow-x-hidden">
        <CustomCursor />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
