import React from "react";
import PropTypes from "prop-types";
import SkillsItem from "./SkillsItem";

const SkillsList = ({ skills }) => (
  <section id="skills-section" className="inner">
    <div>
      <h2 className="section-title container">SKILLS</h2>

      <div className="skills-inner">
        <div className="skill-type-and-icons">
          <h4 class="skill-type">Front End</h4>
          <div className="skill-icons">
            {skills.frontEnd.map((skill, index) => (
              <SkillsItem key={index} skillInfo={skill} />
            ))}
          </div>
        </div>

        <div className="skill-type-and-icons">
          <h4 class="skill-type">Back End</h4>
          <div className="skill-icons">
            {skills.backEnd.map((skill, index) => (
              <SkillsItem key={index} skillInfo={skill} />
            ))}
          </div>
        </div>
        <div className="skill-type-and-icons">
          <h4 class="skill-type">Tools</h4>
          <div className="skill-icons">
            {skills.tools.map((skill, index) => (
              <SkillsItem key={index} skillInfo={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

SkillsList.propTypes = {
  skills: PropTypes.object.isRequired,
};

export default SkillsList;
