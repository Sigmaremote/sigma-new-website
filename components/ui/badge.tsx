// components/ui/badge.tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-2 rounded-full border font-satoshi shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-black/10 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-black/10 bg-white/90 px-3 py-1 text-[12px] font-medium",
        secondary:
          "border-transparent bg-black text-white px-3 py-1 text-[12px] font-medium",
        outline: 
          "border-black/20 bg-transparent px-3 py-1 text-[12px] font-medium",
        news:
          "border-black/10 bg-white/90 px-3 py-1 text-[12px] font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean
}

function Badge({ className, variant, asChild = false, ...props }: BadgeProps) {
  const Comp = asChild ? Slot : "div"
  return (
    <Comp className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
