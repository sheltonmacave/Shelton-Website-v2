import * as React from "react"
import { cn } from "../../utils/cn"

function Badge({ className = "", variant = "default", ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variant === "secondary" && "bg-secondary text-secondary-foreground border-transparent",
        variant === "destructive" && "bg-destructive text-destructive-foreground border-transparent",
        variant === "outline" && "text-foreground border border-input",
        variant === "default" && "bg-primary text-primary-foreground border-transparent",
        className
      )}
      {...props}
    />
  )
}

export { Badge }
