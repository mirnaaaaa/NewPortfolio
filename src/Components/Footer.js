import React from "react";
import { AiOutlineGithub, AiFillLinkedin,AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="footer">
            <p className="copy"> &copy; 2023 Mirna.com</p>
        <div className="links">
        <a className="github" href="https://github.com/mirnaaaaa">
        <AiOutlineGithub />
      </a>
      <a className="linkedin" href="https://www.linkedin.com/in/mirna-misheal-b792b9268/">
        <AiFillLinkedin />
      </a>
      <a className="instagram" href="https://www.instagram.com/mirnamisheal12/">
        <AiOutlineInstagram />
      </a>
      <a className="facebook" href="https://www.facebook.com/mirnah97">
        <AiOutlineFacebook />
      </a>
        </div>
    </div>
  );
};
