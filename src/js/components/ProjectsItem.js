import React, { useState } from "react";

const ProjectsItem = ({ projectInfo }) => {
  const images = [
    "./img/CSS3_Badge.png",
    "./img/Javascript_Badge.png",
    "./img/ReactJS_Badge.png",
    "./img/NodeJS_Badge.png",
    "./img/MongoDB_Badge.png",
  ];

  return (
    <div className="project-div col-10 col-sm-11">
      <h2 className="project-title">{projectInfo.title}</h2>
      <p>{projectInfo.description}</p>
      <div>
        <img src={projectInfo.image} className="img-fluid" />
      </div>
      <div>
        {projectInfo.tech.length > 1 && (
          <h3 className="tech-used">Tech Used:</h3>
        )}
        {projectInfo.tech.map((tech) => (
          <img src={tech.img} alt={tech.name} className="tech-used-badge" />
        ))}
      </div>
      <div className="site-code-div">
        {projectInfo.url && (
          <a href={projectInfo.url} target="_blank">
            VISIT SITE
          </a>
        )}
        {projectInfo.gitHub && (
          <a href={projectInfo.gitHub} target="_blank">
            VIEW CODE
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectsItem;
