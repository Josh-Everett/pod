import EpisodeCard, { Episode } from "./EpisodeCard";

interface EpisodeGridProps {
  episodes: Episode[];
}

export default function EpisodeGrid({ episodes }: EpisodeGridProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {episodes.map((episode) => (
          <EpisodeCard key={episode.slug} episode={episode} />
        ))}
      </div>
    </section>
  );
}
