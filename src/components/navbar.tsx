import {
  Button,
  Navbar as HeroNavbar,
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@heroui/react'
import { Icon } from '@iconify/react'

export const Navbar = () => {
  return (
    <HeroNavbar maxWidth="xl" className="bg-background/70 backdrop-blur-md">
      <NavbarBrand>
        <Icon icon="lucide:hexagon" className="text-primary size-8" />
        <p className="font-semibold text-inherit ml-2">Acme Inc</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#features" className="font-medium">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#about" className="font-medium">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#testimonials" className="font-medium">
            Testimonials
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Link href="#" className="font-medium">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            className="font-medium"
          >
            Get Started
          </Button>
        </NavbarItem>
      </NavbarContent>
    </HeroNavbar>
  )
}
