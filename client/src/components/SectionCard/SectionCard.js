import React, { useState } from 'react';
import './SectionCard.scss';

function SectionCard({ section, onClick, setSelectedColor, selected }) {
  const { id, title, color } = section;
  const [isFlipped, setIsFlipped] = useState(false); // Added state for flipping

  const handleCardClick = () => {
    if (!isFlipped) {
      onClick(id, color);
      setSelectedColor(color);
      setIsFlipped(true);
    }
  };

  return (
    <div
      className={`section-card ${selected ? 'selected' : ''} ${isFlipped ? 'flipped' : ''}`}
      style={{ backgroundColor: color }}
      onClick={handleCardClick}
    >
      <div className="card-content">
        <h3>{title}</h3>
        {!isFlipped && <p>{section.desc}</p>}
        {!isFlipped && <button>Explore More</button>}
      </div>
      {isFlipped && (
        <img
          src={require(`../../assets/images/${title.toLowerCase().replace(/\s+/g, '-')}.svg`)}
          alt={title}
        />
      )}
    </div>
  );
}

export default SectionCard;

