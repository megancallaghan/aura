import { TableOfContents } from "@/components/table-of-contents"
import { DocsPager } from "@/components/docs-pager"

const toc = [
  { title: "Introduction", url: "#introduction" },
  { title: "Open Code", url: "#open-code" },
  { title: "Composition", url: "#composition" },
  { title: "Distribution", url: "#distribution" },
  { title: "Beautiful Defaults", url: "#beautiful-defaults" },
  { title: "AI-Ready", url: "#ai-ready" },
]

export default function DocsPage() {
  return (
    <>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Introduction</h1>
        <p className="text-lg text-muted-foreground">
          shadcn/ui is a set of beautifully designed, accessible components and a code distribution pattern. Works with
          your favorite frameworks like as Next.js, Vite, Astro, Laravel, and more.
        </p>
      </div>

      <div className="pb-12 pt-8">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p>This is not a component library. It's how you build component libraries.</p>

          <p>
            You know how traditional component libraries work: you install a package from NPM, import the components,
            and use them in your app.
          </p>

          <p>
            This approach works well until you need to customize a component to fit your design system or writing
            workarounds to override styles, or mixing component from different libraries with different APIs.
          </p>

          <p>This is what shadcn/ui aims to fix. It is built around the following principles:</p>

          <h2 id="open-code" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10">
            Open Code
          </h2>

          <p>
            The layer of your component code is open for modification. shadcn/ui hands you the actual component code.
            You have full control to customize and extend the components to your needs. This means:
          </p>

          <ul>
            <li>
              <strong>Full Transparency:</strong> You can easily how each component is built.
            </li>
            <li>
              <strong>Easy Customization:</strong> Modify any part of a component to fit your design system.
            </li>
            <li>
              <strong>No Vendor Lock-in:</strong> Own the code, no dependencies on external packages.
            </li>
            <li>
              <strong>AI Integration:</strong> Access to the code makes it straightforward for LLMs to read, understand,
              and even improve your components.
            </li>
          </ul>

          <p>
            We do not add opinionated options or an Open Code approach. We let you add opinionated options or wrap your
            components yourself.
          </p>

          <h2 id="composition" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10">
            Composition
          </h2>

          <p>
            Every component in shadcn/ui shares a common, composable interface. If a component can exist, we bring it to
            make it composable and adapt its style to match and work with the rest of the design system.
          </p>

          <p>
            A shared composable interface means it's predictable for both your team and AI. You are not learning
            different APIs for every new component. Even for third party ones.
          </p>

          <h2 id="distribution" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10">
            Distribution
          </h2>

          <p>
            shadcn/ui is also a code distribution system. It defines a schema for components and a CLI to distribute
            them.
          </p>

          <ul>
            <li>
              <strong>Schema:</strong> A set file structure that defines the components, their dependencies, and
              properties.
            </li>
            <li>
              <strong>CLI:</strong> A command line tool to distribute and install components across projects with clean
              separation.
            </li>
          </ul>

          <p>
            You can use the schema to distribute your components to other projects or have AI generate new components
            based on existing schema.
          </p>

          <h2 id="beautiful-defaults" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10">
            Beautiful Defaults
          </h2>

          <p>
            There are endless ways to build a large collection of components that have carefully chosen default styles.
            Every component is built to work well together as a cohesive system.
          </p>

          <ul>
            <li>
              <strong>Good Out of the Box:</strong> You'd like a clean and minimal look without extra work.
            </li>
            <li>
              <strong>Design Simple:</strong> Components naturally fit with one another. Each component is built to
              match the same design language and principles.
            </li>
            <li>
              <strong>Easily Customizable:</strong> If you want to change something, it's simple to override and extend
              the defaults.
            </li>
          </ul>

          <h2 id="ai-ready" className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-10">
            AI-Ready
          </h2>

          <p>
            The design of shadcn/ui makes it easy for AI to build with your own code. By open code and a shared
            composable interface, AI models can easily read, generate new components, and even suggest improvements or
            even create new components based on your existing design.
          </p>

          <p>
            AI should use open than your components were and suggest improvements or even create new components based on
            your existing design.
          </p>
        </div>
      </div>

      <DocsPager
        next={{
          title: "Installation",
          href: "/docs/installation",
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
