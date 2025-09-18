import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header className=" sticky top-0 z-50 flex justify-around py-10 w-full max-w-[1500px] m-auto shadow-lg ">
        <h1>Fahad Azhar</h1>
        <nav className="flex items-center">
          <ul className="flex justify-center  gap-[20px] list-none    ">
            <li>
              <Link to="/" className="no-underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="no-underline">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about me" className="no-underline">
                About Me
              </Link>
            </li>
            <li>
              <Link to="/contact" className="no-underline ">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
