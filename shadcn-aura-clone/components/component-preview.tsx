"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"

interface ComponentPreviewProps {
  children: React.ReactNode
  code?: string
}

export function ComponentPreview({ children, code }: ComponentPreviewProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview")
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    if (code) {
      navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="relative my-6 rounded-lg border border-border">
      {/* Tabs */}
      <div className="flex items-center justify-between border-b border-border bg-muted/50 px-4">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab("preview")}
            className={cn(
              "px-3 py-2 text-sm font-medium transition-colors",
              activeTab === "preview"
                ? "border-b-2 border-primary text-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            Preview
          </button>
          {code && (
            <button
              onClick={() => setActiveTab("code")}
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors",
                activeTab === "code"
                  ? "border-b-2 border-primary text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              Code
            </button>
          )}
        </div>
        {code && activeTab === "code" && (
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={copyToClipboard}>
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === "preview" ? (
          <div className="flex min-h-[200px] items-center justify-center">{children}</div>
        ) : (
          <pre className="overflow-x-auto rounded-lg bg-muted p-4">
            <code className="text-sm">{code}</code>
          </pre>
        )}
      </div>
    </div>
  )
}
