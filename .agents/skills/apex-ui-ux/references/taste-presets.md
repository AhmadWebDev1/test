# APEX UI/UX Taste Presets & Design Archetypes

Curated, production-tested visual baselines. When establishing or overhauling an interface, select the archetype that maps directly to the product's world.

---

## Preset 1: Linear / Vercel Precision Dark (Developer & Productivity Tools)

* **World:** Terminal buffers, carbon fiber, quiet mechanical keyboards, focused night workflows.
* **Dominant 60%:** Graphite canvas `#0c0d0e` with sidebar at `#08090a`.
* **Secondary 30%:** Card fills at `#121316`, surface hover at `#1a1c20`, 1px hairlines at `border-white/10`.
* **Accent 10%:** High-contrast Electric Blue `#2563eb` or Cyan `#06b6d4` (`--color-accent: #2563eb`).
* **Typography:** `Geist` (primary) + `Geist Mono` (for IDs, keycaps, filters, numbers).
* **Card Radii:** Outer `rounded-xl` ($12\text{px}$), Inner elements `rounded-sm` ($4\text{px}$) with `p-4` padding.
* **Signature Detail:** Subtle top edge highlight on buttons/cards (`inset 0 1px 0 rgba(255, 255, 255, 0.12)`) + authentic `<kbd>` keycaps with borders.

```html
<!-- Example Card Markup -->
<div class="rounded-xl border border-white/10 bg-[#121316] p-4 shadow-sm">
  <div class="flex items-center justify-between">
    <span class="text-xs font-mono text-zinc-500">APX-4091</span>
    <span class="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-400">
      <span class="size-1.5 rounded-full bg-emerald-400"></span> Live
    </span>
  </div>
  <h4 class="mt-2 text-sm font-medium text-zinc-100">Telemetry Stream Ingestion</h4>
  <p class="mt-1 text-xs text-zinc-400 line-clamp-2">Direct off-main-thread compute buffer with backpressure.</p>
</div>
```

---

## Preset 2: Stripe / High-End Fintech (Payments, Banking, B2B SaaS)

* **World:** Polished brass vaults, security holograms, architectural glass, precision ledger books.
* **Dominant 60%:** Deep Slate `#090d16` (Dark) or Crisp Snow `#f8fafc` (Light).
* **Secondary 30%:** Rich card surface `#0f172a` (Dark) / `#ffffff` (Light) with hairlines `border-slate-800` / `border-slate-200`.
* **Accent 10%:** Royal Cobalt `#1d4ed8` or Deep Emerald `#059669`.
* **Typography:** `Inter` or `SF Pro` + `IBM Plex Mono` for currency figures.
* **Card Radii:** Outer `rounded-2xl` ($16\text{px}$), Inner child elements `rounded-sm` ($4\text{px}$) with `p-5` padding.
* **Signature Detail:** High-contrast stat cards with explicit delta indicators (`+18.4% vs last cycle`), right-aligned tabular figures, zero decorative sparklines.

```html
<!-- Example Stat Card Markup -->
<div class="rounded-2xl border border-slate-800 bg-[#0f172a] p-5">
  <span class="text-xs font-medium text-slate-400">Gross Processed Volume</span>
  <div class="mt-2 flex items-baseline justify-between">
    <span class="text-3xl font-semibold tracking-tight text-white tabular-nums">$1,842,910.00</span>
    <span class="text-xs font-medium text-emerald-400 tabular-nums">+14.2%</span>
  </div>
  <span class="mt-1 block text-[11px] text-slate-500">vs. $1,613,400.00 previous 30 days</span>
</div>
```

---

## Preset 3: Apple Modern / Calm Editorial (Content, Media, Notes, Design)

* **World:** Archival paper, linen cloth, natural sunlight, gallery curation, unhurried reading.
* **Dominant 60%:** Warm Canvas `#141312` (Dark) or `#faf8f5` (Light).
* **Secondary 30%:** Soft stone surface `#1c1a18` (Dark) / `#ffffff` (Light) with hairlines `border-stone-800` / `border-stone-200`.
* **Accent 10%:** Warm Terracotta `#ea580c` or Raw Amber `#d97706`.
* **Typography:** `Instrument Sans` / `Inter` + `Newsreader` (for large editorial hero headings only).
* **Card Radii:** Outer `rounded-[20px]`, Inner buttons `rounded-md` with `p-6` padding.
* **Signature Detail:** Generous negative space, large asymmetric hero scenes with headlines resting on calm empty space, zero synthetic gradients.

---

## Preset 4: Observability Cockpit (DevOps, Cloud, Incident Management)

* **World:** Aircraft flight deck, mission control radar, live oscilloscopes, 24/7 monitoring panels.
* **Dominant 60%:** Pitch Ink `#05070a` with panels at `#0a0e14`.
* **Secondary 30%:** Dense grid lines at `border-white/5`, elevated row hover at `#111722`.
* **Accent 10%:** Signal Amber `#f59e0b` or Alert Crimson `#ef4444`.
* **Typography:** Monospace-first (`JetBrains Mono` or `Geist Mono` across all tabular rows and tags).
* **Card Radii:** Small sharp corners (`rounded-lg` $8\text{px}$ outer, `rounded-sm` $4\text{px}$ inner controls).
* **Signature Detail:** Live status pulsating indicators, monospaced timestamp columns, high-density row heights ($32\text{px}$).
