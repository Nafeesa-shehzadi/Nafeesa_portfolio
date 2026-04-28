'use client'
const experiences = [
  {
    period: 'Oct 2024 — Present',
    role: 'Frontend Web Developer',
    company: 'GSoft Consulting',
    color: '#00FFB2',
    desc: 'Building production web & mobile apps with Next.js and Ionic React. Integrated AI agent calling, OTP auth, real-time comms, and Stripe payments using Hume AI and OpenAI.',
    tags: ['Next.js', 'Ionic React', 'Hume AI', 'OpenAI', 'Stripe'],
  },
  {
    period: 'Oct 2023 — Feb 2024',
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    color: '#B16FFF',
    desc: 'Designed and deployed custom websites for small businesses — contact forms, appointment booking, and admin dashboards tailored to each client.',
    tags: ['React', 'Tailwind', 'Admin Panels', 'Booking Systems'],
  },
  {
    period: 'University',
    role: 'BSCS — Computer Science',
    company: 'University of Gujrat (UOG)',
    color: '#00C8FF',
    desc: 'Algorithms, data structures, software engineering, databases, and applied AI — the foundation everything else is built on.',
    tags: ['DSA', 'OOP', 'DBMS', 'AI Fundamentals'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen flex flex-col justify-center relative" style={{ padding: '8rem 6vw', paddingRight: '42vw' }}>
      <p className="flex items-center gap-3 text-xs tracking-[0.22em] uppercase mb-4" style={{ color: '#00C8FF' }}>
        <span style={{ display: 'inline-block', width: '24px', height: '1px', background: '#00C8FF' }} />
        Career
      </p>
      <h2 className="font-syne font-black mb-12" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#E2EEFF' }}>
        Where I&apos;ve <span style={{ color: '#00C8FF' }}>worked</span>
      </h2>

      <div className="relative" style={{ paddingLeft: '2rem', borderLeft: '1px solid rgba(0,200,255,0.2)' }}>
        {experiences.map((exp, i) => (
          <div key={i} className="mb-12 relative group">
            {/* Dot */}
            <div style={{
              position: 'absolute', left: '-2.45rem', top: '6px',
              width: '10px', height: '10px', borderRadius: '50%',
              background: exp.color, boxShadow: `0 0 14px ${exp.color}`,
            }} />
            <div className="text-xs tracking-[0.18em] uppercase mb-1 font-mono" style={{ color: exp.color }}>{exp.period}</div>
            <div className="font-syne font-bold mb-1" style={{ fontSize: '1.25rem', color: '#E2EEFF' }}>{exp.role}</div>
            <div className="text-xs font-mono mb-3" style={{ color: exp.color + 'bb' }}>{exp.company}</div>
            <p className="text-xs leading-[2] font-mono mb-4" style={{ color: 'rgba(226,238,255,0.45)', maxWidth: '520px' }}>{exp.desc}</p>
            <div className="flex flex-wrap gap-2">
              {exp.tags.map(tag => (
                <span key={tag} className="text-[10px] font-mono tracking-wider px-2 py-1" style={{
                  background: exp.color + '0d',
                  border: `1px solid ${exp.color}33`,
                  color: exp.color,
                  borderRadius: '2px',
                }}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
