import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ to, imgSrc, alt, title, description }) => {
  return (
    <div className="project-card">
      <Link to={to}>
        <img src={imgSrc} alt={alt} />
        <div className="project-info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;