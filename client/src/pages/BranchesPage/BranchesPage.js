import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import { useParams } from 'react-router-dom'; 
import './BranchesPage.scss';
import '../../components/BranchCard/BranchCard.scss';
import BranchCard from '../../components/BranchCard/BranchCard';

const sectionNameToIdMap = [
  { name: 'software-development', id: 1 },
  { name: 'networking', id: 4 },
  { name: 'cloud-computing', id: 5 },
  { name: 'data-science', id: 2 },
  { name: 'ai-&-robotics', id: 3 },
  { name: 'cybersecurity', id: 6 },
];

function BranchesPage() {
    const { section } = useParams(); 
    const [branches, setBranches] = useState([]);
    const [welcomeMessage, setWelcomeMessage] = useState('');
  
    useEffect(() => {
 
      const sectionId = sectionNameToIdMap.find((entry) => entry.name === section)?.id;
  
      if (sectionId === undefined) {
      
        setWelcomeMessage(`Section '${section}' not found`);
        setBranches([]);
        return;
      }
 
      const fetchDataFromAPI = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3001/api/branches/${sectionId}`
          ); 
          const branchesDataFromAPI = response.data.data;
          setBranches(branchesDataFromAPI);
  
      
          setWelcomeMessage(`Welcome to the ${section} Branches Page!`);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchDataFromAPI();
    }, [section]);
  
    return (
      <div className="home-container">
        <h1>{welcomeMessage}</h1>
        <div className="section-card-container">
          {branches.map((branch) => (
            <BranchCard
              key={branch.id}
              branch={branch}
              section={section}
            />
          ))}
        </div>
      </div>
    );
  }
  
  export default BranchesPage;