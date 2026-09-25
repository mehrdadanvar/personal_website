# Personal Website - Project Context & Agent Handoff

Redesign of Dr. Mehrdad Anvar's personal site on branch `redesign/bento-grid`, correcting a prior Gemini migration. Goal: minimal/professional look with a deep dark-teal accent, MongoDB data-backed pages, and fidelity to the old (main branch) design, with per-page polish.

## Tech & Data

- Nuxt 4 + Nuxt UI v4, Tailwind.
- MongoDB via `WEBSITE_CONNECTION_STRING` (in `.env`, never commit), accessed through `getMongoClient()` in `server/utils/connection.ts`. DB `personal`, collection `website` with docs `{route, section, type, items}`. Projects live in collection `personal.projects` (HyperQbank, HyperRx, HyperECG, HyperRadiology - being renamed, so the projects page is a minimal mention list without [slug] links).
- `Anvar_CV.pdf` (repo root) is the source of truth for Vita; synced to Mongo with `scripts/sync-cv-to-mongo.mjs`. Vita sections: education, internships, licensure, exams, clinical/non-clinical/research experience, publications, voluntary experience, technical skills, languages. A `presentations` doc exists in Mongo but is intentionally NOT rendered on /vita.

## Visual language

- Glass cards: `bg-white/60 dark:bg-zinc-900/50 backdrop-blur-xl` (kept translucent so background SVG art shows through).
- SVG art backgrounds live in a shared `app/components/ArtBackground.vue` (props: `src`, `customClass`, `positionClass`, `fitClass`, `toneClass`, `heightClass`, `fixed`). Defaults: `bg-center bg-no-repeat bg-contain`, `opacity-70 dark:opacity-60 dark:invert` (dark mode inverts the light SVG strokes so they glow on dark bg).
- Home page: two absolute, non-repeating SVGs - one in the hero (`sample12`), one in the page body before the research section (`sample15`). NOT fixed; the fixed full-page layer was tried and rejected as too distracting. Other pages (about, blog, research, Footer) use one absolute ArtBackground per page.
- Vita uses Source Serif 4 via @nuxt/fonts in `app/layouts/resume.vue`, UTimeline with right-aligned teal dates (`#wrapper` slot), custom `#indicator` dots.
- Sorting: education/internships ascending; exams, licensure, clinical, non-clinical, research descending; publications by `id` desc; `present` dates sort newest via `dateScore`.

## Environment

- Dev server: `npx nuxt dev --port 3999` (user approved killing anything on 3000).
- Untracked junk to never commit: `.env`, `.env copy`, `pathways.json`, `sample.js` (all gitignored).

## Done (commits)

- ad26d4a: full Vita rebuild (DB-backed, `app/pages/vita/index.vue`, `app/components/Resume/*`, `app/utils/vita.ts`), Source Serif 4 font.
- Minimal DB-backed projects page (`app/pages/projects/index.vue`).
- a15ab3f: research page - top research-experience card restored, publications DB-backed, AI-jargon stat block removed.
- Glass-card opacity + ArtBackground rollout across index/about/blog/research/Footer; mobile (390px) verified with zero horizontal overflow.

## Continue from

- Verify the new fixed two-SVG home background in light + dark + scrolled states; tune opacity/size. Remaining polish: about page hero, index hero details, blog page.
