'use client'

import { AboutSection } from '../components/about-section'
import { CtaSection } from '../components/cta-section'
import { FeaturesSection } from '../components/features-section'
import { Footer } from '../components/footer'
import { HeroSection } from '../components/hero-section'
import { Navbar } from '../components/navbar'
import { TestimonialsSection } from '../components/testimonials-section'

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
