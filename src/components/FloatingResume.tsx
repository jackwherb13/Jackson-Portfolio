"use client"

import { useEffect, useState } from "react"

export default function FloatingResume() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scrollTop = window.scrollY
      const viewport = window.innerHeight
      const fullHeight = doc.scrollHeight

      // progress from 0 to 1
      const progress = (scrollTop + viewport) / fullHeight
      setShow(progress >= 0.5)
    }

    onScroll() // run once on load
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!show) return null

  return (
    <a
      href="/JacksonHerbertResume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="
        hidden sm:inline-flex
        fixed bottom-6 right-6
        bg-white text-black
        px-5 py-3
        rounded-full
        font-medium
        shadow-lg
        transition
        hover:scale-105
        hover:shadow-xl
      "
    >
      Resume
    </a>
  )
}
