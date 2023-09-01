import React from 'react';

function DescriptionComponent({ title, description, buttonText, onButtonClick }) {
    return (
        <div className="descriptionCard">
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={onButtonClick}>{buttonText}</button>
        </div>
    );
}

export default DescriptionComponent;
