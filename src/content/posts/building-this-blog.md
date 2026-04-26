---
title: "Building This Blog"
date: "2026-04-26"
description: "A look at how this minimalist blog was built with React, Vite, and markdown files."
tags: ["react", "vite", "markdown"]
---

# Building This Blog

This blog is intentionally simple. No CMS, no database, no server. Just markdown files and a React SPA.

## The stack

- **Vite** for the build tool — fast, minimal config
- **React** with TypeScript — for the UI
- **react-markdown** — renders `.md` files as React components
- **react-router-dom** — client-side routing

## How it works

Posts live as `.md` files in a `content/posts/` directory. Each file has YAML frontmatter with metadata:

```yaml
---
title: "Post Title"
date: "2026-04-26"
description: "A short summary."
tags: ["example"]
---
```

At build time, Vite's `import.meta.glob` embeds all markdown files into the bundle. At runtime, `gray-matter` parses the frontmatter and `react-markdown` renders the body.

## Tradeoffs

The entire blog ships as a single JS bundle. For a personal blog with a handful of posts, this is fine — each post is just a few KB of text. If it ever grows to hundreds of posts, lazy loading can be added without changing the architecture.

No SSR means limited SEO, but for a personal blog that's an acceptable tradeoff.
