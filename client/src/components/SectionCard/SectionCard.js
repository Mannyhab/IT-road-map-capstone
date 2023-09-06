import React, { useState } from 'react';
import './SectionCard.scss';
import {useNavigate} from 'react-router-dom';
import softwareDevelopmentIcon from '../../assets/images/software-development.svg';
function SectionCard({ section }) {
  const { id, title, desc } = section;
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();
  const handleCardClick = () => {
    setIsSelected(!isSelected);
  };
  const handleExploreClick = () => {
   navigate(`/${title.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div
      className={`section-card ${isSelected ? 'selected' : ''}`}
      onClick={handleCardClick}
    >
      <h3>{title}</h3>
      {isSelected && (
        <div className="card-details">
          <p>{desc}</p>
          <button onClick={handleExploreClick} className="explore-button">
            Explore More
          </button>
        </div>
      )}
    </div>
  );
}

export default SectionCard;
