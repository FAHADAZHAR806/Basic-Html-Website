import React from "react";
import Projects from "./Projects";

export default function Home() {
  return (
    <>
      <main>
        <section className="flex flex-col justify-center items-center">
          <h1 class="mt-2 text-3xl sm:text-4xl font-extrabold leading-tight">
            Welcome to my website.
          </h1>{" "}
          <p class="mt-3 text-lg sm:text-xl text-slate-600">
            I'm a front-end developer aiming toward becoming a full-stack
            developer.
          </p>
        </section>
        <Projects />
      </main>
    </>
  );
}
