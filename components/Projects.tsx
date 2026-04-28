'use client'
const projects = [
  {
    num: '01',
    name: 'Obi-Menu Web App',
    type: 'SaaS · Hospitality',
    color: '#FFAA00',
    desc: 'Dynamic venue loading via URL slugs. Multi-language (EN/DE/NL), menu categorisation, live item search, cart management, order history — fully responsive.',
    tags: ['Next.js', 'i18n', 'REST API', 'Responsive Design'],
  },
  {
    num: '02',
    name: 'AI MedLab',
    type: 'HealthTech · AI/ML',
    color: '#FF6FB1',
    desc: 'ML-trained disease prediction platform with appointment booking, doctor payments via Stripe, workout & diet predictions. Full-stack React + Python/Node/MongoDB.',
    tags: ['React', 'Python', 'Machine Learning', 'Stripe', 'MongoDB'],
  },
  {
    num: '03',
    name: 'Beauty Salon App',
    type: 'Booking · Full-stack',
    color: '#B16FFF',
    desc: 'Auth-gated booking platform for beauty treatments. Full admin dashboard — view, update, delete appointments with real-time slot availability.',
    tags: ['React', 'Auth', 'Admin Panel', 'Booking System'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center relative" style={{ padding: '8rem 6vw', paddingRight: '34vw' }}>
      <p className="flex items-center gap-3 text-xs tracking-[0.22em] uppercase mb-4" style={{ color: '#FFAA00' }}>
        <span style={{ display: 'inline-block', width: '24px', height: '1px', background: '#FFAA00' }} />
        Selected Work
      </p>
      <h2 className="font-syne font-black mb-10" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#E2EEFF' }}>
        Projects I&apos;ve <span style={{ color: '#FFAA00' }}>built</span>
      </h2>

      <div className="flex flex-col gap-4">
        {projects.map((p) => (
          <div
            key={p.num}
            className="p-6 transition-all duration-300 group cursor-none relative overflow-hidden"
            style={{ background: 'rgba(8,13,26,0.8)', border: '1px solid rgba(226,238,255,0.06)', borderRadius: '4px' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = p.color + '44'; (e.currentTarget as HTMLElement).style.transform = 'translateX(6px)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(226,238,255,0.06)'; (e.currentTarget as HTMLElement).style.transform = 'translateX(0)' }}
          >
            {/* big ghost number */}
            <span className="absolute right-4 top-2 font-syne font-black select-none pointer-events-none" style={{ fontSize: '5rem', color: p.color + '08', lineHeight: 1 }}>{p.num}</span>
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="font-syne font-bold text-lg mb-0.5" style={{ color: '#E2EEFF' }}>{p.name}</div>
                <div className="text-[10px] tracking-widest uppercase font-mono" style={{ color: p.color }}>{p.type}</div>
              </div>
              <div style={{ width: '2rem', height: '2rem', border: `1px solid ${p.color}44`, borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2V8" stroke={p.color} strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
            </div>
            <p className="text-xs leading-[1.9] font-mono mb-4" style={{ color: 'rgba(226,238,255,0.4)' }}>{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map(tag => (
                <span key={tag} className="text-[10px] font-mono tracking-wider px-2 py-1" style={{
                  background: p.color + '0d', border: `1px solid ${p.color}2a`, color: p.color, borderRadius: '2px',
                }}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
