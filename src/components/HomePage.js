import React from 'react';
import "./HomePage.css"
import home from "../assets/home.png"

const HomePage = () => {
  return (
    <div className="h-full bg-fixed" style={{backgroundImage: `linear-gradient(to right, rgba(13, 17, 55, 1), rgba(117, 19, 93, 0.73)), url(${home})`}}>
        <div className='animationFade text-center pt-20 text-5xl text-white md:text-6xl md:pl-10 md:pt-32' style={{fontFamily:"Architects Daughter"}}>
            Hi, I am Nouman Amir.
            <br/>
            I'm a Software Developer.
        </div>

        <button className='block ml-auto mr-auto mt-20 px-3 text-white rounded-3xl shadow-3xl shadow-pink-300 animate-pulse w-40 h-14 text-xl' style={{backgroundColor: "#e52165", fontFamily:"Architects Daughter"}}>Take a Tour!</button>
    </div>
  )
};

export default HomePage;
