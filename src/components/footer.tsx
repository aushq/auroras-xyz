export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {/* <div className="w-8 h-8 bg-gradient-to-br from-primary via-accent to-secondary rounded-lg" /> */}
            {/* <span className="text-lg font-bold tracking-tight">
              Aurora Studio
            </span> */}
          </div>

          <div className="text-sm text-muted-foreground text-center sm:text-right">
            © 2025 Aurora Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
