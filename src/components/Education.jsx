import React from "react";
import { Link } from "react-router-dom";

export default function Education() {
  return (
    <div className=" flex  flex-2 flex-col items-center  py-10  border-2">
      <h1 className="text-2xl font-semibold">Education</h1>
      <ul className="py-4 list-disc">
        <li className="border-b-2 py-2">
          <p>Bachelors of Science in Software Engineering</p>
          <Link>COMSATS University Islamabad Abbottabad Campus</Link>
        </li>
        <li className="border-b-2 py-2">
          <p>FSC (Higher Secondary School Certificate)</p>
          <Link>Fauji Foundation Higher secondary School Matore</Link>
        </li>
        <li className="border-b-2 py-2">
          <p>Matriculation</p>
          <Link>Fauji Foundation Model School Kahuta</Link>
        </li>
      </ul>
    </div>
  );
}
