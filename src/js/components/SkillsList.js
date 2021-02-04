import React from "react";
import PropTypes from "prop-types";
import SkillsItem from "./SkillsItem";

const SkillsList = ({ skills }) => (
  <div>
    <h2 className="section-title">SKILLS</h2>
    <h4 class="skill-type">Front End</h4>
    <div className="container">
      <div className="row">
        {skills.frontEnd.map((skill, index) => (
          <SkillsItem key={index} skillInfo={skill} />
        ))}
      </div>
      <h4 class="skill-type">Back End</h4>
      <div className="row">
        {skills.backEnd.map((skill, index) => (
          <SkillsItem key={index} skillInfo={skill} />
        ))}
      </div>
      <h4 class="skill-type">Tools</h4>
      <div className="row">
        {skills.tools.map((skill, index) => (
          <SkillsItem key={index} skillInfo={skill} />
        ))}
      </div>
    </div>
  </div>
);

SkillsList.propTypes = {
  skills: PropTypes.object.isRequired,
};

export default SkillsList;
