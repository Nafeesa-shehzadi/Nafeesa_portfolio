'use client'
import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const rpos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)')
    const syncEnabled = () => setEnabled(media.matches)

    syncEnabled()
    media.addEventListener('change', syncEnabled)
    return () => media.removeEventListener('change', syncEnabled)
  }, [])

  useEffect(() => {
    if (!enabled) return

    let frame = 0

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dot.current) {
        dot.current.style.left = `${e.clientX}px`
        dot.current.style.top = `${e.clientY}px`
      }
    }

    const raf = () => {
      rpos.current.x += (pos.current.x - rpos.current.x) * 0.1
      rpos.current.y += (pos.current.y - rpos.current.y) * 0.1
      if (ring.current) {
        ring.current.style.left = `${rpos.current.x}px`
        ring.current.style.top = `${rpos.current.y}px`
      }
      frame = requestAnimationFrame(raf)
    }

    const hover = () => ring.current?.classList.add('scale-150', 'border-[--accent]')
    const leave = () => ring.current?.classList.remove('scale-150', 'border-[--accent]')
    const hoverTargets = Array.from(document.querySelectorAll('a,button,[data-hover]'))

    window.addEventListener('mousemove', onMove)
    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', hover)
      el.addEventListener('mouseleave', leave)
    })
    frame = requestAnimationFrame(raf)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frame)
      hoverTargets.forEach((el) => {
        el.removeEventListener('mouseenter', hover)
        el.removeEventListener('mouseleave', leave)
      })
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div ref={dot} className="fixed z-[9999] h-2 w-2 pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: 'var(--accent)', mixBlendMode: 'screen' }} />
      <div ref={ring} className="fixed z-[9998] h-9 w-9 pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(0,255,178,0.4)] transition-transform duration-200" />
    </>
  )
}
