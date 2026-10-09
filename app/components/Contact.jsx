
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
      className="bg-[#f8f6f0] px-6 py-24 text-[#292821] sm:px-10 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          {/* Contact introduction */}
          <div>
            <p className="text-xs uppercase tracking-widest text-[#a7864d]">
              04 / Get in touch
            </p>

            <h2 className="mt-7 font-serif text-5xl leading-tight sm:text-6xl md:text-7xl">
              Have something
              <br />
              <span className="italic text-[#a7864d]">
                good in mind?
              </span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-[#716b60]">
              Tell us what you're thinking about. It doesn't need to be
              perfectly figured out. A conversation is a good place to start.
            </p>

            <div className="mt-12 border-t border-black/10 pt-6">
              <p className="text-xs uppercase tracking-widest text-[#8b8578]">
                For new business enquiries
              </p>

              <a
                href="mailto:hello@aurastudio.com"
                className="mt-3 inline-block font-serif text-2xl transition-colors hover:text-[#a7864d] sm:text-3xl"
              >
                hello@aurastudio.com
              </a>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-[#8b8578]">
                Our home
              </p>

              <p className="mt-3 text-sm text-[#716b60]">
                London, United Kingdom
                <br />
                Working with good people, everywhere.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div>
            {submitted ? (
              <div
                role="status"
                className="flex min-h-96 flex-col justify-center border border-[#a7864d]/40 p-8 sm:p-12"
              >
                <span className="text-3xl text-[#a7864d]">✳</span>

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
                  className="mt-8 inline-flex w-fit items-center gap-3 border-b border-[#a7864d] pb-3 text-xs uppercase tracking-widest hover:text-[#a7864d]"
                >
                  Continue by email <span>↗</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                  className="mt-6 w-fit text-sm text-[#716b60] hover:text-[#a7864d]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-8">
                  <label
                    htmlFor="contact-name"
                    className="mb-3 block text-xs uppercase tracking-widest text-[#716b60]"
                  >
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
                    className="w-full border-b border-black/20 bg-transparent py-4 text-base outline-none transition-colors placeholder:text-[#aaa397] focus:border-[#a7864d]"
                    required
                  />
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="contact-email"
                    className="mb-3 block text-xs uppercase tracking-widest text-[#716b60]"
                  >
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
                    className="w-full border-b border-black/20 bg-transparent py-4 text-base outline-none transition-colors placeholder:text-[#aaa397] focus:border-[#a7864d]"
                    required
                  />
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="contact-message"
                    className="mb-3 block text-xs uppercase tracking-widest text-[#716b60]"
                  >
                    Tell us about your idea
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="A little about your project, your plans, or what you're curious about..."
                    className="w-full resize-y border-b border-black/20 bg-transparent py-4 text-base leading-7 outline-none transition-colors placeholder:text-[#aaa397] focus:border-[#a7864d]"
                    required
                  />
                </div>

                {error && (
                  <p role="alert" className="mb-5 text-sm text-red-700">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="group flex w-full items-center justify-between bg-[#292821] px-6 py-5 text-sm text-[#f8f6f0] transition-colors hover:bg-[#a7864d]"
                >
                  Send your enquiry
                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </button>

                <p className="mt-4 text-xs leading-5 text-[#8b8578]">
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