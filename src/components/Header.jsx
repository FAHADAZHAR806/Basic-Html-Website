import React from "react";
import { Link } from "react-router-dom";
import {
  House,
  UserRound,
  Brain,
  LaptopMinimalCheck,
  GraduationCap,
  Mail,
} from "lucide-react";
export default function Header() {
  return (
    <>
      <header className="fixed  flex flex-col  items-center py-10 ml-2 w-20 h-screen shadow-lg ">
        <nav className="">
          <ul className="flex flex-col gap-6 items-center list-none">
            <li>
              <Link to="/" className="no-underline">
                <div className="bg-white text-blue-400 p-3 rounded-full">
                  <House />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/about me" className="no-underline">
                <div className="bg-white text-blue-400 p-3 rounded-full">
                  <UserRound />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/Education" className="no-underline">
                <div className="bg-white text-blue-400 p-3 rounded-full">
                  <GraduationCap />
                </div>
              </Link>
            </li>
            <li>
              <Link to="/projects" className="no-underline">
                <div className="bg-white text-blue-400 p-3 rounded-full">
                  <Brain />
                </div>
              </Link>
            </li>

            <li>
              <Link to="/contact" className="no-underline">
                <div className="bg-white text-blue-400 p-3 rounded-full">
                  <Mail />
                </div>{" "}
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
