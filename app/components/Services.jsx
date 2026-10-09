"use client";

import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Branding",
    description:
      "Distinctive identities built around what makes your brand different.",
    details: "Strategy · Visual identity · Art direction",
    image:
      "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=1847&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "Digital experiences that feel intuitive, thoughtful, and effortless.",
    details: "Research · Interface design · Prototyping",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "03",
    title: "Web Design",
    description:
      "Beautifully considered websites that turn a first impression into a lasting one.",
    details: "Web design · Responsive layouts · Digital direction",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f8f6f0] px-6 py-24 text-[#292821] sm:px-10 md:py-32 lg:px-16"
    >
      {/* soft background glows */}
      <div className="absolute -left-24 top-32 h-80 w-80 rounded-full bg-[#a7864d]/10 blur-3xl" />
      <div className="absolute -right-24 bottom-24 h-72 w-72 rounded-full bg-[#c6aa76]/10 blur-3xl" />

      <div className="relative mx-auto max-w-screen-2xl">
        {/* Section introduction */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-[#a7864d]/30 bg-white/60 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#a7864d]" />
              <p className="text-xs uppercase tracking-widest text-[#a7864d]">
                02 / What we do
              </p>
            </div>

            <h2 className="mt-8 font-serif text-5xl leading-tight sm:text-6xl md:text-7xl">
              Thoughtful work.
              <br />
              <span className="italic text-[#a7864d]">Lasting impact.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-8 text-[#716b60] md:justify-self-end">
            Every project starts with a conversation. We bring strategy,
            creativity, and careful execution together to help brands
            communicate clearly and connect with the right people.
          </p>
        </div>

        {/* Services and image preview */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* LIST */}
          <div className="border-t border-black/15">
            {services.map((service, index) => {
              const isActive = activeService === index;

              return (
                <button
                  key={service.number}
                  type="button"
                  onMouseEnter={() => setActiveService(index)}
                  onFocus={() => setActiveService(index)}
                  onClick={() => setActiveService(index)}
                  aria-pressed={isActive}
                  className="group relative block w-full overflow-hidden border-b border-black/15 py-7 text-left sm:py-9"
                >
                  {/* gold wash that slides in from the left */}
                  <span
                    className={`absolute inset-0 origin-left bg-[#a7864d]/10 transition-transform duration-500 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />

                  <div className="relative flex items-start justify-between gap-5 px-2 sm:px-4">
                    <div className="flex items-start gap-5 sm:gap-8">
                      <span className="pt-2 text-xs tracking-wider text-[#a7864d]">
                        {service.number}
                      </span>

                      <div>
                        <h3
                          className={`font-serif text-3xl tracking-tight transition-all duration-500 sm:text-4xl md:text-5xl ${
                            isActive
                              ? "translate-x-2 text-[#a7864d]"
                              : "text-[#292821]"
                          }`}
                        >
                          {service.title}
                        </h3>

                        <p className="mt-3 max-w-md text-sm leading-6 text-[#716b60]">
                          {service.description}
                        </p>

                        {/* tags */}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {service.details.split(" · ").map((tag) => (
                            <span
                              key={tag}
                              className={`rounded-full border px-3 py-1 text-xs tracking-wide transition-colors duration-500 ${
                                isActive
                                  ? "border-[#a7864d]/50 bg-white/80 text-[#a7864d]"
                                  : "border-black/10 bg-white/50 text-[#8b8578]"
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-lg transition-all duration-500 ${
                        isActive
                          ? "rotate-45 border-[#a7864d] bg-[#a7864d] text-white"
                          : "border-black/20 text-[#292821]"
                      }`}
                    >
                      ↗
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Desktop image preview */}
          <div className="relative hidden min-h-[470px] overflow-hidden rounded-3xl bg-[#e7dfd1] shadow-2xl shadow-black/10 lg:block">
            {services.map((service, index) => (
              <img
                key={service.number}
                src={service.image}
                alt={`${service.title} creative project inspiration`}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                  activeService === index
                    ? "scale-100 opacity-100"
                    : "scale-110 opacity-0"
                }`}
              />
            ))}

            <div className="absolute inset-0 bg-black/10" />

            {/* counter */}
            <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs tracking-widest text-white backdrop-blur-md">
              {services[activeService].number} / 0{services.length}
            </div>

            {/* slowly spinning badge */}
            <div className="absolute right-5 top-5 flex h-16 w-16 animate-[spin_12s_linear_infinite] items-center justify-center rounded-full border border-dashed border-white/50 text-2xl text-white">
              ✳
            </div>

            {/* frosted glass caption */}
            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/30 bg-white/15 p-6 text-white backdrop-blur-md">
              <p className="text-xs uppercase tracking-widest text-white/80">
                AURA® / Selected disciplines
              </p>

              <p className="mt-2 font-serif text-3xl italic">
                {services[activeService].title}
              </p>
            </div>
          </div>
        </div>

        {/* Closing note */}
        <div className="relative mt-16 flex flex-col gap-6 overflow-hidden rounded-3xl bg-[#292821] p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="absolute -right-16 -top-16 h-60 w-60 rounded-full bg-[#a7864d]/25 blur-3xl" />

          <p className="relative max-w-lg font-serif text-2xl leading-snug sm:text-3xl">
            Have an idea that doesn't fit neatly into a{" "}
            <span className="italic text-[#c6aa76]">category?</span>
            <span className="mt-2 block font-sans text-sm text-white/60">
              We'd love to hear about it.
            </span>
          </p>

          <a
            href="#contact"
            className="group relative flex w-fit shrink-0 items-center gap-4 overflow-hidden bg-[#a7864d] px-8 py-4 text-xs font-medium uppercase tracking-wider text-white shadow-lg shadow-[#a7864d]/30 transition-all duration-500 hover:-translate-y-0.5"
          >
            <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 ease-out group-hover:translate-y-0" />
            <span className="relative transition-colors duration-500 group-hover:text-[#25251f]">
              Let's talk
            </span>
            <span className="relative transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#25251f]">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}