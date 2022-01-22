import React from 'react';
import "./Skills.css"
import ParticleContainer from './ParticleBackground';

const Skills = () => {
  return (
    <div className="h-full bg-fixed" style={{backgroundImage: `linear-gradient(to right, rgba(13, 17, 55, 1), rgba(117, 19, 93, 1))`, fontFamily:"Architects Daughter"}}>
      <ParticleContainer/>
      <div style={{position: "absolute", top: 0, right: 0, left: 0, bottom: 0}}>
      <div className='animationFade text-center text-white font-semibold text-6xl pt-32' style={{textShadow: "4px 4px #0d1137"}}>
        My Skills
      </div>

      <div className='glass mt-20 w-1/2 ml-auto mr-auto'>
      <div className="flex-center">
        <i class="devicon-react-original colored icon-3d" style={{fontSize: "70px"}}></i>
        <i class="devicon-mongodb-plain-wordmark colored icon-3d" style={{fontSize: "70px"}}></i>
        <i class="devicon-nodejs-plain-wordmark colored icon-3d" style={{fontSize: "85px"}}></i>
        <i class="devicon-express-original-wordmark icon-3d" style={{fontSize: "85px"}}></i>
        <i class="devicon-mysql-plain-wordmark icon-3d" style={{fontSize: "85px"}}></i>
      </div>

      <div className="flex-center mt-5">
        <i className="devicon-vscode-plain colored icon-3d" style={{fontSize: "70px"}}></i>
        <i className="devicon-git-plain colored icon-3d" style={{fontSize: "70px"}}></i>
        <i className="devicon-cplusplus-plain colored icon-3d" style={{fontSize: "70px"}}></i>
        <i className="devicon-python-plain colored icon-3d" style={{fontSize: "70px"}}></i>
      </div>
      </div>

    </div>
    </div>

  )
};

export default Skills;
//backgroundImage: `linear-gradient(to right, rgba(13, 17, 55, 1), rgba(117, 19, 93, 0.73))`