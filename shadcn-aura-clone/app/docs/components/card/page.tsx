import { TableOfContents } from "@/components/table-of-contents"
import { DocsPager } from "@/components/docs-pager"
import { ComponentPreview } from "@/components/component-preview"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const toc = [
  { title: "Installation", url: "#installation" },
  { title: "Usage", url: "#usage" },
  { title: "Examples", url: "#examples" },
]

const usageCode = `import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>`

export default function CardPage() {
  return (
    <>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Card</h1>
        <p className="text-lg text-muted-foreground">Displays a card with header, content, and footer.</p>
      </div>

      <div className="pb-12 pt-8">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <ComponentPreview code={usageCode}>
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Create project</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Name of your project" />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
              </CardFooter>
            </Card>
          </ComponentPreview>

          <h2 id="installation" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10">
            Installation
          </h2>

          <div className="relative rounded-lg border border-border bg-muted/50 p-4 font-mono text-sm mt-6">
            <code>npx shadcn@latest add card</code>
          </div>

          <h2 id="usage" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10">
            Usage
          </h2>

          <div className="relative rounded-lg border border-border bg-muted/50 p-4 font-mono text-sm mt-6">
            <pre className="text-xs overflow-x-auto">{usageCode}</pre>
          </div>

          <h2 id="examples" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10">
            Examples
          </h2>

          <ComponentPreview>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Total Revenue</CardTitle>
                  <CardDescription>+20.1% from last month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Subscriptions</CardTitle>
                  <CardDescription>+180.1% from last month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2,350</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Sales</CardTitle>
                  <CardDescription>+19% from last month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+12,234</div>
                </CardContent>
              </Card>
            </div>
          </ComponentPreview>
        </div>
      </div>

      <DocsPager
        prev={{
          title: "Calendar",
          href: "/docs/components/calendar",
        }}
        next={{
          title: "Checkbox",
          href: "/docs/components/checkbox",
        }}
      />

      <aside className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 pt-10">
          <TableOfContents items={toc} />
        </div>
      </aside>
    </>
  )
}
