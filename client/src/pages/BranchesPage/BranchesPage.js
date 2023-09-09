import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';
import Lottie from 'react-lottie';

import './BranchesPage.scss';

const BranchesPage = () => {
  const { section: sectionProp } = useParams();
  const [sectionId, setSectionId] = useState('');
  const [rootTitle, setRootTitle] = useState('');
  const [rootIcon, setRootIcon] = useState(null); // Initialize rootIcon as null
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/sections');
        const sectionDataFromAPI = response.data.data;

        // Find the matching section based on the prop
        const matchingSection = sectionDataFromAPI.find((section) =>
          section.title.toLowerCase().replace(/ /g, '-') === sectionProp.toLowerCase()
        );

        if (matchingSection) {
          const sectionTitleHyphenized = matchingSection.title.toLowerCase().replace(/ /g, '-');
          setSectionId(matchingSection.id);
          setRootTitle(matchingSection.title);

          // Dynamically import the root icon based on section title
          import(`../../assets/icons/${sectionTitleHyphenized}.json`)
            .then((animationData) => {
              setRootIcon(animationData.default);
            })
            .catch((error) => {
              console.error('Error loading root icon:', error);
            });

          // Fetch branches based on sectionId
          const branchResponse = await axios.get(
            `http://localhost:3001/api/branches/${matchingSection.id}`
          );

          const branchDataFromAPI = branchResponse.data.data;
          setBranches(branchDataFromAPI);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching section data:', error);
      }
    };

    fetchSections();
  }, [sectionProp]);

  return (
    <div className="branches-page">
      <div className="root-section">
        {rootIcon !== null && ( // Check if rootIcon is not null before rendering
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: rootIcon, // Use the dynamically imported root icon
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
              },
            }}
            height={150}
            width={150}
          />
        )}
        <h1>{rootTitle}</h1>
      </div>
      <div className="branches">
        {loading ? (
          <p>Loading branches...</p>
        ) : (
            branches.map((branch) => (
                <Link to={`/${sectionProp.toLowerCase().replace(/ /g, '-')}/${branch.title.toLowerCase().replace(/ /g, '-')}`} key={branch.id}>
                  {/* Add Link component to route to sub-branches page */}
                  <div className="branch-card">
                    <Lottie
                      options={{
                        loop: true,
                        autoplay: true,
                        animationData: require(`../../assets/icons/${branch.title.toLowerCase().replace(/ /g, '-')}.json`),
                        rendererSettings: {
                          preserveAspectRatio: 'xMidYMid slice',
                        },
                      }}
                      height={150}
                      width={150}
                    />
                    <div className="card-title">{branch.title}</div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      );
    };
    
    export default BranchesPage;