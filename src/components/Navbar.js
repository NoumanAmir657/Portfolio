import React, {useState} from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [color, setColor] = useState(['#FFFFFF', '#FFFFFF', '#FFFFFF'])

  return (
    <header className="md:sticky top-0 z-10" style={{backgroundColor: "#e52165", fontFamily:"Architects Daughter"}}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0 rounded-xl py-1" style={{backgroundColor: "#0d1137"}} onClick={() => setColor(['#FFFFFF', '#FFFFFF', '#FFFFFF'])}>
          <Link to='/'  className="px-4 text-xl">
            Nouman Amir
          </Link>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link onClick={() => setColor(['#0d1137', '#FFFFFF', '#FFFFFF'])} to='/projects' className="mr-5 text-white text-lg font-semibold" style={{color: `${color[0]}`}}>
            Projects
          </Link>
          <Link onClick={() => setColor(['#FFFFFF', '#0d1137', '#FFFFFF'])} to="/skills" className="mr-5 text-white text-lg font-semibold" style={{color: `${color[1]}`}}>
            Skills
          </Link>
          <Link onClick={() => setColor(['#FFFFFF', '#FFFFFF', '#0d1137'])} to='/education' className="mr-5 text-white text-lg font-semibold" style={{color: `${color[2]}`}}>
            Education
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar

//Dumps
//1e2761