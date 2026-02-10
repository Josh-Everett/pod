import Link from "next/link";

interface HeroProps {
  label: string;
  headline: string;
  description: string;
  href?: string;
}

export default function Hero({
  label,
  headline,
  description,
  href,
}: HeroProps) {
  const content = (
    <section className="relative w-full overflow-hidden bg-foreground">
      {/* Placeholder hero image area */}
      <div className="relative h-[500px] w-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 md:h-[600px]">
        {/* Decorative elements to simulate a photo */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-[10%] top-[20%] h-32 w-24 rotate-[-5deg] rounded bg-white/20" />
          <div className="absolute left-[20%] top-[25%] h-36 w-28 rotate-[3deg] rounded bg-white/15" />
          <div className="absolute right-[15%] top-[30%] h-40 w-30 rotate-[-8deg] rounded bg-white/10" />
          <div className="absolute right-[25%] top-[20%] h-28 w-20 rotate-[6deg] rounded bg-white/20" />
        </div>

        {/* White card overlay */}
        <div className="absolute bottom-8 left-6 max-w-sm rounded bg-white p-6 shadow-lg md:bottom-12 md:left-12 md:max-w-md md:p-8">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-dark">
            {label}
          </span>
          <h1 className="mt-2 font-serif text-2xl font-bold leading-tight text-foreground md:text-3xl">
            {headline}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {description}
          </p>
        </div>
      </div>
    </section>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
