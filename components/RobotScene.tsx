'use client'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

type Section = 'hero' | 'about' | 'skills' | 'experience' | 'projects' | 'contact'

const SECTION_CONFIGS: Record<
  Section,
  {
    canvasStyle: Partial<CSSStyleDeclaration>
    robotPos: [number, number, number]
    robotRot: [number, number, number]
    emissiveColor: string
    eyeColor: string
    pose: string
  }
> = {
  hero: {
    canvasStyle: { right: '0', left: 'auto', top: '0', width: '42vw', height: '100vh', transform: 'none' },
    robotPos: [0, -0.5, 0],
    robotRot: [0, -0.3, 0],
    emissiveColor: '#00FFB2',
    eyeColor: '#00FFB2',
    pose: 'idle',
  },
  about: {
    canvasStyle: { left: '0', right: 'auto', top: '0', width: '42vw', height: '100vh', transform: 'none' },
    robotPos: [0, -0.3, 0],
    robotRot: [0, 0.6, 0],
    emissiveColor: '#B16FFF',
    eyeColor: '#B16FFF',
    pose: 'curious',
  },
  skills: {
    canvasStyle: { right: '3vw', left: 'auto', top: '50%', width: '30vw', height: '70vh', transform: 'translateY(-50%)' },
    robotPos: [0, -0.2, 0],
    robotRot: [0.1, -0.5, 0],
    emissiveColor: '#FF6FB1',
    eyeColor: '#FF6FB1',
    pose: 'active',
  },
  experience: {
    canvasStyle: { right: '0', left: 'auto', top: '0', width: '38vw', height: '100vh', transform: 'none' },
    robotPos: [0, -0.6, 0],
    robotRot: [0, -0.2, 0.05],
    emissiveColor: '#00C8FF',
    eyeColor: '#00C8FF',
    pose: 'thinking',
  },
  projects: {
    canvasStyle: { right: '4vw', left: 'auto', bottom: '0', top: 'auto', width: '28vw', height: '65vh', transform: 'none' },
    robotPos: [0, 0, 0],
    robotRot: [-0.1, -0.4, 0],
    emissiveColor: '#FFAA00',
    eyeColor: '#FFAA00',
    pose: 'excited',
  },
  contact: {
    canvasStyle: { left: '50%', right: 'auto', top: '50%', width: '40vw', height: '80vh', transform: 'translate(-50%,-50%)' },
    robotPos: [0, -0.4, 0],
    robotRot: [0, 0, 0],
    emissiveColor: '#00FFB2',
    eyeColor: '#00FFB2',
    pose: 'wave',
  },
}

function buildRobot(emissiveColor: string, eyeColor: string) {
  const group = new THREE.Group()

  const metalMat = (col: string, emissive = '#000000', emissiveInt = 0) =>
    new THREE.MeshStandardMaterial({
      color: col,
      metalness: 0.9,
      roughness: 0.15,
      emissive: new THREE.Color(emissive),
      emissiveIntensity: emissiveInt,
    })
  const glassMat = (col: string) =>
    new THREE.MeshStandardMaterial({
      color: col,
      metalness: 0.1,
      roughness: 0,
      transparent: true,
      opacity: 0.85,
      emissive: new THREE.Color(col),
      emissiveIntensity: 0.6,
    })
  const glowMat = (col: string) =>
    new THREE.MeshStandardMaterial({ color: col, emissive: new THREE.Color(col), emissiveIntensity: 1.2, metalness: 0, roughness: 1 })

  const headG = new THREE.Group()
  const skull = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.0, 1.0, 2, 2, 2), metalMat('#1a2540', emissiveColor, 0.04))
  headG.add(skull)

  const visor = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.35, 0.12), glassMat(eyeColor))
  visor.position.set(0, 0.08, 0.52)
  headG.add(visor)

  ;[-0.22, 0.22].forEach((x) => {
    const eye1 = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 12), glowMat(eyeColor))
    eye1.position.set(x, 0.08, 0.56)
    headG.add(eye1)
  })

  ;[-1, 1].forEach((side) => {
    const ear = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.5, 0.6), metalMat('#0f1a30', emissiveColor, 0.06))
    ear.position.set(side * 0.62, 0, 0)
    headG.add(ear)
    const earLight = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.12, 0.12), glowMat(emissiveColor))
    earLight.position.set(side * 0.7, 0.1, 0)
    headG.add(earLight)
  })

  const antBase = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 0.18, 8), metalMat('#1a2540'))
  antBase.position.set(0.2, 0.6, 0)
  headG.add(antBase)
  const antTip = new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 10), glowMat(emissiveColor))
  antTip.position.set(0.2, 0.78, 0)
  headG.add(antTip)

  const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.06, 0.04), glowMat(emissiveColor))
  mouth.position.set(0, -0.28, 0.52)
  headG.add(mouth)
  headG.position.set(0, 2.0, 0)
  group.add(headG)

  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 0.3, 10), metalMat('#131f35'))
  neck.position.set(0, 1.68, 0)
  group.add(neck)

  const torsoG = new THREE.Group()
  const torsoMain = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.5, 0.9), metalMat('#0f1a30', emissiveColor, 0.03))
  torsoG.add(torsoMain)
  const chestPanel = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.7, 0.1), metalMat('#1a2a4a'))
  chestPanel.position.set(0, 0.1, 0.46)
  torsoG.add(chestPanel)
  const core = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 16), glowMat(emissiveColor))
  core.position.set(0, 0.1, 0.52)
  torsoG.add(core)
  const ringGeo = new THREE.TorusGeometry(0.26, 0.03, 8, 32)
  const ring1 = new THREE.Mesh(ringGeo, glowMat(emissiveColor))
  ring1.position.set(0, 0.1, 0.52)
  ring1.rotation.x = Math.PI / 2
  torsoG.add(ring1)

  ;[-1, 1].forEach((side) => {
    for (let i = 0; i < 3; i++) {
      const vent = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.04, 0.14), glowMat(emissiveColor))
      vent.position.set(side * 0.68, 0.3 - i * 0.18, 0.38)
      torsoG.add(vent)
    }
  })

  ;[-1, 1].forEach((side) => {
    const guard = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.3, 1.0), metalMat('#1a2540', emissiveColor, 0.05))
    guard.position.set(side * 0.9, 0.65, 0)
    torsoG.add(guard)
  })

  torsoG.position.set(0, 0.75, 0)
  group.add(torsoG)

  ;[-1, 1].forEach((side) => {
    const armG = new THREE.Group()
    const upper = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.16, 0.7, 10), metalMat('#131f35'))
    upper.position.set(0, -0.35, 0)
    armG.add(upper)
    const elbow = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 10), metalMat('#1a2a4a', emissiveColor, 0.04))
    elbow.position.set(0, -0.72, 0)
    armG.add(elbow)
    const lower = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.18, 0.65, 10), metalMat('#0f1a30'))
    lower.position.set(0, -1.1, 0)
    armG.add(lower)
    const hand = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.3, 0.22), metalMat('#1a2540', emissiveColor, 0.05))
    hand.position.set(0, -1.5, 0)
    armG.add(hand)
    for (let i = 0; i < 3; i++) {
      const knuckle = new THREE.Mesh(new THREE.SphereGeometry(0.04, 6, 6), glowMat(emissiveColor))
      knuckle.position.set((i - 1) * 0.08, -1.62, 0.1)
      armG.add(knuckle)
    }
    armG.position.set(side * 1.05, 1.25, 0)
    armG.rotation.z = side * 0.15
    group.add(armG)
  })

  const pelvis = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.35, 0.75), metalMat('#0d1828'))
  pelvis.position.set(0, 0, 0)
  group.add(pelvis)

  ;[-1, 1].forEach((side) => {
    const legG = new THREE.Group()
    const thigh = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.19, 0.8, 10), metalMat('#131f35'))
    thigh.position.set(0, -0.4, 0)
    legG.add(thigh)
    const knee = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 10), metalMat('#1a2a4a', emissiveColor, 0.04))
    knee.position.set(0, -0.82, 0)
    legG.add(knee)
    const shin = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.2, 0.75, 10), metalMat('#0f1a30'))
    shin.position.set(0, -1.2, 0)
    legG.add(shin)
    const foot = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.22, 0.55), metalMat('#1a2540'))
    foot.position.set(0, -1.65, 0.08)
    legG.add(foot)
    const footGlow = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.04, 0.48), glowMat(emissiveColor))
    footGlow.position.set(0, -1.74, 0.08)
    legG.add(footGlow)
    legG.position.set(side * 0.38, -0.18, 0)
    group.add(legG)
  })

  return { group, headGroup: headG, core, ring1, antTip }
}

export default function RobotScene({ activeSection }: { activeSection: Section }) {
  const [isDesktop, setIsDesktop] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const stateRef = useRef({
    scene: null as THREE.Scene | null,
    camera: null as THREE.PerspectiveCamera | null,
    renderer: null as THREE.WebGLRenderer | null,
    robot: null as THREE.Group | null,
    headGroup: null as THREE.Group | null,
    core: null as THREE.Mesh | null,
    ring1: null as THREE.Mesh | null,
    antTip: null as THREE.Mesh | null,
    targetPos: new THREE.Vector3(0, -0.5, 0),
    targetRot: new THREE.Euler(0, -0.3, 0),
    targetEmissive: new THREE.Color('#00FFB2'),
    clock: new THREE.Clock(),
    section: 'hero' as Section,
    particles: null as THREE.Points | null,
  })

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')
    const syncDesktop = () => setIsDesktop(media.matches)
    syncDesktop()
    media.addEventListener('change', syncDesktop)
    return () => media.removeEventListener('change', syncDesktop)
  }, [])

  useEffect(() => {
    if (!isDesktop) return

    const cfg = SECTION_CONFIGS[activeSection]
    const wrapper = wrapperRef.current
    if (!wrapper) return

    Object.assign(wrapper.style, {
      right: '',
      left: '',
      top: '',
      bottom: '',
      width: '',
      height: '',
      transform: '',
      ...cfg.canvasStyle,
    })

    const state = stateRef.current
    state.targetPos.set(...cfg.robotPos)
    state.targetRot.set(...cfg.robotRot)
    state.targetEmissive.set(cfg.emissiveColor)
    state.section = activeSection
  }, [activeSection, isDesktop])

  useEffect(() => {
    if (!isDesktop || !canvasRef.current) return

    const state = stateRef.current
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight)
    renderer.shadowMap.enabled = true
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2
    state.renderer = renderer

    const scene = new THREE.Scene()
    state.scene = scene

    const pGeo = new THREE.BufferGeometry()
    const pCount = 200
    const pPos = new Float32Array(pCount * 3)
    for (let i = 0; i < pCount * 3; i++) pPos[i] = (Math.random() - 0.5) * 10
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3))
    const pMat = new THREE.PointsMaterial({ color: '#00FFB2', size: 0.04, transparent: true, opacity: 0.5 })
    const particles = new THREE.Points(pGeo, pMat)
    scene.add(particles)
    state.particles = particles

    scene.add(new THREE.AmbientLight('#1a2a4a', 0.8))
    const keyLight = new THREE.DirectionalLight('#e2eeff', 1.6)
    keyLight.position.set(3, 5, 4)
    scene.add(keyLight)
    const fillLight = new THREE.DirectionalLight('#B16FFF', 0.6)
    fillLight.position.set(-4, 2, -2)
    scene.add(fillLight)
    const rimLight = new THREE.PointLight('#00FFB2', 2.0, 10)
    rimLight.position.set(0, 3, -3)
    scene.add(rimLight)
    const bottomLight = new THREE.PointLight('#00C8FF', 1.0, 6)
    bottomLight.position.set(0, -2, 2)
    scene.add(bottomLight)

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(6, 6),
      new THREE.MeshStandardMaterial({ color: '#00FFB2', transparent: true, opacity: 0.03, metalness: 1, roughness: 0 })
    )
    ground.rotation.x = -Math.PI / 2
    ground.position.y = -2.1
    scene.add(ground)

    const { group, headGroup, core, ring1, antTip } = buildRobot('#00FFB2', '#00FFB2')
    state.robot = group
    state.headGroup = headGroup
    state.core = core
    state.ring1 = ring1
    state.antTip = antTip
    scene.add(group)

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
    camera.position.set(0, 1.0, 6.5)
    state.camera = camera

    let mx = 0
    let my = 0
    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2
      my = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouse)

    const onResize = () => {
      if (!wrapperRef.current || !state.renderer || !state.camera) return
      const w = wrapperRef.current.clientWidth
      const h = wrapperRef.current.clientHeight
      state.renderer.setSize(w, h)
      state.camera.aspect = w / h
      state.camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', onResize)

    let frame = 0
    const tick = () => {
      frame = requestAnimationFrame(tick)
      const t = state.clock.getElapsedTime()
      const robot = state.robot
      const head = state.headGroup

      if (robot) {
        robot.position.lerp(state.targetPos, 0.04)
        robot.rotation.x += (state.targetRot.x - robot.rotation.x) * 0.04
        robot.rotation.y += (state.targetRot.y - robot.rotation.y) * 0.04
        robot.rotation.z += (state.targetRot.z - robot.rotation.z) * 0.04

        const sec = state.section
        if (sec === 'hero') {
          robot.position.y += Math.sin(t * 0.8) * 0.008
          robot.rotation.y = -0.3 + Math.sin(t * 0.4) * 0.06
        } else if (sec === 'about') {
          robot.position.y += Math.sin(t * 0.6) * 0.01
          robot.rotation.z = Math.sin(t * 0.5) * 0.03
        } else if (sec === 'skills') {
          robot.position.y += Math.sin(t * 1.5) * 0.015
          robot.rotation.y = -0.5 + Math.sin(t * 1.2) * 0.12
        } else if (sec === 'experience') {
          robot.position.y += Math.sin(t * 0.5) * 0.006
          if (head) head.rotation.y = Math.sin(t * 0.4) * 0.12
        } else if (sec === 'projects') {
          robot.position.y += Math.abs(Math.sin(t * 1.2)) * 0.02
          robot.rotation.y = -0.4 + Math.sin(t * 0.9) * 0.15
        } else if (sec === 'contact') {
          if (head) head.rotation.z = Math.sin(t * 1.5) * 0.08
          robot.position.y += Math.sin(t) * 0.01
        }
      }

      if (head) {
        head.rotation.y += (mx * 0.3 - head.rotation.y) * 0.05
        head.rotation.x += (my * 0.15 - head.rotation.x) * 0.05
      }

      if (state.core) {
        const sc = 1 + Math.sin(t * 2.5) * 0.12
        state.core.scale.setScalar(sc)
        ;(state.core.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.8 + Math.sin(t * 2.5) * 0.5
      }
      if (state.ring1) state.ring1.rotation.z = t * 1.2
      if (state.antTip) {
        ;(state.antTip.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.6 + Math.sin(t * 4) * 0.5
      }

      const targetE = state.targetEmissive
      if (robot) {
        robot.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            const mat = child.material as THREE.MeshStandardMaterial
            if (mat.emissiveIntensity > 0.3) {
              mat.emissive.lerp(targetE, 0.03)
            }
          }
        })
      }

      if (state.particles) {
        state.particles.rotation.y = t * 0.04
        state.particles.rotation.x = t * 0.015
      }

      if (state.renderer && state.camera && state.scene) {
        state.renderer.render(state.scene, state.camera)
      }
    }

    tick()
    onResize()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
    }
  }, [isDesktop])

  if (!isDesktop) return null

  return (
    <div
      ref={wrapperRef}
      style={{
        position: 'fixed',
        right: '0',
        left: 'auto',
        top: '0',
        width: '48vw',
        height: '100vh',
        zIndex: 2,
        pointerEvents: 'none',
        transition: 'all 1.4s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(0,255,178,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}
