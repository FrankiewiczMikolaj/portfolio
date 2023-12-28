import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
function App() {
  return (
      <Router>
        <Navbar />
        <Home />
        <About />
      </Router>
  );
}

export default App;
