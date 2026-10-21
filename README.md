# Dann Mansueto — Developer Portfolio

A frontend-only developer portfolio built with React, TypeScript, Vite, and Tailwind CSS v4. The site presents a full-stack developer profile, skills, a capstone project, education, and contact links in a charcoal-and-orange visual system.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4 via `@tailwindcss/vite`
- Lucide React icons
- Google Fonts: Geist
- No backend, database, PHP, or MySQL

## Features

- Responsive single-page layout with Home, About, Skills, Projects, Education, and Contact sections
- Sticky navigation with active-section tracking and an accessible mobile menu
- Persisted dark/light theme toggle, with dark as the default
- Reusable UI components and typed content data
- Downloadable résumé and real `mailto:` contact link
- Scroll-reveal motion that respects `prefers-reduced-motion`
- Skip link, visible focus states, semantic landmarks, and descriptive labels

## Getting started

### Requirements

- Node.js 20.19+ (or a newer LTS release)
- npm

### Install dependencies

```bash
npm install
```

Use `npm ci` instead if you want an exact install from `package-lock.json`.

### Local development

```bash
npm run dev
```

Vite starts a local development server, usually at `http://localhost:5173`, with hot module replacement. Changes to React files and `src/index.css` update in the browser without a full reload.

### Production build

```bash
npm run build
```

This runs the TypeScript build and then Vite's production build. The static output is written to `dist/`. Preview it locally with:

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Project structure

```text
src/
  components/
    common/
      BrandIcon.tsx        Social platform SVGs
      SocialLinks.tsx      Reusable social link list
    layout/
      Container.tsx        Shared page width and padding
      Footer.tsx
      Navbar.tsx
    ui/
      Button.tsx           Link/button variants
      ProjectCard.tsx
      Reveal.tsx           IntersectionObserver reveal wrapper
      SectionHeading.tsx
      SkillCard.tsx
      ThemeToggle.tsx
  data/
    education.ts
    navigation.ts
    profile.ts
    projects.ts
    skills.ts
  hooks/
    useActiveSection.ts
    useTheme.ts
  lib/
    utils.ts
  sections/
    Hero.tsx
    About.tsx
    Skills.tsx
    Projects.tsx
    Education.tsx
    Contact.tsx
  types/
    content.ts
    project.ts
  App.tsx
  index.css
  main.tsx
public/
  dann-resume.pdf
  favicon.svg
  images/
    profile.webp
    projects/
      fleet-management-cover.svg
```

`App.tsx` only composes the page. Content lives in `src/data`, reusable presentation lives in `src/components`, and page sections live in `src/sections`.

## Customizing

### Profile and social links

Edit `src/data/profile.ts`:

- `name`, `firstName`, `lastName`
- `headline`, `role`, `tagline`
- `intro` and the paragraphs in `about`
- `email`
- `photo` and `photoAlt`
- `resumeUrl`
- `socialLinks`

The current social URLs are:

- GitHub: `https://github.com/DannMansueto444`
- LinkedIn: `https://www.linkedin.com/in/francis-daniel-mansueto-6267283a8`
- Instagram: `https://www.instagram.com/_hyodannski/`
- Facebook: `https://www.facebook.com/francisdaniel.d.mansueto/`
- X: `https://x.com/dannskirudw`

### Navigation

Edit `src/data/navigation.ts` to change labels, order, or section IDs. Every `href` should match the `id` of a section in `src/sections`.

### Skills and current learning

Edit `src/data/skills.ts`. The categories currently follow the confirmed stack: HTML5, CSS3, React JS/TS, Laravel PHP, Native PHP, MySQL, PostgreSQL, Visual Studio, Git, GitHub, Laragon, pgAdmin 4, and XAMPP.

No proficiency percentages or mastery claims are shown. Add technologies only when you are comfortable with the claim. The "Currently learning" panel is separate so learning topics are not presented as existing expertise.

### Projects

Edit `src/data/projects.ts`. Each entry follows the `Project` interface in `src/types/project.ts`:

```ts
{
  id: string
  title: string
  subtitle?: string
  description: string
  context?: string
  image?: string
  imageAlt?: string
  tech: string[]
  githubUrl?: string
  demoUrl?: string
  isPlaceholder?: boolean
}
```

Guidelines:

- Only add a `githubUrl` or `demoUrl` when the link is real and public.
- Set `isPlaceholder: true` for a sample entry; the card will show a "Sample" badge.
- Keep `imageAlt` descriptive. Use `public/images/projects/` for project artwork.
- The current fleet-management repository is a team repository owned by a collaborator, so the card labels it "Capstone · Team project".

The current project cover is an original abstract SVG illustration, not a screenshot. Replace it with a real screenshot when one is available and update the `image` and `imageAlt` fields.

### Education

Edit `src/data/education.ts`:

- Replace `[Your college/university]` with the real institution.
- Add certifications only after they are earned.
- Keep the "In progress" status until the degree is complete.

There is no fabricated credential or graduation claim in the current content.

### Portrait

The hero image is `public/images/profile.webp`, a transparent WebP cutout. Replace it with another transparent portrait if desired.

The hero expects a roughly portrait-oriented image and displays it with `object-cover` in a 4:5 frame. If the replacement has a very different aspect ratio, adjust the frame in `src/sections/Hero.tsx` and update the intrinsic `width`/`height` values. Update `photoAlt` in `src/data/profile.ts` to describe the new image.

### Résumé

The current PDF is `public/dann-resume.pdf`. The hero links to it with:

```ts
resumeUrl: '/dann-resume.pdf'
```

The download attribute uses the friendly filename `Dann-Mansueto-Resume.pdf`. To replace the résumé, either overwrite `public/dann-resume.pdf` or add a new file under `public/` and update `resumeUrl`. Vite copies everything in `public/` into `dist/`.

If `resumeUrl` is `null`, the hero renders a disabled "Résumé coming soon" button instead of a broken link.

### Theme, color, and typography

The design tokens are in `src/index.css`:

- Background base: `#1A1A19`
- Orange accent: `#FE7F2D`
- Accent light: `#FFB067`
- Font stack: `Geist, Inter, system-ui, sans-serif`

Dark mode is the default. The `ThemeToggle` component toggles the `light` class on `<html>` and stores the choice in `localStorage` under `dann-portfolio-theme`. The inline script in `index.html` applies the stored choice before paint to avoid a flash.

Semantic utility classes such as `bg-background`, `text-foreground`, `text-muted`, `border-border`, and `text-accent-text` read from those tokens, so changing the values in `index.css` updates the whole site.

The font is loaded from Google Fonts in `index.html`. The specified fallback stack is `Geist, Inter, system-ui, sans-serif`.

### Contact

The contact section uses a real `mailto:` link and a copy-to-clipboard button. There is intentionally no contact form:

- This is a static, frontend-only site.
- A static site cannot deliver form submissions on its own.
- The email link is transparent and works without a backend.

#### Adding a form service later

If you need a form, connect an external form service rather than storing credentials in the client:

1. Create a form endpoint with a service such as Formspree, Netlify Forms, Getform, or Basin.
2. Add a semantic `<form>` in `src/sections/Contact.tsx` with labeled name, email, and message fields. Mark required fields and use the correct `type="email"` input.
3. POST to the service endpoint, and handle three states explicitly: submitting/disabled, success, and error. Announce the result with an `aria-live` region.
4. Keep the endpoint in a Vite environment variable, for example `VITE_CONTACT_ENDPOINT` in `.env.local`. Only publishable form IDs belong in frontend code; never expose secret API keys.
5. Keep the existing `mailto:` link as a fallback.

For full control, a serverless function (Netlify Functions, Vercel Functions, Cloudflare Workers) could validate and forward the message. That would introduce a backend component and is intentionally outside this frontend-only project.

## Accessibility

- Semantic `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` landmarks
- Skip link to main content
- Visible focus outlines on links, buttons, and form-capable controls
- `aria-current` on the active navigation item
- Labeled theme toggle, mobile menu, social links, and external links
- Descriptive image alternatives
- Scroll-reveal and entrance motion disabled or shortened under `prefers-reduced-motion`
- Responsive layouts checked at desktop, tablet, and small mobile widths

## Deployment

`npm run build` produces a static `dist/` folder. Deploy it to any static host, such as Netlify, Vercel, Cloudflare Pages, or GitHub Pages.

For Netlify or Vercel, use:

- Build command: `npm run build`
- Output directory: `dist`

If deploying to a subpath (for example, a GitHub Pages project site), set Vite's `base` option in `vite.config.ts` to that subpath before building.

Make sure `public/dann-resume.pdf` is committed and included in the deployment. Vite copies it to `dist/dann-resume.pdf`.

## Content note

The portfolio deliberately avoids fabricated experience, qualifications, credentials, project URLs, or proficiency claims. The institution name in the education section is a clearly marked placeholder until the real name is provided, and the project cover is an illustrative asset rather than a fake screenshot.

## Credits

- React, Vite, TypeScript, and Tailwind CSS
- Lucide React for interface icons
- Geist typeface, served by Google Fonts
- Portrait and résumé provided by Dann Mansueto
- Abstract fleet dashboard cover created for this project
