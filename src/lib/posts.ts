import type { Post, PostMeta } from "../types/post";

const postFiles = import.meta.glob("/content/posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function parseFrontmatter(raw: string): {
  data: Record<string, unknown>;
  content: string;
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const data: Record<string, unknown> = {};
  for (const line of match[1].split("\n")) {
    const colon = line.indexOf(":");
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    let value: unknown = line.slice(colon + 1).trim();

    if (
      typeof value === "string" &&
      ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'")))
    ) {
      value = value.slice(1, -1);
    }

    if (typeof value === "string" && value.startsWith("[")) {
      try {
        value = JSON.parse(value);
      } catch {
        // keep as string
      }
    }

    data[key] = value;
  }

  return { data, content: match[2] };
}

function parsePost(filePath: string, raw: string): Post {
  const { data, content } = parseFrontmatter(raw);
  const slug =
    (data.slug as string) ||
    filePath.replace("/content/posts/", "").replace(".md", "");

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    description: data.description as string,
    tags: (data.tags as string[]) || [],
    content,
  };
}

const allPosts: Post[] = Object.entries(postFiles)
  .map(([path, raw]) => parsePost(path, raw))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getAllPosts(): PostMeta[] {
  return allPosts.map(({ content: _, ...meta }) => meta);
}

export function getPostBySlug(slug: string): Post | undefined {
  return allPosts.find((p) => p.slug === slug);
}
