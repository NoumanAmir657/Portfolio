import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Education from "./components/Education"
import Projects from "./components/Projects";
import Skills from "./components/Skills"
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <div className='h-screen'>
      <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      
    </div>
    </Router>
  )
}
export default App;

//Dumps
//h-full w-full bg-gradient-to-r from-cyan-500 to-blue-500
//rgba(39, 187, 245, 0.4)
//backgroundColor: "#0d1137"