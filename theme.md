# Theme & Content Guide — Medical AI Lab (MAL), GUTECH

A calm, readable identity: GUTECH navy from the lab logo, warm off-white paper,
a serif for headings, and generous spacing. No glow, tilt, or cursor effects.

## Updating content (no design work needed)

All site content lives in `src/content/`. Edit these files; pages update automatically.

| File                | What it holds                                                    |
| ------------------- | ---------------------------------------------------------------- |
| `site.ts`           | Lab name, institution, and the contact email (form goes here)    |
| `projects.ts`       | Projects & products — one page each at `/projects/<slug>`        |
| `collaborations.ts` | Partnership stories                                              |
| `people.ts`         | Team members — one page each at `/team/<slug>`                   |
| `publications.ts`   | Lab publications and selected prior work by members              |
| `events.ts`         | News & events — split into upcoming/past by date automatically   |

Rules the pages enforce:

- **Missing content** — set a field to `null` and the site shows a clearly marked
  amber **Placeholder** box instead.
- **Aims vs. results** — `designedTo` lists what a tool is meant to do;
  `measured` lists only outcomes the team actually measured (with how and where).
  They are shown in separate boxes.
- **Project stage** — set `stageConfirmed: true` once the project lead confirms it;
  until then the stage carries a "to be confirmed" tag.
- **Screenshots** — only set `screenshot` once it has been approved for publication.
- **Publications** — `carriedOut: "lab" | "prior"` decides the section (where the
  research was done, not when it was published). List authors in the original
  order; add `member: "<slug>"` to highlight and link a lab member.
  `verified: false` shows a "citation details to be verified" tag.
- Photos go in `public/images/` (events: `public/images/events/`).

## Color tokens (`src/styles.css`, `:root`)

| Token                             | Usage                                   |
| --------------------------------- | --------------------------------------- |
| `--navy-deep`, `--navy`           | Brand navy (footer, dark panels)        |
| `--primary`                       | Buttons, stage indicator                |
| `--link`                          | Text links (`text-link` utility)        |
| `--sand`                          | Page-header and alternating sections    |
| `--note*`                         | Placeholders and "to be confirmed" tags |
| `--measured*`                     | "Measured so far" outcomes              |

Use semantic classes (`bg-primary`, `text-muted-foreground`, `bg-note`, …), not raw hex.

## Typography

- Headings: **Source Serif 4** (`font-display`)
- Body: **Inter** (`font-sans`)

Both load from Google Fonts in `src/routes/__root.tsx`.

## Shared components (`src/components/site/`)

`SiteHeader`, `SiteFooter`, `Page` (`Container`, `PageHeader`, `SectionHeading`),
`Placeholder` / `ImagePlaceholder` / `Unconfirmed`, `StageBadge` / `StageTrack`,
`Outcomes`, `ProjectCard`, `Citation`.
