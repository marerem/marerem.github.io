# Installation

## Quick Start

```bash
# Clone the repository
git clone <your-repo-url>
cd nim

# Install dependencies
npm install

# Start development server
npm run dev
```

## Customisation

All personal content lives in a single file:

```
site.config.ts
```

Edit this file to update:

- **Name & title** — displayed in the header and metadata
- **Bio & tagline** — shown in the hero section
- **Counters** — animated stats (years of experience, products, etc.)
- **Work experience** — career timeline
- **Projects** — portfolio items with tags
- **Education** — degrees and institutions
- **Blog posts** — article listings
- **Social links** — GitHub, LinkedIn, etc.
- **Email** — obfuscated display format
- **Terminal chatbot** — keyword-based Q&A knowledge base
- **Navigation items** — sections in the sticky nav bar

### Avatar

Replace `public/avatar.jpg` with your own photo.

### CV / Resume

Place your PDF as `public/cv.pdf` to enable the "Download CV" button in the Connect section.

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 15** with App Router
- **React 19**
- **Tailwind CSS 4**
- **Motion-Primitives** (Framer Motion)
- **OGL** for WebGL orb background
- **next-themes** for dark mode
