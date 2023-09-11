import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Lottie from 'react-lottie';
import './SubBranchesPage.scss'; // You can create this stylesheet for styling

const SubBranchesPage = () => {
  const { branch: branchParam } = useParams();
  const [branchTitle, setBranchTitle] = useState('');
  const [rootBranch, setRootBranch] = useState(null); // Initialize rootBranch as null
  const [subBranches, setSubBranches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBranchData = async () => {
      try {
        // Fetch branch data via Axios
        const response = await axios.get('http://localhost:3001/api/branches');
        const branchDataFromAPI = response.data.data;

        // Find the matching branch based on the param
        const matchingBranch = branchDataFromAPI.find(
          (branch) =>
            branch.title.toLowerCase().replace(/ /g, '-') === branchParam.toLowerCase()
        );

        if (matchingBranch) {
          setBranchTitle(matchingBranch.title);

          // Set the root branch
          setRootBranch(matchingBranch);

          // Fetch sub-branches based on branchId
          const subBranchResponse = await axios.get(
            `http://localhost:3001/api/sub-branches/${matchingBranch.id}`
          );

          const subBranchDataFromAPI = subBranchResponse.data.data;
          setSubBranches(subBranchDataFromAPI);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching branch data:', error);
      }
    };

    fetchBranchData();
  }, [branchParam]);

  return (
    <div className="sub-branches-page">
   
      <div className="sub-branches">
        {rootBranch && (
          <div className="root-branch">
            {/* Display root branch information here */}
         
        
            {/* Add code to display root branch icon here */}
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: require(`../../assets/icons/${rootBranch.title.toLowerCase().replace(/ /g, '-')}.json`),
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice',
                },
              }}
              height={150}
              width={150}
            />
               <div className="branch-title">
        <h1>{branchTitle}</h1>
      </div>
          </div>
        )}
        <div className='sub-branch-container'>

    
        {loading ? (
          <p>Loading sub-branches...</p>
        ) : (
            
          subBranches.map((subBranch) => (
            <div key={subBranch.id} className="sub-branch-card">
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: require(`../../assets/icons/${subBranch.title.toLowerCase().replace(/ /g, '-')}.json`), // Dynamically load sub-branch icons
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                  },
                }}
                height={150}
                width={150}
              />
              <div className="card-title">{subBranch.title}</div>
            </div>
          ))
        )}
            </div>
      </div>
    </div>
  );
};

export default SubBranchesPage;
