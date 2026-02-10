import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-nav-bg text-nav-text">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <span className="border border-white px-2 py-1 text-xs font-bold tracking-wider">
              BBBC
            </span>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Bad Boys Book Club is a podcast where we dive into the books,
              ideas, and stories that shape how we think.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-white/40">
              Navigate
            </h3>
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm text-white/60 transition-opacity hover:text-white"
              >
                Home
              </Link>
              <Link
                href="/episodes"
                className="text-sm text-white/60 transition-opacity hover:text-white"
              >
                Episodes
              </Link>
              <Link
                href="/about"
                className="text-sm text-white/60 transition-opacity hover:text-white"
              >
                About
              </Link>
            </div>
          </div>

          {/* Listen */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-white/40">
              Listen On
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="text-sm text-white/60 transition-opacity hover:text-white"
              >
                Spotify
              </a>
              <a
                href="#"
                className="text-sm text-white/60 transition-opacity hover:text-white"
              >
                Apple Podcasts
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          &copy; {new Date().getFullYear()} Bad Boys Book Club. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
