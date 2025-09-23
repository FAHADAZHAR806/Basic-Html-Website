import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaWordpress,
} from "react-icons/fa";
import { RiTailwindCssFill, RiJavascriptFill } from "react-icons/ri";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";

export default function Skills() {
  const Skills = [
    { lang: "HTML", icon: FaHtml5 },
    { lang: "CSS", icon: FaCss3Alt },
    { lang: "Java Script", icon: RiJavascriptFill },
    { lang: "Bootstrap", icon: FaBootstrap },
    { lang: "Tailwind", icon: RiTailwindCssFill },
    { lang: "React", icon: FaReact },
    { lang: "Github", icon: FaGithub },
    { lang: "WordPress", icon: FaWordpress },
    { lang: "Photoshop", icon: DiPhotoshop },
    { lang: "Illustrator", icon: DiIllustrator },
  ];

  const bgColors = [
    "text-[#e34c26]", // HTML
    "text-[#264de4]", // CSS
    "text-[#f0db4f]", // JS
    "text-[#0d6efd]", // Bootstrap
    "text-[#06B6D4]", // Tailwind
    "text-[#61DBFB]", // React
    "text-[#161616]", // Github
    "text-[#00749C]", // WordPress
    "text-[#00a6ff]", // Photoshop
    "text-[#ff0000]", // Illustrator
  ];

  return (
    <section
      id="skill"
      className="w-full max-w-6xl mx-auto flex flex-col items-center py-20 px-6 md:px-12 lg:px-20"
    >
      {/* Heading */}
      <h1 className="text-center text-4xl font-bold mb-10">Skills</h1>

      {/* Grid for skills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {Skills.map((item, index) => (
          <div
            key={index}
            className="w-28 h-28 flex flex-col items-center justify-center bg-[#2E2E30] hover:bg-[#161616] shadow-lg rounded-lg transition duration-300"
          >
            <item.icon
              size={50}
              className={`${bgColors[index % bgColors.length]}`}
            />
            <p className="mt-2 text-sm">{item.lang}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
