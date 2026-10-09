
export default function About() {
  return (
    <section id="about" className="bg-[#f8f6f0] text-[#292821]">
      {/* Studio introduction */}
      <div className="mx-auto max-w-screen-2xl px-6 py-24 sm:px-10 md:py-32 lg:px-16">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#a7864d]">
              01 / A little about us
            </p>

            <p className="mt-5 text-sm text-[#716b60]">
              Independent studio. London roots. Global outlook.
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
              Good design should make you{" "}
              <span className="italic text-[#a7864d]">feel something.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#716b60]">
              AURA is an independent creative studio led by Maya Daniels.
              We partner with ambitious people to shape thoughtful brands
              and digital experiences that feel distinctive, purposeful,
              and built to last.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#716b60]">
              From the first conversation to the smallest finishing
              detail, we believe the best work comes from curiosity,
              collaboration, and a clear sense of what matters.
            </p>
          </div>
        </div>

        {/* Studio details */}
        <div className="mt-20 grid grid-cols-1 gap-8 border-t border-black/10 pt-8 sm:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#a7864d]">
              Based in
            </p>
            <p className="mt-3 font-serif text-2xl">London, UK</p>
            <p className="mt-2 text-sm text-[#716b60]">
              Working everywhere.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[#a7864d]">
              Creative direction
            </p>
            <p className="mt-3 font-serif text-2xl">Maya Daniels</p>
            <p className="mt-2 text-sm text-[#716b60]">
              Founder & Creative Director
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[#a7864d]">
              What matters
            </p>
            <p className="mt-3 font-serif text-2xl">Meaning over noise.</p>
            <p className="mt-2 text-sm text-[#716b60]">
              Thoughtful ideas, made tangible.
            </p>
          </div>
        </div>
      </div>

      {/* Manifesto */}
      <div className="bg-[#292821] px-6 py-24 text-[#f8f6f0] sm:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-screen-2xl">
          <p className="text-xs uppercase tracking-widest text-[#c6aa76]">
            A note on how we work
          </p>

          <h2 className="mt-10 max-w-5xl font-serif text-4xl leading-tight sm:text-5xl md:text-7xl">
            We believe in ideas with{" "}
            <span className="italic text-[#c6aa76]">intention.</span>
            <br />
            In beauty with{" "}
            <span className="italic text-[#c6aa76]">purpose.</span>
            <br />
            And in making things that{" "}
            <span className="italic text-[#c6aa76]">matter.</span>
          </h2>

          <div className="mt-12 flex items-center justify-between gap-6 border-t border-white/15 pt-6">
            <p className="max-w-md text-sm leading-7 text-white/60">
              Less noise. More thought. Always room for a little wonder.
            </p>

            <span className="font-serif text-3xl italic text-[#c6aa76]">
              AURA®
            </span>
          </div>
        </div>
      </div>

      {/* Architectural image break */}
      <div className="relative h-[350px] overflow-hidden sm:h-[450px] md:h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85"
          alt="Quiet, thoughtfully designed contemporary architecture"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-x-0 bottom-0 mx-auto flex max-w-screen-2xl flex-col gap-3 px-6 pb-8 text-white sm:px-10 md:flex-row md:items-end md:justify-between md:px-16 md:pb-12">
          <p className="max-w-xl font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
            Space to think.
            <br />
            Freedom to create.
          </p>

          <p className="text-xs uppercase tracking-widest text-white/80">
            Thoughtfully considered, always.
          </p>
        </div>
      </div>
    </section>
  );
}