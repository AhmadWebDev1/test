# APEX UI/UX Code Effects & Craft Treatments

Production-ready CSS and Tailwind recipes for high-end micro-details and tactile depth.

---

## 1. Sophisticated Glassmorphism (Quiet, Not Milky)

Amateur glassmorphism uses thick, opaque white backgrounds with excessive blur, making text unreadable. Apex glassmorphism is whisper-quiet, sharp, and maintains dark mode depth:

```html
<!-- High-End Sticky Header / Floating Toolbar -->
<header class="sticky top-0 z-50 border-b border-white/10 bg-[#0e1013]/70 backdrop-blur-md">
  <div class="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
    <!-- Header content -->
  </div>
</header>
```

*Formula:* Background opacity between `60%` and `75%` + `backdrop-blur-md` (or `backdrop-blur-lg`) + `1px border-white/10`.

---

## 2. The Inset Top Highlight (Depth Without Glow)

Give buttons, cards, and input fields a crisp physical bevel using an inset top-edge hairline shadow:

```css
/* Custom CSS class or arbitrary Tailwind shadow */
.apex-surface-bevel {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12);
}
```

```html
<!-- Applied to an Off-White Primary Button on Dark Theme -->
<button class="inline-flex h-9 items-center justify-center rounded-sm bg-zinc-100 px-4 text-xs font-medium text-zinc-900 transition-[transform,opacity] duration-150 hover:bg-white active:scale-[0.98] [box-shadow:inset_0_1px_0_rgba(255,255,255,0.4)]">
  Deploy Changes
</button>

<!-- Applied to a Dark Secondary Button -->
<button class="inline-flex h-9 items-center justify-center rounded-sm border border-white/10 bg-white/5 px-4 text-xs font-medium text-zinc-200 transition-[background-color,border-color] duration-150 hover:bg-white/10 [box-shadow:inset_0_1px_0_rgba(255,255,255,0.08)]">
  Documentation
</button>
```

---

## 3. Live Telemetry Status Dots

A clean, non-distracting live status pill with a subtle animated beacon ring:

```html
<span class="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-400">
  <span class="relative flex size-1.5">
    <span class="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
    <span class="relative inline-flex size-1.5 rounded-full bg-emerald-500"></span>
  </span>
  Healthy
</span>
```

---

## 4. Hardware Keycaps (`<kbd>`)

Physical keyboard shortcut badges for navigation and command palettes:

```html
<kbd class="inline-flex items-center gap-0.5 rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] font-medium text-zinc-400 shadow-sm">
  <span class="text-[9px]">⌘</span>K
</kbd>
```

---

## 5. Subtle Noise Texture (Editorial / Analog Feel)

When designing editorial, luxury, or warm interfaces, a tiny 2% SVG noise filter adds tactile grain and prevents color banding in deep gradients:

```css
.apex-noise-layer {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.02'/%3E%3C/svg%3E");
}
```
