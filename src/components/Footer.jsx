import { profile } from "../data/resumeData";

export default function Footer() {
  return (
    <footer className="bg-ink-soft">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-center font-mono text-[12px] text-paper-faint sm:flex-row sm:px-10 sm:text-left">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with React, Vite &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
