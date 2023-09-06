
import React, { useState } from 'react';
import './SubBranchesCard.scss';
import {useNavigate} from 'react-router-dom';
function SubBranchCard({ subBranch,section }) {
  const { id, title, detail_desc } = subBranch;
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    setIsSelected(!isSelected);
  };
 
  const handleExploreClick = () => {

    navigate(`/${section}/${title.toLowerCase().replace(/\s+/g, '-')}/stacks`);
  };

  return (
    <div
      className={`sub-branch-card ${isSelected ? 'selected' : ''}`}
      onClick={handleCardClick}
    >
      <h3>{title}</h3>
      {isSelected && (
        <div className="card-details">
          <p>{detail_desc}</p>
          <button onClick={handleExploreClick} className="explore-button">
            Explore More
          </button>
        </div>
      )}
    </div>
  );
}

export default SubBranchCard;
