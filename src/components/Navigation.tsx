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
        <a href="#" className="font-semibold tracking-tight">
          Jackson Herbert
        </a>
        <nav className="flex gap-5 text-sm text-neutral-600">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-black">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
