'use client'

const projects = [
  {
    num: '01',
    name: 'Obenan Admin Dashboard',
    type: 'Admin | Product Platform',
    color: '#FFAA00',
    desc: 'Responsive admin dashboard developed using Next.js and modern React architecture, with scalable UI components, data visualization, and secure REST API integrations to deliver maintainable frontend solutions.',
    tags: ['Next.js', 'React.js', 'Material UI', 'Tailwind CSS', 'Hero UI'],
    url: '',
  },
  {
    num: '02',
    name: 'AI MedLab',
    type: 'HealthTech | AI/ML',
    color: '#FF6FB1',
    desc: 'Full-stack healthcare platform with AI-based disease prediction, online consultation flows, MongoDB-backed data management, Stripe payments, REST APIs, and Python-powered machine learning models.',
    tags: ['React.js', 'Python', 'Node.js', 'Express.js', 'MongoDB', 'Stripe'],
    url: '',
  },
  {
    num: '03',
    name: 'Beauty Salon App',
    type: 'Booking | Full-stack',
    color: '#B16FFF',
    desc: 'Auth-gated booking platform for beauty treatments with admin controls for managing appointments, updating availability, and keeping booking flows smooth and reliable.',
    tags: ['React', 'Auth', 'Admin Panel', 'Booking System'],
    url: '',
  },
  {
    num: '04',
    name: 'Obi Menu Mobile App',
    type: 'Mobile | Menu Management',
    color: '#7CFF6B',
    desc: 'Mobile application for menu management built with Ionic Framework, focused on intuitive navigation, reusable UI components, and API-connected flows for a seamless mobile experience.',
    tags: ['Ionic Framework', 'Mobile UI', 'Navigation', 'REST API'],
    url: '',
  },
  {
    num: '05',
    name: 'Furniro Furniture Website',
    type: 'Ecommerce | Furniture UI',
    color: '#00C8FF',
    desc: 'Modern furniture website built as a polished ecommerce-style frontend with clean product presentation, responsive layouts, and detail-focused interface design for a strong visual shopping experience.',
    tags: ['Next.js', 'React.js', 'Tailwind CSS', 'Responsive Design', 'Ecommerce UI'],
    url: 'https://furniro-website-sigma.vercel.app/',
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
            {p.url && (
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="mb-4 inline-flex text-[10px] uppercase tracking-[0.22em] no-underline"
                style={{ color: p.color }}
              >
                Live: {p.url}
              </a>
            )}
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
