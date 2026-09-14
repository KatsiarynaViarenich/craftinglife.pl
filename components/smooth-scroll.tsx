"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function SmoothScroll() {
  const pathname = usePathname()

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"], a[href^="/#"]')
    
    const handleAnchorClick = (e: Event) => {
      const link = e.currentTarget as HTMLAnchorElement
      const href = link.getAttribute('href')
      
      if (!href) return

      // If it's a "/#..." link and we are not on the homepage, let regular navigation happen
      if (href.startsWith('/#') && pathname !== '/') {
        return
      }

      const targetId = href.startsWith('/#') ? href.substring(1) : href
      const target = document.querySelector(targetId)

      if (target) {
        e.preventDefault()

        target.scrollIntoView({
          behavior: 'smooth'
        })

        window.history.replaceState(null, '', pathname + targetId)
      }
    }

    links.forEach(link => {
      link.addEventListener('click', handleAnchorClick)
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleAnchorClick)
      })
    }
  }, [pathname])

  return null
}
