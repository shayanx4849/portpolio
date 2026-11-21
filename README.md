# Shayan — MERN Stack Developer Portfolio

A dark, glassmorphism-style developer portfolio built with **React + Vite + Tailwind CSS**.

## Stack
- React 18 (Vite)
- Tailwind CSS (custom dark navy / purple / blue theme)
- react-icons (tech logos and UI icons — no text labels in the hero tech row)
- Plain CSS animations (fade-in, float, progress-bar growth) — no extra animation library needed

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Stats.jsx
    Skills.jsx
    Projects.jsx
    ProjectCard.jsx
    ProjectPreview.jsx
    Testimonial.jsx
    Contact.jsx
    Footer.jsx
  App.jsx
  main.jsx
  index.css
```

## CV (Download CV button)

- `cv/Shayan-CV-editable.docx` — editable Word version. Every placeholder (email, phone, CGPA, FSc and
  Matric details, languages) is highlighted yellow in square brackets. Replace them with your real data.
- `public/Shayan-CV.pdf` — the file the **Download CV** button serves. After editing the DOCX, remove the
  yellow highlight (Select all → Text Highlight Color → No Color), export as PDF and overwrite this file.

## Things to customize before deploying

- **Hero image** — put your own photo (transparent PNG works best) at `public/hero.png`; it replaces the
  illustrated placeholder automatically.
- **Hero.jsx** — Point `Download CV` at a real PDF in `/public`.
- **Projects.jsx** — update the `href` on each project to your real GitHub repo / live demo links.
- **Testimonial.jsx** — replace the placeholder quote and name with a real testimonial.
- **Contact.jsx** — replace the email, phone, and location placeholders with your real details, and
  wire the form's `handleSubmit` to a real backend (Express + Nodemailer, or a form service like
  Formspree).
- **Footer.jsx / Navbar.jsx** — replace social link `href="#"` placeholders with your real profiles.

## Deploying

This is a static Vite build, so it deploys cleanly to Vercel, Netlify, or GitHub Pages:

```bash
npm run build
# then upload the generated dist/ folder, or connect the repo directly on Vercel/Netlify
```
