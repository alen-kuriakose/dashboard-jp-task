import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const statusIndicatorVariants = cva(
  "inline-flex items-center text-sm font-medium",
  {
    variants: {
      variant: {
        "in-progress": "text-blue-600",
        complete: "text-green-600",
        pending: "text-sky-600",
        approved: "text-amber-600",
        rejected: "text-red-600",
      },
    },
    defaultVariants: {
      variant: "pending",
    },
  }
)

export type StatusIndicatorVariant = VariantProps<typeof statusIndicatorVariants>["variant"]

export interface StatusIndicatorProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: StatusIndicatorVariant
}

function StatusIndicator({ className, variant, children, ...props }: StatusIndicatorProps) {
  return (
    <span className={cn(statusIndicatorVariants({ variant }), className)} {...props}>
      <span className={`mr-1.5 h-1.5 w-1.5 rounded-full bg-current`} />
      {children}
    </span>
  )
}

export { StatusIndicator, statusIndicatorVariants }