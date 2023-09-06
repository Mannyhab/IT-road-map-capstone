import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Lottie from 'lottie-react';
import { useParams } from 'react-router-dom';
import BranchCard from '../../components/BranchCard/BranchCard';
import './BranchesPage.scss';

function BranchesPage() {
  const { section } = useParams();
  const [branches, setBranches] = useState([]);
  const [selectedBranchId, setSelectedBranchId] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/branches/${section}`).then((response) => {
      setBranches(response.data.data);
    });
  }, [section]);

  const handleBranchClick = (branchId) => {
    setSelectedBranchId(branchId);
  };

  return (
    <div className="branches-page">
      <div className="root-card">
        <h2>{section}</h2>
        <div className="icon-container">
          <Lottie
            animationData={require(`../../assets/icons/${section.toLowerCase().replace(/\s+/g, '-')}.json`)}
            loop
            autoplay
          />
        </div>
      </div>
      <div className="branches-container">
        {branches.map((branch) => (
          <BranchCard
            key={branch.id}
            branch={branch}
            selected={branch.id === selectedBranchId}
            onClick={handleBranchClick}
          />
        ))}
      </div>
    </div>
  );
}

export default BranchesPage;
