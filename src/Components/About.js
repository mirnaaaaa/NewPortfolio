import React from "react";

export const About = () => {
  return (
    <div
      name="about"
      className="h-screen w-full text-white bg-gradient-to-b  from-gray-500 to-black"
    >
      <div className="h-full max-w-screen-lg p-4 mx-auto justify-center flex flex-col">
        <div className="justify-center flex flex-col items-center pb-3">
          <h1 className="justify-center text-4xl font-bold inline border-b-4 border-white">
            About <span className="text-yellow-300 mx-1"> Me</span>
          </h1>
        </div>
        <div>
          <p className="px-[20%] ">
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and iam always looking for new things
            to learn.
          </p>
        </div>
      </div>
    </div>
  );
};
