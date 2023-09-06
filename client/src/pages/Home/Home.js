import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Lottie from 'react-lottie';
import './Home.scss';
import rootIconAnimation from '../../assets/icons/information-technology.json';
import SectionCard from '../../components/SectionCard/SectionCard';

function Home() {
  const [sections, setSections] = useState([]);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedColor, setSelectedColor] = useState('#FFFFFF');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/api/sections')
      .then(response => {
        setSections(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching sections:', error);
      });
  }, []);

  const handlePageClick = () => {
    setSelectedSection(null);
    setSelectedColor('#FFFFFF');
  };

  const handleSectionClick = (sectionId, color) => {
    setSelectedSection(sectionId);
    setSelectedColor(color);
    const formattedTitle = sections.find(section => section.id === sectionId).title
      .toLowerCase()
      .replace(/\s+/g, '-');
    navigate(`/${formattedTitle}`);
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

      <div className="root-card">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: rootIconAnimation,
          }}
          className="root-icon"
        />
        <h2 className="root-title">Information Technology</h2>
      </div>

      <div className="section-cards">
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

    </div>
  );
}

export default Home;
