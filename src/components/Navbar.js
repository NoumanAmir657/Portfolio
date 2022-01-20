import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="md:sticky top-0 z-10" style={{backgroundColor: "#e52165", fontFamily:"Architects Daughter"}}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0 rounded-xl py-1" style={{backgroundColor: "#0d1137"}}>
          <Link to='/'  className="px-4 text-xl">
            Nouman Amir
          </Link>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link to='/projects' className="mr-5 text-white text-lg font-bold" style={{color: "#0d1137"}}>
            Projects
          </Link>
          <Link to="/skills" className="mr-5 text-white text-lg">
            Skills
          </Link>
          <Link to='/education' className="mr-5 text-white text-lg">
            Education
          </Link>
        </nav>
      </div>
    </header>
  );
}

//Dumps
//1e2761