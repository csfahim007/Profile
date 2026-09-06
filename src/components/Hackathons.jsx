import { hackathons } from "../data/resumeData";

export default function Hackathons() {
  return (
    <section className="border-t border-ink-line">
      <div className="mx-auto max-w-5xl px-6 py-10 sm:px-10">
        <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
          <h2 className="font-mono text-[16px] text-paper-faint">Hackathons</h2>
          {hackathons.map((event) => (
            <div key={event.name} className="flex items-baseline gap-2">
              <span className="text-paper">{event.name}</span>
              <span className="font-mono text-[13px] text-paper-faint">{event.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
