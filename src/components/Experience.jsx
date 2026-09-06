import { experience } from "../data/resumeData";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-ink-line">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
        <h2 className="font-display text-2xl text-paper sm:text-3xl">Experience</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-[180px_1fr]">
          <div className="font-mono text-[13px] text-paper-faint">{experience.duration}</div>

          <div className="border-l border-ink-line pl-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-medium text-paper">{experience.company}</h3>
              <span className="font-mono text-[13px] text-paper-faint">{experience.location}</span>
            </div>
            <p className="mt-1 text-sm italic text-paper-dim">{experience.role}</p>

            <ul className="mt-5 space-y-3 text-paper-dim">
              {experience.points.map((point) => (
                <li key={point} className="flex gap-3 leading-relaxed">
                  <span className="mt-2.5 h-1 w-1 flex-none rounded-full bg-accent" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <a
              href={experience.verification.url}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 font-mono text-[13px] text-teal hover:text-accent"
            >
              {experience.verification.label} ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
