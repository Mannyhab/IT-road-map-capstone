import React from 'react';
import './Description.scss';

function Description({ title, description, onExploreMore }) {
  return (
    <div className="descriptionContainer">
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={onExploreMore}>Explore More</button>
    </div>
  );
}

export default Description;
