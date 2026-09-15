"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { normalizePath } from "@/lib/utils"

export function SmoothScroll() {
  const pathname = usePathname()

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href*="#"]') as HTMLAnchorElement | null
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href) return

      const hashIndex = href.indexOf('#')
      if (hashIndex === -1) return

      const base = href.slice(0, hashIndex)
      const hash = href.slice(hashIndex)

      // Only intercept links that point at a section on the current page;
      // otherwise let the browser navigate to the other page first.
      if (base && normalizePath(base) !== normalizePath(pathname)) return

      const target = document.querySelector(hash)
      if (!target) return

      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState(null, '', pathname + hash)
    }

    // Capture phase: must run before Next.js's own <Link> click handler
    // (attached lower in the tree) so preventDefault actually stops it.
    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [pathname])

  return null
}
