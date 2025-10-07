import { TableOfContents } from "@/components/table-of-contents"
import { DocsPager } from "@/components/docs-pager"
import { ComponentPreview } from "@/components/component-preview"
import { Button } from "@/components/ui/button"
import { Mail, Loader2 } from "lucide-react"

const toc = [
  { title: "Installation", url: "#installation" },
  { title: "Usage", url: "#usage" },
  { title: "Examples", url: "#examples" },
]

const defaultCode = `import { Button } from "@/components/ui/button"

<Button>Button</Button>`

const variantsCode = `<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`

const withIconCode = `<Button>
  <Mail className="mr-2 h-4 w-4" />
  Login with Email
</Button>`

const loadingCode = `<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Please wait
</Button>`

export default function ButtonPage() {
  return (
    <>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Button</h1>
        <p className="text-lg text-muted-foreground">Displays a button or a component that looks like a button.</p>
      </div>

      <div className="pb-12 pt-8">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <ComponentPreview code={defaultCode}>
            <Button>Button</Button>
          </ComponentPreview>

          <h2 id="installation" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10">
            Installation
          </h2>

          <div className="relative rounded-lg border border-border bg-muted/50 p-4 font-mono text-sm mt-6">
            <code>npx shadcn@latest add button</code>
          </div>

          <h2 id="usage" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10">
            Usage
          </h2>

          <div className="relative rounded-lg border border-border bg-muted/50 p-4 font-mono text-sm mt-6">
            <pre className="text-xs">{defaultCode}</pre>
          </div>

          <h2 id="examples" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10">
            Examples
          </h2>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Variants</h3>

          <ComponentPreview code={variantsCode}>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </ComponentPreview>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">With Icon</h3>

          <ComponentPreview code={withIconCode}>
            <Button>
              <Mail className="mr-2 h-4 w-4" />
              Login with Email
            </Button>
          </ComponentPreview>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Loading</h3>

          <ComponentPreview code={loadingCode}>
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          </ComponentPreview>

          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-8">Sizes</h3>

          <ComponentPreview>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </ComponentPreview>
        </div>
      </div>

      <DocsPager
        prev={{
          title: "Badge",
          href: "/docs/components/badge",
        }}
        next={{
          title: "Calendar",
          href: "/docs/components/calendar",
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
