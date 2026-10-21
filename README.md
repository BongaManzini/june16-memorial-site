# June 16 – South African Youth Day Memorial Site

A web memorial dedicated to honoring the students and youth of the **1976 Soweto Uprising** — a pivotal moment in South African history that shaped the course of the anti-apartheid struggle. This site combines immersive visuals, historical content, and interactive media to educate and commemorate June 16, now observed nationally as **Youth Day**.

---

## Features

- **3D Hero Visuals** — Immersive Three.js scene rendered via `@react-three/fiber` and `@react-three/drei`
- **Animated UI** — Smooth, scroll-triggered animations powered by Framer Motion
- **Historical Timeline** — Interactive timeline tracing key events of June 16, 1976
- **Photo Gallery** — Masonry-layout gallery with lightbox support (`react-masonry-css` + `yet-another-react-lightbox`)
- **Resources Section** — Curated links and materials for further reading
- **About Section** — Context and background on the significance of Youth Day
- **Fully Responsive** — Mobile-first design built with Tailwind CSS

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | 19 | UI framework |
| [Vite](https://vitejs.dev/) | 6 | Build tool & dev server |
| [Three.js](https://threejs.org/) | 0.177 | 3D rendering engine |
| [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) | 9 | React renderer for Three.js |
| [@react-three/drei](https://github.com/pmndrs/drei) | 10 | Three.js helpers & abstractions |
| [Framer Motion](https://www.framer.com/motion/) | 12 | Animation library |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Utility-first CSS framework |
| [react-masonry-css](https://github.com/paulcollett/react-masonry-css) | 1 | Masonry grid layout |
| [yet-another-react-lightbox](https://yet-another-react-lightbox.com/) | 3 | Image lightbox viewer |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd june16-site
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Project Structure

```
june16-site/
├── public/               # Static assets (images, icons)
├── src/
│   ├── assets/           # Imported assets (fonts, media)
│   ├── components/       # React components
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── TimelineSection.jsx
│   │   ├── GallerySection.jsx
│   │   ├── ResourcesSection.jsx
│   │   ├── AboutSection.jsx
│   │   └── Footer.jsx
│   ├── data/             # Historical data & content
│   ├── App.jsx           # Root component
│   └── main.jsx          # Application entry point
├── index.html
├── vite.config.js
└── package.json
```

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Build optimised production bundle |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint checks |

---

## License

This project is licensed under the **MIT License** — see below for details.

```
MIT License

Copyright (c) 2025

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

> *"The youth of 1976 did not die in vain. Their courage lives on in every South African who dares to stand up for justice."*
