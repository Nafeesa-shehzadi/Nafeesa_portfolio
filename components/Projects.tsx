'use client'

const projects = [
  {
    num: '01',
    name: 'Obi-Menu Web App',
    type: 'SaaS · Hospitality',
    color: '#FFAA00',
    desc: 'Dynamic venue loading via URL slugs. Multi-language (EN/DE/NL), menu categorisation, live item search, cart management, order history - fully responsive.',
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
    desc: 'Auth-gated booking platform for beauty treatments. Full admin dashboard - view, update, delete appointments with real-time slot availability.',
    tags: ['React', 'Auth', 'Admin Panel', 'Booking System'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative flex min-h-screen flex-col justify-center px-4 py-20 sm:px-6 sm:py-24 md:px-[6vw] lg:pr-[26vw] xl:pr-[30vw] xl:py-32 2xl:pr-[34vw]">
      <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.22em]" style={{ color: '#FFAA00' }}>
        <span style={{ display: 'inline-block', width: '24px', height: '1px', background: '#FFAA00' }} />
        Selected Work
      </p>
      <h2 className="mb-10 font-syne font-black" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#E2EEFF' }}>
        Projects I&apos;ve <span style={{ color: '#FFAA00' }}>built</span>
      </h2>

      <div className="flex flex-col gap-4">
        {projects.map((p) => (
          <div
            key={p.num}
            className="group relative overflow-hidden p-5 transition-all duration-300 cursor-none sm:p-6"
            style={{ background: 'rgba(8,13,26,0.8)', border: '1px solid rgba(226,238,255,0.06)', borderRadius: '4px' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${p.color}44`
              e.currentTarget.style.transform = 'translateX(6px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(226,238,255,0.06)'
              e.currentTarget.style.transform = 'translateX(0)'
            }}
          >
            <span className="pointer-events-none absolute right-3 top-3 select-none font-syne text-[3.5rem] font-black leading-none sm:right-4 sm:top-2 sm:text-[5rem]" style={{ color: `${p.color}08` }}>
              {p.num}
            </span>
            <div className="mb-2 flex items-start justify-between gap-4">
              <div className="min-w-0 pr-4">
                <div className="mb-0.5 font-syne text-lg font-bold" style={{ color: '#E2EEFF' }}>
                  {p.name}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest" style={{ color: p.color }}>
                  {p.type}
                </div>
              </div>
              <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-[2px]" style={{ border: `1px solid ${p.color}44` }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4M10 2V8" stroke={p.color} strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <p className="mb-4 font-mono text-xs leading-[1.9]" style={{ color: 'rgba(226,238,255,0.4)' }}>
              {p.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 font-mono text-[10px] tracking-wider"
                  style={{
                    background: `${p.color}0d`,
                    border: `1px solid ${p.color}2a`,
                    color: p.color,
                    borderRadius: '2px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
