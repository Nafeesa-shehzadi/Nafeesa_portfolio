# Nafeesa Shehzadi — Portfolio

A Next.js 14 portfolio with a 3D robotic girl character (Three.js) that changes position, pose, and color based on scroll section.

## Features
- **3D Robot** — built with Three.js, mouse-tracking head, animated core orb, glowing eyes
- **Section-reactive robot** — position, rotation, size & emissive color change per section:
  - Hero: robot on the right, idle float
  - About: robot slides to left, curious tilt
  - Skills: robot shrinks to corner, energetic bounce
  - Experience: robot back right, thinking mode
  - Projects: robot bottom right, excited
  - Contact: robot centered, wave mode
- **Custom cursor** with smooth lerp ring
- **Animated skill bars** triggered on scroll
- **Animated timeline** for experience
- **Particle field** around robot
- Custom Space Mono + Syne fonts
- Full dark theme with cyan/purple/pink accent system

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Three.js (custom robot — no external models needed)
- Tailwind CSS
- Framer Motion (optional)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Structure
```
app/
  globals.css   — global styles
  layout.tsx    — root layout
  page.tsx      — main page, section detection
components/
  RobotScene.tsx — Three.js robot + section transitions
  Cursor.tsx     — custom cursor
  Nav.tsx        — navigation with active section
  Hero.tsx
  About.tsx
  Skills.tsx
  Experience.tsx
  Projects.tsx
  Contact.tsx
```
