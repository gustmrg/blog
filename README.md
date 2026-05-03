# Blog

![Astro](https://img.shields.io/badge/Astro-6.1.9-FF5D01?logo=astro)
![Latest Release](https://img.shields.io/github/v/release/gustmrg/blog)
![License](https://img.shields.io/github/license/gustmrg/blog)

A minimalist personal blog built with Astro.

---

## Features

- Astro static site setup
- Light and dark theme support
- Localized content in `en` and `pt-br`
- Locale-aware post listings and post routes
- Responsive blog layout

## License

This project is licensed under the MIT License. See [`LICENSE`](./LICENSE) for details.

## Content Structure

Posts live in localized collections:

- `src/content/posts/en`
- `src/content/posts/pt-br`

Public pages are split by locale:

- `/` for English
- `/pt-br` for Portuguese
- `/posts/[slug]` for English posts
- `/pt-br/posts/[slug]` for Portuguese posts
