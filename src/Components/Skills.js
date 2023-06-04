/* eslint-disable no-undef */
import React from "react";
import { skills } from "../Helpers/SkillsList";

export const Skills = () => {
  return (
    <div
      name="skills"
      className="h-screen w-full text-white bg-gradient-to-b from-black to-gray-500"
    >
      <div className="w-full h-full max-w-screen-lg p-4 mx-auto justify-center flex flex-col">
        <div className="justify-center flex flex-col items-center">
          <h1 className=" text-4xl  font-bold inline border-b-4 border-white">
            Ski<span className="text-yellow-300">ll</span>s
          </h1>
          <p className="mb-6 mt-2 flex text-gray-400 ">These are some technologies i've worked with.</p>
        </div>
        <div className="w-full grid  grid-cols-2 sm:grid-cols-3  gap-3 text-center py8 px12  ">
          {skills.map(({ id, title, img, style }) => (
            <div
              key={id}
              className={`shadow-md bg-gradient-to-r from-black hover:scale-105 py-2 rounded-lg duration-500  justify-center  items-center ${style}`}
            >
              <img className="w-20 mx-auto mt-4" src={img} alt="html" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
