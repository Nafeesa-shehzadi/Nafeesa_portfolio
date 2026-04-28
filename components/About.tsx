'use client'
export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center relative" style={{ padding: '8rem 6vw', paddingLeft: '46vw' }}>
      <div style={{ maxWidth: '560px' }}>
        <p className="flex items-center gap-3 text-xs tracking-[0.22em] uppercase mb-4" style={{ color: 'var(--accent)' }}>
          <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--accent)' }} />
          About me
        </p>
        <h2 className="font-syne font-black leading-[1.05] mb-6" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#E2EEFF' }}>
          Developer.<br/>
          <span style={{ color: 'var(--accent2)' }}>Designer</span> at heart.<br/>
          AI <span style={{ color: 'var(--accent)' }}>explorer.</span>
        </h2>
        <p className="leading-[2] mb-6 font-mono" style={{ color: 'rgba(226,238,255,0.5)', fontSize: '0.82rem' }}>
          Based in Punjab, Pakistan — I build more than UIs. I build interactions that feel alive.
          From multi-language restaurant platforms to ML-powered health apps, I connect smart AI backends
          to beautiful, intuitive frontends.
        </p>
        <p className="leading-[2] font-mono" style={{ color: 'rgba(226,238,255,0.5)', fontSize: '0.82rem' }}>
          My stack includes React, Next.js, Ionic, Redux, Tailwind, and cutting-edge AI integrations
          including OpenAI's EVI and Hume AI — bringing voice, emotion, and intelligence to the browser.
        </p>
        <div className="flex gap-3 mt-8 flex-wrap">
          {['2 Years Exp.', 'AI Integrations', 'Full-Stack', 'Mobile-First'].map(tag => (
            <span key={tag} className="text-xs font-mono tracking-widest px-3 py-1.5" style={{
              border: '1px solid rgba(177,111,255,0.3)',
              color: 'var(--accent2)',
              borderRadius: '2px',
              background: 'rgba(177,111,255,0.06)',
            }}>{tag}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
