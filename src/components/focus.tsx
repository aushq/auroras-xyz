"use client"

import { useEffect, useRef, useState } from "react"
import { Sparkles, Users, Handshake } from "lucide-react"

const focuses = [
  {
    icon: Sparkles,
    title: "Innovation First",
    description:
      "We embrace cutting-edge technology and bold creative risks to deliver experiences that redefine what's possible in gaming.",
  },
  {
    icon: Users,
    title: "Talent Development",
    description:
      "Your growth is our priority. We invest in mentorship, learning opportunities, and a culture that celebrates creativity.",
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    description:
      "We collaborate with industry leaders and innovative partners to amplify our impact and reach new audiences.",
  },
]

export function Focus() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
          <div
            className={`text-center space-y-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance">
              Our <span className="gradient-text">Focus</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Three pillars that define how we build, grow, and collaborate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {focuses.map((focus, index) => (
              <div
                key={focus.title}
                className={`transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
                  <div className="relative h-full p-6 sm:p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all space-y-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center">
                      <focus.icon className="w-6 h-6 sm:w-7 sm:h-7 text-background" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold">{focus.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{focus.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
