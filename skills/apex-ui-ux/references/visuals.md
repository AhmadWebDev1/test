# APEX UI/UX Hero Visuals & Product Previews

Guidelines for crafting memorable visual anchors that give products genuine authenticity rather than generic AI decoration.

---

## 1. The Core Law of Visual Restraint

* **One Polished Anchor:** A screen earns exactly one visual centerpiece that carries rich color, lighting, or 3D depth. Everything else on the screen (navigation, filters, cards, buttons) must step back into quiet, tinted neutrals.
* **True Domain Artifacts:** The visual must represent something physical or core to the product's actual domain:
  * *Finance / Invoicing:* A meticulously rendered metal payment card, physical receipt paper texture, or currency exchange ledger.
  * *Observability / Cloud:* A 3D isometric server chassis, real network topology graph, or live multi-channel signal stream.
  * *Developer Tools:* Syntax-highlighted code blocks resting on dark matte slate, hardware keycaps, terminal output traces.
  * *AI / Data:* Clean statistical density plots, token probability distributions, or structured vector spaces.
* **Strictly Prohibited Generic Tropes:** Floating neon spheres, iridescent blobs, glowing wireframe brains, rocket emojis, holographic floating cubes.

---

## 2. In-Code Product Previews (No Image Tool Needed)

When no generative image tool is available (or for fast, crisp web performance), build the visual anchor directly in HTML/CSS/Tailwind using plausible domain data:

### Key Principles
1. **Plausible, Realistic Content:** Never use `John Doe`, `$123.45`, or placeholder lorem ipsum. Use authentic names, realistic dates, and real-world numbers with correct decimal formatting.
2. **Layered Elevation:** Give the preview visual optical weight using a subtle 1px border (`border-white/10`) and a soft, neutral, diffused drop-shadow (`shadow-2xl shadow-black/40`).
3. **The Cut-Off Horizon Effect:** In a landing page hero, let the product interface preview rise from the bottom edge and extend slightly past the viewport fold. This visually anchors the screen and naturally invites the user to scroll down.

---

## 3. Generative Image Prompting (When Image Tools Are Available)

When using an image generator (DALL-E, Imagen, Midjourney) for a hero background scene or 3D asset:

* **Scene Composition:** Always compose the image asymmetrically. Request the primary subject placed on one side (e.g., right or center-bottom) with a vast, calm, atmospheric negative space on the other side where the text headline and CTA will sit.
* **Lighting & Tone:** Specify matte, directional studio lighting with physically accurate materials (brushed aluminum, dark ceramic, frosted glass, archival paper).
* **Negative Prompting:** Explicitly forbid: "neon glow, holographic colors, saturated purple, floating UI badges, text, watermarks, futuristic cyberpunk tropes".
