import { CallToAction } from '@/components/call-to-action'
import { Focus } from '@/components/focus'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { Navigation } from '@/components/navigation'
import { Vision } from '@/components/vision'

export default function Home() {
  return (
    <main className="snap-container">
      <Navigation />
      <div className="snap-section">
        <Hero />
      </div>
      <div className="snap-section">
        <Vision />
        <Focus />
        <CallToAction />
        <Footer />
      </div>
    </main>
  )
}
