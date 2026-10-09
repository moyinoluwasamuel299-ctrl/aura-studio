"use client";

import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));

        setError("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setError("Please complete all three fields.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(formData.email)) {
            setError("Please enter a valid email address.");
            return;
        }

        setSubmitted(true);
    };

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[#f8f6f0] px-6 py-24 text-[#292821] sm:px-10 md:py-32 lg:px-16"
        >
            {/* soft background glows */}
            <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-[#a7864d]/10 blur-3xl" />
            <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-[#c6aa76]/15 blur-3xl" />

            <div className="relative mx-auto max-w-screen-2xl">
                <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
                    {/* Contact introduction */}
                    <div>
                        <div className="inline-flex items-center gap-3 rounded-full border border-[#a7864d]/30 bg-white/60 px-4 py-2">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-[#a7864d]" />
                            <p className="text-xs uppercase tracking-widest text-[#a7864d]">
                                04 / Get in touch
                            </p>
                        </div>

                        <h2 className="mt-8 font-serif text-5xl leading-tight sm:text-6xl md:text-7xl">
                            Have something
                            <br />
                            <span className="italic text-[#a7864d]">good in mind?</span>
                        </h2>

                        <p className="mt-7 max-w-md text-base leading-8 text-[#716b60]">
                            Tell us what you're thinking about. It doesn't need to be
                            perfectly figured out. A conversation is a good place to start.
                        </p>

                        <div className="mt-12 space-y-4">
                            {/* email card */}
                            <a
                                href="mailto:hello@aurastudio.com"
                                className="group flex items-center justify-between gap-4 rounded-2xl border border-black/10 bg-white/70 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#a7864d]/50 hover:bg-white hover:shadow-xl hover:shadow-[#a7864d]/10"
                            >
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-[#8b8578]">
                                        For new business enquiries
                                    </p>

                                    <p className="mt-3 font-serif text-2xl transition-colors duration-300 group-hover:text-[#a7864d] sm:text-3xl">
                                        hello@aurastudio.com
                                    </p>
                                </div>

                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/20 text-lg transition-all duration-500 group-hover:rotate-45 group-hover:border-[#a7864d] group-hover:bg-[#a7864d] group-hover:text-white">
                                    ↗
                                </span>
                            </a>

                            <div className="grid gap-4 sm:grid-cols-2">
                                {/* location card */}
                                <div className="rounded-2xl border border-black/10 bg-white/70 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#a7864d]/50">
                                    <p className="text-xs uppercase tracking-widest text-[#8b8578]">
                                        Our home
                                    </p>

                                    <p className="mt-3 font-serif text-xl">London, UK</p>

                                    <p className="mt-2 text-sm leading-6 text-[#716b60]">
                                        Working with good people, everywhere.
                                    </p>
                                </div>

                                {/* reply card */}
                                <div className="rounded-2xl border border-black/10 bg-white/70 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#a7864d]/50">
                                    <div className="flex items-center gap-2">
                                        <span className="relative flex h-2.5 w-2.5">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                                        </span>

                                        <p className="text-xs uppercase tracking-widest text-[#8b8578]">
                                            Open to new work
                                        </p>
                                    </div>

                                    <p className="mt-3 font-serif text-xl">
                                        A conversation first.
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-[#716b60]">
                                        No pressure. Just ideas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact form */}
                    <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-2xl shadow-black/5 sm:p-10">
                        {submitted ? (
                            <div
                                role="status"
                                className="flex min-h-96 flex-col justify-center"
                            >
                                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#a7864d]/10 text-3xl text-[#a7864d]">
                                    ✳
                                </span>

                                <h3 className="mt-6 font-serif text-4xl">
                                    Thank you, {formData.name.trim()}.
                                </h3>

                                <p className="mt-5 max-w-md text-sm leading-7 text-[#716b60]">
                                    Your message has been received by this page. To make
                                    sure it reaches AURA®, use the email option below.
                                </p>

                                <a
                                    href={`mailto:hello@aurastudio.com?subject=${encodeURIComponent(
                                        "New enquiry from " + formData.name.trim()
                                    )}&body=${encodeURIComponent(
                                        "Name: " + formData.name.trim() +
                                        "\nEmail: " + formData.email.trim() +
                                        "\n\nMessage:\n" + formData.message.trim()
                                    )}`}
                                    className="group relative mt-8 flex w-fit items-center gap-3 overflow-hidden rounded-full bg-[#a7864d] px-8 py-4 text-xs font-medium uppercase tracking-widest text-white shadow-lg shadow-[#a7864d]/30 transition-all duration-500 hover:-translate-y-0.5"
                                >
                                    <span className="absolute inset-0 translate-y-full bg-[#25251f] transition-transform duration-500 ease-out group-hover:translate-y-0" />
                                    <span className="relative">Continue by email</span>
                                    <span className="relative transition-transform duration-300 group-hover:rotate-45">
                                        ↗
                                    </span>
                                </a>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setSubmitted(false);
                                        setFormData({ name: "", email: "", message: "" });
                                    }}
                                    className="mt-6 w-fit text-sm text-[#716b60] transition-colors hover:text-[#a7864d]"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate>
                                <h3 className="font-serif text-3xl sm:text-4xl">
                                    Start the{" "}
                                    <span className="italic text-[#a7864d]">conversation.</span>
                                </h3>

                                <p className="mb-9 mt-3 text-sm text-[#716b60]">
                                    Three quick fields and you're done.
                                </p>

                                <div className="mb-6">
                                    <label
                                        htmlFor="contact-name"
                                        className="mb-3 flex items-center gap-3 text-xs uppercase tracking-widest text-[#716b60]"
                                    >
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#a7864d]/10 text-[10px] text-[#a7864d]">
                                            01
                                        </span>
                                        Your name
                                    </label>

                                    <input
                                        id="contact-name"
                                        type="text"
                                        name="name"
                                        autoComplete="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="What should we call you?"
                                        className="w-full rounded-xl border border-black/15 bg-[#f8f6f0]/60 px-5 py-4 text-base outline-none transition-all duration-300 placeholder:text-[#aaa397] focus:border-[#a7864d] focus:bg-white focus:shadow-lg focus:shadow-[#a7864d]/10"
                                        required
                                    />
                                </div>

                                <div className="mb-6">
                                    <label
                                        htmlFor="contact-email"
                                        className="mb-3 flex items-center gap-3 text-xs uppercase tracking-widest text-[#716b60]"
                                    >
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#a7864d]/10 text-[10px] text-[#a7864d]">
                                            02
                                        </span>
                                        Your email
                                    </label>

                                    <input
                                        id="contact-email"
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Where can we reach you?"
                                        className="w-full rounded-xl border border-black/15 bg-[#f8f6f0]/60 px-5 py-4 text-base outline-none transition-all duration-300 placeholder:text-[#aaa397] focus:border-[#a7864d] focus:bg-white focus:shadow-lg focus:shadow-[#a7864d]/10"
                                        required
                                    />
                                </div>

                                <div className="mb-6">
                                    <label
                                        htmlFor="contact-message"
                                        className="mb-3 flex items-center gap-3 text-xs uppercase tracking-widest text-[#716b60]"
                                    >
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#a7864d]/10 text-[10px] text-[#a7864d]">
                                            03
                                        </span>
                                        Tell us about your idea
                                    </label>

                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="A little about your project, your plans, or what you're curious about..."
                                        className="w-full resize-y rounded-xl border border-black/15 bg-[#f8f6f0]/60 px-5 py-4 text-base leading-7 outline-none transition-all duration-300 placeholder:text-[#aaa397] focus:border-[#a7864d] focus:bg-white focus:shadow-lg focus:shadow-[#a7864d]/10"
                                        required
                                    />
                                </div>

                                {error && (
                                    <p
                                        role="alert"
                                        className="mb-5 flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                                    >
                                        <span>⚠</span>
                                        {error}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    className="group relative flex w-full items-center justify-between overflow-hidden rounded-full bg-[#292821] px-8 py-5 text-sm font-medium text-[#f8f6f0] shadow-lg shadow-black/10 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-xl"
                                >
                                    <span className="absolute inset-0 translate-y-full bg-[#a7864d] transition-transform duration-500 ease-out group-hover:translate-y-0" />
                                    <span className="relative">Send your enquiry</span>
                                    <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-lg transition-transform duration-500 group-hover:rotate-45">
                                        ↗
                                    </span>
                                </button>

                                <p className="mt-5 text-xs leading-5 text-[#8b8578]">
                                    Your details are used to prepare your enquiry. This demo
                                    form does not send information to a server.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}