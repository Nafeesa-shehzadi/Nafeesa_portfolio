'use client'
import { useEffect, useRef } from 'react'

const skills = [
  { name: 'React & Next.js', level: 92, color: '#00FFB2', category: 'Frontend', icon: '⚛' },
  { name: 'TypeScript', level: 85, color: '#00C8FF', category: 'Language', icon: '𝕋' },
  { name: 'Hume AI & OpenAI', level: 80, color: '#FF6FB1', category: 'AI/ML', icon: '🤖' },
  { name: 'Tailwind + MUI', level: 90, color: '#B16FFF', category: 'Styling', icon: '🎨' },
  { name: 'Ionic React', level: 78, color: '#FFAA00', category: 'Mobile', icon: '📱' },
  { name: 'Redux', level: 82, color: '#00FFB2', category: 'State', icon: '🔄' },
  { name: 'REST APIs', level: 88, color: '#00C8FF', category: 'Integration', icon: '🔗' },
  { name: 'Git & Agile/Scrum', level: 86, color: '#B16FFF', category: 'Workflow', icon: '⚙' },
]

export default function Skills() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const idx = cardsRef.current.indexOf(entry.target as HTMLDivElement)
          const bar = (entry.target as HTMLElement).querySelector('.skill-bar') as HTMLElement
          if (bar) setTimeout(() => { bar.style.width = bar.dataset.w || '0%' }, idx * 80)
          entry.target.classList.add('is-visible')
        }
      })
    }, { threshold: 0.2 })
    cardsRef.current.forEach(el => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center relative" style={{ padding: '8rem 6vw', paddingRight: '36vw' }}>
      <p className="flex items-center gap-3 text-xs tracking-[0.22em] uppercase mb-4" style={{ color: 'var(--accent3)' }}>
        <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--accent3)' }} />
        Technical Skills
      </p>
      <h2 className="font-syne font-black mb-12" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#E2EEFF' }}>
        What I <span style={{ color: 'var(--accent3)' }}>build</span> with
      </h2>

      <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
        {skills.map((skill, i) => (
          <div
            key={skill.name}
            ref={el => { cardsRef.current[i] = el }}
            className="p-5 transition-all duration-300 group"
            style={{
              background: 'rgba(13,21,38,0.6)',
              border: '1px solid rgba(226,238,255,0.06)',
              borderRadius: '4px',
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease, border-color 0.3s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = skill.color + '44'; (e.currentTarget as HTMLElement).style.background = 'rgba(13,21,38,0.9)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(226,238,255,0.06)'; (e.currentTarget as HTMLElement).style.background = 'rgba(13,21,38,0.6)' }}
          >
            <style jsx>{`.is-visible { opacity: 1 !important; transform: translateY(0) !important; }`}</style>
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className="text-base mr-2">{skill.icon}</span>
                <span className="font-syne font-bold text-sm" style={{ color: '#E2EEFF' }}>{skill.name}</span>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-xs font-mono font-bold" style={{ color: skill.color }}>{skill.level}%</span>
                <span className="text-[10px] tracking-widest uppercase px-2 py-0.5" style={{
                  color: skill.color, border: `1px solid ${skill.color}33`,
                  background: skill.color + '11', borderRadius: '2px'
                }}>{skill.category}</span>
              </div>
            </div>
            {/* Bar */}
            <div style={{ height: '3px', background: 'rgba(226,238,255,0.06)', borderRadius: '2px', overflow: 'hidden' }}>
              <div
                className="skill-bar"
                data-w={`${skill.level}%`}
                style={{
                  height: '100%', width: '0%', borderRadius: '2px',
                  background: `linear-gradient(to right, ${skill.color}88, ${skill.color})`,
                  transition: 'width 1.2s cubic-bezier(0.25,1,0.5,1)',
                  boxShadow: `0 0 8px ${skill.color}66`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
