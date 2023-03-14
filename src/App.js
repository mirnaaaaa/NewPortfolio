import "./App.css";
import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import Cat from "./img/ths.jpeg";
import Main from "./Components/Main";
import Projects from "./Components/Projects";
import ProjectDetails from "./Components/ProjectDetails";

function App() {
  return (
    <div>
      <Router>
        <div style={{ backgroundImage: `url(${Cat})` }} className="cat">
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/ProjectDetails/:id" element={<ProjectDetails />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
