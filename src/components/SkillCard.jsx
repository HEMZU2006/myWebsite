import React from 'react';
import './SkillCard.css';

const SkillCard = ({ title, icon, description, tags }) => {
  return (
    <div className="skill-card">
      <div className="skill-icon">{icon}</div>
      <h3 className="skill-title">{title}</h3>
      <p className="skill-description">{description}</p>
      <div className="skill-tags">
        {tags.map((tag, index) => (
          <span key={index} className="skill-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
