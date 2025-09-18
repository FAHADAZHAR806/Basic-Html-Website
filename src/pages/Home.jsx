import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Home() {
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
      <div className="max-w-6xl m-auto flex flex-col md:flex-row p-10 md:p-20 gap-10 justify-center items-center">
        <div className=" flex flex-1 flex-col gap-6 text-[#FFFFFF] ">
          <p className="text-3xl">Hi, I am Fahad Azhar</p>
          <p className="text-2xl">
            I'm <span className="pr-2 ">{displayText}</span>
          </p>
          <p className="pr-4">
            Always eager to learn new technologies and continuously enhance my
            skills. Passionate about staying at the forefront of technology
            trends, I strive to drive success in software development. With a
            growth mindset, I embrace new challenges and am committed to
            delivering innovative solutions.
          </p>
          <button className="rounded-2xl  bg-black w-40 h-10 ">
            {" "}
            <Link to="/Contact">Contact Me</Link>
          </button>
        </div>

        <div className="w-90     border-[#EA5D20] border-2 animate-pulse rounded-full  ">
          <img
            src="/images/Fahadpicafo.png"
            alt="Fahad.png"
            className="w-full h-full relative object-cover   rounded-full drop-shadow-md"
            loading="lazy"
            style={{
              boxShadow:
                "0 0 60px  #EA5D20, 0 0 80px  #EA5D20, 0 0 90px   #EA5D20",
            }}
          />
        </div>
      </div>
    </>
  );
}
