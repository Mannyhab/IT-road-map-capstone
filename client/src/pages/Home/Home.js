import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie'; // Import Lottie
import '../../styles/home-branch.scss';
import './Home.scss';

const Home = () => {
  const [sections, setSections] = useState([]);
  const [sectionAnimations, setSectionAnimations] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedSection, setSelectedSection] = useState(null);
  useEffect(() => {
    // Fetch section data via Axios
    const fetchSections = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/sections');
        const sectionDataFromAPI = response.data.data;
        setSections(sectionDataFromAPI);

        // Load animation data for each section
        const animations = {};
        for (const section of sectionDataFromAPI) {
          import(`../../assets/icons/${section.title.toLowerCase().replace(/ /g, '-')}.json`)
            .then((animationData) => {
              animations[section.title] = animationData.default;
              setSectionAnimations({ ...animations }); // Update the animations object
            })
            .catch((error) => {
              console.error('Error loading animation:', error);
            });
        }
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error fetching section data:', error);
      }
    };

    fetchSections();
  }, []);
  const handleCardClick = (sectionTitle) => {
    setSelectedSection(sectionTitle); // Store the selected section title in state
  };

  return (
    <div className="home">
      <div className="home-icon-title">
        {/* Display a default Lottie animation */}
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: require('../../assets/icons/information-technology.json'), // Default animation
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            },
          }}
          height={150}
          width={150}
        />
        <h1>Information Technology</h1>
      </div>
      <div className="section-cards">
        {loading ? (
          <p>Loading sections...</p>
        ) : (
          sections.map((section) => (
            <Link key={section.id} to={`/${section.title.toLowerCase().replace(/ /g, '-')}`}>
              <div className="section-card" onClick={() => handleCardClick(section.title)}>
                {/* Check if the animation data for the section is available */}
                {sectionAnimations[section.title] ? (
                  <Lottie
                    options={{
                      loop: true,
                      autoplay: true,
                      animationData: sectionAnimations[section.title], // Load animation data for the section
                      rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice',
                      },
                    }}
                    height={150}
                    width={150}
                  />
                ) : null}
                <div className="card-title">{section.title}</div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
