# Ahmed Fahim Kabir — Portfolio

A minimal, responsive one-page developer portfolio built with React, Vite, and Tailwind CSS.

## Stack
- React 19 + Vite
- Tailwind CSS v4
- Google Fonts: Fraunces (display), IBM Plex Sans (body), IBM Plex Mono (labels)

## Structure
```
src/
  data/resumeData.js   ← all resume content lives here — edit this to update text
  components/          ← Navbar, Hero, About, Skills, Experience, Projects, Hackathons, Contact, Footer
  App.jsx
  index.css            ← Tailwind import + design tokens (colors, fonts)
```

## Getting started
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Editing content
Everything text-based (name, skills, experience, project links, etc.) is in
`src/data/resumeData.js`. Update that file and the whole site updates —
no need to touch component markup for content changes.

## Deploying
The `dist/` folder produced by `npm run build` is static and can be deployed to
Vercel, Netlify, GitHub Pages, or any static host.
