import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SectionCard.scss';
import Lottie from 'lottie-react';

function SectionCard({ section, selected, onClick }) {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded(!expanded);
    onClick(section.id, section.color); // Pass the section ID and color to the parent component
  };

  return (
    <div
      className={`section-card ${selected ? 'selected' : ''} ${expanded ? 'expanded' : ''}`}
      style={{ backgroundColor: section.color }}
      onClick={handleCardClick}
    >
      <h2>{section.title}</h2>
      {expanded && (
        <>
          <div className="icon-container">
            <Lottie
              animationData={require(`../../assets/Icons/${section.title.toLowerCase().replace(/\s+/g, '-')}.json`)}
              loop
              autoplay
            />
          </div>
          <p>{selected ? section.detailedDesc : section.desc}</p>
          <Link className="explore-btn" to={`/${section.title.toLowerCase().replace(/\s+/g, '-')}`}>
            Explore More
          </Link>
        </>
      )}
    </div>
  );
}

export default SectionCard;
