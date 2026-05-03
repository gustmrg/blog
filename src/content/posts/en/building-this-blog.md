---
title: "Building This Blog"
slug: "building-this-blog"
date: "2026-04-26"
description: "A look at how this minimalist blog was built with Astro and markdown files."
tags: ["astro", "markdown", "blog"]
---

# Building This Blog

This blog is intentionally simple. No CMS, no database, no server. Just markdown files and a static site built with Astro.

## The stack

- **Astro** for the framework — fast, minimal config, excellent markdown support
- **Markdown** — posts live as `.md` files

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

At build time, Astro processes the markdown files and generates static HTML pages. No client-side JavaScript needed.

## Tradeoffs

The entire blog is delivered as static HTML. For a personal blog with a handful of posts, this is perfect — each post is just a few KB of text. If it ever grows to hundreds of posts, the architecture can be expanded without drastic changes.

SEO support is excellent by default, since every page is server-rendered static HTML.
