import React, { useState } from 'react';
import './BranchCard.scss';
import { useNavigate,useParams, } from 'react-router-dom';

function BranchCard({ branch }) {
    const { section } = useParams();
  const { title, desc } = branch;
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    setIsSelected(!isSelected);
  };

  const handleExploreClick = () => {
 
    navigate(`/${section}/${title.toLowerCase().replace(/\s+/g, '-')}`);
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

export default BranchCard;