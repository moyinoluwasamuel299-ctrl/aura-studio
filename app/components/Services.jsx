
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
      "https://images.unsplash.com/photo-1634942536790-2536e7b3b1a5?auto=format&fit=crop&w=1000&q=85",
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
      className="overflow-hidden bg-[#f8f6f0] px-6 py-24 text-[#292821] sm:px-10 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-screen-2xl">
        {/* Section introduction */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#a7864d]">
              02 / What we do
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-tight sm:text-6xl md:text-7xl">
              Thoughtful work.
              <br />
              <span className="italic text-[#a7864d]">
                Lasting impact.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#716b60] md:justify-self-end">
            Every project starts with a conversation. We bring strategy,
            creativity, and careful execution together to help brands
            communicate clearly and connect with the right people.
          </p>
        </div>

        {/* Services and image preview */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="border-t border-black/15">
            {services.map((service, index) => (
              <button
                key={service.number}
                type="button"
                onMouseEnter={() => setActiveService(index)}
                onFocus={() => setActiveService(index)}
                onClick={() => setActiveService(index)}
                className={`group block w-full border-b border-black/15 py-7 text-left transition-colors duration-300 sm:py-9 ${
                  activeService === index
                    ? "text-[#a7864d]"
                    : "text-[#292821]"
                }`}
                aria-pressed={activeService === index}
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex items-start gap-5 sm:gap-8">
                    <span className="pt-2 text-xs tracking-wider text-[#a7864d]">
                      {service.number}
                    </span>

                    <div>
                      <h3 className="font-serif text-3xl tracking-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-4xl md:text-5xl">
                        {service.title}
                      </h3>

                      <p className="mt-3 max-w-md text-sm leading-6 text-[#716b60]">
                        {service.description}
                      </p>

                      <p className="mt-4 text-xs leading-5 tracking-wide text-[#8b8578]">
                        {service.details}
                      </p>
                    </div>
                  </div>

                  <span className="pt-2 text-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    ↗
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Desktop image preview */}
          <div className="relative hidden min-h-[470px] overflow-hidden bg-[#e7dfd1] lg:block">
            {services.map((service, index) => (
              <img
                key={service.number}
                src={service.image}
                alt={`${service.title} creative project inspiration`}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                  activeService === index
                    ? "scale-100 opacity-100"
                    : "scale-105 opacity-0"
                }`}
              />
            ))}

            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/60 to-transparent p-7 text-white">
              <div>
                <p className="text-xs uppercase tracking-widest text-white/80">
                  AURA® / Selected disciplines
                </p>

                <p className="mt-2 font-serif text-3xl italic">
                  {services[activeService].title}
                </p>
              </div>

              <span className="text-xl">✳</span>
            </div>
          </div>
        </div>

        {/* Closing note */}
        <div className="mt-16 flex flex-col gap-5 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-sm leading-7 text-[#716b60]">
            Have an idea that doesn't fit neatly into a category? We'd
            love to hear about it.
          </p>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-4 border-b border-[#a7864d] pb-2 text-xs uppercase tracking-widest transition-colors hover:text-[#a7864d]"
          >
            Let's talk
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}