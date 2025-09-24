import * as React from "react"
import { cn } from "../../../utils/cn"

const DropdownMenu = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("relative inline-block text-left", className)} {...props} />
  )
})
DropdownMenu.displayName = "DropdownMenu"

const DropdownMenuTrigger = React.forwardRef(({ className, children, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false)
  
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex w-full justify-center gap-x-1.5 rounded-md bg-background px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-background/80",
        className
      )}
      onClick={() => setIsOpen(!isOpen)}
      {...props}
    >
      {children}
    </button>
  )
})
DropdownMenuTrigger.displayName = "DropdownMenuTrigger"

const DropdownMenuContent = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div 
      ref={ref}
      className={cn(
        "absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-background/80 backdrop-blur-md shadow-lg ring-1 ring-black ring-opacity-5 z-50",
        className
      )}
      {...props}
    >
      <div className="py-1">
        {children}
      </div>
    </div>
  )
})
DropdownMenuContent.displayName = "DropdownMenuContent"

const DropdownMenuItem = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <a
      ref={ref}
      className={cn(
        "block px-4 py-2 text-sm text-white hover:bg-main/20 hover:text-main",
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
})
DropdownMenuItem.displayName = "DropdownMenuItem"

export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem }