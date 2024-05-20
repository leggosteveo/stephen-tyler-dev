import React from "react";
const projects = [
  {
    title: "Find happy hour",
    description:
      "Find Happy Hour is a project I developed to assist travelers and locals find food and drink specials in different locales.",
    image: require("../../img/3-devices-black.png"),
    tech: [
      { name: "HTML5", img: require("../../img/HTML5_Badge.png") },
      { name: "CSS3", img: require("../../img/CSS3_Badge.png") },
      { name: "Javascript", img: require("../../img/Javascript_Badge.png") },
      { name: "React", img: require("../../img/ReactJS_Badge.png") },
      { name: "Node", img: require("../../img/NodeJS_Badge.png") },
      { name: "Express", img: require("../../img/ExpressJS_Badge.png") },
      { name: "Mongoose", img: require("../../img/Mongoose_Badge.png") },
    ],
    url: "https://findhappyhour.onrender.com",
    gitHub: "https://github.com/leggosteveo/find-happy-hour",
  },

  {
    title: "Luther Construction",
    description:
      "This was a project I built to help my client keep track of requested projects from his clients.",
    image: require("../../img/luther_project.png"),
    tech: [
      { name: "HTML5", img: require("../../img/HTML5_Badge.png") },
      { name: "CSS3", img: require("../../img/CSS3_Badge.png") },
      { name: "Javascript", img: require("../../img/Javascript_Badge.png") },
      { name: "React", img: require("../../img/ReactJS_Badge.png") },
      { name: "Node", img: require("../../img/NodeJS_Badge.png") },
      { name: "Express", img: require("../../img/ExpressJS_Badge.png") },
      { name: "Mongoose", img: require("../../img/Mongoose_Badge.png") },
    ],
    url: "https://frontend-1cc6.onrender.com",
    gitHub: "https://github.com/leggosteveo/luther-construction",
  },
  {
    title: "Stephen Tyler Dev",
    description:
      "This was a project I built to showcase my growth in web development. I honed in on my basic javascript and React skills, emphasising E6 best practices, and I focused on data flow in ReactJS.",
    image: require("../../img/stephen_dev_project.png"),
    tech: [
      { name: "HTML5", img: require("../../img/HTML5_Badge.png") },
      { name: "CSS3", img: require("../../img/CSS3_Badge.png") },
      { name: "Javascript", img: require("../../img/Javascript_Badge.png") },
      { name: "React", img: require("../../img/ReactJS_Badge.png") },
    ],
    url: "https://leggosteveo.github.io/stephen-tyler-dev/",
    gitHub: "https://github.com/leggosteveo/stephen-tyler-dev",
  },
  {
    title: "Diana Carlstrom Events",
    description:
      "This was a project I built for the client's event planning business",
    tech: [
      { name: "HTML5", img: require("../../img/HTML5_Badge.png") },
      { name: "CSS3", img: require("../../img/CSS3_Badge.png") },
    ],
    url: "https://www.dianacarlstromevents.com/",
    gitHub: "",
  },
];

const Project = ({ project }) => {
  return (
    <div className="project-div col-12">
      <h3 className="project-title">{project.title}</h3>
      <p>{project.description}</p>
      <div>
        {project.image && (
          <img src={project.image} className="img-fluid" alt="" />
        )}
      </div>
      <div>
        {project.tech.length > 1 && <h4 className="tech-used">Tech Used:</h4>}
        {project.tech.map((tech) => (
          <img src={tech.img} alt={tech.name} className="tech-used-badge" />
        ))}
      </div>
      <div className="site-code-div">
        {project.url && (
          <a href={project.url} target="_blank">
            VISIT SITE
          </a>
        )}
        {project.gitHub && (
          <a href={project.gitHub} target="_blank">
            VIEW CODE
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => (
  <section id="projects-section" className="container inner px-3 px-lg-5">
    <h2 className="section-title">PROJECTS</h2>
    <div className="container">
      <div className="project-row row">
        <div className="projects-list">
          <div>
            {projects.map((project, index) => (
              <Project key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
