import { Card, CardBody } from '@heroui/react'
import { Icon } from '@iconify/react'

const features = [
  {
    icon: 'lucide:zap',
    title: 'Lightning Fast',
    description:
      'Our platform is optimized for speed, ensuring your team can work efficiently without delays.',
  },
  {
    icon: 'lucide:shield',
    title: 'Enterprise Security',
    description:
      'Bank-level security protocols keep your data safe and compliant with industry standards.',
  },
  {
    icon: 'lucide:settings',
    title: 'Customizable',
    description:
      'Tailor the platform to your specific needs with our flexible configuration options.',
  },
  {
    icon: 'lucide:bar-chart',
    title: 'Advanced Analytics',
    description:
      'Gain valuable insights with comprehensive reporting and data visualization tools.',
  },
  {
    icon: 'lucide:users',
    title: 'Team Collaboration',
    description:
      'Seamlessly work together with integrated communication and sharing features.',
  },
  {
    icon: 'lucide:smartphone',
    title: 'Mobile Ready',
    description:
      'Access your workspace from anywhere with our responsive mobile applications.',
  },
]

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-content1">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features
          </h2>
          <p className="text-foreground-600 max-w-2xl mx-auto">
            Our comprehensive suite of tools is designed to help your business
            thrive in today's competitive landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(feature => (
            <Card
              key={feature.title}
              className="border border-divider bg-content1 shadow-sm"
            >
              <CardBody className="p-6">
                <div className="mb-4 bg-primary/10 rounded-lg p-3 w-fit">
                  <Icon icon={feature.icon} className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-foreground-600">{feature.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
