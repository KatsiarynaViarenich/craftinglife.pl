"use client"

import { useEffect, useRef, useState } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

export function ImageWithSkeleton({ className, onLoad, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  // If the browser already had this image cached, it can finish loading
  // before React attaches the onLoad listener below, so that event never
  // fires and the skeleton would pulse forever. Catch that case on mount.
  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true)
    }
  }, [])

  return (
    <>
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 bg-muted transition-opacity duration-500",
          loaded ? "opacity-0" : "opacity-100 animate-pulse"
        )}
      />
      <Image
        {...props}
        ref={imgRef}
        className={cn(className, "transition-opacity duration-500", loaded ? "opacity-100" : "opacity-0")}
        onLoad={(event) => {
          setLoaded(true)
          onLoad?.(event)
        }}
      />
    </>
  )
}
