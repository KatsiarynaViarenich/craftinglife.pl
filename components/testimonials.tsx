"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"
import useEmblaCarousel from "embla-carousel-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type ReviewKey = "review1" | "review2" | "review3" | "review4"
const reviewKeys: ReviewKey[] = ["review1", "review2", "review3", "review4"]

export function Testimonials() {
  const { t, language } = useLanguage()
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [currentIndex, setCurrentIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
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

  const readMoreText = {
    pl: "Czytaj pełną opinię",
    uk: "Читати повний відгук",
    ru: "Читать полный отзыв",
    en: "Read full review"
  }[language] || "Read full review"

  return (
    <section id="testimonials" className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary-foreground/80 uppercase tracking-widest text-sm mb-4">{t.testimonials.tagline}</p>
          <h2 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-6">
            {t.testimonials.title} <span className="">{t.testimonials.titleHighlight}</span>
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
            {t.testimonials.description}
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Quote className="h-16 w-16 text-primary-foreground/20 absolute -top-4 -left-4 z-10 hidden md:block" />

            <div className="bg-primary-foreground/10 flex flex-col relative">
              <div className="overflow-hidden w-full" ref={emblaRef}>
                <div className="flex touch-pan-y">
                  {reviewKeys.map((key) => {
                    const originalText = t.testimonials.reviews[key].text;
                    const isLong = originalText.length > 340;

                    // Bezpieczne ucięcie na 320 znaków by nie uciąć w połowie słowa
                    let reviewText = originalText;
                    if (isLong) {
                      const cutPos = originalText.lastIndexOf(" ", 340);
                      reviewText = originalText.slice(0, cutPos > 0 ? cutPos : 340) + "...";
                    }

                    return (
                      <div key={key} className="flex-[0_0_100%] min-w-0 flex flex-col p-8 md:p-12">
                        <div className="flex-grow mb-8">
                          <p className="text-primary-foreground text-lg md:text-xl leading-relaxed whitespace-pre-wrap">
                            {reviewText}
                          </p>
                          {isLong && (
                            <Dialog>
                              <DialogTrigger asChild>
                                <button className="mt-3 text-primary-foreground/70 hover:text-primary-foreground underline underline-offset-4 text-sm font-medium transition-colors">
                                  {readMoreText}
                                </button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-xl max-h-[85vh] overflow-y-auto">
                                <DialogHeader>
                                  <DialogTitle className="font-serif text-2xl mb-1">{t.testimonials.reviews[key].author}</DialogTitle>
                                  <p className="text-muted-foreground text-sm">
                                    {t.testimonials.reviews[key].role} • {t.testimonials.reviews[key].location}
                                  </p>
                                </DialogHeader>
                                <p className="text-foreground leading-relaxed mt-4 whitespace-pre-wrap">
                                  {originalText}
                                </p>
                              </DialogContent>
                            </Dialog>
                          )}
                        </div>

                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 pt-8 border-t border-primary-foreground/10 mt-auto">
                          <div>
                            <p className="font-serif text-xl text-primary-foreground">
                              {t.testimonials.reviews[key].author}
                            </p>
                            <p className="text-primary-foreground/70 text-sm">
                              {t.testimonials.reviews[key].role} • {t.testimonials.reviews[key].location}
                            </p>
                          </div>

                          {/* Hidden on mobile, visible on desktop */}
                          <div className="hidden md:flex gap-2">
                            <button
                              onClick={scrollPrev}
                              className="p-2 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                              aria-label="Previous testimonial"
                            >
                              <ChevronLeft className="h-5 w-5" />
                            </button>
                            <button
                              onClick={scrollNext}
                              className="p-2 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                              aria-label="Next testimonial"
                            >
                              <ChevronRight className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Mobile controls (arrows + dots) */}
              <div className="flex items-center justify-between px-8 pb-8 md:hidden">
                <button
                  onClick={scrollPrev}
                  className="p-2 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <div className="flex justify-center gap-2">
                  {reviewKeys.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => scrollTo(index)}
                      className={cn(
                        "w-2 h-2 rounded-full transition-colors",
                        index === currentIndex
                          ? "bg-primary-foreground"
                          : "bg-primary-foreground/30"
                      )}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={scrollNext}
                  className="p-2 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Desktop dots */}
              <div className="hidden md:flex justify-center gap-2 absolute -bottom-10 left-0 right-0">
                {reviewKeys.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-colors",
                      index === currentIndex
                        ? "bg-primary-foreground"
                        : "bg-primary-foreground/30"
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
