import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
function App() {
  return (
      <Router>
        <Navbar />
          <Home/>
      </Router>
  );
}

export default App;
