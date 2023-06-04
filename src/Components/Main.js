import React from "react";
import Me from "../img/mirna.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-scroll";

export default function Main() {
  return (
    <div
      className="h-screen w-full text-white bg-gradient-to-b from-black to-gray-500"
      name="home"
    >
      <div className="max-w-screen-lg  mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col h-full justify-center">
          <h1 className="text-4xl sm:text-7xl font-bold">
            <b className="text-yellow-300 ">HEY</b>, I am Mirna Misheal
          </h1>
          <p className="text-gray-400">I am a front-end web developer</p>
          <div className="flex  py-2 ">
            <CiLocationOn size={20} />
            <h1 className="px-1">Egypt</h1>
          </div>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div>
              <button className="group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-black to-gray-600 cursor-pointer">
                projects
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </button>
            </div>
          </Link>
        </div>

        <div>
          <img
            className="rounded-2xl mx-auto w-2/3"
            src={Me}
            alt="My Profile"
          />
        </div>
      </div>
    </div>
  );
}
