import * as React from "react"
import { ChevronDown } from "../icons/ChevronDown"
import { cn } from "../../../utils/cn"

// This is a simple mock of Radix UI NavigationMenu for styling purposes

const NavigationMenu = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <nav
      ref={ref}
      className={cn(
        "relative z-10 flex max-w-max flex-1 items-center justify-end",
        className
      )}
      {...props}
    >
      <ul className="group flex flex-1 list-none items-center justify-end space-x-1">
        {children}
      </ul>
    </nav>
  )
})
NavigationMenu.displayName = "NavigationMenu"

const NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-end space-x-1",
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = "NavigationMenuList"

const NavigationMenuItem = React.forwardRef(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("relative", className)} {...props} />
))
NavigationMenuItem.displayName = "NavigationMenuItem"

const NavigationMenuTrigger = React.forwardRef(({ className, children, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <button
      ref={ref}
      className={cn(
        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-white transition-colors hover:text-main focus:text-main focus:outline-none disabled:pointer-events-none disabled:opacity-50",
        isOpen ? "text-main" : "",
        className
      )}
      onClick={() => setIsOpen(!isOpen)}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn(
          "relative top-[1px] ml-1 h-3 w-3 transition duration-200",
          isOpen ? "rotate-180" : ""
        )}
        aria-hidden="true"
      />
    </button>
  );
})
NavigationMenuTrigger.displayName = "NavigationMenuTrigger"

const NavigationMenuContent = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "absolute left-0 top-full overflow-hidden rounded-md border border-second/20 bg-background/95 backdrop-blur p-1 text-white shadow-lg",
        className
      )}
      {...props}
    />
  );
})
NavigationMenuContent.displayName = "NavigationMenuContent"

const NavigationMenuLink = React.forwardRef(({ className, asChild, children, ...props }, ref) => {
  const Comp = asChild ? React.Fragment : "a";
  return (
    <Comp
      ref={ref}
      className={cn(
        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
})
NavigationMenuLink.displayName = "NavigationMenuLink"

const NavigationMenuViewport = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "origin-top-center absolute left-0 right-0 top-full flex justify-center perspective-[2000px]",
      className
    )}
    {...props}
  />
))
NavigationMenuViewport.displayName = "NavigationMenuViewport"

const ListItem = React.forwardRef(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <a
        ref={ref}
        href={href}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-main/10 hover:text-main focus:bg-main/10 focus:text-main",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none text-white">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-white/70">
          {children}
        </p>
      </a>
    </li>
  )
})
ListItem.displayName = "ListItem"

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuViewport,
  ListItem,
}