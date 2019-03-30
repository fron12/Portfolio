import React from "react";
import "./project.css";
import Icon from "./icon.js";

const Project = props => {
  return (
    <div className="projectCard">
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="projectImage"
          src={require(`../images/${props.project}.jpg`)}
          alt={props.project}
        />
      </a>
      <p className="description">{props.description}</p>
      <Icon myIcon={["fab", "github"]} link={props.githublink} />
    </div>
  );
};

export default Project;
