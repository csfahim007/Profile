import { skillGroups } from "../data/resumeData";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-ink-line">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="font-display text-2xl text-paper sm:text-3xl">
            Toolkit
          </h2>

          <span className="font-mono text-[13px] text-paper-faint">
            {skillGroups.length} areas
          </span>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-x-6 gap-y-8 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-8">
          {skillGroups.map((group) => (
            <div key={group.label} className="border-t border-ink-line pt-4">
              <h3 className="font-mono text-[14px] text-accent">
                {group.label}
              </h3>

              <ul className="mt-3 space-y-1.5 text-[18px] leading-relaxed text-paper-dim">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}