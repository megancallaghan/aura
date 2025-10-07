import { TableOfContents } from "@/components/table-of-contents"
import { DocsPager } from "@/components/docs-pager"
import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"

const toc = [
  { title: "Installation", url: "#installation" },
  { title: "What is", url: "#what-is" },
  { title: "CLI", url: "#cli" },
]

export default function InstallationPage() {
  return (
    <>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Installation</h1>
        <p className="text-lg text-muted-foreground">
          How to install dependencies and structure your app to use AURA components.
        </p>
      </div>

      <div className="pb-12 pt-8">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h2 id="what-is" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10">
            What is it?
          </h2>

          <p>
            This is a component library. It's how you build component libraries. You can use any framework that supports
            React.
          </p>

          <p>
            Pick the framework you want to use and follow the installation instructions. If you are not sure, we
            recommend starting with Next.js.
          </p>

          <h2 id="cli" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10">
            CLI
          </h2>

          <p>Use the CLI to add components to your project.</p>

          <div className="relative rounded-lg border border-border bg-muted/50 p-4 font-mono text-sm mt-6">
            <div className="flex items-center justify-between">
              <code>npx shadcn@latest add button</code>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Copy className="h-3 w-3" />
              </Button>
            </div>
          </div>

          <p className="mt-6">You will be asked a few questions to configure components.json:</p>

          <div className="relative rounded-lg border border-border bg-muted/50 p-4 font-mono text-sm mt-6">
            <pre className="text-xs">
              {`Which style would you like to use? › Default
Which color would you like to use as base color? › Slate
Do you want to use CSS variables for colors? › yes`}
            </pre>
          </div>

          <p className="mt-6">That's it. You can now start adding components to your project.</p>
        </div>
      </div>

      <DocsPager
        prev={{
          title: "Introduction",
          href: "/docs",
        }}
        next={{
          title: "components.json",
          href: "/docs/components-json",
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
