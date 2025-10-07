import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { ArrowRight, Sparkles } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container flex flex-col items-center gap-8 pt-24 pb-16 md:pt-32 md:pb-24">
          {/* Announcement Badge */}
          <Link
            href="/docs"
            className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            New Component Announced
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>

          {/* Hero Heading */}
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              The Foundation for your Design System
            </h1>
            <p className="max-w-[42rem] text-balance leading-relaxed text-muted-foreground sm:text-xl sm:leading-8">
              A set of beautifully designed components that you can customize, extend, and build on. Start here then
              make it your own. Open Source. Open Code.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/docs">
              <Button size="lg" className="h-11 px-8">
                Get Started
              </Button>
            </Link>
            <Link href="/docs/components/accordion">
              <Button size="lg" variant="outline" className="h-11 px-8 bg-transparent">
                View Components
              </Button>
            </Link>
          </div>
        </section>

        {/* Examples Preview Section */}
        <section className="container pb-16 md:pb-24">
          <div className="flex flex-col gap-8">
            {/* Section Header */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-bold tracking-tight">Examples</h2>
                <p className="text-muted-foreground">
                  Dashboard, cards, authentication. Some examples built using the components.
                </p>
              </div>
            </div>

            {/* Examples Tabs */}
            <div className="flex flex-wrap gap-2 border-b border-border">
              {["Dashboard", "Cards", "Tasks", "Playground", "Forms", "Music", "Authentication"].map((tab, index) => (
                <button
                  key={tab}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors hover:text-foreground",
                    index === 0 ? "border-b-2 border-primary text-foreground" : "text-muted-foreground",
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Example Preview Card */}
            <div className="rounded-lg border border-border bg-card overflow-hidden">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="text-6xl font-bold text-primary">AURA</div>
                  <p className="text-muted-foreground">Dashboard Example Preview</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-6 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
            <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built by{" "}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                shadcn
              </a>{" "}
              at{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                Vercel
              </a>
              . The source code is available on{" "}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}
