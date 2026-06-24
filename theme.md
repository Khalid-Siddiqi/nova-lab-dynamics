# Theme Guide — Lab/Research Site

A premium "AI research institute" theme: deep navy + royal/electric blue with soft cyan highlights, glassmorphism, gradient mesh backgrounds, custom cursor, magnetic buttons, tilt cards, and scroll-reveal animations.

All tokens live in `src/styles.css` (Tailwind v4, CSS-first config — no `tailwind.config.js`). Use semantic class names (`bg-primary`, `text-foreground`, `text-gradient`, `bg-hero`) — never hardcode hex colors in components.

---

## 1. Color Palette

Defined as OKLCH custom properties under `:root` in `src/styles.css`.

| Token            | OKLCH                        | Approx Hex | Usage                          |
| ---------------- | ---------------------------- | ---------- | ------------------------------ |
| `--navy-deep`    | `oklch(0.18 0.07 265)`       | `#081B3A`  | Hero bg, foreground text       |
| `--navy`         | `oklch(0.26 0.09 265)`       | `#13234D`  | Dark surfaces                  |
| `--royal`        | `oklch(0.58 0.22 262)`       | `#0E5EFF`  | Primary brand, CTAs            |
| `--electric`     | `oklch(0.72 0.16 245)`       | `#39A7FF`  | Accent, glows, hover           |
| `--cyan-soft`    | `oklch(0.88 0.10 220)`       | `#6EE7FF`  | Highlights, gradient stops     |
| `--background`   | `oklch(0.99 0.005 240)`      | near-white | Page bg                        |
| `--foreground`   | `oklch(0.18 0.07 265)`       | navy-deep  | Body text                      |
| `--primary`      | royal                        | —          | shadcn primary                 |
| `--accent`       | electric                     | —          | shadcn accent                  |

Dark mode overrides background → navy-deep, card → navy.

## 2. Typography

Load via `<link>` in `src/routes/__root.tsx` head (NOT `@import` in CSS).

- **Display** (h1–h4): `Space Grotesk`, weights 500/600/700, letter-spacing `-0.02em`
- **Body**: `Inter`, weights 400/500/600

```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
```

## 3. Gradients

```css
--gradient-hero: radial mesh of royal + electric + cyan over navy
--gradient-cta:  linear royal → electric → cyan-soft (135°)
--gradient-text: linear electric → cyan-soft (135°)
```

Utilities: `.bg-hero`, `.bg-cta`, `.text-gradient`.

## 4. Shadows

- `--shadow-glow` — electric ring + royal drop, used on CTAs / featured cards
- `--shadow-glass` — soft outer + inner top-light, used with `.glass`
- `--shadow-elevate` — deep dropdown for lifted cards

## 5. Custom Utilities (Tailwind v4 `@utility`)

| Class                  | Effect                                                  |
| ---------------------- | ------------------------------------------------------- |
| `glass`                | translucent white blur(20px) + glass shadow             |
| `glass-dark`           | translucent navy blur for dark sections                 |
| `text-gradient`        | electric → cyan text fill                               |
| `bg-hero` / `bg-cta`   | mesh / CTA gradient backgrounds                         |
| `shadow-glow`          | brand glow                                              |
| `animate-float`        | gentle 6s vertical float                                |
| `animate-gradient-pan` | shifting gradient bg (8s)                               |
| `animate-fade-up`      | one-shot 0.8s rise-in                                   |
| `animate-pulse-ring`   | radiating ring (status dots)                            |
| `reveal`               | scroll-reveal base (toggled by `.is-visible` via IO)    |
| `magnetic`             | smooth transform transition for magnetic buttons        |

## 6. Interactive Components

- `CustomCursor` — dot + ring, mix-blend-mode difference; hides on touch
- `MagneticButton` — pointer-following translate inside CTA
- `TiltCard` — pointer-tracked 3D rotateX/Y
- `Reveal` — IntersectionObserver toggles `.is-visible`
- `ScrollProgress` — top progress bar driven by scroll
- `.mouse-glow` — radial gradient that follows pointer via `--mx`/`--my`

## 7. Radius Scale

Base `--radius: 0.875rem` → `rounded-sm/md/lg/xl/2xl/3xl` cascade.

## 8. Reuse Checklist

To port this theme to another project:

1. Copy `src/styles.css` (the `@theme`, `:root`, `.dark`, `@utility`, and `@keyframes` blocks).
2. Add the Google Fonts `<link>` to your root layout `<head>`.
3. Copy `src/components/`: `CustomCursor`, `MagneticButton`, `TiltCard`, `Reveal`, `ScrollProgress`, `Counter`.
4. Use semantic tokens in JSX: `bg-primary`, `text-foreground`, `bg-hero`, `text-gradient`, `glass`, `shadow-glow` — never raw hex/Tailwind color utilities like `bg-blue-500` or `text-white`.
5. Tailwind v4 only — do NOT create `tailwind.config.js`; configure via `@theme` in CSS.

## 9. Design Principles

- **No generic AI purple/indigo.** Stick to navy + royal/electric blue + cyan.
- **Glass over flat.** Cards use `glass` or `glass-dark` with subtle borders.
- **Motion is purposeful.** Reveal on scroll, magnetic on CTAs, tilt on featured cards — never decorative jitter.
- **Semantic tokens only.** All theming flows through CSS variables so dark mode + future rebrands are one-file changes.
