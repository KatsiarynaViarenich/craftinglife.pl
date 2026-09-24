"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"
import { ProjectLightbox } from "./project-lightbox"
import { ImageWithSkeleton } from "@/components/image-with-skeleton"
import { Eye, Images, ArrowUpRight, ArrowRight } from "lucide-react"

const EASE_OUT = [0.16, 1, 0.3, 1] as const

// Grid cards only ever need a small image; the full-size file is reserved
// for the lightbox where photos are viewed much larger.
function toThumb(src: string) {
  return src.replace(/\.webp$/, "-thumb.webp")
}

type CategoryKey = "all" | "residential" | "commercial"
const projectsData = [
  {
    id: 1,
    title: "Residential Project 1",
    titleKey: "1" as const,
    category: "residential" as const,
    location: "ul. Czajkowskiego, Wrocław",
    year: "2024",
    images: [
      "/images/residential/1/1.webp",
      "/images/residential/1/2.webp",
      "/images/residential/1/3.webp",
    ],
  },
  {
    id: 2,
    title: "Residential Project 2",
    titleKey: "2" as const,
    category: "commercial" as const,
    location: "Resi4Rent, Grabiszyńska, Wrocław",
    year: "2024",
    images: [
      "/images/residential/2/1.webp",
      "/images/residential/2/2.webp",
    ],
  },
  {
    id: 3,
    title: "Residential Project 3",
    titleKey: "3" as const,
    category: "residential" as const,
    location: "Krucza, Wrocław",
    year: "2024",
    images: [
      "/images/residential/3/1.webp",
      "/images/residential/3/2.webp",
      "/images/residential/3/3.webp",
      "/images/residential/3/4.webp",
      "/images/residential/3/5.webp",
      "/images/residential/3/6.webp",

    ],
  },
  {
    id: 4,
    title: "Residential Project 4",
    titleKey: "4" as const,
    category: "commercial" as const,
    location: "Westerbork, Holandia",
    year: "2025",
    images: [
      "/images/residential/4/1.webp",
      "/images/residential/4/2.webp",
      "/images/residential/4/3.webp",
      "/images/residential/4/4.webp",
    ],
  },
  {
    id: 5,
    title: "Residential Project 5",
    titleKey: "5" as const,
    category: "residential" as const,
    location: "ul. Czajkowskiego, Wrocław",
    year: "2024",
    images: [
      "/images/residential/5/1.webp",
      "/images/residential/5/2.webp",
      "/images/residential/5/3.webp",
    ],
  },
  {
    id: 6,
    title: "Residential Project 6",
    titleKey: "6" as const,
    category: "residential" as const,
    location: "Psie Pole, Wrocław",
    year: "2024",
    images: [
      "/images/residential/6/1.webp",
      "/images/residential/6/2.webp",
      "/images/residential/6/3.webp",
      "/images/residential/6/4.webp",
      "/images/residential/6/5.webp",
    ],
  },
  {
    id: 7,
    title: "Commercial Project 1",
    titleKey: "7" as const,
    category: "commercial" as const,
    location: "Grabiszyńska, Wrocław",
    year: "2026",
    images: [
      "/images/commercial/1/1.webp",
      "/images/commercial/1/2.webp",
      "/images/commercial/1/3.webp"
    ],
  },
  {
    id: 8,
    title: "Commercial Project 2",
    titleKey: "8" as const,
    category: "commercial" as const,
    location: "Grabiszyńska, Wrocław",
    year: "2026",
    images: [
      "/images/commercial/2/1.webp",
      "/images/commercial/2/2.webp",
    ],
  },
  {
    id: 9,
    title: "Commercial Project 3",
    titleKey: "9" as const,
    category: "commercial" as const,
    location: "Świętego Mikołaja, Wrocław",
    year: "2023",
    images: [
      "/images/commercial/3/1.webp"
    ],
  },

]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [hoverImageIndex, setHoverImageIndex] = useState(0)
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null)
  const { t } = useLanguage()

  useEffect(() => {
    if (hoveredProject === null) {
      setHoverImageIndex(0)
      return
    }
    const project = projectsData.find((p) => p.id === hoveredProject)
    const count = project ? Math.min(project.images.length, 4) : 0
    if (count <= 1) return

    const id = setInterval(() => {
      setHoverImageIndex((i) => (i + 1) % count)
    }, 3000)
    return () => clearInterval(id)
  }, [hoveredProject])

  const categories: { key: CategoryKey; label: string }[] = [
    { key: "all", label: t.portfolio.filters.all },
    { key: "residential", label: t.portfolio.filters.residential },
    { key: "commercial", label: t.portfolio.filters.commercial },
  ]

  const filteredProjects = activeCategory === "all"
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory)

  const handleProjectClick = (project: typeof projectsData[0]) => {
    setSelectedProject(project)
  }

  const handleCloseLightbox = () => {
    setSelectedProject(null)
  }

  return (
    <>
      <section id="projects" className="py-24 bg-background scroll-mt-20">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0, margin: "0px 0px 0px 0px" }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
          >
            <p className="text-primary uppercase tracking-widest text-sm mb-4">{t.portfolio.tagline}</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              {t.portfolio.title} <span className="text-primary">{t.portfolio.titleHighlight}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t.portfolio.description}
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={cn(
                  "px-6 py-2 text-sm uppercase tracking-wide transition-all",
                  activeCategory === category.key
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const projectTranslation = t.portfolio.projects[project.titleKey]
                const isHovered = hoveredProject === project.id
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.3, ease: EASE_OUT } }}
                    viewport={{ once: true, amount: 0, margin: "0px 0px 0px 0px" }}
                    transition={{ duration: 0.55, delay: index * 0.07, ease: EASE_OUT }}
                    className="group relative overflow-hidden cursor-pointer"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    onClick={() => handleProjectClick(project)}
                  >
                    <div className="aspect-[4/3] relative overflow-hidden">
                      {isHovered ? (
                        project.images.slice(0, 4).map((img, imgIdx) => (
                          <Image
                            key={img}
                            src={toThumb(img)}
                            alt={projectTranslation.title}
                            fill
                            className={cn(
                              "object-cover transition-all duration-500 ease-out group-hover:scale-105",
                              imgIdx === hoverImageIndex ? "opacity-100" : "opacity-0"
                            )}
                          />
                        ))
                      ) : (
                        <ImageWithSkeleton
                          src={toThumb(project.images[0])}
                          alt={projectTranslation.title}
                          fill
                          className="object-cover transition-all duration-500 ease-out group-hover:scale-105"
                        />
                      )}

                      {/* Image count badge */}
                      <div className="absolute top-3 right-3 bg-foreground/70 text-card px-2 py-1 text-xs flex items-center gap-1.5 z-10 rounded-sm shadow-sm backdrop-blur-md">
                        <Images className="w-3.5 h-3.5" />
                        {project.images.length}
                      </div>

                      {/* Gradient + CTA slide up on hover */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent pt-12 pb-4 px-5 z-10 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                        <div className="flex items-center justify-end gap-1.5 text-white/80 group-hover:text-white transition-colors duration-300">
                          <span className="text-[11px] font-normal">{t.portfolio.viewProject}</span>
                          <ArrowRight strokeWidth={1} className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>

                    {/* Project Info Below Image */}
                    <div className="bg-card px-4 pt-4 pb-2">
                      <p className="text-primary text-[10px] font-bold uppercase tracking-widest mb-1">
                        {t.portfolio.filters[project.category]}
                      </p>
                      <h3 className="font-serif text-lg text-foreground line-clamp-1">
                        {projectTranslation.title}
                      </h3>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedProject && (
        <ProjectLightbox
          isOpen={!!selectedProject}
          onClose={handleCloseLightbox}
          projectTitle={t.portfolio.projects[selectedProject.titleKey].title}
          projectCategory={t.portfolio.filters[selectedProject.category]}
          projectDescription={t.portfolio.projects[selectedProject.titleKey].description}
          projectLocation={selectedProject.location}
          projectYear={selectedProject.year}
          images={selectedProject.images}
        />
      )}
    </>
  )
}
