export default function Contact() {
  const email = "jackwherb13@gmail.com" 

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-2xl font-semibold text-white">Contact</h2>
      <p className="mt-4 max-w-2xl text-white/80">
        Want to chat about an internship, a project, or anything software-related?
        The fastest way to reach me is email.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={`mailto:${email}`}
          className="rounded-xl bg-white px-5 py-3 font-medium text-black hover:bg-white/90"
        >
          Email me
        </a>

        <button
          type="button"
          onClick={() => navigator.clipboard.writeText(email)}
          className="rounded-xl border border-white/30 px-5 py-3 font-medium text-white hover:border-white/60"
        >
          Copy email
        </button>

        <a
          href="https://github.com/jackwherb13"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-white/30 px-5 py-3 font-medium text-white hover:border-white/60"
        >
          GitHub
        </a>

        <a
          href="www.linkedin.com/in/jackson-herbert-184257372"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-white/30 px-5 py-3 font-medium text-white hover:border-white/60"
        >
          LinkedIn
        </a>
      </div>

      <p className="mt-6 text-sm text-white/60">
        Email: <span className="font-medium text-white/80">{email}</span>
      </p>
    </section>
  )
}
