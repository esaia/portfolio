import React from "react";
import { motion } from "framer-motion";
import { FaWindowClose } from "react-icons/fa";
import { data } from "../data";
import "./projects.scss";
import { FaGithub, FaLink } from "react-icons/fa";

const Projects = ({ isDarkMode, setShowProjects }) => {
  return (
    <motion.div
      className={`projectmain ${isDarkMode ? "dark" : "light"}`}
      initial={{ opacity: 0.3, bottom: -1000 }}
      animate={{ opacity: 1, bottom: 0 }}
      exit={{ opacity: 0.4, bottom: -900 }}
      transition={{
        default: {
          duration: 0.4,
          ease: [0, 0.71, 0.2, 1.01],
        },
        scale: {
          type: "spring",
          damping: 9,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    >
      <div className="projectsWrap">
        <FaWindowClose
          className="exitIcon"
          fill="white"
          onClick={() => setShowProjects(false)}
        />

        {data.map((item, i) => {
          return (
            <div className="gridEL" key={i}>
              <div className="card">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <div className="projectIcons">
                  <a href={item.githubURL} target="_blank">
                    <FaGithub fill="white" />
                  </a>
                  <a href={item.websiteURL} target="_blank">
                    <FaLink fill="white" />
                  </a>
                </div>

                <div className="skills">
                  {item.skills.map((skill, i) => {
                    return <p key={i}>{skill}</p>;
                  })}
                </div>

                <img src={item.img} alt="img" />
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
