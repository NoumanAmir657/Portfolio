import React from 'react';
import "./Skills.css"
import ParticleContainer from './ParticleBackground';

const Skills = () => {
  return (
    <div className="h-full overflow-y-auto" style={{backgroundImage: `linear-gradient(to right, rgba(13, 17, 55, 1), rgba(117, 19, 93, 1))`, fontFamily:"Architects Daughter"}}>
      <ParticleContainer/>
      
      <div className='animationFade text-center text-white font-semibold text-6xl pt-10 lg:pt-10 ' style={{textShadow: "4px 4px #0d1137"}}>
        My Skills
      </div>

      <div className='glass mt-10 w-full ml-auto mr-auto lg:w-1/2'>
      <div className="flex-center flex-wrap">
        <i class="devicon-react-original colored icon-3d" style={{fontSize: "70px"}}></i>
        <i class="devicon-mongodb-plain-wordmark colored icon-3d" style={{fontSize: "70px"}}></i>
        <i class="devicon-nodejs-plain-wordmark colored icon-3d" style={{fontSize: "85px"}}></i>
        <i class="devicon-express-original-wordmark icon-3d" style={{fontSize: "85px"}}></i>
      </div>

      <div className="flex-center mt-1 flex-wrap">
        <i className="devicon-html5-plain-wordmark colored icon-3d" style={{fontSize: "70px"}}></i>
        <i className='devicon-tailwindcss-original-wordmark colored icon-3d' style={{fontSize: "120px"}}></i>
        <i className="devicon-git-plain colored icon-3d" style={{fontSize: "70px"}}></i>
        <i className="devicon-cplusplus-plain colored icon-3d" style={{fontSize: "70px"}}></i>
      </div>

      <div className="flex-center mt-1 flex-wrap">
        <i className="devicon-javascript-plain colored icon-3d" style={{fontSize: "70px"}}></i>
        <i className='devicon-java-plain-wordmark colored icon-3d' style={{fontSize: "120px"}}></i>
        <i className="devicon-c-plain-wordmark colored icon-3d" style={{fontSize: "70px"}}></i>
        <i className="devicon-jupyter-plain-wordmark colored icon-3d" style={{fontSize: "70px"}}></i>
      </div>

      <div className="flex-center mt-1 flex-wrap">
        <i class="devicon-mysql-plain-wordmark icon-3d" style={{fontSize: "85px"}}></i>
        <i className="devicon-python-plain colored icon-3d" style={{fontSize: "70px"}}></i>
      </div>
      </div>

    </div>
    

  )
};

export default Skills;
//backgroundImage: `linear-gradient(to right, rgba(13, 17, 55, 1), rgba(117, 19, 93, 0.73))`