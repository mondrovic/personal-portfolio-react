import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import { FaFolderOpen } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { SiAboutDotMe } from "react-icons/si";

function Nav(props) {
  const { menus = [], menuSelected, setMenuSelected } = props;

  // update tab name (document.title) to currentCategory.name
  useEffect(() => {
    document.title = capitalizeFirstLetter(menuSelected);
  }, [menuSelected]);

  return (
    <nav className="navbar-cstm">
      <ul className="navbar-nav-cstm">
        <div className="my-name">
          <span className="pt-4 initials">MO</span>
          <span className="pt-4 link-text-cstm">Matthew Ondrovic</span>
        </div>
        <li className="nav-item-cstm">
          <a
            href="#about"
            className="nav-link-cstm"
            onClick={() => setMenuSelected(menus[0].name)}
          >
            <SiAboutDotMe size={30} color="white" />
            <span className="link-text-cstm">About</span>
          </a>
        </li>
        <li className="nav-item-cstm">
          <a
            href="#projects"
            className="nav-link-cstm"
            onClick={() => setMenuSelected(menus[1].name)}
          >
            <FaFolderOpen size={30} color="white" />
            <span className="link-text-cstm">Projects</span>
          </a>
        </li>
        <li className="nav-item-cstm">
          <a
            href="#contact"
            className="nav-link-cstm"
            onClick={() => setMenuSelected(menus[2].name)}
          >
            <IoIosContact size={30} color="white" />
            <span className="link-text-cstm">Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
