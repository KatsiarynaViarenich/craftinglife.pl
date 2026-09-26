"use client"

import { useEffect, useRef, useState } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

type ImageWithSkeletonProps = ImageProps & {
  // Optional smaller file served to narrow viewports (<768px) via a native
  // <picture> <source>, so mobile doesn't download the same large desktop
  // image. next/image can't do this itself while images.unoptimized is on
  // (it skips srcSet generation entirely in that mode).
  srcMobile?: string
  // External visibility intent (e.g. "is this the active slide in a
  // crossfade stack"), independent of whether the file itself has finished
  // loading. The image only ever shows once BOTH are true, so a caller can
  // toggle this without fighting the load-in fade below.
  visible?: boolean
  // The default skeleton (bg-muted) is a light tone that works on the
  // light page background, but reads as a jarring white flash on a dark
  // surface (e.g. the lightbox). Callers on a dark background pass this.
  dark?: boolean
}

export function ImageWithSkeleton({ className, onLoad, srcMobile, visible = true, dark = false, ...props }: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)
  const shown = loaded && visible

  // If the browser already had this image cached, it can finish loading
  // before React attaches the onLoad listener below, so that event never
  // fires and the skeleton would pulse forever. Catch that case on mount.
  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true)
    }
  }, [])

  const image = (
    <Image
      {...props}
      ref={imgRef}
      className={cn(className, "transition-opacity duration-500", shown ? "opacity-100" : "opacity-0")}
      onLoad={(event) => {
        setLoaded(true)
        onLoad?.(event)
      }}
    />
  )

  return (
    <>
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 transition-opacity duration-500",
          dark ? "bg-white/10" : "bg-muted",
          loaded ? "opacity-0" : "opacity-100 animate-pulse"
        )}
      />
      {srcMobile ? (
        <picture>
          <source media="(max-width: 767px)" srcSet={srcMobile} />
          {image}
        </picture>
      ) : (
        image
      )}
    </>
  )
}
