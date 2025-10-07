import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ThemesPage() {
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

        {/* Theme Selector */}
        <section className="container pb-16 md:pb-24">
          <div className="flex flex-wrap gap-2 border-b border-border pb-4">
            {["Default", "Red", "Rose", "Orange", "Green", "Blue", "Yellow", "Violet"].map((theme, index) => (
              <button
                key={theme}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {theme}
              </button>
            ))}
          </div>

          {/* Theme Preview */}
          <div className="mt-12 rounded-lg border border-border bg-background p-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Example Dashboard */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Dashboard Example</h3>
                <Card>
                  <CardHeader>
                    <CardTitle>Create an account</CardTitle>
                    <CardDescription>Enter your email below to create your account</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="m@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Create account</Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Example Components */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Component Examples</h3>
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Notifications</CardTitle>
                      <CardDescription>You have 3 unread messages.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <p className="text-sm">Your call has been confirmed.</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <p className="text-sm">You have a new message!</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-muted" />
                          <p className="text-sm text-muted-foreground">Your subscription is expiring soon!</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex flex-wrap gap-2">
                    <Button>Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Destructive</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Example */}
          <div className="mt-12">
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Theme Preview</CardTitle>
                    <CardDescription>See how your theme looks with different components</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-3">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base">Total Revenue</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">$15,231.89</div>
                          <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base">Subscriptions</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">+2,350</div>
                          <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base">Sales</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">+12,234</div>
                          <p className="text-xs text-muted-foreground">+19% from last month</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="code" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <pre className="rounded-lg bg-muted p-4 text-sm overflow-x-auto">
                      <code>{`// Copy this into your globals.css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  // ... more theme variables
}`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-6 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
            <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built with the AURA design system. Customize and make it your own.
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}
