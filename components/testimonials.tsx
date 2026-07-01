"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"

type ReviewKey = "review1" | "review2" | "review3" | "review4"

const reviewKeys: ReviewKey[] = ["review1", "review2", "review3", "review4"]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useLanguage()

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewKeys.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + reviewKeys.length) % reviewKeys.length)
  }

  const currentReview = t.testimonials.reviews[reviewKeys[currentIndex]]

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
            <Quote className="h-16 w-16 text-primary-foreground/20 absolute -top-4 -left-4" />
            
            <div className="bg-primary-foreground/10 p-8 md:p-12 min-h-[400px] flex flex-col">
              <div className="grid grid-cols-1 flex-grow">
                {reviewKeys.map((key, index) => (
                  <div
                    key={key}
                    className={cn(
                      "col-start-1 row-start-1 transition-opacity duration-500",
                      index === currentIndex ? "opacity-100 z-10" : "opacity-0 pointer-events-none"
                    )}
                  >
                    <p className="text-primary-foreground text-lg md:text-xl leading-relaxed mb-8">
                      {t.testimonials.reviews[key].text}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0 mt-auto pt-8 border-t border-primary-foreground/10">
                <div>
                  <p className="font-serif text-xl text-primary-foreground">
                    {t.testimonials.reviews[reviewKeys[currentIndex]].author}
                  </p>
                  <p className="text-primary-foreground/70 text-sm">
                    {t.testimonials.reviews[reviewKeys[currentIndex]].role} • {t.testimonials.reviews[reviewKeys[currentIndex]].location}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {reviewKeys.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
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
    </section>
  )
}
