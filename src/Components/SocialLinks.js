import React from "react";
import { Socials } from "../Helpers/Social-Links";

export const SocialLinks = () => {
  return (
    <div className="hidden lg:flex flex-col fixed  top-[35%] left-0">
      <ul className="text-white">
        {Socials.map(({ id, child, style, href }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600 rounded-br-md ${style}`}
          >
            <a
              className="flex justify-between items-center w-full px-2 text-xs"
              href={href}
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
