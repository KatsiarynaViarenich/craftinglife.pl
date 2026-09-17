"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "motion/react"

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

export function CountUp({
  end,
  suffix = "",
  duration = 1.6,
  className,
}: {
  end: number
  suffix?: string
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0, margin: "0px 0px 0px 0px" })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let raf: number
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1)
      setValue(Math.round(easeOutExpo(progress) * end))
      if (progress < 1) {
        raf = requestAnimationFrame(tick)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [isInView, end, duration])

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  )
}
