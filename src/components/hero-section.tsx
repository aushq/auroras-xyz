import { Button, Image } from '@heroui/react'
import { Icon } from '@iconify/react'

export const HeroSection = () => {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Transform your business with our solutions
              </h1>
              <p className="text-lg md:text-xl text-foreground-600 max-w-lg mx-auto lg:mx-0">
                Powerful tools to help you streamline operations, increase
                productivity, and drive growth.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                color="primary"
                size="lg"
                className="font-medium text-medium"
                endContent={<Icon icon="lucide:arrow-right" className="ml-1" />}
              >
                Get Started
              </Button>
              <Button
                variant="bordered"
                size="lg"
                className="font-medium text-medium"
                startContent={<Icon icon="lucide:play" className="mr-1" />}
              >
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-6 justify-center lg:justify-start">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(id => (
                  <Image
                    key={id}
                    src={`https://img.heroui.chat/image/avatar?w=48&h=48&u=${id}`}
                    alt={`User ${id}`}
                    className="size-10 border-2 border-background rounded-full"
                  />
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold">500+</span> companies already
                onboard
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10">
              <Image
                src="https://img.heroui.chat/image/dashboard?w=800&h=600&u=1"
                alt="Dashboard Preview"
                className="rounded-xl shadow-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 size-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 -z-10 size-64 bg-secondary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
