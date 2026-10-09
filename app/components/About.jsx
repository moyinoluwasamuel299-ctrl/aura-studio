export default function About() {
  const values = [
    {
      number: "01",
      title: "Curiosity",
      text: "We ask more questions than we answer at first. Good ideas start with listening.",
    },
    {
      number: "02",
      title: "Collaboration",
      text: "The best work is made together, side by side with the people it is for.",
    },
    {
      number: "03",
      title: "Craft",
      text: "From the first sketch to the smallest finishing detail, every choice is considered.",
    },
  ];

  return (
    <section id="about" className="bg-[#f8f6f0] text-[#292821]">
      {/* Studio introduction */}
      <div className="relative overflow-hidden">
        {/* soft gold glow in the background */}
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#a7864d]/15 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#c6aa76]/10 blur-3xl" />

        <div className="relative mx-auto max-w-screen-2xl px-6 py-24 sm:px-10 md:py-32 lg:px-16">
          {/* small label with a pulsing dot */}
          <div className="inline-flex items-center gap-3 rounded-full border border-[#a7864d]/30 bg-white/60 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#a7864d]" />
            <p className="text-xs uppercase tracking-widest text-[#a7864d]">
              01 / A little about us
            </p>
          </div>

          <h2 className="mt-8 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl md:text-7xl">
            Good design should make you{" "}
            <span className="italic text-[#a7864d]">feel something.</span>
          </h2>

          <div className="mt-16 grid gap-12 md:grid-cols-12 md:gap-16">
            {/* text side */}
            <div className="md:col-span-7">
              <p className="max-w-2xl text-lg leading-8 text-[#4d493f]">
                AURA is an independent creative studio led by Maya Daniels.
                We partner with ambitious people to shape thoughtful brands
                and digital experiences that feel distinctive, purposeful,
                and built to last.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#716b60]">
                From the first conversation to the smallest finishing
                detail, we believe the best work comes from curiosity,
                collaboration, and a clear sense of what matters.
              </p>

              {/* little tags */}
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs tracking-wide text-[#48473f] transition-colors duration-300 hover:border-[#a7864d] hover:text-[#a7864d]">
                  Independent studio
                </span>
                <span className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs tracking-wide text-[#48473f] transition-colors duration-300 hover:border-[#a7864d] hover:text-[#a7864d]">
                  London roots
                </span>
                <span className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs tracking-wide text-[#48473f] transition-colors duration-300 hover:border-[#a7864d] hover:text-[#a7864d]">
                  Global outlook
                </span>
              </div>
            </div>

            {/* founder card */}
            <div className="relative md:col-span-5">
              {/* floating badge */}
              <div className="absolute -right-3 -top-8 z-10 hidden h-24 w-24 flex-col items-center justify-center rounded-full bg-[#a7864d] text-center text-[10px] uppercase tracking-widest text-white shadow-lg transition-transform duration-500 hover:rotate-12 sm:flex">
                <span>London</span>
                <span className="text-base">✦</span>
                <span>UK</span>
              </div>

              <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-xl shadow-black/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="flex items-center gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#292821] font-serif text-xl text-[#c6aa76]">
                    MD
                  </div>

                  <div>
                    <p className="font-serif text-2xl">Maya Daniels</p>
                    <p className="text-sm text-[#716b60]">
                      Founder & Creative Director
                    </p>
                  </div>
                </div>

                <p className="mt-8 border-l-2 border-[#a7864d] pl-5 font-serif text-xl italic leading-8 text-[#4d493f]">
                  Meaning over noise. Thoughtful ideas, made tangible.
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-5 text-xs uppercase tracking-widest text-[#a7864d]">
                  <span>Based in London</span>
                  <span>Working everywhere</span>
                </div>
              </div>
            </div>
          </div>

          {/* values cards */}
          <div className="mt-24 grid gap-6 md:grid-cols-3">
            {values.map((item) => (
              <div
                key={item.number}
                className="group rounded-2xl border border-black/10 bg-white/60 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#a7864d]/50 hover:bg-white hover:shadow-xl hover:shadow-[#a7864d]/10"
              >
                <p className="text-xs tracking-widest text-[#a7864d]">
                  {item.number}
                </p>

                <h3 className="mt-6 font-serif text-3xl transition-colors duration-300 group-hover:text-[#a7864d]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#716b60]">
                  {item.text}
                </p>

                {/* line that grows on hover */}
                <div className="mt-8 h-px w-10 bg-[#a7864d] transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Manifesto */}
      <div className="relative overflow-hidden bg-[#292821] px-6 py-24 text-[#f8f6f0] sm:px-10 md:py-32 lg:px-16">
        {/* glowing gold circle */}
        <div className="absolute -right-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#a7864d]/20 blur-3xl" />

        <div className="relative mx-auto max-w-screen-2xl">
          <p className="text-xs uppercase tracking-widest text-[#c6aa76]">
            A note on how we work
          </p>

          <div className="mt-10 font-serif text-4xl leading-tight sm:text-5xl md:text-7xl">
            <p className="transition-transform duration-500 hover:translate-x-4">
              We believe in ideas with{" "}
              <span className="italic text-[#c6aa76]">intention.</span>
            </p>
            <p className="mt-2 transition-transform duration-500 hover:translate-x-4">
              In beauty with{" "}
              <span className="italic text-[#c6aa76]">purpose.</span>
            </p>
            <p className="mt-2 transition-transform duration-500 hover:translate-x-4">
              And in making things that{" "}
              <span className="italic text-[#c6aa76]">matter.</span>
            </p>
          </div>

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
      <div className="px-6 py-16 sm:px-10 md:py-24 lg:px-16">
        <div className="group relative mx-auto h-[380px] max-w-screen-2xl overflow-hidden rounded-3xl sm:h-[480px] md:h-[620px]">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85"
            alt="Quiet, thoughtfully designed contemporary architecture"
            className="h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/25" />

          {/* frosted glass card */}
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/30 bg-white/15 p-6 text-white backdrop-blur-md sm:right-auto sm:max-w-lg md:bottom-10 md:left-10 md:p-8">
            <p className="font-serif text-3xl leading-tight sm:text-4xl">
              Space to think.
              <br />
              Freedom to create.
            </p>

            <p className="mt-4 text-xs uppercase tracking-widest text-white/80">
              Thoughtfully considered, always.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}