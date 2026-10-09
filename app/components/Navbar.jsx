
"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const links = [
    { number: "01", label: "Home", href: "#home" },
    { number: "02", label: "About", href: "#about" },
    { number: "03", label: "Services", href: "#services" },
    { number: "04", label: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-black/10 bg-[#f8f6f0]/90 shadow-sm backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-20.5 max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-14">
          <a
            href="#home"
            onClick={closeMenu}
            className="relative z-60 text-[27px] font-semibold tracking-[-2px] text-[#25251f]"
            aria-label="Aura Studio home"
          >
            AURA<span className="ml-0.5 text-sm align-top">®</span>
            <span className="ml-2 text-[9px] font-normal tracking-[2px] text-[#9b7b45]">
              STUDIO
            </span>
          </a>

          <div className="hidden items-center gap-9 md:flex">
            {links.map((link) => (
              <a
                key={link.number}
                href={link.href}
                className="text-[12px] tracking-[0.5px] text-[#48473f] transition-colors duration-300 hover:text-[#a7864d]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#brief"
              className="border border-[#a7864d] px-5 py-3 text-[11px] tracking-[0.5px] text-[#39372f] transition-all duration-300 hover:bg-[#a7864d] hover:text-white"
            >
              Start a Project <span className="ml-2">↗</span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-60 flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span
              className={`h-px w-7 bg-[#25251f] transition-all duration-300 ${
                menuOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-7 bg-[#25251f] transition-all duration-300 ${
                menuOpen ? "-translate-y-0.875-rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-[#f5f1e8] px-7 transition-all duration-500 md:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <p className="mb-10 text-[10px] uppercase tracking-[4px] text-[#9b7b45]">
          London — Creative Studio
        </p>

        <div className="flex flex-col">
          {links.map((link) => (
            <a
              key={link.number}
              href={link.href}
              tabIndex={menuOpen ? 0 : -1}
              onClick={closeMenu}
              className="group flex items-start gap-4 border-b border-black/10 py-5"
            >
              <span className="pt-2 text-[10px] tracking-widest text-[#a7864d]">
                {link.number}
              </span>
              <span className="font-serif text-5xl tracking-tight text-[#25251f] transition-colors duration-300 group-hover:text-[#a7864d]">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        <a
          href="#brief"
          tabIndex={menuOpen ? 0 : -1}
          onClick={closeMenu}
          className="mt-10 flex items-center justify-between border border-[#a7864d] px-5 py-4 text-sm text-[#25251f]"
        >
          Start a Project <span>↗</span>
        </a>

        <p className="absolute bottom-8 left-7 text-[10px] tracking-[2px] text-[#777267]">
          AURA® — INDEPENDENT BY NATURE
        </p>
      </div>
    </>
  );
}