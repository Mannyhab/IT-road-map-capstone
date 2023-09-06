import React, { useEffect, useState } from 'react';
import SectionCard from '../../components/SectionCard/SectionCard';
import axios from 'axios'; // Import Axios
import './Home.scss'; // Import the Home component styles

import softwareDevelopmentIcon from '../../assets/images/software-development.svg';
import networkingIcon from '../../assets/images/networking.svg';
import cloudComputingIcon from '../../assets/images/cloud-computing.svg';
import cybersecurityIcon from '../../assets/images/cyber-security.svg';
import dataScienceIcon from '../../assets/images/data-science.svg';
import aiRoboticsIcon from '../../assets/images/airobotics.svg';

function Home() {
  const [sections, setSections] = useState([]);
  
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/sections'); // Replace wi
        const sectionDataFromAPI = response.data.data;
        setSections(sectionDataFromAPI);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFromAPI();
  }, []);

  return (
    <div className='home-container'> 
 <h1>Welcome to Infromation Technology Road Maps</h1>
      <p>
        Our platform offers a formal yet playful approach to classifying the vast world of Information Technology.
        Explore various IT domains and discover the one that piques your curiosity.
        Click on a category to learn more and embark on an exciting journey through the world of IT.
        Happy exploring!
      </p>
      <div className='section-card-container'>
        {sections.map((section) => (
          <SectionCard
            key={section.id}
            section={section}
            icon={getIconByTitle(section.title)} 
          />
        ))}
      </div>
    </div>
  );
}


function getIconByTitle(title) {
  switch (title.toLowerCase().replace(/\s+/g, '-')) {
    case 'software-development':
      return softwareDevelopmentIcon;
    case 'networking':
      return networkingIcon;
    case 'cloud-computing':
      return cloudComputingIcon;
    case 'cybersecurity':
      return cybersecurityIcon;
    case 'data-science':
      return dataScienceIcon;
    case 'ai-&-robotics':
      return aiRoboticsIcon;
    default:
      return ''; 
  }
}

export default Home;
