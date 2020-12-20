import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  const [menus] = useState([
    { name: "about", description: "About me page with short bio" },
    { name: "projects", description: "Project page showing links to my work" },
    { name: "contact", description: "Page that links to contact form" },
  ]);

  const [menuSelected, setMenuSelected] = useState(menus[0].name);

  return (
    <div>
      <header>
        <Nav
          menus={menus}
          menuSelected={menuSelected}
          setMenuSelected={setMenuSelected}
        />
      </header>
      <main>
        {menuSelected === "about" && <About />}
        {menuSelected === "contact" && <Contact />}
        {menuSelected === "projects" && <Projects />}
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
