# APEX UI/UX Cross-Platform Implementation Guide

Mapping Apex UI/UX craftsmanship laws, mathematical formulas, and motion physics across **Mobile (Flutter / SwiftUI)**, **Desktop (Tauri / Electron / Qt)**, and **Game Engines (Unity / Unreal / Godot)**.

---

## 1. Flutter & Mobile Applications (iOS / Android)

The core principles of Apex UI/UX map directly into idiomatic Flutter widgets with zero impedance mismatch.

### A. The 4px Spatial Grid
Never use arbitrary margins or paddings:
```dart
// Standard spacing constants matching tokens.md
class AppSpacing {
  static const double space1 = 4.0;
  static const double space2 = 8.0;
  static const double space3 = 12.0;
  static const double space4 = 16.0; // Standard compact card & gutter
  static const double space5 = 20.0;
  static const double space6 = 24.0; // Standard dashboard card
  static const double space8 = 32.0; // Section separation
}
```

### B. Nested Radius Formula ($R_{\text{inner}} = \max(R_{\text{outer}} - P, 4)$)
```dart
// Outer Card (R = 16, Padding = 12) -> Inner Child (R = 4)
Container(
  decoration: BoxDecoration(
    color: const Color(0xFF14171C),
    borderRadius: BorderRadius.circular(16),
    border: Border.all(color: Colors.white.withOpacity(0.08)),
  ),
  padding: const EdgeInsets.all(12),
  child: ClipRRect(
    borderRadius: BorderRadius.circular(4), // 16 - 12 = 4
    child: Image.asset('assets/preview.png'),
  ),
)
```

### C. Tabular Figures (Anti-Jitter Metrics)
To prevent currency, timers, and health counters from horizontally shifting on every tick:
```dart
Text(
  '\$1,842,910.00',
  style: TextStyle(
    fontFamily: 'Inter',
    fontWeight: FontWeight.w600,
    fontFeatures: const [FontFeature.tabularFigures()],
  ),
)
```

### D. 60/120 FPS Motion & Repaint Isolation
* **Repaint Boundary:** Wrap animated widgets in `RepaintBoundary` to prevent raster repaints from invalidating the surrounding widget tree.
* **Compositor Only:** Animate strictly via `Transform.scale`, `Transform.translate`, or `Opacity`. Never animate container width or height.
* **Exit Acceleration Rule:**
  ```dart
  // Entrance: 250ms with EaseOut
  static const Duration enterDuration = Duration(milliseconds: 250);
  static const Curve enterCurve = Curves.easeOutCubic;

  // Exit: 180ms with EaseIn (28% faster)
  static const Duration exitDuration = Duration(milliseconds: 180);
  static const Curve exitCurve = Curves.easeInCubic;
  ```
* **Native Shared Element Morphing:** Use Flutter's native `Hero(tag: '...')` widget to replicate `view-transition-name` element morphing across screens.

---

## 2. Desktop Applications (Tauri, Electron, Qt, WinUI)

* **Tauri & Electron:** Consume Apex Tailwind / CSS design tokens (`references/tokens.md`) with 100% direct parity.
* **Quiet Chrome for Desktop:** Native window frames and custom titlebars must remain dark and quiet (`#0c0d0e`), with 1px hairlines at `border-white/10`.
* **Hardware Keycaps:** Render keyboard shortcuts cleanly using `<kbd>` style tokens:
  ```html
  <kbd class="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-xs text-zinc-400">Ctrl + K</kbd>
  ```

---

## 3. Game UI & HUDs (Unity, Unreal Engine, Godot)

In gaming, user interfaces must never distract the player from the core 3D gameplay or environment.

### A. The Quiet Chrome HUD Law
* Keep health bars, radar, inventory panels, and status indicators semi-transparent and neutral (60:30:10 protocol).
* Reserve bright chromatic accents strictly for critical alerts (Low Health, Quest Objectives, Critical Hits).

### B. Anti-Jitter Game Metrics (Tabular Monospace)
In Unity (`TextMeshPro`) or Unreal (`Slate` / `UMG`), set font assets to tabular numbers or use monospace tags:
```text
<mspace=18>HP: 98/100</mspace>
<mspace=18>AMMO: 028/120</mspace>
```

### C. Zero Layout Thrashing (Canvas Performance)
* **Never Animate RectTransform Size:** In Unity, tweening the `sizeDelta` or width/height of a UI element forces a full Canvas rebuild and layout re-batching, dropping frame rates.
* **Animate via CanvasGroup:** Animate menus and popups exclusively using `CanvasGroup.alpha` and `transform.localScale` for silky-smooth 60/120 FPS rendering.
* **Exit Acceleration:** Dismiss inventory screens, pause menus, and death screens 20% to 30% faster than they opened.
