import React from "react";
import { FaFolderOpen } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { SiAboutDotMe } from "react-icons/si";

function Nav() {
  return (
    <nav className="navbar-cstm">
      <ul className="navbar-nav-cstm">
        <div className="my-name">
          <span className="pt-4 initials">MO</span>
          <span className="pt-4 link-text-cstm">Matthew Ondrovic</span>
        </div>
        <li className="nav-item-cstm">
          <a href="#" className="nav-link-cstm">
            <SiAboutDotMe size={30} color="white" />
            <span className="link-text-cstm">About</span>
          </a>
        </li>
        <li className="nav-item-cstm">
          <a href="#" className="nav-link-cstm">
            <FaFolderOpen size={30} color="white" />
            <span className="link-text-cstm">Projects</span>
          </a>
        </li>
        <li className="nav-item-cstm">
          <a href="#" className="nav-link-cstm">
            <IoIosContact size={30} color="white" />
            <span className="link-text-cstm">Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
