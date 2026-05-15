"use client"

import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"

interface ProjectLightboxProps {
  isOpen: boolean
  onClose: () => void
  projectTitle: string
  projectCategory: string
  projectDescription: string
  // projectLocation: string
  projectYear: string
  images: string[]
}

export function ProjectLightbox({
  isOpen,
  onClose,
  projectTitle,
  projectCategory,
  projectDescription,
  // projectLocation,
  projectYear,
  images,
}: ProjectLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const { t } = useLanguage()

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    setIsZoomed(false)
  }, [images.length])

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    setIsZoomed(false)
  }, [images.length])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") handlePrevious()
      if (e.key === "ArrowRight") handleNext()
    },
    [isOpen, onClose, handlePrevious, handleNext]
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    setCurrentIndex(0)
    setIsZoomed(false)
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/95 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 md:p-6">
          <div className="text-card">
            <p className="text-card/60 text-sm uppercase tracking-wide mb-1">
              {projectCategory}
            </p>
            <h2 className="font-serif text-xl md:text-2xl">{projectTitle}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-card/80 hover:text-card transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main Image Area */}
        <div className="flex-1 relative flex items-center justify-center px-4 md:px-16">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            className="absolute left-2 md:left-6 z-10 p-2 md:p-3 bg-card/10 hover:bg-card/20 text-card rounded-full transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Image Container */}
          <div
            className={cn(
              "relative w-full h-full max-w-5xl max-h-[70vh] transition-transform duration-300",
              isZoomed ? "cursor-zoom-out scale-150" : "cursor-zoom-in"
            )}
            onClick={() => setIsZoomed(!isZoomed)}
          >
            <Image
              src={images[currentIndex]}
              alt={`${projectTitle} - Image ${currentIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-6 z-10 p-2 md:p-3 bg-card/10 hover:bg-card/20 text-card rounded-full transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Footer with thumbnails and info */}
        <div className="p-4 md:p-6">
          {/* Project Info */}
          <div className="text-center mb-4">
            <p className="text-card/70 text-sm max-w-2xl mx-auto">
              {projectDescription}
            </p>
            <div className="flex items-center justify-center gap-4 text-card/50 text-sm mt-2">
              {/* <span>{projectLocation}</span> */}
              <span>•</span>
              <span>{projectYear}</span>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex items-center justify-center gap-2 md:gap-3">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsZoomed(false)
                }}
                className={cn(
                  "relative w-12 h-12 md:w-16 md:h-16 overflow-hidden transition-all",
                  currentIndex === index
                    ? "ring-2 ring-primary opacity-100"
                    : "opacity-50 hover:opacity-80"
                )}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* Image Counter */}
          <div className="text-center mt-3">
            <span className="text-card/60 text-sm">
              {currentIndex + 1} / {images.length}
            </span>
          </div>

          {/* Zoom Hint */}
          <div className="flex items-center justify-center gap-2 mt-2 text-card/40 text-xs">
            {isZoomed ? (
              <>
                <ZoomOut className="w-3 h-3" />
                <span>{t.portfolio.lightbox.clickToZoomOut}</span>
              </>
            ) : (
              <>
                <ZoomIn className="w-3 h-3" />
                <span>{t.portfolio.lightbox.clickToZoom}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
