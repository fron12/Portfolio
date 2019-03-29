import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./icon.css";

const Icon = props => {
  return (
    <a
      className="icon"
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={props.myIcon} />
    </a>
  );
};

export default Icon;
