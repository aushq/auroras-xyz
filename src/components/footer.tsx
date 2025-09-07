import { Divider, Link } from '@heroui/react'
import { Icon } from '@iconify/react'

const footerLinks = [
  {
    title: 'Product',
    links: [
      { name: 'Features', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Integrations', href: '#' },
      { name: 'Changelog', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Partners', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Support', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Terms', href: '#' },
      { name: 'Privacy', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Cookies', href: '#' },
    ],
  },
]

const socialLinks = [
  { icon: 'lucide:twitter', href: '#' },
  { icon: 'lucide:linkedin', href: '#' },
  { icon: 'lucide:facebook', href: '#' },
  { icon: 'lucide:instagram', href: '#' },
  { icon: 'lucide:github', href: '#' },
]

export const Footer = () => {
  return (
    <footer className="bg-content1 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <Icon icon="lucide:hexagon" className="text-primary size-8" />
              <p className="font-semibold text-inherit ml-2">Acme Inc</p>
            </div>
            <p className="text-foreground-600 mb-6">
              Empowering businesses with innovative solutions since 2014.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(social => (
                <Link
                  key={social.icon}
                  href={social.href}
                  className="text-foreground-500 hover:text-primary"
                >
                  <Icon icon={social.icon} className="size-5" />
                </Link>
              ))}
            </div>
          </div>

          {footerLinks.map(group => (
            <div key={group.title} className="col-span-1">
              <h3 className="font-semibold mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map(link => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-foreground-600 hover:text-primary text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Divider className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground-500">
            © {new Date().getFullYear()} Acme Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-foreground-500 hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-foreground-500 hover:text-primary"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-sm text-foreground-500 hover:text-primary"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
