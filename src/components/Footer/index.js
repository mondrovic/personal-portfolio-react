import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="p-3">©2020 Copyright: Matthew Ondrovic</div>
      <a href="https://www.linkedin.com/in/matthew-ondrovic-a43826131">
        <FaLinkedin className="platforms" size={30} color="black" />
      </a>
      <a href="https://www.github.com/mondrovic">
        <FaGithub className="platforms" size={30} color="black" />
      </a>
    </footer>
  );
}

export default Footer;
