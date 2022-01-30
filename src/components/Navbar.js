import React, {useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [color, setColor] = useState(['#FFFFFF', '#FFFFFF', '#FFFFFF'])
  let location = useLocation()
  
  useEffect(() => {
    if (location.pathname === '/Portfolio/projects'){setColor(['#e52165', '#FFFFFF', '#FFFFFF'])}
    else if(location.pathname === '/Portfolio/skills'){setColor(['#FFFFFF', '#e52165', '#FFFFFF'])}
  }, [location])

  return (
    <header className="sticky top-0 z-10 shadow-2xl border-b-2 border-pink-700" style={{backgroundImage: `linear-gradient(to right, rgba(13, 17, 55, 1), rgba(13, 17, 55, 1))`, fontFamily:"Architects Daughter"}}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0 rounded-xl py-1" style={{backgroundColor: "#e52165"}} onClick={() => setColor(['#FFFFFF', '#FFFFFF', '#FFFFFF'])}>
          <Link to='/Portfolio/'  className="px-4 text-xl">
            Nouman Amir
          </Link>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link onClick={() => setColor(['#e52165', '#FFFFFF', '#FFFFFF'])} to='/Portfolio/projects' className="mr-5 text-white text-lg" style={{color: `${color[0]}`}}>
            Projects
          </Link>
          <Link onClick={() => setColor(['#FFFFFF', '#e52165', '#FFFFFF'])} to="/Portfolio/skills" className="mr-5 text-white text-lg" style={{color: `${color[1]}`}}>
            Skills
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar

//Dumps
//1e2761
//#e52165 pink
//#0d1137 blue