'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const rpos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dot.current) {
        dot.current.style.left = e.clientX + 'px'
        dot.current.style.top = e.clientY + 'px'
      }
    }
    const raf = () => {
      rpos.current.x += (pos.current.x - rpos.current.x) * 0.1
      rpos.current.y += (pos.current.y - rpos.current.y) * 0.1
      if (ring.current) {
        ring.current.style.left = rpos.current.x + 'px'
        ring.current.style.top  = rpos.current.y + 'px'
      }
      requestAnimationFrame(raf)
    }
    window.addEventListener('mousemove', onMove)
    const id = requestAnimationFrame(raf)

    const hover = () => ring.current?.classList.add('scale-150', 'border-[--accent]')
    const leave = () => ring.current?.classList.remove('scale-150', 'border-[--accent]')
    document.querySelectorAll('a,button,[data-hover]').forEach((el) => {
      el.addEventListener('mouseenter', hover)
      el.addEventListener('mouseleave', leave)
    })
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(id) }
  }, [])

  return (
    <>
      <div ref={dot} className="fixed z-[9999] pointer-events-none w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2" style={{ background: 'var(--accent)', mixBlendMode: 'screen' }} />
      <div ref={ring} className="fixed z-[9998] pointer-events-none w-9 h-9 rounded-full border border-[rgba(0,255,178,0.4)] -translate-x-1/2 -translate-y-1/2 transition-transform duration-200" />
    </>
  )
}
