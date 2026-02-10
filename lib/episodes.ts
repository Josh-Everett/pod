import { Episode } from "@/components/EpisodeCard";
import { episodes as allEpisodeData } from "./episode-data";

export function getAllEpisodes(): Episode[] {
  return allEpisodeData.map(({ content: _, ...episode }) => episode);
}

export function getEpisodeBySlug(slug: string): {
  episode: Episode;
  content: string;
} | null {
  const found = allEpisodeData.find((e) => e.slug === slug);
  if (!found) return null;

  const { content, ...episode } = found;
  return { episode, content };
}

export function getFeaturedEpisode(): Episode | null {
  const episodes = getAllEpisodes();
  return episodes.find((e) => e.featured) || episodes[0] || null;
}
