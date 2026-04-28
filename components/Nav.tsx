'use client'
type Props = { activeSection: string }

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Exp' },
  { id: 'projects', label: 'Work' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav({ activeSection }: Props) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5"
      style={{ backdropFilter: 'blur(20px)', background: 'rgba(4,7,15,0.7)', borderBottom: '1px solid rgba(0,255,178,0.07)' }}>
      <span className="font-syne font-black text-sm tracking-widest" style={{ color: 'var(--accent)' }}>NS<span className="text-white/30">_</span></span>
      <ul className="flex gap-8 list-none">
        {links.map(({ id, label }) => (
          <li key={id}>
            <a href={`#${id}`}
              className="text-xs tracking-widest uppercase transition-all duration-200 no-underline cursor-none relative"
              style={{ color: activeSection === id ? 'var(--accent)' : 'rgba(226,238,255,0.4)' }}
            >
              {activeSection === id && (
                <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)', boxShadow: '0 0 8px var(--accent)' }} />
              )}
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
