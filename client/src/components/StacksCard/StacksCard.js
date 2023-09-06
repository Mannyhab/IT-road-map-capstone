import React, { useState } from 'react';
import './StacksCard.scss';
import { useNavigate } from 'react-router-dom';

function StackCard({ stack, section }) {
  const { id, title, desc, detail_desc } = stack;
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    setIsSelected(!isSelected);
  };

  const handleExploreClick = () => {
  
    navigate(`/${section}/${title.toLowerCase().replace(/\s+/g, '-')}/explore`);
  };

  return (
    <div
      className={`stack-card ${isSelected ? 'selected' : ''}`}
      onClick={handleCardClick}
    >
      <h3>{title}</h3>
      {isSelected && (
        <div className="card-details">
          <p>{desc}</p>
          <p>{detail_desc}</p>
          <button onClick={handleExploreClick} className="explore-button">
            Explore More
          </button>
        </div>
      )}
    </div>
  );
}

export default StackCard;
