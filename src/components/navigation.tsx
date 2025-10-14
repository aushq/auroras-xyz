'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br  rounded-lg">
              <Image
                src="/logo.png"
                width={40}
                height={40}
                alt="Auroras Logo"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight">
              Auroras Inc.
            </span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:inline-flex"
              asChild
            >
              <Link href="/jobs">Careers</Link>
            </Button>
            {/* <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <Link href="mailto:recruit@auroras.xyz">Contact</Link>
            </Button> */}
          </div>
        </div>
      </div>
    </nav>
  )
}
