export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-2xl font-semibold">Projects</h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border p-6">
          <h3 className="text-lg font-semibold">CPU Scheduler (C)</h3>
          <p className="mt-2 text-sm text-neutral-600">
            Multithreaded CPU scheduling simulator built in C using queues and
            dynamic memory.
          </p>
        </div>

        <div className="rounded-xl border p-6">
          <h3 className="text-lg font-semibold">Dynamic Array (Java)</h3>
          <p className="mt-2 text-sm text-neutral-600">
            Custom generic dynamic array with resizing, insertion, removal, and
            iterator support.
          </p>
        </div>
      </div>
    </section>
  )
}
