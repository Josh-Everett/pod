import EpisodeGrid from "@/components/EpisodeGrid";
import { getAllEpisodes } from "@/lib/episodes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Episodes | Bad Boys Book Club",
  description: "Browse all episodes of the Bad Boys Book Club podcast.",
};

export default function EpisodesPage() {
  const episodes = getAllEpisodes();

  return (
    <>
      {/* Page Header */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h1 className="font-serif text-4xl font-bold text-foreground">
            All Episodes
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Browse
            through our discussions on the books and ideas that matter most.
          </p>
        </div>
      </section>

      {/* Grid */}
      <EpisodeGrid episodes={episodes} />
    </>
  );
}
