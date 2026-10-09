"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [year, setYear] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const exploreLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Behance", href: "https://www.behance.net/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#292821] px-6 pt-16 text-[#f8f6f0] sm:px-10 md:pt-20 lg:px-16">
      {/* soft background glows */}
      <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#a7864d]/15 blur-3xl" />
      <div className="absolute -right-24 bottom-20 h-96 w-96 rounded-full bg-[#c6aa76]/10 blur-3xl" />

      <div className="relative mx-auto max-w-screen-2xl">
        {/* Call-to-action card */}
        <div className="relative flex flex-col gap-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:p-12 md:flex-row md:items-center md:justify-between">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#a7864d]/25 blur-3xl" />

          <p className="relative max-w-2xl font-serif text-3xl leading-snug sm:text-4xl md:text-5xl">
            Ready to make something{" "}
            <span className="italic text-[#c6aa76]">worth remembering?</span>
          </p>

          <a
            href="#brief"
            className="group relative flex w-fit shrink-0 items-center gap-3 overflow-hidden rounded-full bg-[#a7864d] px-8 py-4 text-xs font-medium uppercase tracking-widest text-white shadow-lg shadow-[#a7864d]/30 transition-all duration-500 hover:-translate-y-0.5"
          >
            <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 ease-out group-hover:translate-y-0" />
            <span className="relative transition-colors duration-500 group-hover:text-[#25251f]">
              Start a Project
            </span>
            <span className="relative transition-all duration-500 group-hover:rotate-45 group-hover:text-[#25251f]">
              ↗
            </span>
          </a>
        </div>

        {/* Top section */}
        <div className="flex flex-col gap-12 border-b border-white/15 py-14 md:flex-row md:items-start md:justify-between">
          <div>
            <a
              href="#home"
              className="font-serif text-4xl tracking-tight transition-colors duration-300 hover:text-[#c6aa76]"
            >
              AURA<span className="ml-1 align-top text-sm">®</span>
            </a>

            <p className="mt-5 max-w-sm text-base leading-8 text-white/55">
              Independent in spirit. Thoughtful by design. Creating
              meaningful brands and digital experiences from London and
              beyond.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-20">
            {/* Explore */}
            <div>
              <p className="mb-6 text-xs uppercase tracking-widest text-[#c6aa76]">
                Explore
              </p>

              <div className="flex flex-col items-start gap-4 text-sm text-white/65">
                {exploreLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group relative py-1 transition-colors duration-300 hover:text-[#c6aa76]"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-current transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>
            </div>

            {/* Find us */}
            <div>
              <p className="mb-6 text-xs uppercase tracking-widest text-[#c6aa76]">
                Find us
              </p>

              <div className="flex flex-col items-start gap-3 text-sm">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-full border border-white/15 px-4 py-2 text-white/65 transition-all duration-300 hover:border-[#a7864d] hover:bg-[#a7864d] hover:text-white"
                  >
                    {link.label}
                    <span className="transition-transform duration-300 group-hover:rotate-45">
                      ↗
                    </span>
                  </a>
                ))}

                <a
                  href="mailto:hello@aurastudio.com"
                  className="group flex items-center gap-3 rounded-full border border-white/15 px-4 py-2 text-white/65 transition-all duration-300 hover:border-[#a7864d] hover:bg-[#a7864d] hover:text-white"
                >
                  Email
                  <span className="transition-transform duration-300 group-hover:rotate-45">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Location and back-to-top */}
        <div className="flex flex-col gap-5 border-b border-white/15 py-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#c6aa76]" />
            <p className="text-xs uppercase tracking-widest text-white/50">
              London, United Kingdom · Working globally
            </p>
          </div>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`group flex w-fit items-center gap-3 text-xs uppercase tracking-widest text-[#c6aa76] transition-all duration-300 hover:text-white ${
              showBackToTop ? "visible opacity-100" : "invisible opacity-0"
            }`}
            aria-label="Back to top"
            tabIndex={showBackToTop ? 0 : -1}
          >
            Back to top
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c6aa76]/50 text-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#a7864d] group-hover:bg-[#a7864d]">
              ↑
            </span>
          </button>
        </div>

        {/* Giant wordmark */}
        <div className="group relative pt-8">
          <p className="pointer-events-none select-none bg-linear-to-b from-[#f8f6f0] to-[#f8f6f0]/10 bg-clip-text text-center font-serif text-[19vw] leading-none tracking-[-0.08em] text-transparent transition-all duration-700 group-hover:from-[#c6aa76] group-hover:to-[#a7864d]/10 md:pointer-events-auto">
            AURA<span className="align-top text-[5vw] tracking-normal">®</span>
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col gap-3 border-t border-white/15 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year ?? "2026"} AURA® Studio. All rights reserved.</p>

          <p>Made with intention in London.</p>
        </div>
      </div>
    </footer>
  );
}