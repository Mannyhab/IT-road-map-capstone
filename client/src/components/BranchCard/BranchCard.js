import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Lottie from 'react-lottie';

const BranchesPage = () => {
  const { section } = useParams();
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    // Fetch branches data based on the section ID
    axios.get(`http://localhost:3001/api/branches/${section.id}`)
      .then(response => {
        setBranches(response.data);
      })
      .catch(error => {
        console.error('Error fetching branches:', error);
      });
  }, [section]);

  // Define Lottie animation options for section icons
  const sectionAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: require(`../../assets/icons/${section.title.toLowerCase().replace(/ /g, '-')}.json`), // Replace with your animation file
  };

  return (
    <div className="branches-page">
      <div className="branches-icon-title">
        <Lottie options={sectionAnimationOptions} height={100} width={100} />
        <h1>{section.title}</h1>
      </div>
      <div className="branch-cards">
        {branches.map(branch => (
          <div key={branch.id} className="branch-card">
            <img src={`../../assets/icons/${branch.title.toLowerCase().replace(/ /g, '-')}.json`} alt={branch.title} />
            <div className="card-title">{branch.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BranchesPage;
