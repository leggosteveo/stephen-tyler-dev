import React from "react";

const SkillsItem = ({ skillInfo }) => (
  <div className="skill-div">
    <span className="skill-name">{skillInfo.type}</span>
    <div>
      <img src={skillInfo.img} alt="" />
    </div>
  </div>
);
const skills = {
  frontEnd: [
    { type: "HTML5", img: require("../../img/HTML5_Badge.png") },
    { type: "CSS3", img: require("../../img/CSS3_Badge.png") },
    { type: "Javascript", img: require("../../img/Javascript_Badge.png") },
    { type: "Bootstrap", img: require("../../img/Bootstrap_Badge.png") },
    { type: "Jquery", img: require("../../img/JQuery_Badge.png") },
    { type: "AngularJS", img: require("../../img/AngularJS_Badge.png") },
    { type: "ReactJS", img: require("../../img/ReactJS_Badge.png") },
  ],
  backEnd: [
    { type: "NodeJS", img: require("../../img/NodeJS_Badge.png") },
    { type: "ExpressJS", img: require("../../img/ExpressJS_Badge.png") },
    { type: "MongoDB", img: require("../../img/MongoDB_Badge.png") },
    { type: "Mongoose", img: require("../../img/Mongoose_Badge.png") },
  ],
  tools: [
    { type: "Github", img: require("../../img/Github_Badge.png") },
    { type: "Heroku", img: require("../../img/Heroku_Badge.png") },
  ],
}

const Skills = () => (
  <section id="skills-section" className="container inner px-3 px-lg-5">
    <div>
      <h2 className="section-title">SKILLS</h2>

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

export default Skills;
