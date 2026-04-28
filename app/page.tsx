'use client'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import Cursor from '@/components/Cursor'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

const RobotScene = dynamic(() => import('@/components/RobotScene'), { ssr: false })

type SectionId = 'hero' | 'about' | 'skills' | 'experience' | 'projects' | 'contact'

export default function Page() {
  const [activeSection, setActiveSection] = useState<SectionId>('hero')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id as SectionId)
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Cursor />
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,255,178,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,178,0.022) 1px,transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      <RobotScene activeSection={activeSection} />
      <Nav activeSection={activeSection} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="relative z-10 border-t border-white/5 px-4 py-6 text-center text-[10px] tracking-[0.22em] text-white/30 sm:px-6 sm:py-8 sm:text-xs">
        © 2025 NAFEESA SHEHZADI · BUILT WITH NEXT.JS + THREE.JS
      </footer>
    </>
  )
}
