'use client'
import { useEffect, useState } from 'react'

type Props = { activeSection: string }

const links = [
  { id: 'hero', label: 'Home', meta: 'Intro' },
  { id: 'about', label: 'About', meta: 'Story' },
  { id: 'skills', label: 'Skills', meta: 'Stack' },
  { id: 'experience', label: 'Exp', meta: 'Career' },
  { id: 'projects', label: 'Work', meta: 'Projects' },
  { id: 'contact', label: 'Contact', meta: 'Reach out' },
]

export default function Nav({ activeSection }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
  }, [activeSection])

  return (
    <>
      <nav
        className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5 xl:px-10"
        style={{ backdropFilter: 'blur(20px)', background: 'rgba(4,7,15,0.7)', borderBottom: '1px solid rgba(0,255,178,0.07)' }}
      >
        <a href="#hero" className="shrink-0 no-underline">
          <span className="font-syne text-xs font-black tracking-[0.28em] sm:text-sm" style={{ color: 'var(--accent)' }}>
            NS<span className="text-white/30">_</span>
          </span>
        </a>

        <ul className="hidden items-center gap-6 xl:flex">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="relative cursor-none text-xs uppercase tracking-[0.22em] transition-all duration-200 no-underline"
                style={{ color: activeSection === id ? 'var(--accent)' : 'rgba(226,238,255,0.4)' }}
              >
                {activeSection === id && (
                  <span
                    className="absolute -left-3 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full"
                    style={{ background: 'var(--accent)', boxShadow: '0 0 8px var(--accent)' }}
                  />
                )}
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-panel"
          className="group relative inline-flex h-11 w-11 items-center justify-center rounded-full border xl:hidden"
          style={{
            borderColor: menuOpen ? 'rgba(0,255,178,0.4)' : 'rgba(226,238,255,0.12)',
            background: menuOpen ? 'rgba(0,255,178,0.08)' : 'rgba(8,13,26,0.72)',
            boxShadow: menuOpen ? '0 0 24px rgba(0,255,178,0.16)' : 'none',
          }}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="pointer-events-none relative block h-3.5 w-5">
            <span
              className="absolute left-0 top-0 block h-px w-5 origin-center transition-all duration-300"
              style={{ background: '#E2EEFF', transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none' }}
            />
            <span
              className="absolute left-0 top-1.5 block h-px w-5 transition-all duration-300"
              style={{ background: 'var(--accent)', opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="absolute left-0 top-3 block h-px w-5 origin-center transition-all duration-300"
              style={{ background: '#E2EEFF', transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none' }}
            />
          </span>
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 xl:hidden transition-all duration-300 ${menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          aria-label="Close menu overlay"
          className="absolute inset-0"
          style={{ background: 'rgba(4,7,15,0.68)', backdropFilter: 'blur(12px)' }}
          onClick={() => setMenuOpen(false)}
        />

        <div
          id="mobile-nav-panel"
          className={`absolute right-4 top-[4.75rem] w-[min(24rem,calc(100vw-2rem))] overflow-hidden rounded-[28px] border p-4 shadow-2xl transition-all duration-300 sm:right-6 ${menuOpen ? 'translate-y-0 scale-100 opacity-100' : '-translate-y-4 scale-95 opacity-0'}`}
          style={{
            background:
              'linear-gradient(180deg, rgba(8,13,26,0.98) 0%, rgba(13,21,38,0.95) 100%)',
            borderColor: 'rgba(0,255,178,0.12)',
            boxShadow: '0 20px 80px rgba(0,0,0,0.45)',
          }}
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-24"
            style={{ background: 'radial-gradient(circle at top, rgba(0,255,178,0.14), transparent 70%)' }}
          />

          <div className="relative z-10 mb-4 flex items-center justify-between">
            <div>
              <p className="font-syne text-sm font-bold tracking-[0.24em]" style={{ color: '#E2EEFF' }}>
                Navigation
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.22em]" style={{ color: 'rgba(226,238,255,0.42)' }}>
                Smooth section access
              </p>
            </div>
            <div
              className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em]"
              style={{ color: 'var(--accent)', border: '1px solid rgba(0,255,178,0.22)', background: 'rgba(0,255,178,0.07)' }}
            >
              Menu
            </div>
          </div>

          <div className="relative z-10 grid gap-2">
            {links.map(({ id, label, meta }) => {
              const isActive = activeSection === id
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  className="group flex items-center justify-between rounded-2xl border px-4 py-3 no-underline transition-all duration-200"
                  style={{
                    borderColor: isActive ? 'rgba(0,255,178,0.28)' : 'rgba(226,238,255,0.08)',
                    background: isActive ? 'rgba(0,255,178,0.08)' : 'rgba(255,255,255,0.02)',
                    boxShadow: isActive ? '0 0 24px rgba(0,255,178,0.08)' : 'none',
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[10px] font-bold uppercase tracking-[0.22em]"
                      style={{
                        color: isActive ? '#04070F' : 'var(--accent)',
                        background: isActive ? 'var(--accent)' : 'rgba(0,255,178,0.08)',
                      }}
                    >
                      {label.slice(0, 2)}
                    </span>
                    <div>
                      <div className="font-syne text-sm font-bold" style={{ color: '#E2EEFF' }}>
                        {label}
                      </div>
                      <div className="text-[10px] uppercase tracking-[0.22em]" style={{ color: 'rgba(226,238,255,0.42)' }}>
                        {meta}
                      </div>
                    </div>
                  </div>

                  <span
                    className="text-xs uppercase tracking-[0.2em] transition-transform duration-200 group-hover:translate-x-1"
                    style={{ color: isActive ? 'var(--accent)' : 'rgba(226,238,255,0.35)' }}
                  >
                    Go
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
