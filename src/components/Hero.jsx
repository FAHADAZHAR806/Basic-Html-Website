import React from "react";
import { useState, useEffect } from "react";
import { Linkedin, Github, Instagram, Twitter } from "lucide-react";

export default function Hero() {
  const paragraphs = [" a Software Engineer", " a Front End Web Developer"];
  const [displayText, setDisplayText] = useState("");
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = paragraphs[currentParagraphIndex];
    let typingSpeed = isDeleting ? 60 : 100;

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentParagraphIndex((prev) => (prev + 1) % paragraphs.length);
        }
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [displayText, isDeleting, currentParagraphIndex, paragraphs]);

  return (
    <>
      <section id="hero">
        <div
          className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row 
                   items-center justify-center gap-10 
                   px-4 sm:px-6 md:px-12 lg:px-20 py-10 sm:py-16 md:p-20"
        >
          {/* Left Content */}
          <div className="flex flex-1 flex-col gap-6 text-white text-center md:text-left">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Fahad Azhar
            </p>
            <p className="text-lg sm:text-xl md:text-2xl">
              I'm <span className="pr-2">{displayText}</span>
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full hover:scale-110 transition"
              >
                <Linkedin className="text-[#0A66C2]" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full hover:scale-110 transition"
              >
                <Github className="text-[#333]" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full hover:scale-110 transition"
              >
                <Twitter className="text-[#1DA1F2]" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-full hover:scale-110 transition"
              >
                <Instagram className="text-[#E4405F]" />
              </a>
            </div>
          </div>

          {/* Right Content - Image */}
          <div
            className="flex-1 max-w-[280px] sm:max-w-[320px] md:max-w-[400px] 
                     border-[#EA5D20] border-2 animate-pulse rounded-full"
          >
            <img
              src="/images/Fahadpicafo.png"
              alt="Fahad.png"
              className="w-full h-full object-cover rounded-full drop-shadow-md"
              loading="lazy"
              style={{
                boxShadow:
                  "0 0 30px #EA5D20, 0 0 50px #EA5D20, 0 0 70px #EA5D20",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
