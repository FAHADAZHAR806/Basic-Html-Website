import React from "react";
import Hero from "../components/Hero";
import About from "./About";
import Education from "./Education";
import Skills from "./Skill";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
