import * as React from "react"
import { cn } from "../../../utils/cn"

const Grid = ({ className, columns = 3, children, ...props }) => {
  return (
    <div 
      className={cn(
        "grid gap-4",
        columns === 1 && "grid-cols-1",
        columns === 2 && "grid-cols-1 md:grid-cols-2",
        columns === 3 && "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
        columns === 4 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
        columns === 5 && "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const GridItem = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Grid, GridItem }