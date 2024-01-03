import React from "react";
import { FaWindowClose } from "react-icons/fa";
import "./skills.scss";
import PopupLayout from "../popupLayout/PopupLayout";
import { skills } from "../../data";

const Skills = ({ setShowSkills }) => {
  return (
    <div className="skills">
      <PopupLayout>
        <div className="skills__exitIcon">
          <FaWindowClose fill="white" onClick={() => setShowSkills(false)} />
        </div>
        <div className="skills-flex">
          {skills.map((skill) => {
            return <p className="skills-flex-item">{skill}</p>;
          })}
        </div>
      </PopupLayout>
    </div>
  );
};

export default Skills;
