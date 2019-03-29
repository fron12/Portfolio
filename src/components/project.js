import React from "react";
import './project.css';

const Project = props => {
  return (
    <a className="projectCard" href={props.link} target="_blank">
      <img 
        className="projectImage" 
        src={require(`../images/${props.project}.jpg`)} 
        alt={props.project} 
      />
      <p className="description">{props.description}</p>
    </a>
  );
};

export default Project;
