"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import BriefStudio from "./components/BriefStudio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  // the brief from the Brief Studio is kept here so Contact can use it too
  const [brief, setBrief] = useState(null);

  function handleSendBrief(text) {
    setBrief({ text: text });
  }

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <BriefStudio onSendBrief={handleSendBrief} />
        <Contact brief={brief} />
      </main>

      <Footer />
    </>
  );
}