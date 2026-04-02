# Nim — Personal Portfolio Template

A minimal, elegant personal portfolio website built with Next.js 15, React 19, Tailwind CSS 4, and Motion-Primitives.

## Features

- **Single config file** — all personal data in `site.config.ts`
- **WebGL Orb background** — interactive animated background with mouse tracking
- **Dark mode** — system-aware theme switching
- **Glass-morphism navigation** — sticky nav with active section highlighting
- **Animated counters** — spring-animated stats section
- **Terminal chatbot** — keyword-based Q&A about your portfolio
- **Downloadable CV** — one-click PDF download
- **Responsive** — mobile-first design
- **SEO optimised** — metadata, Open Graph, canonical URLs

## Getting Started

See [INSTALLATION.md](./INSTALLATION.md) for setup instructions.

```bash
npm install
npm run dev
```

## Customisation

Edit `site.config.ts` to personalise everything:

```typescript
export const siteConfig = {
  name: 'Your Name',
  title: 'Your Title',
  bio: 'Your bio...',
  // ... all content lives here
}
```

Replace `public/avatar.jpg` with your photo and `public/cv.pdf` with your resume.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with orb + terminal
│   ├── header.tsx          # Name, title, sticky nav, theme switch
│   ├── footer.tsx          # Footer with credits
│   ├── page.tsx            # Main content sections
│   └── data.ts             # Data bridge from site.config
├── components/ui/
│   ├── orb.tsx             # WebGL orb shader
│   ├── orb-background.tsx  # Theme-aware orb wrapper
│   ├── terminal-chat.tsx   # Terminal-style chatbot
│   └── ...                 # Motion-Primitives components
├── site.config.ts          # ← All your content here
├── public/
│   ├── avatar.jpg          # Profile photo
│   └── cv.pdf              # Downloadable resume
└── INSTALLATION.md
```

## Inspiration

- [ibelick/nim](https://github.com/ibelick/nim) — base template
- [reactbits.dev/backgrounds/orb](https://www.reactbits.dev/backgrounds/orb?hue=74) — orb background

## License

MIT
