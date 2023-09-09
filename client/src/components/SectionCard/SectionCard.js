import React from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/icons/information-technology.json';

const SectionCard = ({ title }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Route to the section page
    navigate(`/${title.toLowerCase().replace(/ /g, '-')}`);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default, // Your animation JSON data
  };

  return (
    <div className="section-card" onClick={handleCardClick}>
      <div className="section-root">
        <Lottie options={defaultOptions} height={50} width={50} />
        <div className="section-card-title">{title}</div>
      </div>
      <div className="section-card-title">{title}</div>
    </div>
  );
};

export default SectionCard;
