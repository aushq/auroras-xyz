import { Button, Input } from '@heroui/react'

export const CtaSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-primary rounded-xl p-8 md:p-12 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 size-64 bg-primary-400 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 size-64 bg-primary-600 rounded-full opacity-30 blur-3xl"></div>

          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to transform your business?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using our platform to
              streamline operations and drive growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                size="lg"
                className="bg-white/10 text-white placeholder:text-white/60"
              />
              <Button
                color="default"
                size="lg"
                className="bg-white text-primary font-medium"
              >
                Get Started
              </Button>
            </div>

            <p className="mt-4 text-sm text-white/60">
              Free 14-day trial. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
