import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

const blocks = [
  {
    title: "Authentication",
    description: "Login and signup forms with validation",
    category: "Forms",
    image: "/authentication-form.jpg",
  },
  {
    title: "Dashboard",
    description: "Analytics dashboard with charts and metrics",
    category: "Dashboard",
    image: "/analytics-dashboard.png",
  },
  {
    title: "Pricing",
    description: "Pricing tables with feature comparison",
    category: "Marketing",
    image: "/pricing-table.png",
  },
  {
    title: "Settings",
    description: "User settings and preferences panel",
    category: "Application",
    image: "/settings-panel.png",
  },
  {
    title: "Team",
    description: "Team member cards and profiles",
    category: "Application",
    image: "/team-profiles.jpg",
  },
  {
    title: "Notifications",
    description: "Notification center with filters",
    category: "Application",
    image: "/notifications-concept.png",
  },
]

export default function BlocksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container flex flex-col items-center gap-8 pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Building Blocks for the Web
            </h1>
            <p className="max-w-[42rem] text-balance leading-relaxed text-muted-foreground sm:text-xl sm:leading-8">
              Beautifully designed. Copy and paste into your apps. Open Source.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="h-11 px-8">
              Browse Blocks
            </Button>
            <Button size="lg" variant="outline" className="h-11 px-8 bg-transparent">
              View on GitHub
            </Button>
          </div>
        </section>

        {/* Filters */}
        <section className="container pb-8">
          <Tabs defaultValue="all" className="w-full">
            <TabsList>
              <TabsTrigger value="all">All Blocks</TabsTrigger>
              <TabsTrigger value="forms">Forms</TabsTrigger>
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
              <TabsTrigger value="application">Application</TabsTrigger>
            </TabsList>
          </Tabs>
        </section>

        {/* Blocks Grid */}
        <section className="container pb-16 md:pb-24">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blocks.map((block, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img
                    src={block.image || "/placeholder.svg"}
                    alt={block.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{block.title}</CardTitle>
                    <Badge variant="secondary">{block.category}</Badge>
                  </div>
                  <CardDescription>{block.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Block
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container pb-16 md:pb-24">
          <Card className="bg-muted/50">
            <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
              <h2 className="text-2xl font-bold">Want to contribute?</h2>
              <p className="text-muted-foreground max-w-md">
                We're always looking for new blocks. Submit your own and help the community build better apps faster.
              </p>
              <Button size="lg">Submit a Block</Button>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-6 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
            <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
              Building blocks powered by the AURA design system.
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}
