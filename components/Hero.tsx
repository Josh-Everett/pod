import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  label: string;
  headline: string;
  description: string;
  imageSrc?: string;
  href?: string;
}

export default function Hero({
  label,
  headline,
  description,
  imageSrc,
  href,
}: HeroProps) {
  const content = (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden">
          <div className="relative h-[450px] w-full md:h-[550px]">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt=""
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900" />
            )}

            {/* White card overlay */}
            <div className="absolute bottom-6 left-6 max-w-sm rounded bg-white p-6 shadow-lg md:bottom-10 md:left-10 md:max-w-md md:p-8">
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
        </div>
      </div>
    </section>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
