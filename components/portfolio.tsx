"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"
import { ProjectLightbox } from "./project-lightbox"
import { Eye } from "lucide-react"
import { title } from "process"

type CategoryKey = "all" | "residential" | "commercial"
const projectsData = [
  {
    id: 1,
    title: "Residential Project 1",
    titleKey: "1" as const,
    category: "residential" as const,
    year: "2024",
    images: [
      "/images/residential/1/1.jpg",
      "/images/residential/1/2.jpg",
      "/images/residential/1/3.jpg",
    ],
  },
  {
    id: 2,
    title: "Residential Project 2",
    titleKey: "2" as const,
    category: "residential" as const,
    year: "2024",
    images: [
      "/images/residential/2/1.jpg",
      "/images/residential/2/2.jpg",
    ],
  },
  {
    id: 3,
    title: "Residential Project 3",
    titleKey: "3" as const,
    category: "residential" as const,
    year: "2024",
    images: [
      "/images/residential/3/1.jpg",
      "/images/residential/3/2.jpg",
    ],
  },
  {
    id: 4,
    title: "Residential Project 4",
    titleKey: "4" as const,
    category: "residential" as const,
    year: "2024",
    images: [
      "/images/residential/4/1.jpg",
      "/images/residential/4/2.jpg",
    ],
  },
  {
    id: 5,
    title: "Residential Project 5",
    titleKey: "5" as const,
    category: "residential" as const,
    year: "2024",
    images: [
      "/images/residential/5/1.jpg",
      "/images/residential/5/2.jpg",
      "/images/residential/5/3.jpg",
    ],
  },
  {
    id: 6,
    title: "Residential Project 6",
    titleKey: "6" as const,
    category: "residential" as const,
    year: "2024",
    images: [
      "/images/residential/6/1.jpg",
      "/images/residential/6/2.jpg",
    ],
  },
  {
    id: 7,
    title: "Commercial Project 1",
    titleKey: "1" as const,
    category: "commercial" as const,
    year: "2024",
    images: [
      "/images/commercial/1/1.jpg",
      "/images/commercial/1/2.jpg",
      "/images/commercial/1/3.jpg",
      "/images/commercial/1/4.jpg",
      "/images/commercial/1/5.jpg",
      "/images/commercial/1/6.jpg"

    ],
  },
  {
    id: 8,
    title: "Commercial Project 2",
    titleKey: "2" as const,
    category: "commercial" as const,
    year: "2024",
    images: [
      "/images/commercial/2/1.jpg",
      "/images/commercial/2/2.jpg",
    ],
  },
  {
    id: 9,
    title: "Commercial Project 3",
    titleKey: "3" as const,
    category: "commercial" as const,
    year: "2024",
    images: [
      "/images/commercial/3/1.jpg"
    ],
  },

]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null)
  const { t } = useLanguage()

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
      <section id="projects" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary uppercase tracking-widest text-sm mb-4">{t.portfolio.tagline}</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              {t.portfolio.title} <span className="text-primary">{t.portfolio.titleHighlight}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t.portfolio.description}
            </p>
          </div>

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
            {filteredProjects.map((project) => {
              const projectTranslation = t.portfolio.projects[project.titleKey]
              return (
                <div
                  key={project.id}
                  className="group relative overflow-hidden cursor-pointer"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={project.images[0]}
                      alt={projectTranslation.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Image count badge */}
                    <div className="absolute top-3 right-3 bg-foreground/70 text-card px-2 py-1 text-xs flex items-center gap-1 z-10">
                      <Eye className="w-3 h-3" />
                      {project.images.length}
                    </div>

                    <div className={cn(
                      "absolute inset-0 bg-primary/80 flex flex-col justify-end p-6 transition-opacity duration-300",
                      hoveredProject === project.id ? "opacity-100" : "opacity-0"
                    )}>
                      <p className="text-primary-foreground/70 text-sm uppercase tracking-wide mb-2">
                        {t.portfolio.filters[project.category]}
                      </p>
                      <h3 className="font-serif text-2xl text-primary-foreground mb-2">
                        {projectTranslation.title}
                      </h3>
                      <p className="text-primary-foreground/80 text-sm mb-3">
                        {projectTranslation.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-primary-foreground/60 text-sm">
                          {/* <span>{project.location}</span> */}
                          <span>•</span>
                          <span>{project.year}</span>
                        </div>
                        <span className="text-primary-foreground text-sm flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          {t.portfolio.viewProject}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project Info Below Image (visible when not hovered) */}
                  <div className={cn(
                    "bg-card p-4 transition-opacity duration-300",
                    hoveredProject === project.id ? "opacity-0" : "opacity-100"
                  )}>
                    <p className="text-muted-foreground text-xs uppercase tracking-wide mb-1">
                      {t.portfolio.filters[project.category]}
                    </p>
                    <h3 className="font-serif text-lg text-foreground">
                      {projectTranslation.title}
                    </h3>
                  </div>
                </div>
              )
            })}
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
          // projectLocation={selectedProject.location}
          projectYear={selectedProject.year}
          images={selectedProject.images}
        />
      )}
    </>
  )
}
