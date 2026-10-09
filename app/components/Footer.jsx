
"use client";

import { useEffect, useState } from "react";

export default function Footer() {
    const [showBackToTop, setShowBackToTop] = useState(false);

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
    const [year, setYear] = useState(null);

useEffect(() => {
  setYear(new Date().getFullYear());
}, []);

    return (
        <footer className="overflow-hidden bg-[#292821] px-6 pt-16 text-[#f8f6f0] sm:px-10 md:pt-20 lg:px-16">
            <div className="mx-auto max-w-screen-2xl">
                {/* Top section */}
                <div className="flex flex-col gap-10 border-b border-white/15 pb-12 md:flex-row md:items-start md:justify-between">
                    <div>
                        <a
                            href="#home"
                            className="font-serif text-4xl tracking-tight transition-colors hover:text-[#c6aa76]"
                        >
                            AURA<span className="ml-1 align-top text-sm">®</span>
                        </a>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
                            Independent in spirit. Thoughtful by design.
                            Creating meaningful brands and digital experiences
                            from London and beyond.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-10 sm:gap-16">
                        <div>
                            <p className="mb-5 text-xs uppercase tracking-widest text-[#c6aa76]">
                                Explore
                            </p>

                            <div className="flex flex-col items-start gap-4 text-sm text-white/65">
                                <a href="#home" className="transition-colors hover:text-white">
                                    Home
                                </a>
                                <a href="#about" className="transition-colors hover:text-white">
                                    About
                                </a>
                                <a href="#services" className="transition-colors hover:text-white">
                                    Services
                                </a>
                                <a href="#contact" className="transition-colors hover:text-white">
                                    Contact
                                </a>
                            </div>
                        </div>

                        <div>
                            <p className="mb-5 text-xs uppercase tracking-widest text-[#c6aa76]">
                                Find us
                            </p>

                            <div className="flex flex-col items-start gap-4 text-sm text-white/65">
                                <a
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="transition-colors hover:text-white"
                                >
                                    Instagram ↗
                                </a>

                                <a
                                    href="https://www.behance.net/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="transition-colors hover:text-white"
                                >
                                    Behance ↗
                                </a>

                                <a
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="transition-colors hover:text-white"
                                >
                                    LinkedIn ↗
                                </a>

                                <a
                                    href="mailto:hello@aurastudio.com"
                                    className="transition-colors hover:text-white"
                                >
                                    Email ↗
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Location and back-to-top */}
                <div className="flex flex-col gap-5 border-b border-white/15 py-7 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs uppercase tracking-widest text-white/50">
                        London, United Kingdom · Working globally
                    </p>

                    <button
                        type="button"
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        className={`flex w-fit items-center gap-3 text-xs uppercase tracking-widest text-[#c6aa76] transition-all duration-300 hover:text-white ${showBackToTop
                                ? "visible opacity-100"
                                : "invisible opacity-0"
                            }`}
                        aria-label="Back to top"
                        tabIndex={showBackToTop ? 0 : -1}
                    >
                        Back to top <span className="text-lg">↑</span>
                    </button>
                </div>
                

                {/* Giant wordmark */}
                <div className="relative pt-8">
                    <p className="pointer-events-none select-none text-center font-serif text-[19vw] leading-none tracking-[-0.08em] text-[#f8f6f0]">
                        AURA<span className="align-top text-[5vw] tracking-normal">®</span>
                    </p>
                </div>

                {/* Copyright */}
                <div className="flex flex-col gap-3 border-t border-white/15 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {year ?? "2026"} AURA® Studio. All rights reserved.
                    </p>

                    <p>Made with intention in London.</p>
                </div>
            </div>
        </footer>
    );
}