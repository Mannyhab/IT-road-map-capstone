import React from 'react';
import './BranchCard.scss';

function BranchCard({ branch, onClick, selected }) {
  const { id, title, color } = branch;

  const handleCardClick = () => {
    onClick(id);
  };

  return (
    <div
      className={`branch-card ${selected ? 'selected' : ''}`}
      style={{ backgroundColor: selected ? 'white' : color }}
      onClick={handleCardClick}
    >
      <h3>{title}</h3>
      {selected ? (
        <img
          src={require(`../../assets/images/${title.toLowerCase().replace(/\s+/g, '-')}.svg`)}
          alt={title}
          className="svg-icon"
        />
      ) : null}
    </div>
  );
}

export default BranchCard;
