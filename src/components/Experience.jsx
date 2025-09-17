import React from "react";
import { Link } from "react-router-dom";
export default function Experience() {
  return (
    <div className=" flex  flex-1 flex-col items-center py-10 px-10  border-2">
      <h1 className="text-2xl font-semibold">Experience</h1>
      <ul className="py-4 list-disc ">
        <li className="border-b-2 py-2">
          <Link>Wise Tech</Link>
          <p>Feburary 2025 to August 2025</p>
        </li>
        <li className="border-b-2 py-2">
          <Link>Eziline Software House</Link>
          <p>October 2024 to january 2025</p>
        </li>
      </ul>
    </div>
  );
}
