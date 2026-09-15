"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { normalizePath } from "@/lib/utils"
import { navigateWithTransition } from "@/lib/view-transition"

function isModifiedClick(e: MouseEvent) {
  return e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0
}

export function ViewTransitionNav() {
  const router = useRouter()

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Same-page hash links are already fully handled by SmoothScroll.
      if (e.defaultPrevented || isModifiedClick(e)) return

      const anchor = (e.target as HTMLElement).closest("a") as HTMLAnchorElement | null
      if (!anchor) return
      if (anchor.target === "_blank" || anchor.hasAttribute("download")) return

      const href = anchor.getAttribute("href")
      if (!href || href.startsWith("mailto:") || href.startsWith("tel:")) return

      let url: URL
      try {
        url = new URL(href, window.location.href)
      } catch {
        return
      }
      if (url.origin !== window.location.origin) return

      // Nothing to transition to if we're already on this exact page.
      if (normalizePath(url.pathname) === normalizePath(window.location.pathname) && !url.hash) return

      e.preventDefault()
      navigateWithTransition(() => {
        router.push(url.pathname + url.search + url.hash)
      })
    }

    document.addEventListener("click", handleClick, true)
    return () => document.removeEventListener("click", handleClick, true)
  }, [router])

  return null
}
