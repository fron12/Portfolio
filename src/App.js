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
  state = {
    projectList: [
      { 
        projectName: "Don'tSendThatEmail",
        link: "https://www.dontsendthatemail.app/",
        githubLink: "https://github.com/Lambda-School-Labs/dont-send-that-email",
        description: "Lets users analyze their emails for emotion using IBM Watson"
      },
      {
        projectName: "InstaClone",
        link: "https://fron12.github.io/React-Insta-Clone/",
        githubLink: "https://github.com/fron12/React-Insta-Clone",
        description: "A fake Instagram page with a search filter and comment function"
      },
      // {
      //   projectName: "LambdaNotes",
      //   link: "#",
      //   githubLink: "#",
      //   description: "A note taking app in which users can create, edit, and delete notes"
      // },
      {
        projectName: "Conway'sGameofLife",
        githubLink: "https://github.com/fron12/Conways-Life",
        link: "https://fron12.github.io/Conways-Life/",
        description: "An app that demonstrates Conway's Game of Life using canvas"
      },
      {
        projectName: "Pokedex",
        githubLink: "https://github.com/fron12/pokedex",
        link: "https://fred-sohn-pokedex.netlify.com/",
        description: "An app that brings in data from pokeapi to create a pokedex, a library of pokemon."
      },
      {
        projectName: "OnQFinancialReplicate",
        githubLink: "https://github.com/fron12/ModernSite",
        link: "https://fred-sohn-onqfinancialreplicate.netlify.com/",
        description: "A landing page I replicated from On Q Financial (Work in Progress)"  
      }
    ]
  }
  render() {
    return (
      <div className="container">
        <div className="intro">
          <img className="myPicture show" src={Me} alt="me" />
          <h1 className="show">
            Hi, I'm Fred, a software developer. I enjoy learning new facts, basketball, and working out.
          </h1>
        </div>
        <div className="projectSection">
          <h1 className="projectTitle">Projects</h1>
          <div className="projects">
            {
              this.state.projectList.map((project, index) => 
                <Project  
                  key={index}
                  projectName={project.projectName}
                  githubLink={project.githubLink}
                  link={project.link}
                  description={project.description}
                />
              )
            }
          </div>
        </div>
        <div className="contact">
          <h1>Contact</h1>
          <span className="email"><strong>sohnf112040@gmail.com</strong></span>
          <div className="contactIcons">
            <Icon className="fa-linkedin" myIcon={["fab", "linkedin"]} link="https://www.linkedin.com/in/fred-sohn/" />
            <Icon className="fa-github" myIcon={["fab", "github"]} link="https://github.com/fron12" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
