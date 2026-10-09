
"use client";

import { useState } from "react";

const questions = [
  {
    label: "First, what are you hoping to create?",
    description: "Every good project starts with an idea.",
    options: [
      {
        title: "A new brand",
        detail: "A fresh identity, from the ground up.",
        value: "Branding",
      },
      {
        title: "A digital experience",
        detail: "A website, app, or digital product.",
        value: "UI/UX Design",
      },
      {
        title: "A beautiful website",
        detail: "A thoughtful home for your business online.",
        value: "Web Design",
      },
      {
        title: "Something else",
        detail: "A bigger idea that needs room to grow.",
        value: "Creative Direction",
      },
    ],
  },
  {
    label: "Who are you creating it for?",
    description: "The people you want to reach shape every decision.",
    options: [
      {
        title: "A new audience",
        detail: "Introducing something new to the world.",
        value: "New audience",
      },
      {
        title: "Our existing customers",
        detail: "Building stronger relationships.",
        value: "Existing customers",
      },
      {
        title: "A premium market",
        detail: "Connecting with a more design-conscious audience.",
        value: "Premium market",
      },
      {
        title: "Still figuring that out",
        detail: "I'd like help finding the right direction.",
        value: "Audience exploration",
      },
    ],
  },
  {
    label: "What matters most to you?",
    description: "Tell us what a successful project would look like.",
    options: [
      {
        title: "Standing out",
        detail: "A distinctive identity people remember.",
        value: "Distinctive identity",
      },
      {
        title: "Creating a better experience",
        detail: "Making every interaction feel effortless.",
        value: "Better user experience",
      },
      {
        title: "Growing the business",
        detail: "Turning a strong idea into real progress.",
        value: "Business growth",
      },
      {
        title: "Bringing it all together",
        detail: "A consistent brand and digital presence.",
        value: "Complete creative direction",
      },
    ],
  },
];

export default function BriefStudio() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(["", "", ""]);
  const [projectName, setProjectName] = useState("");
  const [showBrief, setShowBrief] = useState(false);

  const currentQuestion = questions[step];

  const chooseAnswer = (value) => {
    setAnswers((previous) =>
      previous.map((answer, index) =>
        index === step ? value : answer
      )
    );
  };

  const recommendations = [...new Set([
    answers[0],
    answers[2] === "Complete creative direction"
      ? "Branding"
      : "",
    answers[0] === "Branding" && answers[2] === "Business growth"
      ? "Web Design"
      : "",
    answers[0] === "UI/UX Design" ? "UI/UX Design" : "",
    answers[0] === "Web Design" ? "Web Design" : "",
    answers[0] === "Creative Direction" ? "Creative Direction" : "",
    answers[2] === "Better user experience" ? "UI/UX Design" : "",
    answers[2] === "Distinctive identity" ? "Branding" : "",
  ].filter(Boolean))];

  const recommendationDetails = {
    Branding:
      "Create a distinctive identity and a clear visual language for your brand.",
    "UI/UX Design":
      "Shape a digital experience around the needs and expectations of your audience.",
    "Web Design":
      "Build a thoughtful, responsive online presence that communicates your value.",
    "Creative Direction":
      "Bring the different parts of your idea together under one creative vision.",
  };

  const nextStep = () => {
    if (!answers[step]) return;

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowBrief(true);
    }
  };

  const previousStep = () => {
    if (showBrief) {
      setShowBrief(false);
      return;
    }

    if (step > 0) {
      setStep(step - 1);
    }
  };

  const briefText = `AURA® PROJECT BRIEF

Project: ${projectName.trim() || "New creative project"}

Project needs: ${answers[0]}
Audience: ${answers[1]}
Main objective: ${answers[2]}

Recommended services:
${recommendations.join(", ")}

Prepared with the AURA® Brief Studio.
Next step: Share this brief with AURA® to discuss your project.`;

  const sendBrief = () => {
    const subject = encodeURIComponent(
      `Project enquiry: ${projectName.trim() || "New creative project"}`
    );
    const body = encodeURIComponent(briefText);

    window.location.href =
      `mailto:hello@aurastudio.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="brief"
      className="bg-[#292821] px-6 py-24 text-[#f8f6f0] sm:px-10 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Introduction */}
          <div>
            <p className="text-xs uppercase tracking-widest text-[#c6aa76]">
              03 / The Brief Studio
            </p>

            <h2 className="mt-7 font-serif text-5xl leading-tight sm:text-6xl md:text-7xl">
              Every great idea starts{" "}
              <span className="italic text-[#c6aa76]">somewhere.</span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/60">
              Tell us a little about what you have in mind. A few
              thoughtful questions will help shape an initial direction
              for your project.
            </p>

            <div className="mt-12 border-t border-white/15 pt-5">
              <p className="text-xs uppercase tracking-widest text-white/40">
                A little inspiration
              </p>

              <p className="mt-4 font-serif text-2xl italic text-[#c6aa76]">
                Clarity creates possibility.
              </p>
            </div>
          </div>

          {/* Consultation experience */}
          <div className="border border-white/15 p-5 sm:p-8 md:p-10">
            <div className="mb-9 flex items-center justify-between gap-4">
              <p className="text-xs uppercase tracking-widest text-white/50">
                {showBrief
                  ? "Your project direction"
                  : `Question ${step + 1} of ${questions.length}`}
              </p>

              <p className="text-xs text-[#c6aa76]">
                {showBrief ? "Brief ready" : `${Math.round(((step + 1) / questions.length) * 100)}%`}
              </p>
            </div>

            <div className="mb-10 h-px bg-white/10">
              <div
                className="h-px bg-[#c6aa76] transition-all duration-500"
                style={{
                  width: showBrief
                    ? "100%"
                    : `${((step + 1) / questions.length) * 100}%`,
                }}
              />
            </div>

            {!showBrief ? (
              <>
                <h3 className="font-serif text-3xl leading-snug sm:text-4xl">
                  {currentQuestion.label}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  {currentQuestion.description}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {currentQuestion.options.map((option) => {
                    const selected = answers[step] === option.value;

                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => chooseAnswer(option.value)}
                        aria-pressed={selected}
                        className={`min-h-32 border p-5 text-left transition-all duration-300 ${
                          selected
                            ? "border-[#c6aa76] bg-[#c6aa76]/10"
                            : "border-white/15 hover:border-white/40"
                        }`}
                      >
                        <span className="flex items-center justify-between gap-3">
                          <span className="font-serif text-xl">
                            {option.title}
                          </span>

                          <span className="text-[#c6aa76]">
                            {selected ? "✓" : "↗"}
                          </span>
                        </span>

                        <span className="mt-3 block text-sm leading-6 text-white/50">
                          {option.detail}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-9 flex items-center justify-between gap-4 border-t border-white/15 pt-6">
                  <button
                    type="button"
                    onClick={previousStep}
                    disabled={step === 0}
                    className="text-sm text-white/50 transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    ← Back
                  </button>

                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!answers[step]}
                    className="bg-[#c6aa76] px-6 py-4 text-sm text-[#292821] transition-colors hover:bg-[#ddc89e] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {step === questions.length - 1
                      ? "Create my brief ↗"
                      : "Next question →"}
                  </button>
                </div>
              </>
            ) : (
              <div>
                <p className="text-xs uppercase tracking-widest text-[#c6aa76]">
                  Your starting point
                </p>

                <h3 className="mt-4 font-serif text-3xl sm:text-4xl">
                  A direction worth exploring.
                </h3>

                <label
                  htmlFor="project-name"
                  className="mt-8 block text-sm text-white/70"
                >
                  Give your project a name (optional)
                </label>

                <input
                  id="project-name"
                  type="text"
                  value={projectName}
                  onChange={(event) => setProjectName(event.target.value)}
                  placeholder="e.g. A new chapter"
                  className="mt-3 w-full border-b border-white/25 bg-transparent py-4 text-base text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#c6aa76]"
                />

                <div className="mt-8 space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/40">
                      Project needs
                    </p>
                    <p className="mt-2 text-sm">{answers[0]}</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/40">
                      Audience
                    </p>
                    <p className="mt-2 text-sm">{answers[1]}</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/40">
                      Main objective
                    </p>
                    <p className="mt-2 text-sm">{answers[2]}</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/40">
                      Recommended services
                    </p>

                    <div className="mt-3 space-y-4">
                      {recommendations.map((recommendation) => (
                        <div
                          key={recommendation}
                          className="border-l border-[#c6aa76] pl-4"
                        >
                          <p className="font-serif text-xl text-[#c6aa76]">
                            {recommendation}
                          </p>

                          <p className="mt-1 text-sm leading-6 text-white/50">
                            {recommendationDetails[recommendation]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={sendBrief}
                    className="bg-[#c6aa76] px-6 py-4 text-sm text-[#292821] transition-colors hover:bg-[#ddc89e]"
                  >
                    Send this to AURA ↗
                  </button>

                  <button
                    type="button"
                    onClick={previousStep}
                    className="border border-white/20 px-6 py-4 text-sm transition-colors hover:border-[#c6aa76]"
                  >
                    Refine my answers
                  </button>
                </div>

                <p className="mt-5 text-xs leading-5 text-white/40">
                  Your brief is generated in your browser. Sending it opens
                  your email application with the details filled in.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}