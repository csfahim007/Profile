import { profile } from "../data/resumeData";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-ink-line bg-ink-soft">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10 sm:py-28">
        <h2 className="max-w-lg font-display text-3xl leading-tight text-paper sm:text-4xl">
          Have a backend, an API, or a full product to build? Let's talk.
        </h2>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center rounded-full bg-accent px-6 py-3 font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="inline-flex items-center rounded-full border border-ink-line px-6 py-3 text-paper transition-colors hover:border-accent hover:text-accent"
          >
            {profile.phone}
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[13px] text-paper-dim">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent">
            {profile.githubLabel}
          </a>
          <a href={profile.portfolio} target="_blank" rel="noreferrer" className="hover:text-accent">
            {profile.portfolioLabel}
          </a>
        </div>
      

      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[13px] text-paper-dim">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
            {profile.linkedinLabel}
          </a>
          <a href={profile.portfolio} target="_blank" rel="noreferrer" className="hover:text-accent">
            {profile.portfolioLabel}
          </a>
      </div>
      </div>
    </section>
  );
}
