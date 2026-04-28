'use client'
export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center relative text-center" style={{ padding: '8rem 6vw' }}>
      {/* Glow bg */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '400px', background: 'radial-gradient(ellipse, rgba(0,255,178,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <p className="flex items-center justify-center gap-3 text-xs tracking-[0.22em] uppercase mb-4" style={{ color: 'var(--accent)' }}>
        <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--accent)' }} />
        Get in Touch
        <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--accent)' }} />
      </p>

      <h2 className="font-syne font-black leading-[1.1] mb-4 relative z-10" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#E2EEFF' }}>
        Let&apos;s build<br/>
        <span style={{ color: 'var(--accent)' }}>something great</span>
      </h2>

      <p className="font-mono mb-12 relative z-10" style={{ maxWidth: '440px', color: 'rgba(226,238,255,0.4)', fontSize: '0.82rem', lineHeight: '2' }}>
        Open to frontend roles, AI integration projects, and freelance collaborations. Let&apos;s talk about your next big idea.
      </p>

      <div className="flex gap-4 flex-wrap justify-center relative z-10">
        {[
          { href: 'mailto:ns.shehzadi111@gmail.com', label: 'ns.shehzadi111@gmail.com', icon: '✉' },
          { href: 'https://www.linkedin.com/in/nafeesa-shehzadi/', label: 'LinkedIn', icon: 'in' },
          { href: '#', label: 'Punjab, Pakistan', icon: '📍' },
        ].map(link => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            className="cursor-none inline-flex items-center gap-2 px-5 py-3 font-mono text-xs tracking-wider no-underline transition-all duration-250"
            style={{ color: 'rgba(226,238,255,0.4)', border: '1px solid rgba(226,238,255,0.1)', borderRadius: '2px' }}
            onMouseEnter={e => { const el = e.currentTarget; el.style.color = 'var(--accent)'; el.style.borderColor = 'var(--accent)'; el.style.boxShadow = '0 0 20px rgba(0,255,178,0.1)' }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.color = 'rgba(226,238,255,0.4)'; el.style.borderColor = 'rgba(226,238,255,0.1)'; el.style.boxShadow = '' }}
          >
            <span style={{ fontSize: '0.8rem' }}>{link.icon}</span>
            {link.label}
          </a>
        ))}
      </div>
    </section>
  )
}
