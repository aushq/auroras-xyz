'use client'

import { ArrowRight, Briefcase, Clock, MapPin } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Footer } from '@/components/footer'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const jobOpenings = [
  {
    title: 'Senior Game Designer',
    department: 'Design',
    location: 'East Asia',
    type: 'Full-time',
    description:
      'Lead the creative vision for our next-generation gaming experiences. Shape gameplay mechanics, narrative design, and player engagement systems.',
  },
  {
    title: 'Gameplay Programmer',
    department: 'Engineering',
    location: 'East Asia',
    type: 'Full-time',
    description:
      'Bring game mechanics to life. Implement responsive controls, AI systems, and create the core gameplay experiences players will love.',
  },
  {
    title: 'Graphics Artist',
    department: 'Art',
    location: 'East Asia',
    type: 'Full-time',
    description:
      'Create stunning visual assets. Design characters, environments, and UI elements that captivate and immerse players.',
  },
  {
    title: 'Global Marketing Specialist',
    department: 'Marketing',
    location: 'East Asia',
    type: 'Full-time',
    description:
      'Drive our global marketing campaigns. Develop strategies to increase brand awareness and player acquisition across diverse markets.',
  },
]

export default function JobsPage() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => [...new Set([...prev, index])])
          }
        },
        { threshold: 0.1 },
      )

      if (ref) observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach(observer => {
        observer.disconnect()
      })
    }
  }, [])

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse delay-1000" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              Join Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
              We're building the future of interactive entertainment. Join a
              team of passionate creators, innovators, and dreamers who are
              redefining what games can be.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center space-y-2">
                <div className="text-3xl sm:text-4xl font-bold gradient-text">
                  Collaborative Culture
                </div>
                <p className="text-sm text-muted-foreground">
                  Teamwork drives our success
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl sm:text-4xl font-bold gradient-text">
                  Creative Freedom
                </div>
                <p className="text-sm text-muted-foreground">
                  Your ideas shape our future
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl sm:text-4xl font-bold gradient-text">
                  Growth Focused
                </div>
                <p className="text-sm text-muted-foreground">
                  Continuous learning & development
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Open Positions
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore opportunities to make an impact
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {jobOpenings.map((job, index) => (
                <div
                  key={index}
                  ref={el => {
                    cardRefs.current[index] = el
                  }}
                  className={`transition-all duration-700 ${
                    visibleCards.includes(index)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Card className="group relative overflow-hidden border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative p-6 sm:p-8 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div className="space-y-2 flex-1">
                          <h3 className="text-xl sm:text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                            {job.title}
                          </h3>
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                            {job.description}
                          </p>
                        </div>
                        <Link
                          href="mailto:recruit@auroras.xyz"
                          className="self-start"
                        >
                          <Button
                            size="sm"
                            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground group/btn"
                          >
                            Apply
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </Button>
                        </Link>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Briefcase className="h-4 w-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-3xl blur-3xl group-hover:blur-[100px] transition-all" />
              <div className="relative p-8 sm:p-12 md:p-16 rounded-3xl border border-border bg-card/50 backdrop-blur-sm space-y-6 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">
                  Don't See Your Role?
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
                  We're always looking for exceptional talent. Send us your
                  portfolio and tell us how you'd like to contribute to our
                  mission.
                </p>

                <Link href="mailto:recruit@auroras.xyz" className="self-start">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground group/btn"
                  >
                    Send General Application
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
