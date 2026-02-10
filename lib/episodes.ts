import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Episode } from "@/components/EpisodeCard";

const episodesDirectory = path.join(process.cwd(), "content/episodes");

export function getAllEpisodes(): Episode[] {
  const fileNames = fs.readdirSync(episodesDirectory);
  const episodes = fileNames
    .filter((name) => name.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(episodesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

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
      } as Episode;
    });

  return episodes.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getEpisodeBySlug(slug: string): {
  episode: Episode;
  content: string;
} | null {
  const fullPath = path.join(episodesDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    episode: {
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
    },
    content,
  };
}

export function getFeaturedEpisode(): Episode | null {
  const episodes = getAllEpisodes();
  return episodes.find((e) => e.featured) || episodes[0] || null;
}
