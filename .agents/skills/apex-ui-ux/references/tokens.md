# APEX UI/UX Design Tokens & System Baselines

Authoritative numerical values, scales, and design tokens for engineering interfaces with mathematical precision.

---

## 1. Spatial Grid (4px Base Rhythm)

All paddings, margins, gaps, fixed dimensions, and icon bounding boxes must derive strictly from this scale:

| Token | Pixels | Usage Context |
| :--- | :--- | :--- |
| `space-1` | `4px` | Micro-gap inside compact badges, icon-to-label gap in small pills, border offsets |
| `space-2` | `8px` | Gap between icon and label, padding inside small inputs, segmented control padding |
| `space-3` | `12px` | Internal padding for compact controls, list row gap |
| `space-4` | `16px` | Standard compact card padding, sidebar internal padding, default button x-padding |
| `space-5` | `20px` | Medium card padding, space between related form groups |
| `space-6` | `24px` | Standard dashboard card padding, page gutter on mobile viewports |
| `space-8` | `32px` | Large panel padding, section gap within application shells, desktop page gutter |
| `space-10` | `40px` | Space between distinct data blocks or widget groups |
| `space-12` | `48px` | Spacing between major page modules |
| `space-16` | `64px` | Landing page section margins, top-level dashboard separation |
| `space-20` | `80px` | Hero section top-to-bottom rhythm |
| `space-24` | `96px` | Major landing page vertical rhythm |

### Structural Proportions
- **Sidebar Width:** Fixed `240px` to `280px` (dense: 240px, expansive: 280px).
- **Navigation Row Height:** `32px` (compact) to `36px` (comfortable).
- **Header / Top Bar Height:** `56px` to `64px` (sticky with `backdrop-blur-md`).
- **Dashboard Max Width:** `max-w-7xl` (`1280px`) or `max-w-6xl` (`1152px`) centered fluid container.
- **Data Table Row Height:** `40px` to `48px`.

---

## 2. Neutral Ramps & Surface Steps

Surfaces must never be pure `#000000` or saturated rainbow colors. Use tinted neutral ramps where the content and the 1-2 hero moments carry the chromatic weight.

### Dark Themes

| Role | Graphite (Default Tech) | Deep Ink (Observability) | Warm Neutral (Editorial) |
| :--- | :--- | :--- | :--- |
| **Canvas / Background** | `#0e1013` | `#080a0f` | `#121110` |
| **Deepest Surface (Sidebar)** | `#0a0b0d` | `#05060a` | `#0e0d0c` |
| **Card / Surface Base** | `#14171c` | `#0e111a` | `#181715` |
| **Raised (Hover / Popover)** | `#1c2027` | `#151926` | `#21201d` |
| **Active / Input Fill** | `#242932` | `#1d2334` | `#2a2825` |
| **Hairline Border** | `rgba(255, 255, 255, 0.08)` | `rgba(255, 255, 255, 0.08)` | `rgba(255, 255, 255, 0.07)` |
| **Primary Text** | `#f3f4f6` | `#f1f3f9` | `#f5f2eb` |
| **Secondary Text** | `#9ca3af` | `#9ba5ba` | `#a49f96` |
| **Muted Text / Meta** | `#6b7280` | `#6d778d` | `#77726a` |

### Light Themes

| Role | Graphite (Clean SaaS) | Deep Ink (Technical) | Warm Neutral (Editorial) |
| :--- | :--- | :--- | :--- |
| **Canvas / Background** | `#f9fafb` | `#f6f8fb` | `#fbf9f5` |
| **Card / Surface Base** | `#ffffff` | `#ffffff` | `#ffffff` |
| **Raised (Hover / Active)** | `#f3f4f6` | `#eff3f8` | `#f3eee6` |
| **Input / Inactive Fill** | `#e5e7eb` | `#e2e8f0` | `#e7e1d6` |
| **Hairline Border** | `rgba(0, 0, 0, 0.08)` | `rgba(0, 0, 0, 0.08)` | `rgba(0, 0, 0, 0.07)` |
| **Primary Text** | `#111827` | `#0f172a` | `#1c1917` |
| **Secondary Text** | `#4b5563` | `#475569` | `#57534e` |
| **Muted Text / Meta** | `#6b7280` | `#64748b` | `#78716c` |

### Semantic Colors (Restrained, Non-Neon)
* **Success / Positive:** Dark: `#34d399` / Light: `#059669` (surface badge: `bg-emerald-500/10 text-emerald-400 border border-emerald-500/20`)
* **Warning:** Dark: `#fbbf24` / Light: `#d97706` (surface badge: `bg-amber-500/10 text-amber-400 border border-amber-500/20`)
* **Destructive / Error:** Dark: `#f87171` / Light: `#dc2626` (surface badge: `bg-red-500/10 text-red-400 border border-red-500/20`)
* **Informational:** Dark: `#60a5fa` / Light: `#2563eb` (surface badge: `bg-blue-500/10 text-blue-400 border border-blue-500/20`)

---

## 3. Typography Hierarchy & Pairings

### Curated Pairings
1. **Precision Technical:** `Geist` or `Inter` + `Geist Mono` / `JetBrains Mono` for data and metrics.
2. **Apple Modern / Clean Editorial:** `SF Pro` / `Inter` + `Newsreader` or `Instrument Serif` (for hero titles only).
3. **High-Density Fintech:** `IBM Plex Sans` + `IBM Plex Mono`.

### Numerical Scale

| Role | Font Size | Line Height | Tracking | Weight | Class |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Micro Meta / Badges** | `11px` | `14px` | `0` | `500` | `text-[11px] leading-[14px] font-medium` |
| **Caption / Help Text** | `12px` | `16px` | `0` | `400` | `text-xs leading-4` |
| **Secondary / UI Labels** | `13px` | `18px` | `0` | `400 / 500`| `text-[13px] leading-[18px]` |
| **Body / Navigation** | `14px` | `20px` | `0` | `400 / 500`| `text-sm leading-5` |
| **Section Subhead** | `16px` | `24px` | `-0.01em` | `500` | `text-base leading-6 font-medium` |
| **Card Metric (Tabular)**| `24px` to `28px`| `32px` | `-0.02em` | `500` | `text-2xl font-medium tabular-nums` |
| **Page Title** | `28px` to `32px`| `36px` | `-0.02em` | `500` | `text-3xl font-medium tracking-tight` |
| **Landing Hero Headline**| `48px` to `64px`| `1.08` | `-0.03em` | `500` | `text-5xl md:text-6xl tracking-tight text-balance` |

*Rule:* All numerical metrics, currency amounts, timestamps, and column data must have `font-variant-numeric: tabular-nums` (`tabular-nums`).

---

## 4. Nested Border Radius Formula ($R_{\text{inner}}$)

Never apply identical corner radii to an outer card and an inner element:
$$R_{\text{inner}} = \max\left(R_{\text{outer}} - \text{Padding}, \, 4\text{px}\right)$$

### Pre-Calculated Matchups

| Outer Card Radius | Card Internal Padding | Inner Child Element Radius | Tailwind Classes (Outer / Inner) |
| :--- | :--- | :--- | :--- |
| `12px` (`rounded-xl`) | `8px` (`p-2`) | `4px` (`rounded-sm`) | `rounded-xl p-2` -> `rounded-sm` |
| `16px` (`rounded-2xl`) | `12px` (`p-3`) | `4px` (`rounded-sm`) | `rounded-2xl p-3` -> `rounded-sm` |
| `20px` (`rounded-[20px]`)| `16px` (`p-4`) | `4px` (`rounded-sm`) | `rounded-[20px] p-4` -> `rounded-sm` |
| `24px` (`rounded-3xl`)| `16px` (`p-4`) | `8px` (`rounded-md`) | `rounded-3xl p-4` -> `rounded-md` |
| `24px` (`rounded-3xl`)| `20px` (`p-5`) | `4px` (`rounded-sm`) | `rounded-3xl p-5` -> `rounded-sm` |

---

## 5. Motion Durations & Physical Curves

All animations must execute exclusively via the GPU compositor (`transform` and `opacity` only).

### The Exit Acceleration Rule
**Exits must always be 20% to 30% faster than corresponding entrances.** Users require immediate dismissal of UI layers (drawers, dialogs, menus) so the interface feels light and instantaneous:
* Dialog Enters in `250ms` (ease-out) ➔ Exits in `180ms` (ease-in / accelerating).
* Menu Expands in `200ms` ➔ Closes in `150ms`.
* Notification Banner Enters in `300ms` ➔ Dismisses in `210ms`.

### Standard Motion Table

| Interaction | Entrance Duration | Exit Duration (-20% to -30%) | Cubic-Bezier Curve | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Micro-press / Click** | `100ms` | `100ms` | `cubic-bezier(0.4, 0, 0.2, 1)` | Instant tactile feedback |
| **Hover / Focus Ring** | `150ms` | `150ms` | `cubic-bezier(0.16, 1, 0.3, 1)` | Fluid surface response |
| **Menu / Dropdown** | `200ms` | `150ms` | `cubic-bezier(0.16, 1, 0.3, 1)` | Swift menu toggle |
| **Drawer / Sheet Slide** | `280ms` | `200ms` | `cubic-bezier(0.2, 0, 0, 1)` | Physical inertia slide |
| **Modal Dialog Pop** | `300ms` | `220ms` | `cubic-bezier(0.16, 1, 0.3, 1)` | Spring-damped scale & fade |
| **View Transition Morph**| `220ms` | `180ms` | `cubic-bezier(0.22, 1, 0.36, 1)`| Seamless page/card morph |

