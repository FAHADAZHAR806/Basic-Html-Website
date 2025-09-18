import React from "react";
import { Link } from "react-router-dom";

export default function Projectss() {
  return (
    <div className=" flex  flex-1 flex-col items-center  py-10 px-10  border-1 ">
      <h1 className="text-2xl font-semibold">Projects</h1>
      <ul className="py-4 list-disc ">
        <li className="border-b-2 py-2">
          <Link>Scuotin</Link>
          <p>A Recurting Website Landing Page</p>
        </li>
        <li className="border-b-2 py-2">
          <Link>Cogni</Link>
          <p>A Marketing Website Front End </p>
        </li>
        <li className="border-b-2 py-2">
          <Link>Weather App</Link>
          <p>Real Time weather display using location</p>
        </li>
      </ul>
    </div>
  );
}
