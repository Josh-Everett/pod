import Link from "next/link";
import PodcastLinks from "./PodcastLinks";

export interface Episode {
  slug: string;
  title: string;
  book: string;
  author: string;
  description: string;
  coverImage: string;
  publishedAt: string;
  spotifyUrl?: string;
  appleUrl?: string;
  featured?: boolean;
}

interface EpisodeCardProps {
  episode: Episode;
}

export default function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <article className="group flex flex-col">
      {/* Text Content */}
      <div className="mb-4">
        <Link href={`/episodes/${episode.slug}`}>
          <h3 className="font-serif text-xl font-bold leading-snug text-foreground transition-opacity group-hover:opacity-70 md:text-2xl">
            {episode.title}
          </h3>
        </Link>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {episode.description}
        </p>
      </div>

      {/* Cover Image */}
      <Link href={`/episodes/${episode.slug}`} className="block overflow-hidden rounded">
        <div className="aspect-[4/3] w-full overflow-hidden rounded bg-gray-100">
          {/* Placeholder image - stylized colored rectangle */}
          <div
            className="flex h-full w-full items-center justify-center transition-transform duration-300 group-hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${stringToColor(episode.slug)}33, ${stringToColor(episode.slug)}88)`,
            }}
          >
            <div className="rounded bg-white/90 p-4 shadow-md">
              <p className="text-center font-serif text-sm font-bold text-foreground">
                {episode.book}
              </p>
              <p className="mt-1 text-center text-xs text-muted">
                {episode.author}
              </p>
            </div>
          </div>
        </div>
      </Link>

      {/* Podcast Links */}
      <PodcastLinks
        spotifyUrl={episode.spotifyUrl}
        appleUrl={episode.appleUrl}
        compact
      />
    </article>
  );
}

// Generate a consistent color from a string
function stringToColor(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash) % 360;
  return `hsl(${hue}, 45%, 55%)`;
}
