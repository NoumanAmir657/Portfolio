import React from 'react';
import './Projects.css'
import dec from '../assets/742762.png'

const Projects = () => {
  return (
    <div className="h-full bg-fixed overflow-y-auto text-white" style={{backgroundImage: `linear-gradient(to right, rgba(13, 17, 55, 1), rgba(117, 19, 93, 1))`, fontFamily:"Architects Daughter"}}>
      <div className='animationFade text-center font-semibold text-6xl pt-10' style={{textShadow: "4px 4px #0d1137"}}>
        My Projects
      </div>

      <div className='mr-auto ml-auto w-3/4 mt-10'>
        <div className='block justify-between lg:flex'>
          <div>
            <h1 className='text-5xl my-3' style={{textShadow: "4px 4px rgba(117, 19, 93, 0.73)"}}>Explore</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <img className='mx-auto mt-5 lg:mx-10 rounded-xl' src={dec} width='500px' height='500px'></img>
        </div>
      </div>

    </div>
  );
};

export default Projects;
