import Projectss from "../components/Projectss";
import Education from "../components/Education";
import Experience from "../components/Experience";
export default function Projects() {
  return (
    <>
      <div className=" flex  flex-col md:flex-row justify-center  w-full max-w-6xl m-auto py-10">
        <Projectss />
        <Education />
        <Experience />
      </div>
    </>
  );
}
