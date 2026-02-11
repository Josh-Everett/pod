import Link from "next/link";
import Image from "next/image";
import PodcastLinks from "./PodcastLinks";
import type { Episode } from "@/lib/types";
import { stringToColor } from "@/lib/utils";

interface EpisodeCardProps {
  episode: Episode;
}

export default function EpisodeCard({ episode }: EpisodeCardProps) {
  const hasImage = episode.coverImage && !episode.coverImage.endsWith(".jpg");
  const isGif = episode.coverImage?.endsWith(".gif");

  return (
    <article className="group flex h-full flex-col">
      {/* Top dash */}
      <div className="mb-5 h-px w-full bg-foreground/20" />
      {/* Text Content */}
      <div className="mb-4 flex-1">
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
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded bg-gray-100">
          {hasImage && isGif ? (
            <img
              src={episode.coverImage}
              alt={episode.book}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : hasImage ? (
            <Image
              src={episode.coverImage}
              alt={episode.book}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
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
          )}
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

