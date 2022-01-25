import React from 'react';
import './Projects.css'
import ProjectItem from './ProjectItem';

//explore image imports
import explore_1 from '../assets/explore_1.PNG'
import explore_2 from '../assets/explore_2.PNG'
import explore_3 from '../assets/explore_3.PNG'
import explore_4 from '../assets/explore_4.PNG'
import explore_5 from '../assets/explore_5.PNG'
import explore_6 from '../assets/explore_6.PNG'

//fbClone image imports
import fbClone_1 from '../assets/fbClone_1.PNG'
import fbClone_2 from '../assets/fbClone_2.PNG'
import fbClone_3 from '../assets/fbClone_3.PNG'

//music image imports
import music_1 from '../assets/music_1.PNG'
import music_2 from '../assets/music_2.PNG'
import music_3 from '../assets/music_3.PNG'


const Projects = () => {
  //explore detailes
  const exploreImgs = [explore_1, explore_2, explore_3, explore_4, explore_5, explore_6]
  const exploreDescription = "Explore is a social media app with the features of posting multi media content, commenting, and exploring interests of people."
  const exploreTechUsed = "React, NodeJs, Express, MySQL, Firebase, Materials UI"
  const exploreTeammates = ["Nouman Amir", "Muhammed Waleed Abdullah", "Ali Tariq", "Muhammed Talha"]
  const exploreRepoLink = "https://github.com/Waleed-abdullah/Social-media-web-app"

  //facebook clone detailes
  const fbCloneImgs = [fbClone_1, fbClone_2, fbClone_3]
  const fbCloneDescription = "A Facebook clone which implements the basic features of Facebook."
  const fbCloneTechUsed = "React, NodeJs, Express, MongoDB, Firebase, TailwindCSS"
  const fbCloneTeammates = []
  const fbCloneRepoLink = "https://github.com/NoumanAmir657/Facebook-Clone"

  //music player detailes
  const musicPlayerImgs = [music_1, music_2, music_3]
  const musicPlayerDescription = "A Music Player that uses Spotify's API to fetch songs and also displays the lyrics."
  const musicPlayerTechUsed = "React, NodeJs, Express, react-bootstrap"
  const musicPlayerTeammates = []
  const musicPlayerRepoLink = "https://github.com/NoumanAmir657/Music-Player"

  return (
    <div className="h-full bg-fixed overflow-y-auto text-white" style={{backgroundImage: `linear-gradient(to right, rgba(13, 17, 55, 1), rgba(117, 19, 93, 1))`, fontFamily:"Architects Daughter"}}>
      <div className='animationFade text-center font-semibold text-6xl pt-10' style={{textShadow: "4px 4px #0d1137"}}>
        My Projects
      </div>

      <ProjectItem name='Explore' description={exploreDescription} techUsed={exploreTechUsed} teammates={exploreTeammates} repoLink={exploreRepoLink} imgs={exploreImgs}/>
      <ProjectItem name='Music Player' description={musicPlayerDescription} techUsed={musicPlayerTechUsed} teammates={musicPlayerTeammates} repoLink={musicPlayerRepoLink} imgs={musicPlayerImgs}/>
      <ProjectItem name='Facebook-Clone' description={fbCloneDescription} techUsed={fbCloneTechUsed} teammates={fbCloneTeammates} repoLink={fbCloneRepoLink} imgs={fbCloneImgs}/>      

    </div>
  );
};

export default Projects;