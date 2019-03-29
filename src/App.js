import React, { Component } from "react";
import "./App.css";
import Project from "./components/project";
import Icon from './components/icon';
import Me from "./images/Me.jpg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faEnvelope);

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="intro">
          <img className="myPicture show" src={Me} alt="me" />
          <h1 className="show">Hi, I'm Fred, a software developer.</h1>
        </div>
        <div className="projectSection">
          <h1 className="projectTitle">Projects</h1>
          <div className="projects">
            <Project 
              project="Don'tSendThatEmail"
              link="https://www.dontsendthatemail.app/"
              description="Lets users analyze their emails for emotion using IBM Watson"
            />
            <Project 
              project="InstaClone"
              link="https://fron12.github.io/React-Insta-Clone/"
              description="A fake Instagram page with a search filter, like increment, and comment function"
            />
            <Project 
              project="LambdaNotes"
              description="A note taking app in which users can create, edit, and delete notes"
            />
            <Project 
              project="Conway'sGameofLife"
              link="https://fron12.github.io/Conways-Life/"
              description="An app that demonstrates Conway's Game of Life"
            />
          </div>
        </div>
        <div className="contact">
          <h1>Contact</h1>
          <div className="contactIcons">
            <span><strong>sohnf112040@gmail.com</strong></span>
            <Icon className="fa-linkedin" myIcon={["fab", "linkedin"]} link="https://www.linkedin.com/in/fred-sohn/" />
            <Icon className="fa-github" myIcon={["fab", "github"]} link="https://github.com/fron12" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
