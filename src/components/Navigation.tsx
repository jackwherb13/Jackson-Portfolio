import { Github, Linkedin } from "lucide-react"

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
]

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="font-semibold tracking-tight text-gray-400">
          Jackson Herbert
        </a>

        <nav className="flex items-center gap-6 text-sm text-neutral-600">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-black">
              {l.label}
            </a>
          ))}

          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            <Github size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            <Linkedin size={18} />
          </a>
        </nav>
      </div>
    </header>
  )
}
