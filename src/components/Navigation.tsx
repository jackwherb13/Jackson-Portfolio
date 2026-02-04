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
        <a href="#" className="font-semibold tracking-tight text-neutral-600 px-2 py-1 rounded transition hover:outline hover:outline-2 hover:outline-neutral-600">
          Jackson Herbert
        </a>

        <nav className="flex items-center gap-6 text-sm text-neutral-600">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1 rounded-md transition transform hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
            >
              {l.label}
            </a>
          ))}


          <a
            href="https://github.com/jackwherb13"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            <Github size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/jackson-herbert-184257372/"
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
