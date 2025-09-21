import React from "react";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="w-full max-w-6xl mx-auto flex flex-col items-center py-20 px-6 md:px-12 lg:px-20"
      >
        {/* Heading */}
        <h1 className="text-center text-4xl font-bold mb-6">About Me</h1>
        <p className="text-center  max-w-3xl leading-relaxed mb-12">
          Highly motivated and detail-oriented Software Engineer with hands-on
          experience in front-end development using HTML5, CSS, Bootstrap,
          TailwindCSS, JavaScript, and React. I’m continuously deepening my
          skills to build modern, user-friendly web interfaces while staying
          updated with the latest tech trends.
        </p>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start w-full">
          {/* Left Side - Image */}
          <div className="w-48 h-48 md:w-60 md:h-60 flex-shrink-0">
            <img
              src="/images/Fahad.jpeg"
              alt="profile"
              className="w-full h-full object-cover rounded-full shadow-lg"
            />
          </div>

          {/* Right Side - Details */}
          <div className="flex flex-col gap-8 flex-1">
            <h2 className="text-2xl font-semibold text-center lg:text-left">
              Front End Developer & React Developer
            </h2>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
              <p>
                <strong>Highest Education:</strong> Bachelor of Science
              </p>
              <p>
                <strong>City:</strong> Rawalpindi, Pakistan
              </p>
              <p>
                <strong>Majors:</strong> Software Engineering
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:fahadkiyani28@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  fahadkiyani28@gmail.com
                </a>
              </p>
            </div>

            {/* Skills / Highlights */}
            <ul className="list-disc list-inside space-y-3 ">
              <li>
                Strong expertise in front-end development with HTML5, CSS,
                Bootstrap, TailwindCSS, JavaScript, and React to craft modern
                and user-friendly interfaces.
              </li>
              <li>
                Skilled in building scalable and maintainable web applications
                with a focus on React and component-driven development.
              </li>
              <li>
                Passionate about creating responsive designs that deliver
                seamless experiences across mobile, tablet, and desktop devices.
              </li>
              <li>
                Continuously learning and staying up-to-date with emerging web
                technologies to improve performance and user experience.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
