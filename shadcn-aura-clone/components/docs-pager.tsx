import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DocsPagerProps {
  prev?: {
    title: string
    href: string
  }
  next?: {
    title: string
    href: string
  }
}

export function DocsPager({ prev, next }: DocsPagerProps) {
  return (
    <div className="flex flex-row items-center justify-between border-t border-border pt-6">
      {prev ? (
        <Link href={prev.href}>
          <Button variant="ghost" className="gap-2">
            <ChevronLeft className="h-4 w-4" />
            {prev.title}
          </Button>
        </Link>
      ) : (
        <div />
      )}
      {next && (
        <Link href={next.href}>
          <Button variant="ghost" className="gap-2">
            {next.title}
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      )}
    </div>
  )
}
