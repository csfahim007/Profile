import { projects } from "../data/resumeData";

export default function Projects() {
  return (
    <section id="work" className="border-t border-ink-line">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="font-display text-2xl text-paper sm:text-3xl">Selected work</h2>
          <span className="font-mono text-[13px] text-paper-faint">{projects.length} shipped</span>
        </div>

        <div className="mt-10 divide-y divide-ink-line border-t border-ink-line">
          {projects.map((project) => (
            <article key={project.name} className="grid gap-4 py-9 sm:grid-cols-[220px_1fr] sm:gap-8">
              <div>
                <p className="font-mono text-[12px] text-paper-faint">{project.tag}</p>
                <h3 className="mt-2 text-lg font-medium leading-snug text-paper">{project.name}</h3>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 font-mono text-[13px] text-teal hover:text-accent"
                >
                  Live site ↗
                </a>
              </div>

              <div>
                <p className="text-paper-dim leading-relaxed">{project.description}</p>

                <ul className="mt-4 space-y-2 text-sm text-paper-dim">
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-relaxed">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-ink-line px-3 py-1 font-mono text-[12px] text-paper-dim"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
