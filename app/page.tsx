import Hero from "@/components/Hero";
import FeaturedSection from "@/components/FeaturedSection";
import EpisodeGrid from "@/components/EpisodeGrid";
import { getAllEpisodes, getFeaturedEpisode } from "@/lib/episodes";

export default function Home() {
  const episodes = getAllEpisodes();
  const featured = getFeaturedEpisode();
  const nonFeatured = episodes.filter((e) => !e.featured);

  return (
    <>
      {/* Hero Section */}
      <Hero
        label="Bad Boys Book Club"
        headline="Books. Ideas. Conversations."
        description="A podcast where we dive deep into the stories and ideas that shape how we think. New episodes every week."
        href="/episodes"
      />

      {/* Featured Episode (yellow background section) */}
      {featured && <FeaturedSection episode={featured} />}

      {/* Episode Grid */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-4">
          <h2 className="font-serif text-2xl font-bold text-foreground">
            Recent Episodes
          </h2>
        </div>
        <EpisodeGrid episodes={nonFeatured} />
      </div>
    </>
  );
}
