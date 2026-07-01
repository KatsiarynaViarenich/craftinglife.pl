"use client"

import { useEffect } from "react"

export function SmoothScroll() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', handleAnchorClick)
    })

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.removeEventListener('click', handleAnchorClick)
      })
    }
  }, [])

  const handleAnchorClick = (e: Event) => {
    const link = e.currentTarget as HTMLAnchorElement
    const href = link.getAttribute('href')
    
    if (!href) return

    const target = document.querySelector(href)

    if (target) {
      e.preventDefault()

      target.scrollIntoView({
        behavior: 'smooth'
      })

      window.history.replaceState(null, '', window.location.pathname)
    }
  }

  return null
}
