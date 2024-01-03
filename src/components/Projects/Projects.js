import React from "react";
import { FaWindowClose } from "react-icons/fa";
import { data } from "../../data";
import "./projects.scss";
import { FaGithub, FaLink } from "react-icons/fa";
import PopupLayout from "../popupLayout/PopupLayout";

const Projects = ({ setShowProjects }) => {
  return (
    <div className="project">
      <PopupLayout>
        <div className="project__exitIcon">
          <FaWindowClose fill="white" onClick={() => setShowProjects(false)} />
        </div>
        <div className="project-grid">
          {data.map((item, i) => {
            return (
              <div className="project-grid-gridEL" key={i}>
                <div className="project-grid-gridEL-card">
                  <h4 className="project-grid-gridEL-card--title">
                    {item.title}
                  </h4>
                  <p className="project-grid-gridEL-card--desc">
                    {item?.description}
                  </p>
                  <div className="projectIcons">
                    <a href={item.githubURL} target="_blank" rel="noreferrer">
                      <FaGithub fill="white" />
                    </a>
                    <a href={item.websiteURL} target="_blank" rel="noreferrer">
                      <FaLink fill="white" />
                    </a>
                  </div>

                  <div className="project-grid-gridEL-card-skills">
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
      </PopupLayout>
    </div>
  );
};

export default Projects;
