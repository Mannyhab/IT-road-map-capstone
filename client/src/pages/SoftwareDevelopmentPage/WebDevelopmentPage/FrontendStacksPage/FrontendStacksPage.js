// import React from 'react';
// import FrontendStack1 from '../../components/SoftwareDevelopment/WebDevelopment/Frontend/FrontendStacks/FrontendStack-1';
// import FrontendStack2 from '../../components/SoftwareDevelopment/WebDevelopment/Frontend/FrontendStacks/FrontendStack-2';
// import FrontendStack3 from '../../components/SoftwareDevelopment/WebDevelopment/Frontend/FrontendStacks/FrontendStack-3';

// function FrontendStacksPage() {
//     return (
//         <div>
//             <h1>Frontend Development Stacks</h1>

//             <div className="branch-box">
//                 <FrontendStack1 />
//             </div>

//             <div className="branch-box">
//                 <FrontendStack2 />
//             </div>

//             <div className="branch-box">
//                 <FrontendStack3 />
//             </div>
//         </div>
//     );
// }

// export default FrontendStacksPage;
import React from 'react';
import Description from '../../../../components/Description/Description';


function FrontendStacksPage() {
  const stacks = ['HTML', 'CSS', 'JavaScript', 'React', 'Vue', 'Angular'];

  return (
    <div className="container">
      <Description
        title="Frontend Development Stacks"
        description="Frontend development is the practice of converting data to a graphical interface."
        onExploreMore={() => {}}
      />
      <ul className="stacksList">
        {stacks.map(stack => (
          <li key={stack}>{stack}</li>
        ))}
      </ul>
    </div>
  );
}

export default FrontendStacksPage;
