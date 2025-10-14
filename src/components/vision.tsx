'use client'

import { useEffect, useRef, useState } from 'react'

export function Vision() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-balance">
              Where Innovation Meets{' '}
              <span className="gradient-text">Imagination</span>
            </h2>
          </div>

          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              At Nexus, we believe gaming is more than entertainment—it's a
              medium for connection, creativity, and cultural impact. We're
              building a studio where bold ideas flourish and talented
              individuals thrive.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 sm:pt-12 transition-all duration-1000 delay-400 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative p-6 sm:p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all">
                <div className="text-4xl sm:text-5xl font-bold gradient-text mb-3 sm:mb-4">
                  10%
                </div>
                <div className="text-sm sm:text-base text-muted-foreground lg:min-h-14">
                  Top talent in the industry
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative p-6 sm:p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-all">
                <div className="text-4xl sm:text-5xl font-bold gradient-text mb-3 sm:mb-4">
                  Global
                </div>
                <div className="text-sm sm:text-base text-muted-foreground lg:min-h-14">
                  Multicultural, worldwide market
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative p-6 sm:p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-secondary/50 transition-all">
                <div className="text-4xl sm:text-5xl font-bold gradient-text mb-3 sm:mb-4">
                  2025
                </div>
                <div className="text-sm sm:text-base text-muted-foreground lg:min-h-14">
                  Founded with vision and ambition
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
