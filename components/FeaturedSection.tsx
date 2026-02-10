import Link from "next/link";
import Image from "next/image";
import PodcastLinks from "./PodcastLinks";
import { Episode } from "./EpisodeCard";

interface FeaturedSectionProps {
  episode: Episode;
}

export default function FeaturedSection({ episode }: FeaturedSectionProps) {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 rounded-none bg-accent px-6 py-16 md:flex-row md:px-12 md:py-20">
        {/* White card */}
        <div className="w-full md:w-1/2">
          <div className="max-w-md rounded bg-white p-8 shadow-lg">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-dark">
              Latest Episode
            </span>
            <h2 className="mt-2 font-serif text-2xl font-bold leading-tight text-foreground md:text-3xl">
              {episode.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {episode.description}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Link
                href={`/episodes/${episode.slug}`}
                className="text-sm font-medium text-foreground underline underline-offset-4 transition-opacity hover:opacity-70"
              >
                Read more
              </Link>
            </div>
            <PodcastLinks
              spotifyUrl={episode.spotifyUrl}
              appleUrl={episode.appleUrl}
            />
          </div>
        </div>

        {/* Cover image */}
        <div className="flex w-full justify-center md:w-1/2">
          <div className="relative">
            {episode.coverImage && !episode.coverImage.endsWith(".jpg") ? (
              <div className="relative h-64 w-80 rotate-[-3deg] overflow-hidden rounded-sm bg-black shadow-2xl md:h-72 md:w-[28rem]">
                <Image
                  src={episode.coverImage}
                  alt={episode.book}
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <div
                className="flex h-80 w-56 rotate-[-3deg] items-center justify-center rounded-sm bg-white p-6 shadow-2xl md:h-96 md:w-64"
                style={{
                  background: `linear-gradient(160deg, #fff 0%, #f0f0f0 100%)`,
                }}
              >
                <div className="text-center">
                  <p className="font-serif text-lg font-bold text-foreground">
                    {episode.book}
                  </p>
                  <div className="mx-auto my-3 h-px w-12 bg-foreground/30" />
                  <p className="text-xs uppercase tracking-widest text-muted">
                    {episode.author}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
