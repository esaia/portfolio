import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import './projects.scss';
import { data } from '../../data';
import { MdOutlineArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="projects">
      <Link to="/" className="projects-back">
        <MdOutlineArrowBack />
      </Link>

      {data.map((item) => {
        return (
          <ProjectsCard
            key={item.title}
            title={item?.title}
            githubURL={item?.githubURL}
            websiteURL={item?.websiteURL}
            skills={item?.skills}
            description={item?.description}
          />
        );
      })}
    </div>
  );
};

export default Projects;

const ProjectsCard = ({ title, githubURL, websiteURL, skills, description }) => {
  const generatePath = (url) => {
    const myurl = new URL(url);

    return myurl.pathname.substring(1);
  };

  return (
    <div className="projects-card">
      <div>
        <h2 className="projects-card-title">{title}</h2>

        <div className="projects-card-links">
          <div className="projects-card-links-box">
            <div className="projects-card-links-box--icon">
              <FaGithub />
            </div>
            <a className="projects-card-links-box--text" href={githubURL} target="_blank" rel="noreferrer">
              {/* esaia/prjecttitle */}
              {generatePath(githubURL) || 'Github Link'}
            </a>
          </div>
          -
          <div className="projects-card-links-box">
            <div className="projects-card-links-box--icon">
              <FaLink />
            </div>
            <a className="projects-card-links-box--text" href={websiteURL} target="_blank" rel="noreferrer">
              website
            </a>
          </div>
        </div>
      </div>

      <div className="projects-card-desc">{description}</div>
      <div className="projects-card-tags">
        {skills.map((item, i) => {
          return <p key={i}>{item}</p>;
        })}
      </div>
    </div>
  );
};
