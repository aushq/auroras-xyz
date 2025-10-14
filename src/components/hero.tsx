'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
    }> = []

    const colors = [
      'rgba(96, 215, 255, 0.6)',
      'rgba(183, 110, 255, 0.6)',
      'rgba(138, 180, 255, 0.6)',
    ]

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      })

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(96, 215, 255, ${0.15 * (1 - distance / 150)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.4 }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <div className="inline-block animate-float">
            <div className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
              <span className="text-xs sm:text-sm font-medium text-primary">
                Building the Future of Gaming
              </span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight text-balance">
            Crafting <span className="gradient-text">Extraordinary</span>{' '}
            Experiences
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            We're a collective of visionaries, artists, and engineers pushing
            the boundaries of interactive entertainment. Join us in shaping
            tomorrow's gaming landscape.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/jobs">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground group"
              >
                Join Our Team
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            {/* <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-primary/30 hover:bg-primary/10 bg-transparent"
            >
              Partner With Us
            </Button> */}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
        </div>
      </div>
    </section>
  )
}
