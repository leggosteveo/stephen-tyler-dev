import React, { useState } from "react";

const ProjectsItem = ({ projectInfo }) => {
  return (
    <div className="project-div col-12">
      <h3 className="project-title">{projectInfo.title}</h3>
      <p>{projectInfo.description}</p>
      <div>
        <img src={projectInfo.image} className="img-fluid" />
      </div>
      <div>
        {projectInfo.tech.length > 1 && (
          <h4 className="tech-used">Tech Used:</h4>
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
