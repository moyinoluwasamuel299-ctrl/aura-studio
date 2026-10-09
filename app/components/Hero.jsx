
"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (window.innerWidth < 1024) return;

      setMousePosition({
        x: (event.clientX / window.innerWidth - 0.5) * 8,
        y: (event.clientY / window.innerHeight - 0.5) * 8,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#f8f6f0] px-6 pb-12 pt-32 sm:px-10 lg:px-16 lg:pt-36"
    >
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-10 flex items-center gap-3">
          <span className="h-px w-8 bg-[#a7864d]" />
          <p className="text-xs uppercase tracking-widest text-[#716b60]">
            London — Creative Studio
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative z-10">
            <p className="mb-6 text-xs uppercase tracking-widest text-[#a7864d]">
              Independent by nature. Intentional by design.
            </p>

            <h1 className="font-serif text-6xl leading-none tracking-tight text-[#292821] sm:text-7xl md:text-8xl lg:text-9xl">
              Bringing
              <br />
              Ideas to
              <br />
              <span className="pl-6 italic text-[#a7864d] sm:pl-12">
                Life.
              </span>
            </h1>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-sm text-sm leading-7 text-[#716b60]">
                We help ambitious brands find their voice through thoughtful
                identities, considered digital experiences, and meaningful
                design.
              </p>

              <a
                href="#services"
                className="group flex w-fit items-center gap-4 border-b border-[#a7864d] pb-3 text-xs uppercase tracking-wider text-[#292821] transition-colors hover:text-[#a7864d]"
              >
                Explore our services
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
            <div
              className="relative aspect-4/5 overflow-hidden bg-[#e7dfd1] transition-transform duration-300 ease-out"
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=85"
                alt="Artwork in a contemporary art gallery"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/10" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-linear-to-t from-black/60 to-transparent p-6 text-white">
                <div>
                  <p className="text-xs uppercase tracking-widest">
                    The art of possibility
                  </p>
                  <p className="mt-2 font-serif text-2xl italic">
                    Made with meaning.
                  </p>
                </div>
                <span className="text-xl">↗</span>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-4 flex h-24 w-24 flex-col items-center justify-center rounded-full border border-[#a7864d]/50 bg-[#f8f6f0] text-center sm:-left-8 sm:h-28 sm:w-28">
              <span className="font-serif text-2xl italic text-[#a7864d]">
                A.
              </span>
              <span className="mt-1 text-xs text-[#716b60]">
                Est. London
              </span>
            </div>

            <p className="mt-9 text-right text-xs uppercase tracking-widest text-[#8b8578]">
              Thoughtful design. Lasting impact.
            </p>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between gap-4 border-t border-black/10 pt-5">
          <p className="text-xs uppercase tracking-wider text-[#8b8578]">
            Branding · Digital · Experience
          </p>

          <a
            href="#about"
            className="flex items-center gap-3 text-xs uppercase tracking-wider text-[#716b60] transition-colors hover:text-[#a7864d]"
          >
            <span className="hidden sm:inline">Scroll to explore</span>
            <span className="animate-bounce text-base">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}