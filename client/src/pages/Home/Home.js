// import React, { useState, useEffect } from 'react';
// import './Home.scss';
// import { motion } from "framer-motion";

// const boxes = [

//   { 
//     id: 'software-development', 
//     title: 'Software Development', 
//     desc: 'Craft powerful software solutions.', 
//     color: '#3498db',
//     detailedDesc: 'Dive into various domains: Web, Mobile, Game, Desktop, and Embedded Systems.' 
//   },
//   { 
//     id: 'networking', 
//     title: 'Networking', 
//     desc: 'Connect the world.', 
//     color: '#e74c3c', 
//     detailedDesc: 'Master the architecture, management, and operations of modern networks.' 
//   },
//   { 
//     id: 'data-science', 
//     title: 'Data Science', 
//     desc: 'Unlock insights from data.', 
//     color: '#9b59b6',
//     detailedDesc: 'Harness the power of data with machine learning, statistics, and analytics.' 
//   },
//   { 
//     id: 'cybersecurity', 
//     title: 'Cybersecurity', 
//     desc: 'Defend the digital world.', 
//     color: '#34495e',
//     detailedDesc: 'Protect networks, systems, and data from digital attacks.' 
//   },
//   { 
//     id: 'cloud', 
//     title: 'Cloud Computing', 
//     desc: 'Elevate to the cloud.', 
//     color: '#f39c12',
//     detailedDesc: 'Explore the world of distributed systems, storage, and scalability.' 
//   },
//   { 
//     id: 'ai-and-robotics', 
//     title: 'AI & Robotics', 
//     desc: 'Drive the future.', 
//     color: '#2ecc71',
//     detailedDesc: 'Engage with machine intelligence, algorithms, and physical robots.' 
//   }
// ];


// function Home() {
//   const [selectedBox, setSelectedBox] = useState(null);

//   useEffect(() => {
//     // When the user clicks anywhere on the window
//     window.addEventListener('click', handleWindowClick);

//     return () => {
//       window.removeEventListener('click', handleWindowClick);
//     };
//   }, []);

//   const handleBoxClick = (event, boxId) => {
//     event.stopPropagation();  // This prevents the window click handler from running when a box is clicked

//     if (selectedBox === boxId) {
//       setSelectedBox(null);
//     } else {
//       setSelectedBox(boxId);
//     }
//   };

//   const handleWindowClick = () => {
//     setSelectedBox(null);
//   };

//   return (
//     <div className="home-container" style={{ backgroundColor: selectedBox ? boxes.find(b => b.id === selectedBox).color : 'white' }}>
//       <h1>Choose a Branch</h1>
//       <div className="boxes">
//         {boxes.map(box => (
//           <div
//             key={box.id}
//             className={`box ${selectedBox === box.id ? 'expanded' : ''} ${selectedBox && selectedBox !== box.id ? 'dim' : ''}`}
//             style={{ backgroundColor: box.color }}
//             onClick={(event) => handleBoxClick(event, box.id)}
//           >
//             <h2>{box.title}</h2>
//             {selectedBox === box.id && <p>{box.desc}</p>}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;
import React, { useState, useEffect } from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const boxes = [
  { 
    id: 'software-development', 
    title: 'Software Development', 
    desc: 'Craft powerful software solutions.', 
    color: '#3498db',
    detailedDesc: 'Dive into various domains: Web, Mobile, Game, Desktop, and Embedded Systems.' 
  },
  { 
    id: 'networking', 
    title: 'Networking', 
    desc: 'Connect the world.', 
    color: '#e74c3c', 
    detailedDesc: 'Master the architecture, management, and operations of modern networks.' 
  },
  { 
    id: 'data-science', 
    title: 'Data Science', 
    desc: 'Unlock insights from data.', 
    color: '#9b59b6',
    detailedDesc: 'Harness the power of data with machine learning, statistics, and analytics.' 
  },
  { 
    id: 'cybersecurity', 
    title: 'Cybersecurity', 
    desc: 'Defend the digital world.', 
    color: '#34495e',
    detailedDesc: 'Protect networks, systems, and data from digital attacks.' 
  },
  { 
    id: 'cloud', 
    title: 'Cloud Computing', 
    desc: 'Elevate to the cloud.', 
    color: '#f39c12',
    detailedDesc: 'Explore the world of distributed systems, storage, and scalability.' 
  },
  { 
    id: 'ai-and-robotics', 
    title: 'AI & Robotics', 
    desc: 'Drive the future.', 
    color: '#2ecc71',
    detailedDesc: 'Engage with machine intelligence, algorithms, and physical robots.' 
  }
];

function Home() {
  const [selectedBox, setSelectedBox] = useState(null);
  const [section, setSection] = useState('home');
 

  useEffect(() => {
    window.addEventListener('click', handleWindowClick);

    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

  const handleBoxClick = (event, boxId) => {
    event.stopPropagation();
    if (selectedBox && selectedBox !== boxId) {
      setSelectedBox(boxId);
    } else {
      setSelectedBox(selectedBox !== boxId ? boxId : null);
    }
    

  };

  const handleWindowClick = () => {
    setSelectedBox(null);
  };

  return (
    <div className="home-container" style={{ backgroundColor: selectedBox ? boxes.find(b => b.id === selectedBox).color : 'white' }}>
      <h1>Choose a Branch</h1>
      <div className="boxes">
        {boxes.map(box => (
          <div
            key={box.id}
            className={`box ${selectedBox === box.id ? 'expanded' : ''} ${selectedBox && selectedBox !== box.id ? 'dim' : ''}`}
            style={{ backgroundColor: box.color }}
            onClick={(event) => handleBoxClick(event, box.id)}
          >
            <h2>{box.title}</h2>
            {selectedBox === box.id && (
              <>
                <p>{box.detailedDesc}</p>
                <Link className="explore-btn" to={`/${box.id}`}>Explore More</Link>
              </>
            )}
            {!selectedBox && <p>{box.desc}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;