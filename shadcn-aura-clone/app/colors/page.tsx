import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy } from "lucide-react"

const auraColors = {
  Grey: ["#f9fafb", "#e7eaef", "#c8cfda", "#a9b4c6", "#8b99b2", "#6c7e9d", "#566581", "#434c5f", "#2c333f", "#1e2129"],
  Blue: ["#f6f8fe", "#d9e5fc", "#aac4f8", "#7ba4f4", "#4b83f1", "#2560ff", "#0d4df2", "#003db5", "#002978", "#001d56"],
  Green: ["#f5fcf7", "#ebf9ee", "#d0f1d7", "#a9e5bd", "#81d9a2", "#5ace8c", "#38bd7d", "#2d9568", "#216e4b", "#174b32"],
  Teal: ["#f3fcfc", "#dff6f6", "#c3f0f1", "#a0e5e8", "#6adcde", "#2fd0d2", "#1bbdbf", "#2c9ea0", "#187473", "#125555"],
  Violet: [
    "#fcf9ff",
    "#efe0ff",
    "#d3b7ff",
    "#ae82ff",
    "#9860ff",
    "#7d2eff",
    "#6d00eb",
    "#5700bb",
    "#450093",
    "#370076",
  ],
  Pink: ["#fff7fe", "#ffe6fb", "#ffc9f6", "#ffa6f0", "#fc71dc", "#ed49c7", "#c918ab", "#ab0089", "#830069", "#6d0051"],
  Red: ["#fff5f5", "#ffdfdf", "#ffc2c2", "#ffa8a8", "#ff7575", "#ff5757", "#f42f39", "#e40c2c", "#b30909", "#890000"],
  Orange: [
    "#fff9f5",
    "#ffe9d9",
    "#ffd8bb",
    "#ffc499",
    "#ffa96b",
    "#ff8731",
    "#ff6b00",
    "#da5c00",
    "#ad4800",
    "#893a01",
  ],
  Yellow: [
    "#fffbf0",
    "#fff5db",
    "#fff1cc",
    "#ffe8ad",
    "#ffda7a",
    "#ffcc48",
    "#f8b60f",
    "#eb9c00",
    "#b86e00",
    "#854900",
  ],
}

function ColorSwatch({ color, index }: { color: string; index: number }) {
  return (
    <button className="group relative flex flex-col items-center gap-2 rounded-lg p-3 hover:bg-muted transition-colors">
      <div className="h-16 w-full rounded-md border border-border shadow-sm" style={{ backgroundColor: color }} />
      <div className="flex w-full items-center justify-between text-xs">
        <span className="font-mono text-muted-foreground">{(index + 1) * 100}</span>
        <span className="font-mono text-muted-foreground">{color}</span>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="rounded-md bg-background/90 p-2 shadow-lg">
          <Copy className="h-4 w-4" />
        </div>
      </div>
    </button>
  )
}

export default function ColorsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container flex flex-col items-center gap-8 pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Pick a Color. Make it yours.
            </h1>
            <p className="max-w-[42rem] text-balance leading-relaxed text-muted-foreground sm:text-xl sm:leading-8">
              Try our hand-picked themes. Copy and paste them into your project. New theme editor coming soon.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="h-11 px-8">
              Browse Themes
            </Button>
            <Button size="lg" variant="outline" className="h-11 px-8 bg-transparent">
              Documentation
            </Button>
          </div>
        </section>

        {/* Color Palettes */}
        <section className="container pb-16 md:pb-24">
          <div className="space-y-12">
            {Object.entries(auraColors).map(([name, shades]) => (
              <div key={name} className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">{name}</h2>
                  <Button variant="outline" size="sm">
                    <Copy className="mr-2 h-4 w-4" />
                    Copy All
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-5 md:grid-cols-10">
                  {shades.map((color, index) => (
                    <ColorSwatch key={index} color={color} index={index} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Usage Guide */}
          <div className="mt-16 space-y-8">
            <h2 className="text-3xl font-bold">Using AURA Colors</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>In Your CSS</CardTitle>
                  <CardDescription>Use AURA colors directly in your stylesheets</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
                    <code>{`.button {
  background-color: #2560ff;
  color: #ffffff;
}

.card {
  border-color: #e7eaef;
}`}</code>
                  </pre>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>With Tailwind</CardTitle>
                  <CardDescription>Extend your Tailwind config with AURA colors</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
                    <code>{`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'aura-blue': '#2560ff',
        'aura-green': '#38bd7d',
      }
    }
  }
}`}</code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-6 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
            <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
              AURA Design System - A comprehensive color palette for modern applications.
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}
