"use client"

import { cn } from "@/lib/utils"

interface TocItem {
  title: string
  url: string
  items?: TocItem[]
}

interface TableOfContentsProps {
  items: TocItem[]
}

export function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <div className="space-y-2">
      <p className="font-medium">On This Page</p>
      <Tree items={items} />
    </div>
  )
}

function Tree({ items }: { items: TocItem[] }) {
  return items?.length ? (
    <ul className="m-0 list-none">
      {items.map((item, index) => (
        <li key={index} className="mt-0 pt-2">
          <a
            href={item.url}
            className={cn(
              "inline-block no-underline transition-colors hover:text-foreground text-muted-foreground text-sm",
            )}
          >
            {item.title}
          </a>
          {item.items?.length ? (
            <ul className="m-0 list-none pl-4">
              {item.items.map((subItem, subIndex) => (
                <li key={subIndex} className="mt-0 pt-2">
                  <a
                    href={subItem.url}
                    className={cn(
                      "inline-block no-underline transition-colors hover:text-foreground text-muted-foreground text-sm",
                    )}
                  >
                    {subItem.title}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ul>
  ) : null
}
