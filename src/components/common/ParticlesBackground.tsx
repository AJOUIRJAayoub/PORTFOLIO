import { useEffect, useRef } from 'react'
import { performanceConfig } from '@/utils/performance'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
}

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const isRunning = useRef(true)

  useEffect(() => {
    // Désactiver sur mobile pour les performances
    if (!performanceConfig.enableParticles) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: false })
    if (!ctx) return

    // Configuration adaptative
    const particleCount = performanceConfig.getParticleCount()
    const connectionDistance = window.innerWidth < 768 ? 100 : 150
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []

    // Créer les particules
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3, // Vitesse réduite
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.1
      })
    }

    let lastTime = 0
    const fps = 30 // Limiter à 30 FPS pour les performances

    const animate = (currentTime: number) => {
      if (!isRunning.current) return
      
      const deltaTime = currentTime - lastTime
      
      if (deltaTime > 1000 / fps) {
        ctx.fillStyle = 'rgba(3, 7, 18, 0.1)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Mise à jour et dessin des particules
        particles.forEach((particle, i) => {
          particle.x += particle.vx
          particle.y += particle.vy

          // Rebondir sur les murs
          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

          // Dessiner la particule
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(74, 222, 128, ${particle.opacity})`
          ctx.fill()

          // Connexions (limiter pour les performances)
          if (i < particleCount / 2) {
            for (let j = i + 1; j < Math.min(i + 5, particles.length); j++) {
              const dx = particles[j].x - particle.x
              const dy = particles[j].y - particle.y
              const distance = Math.sqrt(dx * dx + dy * dy)

              if (distance < connectionDistance) {
                ctx.beginPath()
                ctx.moveTo(particle.x, particle.y)
                ctx.lineTo(particles[j].x, particles[j].y)
                ctx.strokeStyle = `rgba(74, 222, 128, ${0.1 * (1 - distance / connectionDistance)})`
                ctx.lineWidth = 0.5
                ctx.stroke()
              }
            }
          }
        })
        
        lastTime = currentTime
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    const handleResize = performanceConfig.debounce(() => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }, 300)

    const handleVisibilityChange = () => {
      isRunning.current = !document.hidden
      if (!document.hidden && animationRef.current) {
        requestAnimationFrame(animate)
      }
    }

    window.addEventListener('resize', handleResize)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      isRunning.current = false
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  // Ne pas rendre sur mobile
  if (!performanceConfig.enableParticles) {
    return null
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-50"
      style={{ background: 'transparent' }}
    />
  )
}