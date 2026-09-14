# Prashant Nikam — Design in Motion

A cinematic, responsive graphic and advertising design portfolio built with React, Three.js and GSAP.

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production output is created in `dist/`.

## Add real portfolio projects

Project content lives in `src/data/projects.js`. Each record controls the title, category, copy, colour and case-study route. Artwork belongs in `public/images/projects/<project-slug>/`; see the included artwork README for recommended file names and sizes.

The current geometric visuals are intentional placeholders, clearly marked so they cannot be mistaken for real client work.

## Deploy with GitHub Pages

The included workflow automatically builds and deploys every push to `main`.

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. Push to `main` or manually run the **Deploy portfolio to GitHub Pages** workflow.

The configured Vite base path is `/prashant-portfolio/`. If the repository name changes, update `base` in `vite.config.js` and the absolute asset URLs in `index.html`.

## Accessibility and performance

- Semantic headings, links and navigation
- Keyboard-visible native controls
- Touch-specific mobile navigation
- `prefers-reduced-motion` support
- Lazy-ready project asset architecture
- Canvas DPR capped for more reliable GPU performance

© 2026 Prashant Nikam
