import React from "react";

export default function Education() {
  return (
    <section
      id="education"
      className="w-full max-w-6xl mx-auto flex flex-col items-center py-16 px-4 sm:px-8 md:px-12 lg:px-20"
    >
      {/* Heading */}
      <h1 className="text-center text-3xl sm:text-4xl font-bold mb-12">
        Education
      </h1>

      {/* Content Wrapper */}
      <div className="flex flex-col gap-16 w-full">
        {/* University */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 w-full">
          {/* Left - Logo */}
          <div className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
            <img
              src="/images/Comsats.png"
              alt="Comsats University"
              className="w-full h-full object-contain rounded-lg shadow-md"
            />
          </div>

          {/* Right - Details */}
          <div className="flex flex-col gap-3 text-center lg:text-left flex-1">
            <h2 className="text-xl sm:text-2xl font-semibold">
              Comsats University Islamabad, Abbottabad Campus
            </h2>
            <h3 className="text-base sm:text-lg">Bachelor of Science</h3>
            <h4 className="text-red-500 font-medium text-sm sm:text-base">
              (Software Engineering)
            </h4>
            <h5 className="text-sm sm:text-base">Sep 2018 – Mar 2022</h5>

            {/* Courses */}
            <div className="mt-3 sm:mt-4">
              <h5 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                Relevant Courses
              </h5>
              <p className=" text-sm sm:text-base leading-relaxed">
                Database Management, Web Technologies, Artificial Intelligence,
                Mobile Application Development, Data Structures, Object-Oriented
                Programming, Statistics
              </p>
            </div>
          </div>
        </div>

        {/* School */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 w-full">
          {/* Left - Logo */}
          <div className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
            <img
              src="/images/Kahuta.png"
              alt="Fauji Foundation"
              className="w-35 h-full object-contain rounded-lg shadow-md"
            />
          </div>

          {/* Right - Details */}
          <div className="flex flex-col gap-3 text-center lg:text-left flex-1">
            <h2 className="text-xl sm:text-2xl font-semibold">
              Fauji Foundation Higher Secondary School System
            </h2>
            <h3 className="text-base sm:text-lg">
              Higher Secondary School Certificate
            </h3>
            <h4 className="text-red-500 font-medium text-sm sm:text-base">
              (Pre-Engineering)
            </h4>
            <h5 className="text-sm sm:text-base">Mar 2016 – Aug 2018</h5>
          </div>
        </div>
      </div>
    </section>
  );
}
