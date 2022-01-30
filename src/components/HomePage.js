import React from 'react';
import "./HomePage.css"
import home from "../assets/home.png"
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="h-full bg-fixed" style={{backgroundImage: `linear-gradient(to right, rgba(13, 17, 55, 0.9), rgba(117, 19, 93, 0.73)), url(${home})`}}>
        <div className='animationFade text-center pt-20 text-5xl text-white md:text-6xl md:pl-10 md:pt-32' style={{fontFamily:"Architects Daughter"}}>
            Hi, I am Nouman Amir.
            <br/>
            I'm a Software Developer.
        </div>

        <Link to='/Portfolio/projects'><button className='block ml-auto mr-auto mt-20 px-3 text-white rounded-3xl shadow-3xl shadow-pink-300 animate-pulse w-40 h-14 text-xl' style={{backgroundColor: "#e52165", fontFamily:"Architects Daughter"}}>Take a Tour!</button></Link>
    
        <footer className="text-white text-center border-t-2 border-pink-700 fixed inset-x-0 bottom-0 p-4 flex justify-center" style={{backgroundColor: "#0d1137"}}>
        <a href="https://github.com/NoumanAmir657" target='_blank' rel="noreferrer"><i class="devicon-github-original mx-3" style={{fontSize: "30px"}}></i></a>
        <a href="https://www.linkedin.com/in/nouman-amir-0000921ba/" target='_blank' rel="noreferrer"> <i class="devicon-linkedin-plain" style={{fontSize: "30px"}}></i></a>
        </footer>
    
    </div>
  )
};

export default HomePage;
