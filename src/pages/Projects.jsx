export default function Projects() {
  return (
    <>
      <section
        id="projects"
        className="w-full max-w-6xl mx-auto flex flex-col items-center py-20 px-6 md:px-12 lg:px-20"
      >
        <h1 className="text-center text-4xl font-bold mb-10">Projects</h1>

        <div className="flex flex-col gap-4 w-full border-b border-gray-600 pb-8 mb-8">
          {/* External GitHub Link */}
          <a
            href="https://github.com/FAHADAZHAR806/WeatherApp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-200 text-lg md:text-xl hover:underline"
          >
            Weather App
          </a>

          {/* Description */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <h3 className="font-semibold text-base md:text-lg">
              A simple and responsive Weather Application built with React and
              Context API. It allows users to search weather by city and view
              real-time weather details with a clean interface.
            </h3>
          </div>

          {/* Features */}
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
            <li>Search and display weather by city</li>
            <li>Shows temperature, humidity, and wind speed</li>
            <li>Work with modern frameworks/libraries such as React</li>
            <li>7-day forecast support</li>
            <li>Built with React and Context API</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 w-full border-b border-gray-600 pb-8 mb-8">
          {/* External GitHub Link */}
          <a
            href="https://campaign-dashboard-two.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-200 text-lg md:text-xl hover:underline"
          >
            Scoutin
          </a>

          {/* Description */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <h3 className="font-semibold text-base md:text-lg">
              A modern and professional recruiting website landing page designed
              to connect job seekers with employers.
            </h3>
          </div>

          {/* Features */}
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
            <li>Attractive and responsive landing page design</li>
            <li>Built with React and Tailwind CSS for scalability and speed</li>
            <li>Dedicated sections for employers and job seekers</li>
            <li>Quick and simple job application form</li>
            <li>Job listings with detailed descriptions</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 w-full  pb-8 mb-8">
          {/* External GitHub Link */}
          <a
            href="https://github.com/FAHADAZHAR806/CAFEDINE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-200 text-lg md:text-xl hover:underline"
          >
            Cafedine
          </a>

          {/* Description */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <h3 className="font-semibold text-base md:text-lg">
              Cfedine is a lightweight, hands-on web template created to help
              beginners and intermediate developers practice real-world
              front-end skills. Built with plain HTML, CSS, and JavaScript,
            </h3>
          </div>

          {/* Features */}
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
            <li>Fully responsive layout with mobile-first design</li>
            <li>
              Master CSS layout techniques (Flexbox, Grid, responsive
              breakpoints)
            </li>
            <li>Improve debugging, code organization, and commenting habits</li>
            <li>
              Prepare to migrate simple features into React or other frameworks
              later
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
