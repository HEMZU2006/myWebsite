import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, image, tags, link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-card">
            <div className="project-image-container">
                {image ? (
                    <img src={image} alt={title} className="project-image" />
                ) : (
                    <div className="project-placeholder-image">
                        <span>{title[0]}</span>
                    </div>
                )}
                <div className="project-overlay">
                    <span className="view-project">View Project</span>
                </div>
            </div>
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                <div className="project-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="project-tag">{tag}</span>
                    ))}
                </div>
            </div>
        </a>
    );
};

export default ProjectCard;
