'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function TextReveal({ children, as: Tag = 'h2', className = '' }) {
  const ref = useRef(null)

  useGSAP(() => {
    const split = new SplitText(ref.current, { type: 'lines,words', mask: 'lines' })

    gsap.fromTo(
      split.lines,
      { y: '105%' },
      {
        y: '0%',
        duration: 0.9,
        stagger: 0.08,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 82%',
          once: true,
        },
      }
    )

    return () => split.revert()
  }, { scope: ref })

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
