import React from 'react';
import './Skills.scss';
import { Link } from 'react-router-dom';
import { MdOutlineArrowBack } from 'react-icons/md';
import { skills } from '../../data';

const Skills = () => {
  //   console.log(Object.entries(skills));
  return (
    <div className="skills">
      <Link to="/" className="skills-back">
        <MdOutlineArrowBack />
      </Link>
      <div className="skills__box">
        {Object.entries(skills).map((item, i) => {
          return <Skill key={i} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Skills;

const Skill = ({ item }) => {
  return (
    <div className="skill">
      <h3 className="skill-title">{item[0]}</h3>

      <div className="skill__box">
        {item[1].map((skill) => {
          return (
            <p key={skill} className="skill__box--name">
              {skill}
            </p>
          );
        })}
      </div>
    </div>
  );
};
