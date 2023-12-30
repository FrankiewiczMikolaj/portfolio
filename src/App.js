import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
function App() {
  return (
      <Router>
        <Navbar />
        <Home />
        <About />
        <Skills />
      </Router>
  );
}

export default App;
