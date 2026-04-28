'use client'

export default function Contact() {
  const links = [
    { href: 'mailto:ns.shehzadi111@gmail.com', label: 'ns.shehzadi111@gmail.com', icon: 'email' },
    { href: 'https://www.linkedin.com/in/nafeesa-shehzadi/', label: 'LinkedIn', icon: 'linkedin' },
    { href: '#', label: 'Punjab, Pakistan', icon: 'location' },
  ] as const

  return (
    <section id="contact" className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center sm:px-6 sm:py-24 md:px-[6vw] lg:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 sm:h-[340px] sm:w-[420px] lg:h-[400px] lg:w-[600px]"
        style={{ background: 'radial-gradient(ellipse, rgba(0,255,178,0.05) 0%, transparent 70%)' }}
      />

      <p className="relative z-10 mb-4 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.22em]" style={{ color: 'var(--accent)' }}>
        <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--accent)' }} />
        Get in Touch
        <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--accent)' }} />
      </p>

      <h2 className="relative z-10 mb-4 font-syne font-black leading-[1.1]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#E2EEFF' }}>
        Let&apos;s build
        <br />
        <span style={{ color: 'var(--accent)' }}>something great</span>
      </h2>

      <p className="relative z-10 mb-10 max-w-[440px] font-mono text-[0.78rem] leading-[2] sm:mb-12 sm:text-[0.82rem]" style={{ color: 'rgba(226,238,255,0.4)' }}>
        Open to frontend roles, AI integration projects, and freelance collaborations. Let&apos;s talk about your next big idea.
      </p>

      <div className="relative z-10 flex w-full max-w-3xl flex-wrap justify-center gap-3 sm:gap-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 px-4 py-3 font-mono text-[11px] tracking-[0.18em] no-underline transition-all duration-250 cursor-none sm:w-auto sm:px-5 sm:text-xs"
            style={{ color: 'rgba(226,238,255,0.4)', border: '1px solid rgba(226,238,255,0.1)', borderRadius: '2px' }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.color = 'var(--accent)'
              el.style.borderColor = 'var(--accent)'
              el.style.boxShadow = '0 0 20px rgba(0,255,178,0.1)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.color = 'rgba(226,238,255,0.4)'
              el.style.borderColor = 'rgba(226,238,255,0.1)'
              el.style.boxShadow = ''
            }}
          >
            <span className="inline-flex min-w-8 items-center justify-center" style={{ color: 'inherit' }}>
              {link.icon === 'email' && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 7.5L12 13.5L20 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              )}
              {link.icon === 'linkedin' && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M7 10V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M12 17V13.5C12 11.9 13 10.75 14.6 10.75C16.2 10.75 17 11.8 17 13.6V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="7" cy="7" r="1.2" fill="currentColor" />
                  <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              )}
              {link.icon === 'location' && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 21C15.5 17 18 14.2 18 10.8C18 7.6 15.3 5 12 5C8.7 5 6 7.6 6 10.8C6 14.2 8.5 17 12 21Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <circle cx="12" cy="11" r="2.2" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              )}
            </span>
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}
