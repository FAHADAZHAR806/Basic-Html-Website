import React from "react";

export default function Skill() {
  return (
    <>
      <section
        id="skill"
        className="w-full max-w-6xl mx-auto flex flex-col items-center py-16 px-4 sm:px-8 md:px-12 lg:px-20"
      >
        {/* Heading */}
        <h1 className="text-center text-3xl sm:text-4xl font-bold mb-12">
          Skills
        </h1>
        <div className="flex flex-cols-2 flex-row flex-wrap justify-center items-center gap-10"></div>
      </section>
    </>
  );
}
