import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './SubBranchesPage.scss';
import SubBranchCard from '../../components/SubBranchesCard/SubBranchesCard';
import '../../components/SubBranchesCard/SubBranchesCard.scss';
const subBranchNameToIdMap = [
    { "id": 1, "name": "web-development" },
    { "id": 2, "name": "mobile-development" },
    { "id": 3, "name": "game-development" },
    { "id": 4, "name": "desktop-development" },
    { "id": 5, "name": "embedded-systems" },
    { "id": 6, "name": "machine-learning" },
    { "id": 7, "name": "big-data" },
    { "id": 8, "name": "data-analytics" },
    { "id": 9, "name": "neural-networks" },
    { "id": 10, "name": "robotics" },
    { "id": 11, "name": "nlp" },
    { "id": 12, "name": "infrastructure" },
    { "id": 13, "name": "protocols" },
    { "id": 14, "name": "wireless" },
    { "id": 15, "name": "iaas" },
    { "id": 16, "name": "paas" },
    { "id": 17, "name": "saas" },
    { "id": 18, "name": "network-security" },
    { "id": 19, "name": "information-security" },
    { "id": 20, "name": "application-security" }
];



function SubBranchesPage({ subBranch, section }) {
    const { branch } = useParams();
    

  const [subBranches, setSubBranches] = useState([]);
  const [welcomeMessage, setWelcomeMessage] = useState('');


  useEffect(() => {
    const branchId = subBranchNameToIdMap.find((entry) => entry.name.toLowerCase() === branch.toLowerCase())?.id;
console.log(branch)

    if (branchId === undefined) {
      setWelcomeMessage(`Sub-branch '${branch}' not found`);
      setSubBranches([]);
      return;
    }

    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/sub-branches/${branchId}`
         
        );

        const subBranchesDataFromAPI = response.data.data;
        setSubBranches(subBranchesDataFromAPI);
        setWelcomeMessage(`Welcome to the ${branch} Sub-Branches Page!`);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFromAPI();
  }, [branch]);

  return (
    <div className="home-container">
      <h1>{welcomeMessage}</h1>
      <div className="section-card-container">
        {subBranches.map((subBranch) => (
          <SubBranchCard
            key={subBranch.id}
            subBranch={subBranch}
            section={branch}
          />
        ))}
      </div>
    </div>
  );
}

export default SubBranchesPage;
