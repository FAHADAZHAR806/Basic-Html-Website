import React from "react";

export default function Skills() {
  return (
    <section
      id="experience"
      className="w-full max-w-6xl mx-auto flex flex-col items-center py-20 px-6 md:px-12 lg:px-20"
    >
      {/* Heading */}
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-10">
        Experience
      </h1>

      {/* Experience 1 */}
      <div className="flex flex-col gap-4 w-full border-b border-gray-600 pb-8 mb-8">
        <h2 className="text-blue-200 text-lg md:text-xl">
          Eziline Software House
        </h2>

        {/* Role & Duration */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <h3 className="font-semibold text-base md:text-lg">
            Front End Internee
          </h3>
          <h3 className="text-sm md:text-base">Oct-2023 to Jan-2024</h3>
        </div>

        {/* Responsibilities */}
        <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
          <li>
            Assist in developing and maintaining user-facing web applications.
          </li>
          <li>
            Write clean, efficient, and reusable HTML, CSS, and JavaScript code.
          </li>
          <li>Work with modern frameworks/libraries such as React.</li>
          <li>
            Collaborate with designers to implement responsive UI/UX designs.
          </li>
          <li>Debug and fix front-end issues across browsers and devices.</li>
          <li>Optimize web pages for performance, speed, and accessibility.</li>
        </ul>
      </div>

      {/* Experience 2 */}
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-blue-200 text-lg md:text-xl">Wise Tech Pakistan</h2>

        {/* Role & Duration */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <h3 className="font-semibold text-base md:text-lg">
            Junior Front End Developer
          </h3>
          <h3 className="text-sm md:text-base">Feb-2025 to Aug-2025</h3>
        </div>

        {/* Responsibilities */}
        <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
          <li>
            Develop and maintain responsive, user-friendly web applications.
          </li>
          <li>
            Translate UI/UX designs into functional and reusable components.
          </li>
          <li>Integrate APIs and manage data rendering on the frontend.</li>
          <li>
            Collaborate with backend developers and designers to deliver
            seamless solutions.
          </li>
          <li>
            Debug, test, and fix cross-browser and cross-device compatibility
            issues.
          </li>
          <li>Optimize application performance, speed, and accessibility.</li>
          <li>
            Participate in code reviews and follow best development practices.
          </li>
          <li>Contribute ideas and improvements to enhance user experience.</li>
        </ul>
      </div>
    </section>
  );
}
