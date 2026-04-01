'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover)').matches
    if (!canHover) return

    const dot = dotRef.current
    const ring = ringRef.current

    // Make them visible once we confirm pointer device
    gsap.set([dot, ring], { opacity: 1 })

    const moveCursor = (e) => {
      gsap.set(dot, { x: e.clientX, y: e.clientY })
      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: 'power2.out',
      })
    }

    const onEnter = () => {
      gsap.to(ring, { scale: 2.5, duration: 0.3, ease: 'power2.out' })
      gsap.to(dot, { scale: 0, duration: 0.2 })
    }

    const onLeave = () => {
      gsap.to(ring, { scale: 1, duration: 0.3, ease: 'power2.out' })
      gsap.to(dot, { scale: 1, duration: 0.2 })
    }

    window.addEventListener('mousemove', moveCursor)

    const bindHover = () => {
      document.querySelectorAll('a, button, [data-cursor-hover]').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    bindHover()

    // Re-bind after any DOM mutations (e.g. mobile menu appearing)
    const observer = new MutationObserver(bindHover)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      observer.disconnect()
      document.querySelectorAll('a, button, [data-cursor-hover]').forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] w-1.5 h-1.5 rounded-full bg-fog -translate-x-1/2 -translate-y-1/2"
        style={{ opacity: 0, willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9997] w-8 h-8 rounded-full border border-fog/40 -translate-x-1/2 -translate-y-1/2"
        style={{ opacity: 0, willChange: 'transform' }}
      />
    </>
  )
}
