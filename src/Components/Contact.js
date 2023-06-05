import React from "react";
import { BsEmojiWink } from "react-icons/bs";

export const Contact = () => {
  return (
    <div
      name="contact"
      className="h-screen w-full text-white bg-gradient-to-b from-black to-gray-500"
    >
      <div className="flex flex-col justify-center items-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-8 justify-center flex flex-col items-center">
          <h1 className="justify-center text-4xl  font-bold inline border-b-4 border-white">
            Contact <span className="text-yellow-300 mx-2">Me</span>
          </h1>
          <p className="flex text-gray-400 mt-2">
            Submit the form below to get in touch.{" "}
            <BsEmojiWink size={20} className="text-yellow-300 ml-2 " />
          </p>
        </div>
        <div className="flex justify-center items-center w-full">
          <form
            action="https://getform.io/f/f5571f32-c17f-4575-bcea-9648d87799c9"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input name="name" placeholder="Enter your name" type="text" />
            <input name="email" placeholder="Enter your email" type="email" />
            <textarea
              name="message"
              placeholder="Enter your  message...."
              className="pb-40 "
            ></textarea>
            <button className="mx-auto px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-black to-gray-600 cursor-pointer hover:scale-105 duration-500">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
