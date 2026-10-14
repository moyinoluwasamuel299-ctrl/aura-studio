"use client";

import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  // NEW: true while the page is scrolling, so the button can open up
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimer = useRef(null);
  const [year, setYear] = useState(null);

  // NEW: controls the AURA letter-by-letter entrance
  const [wordmarkVisible, setWordmarkVisible] = useState(false);
  const wordmarkRef = useRef(null);
  const wordmarkLetters = ["A", "U", "R", "A", "®"];

  useEffect(() => {
    const updateButton = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    const handleScroll = () => {
      updateButton();

      // NEW: the button opens while scrolling, and closes again
      // once the user has stopped for a moment (works on mobile too)
      setIsScrolling(true);
      clearTimeout(scrollTimer.current);
      scrollTimer.current = setTimeout(() => setIsScrolling(false), 1500);
    };

    updateButton();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimer.current);
    };
  }, []);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  // NEW: when the big AURA scrolls into view the letters slide in,
  // when it leaves the screen they reset so it plays again next time
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setWordmarkVisible(entries[0].isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (wordmarkRef.current) {
      observer.observe(wordmarkRef.current);
    }

    return () => observer.disconnect();
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

          {/* CHANGED: fixed to the screen. It rests as just the arrow, and opens
              to show "Back to top" while scrolling or on hover / keyboard focus. */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`group fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-50 flex touch-manipulation items-center rounded-full bg-[#292821]/90 p-1 text-xs uppercase tracking-widest text-[#c6aa76] shadow-lg shadow-black/20 backdrop-blur transition-all duration-500 hover:text-white focus-visible:text-white ${
              showBackToTop
                ? "visible translate-y-0 opacity-100"
                : "invisible translate-y-4 opacity-0"
            }`}
            aria-label="Back to top"
            tabIndex={showBackToTop ? 0 : -1}
          >
            {/* the label: hidden until scrolling, hover or focus */}
            <span
              className={`overflow-hidden whitespace-nowrap transition-all duration-500 ease-out group-hover:max-w-40 group-hover:pl-4 group-hover:pr-3 group-hover:opacity-100 group-focus-visible:max-w-40 group-focus-visible:pl-4 group-focus-visible:pr-3 group-focus-visible:opacity-100 ${
                isScrolling
                  ? "max-w-40 pl-4 pr-3 opacity-100"
                  : "max-w-0 pl-0 pr-0 opacity-0"
              }`}
            >
              Back to top
            </span>

            {/* the arrow: always visible, 44px so it is easy to tap on mobile */}
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#c6aa76]/50 text-lg transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-[#a7864d] group-hover:bg-[#a7864d]">
              ↑
            </span>
          </button>
        </div>

    
        {/* CHANGED: same big AURA, but split into letters that slide up one at a time */}
        <div ref={wordmarkRef} className="group relative pt-8">
          <p className="pointer-events-none select-none text-center font-serif text-[19vw] leading-none tracking-[0.03em] md:pointer-events-auto">
            {wordmarkLetters.map((letter, index) => (
              // outer box hides the letter until it slides up into view
              <span
                key={index}
                className={`inline-block [clip-path:inset(0_-0.3em)] ${
                  letter === "®" ? "align-top text-[5vw] tracking-normal" : ""
                }`}
              >
                {/* middle span does the sliding, with a delay per letter */}
                <span
                  className={`inline-block transition-transform duration-1000 ease-out ${
                    wordmarkVisible ? "translate-y-0" : "translate-y-full"
                  }`}
                  style={{
                    transitionDelay: wordmarkVisible ? `${index * 150}ms` : "0ms",
                  }}
                >
                  {/* inner span keeps your original gradient and hover colour */}
                  <span className="inline-block bg-linear-to-b from-[#f8f6f0] to-[#f8f6f0]/10 bg-clip-text text-transparent transition-all duration-700 group-hover:from-[#c6aa76] group-hover:to-[#a7864d]/10">
                    {letter}
                  </span>
                </span>
              </span>
            ))}
          </p>
        </div>

         {/* Copyright  */}
        <div className="flex flex-col gap-3 border-t border-white/15 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year ?? "2026"} AURA® Studio. All rights reserved.</p>

          <p>Made with intention in London.</p>
        </div>
      </div>
    </footer>
  );
}