export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <p className="text-sm uppercase tracking-widest text-neutral-500">
        Portfolio
      </p>

      <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
        Jackson Herbert
      </h1>

      <p className="mt-4 max-w-2xl text-lg text-neutral-600">
        Computer Science student building practical software projects in Java, C, and Python.
        Currently looking for internships in the Summer of 2026 in IT/Computer Science related fields.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          className="rounded-xl bg-black px-5 py-3 text-white"
          href="#projects"
        >
          View Projects
        </a>
        <a className="rounded-xl border px-5 py-3" href="#contact">
          Contact
        </a>
      </div>
    </section>
  )
}
