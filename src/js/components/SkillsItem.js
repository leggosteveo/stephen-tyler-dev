import React from "react";

const SkillsItem = ({ skillInfo }) => (
  <div className="skill-div">
    <span className="skill-name">{skillInfo.type}</span>
    <div>
      <img src={skillInfo.img} alt="" />
    </div>
  </div>
);

export default SkillsItem;




