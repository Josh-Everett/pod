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
        imageSrc="/images/hero/hero.png"
        href="/episodes"
      />

      <EpisodeGrid episodes={nonFeatured}>
        {/* Next Episode Teaser */}
        <div className="flex h-full flex-col">
          <div className="mb-5 h-px w-full bg-foreground/20" />
          <div className="flex-1">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-dark">
              Next Episode
            </span>
            <h3 className="mt-2 font-serif text-xl font-bold leading-snug text-foreground md:text-2xl">
              Alien Isolation
            </h3>
            <p className="mt-2 text-sm text-muted">March 10th</p>
          </div>
        </div>
      </EpisodeGrid>

      {/* Featured Episode (yellow background section) */}
      {featured && <FeaturedSection episode={featured} />}
    </>
  );
}
