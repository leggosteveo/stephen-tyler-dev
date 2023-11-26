import React from "react";
import PropTypes from "prop-types";
import ProjectsItem from "./ProjectsItem";

const ProjectsList = ({ projects }) => (
  <section id="projects-section" className="inner">
    <h2 className="section-title container">PROJECTS</h2>
    <div className="container">
      <div className="project-row row">
        <div className="projects-list">
          <div>
            {projects.map((project, index) => (
              <ProjectsItem key={index} projectInfo={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

ProjectsList.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectsList;
