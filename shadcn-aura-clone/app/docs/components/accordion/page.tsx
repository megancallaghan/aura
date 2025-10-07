import { TableOfContents } from "@/components/table-of-contents"
import { DocsPager } from "@/components/docs-pager"
import { ComponentPreview } from "@/components/component-preview"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"

const toc = [
  { title: "Installation", url: "#installation" },
  { title: "Usage", url: "#usage" },
]

const installCode = `npx shadcn@latest add accordion`

const usageCode = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>`

export default function AccordionPage() {
  return (
    <>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Accordion</h1>
        <p className="text-lg text-muted-foreground">
          A vertically stacked set of interactive headings that each reveal a section of content.
        </p>
      </div>

      <div className="flex items-center gap-2 pt-4">
        <a
          href="https://www.radix-ui.com/docs/primitives/components/accordion"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
        >
          Docs
        </a>
        <span className="text-muted-foreground">•</span>
        <a
          href="https://www.radix-ui.com/docs/primitives/components/accordion#api-reference"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
        >
          API Reference
        </a>
      </div>

      <div className="pb-12 pt-8">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <ComponentPreview code={usageCode}>
            <div className="w-full max-w-md">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Product Information</AccordionTrigger>
                  <AccordionContent>
                    Our flagship product combines cutting-edge technology with sleek design. Built with premium
                    materials, it offers unparalleled performance and reliability.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Shipping Details</AccordionTrigger>
                  <AccordionContent>
                    We offer free shipping on all orders over $50. Standard delivery takes 3-5 business days, while
                    express shipping arrives within 1-2 business days.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Return Policy</AccordionTrigger>
                  <AccordionContent>
                    Not satisfied? Return your purchase within 30 days for a full refund. Items must be in original
                    condition with all tags attached.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </ComponentPreview>

          <h2 id="installation" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10">
            Installation
          </h2>

          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-sm font-medium border-b-2 border-primary">CLI</button>
            <button className="px-3 py-1.5 text-sm font-medium text-muted-foreground">Manual</button>
          </div>

          <div className="relative rounded-lg border border-border bg-muted/50 p-4 font-mono text-sm mt-6">
            <div className="flex items-center justify-between">
              <code>{installCode}</code>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Copy className="h-3 w-3" />
              </Button>
            </div>
          </div>

          <h2 id="usage" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10">
            Usage
          </h2>

          <div className="relative rounded-lg border border-border bg-muted/50 p-4 font-mono text-sm mt-6">
            <pre className="text-xs overflow-x-auto">{usageCode}</pre>
          </div>
        </div>
      </div>

      <DocsPager
        prev={{
          title: "Components",
          href: "/docs/components",
        }}
        next={{
          title: "Alert",
          href: "/docs/components/alert",
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
