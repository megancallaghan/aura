"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import { useState } from "react"

interface NavItem {
  title: string
  href?: string
  items?: NavItem[]
}

const docsNav: NavItem[] = [
  {
    title: "Get Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
      { title: "components.json", href: "/docs/components-json" },
      { title: "Theming", href: "/docs/theming" },
      { title: "Dark Mode", href: "/docs/dark-mode" },
      { title: "CLI", href: "/docs/cli" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Accordion", href: "/docs/components/accordion" },
      { title: "Alert", href: "/docs/components/alert" },
      { title: "Alert Dialog", href: "/docs/components/alert-dialog" },
      { title: "Avatar", href: "/docs/components/avatar" },
      { title: "Badge", href: "/docs/components/badge" },
      { title: "Button", href: "/docs/components/button" },
      { title: "Calendar", href: "/docs/components/calendar" },
      { title: "Card", href: "/docs/components/card" },
      { title: "Checkbox", href: "/docs/components/checkbox" },
      { title: "Collapsible", href: "/docs/components/collapsible" },
      { title: "Command", href: "/docs/components/command" },
      { title: "Context Menu", href: "/docs/components/context-menu" },
      { title: "Dialog", href: "/docs/components/dialog" },
      { title: "Drawer", href: "/docs/components/drawer" },
      { title: "Dropdown Menu", href: "/docs/components/dropdown-menu" },
      { title: "Form", href: "/docs/components/form" },
      { title: "Input", href: "/docs/components/input" },
      { title: "Label", href: "/docs/components/label" },
      { title: "Popover", href: "/docs/components/popover" },
      { title: "Progress", href: "/docs/components/progress" },
      { title: "Radio Group", href: "/docs/components/radio-group" },
      { title: "Select", href: "/docs/components/select" },
      { title: "Separator", href: "/docs/components/separator" },
      { title: "Sheet", href: "/docs/components/sheet" },
      { title: "Skeleton", href: "/docs/components/skeleton" },
      { title: "Slider", href: "/docs/components/slider" },
      { title: "Switch", href: "/docs/components/switch" },
      { title: "Table", href: "/docs/components/table" },
      { title: "Tabs", href: "/docs/components/tabs" },
      { title: "Textarea", href: "/docs/components/textarea" },
      { title: "Toast", href: "/docs/components/toast" },
      { title: "Toggle", href: "/docs/components/toggle" },
      { title: "Tooltip", href: "/docs/components/tooltip" },
    ],
  },
]

function NavGroup({ item }: { item: NavItem }) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-2 text-sm font-semibold text-foreground"
      >
        {item.title}
        <ChevronRight className={cn("h-4 w-4 transition-transform", isOpen && "rotate-90")} />
      </button>
      {isOpen && item.items && (
        <div className="grid grid-flow-row auto-rows-max text-sm">
          {item.items.map((subItem) => (
            <Link
              key={subItem.href}
              href={subItem.href || "#"}
              className={cn(
                "group flex w-full items-center rounded-md border border-transparent px-2 py-1.5 hover:underline",
                pathname === subItem.href ? "font-medium text-foreground" : "text-muted-foreground",
              )}
            >
              {subItem.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export function DocsSidebar() {
  return (
    <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r border-border md:sticky md:block">
      <div className="py-6 pr-6 lg:py-8">
        <nav className="w-full">
          {docsNav.map((item, index) => (
            <NavGroup key={index} item={item} />
          ))}
        </nav>
      </div>
    </aside>
  )
}
