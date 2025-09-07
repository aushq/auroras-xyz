import { Card, CardBody, Image } from '@heroui/react'
import { Icon } from '@iconify/react'

const testimonials = [
  {
    content:
      "Implementing this platform has transformed our workflow. We've seen a 40% increase in productivity and our team collaboration has never been better.",
    author: 'Sarah Johnson',
    position: 'CTO, TechCorp',
    avatar: 5,
  },
  {
    content:
      'The analytics capabilities alone are worth the investment. We now have insights that have helped us make strategic decisions with confidence.',
    author: 'Michael Chen',
    position: 'Operations Director, Innovate Inc',
    avatar: 6,
  },
  {
    content:
      "Customer support is exceptional. Any issues we've had were resolved quickly, and the team is always open to feedback for improvements.",
    author: 'Emily Rodriguez',
    position: 'Product Manager, NextGen',
    avatar: 7,
  },
]

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-content2">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-foreground-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about their experience with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <Card
              key={testimonial.avatar}
              className="border border-divider bg-content1 shadow-sm"
            >
              <CardBody className="p-6">
                <div className="mb-6">
                  <Icon
                    icon="lucide:quote"
                    className="size-8 text-primary/60"
                  />
                </div>
                <p className="mb-6 text-foreground-700">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src={`https://img.heroui.chat/image/avatar?w=64&h=64&u=${testimonial.avatar}`}
                    alt={testimonial.author}
                    className="size-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-foreground-500">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
