// components/ui/button.tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import Link from "next/link"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-satoshi font-medium transition-shadow focus:outline-none focus:ring-2 focus:ring-black/10 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[hsl(64,83%,65%)] text-black hover:shadow-[0_6px_24px_rgba(0,0,0,0.12)]",
        secondary:
          "bg-black text-white hover:bg-black/90",
        ghost:
          "bg-black/[0.03] text-black hover:bg-black/[0.06]",
        outline:
          "border border-black/10 bg-white hover:bg-black/5",
        link: "text-black underline-offset-4 hover:underline",
      },
      size: {
        lg: "h-12 px-6 text-[16px]",
        md: "h-11 px-5 text-[15px]",
        sm: "h-9 px-4 text-[14px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  href?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, href, children, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size, className }))
    
    // If href is provided (and not asChild), wrap in Link
    if (href && !asChild) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      )
    }
    
    // If asChild, use Slot to delegate to child component
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={classes}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
