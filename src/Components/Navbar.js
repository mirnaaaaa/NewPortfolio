import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Navbar() {
  const [menu, setMenu] = useState(true);
  console.log(menu);
  return (
    <div className="w-full h-20 fixed flex justify-between items-center px-4 bg-black text-white">
      <div>
        <h1 className="text-4xl font-bold font-myFont ml-2">Mirna</h1>
      </div>
      <ul className="hidden md:flex  text-gray-500 ">
        <Link to="home" spy={true} smooth={true} duration={500}>
          <li>Home</li>
        </Link>
        <Link to="about" spy={true} smooth={true} duration={500}>
          <li>About</li>
        </Link>
        <Link to="skills" offset={-20} spy={true} smooth={true} duration={500}>
          <li>Skills</li>
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <li>Projects</li>
        </Link>
        <Link to="contact" spy={true} smooth={true} duration={500}>
          <li>Contact</li>
        </Link>{" "}
      </ul>
      <div className="text-gray-500 md:hidden">
        {!menu ? (
          <FaTimes size={30} />
        ) : (
          <FaBars onClick={() => setMenu(!menu)} size={30} />
        )}
      </div>
      {!menu && (
        <ul className=" text-gray-500 flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500">
          <Link
            onClick={() => setMenu(true)}
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            <li>Home</li>
          </Link>
          <Link
            onClick={() => setMenu(true)}
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            <li>About</li>
          </Link>
          <Link
            onClick={() => setMenu(true)}
            to="skills"
            offset={-20}
            spy={true}
            smooth={true}
            duration={500}
          >
            <li>Skills</li>
          </Link>
          <Link
            onClick={() => setMenu(true)}
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li>Projects</li>
          </Link>
          <Link
            onClick={() => setMenu(true)}
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            <li>Contact</li>
          </Link>
        </ul>
      )}
    </div>
  );
}
