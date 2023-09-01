// // src/pages/WebDevelopmentPage/WebDevelopmentPage.js
// import React, { useState } from 'react';

// import WebDevelopment from '../../components/SoftwareDevelopment/WebDevelopment/WebDevelopment';
// import './WebDevelopmentPage.scss';


//     function WebDevelopmentPage() {
//         const [selectedSubSubBranch, setSelectedSubSubBranch] = useState(null);
    
//         const subSubBranches = ['Frontend', 'Backend', 'Fullstack'];
    
//         return (
//             <div className="container">
//                 <div className="box root">Web Development</div>
    
//                 <div className="subSubBranchContainer">
//                     {subSubBranches.map(branch => (
//                         <div key={branch}
//                             className={`box subSubBranch ${selectedSubSubBranch === branch ? 'selected' : ''}`}
//                             onClick={() => setSelectedSubSubBranch(branch)}
//                         >
//                             {branch}
//                             {selectedSubSubBranch === branch && <WebDevelopment />}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         );
//     }
    
//     export default WebDevelopmentPage;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import BoxList from '../../../components/BoxList/BoxList';
import Description from '../../../components/Description/Description';
import './WebDevelopmentPage.scss';

function WebDevelopmentPage() {
  const navigate = useNavigate();
  const subBranches = ['Frontend', 'Backend', 'Fullstack'];

  const handleBoxClick = (branch) => {
    navigate(`/software-development/web-development/${branch.toLowerCase()}`);
  }

  return (
    <div className="container">
      <Description
        title="Web Development"
        description="Web development refers to the building and maintaining of websites."
        onExploreMore={() => {}}
      />
      <BoxList items={subBranches} onBoxClick={handleBoxClick} />
    </div>
  );
}

export default WebDevelopmentPage;
