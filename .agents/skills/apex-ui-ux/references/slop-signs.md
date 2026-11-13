# APEX UI/UX Slop Signs & Redline Audit Checklist

Use this audit checklist to identify and eliminate synthetic, AI-generated design slop ("Vibecoded UI") before shipping.

---

## The 10 Deadly Slop Signs

### 1. The Violet / Purple Addiction
* **The Slop:** Backgrounds washed with indigo/violet, radial purple glows behind cards, or lavender borders.
* **The Fix:** Replace with a calibrated neutral ramp (Graphite, Ink, or Warm Slate). Reserve color strictly for the 10% accent token and true content moments.

### 2. Glowing Borders & Neon Halos
* **The Slop:** `box-shadow: 0 0 20px rgba(147, 51, 234, 0.5)` or neon borders around every button and card.
* **The Fix:** Quiet 1px hairlines at `border-white/10` (dark mode) or `border-black/5` (light mode). Depth comes from surface luminescence steps, not glowing halos.

### 3. Gradient Text Headings
* **The Slop:** `-webkit-background-clip: text; color: transparent; background-image: linear-gradient(...)` on headlines.
* **The Fix:** Solid, high-contrast, beautiful typography (`text-zinc-100` or `#ffffff`). Headings must read clearly at a glance without synthetic sheen.

### 4. Emoji As UI Controls & Badges
* **The Slop:** `New ✨`, `Pro 🚀`, `Welcome Damir! 👋`, or emojis prepending every sidebar link.
* **The Fix:** Replace emojis with a single unified 16px/18px line icon set (Lucide / Phosphor) with `1.5px` stroke, styled in the secondary/muted text color.

### 5. Shouting Uppercase Tracked Labels
* **The Slop:** `class="uppercase tracking-widest text-[10px] font-bold"` applied to normal headings, table cells, or body copy.
* **The Fix:** Use natural sentence case everywhere (`Navigation`, `Recent transactions`, `Total spent`). Restrict uppercase tracking strictly to 3-letter currency codes (`USD`, `EUR`) or acronyms (`API`, `ID`).

### 6. Concentric Radius Violation (Un-nested Corners)
* **The Slop:** Giving an outer card `rounded-2xl` ($16\text{px}$) and its inner image or button also `rounded-2xl` ($16\text{px}$), creating awkward, bulging visual corners.
* **The Fix:** Apply $R_{\text{inner}} = \max(R_{\text{outer}} - \text{Padding}, \, 4\text{px})$.

### 7. Non-Tabular Number Jitter
* **The Slop:** Metrics, timers, or prices bouncing horizontally whenever digits change because proportional font figures vary in character width.
* **The Fix:** Add `font-variant-numeric: tabular-nums` (`tabular-nums`) to all counters, currencies, metrics, and data tables.

### 8. Animating Layout Properties (Layout Thrashing)
* **The Slop:** `transition: all 0.3s ease` or animating `width`, `height`, `top`, `left`, `margin`, or `padding`. Causes stuttering and 30 FPS drops on mobile.
* **The Fix:** Animate exclusively `transform` and `opacity`. Name target properties explicitly (`transition-[transform,opacity] duration-150`).

### 9. Rainbow Chart Fillers
* **The Slop:** A single series bar chart where every bar is a different color of the rainbow, or glowing pastel bars.
* **The Fix:** One accent color for the active/highlighted bar; all other bars remain quiet neutral steps of the ramp. Color changes only when series genuinely differ.

### 10. AI Hype Copy & Empty Excitement
* **The Slop:** "Supercharge your workflow with our seamless, AI-powered magical platform! 🚀"
* **The Fix:** Say plainly what the product does for whom in factual terms: "Ingest and query 10M events per second with sub-millisecond p99 latency."
