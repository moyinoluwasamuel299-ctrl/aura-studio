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

  const tags = ["Branding", "Digital", "Experience"];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#f8f6f0] px-6 pb-12 pt-32 sm:px-10 lg:px-16 lg:pt-36"
    >
      {/* soft background glows */}
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#a7864d]/15 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-[#c6aa76]/15 blur-3xl" />

      {/* slow spinning ring */}
      <div className="absolute -right-40 -top-40 hidden h-[500px] w-[500px] animate-[spin_40s_linear_infinite] rounded-full border border-dashed border-[#a7864d]/30 lg:block" />

      <div className="relative mx-auto max-w-screen-2xl">
        {/* top label */}
        <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-[#a7864d]/30 bg-white/60 px-4 py-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#a7864d]" />
          <p className="text-xs uppercase tracking-widest text-[#716b60]">
            London — Creative Studio
          </p>
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* text side */}
          <div className="relative z-10">
            <p className="mb-6 text-xs uppercase tracking-widest text-[#a7864d]">
              Independent by nature. Intentional by design.
            </p>

            <h1 className="font-serif text-6xl leading-none tracking-tight text-[#292821] sm:text-7xl md:text-8xl lg:text-9xl">
              Bringing
              <br />
              Ideas to
              <br />
              <span className="group relative inline-block pl-6 italic text-[#a7864d] sm:pl-12">
                Life.
                {/* underline that grows on hover */}
                <span className="absolute bottom-1 left-6 h-[3px] w-1/3 bg-[#a7864d] transition-all duration-500 group-hover:w-[calc(100%-1.5rem)] sm:left-12 sm:group-hover:w-[calc(100%-3rem)]" />
              </span>
            </h1>

            <p className="mt-10 max-w-md text-base leading-8 text-[#716b60]">
              We help ambitious brands find their voice through thoughtful
              identities, considered digital experiences, and meaningful
              design.
            </p>

            {/* buttons */}
            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
              <a
                href="#brief"
                className="group relative flex w-fit items-center gap-3 overflow-hidden bg-[#a7864d] px-7 py-4 text-xs font-medium uppercase tracking-wider text-white shadow-lg shadow-[#a7864d]/30 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#a7864d]/50"
              >
                <span className="absolute inset-0 translate-y-full bg-[#25251f] transition-transform duration-500 ease-out group-hover:translate-y-0" />
                <span className="relative">Start a Project</span>
                <span className="relative transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#services"
                className="group flex w-fit items-center gap-4 border-b border-[#a7864d] pb-2 text-xs uppercase tracking-wider text-[#292821] transition-colors duration-300 hover:text-[#a7864d]"
              >
                Explore our services
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* image side */}
          <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
            {/* offset gold frame behind the image */}
            <div className="absolute -right-4 -top-4 h-full w-full rounded-3xl border border-[#a7864d]/50" />

            <div
              className="group relative aspect-4/5 overflow-hidden rounded-3xl bg-[#e7dfd1] shadow-2xl shadow-black/10 transition-transform duration-300 ease-out"
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=85"
                alt="Artwork in a contemporary art gallery"
                className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/10" />

              {/* frosted glass caption */}
              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between rounded-2xl border border-white/30 bg-white/15 p-5 text-white backdrop-blur-md">
                <div>
                  <p className="text-xs uppercase tracking-widest">
                    The art of possibility
                  </p>
                  <p className="mt-2 font-serif text-2xl italic">
                    Made with meaning.
                  </p>
                </div>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-lg transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#a7864d]">
                  ↗
                </span>
              </div>
            </div>

            {/* floating "now booking" card */}
            <div className="absolute -right-3 top-8 z-10 hidden items-center gap-3 rounded-2xl border border-black/10 bg-white px-4 py-3 shadow-xl sm:flex">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
              </span>
              <div>
                <p className="text-xs font-medium text-[#292821]">
                  Now booking
                </p>
                <p className="text-[10px] text-[#716b60]">New projects</p>
              </div>
            </div>

            {/* floating Est. London badge */}
            <div className="absolute -bottom-6 -left-4 flex h-24 w-24 animate-bounce flex-col items-center justify-center rounded-full border border-[#a7864d]/50 bg-[#f8f6f0] text-center shadow-lg [animation-duration:4s] sm:-left-8 sm:h-28 sm:w-28">
              <span className="font-serif text-2xl italic text-[#a7864d]">
                A.
              </span>
              <span className="mt-1 text-xs text-[#716b60]">Est. London</span>
            </div>

            <p className="mt-10 text-right text-xs uppercase tracking-widest text-[#8b8578]">
              Thoughtful design. Lasting impact.
            </p>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-16 flex items-center justify-between gap-4 border-t border-black/10 pt-5">
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs uppercase tracking-wider text-[#716b60] transition-colors duration-300 hover:border-[#a7864d] hover:text-[#a7864d]"
              >
                {tag}
              </span>
            ))}
          </div>

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