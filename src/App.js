import "./App.css";
import { React } from "react";
import Navbar from "./Components/Navbar";
import {SocialLinks} from "./Components/SocialLinks"
import { About } from "./Components/About";
import Main from "./Components/Main";
import Projects from "./Components/Projects";
import { Skills } from "./Components/Skills";
import { Contact } from "./Components/Contact";

function App() {
  return (
    <div>
       { /*<div style={{ backgroundImage: `url(${Cat})` }} className="cat"> */}
          <Navbar />
          <Main />
          <SocialLinks />
          <About />
          <Skills/>
          <Projects />
          <Contact />
    </div>
  );
}

export default App;
