# Coach Yanto – Mental Detox Masterclass Redesign

A redesign of the official landing page for **Coach Yanto's Mental Detox Masterclass** ([coachyanto.com/mental-detox-masterclass](https://coachyanto.com/mental-detox-masterclass/)), featuring an integrated **Liquid Glass Expandable Sidebar**, interactive assessment quizzes, and an executive neuroscience-driven design system.

![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite)
![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=for-the-badge&logo=greensock)

---

## 🌟 Key Features

1. **Liquid Glass Expandable Sidebar**
   - High-fidelity frosted glass effect using native SVG displacement mapping and backdrop filters.
   - Smooth state transitions and morphing with GSAP & `@gsap/react` Flip plugin.
   - Real-time client-side search filter across curriculum groups and subpages.
   - Expandable / collapsible icon-rail mode with keyboard accessibility and ARIA semantics.

2. **Executive Mental Clarity Redesign**
   - **Hero Section:** High-impact value proposition, real social proof stats (1,500+ Alumni, 98.4% satisfaction rate), and direct WhatsApp registration triggers.
   - **The Overthinking Trap:** Contrast comparison between unmanaged cognitive overload vs the clarity achieved post-masterclass.
   - **Interactive Mental Noise Assessment:** Built-in 4-question self-diagnostic calculator giving users instant clarity index scores and tailored NLP recommendations.
   - **The 3-Pillar Framework:**
     - *Pillar 01:* Neural Pattern Interrupt
     - *Pillar 02:* Cognitive De-Cluttering & Reframing
     - *Pillar 03:* Grounded Decision Velocity
   - **4 Core Modules Syllabus:** Interactive accordion exploring neuroscience, NLP techniques, and daily protocols.
   - **Coach Yanto Profile:** Credibility showcase for the Founder of Mind Mastery Academy and Licensed NLP Master Practitioner.
   - **Exclusive Bonus Suite & Pricing:** Transparent breakdown of the E-Workbook, Session Recordings, E-Certificate, and WhatsApp registration.
   - **Dual View Mode:** Toggle seamlessly between the redesigned Masterclass website and the original visual component demo gallery.

---

## 🚀 Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite
- **Styling:** Tailwind CSS + Custom CSS Variables for Glassmorphism
- **Animations:** GSAP 3 (Flip plugin) + `@gsap/react`
- **Icons:** `lucide-react`
- **Typography:** `@fontsource-variable/manrope`

---

## 📂 Project Structure

```
├── components/
│   └── ui/
│       └── liquid-glass-expandable-sidebar.tsx
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── liquid-glass-expandable-sidebar.tsx
│   │   │   └── demo.tsx
│   │   ├── MentalNoiseAssessment.tsx
│   │   └── MentalDetoxWebsite.tsx
│   ├── data/
│   │   └── masterclassData.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

---

## 🛠️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/andreyhong/coachyanto-mental-detox.git
cd coachyanto-mental-detox
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser.

### 4. Build for production
```bash
npm run build
```

---

## 📄 License
MIT License. Inspired by Coach Yanto's Mental Detox Masterclass program.
