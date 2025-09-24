import * as React from "react"
import { cn } from "../../../utils/cn"

const Slider = ({ min, max, value, onChange, className, ...props }) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={onChange}
      className={cn(
        "w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer",
        "accent-main [&::-webkit-slider-thumb]:bg-main",
        className
      )}
      {...props}
    />
  )
}

const RangeSlider = ({ minValue, maxValue, min, max, onChange, className }) => {
  return (
    <div className={cn("relative", className)}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-white/70">{min}</span>
        <span className="text-sm text-white/70">{max}</span>
      </div>
      
      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="h-1 w-full bg-gray-700 rounded"></div>
        </div>
        
        <div className="relative">
          <input
            type="range"
            min={min}
            max={max}
            value={minValue}
            onChange={(e) => onChange([parseInt(e.target.value), maxValue])}
            className="absolute w-full h-1 appearance-none bg-transparent pointer-events-none"
            style={{
              zIndex: 3,
              '--range-thumb-bg': 'rgb(255, 79, 0)',
              '--range-thumb-shadow': '0 0 0 3px rgba(255, 79, 0, 0.2)'
            }}
          />
          
          <input
            type="range"
            min={min}
            max={max}
            value={maxValue}
            onChange={(e) => onChange([minValue, parseInt(e.target.value)])}
            className="absolute w-full h-1 appearance-none bg-transparent pointer-events-none"
            style={{
              zIndex: 4,
              '--range-thumb-bg': 'rgb(255, 79, 0)',
              '--range-thumb-shadow': '0 0 0 3px rgba(255, 79, 0, 0.2)'
            }}
          />
        </div>
      </div>
      
      <div className="flex justify-between">
        <span className="text-sm text-white">{minValue}</span>
        <span className="text-sm text-white">{maxValue}</span>
      </div>
    </div>
  )
}

export { Slider, RangeSlider }