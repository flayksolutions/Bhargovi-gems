# Bhargovi Gems — About + Process Sections

Next.js (App Router) build of two scroll sections, in page order:

1. **About** — a full-bleed plate that pins while a chamfered white card grows
   open as you scroll (the "Caribbean Island Retreats" interaction).
2. **Process** — "From Rough Stone to Polish": the left column scrolls through
   the step imagery while the right column stays pinned, swapping the active
   step name and revealing its description (the "UAE Property" interaction).

## Run

```bash
npm install
npm run dev
```

## Files

| Path | What it is |
| --- | --- |
| `lib/content.ts` | All copy + image paths. Edit here, not in the components. |
| `components/AboutSection.tsx` | About plate. Props: `eyebrow`, `title`, `body`, `image`, `alt`. |
| `components/AboutSection.module.css` | About styling + all growth math. |
| `components/ProcessSection.tsx` | Process section. Props: `eyebrow`, `title`, `steps`. |
| `components/ProcessSection.module.css` | Process styling. |
| `components/SmoothScroll.tsx` | Lenis provider, exposes `window.__lenis`. |
| `app/globals.css` | Palette + font tokens. |
| `public/images/rough-stone.jpg` | Placeholder plate used for all six steps. |
| `public/images/facility.jpg` | **Placeholder** — replace with the real HQ photograph. |

## Typography

Loaded from Google Fonts in `app/layout.tsx`:

- **Arsenal SC** → section title (`--font-display`)
- **Arsenal** → step names (`--font-heading`)
- **Manrope** → eyebrow, numbers, body copy (`--font-body`)

Arsenal SC is already a small-caps face, so the title is **not** transformed in
CSS — it renders small caps natively.

## How the About growth works

- The section is `260vh` tall; the plate inside is `sticky; top: 0; height: 100vh`,
  so it pins for the middle ~160vh of scroll.
- A rAF-throttled scroll listener writes progress (`0 → 1`, eased with
  `easeOutCubic`) into a `--p` custom property on the section. No React state,
  so nothing re-renders per frame — the browser just re-evaluates `calc()`.
- The card grows by interpolating **width, padding, chamfer size and title
  size** off `--p`, rather than `transform: scale()`. That keeps type crisp at
  every point in the growth instead of rasterising once and scaling it up.
- The background plate counter-zooms `1.14 → 1.0` and the scrim deepens, so the
  card feels like it's opening out of the image.

Tuning knobs, all in `AboutSection.module.css`:

| Want | Change |
| --- | --- |
| Slower / faster growth | `.section { height: 260vh }` |
| Bigger end state | `.card { width: calc(30vw + 16vw * var(--p)) }` |
| More dramatic start | lower the `30vw` base, raise the `16vw` delta |
| Corner size | `.card { --cn: calc(26px + 30px * var(--p)) }` |

## How the Process interaction works

- Each media block is `min-height: 96vh`, so one step ≈ one screen of scroll.
- An `IntersectionObserver` with `rootMargin: "-50% 0px -50% 0px"` collapses the
  viewport to a line at 50% height; whichever media block crosses it becomes the
  active step. No scroll math, no `requestAnimationFrame` polling, and it stays
  correct if image sizes or the panel height change.
- The description opens with a `grid-template-rows: 0fr → 1fr` transition, so it
  animates to auto height without measuring anything in JS.
- Clicking a step name scrolls to its image through the Lenis instance.
- Below 960px the sticky layout is dropped and every step renders as
  image + name + description in normal flow.

## Two things to keep in mind when integrating

1. **Never put `overflow-x: hidden` on `html`/`body`** — it silently disables
   `position: sticky` on the panel. `globals.css` uses `overflow-x: clip`.
2. **No `transform`, `filter`, `contain`, or `will-change` on an ancestor** of
   `.panel` — any of those create a containing block and the sticky panel will
   pin to that ancestor instead of the viewport.

## Swapping in real assets

Replace `PLACEHOLDER_IMAGE` in `lib/content.ts` with a per-step path. Images are
rendered with `next/image` `fill` + `object-fit: cover`; the chamfered
top-right / bottom-left corners come from `clip-path` on `.frame`, so supply
plain rectangular images. Corner size is the `--notch` token in `globals.css`.
