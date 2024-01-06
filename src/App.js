import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import SingleProject from "./components/Projects/SingleProject";
import Education from "./components/Education/Education";
function App() {
    const [openModal, setOpenModal] = useState({ state: false, project: null });
    console.log(openModal)
  return (
      <Router>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects openModal={openModal} setOpenModal={setOpenModal} />
        {openModal.state &&
            <SingleProject openModal={openModal} setOpenModal={setOpenModal} />
        }
        <Education/>
      </Router>
  );
}

export default App;
