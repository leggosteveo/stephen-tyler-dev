import React from "react";

const SkillsItem = ({ skillInfo }) => (
  <div className="skill-div col-4 col-sm-2">
    <h6 className="skill-header">{skillInfo.type}</h6>
    <div>
      <img src={skillInfo.img} alt="" />
    </div>
  </div>
);

export default SkillsItem;




