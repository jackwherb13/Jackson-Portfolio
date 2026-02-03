export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-2xl font-semibold">Projects</h2>

        <a
            href="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border p-6 transition hover:-translate-y-1 hover:shadow-md"
            >
            <h3 className="text-lg font-semibold">CPU Scheduler</h3>
            <p className="mt-2 text-sm text-neutral-600">
                Multithreaded CPU scheduling simulator built in C using queues and
                dynamic memory.
            </p>
            <div className="mt-4 text-sm text-neutral-500">
                C • Multithreading • Data Structures
            </div>
        </a>



        <a
            href="https://github.com/YOUR_USERNAME/YOUR_JAVA_PROJECT_REPO"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border p-6 transition hover:-translate-y-1 hover:shadow-md"
            >
            <h3 className="text-lg font-semibold">Dynamic Array (Java)</h3>
            <p className="mt-2 text-sm text-neutral-600">
                Custom generic dynamic array with resizing, insertion, removal, and
                iterator support.
            </p>
            <div className="mt-4 text-sm text-neutral-500">
                Java • Generics • Data Structures
        </div>
            </a>
      
    </section>
  )
}
