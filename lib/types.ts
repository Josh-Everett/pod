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

export interface EpisodeWithContent extends Episode {
  content: string;
}
