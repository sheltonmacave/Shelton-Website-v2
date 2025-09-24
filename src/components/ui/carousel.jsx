import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { cn } from "../../utils/cn"

const CarouselContext = React.createContext(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }
  return context
}

const Carousel = React.forwardRef(({
  opts,
  plugins,
  orientation = "horizontal",
  setApi,
  className,
  onSlideChange,
  ...props
}, ref) => {
  const [carouselRef, api] = useEmblaCarousel({
    ...opts,
    axis: orientation === "horizontal" ? "x" : "y",
  }, [Autoplay(), ...(plugins || [])])
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api) => {
    if (!api) return

    const selected = api.selectedScrollSnap()
    setSelectedIndex(selected)
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
    onSlideChange && onSlideChange(selected)
  }, [onSlideChange])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const scrollTo = React.useCallback((index) => {
    api?.scrollTo(index)
  }, [api])

  const handleKeyDown = React.useCallback((event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault()
      scrollPrev()
    } else if (event.key === "ArrowRight") {
      event.preventDefault()
      scrollNext()
    }
  }, [scrollPrev, scrollNext])

  React.useEffect(() => {
    if (!api) return

    setApi?.(api)
    onSelect(api)
    api.on("select", () => onSelect(api))
    api.on("reInit", () => onSelect(api))

    return () => {
      api.off("select", () => onSelect(api))
      api.off("reInit", () => onSelect(api))
    }
  }, [api, onSelect, setApi])

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api,
        opts,
        orientation,
        scrollPrev,
        scrollNext,
        scrollTo,
        canScrollPrev,
        canScrollNext,
        selectedIndex,
      }}
    >
      <div
        ref={ref}
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        {...props}
      />
    </CarouselContext.Provider>
  )
})
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()
  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()
  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { scrollPrev, canScrollPrev, orientation } = useCarousel()
  return (
    <button
      ref={ref}
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      className={cn(
        "absolute rounded-full flex items-center justify-center bg-background/80 backdrop-blur-sm border border-main/20 text-main hover:bg-main/10 disabled:opacity-50 disabled:cursor-not-allowed",
        orientation === "horizontal" ? "left-2 top-1/2 -translate-y-1/2 h-8 w-8" : "top-2 left-1/2 -translate-x-1/2 h-8 w-8 rotate-90",
        className
      )}
      {...props}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="m15 18-6-6 6-6"/>
      </svg>
      <span className="sr-only">Previous slide</span>
    </button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { scrollNext, canScrollNext, orientation } = useCarousel()
  return (
    <button
      ref={ref}
      onClick={scrollNext}
      disabled={!canScrollNext}
      className={cn(
        "absolute rounded-full flex items-center justify-center bg-background/80 backdrop-blur-sm border border-main/20 text-main hover:bg-main/10 disabled:opacity-50 disabled:cursor-not-allowed",
        orientation === "horizontal" ? "right-2 top-1/2 -translate-y-1/2 h-8 w-8" : "bottom-2 left-1/2 -translate-x-1/2 h-8 w-8 rotate-90",
        className
      )}
      {...props}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="m9 18 6-6-6-6"/>
      </svg>
      <span className="sr-only">Next slide</span>
    </button>
  )
})
CarouselNext.displayName = "CarouselNext"

const CarouselDots = React.forwardRef(({ className, ...props }, ref) => {
  const { api, selectedIndex } = useCarousel()
  const [slideCount, setSlideCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) return
    setSlideCount(api.scrollSnapList().length)
  }, [api])

  return (
    <div
      ref={ref}
      className={cn("flex justify-center gap-2 mt-4", className)}
      {...props}
    >
      {[...Array(slideCount)].map((_, index) => (
        <button
          key={index}
          onClick={() => api?.scrollTo(index)}
          className={cn(
            "h-2 w-2 rounded-full",
            selectedIndex === index ? "bg-main" : "bg-main/30"
          )}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  )
})
CarouselDots.displayName = "CarouselDots"

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselDots }