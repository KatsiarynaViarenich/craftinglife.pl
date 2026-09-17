"use client"

import { useState, useEffect, useCallback } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { ImageWithSkeleton } from "@/components/image-with-skeleton"
import useEmblaCarousel from "embla-carousel-react"

interface ProjectLightboxProps {
  isOpen: boolean
  onClose: () => void
  projectTitle: string
  projectCategory: string
  projectDescription: string
  projectLocation: string
  projectYear: string
  images: string[]
}

export function ProjectLightbox({
  isOpen,
  onClose,
  projectTitle,
  projectCategory,
  projectDescription,
  projectLocation,
  projectYear,
  images,
}: ProjectLightboxProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const handleNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  
  const handleThumbnailClick = useCallback((index: number) => {
    emblaApi?.scrollTo(index)
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCurrentIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setCurrentIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  // Reset to first slide when opened
  useEffect(() => {
    if (isOpen && emblaApi) {
      emblaApi.scrollTo(0, true) // Instantly jump to 0
    }
  }, [isOpen, emblaApi])

  // Keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") handlePrevious()
      if (e.key === "ArrowRight") handleNext()
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose, handlePrevious, handleNext])

  // Lock scroll + browser back button
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      window.history.pushState({ lightbox: true }, "")
      const handlePopState = () => onClose()
      window.addEventListener("popstate", handlePopState)
      return () => {
        window.removeEventListener("popstate", handlePopState)
        document.body.style.overflow = "unset"
      }
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-foreground/95 backdrop-blur-sm" onClick={onClose} />

      <div className="relative z-10 w-full h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6">
          <div className="text-card">
            <p className="text-card/60 text-sm uppercase tracking-wide mb-1">{projectCategory}</p>
            <h2 className="font-serif text-xl md:text-2xl">{projectTitle}</h2>
          </div>
          <button onClick={onClose} className="p-2 text-card/80 hover:text-card transition-colors" aria-label="Close">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Swipeable carousel using Embla */}
        <div className="flex-1 relative overflow-hidden flex flex-col justify-center">
          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {images.map((img, idx) => (
                <div key={idx} className="flex-[0_0_100%] min-w-0 flex items-center justify-center px-4 md:px-16">
                  <div className="relative w-full h-[60vh] md:h-[70vh]">
                    <ImageWithSkeleton
                      src={img}
                      alt={`${projectTitle} – ${idx + 1}`}
                      fill
                      className="object-contain"
                      priority={idx === 0}
                      sizes="100vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 bg-card/10 hover:bg-card/20 text-card rounded-full transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 bg-card/10 hover:bg-card/20 text-card rounded-full transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Footer */}
        <div className="p-4 md:p-6">
          <div className="text-center mb-4">
            <p className="text-card/70 text-sm max-w-2xl mx-auto">{projectDescription}</p>
            <div className="flex items-center justify-center gap-4 text-card/50 text-sm mt-2">
              <span>{projectLocation}</span>
              <span>•</span>
              <span>{projectYear}</span>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={cn(
                  "relative w-12 h-12 md:w-16 md:h-16 overflow-hidden transition-all shrink-0",
                  currentIndex === index
                    ? "ring-2 ring-primary opacity-100"
                    : "opacity-50 hover:opacity-80"
                )}
              >
                <ImageWithSkeleton src={image} alt={`Thumbnail ${index + 1}`} fill className="object-cover" sizes="(max-width: 768px) 48px, 64px" />
              </button>
            ))}
          </div>

          <div className="text-center mt-3">
            <span className="text-card/60 text-sm">{currentIndex + 1} / {images.length}</span>
          </div>
        </div>
      </div>
    </div>
  )
}