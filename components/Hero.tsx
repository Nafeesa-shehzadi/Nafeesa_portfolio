'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0
    let t = 0

    const raf = () => {
      t++
      if (lineRef.current && t % 40 === 0) {
        lineRef.current.style.opacity = lineRef.current.style.opacity === '0' ? '1' : '0'
      }
      frame = requestAnimationFrame(raf)
    }

    frame = requestAnimationFrame(raf)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section id="hero" className="relative flex min-h-screen flex-col justify-center px-4 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32 md:px-[6vw] lg:pr-[37vw] lg:pt-24 xl:pr-[42vw] 2xl:pr-[52vw]">
      <div className="mb-6 flex items-center gap-3 animate-[fadeUp_0.8s_0.2s_both]" style={{ animationFillMode: 'both', opacity: 0, animation: 'fadeUp 0.8s 0.2s forwards' }}>
        <div className="h-px w-8" style={{ background: 'var(--accent)' }} />
        <span className="text-[11px] uppercase tracking-[0.22em] sm:text-xs" style={{ color: 'var(--accent)' }}>
          Frontend Software Engineer
        </span>
      </div>

      <h1
        className="mb-4 max-w-[9.5ch] font-syne font-black leading-[0.9] lg:max-w-[8.75ch] 2xl:max-w-[10ch]"
        style={{
          fontSize: 'clamp(2.65rem, 6.5vw, 5.8rem)',
          letterSpacing: '-0.03em',
          background: 'linear-gradient(135deg, #E2EEFF 30%, #00FFB2 70%, #B16FFF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Nafeesa
        <br />
        Shehzadi
        <span
          ref={lineRef}
          style={{
            display: 'inline-block',
            width: '3px',
            height: '0.85em',
            background: 'var(--accent)',
            marginLeft: '6px',
            verticalAlign: 'middle',
            transition: 'opacity 0.1s',
          }}
        >
          |
        </span>
      </h1>

      <p className="mb-6 max-w-[34rem] font-mono text-[0.9rem] italic sm:text-[1rem] xl:text-[1.05rem]" style={{ color: 'rgba(226,238,255,0.4)' }}>
        // Next.js · React · React Native · Ionic · AI Chatbots
      </p>

      <p className="mb-10 max-w-[34rem] font-mono text-[0.78rem] leading-[2] sm:text-[0.82rem]" style={{ color: 'rgba(226,238,255,0.5)' }}>
        2 years building responsive products across web and mobile. I work with Next.js and React for web, React Native and Ionic for apps, and I ship AI models, chatbot flows, and intelligent user experiences with a strong focus on interaction design.
      </p>

      <div className="flex flex-wrap gap-3 sm:gap-4">
        <a
          href="#projects"
          className="cursor-none inline-flex items-center gap-2 px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.22em] no-underline transition-all duration-250 sm:px-6 sm:text-xs"
          style={{ background: 'var(--accent)', color: '#04070F', borderRadius: '2px' }}
          onMouseEnter={(e) => {
            const el = e.currentTarget
            el.style.background = 'transparent'
            el.style.color = 'var(--accent)'
            el.style.boxShadow = '0 0 30px rgba(0,255,178,0.2), inset 0 0 0 1px var(--accent)'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget
            el.style.background = 'var(--accent)'
            el.style.color = '#04070F'
            el.style.boxShadow = ''
          }}
        >
          View Projects →
        </a>
        <a
          href="#contact"
          className="cursor-none inline-flex items-center gap-2 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em] no-underline transition-all duration-250 sm:px-6 sm:text-xs"
          style={{ color: 'rgba(226,238,255,0.4)', border: '1px solid rgba(226,238,255,0.12)', borderRadius: '2px' }}
          onMouseEnter={(e) => {
            const el = e.currentTarget
            el.style.borderColor = 'var(--accent2)'
            el.style.color = 'var(--accent2)'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget
            el.style.borderColor = 'rgba(226,238,255,0.12)'
            el.style.color = 'rgba(226,238,255,0.4)'
          }}
        >
          Get in Touch
        </a>
      </div>

      <div className="absolute bottom-8 left-4 hidden flex-col items-center gap-2 sm:left-6 md:left-[6vw] xl:flex" style={{ color: 'rgba(226,238,255,0.3)', fontSize: '0.6rem', letterSpacing: '0.2em' }}>
        <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, var(--accent), transparent)', animation: 'scpulse 1.6s ease-in-out infinite' }} />
        <span className="uppercase">scroll</span>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scpulse {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}
