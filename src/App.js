import React from "react";
import { Component } from "react";
import About from "./js/components/About";
import Footer from "./js/components/Footer";
import Intro from "./js/components/Intro";
import Navi from "./js/components/Navi";
import ProjectsList from "./js/components/ProjectsList";
import "./App.css";
import "./index.css";
import SkillsList from "./js/components/SkillsList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: {
        frontEnd: [
          { type: "HTML5", img: require("./img/HTML5_Badge.png") },
          { type: "CSS3", img: require("./img/CSS3_Badge.png") },
          { type: "Javascript", img: require("./img/Javascript_Badge.png") },
          { type: "Bootstrap", img: require("./img/Bootstrap_Badge.png") },
          { type: "Jquery", img: require("./img/JQuery_Badge.png") },
          { type: "AngularJS", img: require("./img/AngularJS_Badge.png") },
          { type: "ReactJS", img: require("./img/ReactJS_Badge.png") },
        ],
        backEnd: [
          { type: "NodeJS", img: require("./img/NodeJS_Badge.png") },
          { type: "ExpressJS", img: require("./img/ExpressJS_Badge.png") },
          { type: "MongoDB", img: require("./img/MongoDB_Badge.png") },
          { type: "Mongoose", img: require("./img/Mongoose_Badge.png") },
        ],
        tools: [
          { type: "Github", img: require("./img/Github_Badge.png") },
          { type: "Heroku", img: require("./img/Heroku_Badge.png") },
        ],
      },
      projects: [
        {
          title: "Stephen Tyler Dev",
          description:
            "This was a project I built to showcase my growth in web development. I honed in on my basic javascript and React skills, emphasising E6 best practices, and I focused on data flow in ReactJS.",
          image: require("./img/stephen_dev_project.png"),
          tech: [
            { name: "HTML5", img: require("./img/HTML5_Badge.png") },
            { name: "CSS3", img: require("./img/CSS3_Badge.png") },
            { name: "Javascript", img: require("./img/Javascript_Badge.png") },
            { name: "React", img: require("./img/ReactJS_Badge.png") },
          ],
          url: "https://leggosteveo.github.io/stephen-tyler-dev/",
          gitHub: "https://github.com/leggosteveo/stephen-tyler-dev",
        },
        {
          title: "Luther Construction",
          description:
            "This was a project I built to help my client keep track of requested projects from his clients.",
          image: require("./img/luther_project.png"),
          tech: [
            { name: "HTML5", img: require("./img/HTML5_Badge.png") },
            { name: "CSS3", img: require("./img/CSS3_Badge.png") },
            { name: "Javascript", img: require("./img/Javascript_Badge.png") },
            { name: "React", img: require("./img/ReactJS_Badge.png") },
            { name: "Node", img: require("./img/NodeJS_Badge.png") },
            { name: "Express", img: require("./img/ExpressJS_Badge.png") },
            { name: "Mongoose", img: require("./img/Mongoose_Badge.png") },
          ],
          url: "https://frontend-1cc6.onrender.com",
          gitHub: "https://github.com/leggosteveo/luther-construction",
        },
        {
          title: "Diana Carlstrom Events",
          description:
            "This was a project I built for the client's event planning business",
          tech: [
            { name: "HTML5", img: require("./img/HTML5_Badge.png") },
            { name: "CSS3", img: require("./img/CSS3_Badge.png") },
          ],
          url: "https://www.dianacarlstromevents.com/",
          gitHub: "",
        },
      ],
    };
  }

  render() {
    const projectsArr = this.state.projects;
    const skillsArr = this.state.skills;
    return (
      <div className="App">
        <Navi />
        <Intro />
        <div className="content" id="home">
          <div id="home-main">
            <About />
            <SkillsList skills={skillsArr} />
            <ProjectsList projects={projectsArr} />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
