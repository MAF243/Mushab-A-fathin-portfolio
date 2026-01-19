# Mushab Abdurrahman Fathin — Portfolio (Vite + React)

This repo is a multi-page, multilingual (ID/EN/JP) personal portfolio.

## Quick start

```bash
npm install
npm run dev
```

## Where to edit content

### 1) Basic contact + CV
- `src/data/contact.ts` — email, WhatsApp, social links, and the CV file path.
- `public/cv/` — put your actual CV PDF here.

### 2) Projects
- `src/data/projects.ts` — project list (slug, URL, tech stack, images).
- `src/i18n/locales/*.json` — per-language text for each project:
  - `projects.items.<slug>.title`
  - `projects.items.<slug>.description`
  - `projects.items.<slug>.longDescription`
- `public/projects/<slug>/` — screenshots used on cards + project detail pages.

### 3) Experience, education, organizations
- `src/data/timeline.ts` — experience and education timeline.
- `src/data/organizations.ts` — organizations / roles.

### 4) Skills
- `src/data/skills.ts` — skills grouped by category.
- `src/i18n/locales/*.json` — labels for categories (`about.skillsGroups.*`).

### 5) Notes
- `src/data/notes.ts` — notes per locale.
- Routes:
  - `/notes` list
  - `/notes/:slug` detail

## Assets
- `public/profile.jpg` — profile photo used on the home hero.
- `public/projects/...` — project images.
- `public/cv/...` — CV PDF.

## Build

```bash
npm run build
npm run preview
```

## Notes
- i18n is handled by **react-i18next**. Language is stored in localStorage.
- Contact form uses **mailto:** (no backend) and a WhatsApp quick link.
