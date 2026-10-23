# Dann Mansueto — Developer Portfolio

A frontend-only developer portfolio built with React, TypeScript, Vite, and Tailwind CSS v4. The site presents a full-stack developer profile, skills, a capstone project, education, and contact links in a minimal black-and-white visual system.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4 via `@tailwindcss/vite`
- Lucide React geometry rendered through a shared 1.6px line-icon wrapper
- Google Fonts: Geist and Instrument Serif
- No backend, database, PHP, or MySQL

## Features

- Responsive single-page layout with Home, About, Skills, Projects, Education, and Contact sections
- Sticky navigation with active-section tracking and an accessible mobile menu
- System-aware dark/light theme toggle with a persisted manual choice
- One-time animated intro that slides away to reveal the site
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

### Blank page?

The site must be served over HTTP. Do not open `index.html` or `dist/index.html` by double-clicking the file, and do not serve the project root with a plain static file server:

- `index.html` points at `/src/main.tsx`, which only works through the Vite dev server.
- `dist/index.html` references built assets from the server root, and browsers block ES module scripts loaded from `file://`, so the page stays blank.

Use one of these instead:

```bash
npm run dev      # development, usually http://localhost:5173
npm run build    # then
npm run preview  # production preview, usually http://localhost:4173
```

If the page is still blank after switching servers or branches, hard-refresh with `Ctrl+Shift+R`. The intro is intentionally skipped when the operating system has "reduce motion" enabled, and it only plays once per tab session; to replay it, run this in the browser console:

```js
sessionStorage.removeItem('dann-portfolio-intro-seen-v1')
location.reload()
```

## Project structure

```text
src/
  components/
    common/
      BrandIcon.tsx        Line-style social platform SVGs
      Icon.tsx             Shared 1.6px interface icon wrapper
      SocialLinks.tsx      Reusable social link list
    layout/
      Container.tsx        Shared page width and padding
      Footer.tsx
      Intro.tsx            Animated first-visit intro overlay
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
    intro.ts             Session and reduced-motion intro checks
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
  favicon.png
  images/
    profile-halftone.webp
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

### Intro animation

The intro is a full-screen overlay with a DM monogram, name, role, and a hairline progress line. It holds briefly, then slides up to reveal the page. It is not a separate route.

- It plays once per browser session, tracked in `sessionStorage` under `dann-portfolio-intro-seen-v1`.
- `Skip intro` and the `Escape` key start the exit right away. Keyboard focus starts inside the overlay, and the page behind it is inert and scroll-locked while it is visible.
- `prefers-reduced-motion: reduce` bypasses the intro entirely.
- After the overlay leaves, focus moves to the main landmark so keyboard users land in the page.

Timing lives at the top of `src/components/layout/Intro.tsx`:

```ts
const HOLD_MS = 1650
const EXIT_MS = 820
```

The entrance and progress animations are defined in `src/index.css` (`.intro-rise` and `.intro-progress-bar`). The session key and reduced-motion check are in `src/lib/intro.ts`.

To replay it while developing, clear the key and reload:

```js
sessionStorage.removeItem('dann-portfolio-intro-seen-v1')
location.reload()
```

Opening the site in a new tab starts a new session and shows the intro again. If you make a substantial change to the intro and want returning visitors to see it once, bump the `-v1` suffix in `src/lib/intro.ts`.

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

The hero uses one transparent, two-tone halftone portrait: `public/images/profile-halftone.webp`, displayed directly on the page in both themes. The file is a 1158×723 sprite containing the same 579×723 portrait twice: the left half is black ink for light mode, and the right half is off-white ink for dark mode. `.portrait-halftone` in `src/index.css` uses `object-position` to select the correct half from the `light` class on `<html>`.

The portrait has no card, border, blurred background, gradient, or drop shadow. It fills the same 4:5 portrait slot with `object-cover`, so the head-to-waist framing stays consistent across themes and breakpoints. If the portrait changes, regenerate both halves from the same crop and keep the sprite dimensions aligned. Update `photoAlt` in `src/data/profile.ts` to describe the new image.

### Favicon

`public/favicon.png` is a 192×192 square, white-background head crop centered on the face and taken from the light-mode half of the halftone portrait. The `index.html` icon and Apple touch icon both point to it. If the portrait crop changes, regenerate the favicon from the same source and keep the face centered in the square.

### Résumé

The current PDF is `public/dann-resume.pdf`. The hero links to it with:

```ts
resumeUrl: '/dann-resume.pdf'
```

The download attribute uses the friendly filename `Dann-Mansueto-Resume.pdf`. To replace the résumé, either overwrite `public/dann-resume.pdf` or add a new file under `public/` and update `resumeUrl`. Vite copies everything in `public/` into `dist/`.

If `resumeUrl` is `null`, the hero renders a disabled "Résumé coming soon" button instead of a broken link.

### Theme, color, and typography

The design tokens are in `src/index.css`:

- Light background: `#FFFFFF`
- Light foreground: `#0A0A0A`
- Light muted text: `#737373`
- Light border: `#E5E5E5`
- Dark background: `#0C0C0F`
- Dark foreground: `#F4F4F5`
- Dark muted text: `#A0A0A8`
- Dark border: `#2A2A30`
- Accent: the current foreground ink (`#0A0A0A` light, `#F4F4F5` dark)
- Body/UI font stack: `Geist, Inter, system-ui, sans-serif`
- Display font stack: `'Instrument Serif', Georgia, 'Times New Roman', serif`

The site follows the operating system's color preference on a first visit, with a light fallback. Once the `ThemeToggle` is used, the choice is stored in `localStorage` under `dann-portfolio-theme` and overrides the system preference. The toggle changes the `light` class on `<html>`, and the inline script in `index.html` applies the same resolution before paint to avoid a flash.

Semantic utility classes such as `bg-background`, `text-foreground`, `text-muted`, `border-border`, and `text-accent-text` read from those tokens, so changing the values in `index.css` updates the whole site. The design is intentionally monochrome: no orange is used in the interface, favicon, intro, or project cover.

The body/UI font is Geist, loaded from Google Fonts in `index.html`, with the fallback stack `Geist, Inter, system-ui, sans-serif`. The hero name uses Instrument Serif through the `font-display` utility; its fallback stack is `'Instrument Serif', Georgia, 'Times New Roman', serif`.

### Icons

Interface icons live in `src/components/common/Icon.tsx`. They wrap Lucide geometry at a 1.6px stroke so every icon has the same lighter optical weight. Social marks in `src/components/common/BrandIcon.tsx` are custom open line icons sized to match. If you add an icon, import it from the shared wrapper instead of `lucide-react` directly so the stroke language stays consistent.

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
- Intro overlay exposed as a labeled dialog with focus moved into it, a skip action, Escape support, and an automatic reduced-motion bypass
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
- Lucide React for interface icon geometry, rendered at a 1.6px stroke
- Custom open-line social icons in `src/components/common/BrandIcon.tsx`
- Geist and Instrument Serif typefaces, served by Google Fonts
- Portrait and résumé provided by Dann Mansueto
- Abstract fleet dashboard cover created for this project
