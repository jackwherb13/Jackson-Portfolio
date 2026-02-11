"use client"

import { useEffect, useState } from "react"

export default function FloatingResume() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scrollTop = window.scrollY
      const viewport = window.innerHeight
      const fullHeight = doc.scrollHeight

      const progress = (scrollTop + viewport) / fullHeight
      setVisible(progress >= 0.5)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <a
      href="/Jackson_Herbert_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={`
        hidden sm:inline-flex
        fixed bottom-6 right-6
        bg-black text-white
        border border-white/30
        px-5 py-3
        rounded-full
        font-medium
        shadow-lg
        transition-all duration-500
        hover:scale-105 hover:border-white/60
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"}
      `}
    >
      Resume
    </a>
  )
}
