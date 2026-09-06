
import { education, interests } from "../data/resumeData";

export default function About() {
  return (
    <section className="border-t border-ink-line">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
        <div className="relative">
          {/* Main content */}
          <div className="max-w-lg">
            <h2 className="font-display text-2xl text-paper sm:text-3xl">
              A bit about the work
            </h2>

            <p className="mt-4 text-[19px] leading-relaxed text-paper-dim">
              I like taking a product from a database schema to a deployed URL —
              writing the service layer, wiring authentication and payments, and
              shipping an admin panel non-technical teammates can actually use.
              Most of what's below is live in production, not a demo repo.
            </p>
          </div>

          {/* Right rail — right edge aligned with container/profile edge */}
          <div className="mt-12 w-64 lg:absolute lg:top-0 lg:right-[-15px] lg:mt-0">
            <div className="rail-tick border-l border-ink-line pl-5">
              <h3 className="font-mono text-[13px] text-paper-faint">
                Education
              </h3>

              <p className="mt-2 text-[19px] font-medium text-paper">
                {education.school}
              </p>

              <p className="text-[17px] text-paper-dim">
                {education.degree}
              </p>

              <p className="text-[17px] text-paper-faint">
                {education.location}
              </p>
            </div>

            <div className="rail-tick mt-8 border-l border-ink-line pl-5">
              <h3 className="font-mono text-[13px] text-paper-faint">
                Outside of work
              </h3>

              <ul className="mt-2 space-y-1 text-[19px] text-paper-dim">
                {interests.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

