import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  House,
  UserRound,
  Brain,
  LaptopMinimalCheck,
  GraduationCap,
  Mail,
  CodeXml,
  Menu,
  X,
} from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { id: "hero", icon: <House />, label: "Home" },
    { id: "about", icon: <UserRound />, label: "About" },
    { id: "education", icon: <GraduationCap />, label: "Education" },
    { id: "skill", icon: <Brain />, label: "Skills" },
    { id: "experience", icon: <LaptopMinimalCheck />, label: "Experience" },
    { id: "projects", icon: <CodeXml />, label: "Projects" },
    { id: "contact", icon: <Mail />, label: "Contact" },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <header
        className="hidden md:flex fixed top-0 left-0 flex-col items-center justify-center 
                   w-20 h-screen shadow-lg z-50"
      >
        <nav className="w-full">
          <ul className="flex flex-col gap-6 items-center list-none p-2">
            {navItems.map((item, index) => (
              <li key={index} className="group overflow-hidden">
                <Link
                  to={item.id}
                  smooth={true}
                  spy={true}
                  hashSpy={true}
                  offset={-80}
                  duration={500}
                  activeClass="active-link"
                  className="no-underline"
                >
                  <div
                    className="bg-[#fff5f0] text-blue-400 
                               flex items-center gap-2 rounded-full 
                               p-3 w-12 hover:w-30 hover:ml-10 
                               hover:bg-blue-200 
                               transition-all duration-300"
                  >
                    <span className="flex-shrink-0">{item.icon}</span>
                    <p
                      className="opacity-0 whitespace-nowrap 
                                 group-hover:opacity-100 
                                 transition-opacity duration-300 
                                 text-sm font-medium"
                    >
                      {item.label}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Mobile/Tablet Navbar */}
      <header className="md:hidden fixed top-0 left-0 w-full h-16 shadow-lg flex justify-end px-4 z-50">
        <button onClick={() => setOpen(!open)} className="text-white">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Menu (Dropdown/Slide) */}
      {open && (
        <div
          className="md:hidden fixed py-10 left-0 w-70 h-full bg-black shadow-lg z-40 
                     flex flex-col items-start p-4 gap-4"
        >
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.id}
              smooth={true}
              spy={true}
              hashSpy={true}
              offset={-80}
              duration={500}
              activeClass="active-link"
              className="flex items-center gap-3 text-black hover:text-blue-700 transition bg-white py-3 px-2 w-full rounded-full cursor-pointer"
              onClick={() => setOpen(false)}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      )}

      {/* Active Link Styling */}
      <style jsx>{`
        .active-link section {
          background-color: #bfdbfe; /* Tailwind blue-200 */
          color: #1d4ed8; /* Tailwind blue-700 */
          font-weight: bold;
          /* slightly expanded */
        }
      `}</style>
    </>
  );
}
