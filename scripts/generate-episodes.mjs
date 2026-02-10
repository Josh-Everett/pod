/**
 * Pre-build script: reads MDX files from content/episodes/ and generates
 * a static TypeScript data file that can be imported without fs at runtime.
 * This is necessary because Cloudflare Workers don't have filesystem access.
 *
 * Run: node scripts/generate-episodes.mjs
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const episodesDir = path.join(__dirname, "..", "content", "episodes");
const outputFile = path.join(__dirname, "..", "lib", "episode-data.ts");

const fileNames = fs.readdirSync(episodesDir).filter((f) => f.endsWith(".mdx"));

const episodes = fileNames.map((fileName) => {
  const slug = fileName.replace(/\.mdx$/, "");
  const filePath = path.join(episodesDir, fileName);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title,
    book: data.book,
    author: data.author,
    description: data.description,
    coverImage: data.coverImage || "",
    publishedAt: data.publishedAt,
    spotifyUrl: data.spotifyUrl || "#",
    appleUrl: data.appleUrl || "#",
    featured: data.featured || false,
    content,
  };
});

// Sort by date descending
episodes.sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);

const output = `// AUTO-GENERATED — do not edit manually.
// Run "node scripts/generate-episodes.mjs" to regenerate.

import type { Episode } from "@/components/EpisodeCard";

export interface EpisodeWithContent extends Episode {
  content: string;
}

export const episodes: EpisodeWithContent[] = ${JSON.stringify(episodes, null, 2)};
`;

fs.writeFileSync(outputFile, output, "utf8");
console.log(`Generated ${episodes.length} episodes → lib/episode-data.ts`);
