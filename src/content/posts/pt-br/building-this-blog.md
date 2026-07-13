---
title: "Construindo Este Blog"
slug: "building-this-blog"
date: "2026-04-26"
description: "Uma olhada em como este blog minimalista foi construído com Astro e arquivos markdown."
tags: ["astro", "markdown", "blog"]
---

Este blog é intencionalmente simples. Sem CMS, sem banco de dados, sem servidor. Apenas arquivos markdown e um site estático.

## A stack

- **Astro** para o framework — rápido, configuração mínima, excelente suporte a markdown
- **Markdown** — posts vivos como arquivos `.md`

## Como funciona

Os posts vivem como arquivos `.md` em um diretório `content/posts/`. Cada arquivo tem frontmatter YAML com metadados:

```yaml
---
title: "Título do Post"
date: "2026-04-26"
description: "Um breve resumo."
tags: ["exemplo"]
---
```

No momento do build, Astro processa os arquivos markdown e gera páginas HTML estáticas. Sem JavaScript do cliente necessário.

## Tradeoffs

Todo o blog é entregue como HTML estático. Para um blog pessoal com poucas postagens, isso é perfeito — cada post é apenas alguns KB de texto. Se um dia crescer para centenas de posts, a arquitetura pode ser expandida sem mudanças drásticas.

O suporte ao SEO é excelente por padrão, já que cada página é HTML estático renderizado no servidor.
