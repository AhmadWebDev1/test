---
name: apex-ui-ux
description: Master-level UI/UX craftsmanship and design engineering standard. Synthesizes heydamir/unslop, impeccable, ui-ux-pro-max-skill, frontend-design, web-design-guidelines, motion-design, and vercel-react-view-transitions. Enforces a 4px spatial rhythm, 60:30:10 chromatic hierarchy, zero-AI-slop visual discipline, nested border-radius physics, 60/120 FPS GPU-only motion tokens, native View Transitions, and WCAG 2.1 AA/AAA accessibility. Use whenever designing, building, polishing, reviewing, or unslopping interfaces, dashboards, apps, or design systems.
---

# 💎 APEX UI/UX — Master Craftsmanship & Design Engineering Standard

Synthesized strictly from **heydamir/unslop**, **impeccable**, **ui-ux-pro-max-skill**, **frontend-design**, **web-design-guidelines**, **motion-design**, and **vercel-react-view-transitions**.

This skill transforms generic, AI-looking ("vibecoded") interfaces into bespoke, production-grade digital software. It eliminates synthetic visual slop, enforces a mathematical 4px spatial rhythm, standardizes 60:30:10 color balance, guarantees 60/120 FPS GPU-compositor motion, and implements native View Transitions.

---

## 📚 Companion Skill Assets & Knowledge Graph

This skill is supported by dedicated, production-ready reference specifications and verification scripts located in this skill package:

* **Design Tokens & Numerical Scales:** [`references/tokens.md`](references/tokens.md) — 4px spatial scale, neutral dark/light ramps, typography pairing tables, nested radius math.
* **Curated Taste Presets:** [`references/taste-presets.md`](references/taste-presets.md) — Archetypes for *Linear/Vercel Precision Dark*, *Stripe Fintech*, *Apple Editorial*, and *Observability Cockpit*.
* **Slop Redline Audit:** [`references/slop-signs.md`](references/slop-signs.md) — Exhaustive checklist of 10 deadly AI slop patterns and how to dismantle them.
* **Visuals & Hero Anchors:** [`references/visuals.md`](references/visuals.md) — Rules for in-code product previews, realistic data, and image generation prompts.
* **Code Effects & Details:** [`references/effects.md`](references/effects.md) — Production recipes for quiet glassmorphism, inset bevel highlights, keycaps, and status indicators.
* **Native View Transitions:** [`references/view-transitions.md`](references/view-transitions.md) — CSS and JS code recipes for SPA morphing and shared element transitions.
* **Cross-Platform Mapping:** [`references/cross-platform.md`](references/cross-platform.md) — Direct mapping for Mobile (Flutter / SwiftUI), Desktop (Tauri / Electron), and Games (Unity / Unreal).
* **Automated Slop Linter Script:** [`scripts/audit-ui.mjs`](scripts/audit-ui.mjs) — Node.js script to automatically scan markup for AI slop and layout violations.
* **Viewport Snapshot Script:** [`scripts/snapshot.mjs`](scripts/snapshot.mjs) — Playwright utility to capture and verify mobile/desktop screen renders.

---

## ⚡ The 8-Pass Craftsmanship Protocol (Execution Workflow)

When building a new interface from scratch or overhauling an existing screen, execute these 8 passes sequentially across the entire surface:

```
┌──────────────────────────────────────────────────────────────────────────┐
│ 1. Audit & Slop Scan  ──> Run scripts/audit-ui.mjs & consult slop-signs │
│ 2. Set Direction       ──> Define 5 parameters & select a taste preset    │
│ 3. Layout & 4px Grid   ──> Establish density, sidebars, and containers   │
│ 4. Color & Chrome      ──> Apply 60:30:10 protocol with one accent token │
│ 5. Typography Scale    ──> Font pairings, tabular-nums, sentence case    │
│ 6. Impeccable Geometry ──> Nested radius formula & inset top-bevels      │
│ 7. Visual Anchor       ──> Single hero content moment (in-code or image) │
│ 8. Motion & Transitions──> GPU-only transforms & native View Transitions │
└──────────────────────────────────────────────────────────────────────────┘
```

---

### Pass 1: Audit & Slop Identification
* Scan the current screen against [`references/slop-signs.md`](references/slop-signs.md) or run:
  ```bash
  node scripts/audit-ui.mjs <path-to-markup>
  ```
* Identify and tag every occurrence of: purple/violet gradient bias, glowing buttons, gradient heading text, emoji labels, and uppercase tracked text.

### Pass 2: Set Direction & Taste Archetype
Before writing code, write down the 5 essential parameters:
1. **Product Purpose:** What it does and for whom in one sentence.
2. **Character:** 2–3 concrete adjectives (e.g., `calm, exact, technical`). No generic words ("clean", "modern", "premium").
3. **World:** The physical environment the product naturally inhabits (e.g., bank vault, oscilloscope cockpit, warm editorial paper).
4. **Moments (1–2 Only):** The exact one or two places on the screen that get rich color and depth (a master telemetry chart, a rendered card). Everything else stays quiet.
5. **Signature Detail:** One bespoke detail unique to this product (e.g., `<kbd>` keycaps, status dot, live route line).
* Choose a matching preset from [`references/taste-presets.md`](references/taste-presets.md).

### Pass 3: Spacing & The 4px Grid Rhythm
* **Multiples of 4 Only:** All margins, paddings, gaps, and heights follow the 4px scale from [`references/tokens.md`](references/tokens.md) ($4, 8, 12, 16, 20, 24, 32, 40, 48, 64\text{px}$).
* **Proximity Principle:** Space *inside* a card is strictly smaller than space *between* cards.
* **Application Shell Proportions:**
  - Sidebar: Fixed `240px` to `280px`.
  - Header: Sticky `56px` to `64px` with glassmorphic `backdrop-blur-md` and `1px border-white/10`.
  - Container: Fluid with `max-w-7xl` or `max-w-6xl` bounds.

### Pass 4: Color & Chromatic Discipline (60:30:10)
* **60% Dominant Neutral:** Select Graphite, Deep Ink, or Warm Slate from [`references/tokens.md`](references/tokens.md). No saturated colored backgrounds.
* **30% Structural Secondary:** Card fills (`bg-white/5` or neutral ramp) paired with 1px hairlines (`border-white/10`).
* **10% Accent Pop:** Consume the single `--color-accent` design token strictly for primary CTAs and active states.
* **Quiet Chrome:** Navigation, buttons, and sidebars remain quiet. Color is concentrated in the content moments.

### Pass 5: Typography & Data Ergonomics
* **Font Pairing:** One interface family (Inter, Geist, SF Pro) + one monospaced partner for metrics/data (Geist Mono, JetBrains Mono).
* **Restrained Weights:** Rely on `400` (normal) and `500` (medium). Limit `600` (semibold) to key focal points. Ban bold `700-900` headings.
* **Sentence Case Everywhere:** Labels, table headers, and navigation use sentence case (`Navigation`, `Recent transactions`).
* **Tabular Figures:** Always apply `tabular-nums` (`font-variant-numeric: tabular-nums`) to all numbers, currency, timestamps, and data tables.
* **Text Wrapping:** Apply `text-wrap: balance` to headings and `text-wrap: pretty` to descriptive paragraphs.

### Pass 6: Impeccable Geometry & Detail Craft
* **The Nested Radius Law:** Inner element radius must strictly follow:
  $$R_{\text{inner}} = \max\left(R_{\text{outer}} - \text{Padding}, \, 4\text{px}\right)$$
  *(See pre-calculated table in [`references/tokens.md`](references/tokens.md))*.
* **Inset Top Highlights:** Add subtle physical bevels to buttons and cards via `box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12)` (recipes in [`references/effects.md`](references/effects.md)).
* **Keycaps & Status Badges:** Use authentic monospaced `<kbd>` elements and subtle live indicator dots.

### Pass 7: Visual Anchor & Product Previews
* Construct or integrate the single hero visual anchor following [`references/visuals.md`](references/visuals.md).
* Use realistic, plausible domain data (realistic names, formatted currencies, genuine dates).
* In landing page heroes, use an asymmetric split or allow the product interface preview to rise past the bottom fold.

### Pass 8: GPU Motion & Native View Transitions
* **The Compositor-Only Law:** Animate **ONLY** `transform` and `opacity`. Strictly ban animating `width`, `height`, `top`, `left`, `margin`, or `padding`.
* **The Exit Acceleration Rule:** Exits must always be **20% to 30% faster** than entrances (e.g., modal enters in `250ms`, dismisses in `180ms`).
* **Motion Tokens:**
  - Micro-interactions: `100ms – 150ms` | `ease-out`.
  - State changes / Dropdowns: `200ms – 250ms` (enter) / `150ms` (exit) | `cubic-bezier(0.16, 1, 0.3, 1)`.
  - Modals / Surfaces: `300ms – 350ms` (enter) / `220ms` (exit) | `cubic-bezier(0.2, 0, 0, 1)`.
* **Native View Transitions:** Implement `@view-transition` and `view-transition-name` for seamless shared element morphing (recipes in [`references/view-transitions.md`](references/view-transitions.md)).
* **Mandatory Reduced Motion Override:**
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, ::before, ::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
  ```

---

## 🌐 Universal Internationalization (RTL / LTR)

All code generation must support global multi-lingual interfaces out of the box:
* Strictly write **Tailwind Logical Properties**:
  - `ms-*` / `me-*` (margin-start / margin-end) instead of `ml-*` / `mr-*`.
  - `ps-*` / `pe-*` (padding-start / padding-end) instead of `pl-*` / `pr-*`.
  - `start-*` / `end-*` instead of `left-*` / `right-*`.
* Ensure that applying `dir="rtl"` automatically mirrors the interface cleanly for Arabic and Hebrew without custom CSS overrides.
* Interactive touch target floor: **$44 \times 44\text{px}$** minimum clickable area.

---

## ✅ Pre-Flight Verification Gate

Before presenting code to the user, run this checklist:
1. [ ] Did you run `node scripts/audit-ui.mjs` or verify zero slop flags?
2. [ ] Are all dimensions exact multiples of 4px?
3. [ ] Does every nested child honor $R_{\text{inner}} = \max(R_{\text{outer}} - P, 4\text{px})$?
4. [ ] Are all metrics and financial figures set with `tabular-nums`?
5. [ ] Are animations restricted strictly to `transform` and `opacity`?
6. [ ] Are logical properties (`ms-`, `pe-`, `start-`) used throughout?
7. [ ] Are emojis, violet glows, and gradient texts completely absent?
8. [ ] Does normal text meet the 4.5:1 WCAG contrast floor?
