// // src/pages/SoftwareDevelopmentPage/SoftwareDevelopmentPage.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// import WebDevelopment from '../../components/SoftwareDevelopment/WebDevelopment/WebDevelopment';
// import './SoftwareDevelopmentPage.scss';

// function SoftwareDevelopmentPage() {
//     const [selectedSubBranch, setSelectedSubBranch] = useState(null);

//     const subBranches = ['Web Development', 'Game Development', 'Mobile Development', 'Database Management', 'Cloud Computing'];

//     return (
//         <div className="container">
//             <div className="box root">Software Development</div>

//             <div className="subBranchContainer">
//                 {subBranches.map(subBranch => (
//                     <div key={subBranch}
//                         className={`box subBranch ${selectedSubBranch === subBranch ? 'selected' : ''}`}
//                         onClick={() => setSelectedSubBranch(subBranch)}
//                     >
//                         {subBranch}
//                         {selectedSubBranch === subBranch && <WebDevelopment />}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }


// export default SoftwareDevelopmentPage;
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import BoxList from '../../components/BoxList/BoxList';
// import Description from '../../components/Description/Description';
// import './SoftwareDevelopmentPage.scss';

// function SoftwareDevelopmentPage() {
//   const navigate = useNavigate();
//   const subBranches = ['Web Development', 'Game Development', 'Mobile Development', 'Desktop Development', 'Embedded Systems'];

//   const handleBoxClick = (branch) => {
//     navigate(`/software-development/${branch.toLowerCase().replace(' ', '-')}`);
//   }

//   return (
//     <div className="container">
//       <Description
//         title="Software Development"
//         description="Software development is the process of..."
//         onExploreMore={() => {}}
//       />
//       <BoxList items={subBranches} onBoxClick={handleBoxClick} />
//     </div>
//   );
// }

// export default SoftwareDevelopmentPage;
// import React from 'react';
// import './SoftwareDevelopmentPage.scss';

// const softwareDevelopmentSubbranches = [
//   { id: 'web', title: 'Web Development', desc: 'Craft web applications', color: '#5DADE2' },
//   { id: 'mobile', title: 'Mobile Development', desc: 'Build mobile apps', color: '#F4D03F' },
//   { id: 'game', title: 'Game Development', desc: 'Design and develop games', color: '#58D68D' },
//   { id: 'desktop', title: 'Desktop Development', desc: 'Create desktop software', color: '#F1948A' },
//   { id: 'embedded', title: 'Embedded Systems', desc: 'Work with hardware interfaces', color: '#D7BDE2' },
// ];

// function SoftwareDevelopmentPage() {
//   return (
//     <div className="software-container">
//       <h1>Software Development</h1>
//       <div className="boxes">
//         {softwareDevelopmentSubbranches.map(subbranch => (
//           <div key={subbranch.id} className="box" style={{ backgroundColor: subbranch.color }}>
//             <h2>{subbranch.title}</h2>
//             <p>{subbranch.desc}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SoftwareDevelopmentPage;
import React from 'react';
import sections from '../Home/data';
import './SoftwareDevelopmentPage.scss';
import { Link } from 'react-router-dom';

const softwareDevBranch = sections[0].subBranches.find(branch => branch.id === 'software-development');

function SoftwareDevelopmentPage() {
  return (
    <div className="software-dev-page" style={{backgroundColor: softwareDevBranch.color}}>
      <h1>{softwareDevBranch.title}</h1>
      <p>{softwareDevBranch.detailedDesc}</p>
      <div className="branches-list">
        {softwareDevBranch.subBranches.map(subBranch => (
          <div key={subBranch.id} className="branch" style={{backgroundColor: subBranch.color}}>
            <h2>{subBranch.title}</h2>
            <p>{subBranch.desc}</p>
            <Link to={`/${subBranch.id}`} className="explore-branch-btn">Explore {subBranch.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SoftwareDevelopmentPage;
