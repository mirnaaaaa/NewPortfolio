import React from "react";
import { ProjectList } from "../Helpers/ProjectList";

export default function Projects() {
  return (
    <div
      className="md:h-screen w-full text-white bg-gradient-to-b  from-gray-500 to-black"
      name="projects"
    >
      <div className="w-full h-full max-w-screen-lg p-4 mx-auto flex flex-col ">
        <div className="justify-center flex flex-col items-center pb-8">
          <h1 className="justify-center text-4xl  font-bold inline pb-1 border-b-4 border-white">
            <span className="text-yellow-300 mx-2"> My</span> Projects
          </h1>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-14 h-full">
          {ProjectList.map(({ image, id, href, repo, name }) => {
            return (
              <div
                key={id}
                className="shadow-md shadow-gray-400 rounded-lg hover:scale-105 duration-200"
              >
                <h1 className="flex justify-center py-2">{name}</h1>
                <img
                  src={image}
                  alt="project-profile"
                  className="rounded-md  h-[65%] w-full"
                />
                <div className="items-center justify-center flex">
                  <a href={href}>
                    <button className=" px-4 m-4 duration-200 hover:scale-105">
                      Demo
                    </button>
                  </a>
                  <a href={repo}>
                    <button className="duration-200 hover:scale-105 px-4 m-4">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
