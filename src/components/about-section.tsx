import { Image } from '@heroui/react'
import { Icon } from '@iconify/react'

const stats = [
  { value: '98%', label: 'Customer satisfaction' },
  { value: '24/7', label: 'Customer support' },
  { value: '10+', label: 'Years of experience' },
  { value: '200+', label: 'Team members' },
]

export const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-xl overflow-hidden">
              <Image
                src="https://img.heroui.chat/image/ai?w=600&h=600&u=2"
                alt="About our company"
                className="w-full object-cover"
              />
            </div>
            <div className="absolute top-8 -right-8 bg-primary p-6 rounded-lg shadow-lg z-20">
              <p className="text-4xl font-bold text-white">10+</p>
              <p className="text-white/80">Years of Excellence</p>
            </div>
            <div className="absolute -z-10 -bottom-6 -left-6 size-64 bg-primary/10 rounded-full blur-3xl"></div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                About Our Company
              </h2>
              <p className="text-foreground-600 mb-6">
                Founded in 2014, Acme Inc has been at the forefront of
                innovation, helping businesses of all sizes transform their
                operations through cutting-edge technology solutions.
              </p>
              <p className="text-foreground-600">
                Our mission is to empower organizations with tools that simplify
                complex processes, foster collaboration, and drive sustainable
                growth. With a team of industry experts and passionate
                innovators, we're committed to delivering excellence in
                everything we do.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map(stat => (
                <div
                  key={stat.value}
                  className="p-4 border border-divider rounded-lg"
                >
                  <p className="text-2xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-sm text-foreground-600">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <p className="font-medium">Trusted by leading companies:</p>
              <div className="flex flex-wrap gap-6">
                <Icon icon="logos:google" className="size-6" />
                <Icon icon="logos:microsoft" className="size-6" />
                <Icon icon="logos:amazon" className="size-6" />
                <Icon icon="logos:slack" className="size-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
