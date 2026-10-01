# KASHIF 3D — Character Artist & Creative 3D Studio

> **Aesthetic:** Clean Minimalist White & Luminous Sky Blue (Modern 3D Studio / Light Mode)

A complete, multi-page, production-ready web application for **Kashif**, a professional 3D Modeler, 3D Designer, and Character Artist specializing in AAA game-ready characters, stylized & realistic digital sculpts, photorealistic PBR texturing, rigging, and interactive real-time Web 3D.

---

## 🎨 Design System & Palette

- **Primary Canvas**: Pure crisp white (`#FFFFFF`) with luminous ice-blue background layers (`#F8FAFC`, `#F0F9FF`).
- **Primary Accent**: Radiant Sky Blue (`#0284C7` / `#0EA5E9`), with bright hover states (`#0369A1` / `#38BDF8`).
- **Soft Glows & Accents**: Light sky tints (`#E0F2FE`), cyan badges (`#BAE6FD`), delicate glass borders (`border-sky-100` / `border-slate-200/80`).
- **Typography & Readability**: Deep slate-900 (`#0F172A`) for bold titles, slate-600 (`#475569`) for descriptive copy.
- **Card Elevation**: White floating cards with subtle sky-tinted drop shadows (`shadow-sm hover:shadow-xl hover:shadow-sky-100/60 border border-slate-200/70 transition-all duration-300`).
- **Tactile Buttons**:
  - **Primary CTA**: Tactile Sky Blue pill (`btn-primary-tactile`) with arrow micro-interaction.
  - **Secondary CTA**: Clean white card with sky border (`btn-secondary-tactile`).
- **Status Indicator**: Animated pulsing sky-blue beacon (`h-2 w-2 rounded-full bg-sky-500 animate-ping`).

---

## 🧭 Routing & Pages Architecture

Strict single `<BrowserRouter>` located in `src/App.tsx` and clean `src/main.tsx` preventing duplicate router errors.

- **`HomePage.tsx` (`/`)**:
  - **Strict Home Page Isolation**: Contains **STRICTLY the Hero and header data only** (Availability pill, Headline, Subtitle, Tactile CTA buttons, and 4 Trust metrics/stats). No extra stacked sections.
  - Features an embedded Three.js interactive 3D hero viewport (Clay sculpt / Studio sky / Chrome / Wireframe modes with 360° mouse & touch orbit).
- **`ServicesPage.tsx` (`/services`)**:
  - All 8 3D production services: Character Modeling, Game Rigging Pipeline, PBR Texturing, Hard Surface Mech, Product Viz, Interactive Web 3D, 3D Printing Prep, and Concept Translation.
  - Category filters, real-time search, deliverable checklists, software badges, and interactive Project Scope & Cost Estimator modal.
- **`WorkPage.tsx` (`/work`)**:
  - 6 featured case studies: *Aethelgard* (AAA Warrior), *Cyber-Unit 09* (Sci-Fi Android), *Milo & Pippa* (Stylized Mascot), *Chronos* (Luxury Timepiece), *Valkyrie* (3D Print Statue), and *Interactive Real-Time Web 3D Character Viewer*.
  - Live in-browser WebGL Three.js 3D viewer with wireframe toggle, lighting presets, and telemetry HUD (polycount, drawcalls, FPS).
  - Deep-dive technical `ProjectModal` for full topology, map packs, and deliverable reviews.
- **`AboutPage.tsx` (`/about`)**:
  - Artist profile & studio philosophy.
  - 3 Uncompromising Standards: Clean Topology, Artistic Accuracy, and Engine Optimization.
  - 10-Tool Software Arsenal with proficiency levels (ZBrush, Maya, Blender, Substance 3D Painter, Marvelous Designer, UE5, Unity, Marmoset, KeyShot, Photoshop).
  - 5-Phase Project Commission Pipeline with milestone gates and format delivery matrix (.FBX, .OBJ, .BLEND, .ZTL, .STL, .GLB).
- **`ContactPage.tsx` (`/contact`)**:
  - Direct Inquiry Desk (Email, WhatsApp, Discord, ArtStation, 12h SLA).
  - 3D Commission Request Form with all 6 required fields, dynamic pre-population from portfolio & estimator, tactile submission, and confetti confirmation state.
  - Commission FAQ accordion.

---

## 🛠️ Technology Stack

- **Framework**: React 18 / 19 + TypeScript + Vite
- **Styling**: Tailwind CSS (light mode customized palette)
- **3D Engine**: Three.js (WebGL real-time rendering, orbit controls, custom PBR/clay/normal shaders)
- **Icons**: Lucide React
- **Effects**: Canvas Confetti

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```
