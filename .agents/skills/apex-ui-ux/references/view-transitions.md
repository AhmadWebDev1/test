# Native View Transitions Implementation Guide

Production recipes for implementing fluid, native view transitions and shared-element morphing without heavy JavaScript routing libraries.

---

## 1. Multi-Page Applications (MPA) / Static HTML

Enable native cross-document view transitions across pages with a single meta tag in your HTML `<head>`:

```html
<!-- In HTML <head> -->
<meta name="view-transition" content="same-origin">
```

### Custom Page Cross-Fade in CSS

```css
@view-transition {
  navigation: auto;
}

::view-transition-old(root) {
  animation: 180ms cubic-bezier(0.4, 0, 1, 1) both fade-out;
}

::view-transition-new(root) {
  animation: 220ms cubic-bezier(0, 0, 0.2, 1) 40ms both fade-in;
}

@keyframes fade-out {
  from { opacity: 1; }
  to { opacity: 0; }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

---

## 2. Single Page Applications (Vanilla JS / DOM Updates)

Wrap any state transition or DOM replacement in `document.startViewTransition()`:

```javascript
export function updateDOMWithTransition(mutateStateCallback) {
  // Graceful degradation for browsers without support
  if (!document.startViewTransition) {
    mutateStateCallback();
    return;
  }

  // Native hardware-accelerated snapshot and morph
  const transition = document.startViewTransition(() => {
    mutateStateCallback();
  });

  return transition;
}
```

---

## 3. Shared Element Transitions (Card to Full Modal Morph)

When clicking a card in a grid to expand it into a detail view or modal, assign a unique `view-transition-name` to both elements:

### CSS / Tailwind Utility

```css
/* Card in list view */
.item-card-image {
  view-transition-name: item-preview-target;
  contain: layout;
}

/* Expanded Modal / Detail View */
.modal-hero-image {
  view-transition-name: item-preview-target;
  contain: layout;
}
```

### Morph Customization

```css
::view-transition-group(item-preview-target) {
  animation-duration: 250ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

## 4. React Custom Hook (`useViewTransition`)

```tsx
import { useCallback } from "react";

export function useViewTransition() {
  const transition = useCallback((callback: () => void | Promise<void>) => {
    if (!("startViewTransition" in document)) {
      callback();
      return;
    }

    (document as any).startViewTransition(async () => {
      await callback();
    });
  }, []);

  return { transition };
}
```

---

## 5. Reduced Motion Override (Mandatory)

Always disable view transitions when the user requests reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  ::view-transition-group(*),
  ::view-transition-old(*),
  ::view-transition-new(*) {
    animation: none !important;
  }
}
```
