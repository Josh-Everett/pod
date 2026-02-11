import { notFound } from "next/navigation";
import { getAllEpisodes, getEpisodeBySlug } from "@/lib/episodes";
import PodcastLinks from "@/components/PodcastLinks";
import { stringToColor } from "@/lib/utils";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const episodes = getAllEpisodes();
  return episodes.map((episode) => ({ slug: episode.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getEpisodeBySlug(slug);
  if (!data) return {};

  return {
    title: `${data.episode.title} | Bad Boys Book Club`,
    description: data.episode.description,
  };
}

export default async function EpisodePage({ params }: PageProps) {
  const { slug } = await params;
  const data = getEpisodeBySlug(slug);

  if (!data) {
    notFound();
  }

  const { episode, content } = data;

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      {/* Header */}
      <header className="mb-10">
        <p className="text-sm text-muted">
          {new Date(episode.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h1 className="mt-2 font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
          {episode.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          {episode.description}
        </p>

        {/* Book info */}
        <div className="mt-6 flex items-center gap-4 rounded border border-border bg-gray-50 p-4">
          <div
            className="flex h-20 w-14 shrink-0 items-center justify-center rounded-sm"
            style={{
              background: `linear-gradient(135deg, ${stringToColor(episode.slug)}44, ${stringToColor(episode.slug)}99)`,
            }}
          >
            <span className="text-lg font-bold text-white">
              {episode.book.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-serif font-bold text-foreground">
              {episode.book}
            </p>
            <p className="text-sm text-muted">by {episode.author}</p>
          </div>
        </div>

        {/* Podcast links */}
        <PodcastLinks
          spotifyUrl={episode.spotifyUrl}
          appleUrl={episode.appleUrl}
        />
      </header>

      {/* MDX Content */}
      <div className="prose prose-lg max-w-none prose-headings:font-serif prose-h2:text-2xl prose-h3:text-xl prose-p:text-muted prose-li:text-muted prose-strong:text-foreground">
        <MDXRemote source={content} />
      </div>
    </article>
  );
}

