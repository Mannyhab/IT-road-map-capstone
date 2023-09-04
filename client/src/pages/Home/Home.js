import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import SectionCard from '../SectionCard/SectionCard';
import axios from 'axios';
import Lottie from 'lottie-react';
import NewsFeed from '../NewsFeed/NewsFeed';

function Home() {
  const [sections, setSections] = useState([]);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedColor, setSelectedColor] = useState('#FFFFFF'); // Default background color

  useEffect(() => {
    axios.get('http://localhost:3001/api/sections')
      .then(response => {
        setSections(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching sections:', error);
      });
  }, []);

  const handleSectionClick = (sectionId, color) => {
    setSelectedSection(sectionId);
    setSelectedColor(color);
  };

  const handlePageClick = () => {
    setSelectedSection(null);
    setSelectedColor('#FFFFFF'); 
  };

  return (
    <div
      className={`home-container ${selectedSection ? 'selected-section' : ''}`}
      style={{ backgroundColor: selectedColor }}
      onClick={handlePageClick}
    >
      <header>
        <h1>Welcome to our IT Classification Website</h1>
        <p>
          In the vast field of Information Technology, various specializations and domains exist.
          Our website offers a comprehensive approach to classifying and understanding these domains.
        </p>
        <p>Choose your path and explore!</p>
      </header>

      <div className="section-cards">
        <div className="root-card">
          {/* Icon for Information Technology */}
          <Lottie
            animationData={require('../../assets/Icons/infrmation-technology.json')}
            loop
            autoplay
          />
          <h2>Information Technology</h2>
        </div>
        {sections.map(section => (
          <SectionCard
            key={section.id}
            section={section}
            selected={section.id === selectedSection}
            onClick={handleSectionClick}
            setSelectedColor={setSelectedColor}
          />
        ))}
      </div>
<NewsFeed />
      {/* ... */}
    </div>
  );
}

export default Home;
