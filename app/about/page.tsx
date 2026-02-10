import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Bad Boys Book Club",
  description: "Learn about the Bad Boys Book Club podcast.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-serif text-4xl font-bold text-foreground">
        About Bad Boys Book Club
      </h1>

      <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo.
        </p>
      </div>

      {/* The Hosts */}
      <section className="mt-16">
        <h2 className="font-serif text-2xl font-bold text-foreground">
          The Hosts
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Host 1 */}
          <div className="flex gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xl font-bold text-muted">
              ?
            </div>
            <div>
              <h3 className="font-bold text-foreground">Host Name</h3>
              <p className="text-xs uppercase tracking-wide text-accent-dark">Host</p>
              <p className="mt-1 text-sm text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>

          {/* Host 2 */}
          <div className="flex gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xl font-bold text-muted">
              ?
            </div>
            <div>
              <h3 className="font-bold text-foreground">Host Name</h3>
              <p className="text-xs uppercase tracking-wide text-accent-dark">Host</p>
              <p className="mt-1 text-sm text-muted">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip.
              </p>
            </div>
          </div>

          {/* Producer */}
          <div className="flex gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xl font-bold text-muted">
              ?
            </div>
            <div>
              <h3 className="font-bold text-foreground">Producer Name</h3>
              <p className="text-xs uppercase tracking-wide text-accent-dark">Producer</p>
              <p className="mt-1 text-sm text-muted">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Listen On */}
      <section className="mt-16 rounded border border-border bg-gray-50 p-8 text-center">
        <h2 className="font-serif text-2xl font-bold text-foreground">
          Listen to BBBC
        </h2>
        <p className="mt-2 text-muted">
          Available on your favorite podcast platforms.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-[#1DB954] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            Spotify
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-[#A855F7] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0H5.34zm6.525 2.568c2.336 0 4.448.902 6.056 2.587.758.795 1.347 1.794 1.678 2.716l-1.71.787c-.28-.752-.758-1.545-1.368-2.18-1.296-1.348-2.862-2.021-4.657-2.021-1.795 0-3.384.702-4.657 2.021-.61.635-1.088 1.428-1.367 2.18l-1.71-.787c.33-.922.92-1.921 1.677-2.716C7.416 3.47 9.529 2.568 11.865 2.568zM12 7.006c1.8 0 3.274.655 4.383 1.833.534.563 1.01 1.348 1.218 2.066l-1.71.787c-.168-.545-.48-1.062-.84-1.442-.72-.755-1.766-1.17-3.051-1.17s-2.33.415-3.05 1.17c-.36.38-.673.897-.84 1.442l-1.71-.787c.207-.718.684-1.503 1.217-2.066C8.726 7.661 10.2 7.006 12 7.006zm.032 4.834c1.327 0 2.402 1.075 2.402 2.402 0 1.327-1.075 2.402-2.402 2.402-1.327 0-2.402-1.075-2.402-2.402 0-1.327 1.075-2.402 2.402-2.402z" />
            </svg>
            Apple Podcasts
          </a>
        </div>
      </section>
    </div>
  );
}
