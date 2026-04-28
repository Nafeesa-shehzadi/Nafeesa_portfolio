'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let t = 0
    const raf = () => {
      t++
      if (lineRef.current && t % 40 === 0) lineRef.current.style.opacity = lineRef.current.style.opacity === '0' ? '1' : '0'
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative" style={{ padding: '0 6vw', paddingRight: '52vw' }}>
      {/* Eyebrow */}
      <div className="flex items-center gap-3 mb-6 animate-[fadeUp_0.8s_0.2s_both]" style={{ animationFillMode: 'both', opacity: 0, animation: 'fadeUp 0.8s 0.2s forwards' }}>
        <div className="w-8 h-px" style={{ background: 'var(--accent)' }} />
        <span className="text-xs tracking-[0.22em] uppercase" style={{ color: 'var(--accent)' }}>Frontend Software Engineer</span>
      </div>

      {/* Name */}
      <h1 className="font-syne font-black leading-[0.88] mb-4" style={{
        fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
        letterSpacing: '-0.03em',
        background: 'linear-gradient(135deg, #E2EEFF 30%, #00FFB2 70%, #B16FFF 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        Nafeesa<br/>Shehzadi
        <span ref={lineRef} style={{ display: 'inline-block', width: '3px', height: '0.85em', background: 'var(--accent)', marginLeft: '6px', verticalAlign: 'middle', transition: 'opacity 0.1s' }}>|</span>
      </h1>

      {/* Role */}
      <p className="font-mono italic text-lg mb-6" style={{ color: 'rgba(226,238,255,0.4)', fontSize: 'clamp(0.9rem, 1.8vw, 1.2rem)' }}>
        // React · Next.js · TypeScript · AI Integrations
      </p>

      {/* Description */}
      <p className="mb-10 leading-[2] font-mono" style={{ maxWidth: '500px', color: 'rgba(226,238,255,0.5)', fontSize: '0.82rem' }}>
        2 years crafting responsive web apps and AI-powered interfaces.
        I connect intelligent backends to beautiful, living frontends — with Hume AI, OpenAI EVI, and a passion for interaction design.
      </p>

      {/* CTAs */}
      <div className="flex gap-4 flex-wrap">
        <a href="#projects" className="cursor-none inline-flex items-center gap-2 px-6 py-3 font-mono text-xs tracking-widest uppercase font-bold transition-all duration-250 no-underline"
          style={{ background: 'var(--accent)', color: '#04070F', borderRadius: '2px' }}
          onMouseEnter={e => { (e.target as HTMLElement).style.background = 'transparent'; (e.target as HTMLElement).style.color = 'var(--accent)'; (e.target as HTMLElement).style.boxShadow = '0 0 30px rgba(0,255,178,0.2), inset 0 0 0 1px var(--accent)' }}
          onMouseLeave={e => { (e.target as HTMLElement).style.background = 'var(--accent)'; (e.target as HTMLElement).style.color = '#04070F'; (e.target as HTMLElement).style.boxShadow = '' }}
        >
          View Projects →
        </a>
        <a href="#contact" className="cursor-none inline-flex items-center gap-2 px-6 py-3 font-mono text-xs tracking-widest uppercase transition-all duration-250 no-underline"
          style={{ color: 'rgba(226,238,255,0.4)', border: '1px solid rgba(226,238,255,0.12)', borderRadius: '2px' }}
          onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = 'var(--accent2)'; el.style.color = 'var(--accent2)' }}
          onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = 'rgba(226,238,255,0.12)'; el.style.color = 'rgba(226,238,255,0.4)' }}
        >
          Get in Touch
        </a>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/4 flex flex-col items-center gap-2" style={{ color: 'rgba(226,238,255,0.3)', fontSize: '0.6rem', letterSpacing: '0.2em' }}>
        <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, var(--accent), transparent)', animation: 'scpulse 1.6s ease-in-out infinite' }} />
        <span className="uppercase">scroll</span>
      </div>

      <style jsx>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scpulse { 0%,100% { opacity:0.4; } 50% { opacity:1; } }
      `}</style>
    </section>
  )
}
