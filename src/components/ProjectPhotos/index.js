import React, { useState } from "react";

const ProjectPhotos = () => {
  const [photos] = useState([
    {
      name: "Thought Bubbles",
      category: "backend",
      description: "A RESTful backend application for a social media website.",
      github: "https://github.com/mondrovic/thought-bubbles",
    },
    {
      name: "Retail Backend",
      category: "backend",
      description: "A RESTful backend application for retail.",
      github: "https://github.com/mondrovic/retail-backend",
    },
    {
      name: "Employee Tracker",
      category: "backend",
      description: "A CLI tool using MySQL to track employee data.",
      github: "https://github.com/mondrovic/employee-tracker",
    },
    {
      name: "Note Taker",
      category: "full stack",
      description: "A note taking web app that saves notes to local SQLite DB.",
      github: "https://github.com/mondrovic/note-taker",
    },
    {
      name: "Brew Hound",
      category: "front end",
      description:
        "A web application using local storage and public API to locate breweries in your area.",
      github: "https://github.com/ryanabrown14/brew-hound",
    },
    {
      name: "Finance Tracker",
      category: "full stack",
      description:
        "A web application allowing you to input debt and income so financial status can be displayed in an easy to read graph.",
      github: "https://github.com/mondrovic/finance-tracker",
    },
  ]);

  return (
    <div className="flex-row photos">
      {photos.map((image, i) => [
        <figure>
          <a href={image.github} target="_blank" rel="noreferrer">
            <img
              src={require(`../../assets/${i}.jpg`).default}
              alt={image.name}
              key={image.name}
            />
          </a>
          <figcaption>
            {`${image.name} \n
              Description: ${image.description}`}
          </figcaption>
        </figure>,
      ])}
    </div>
  );
};

export default ProjectPhotos;
