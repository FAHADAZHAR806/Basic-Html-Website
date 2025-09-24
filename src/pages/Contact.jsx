import React from "react";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="w-full max-w-6xl mx-auto flex flex-col items-center py-20 px-6 md:px-12 lg:px-20"
      >
        <h1 className="text-4xl font-bold mb-8">Contact</h1>

        <div className="flex flex-col gap-4 text-lg items-start w-full">
          {/* Email */}
          <a
            href="mailto:fahadkiyani28@gmail.com"
            className="flex items-center gap-2  hover:text-blue-600 no-underline"
          >
            <MdEmail className="text-2xl" />
            fahadkiyani28@gmail.com
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/92341542411"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2  hover:text-green-600 no-underline"
          >
            <FaWhatsapp className="text-2xl" />
            +92 341 542411
          </a>
        </div>
      </section>
    </>
  );
}
