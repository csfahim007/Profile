import { profile } from "../data/resumeData";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-grid pb-20 pt-32 sm:pt-40"
    >
      <div
        className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full opacity-20 blur-3xl sm:h-96 sm:w-96"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between sm:gap-16">
          <div>
            <p className="font-mono text-[15px] text-paper-faint">
              Full-Stack Engineer, based in {profile.location}
            </p>

            <h1 className="mt-5 max-w-3xl font-display text-[2.6rem] leading-[1.08] tracking-tight text-paper-bright sm:text-6xl">
              {profile.name}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper-bright sm:text-xl">
              {profile.tagline}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                View my work
              </a>

              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-ink-line px-5 py-2.5 text-paper-bright transition-colors hover:border-accent hover:text-accent"
              >
                Get in touch
              </a>
            </div>
          </div>

          <img
            src="/profile-pic.png"
            alt={`${profile.name} profile portrait`}
            className="h-64 w-56 self-center rounded-2xl object-cover object-center sm:h-72 sm:w-64 sm:self-start"
          />
        </div>

        <dl className="mt-16 grid max-w-5xl grid-cols-2 gap-y-6 border-t border-ink-line pt-6 font-mono text-[13px] sm:grid-cols-4 sm:justify-between">
          {/* Email */}
          <div>
            <dt className="text-paper-faint">Email</dt>

            <dd className="mt-[5px] whitespace-nowrap text-[16px] text-paper-bright">
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-accent"
              >
                {profile.email}
              </a>
            </dd>
          </div>

          {/* Phone — 5px right */}
          <div className="sm:translate-x-[5px]">
            <dt className="text-paper-faint">Phone</dt>

            <dd className="mt-[5px] whitespace-nowrap text-[16px] text-paper-bright">
              {profile.phone}
            </dd>
          </div>

          {/* GitHub — 5px left */}
          <div className="sm:-translate-x-[5px]">
            <dt className="text-paper-faint">GitHub</dt>

            <dd className="mt-[5px] whitespace-nowrap text-[16px] text-paper-bright">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                {profile.githubLabel}
              </a>
            </dd>
          </div>

          {/* Portfolio */}
          <div>
            <dt className="text-paper-faint">Portfolio</dt>

            <dd className="mt-[5px] whitespace-nowrap text-[16px] text-paper-bright">
              <a
                href="https://portfolio.cloudafk.xyz"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                portfolio.cloudafk.xyz
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-paper-faint">Linkedin</dt>

            <dd className="mt-[5px] whitespace-nowrap text-[16px] text-paper-bright">
              <a
                href="https://www.linkedin.com/in/fahim-afk"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                linkedin 
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}