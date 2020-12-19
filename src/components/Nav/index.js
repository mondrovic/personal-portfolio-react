import React from "react";
import { FaFolderOpen } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { SiAboutDotMe } from "react-icons/si";

function Nav() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link">
            <SiAboutDotMe size={30} color="white" />
            <span className="link-text">About</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <FaFolderOpen size={30} color="white" />
            <span className="link-text">Projects</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <IoIosContact size={30} color="white" />
            <span className="link-text">Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
