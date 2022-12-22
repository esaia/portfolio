import React from "react";
import { motion } from "framer-motion";
import { FaWindowClose } from "react-icons/fa";
import { data } from "../data";
import "./projects.scss";
import { FaGithub, FaLink } from "react-icons/fa";

const Projects = ({ showProjectsDiv, isDarkMode }) => {
  return (
    <motion.div
      onClick={showProjectsDiv}
      className={`projectmain ${isDarkMode ? "dark" : "light"}`}
      initial={{ opacity: 0, bottom: -1000 }}
      animate={{ opacity: 1, bottom: 0 }}
      exit={{ opacity: 0.4, bottom: -1000 }}
      transition={{
        default: {
          duration: 0.3,
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
          onClick={showProjectsDiv}
        />
        {data.map((item) => {
          return (
            <div className="card" key={item.id}>
              <h4>{item.title}</h4>
              <div className="projectIcons">
                <FaGithub fill="white" />
                <FaLink fill="white" />
              </div>

              <img src={item.img} alt="img" />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
