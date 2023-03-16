import React from "react";
import Me from "../img/mirna.jpg";
import { DiJsBadge, DiHtml5, DiPython, DiReact } from "react-icons/di";

export default function Main() {
  return (
    <div className="main">
      <div className="aboutMe">
        <p className="hi">
          <b className="yellow">Hi</b>, I'm
        </p>
        <p className="name">Mirna Misheal</p>
        <p className="developer">Front-end Developer</p>
        <div className="tell">
          <h1 className="about">About Me</h1>
          <p className="developers">
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </div>
      </div>
      <div className="handleIcons">
        <img className="profile" src={Me} alt="ME" />
        <DiReact className="react" />
        <DiJsBadge className="DiJsBadge" />
        <DiHtml5 className="DiHtml5" />
        <DiPython className="DiPython" />
      </div>
    </div>
  );
}
