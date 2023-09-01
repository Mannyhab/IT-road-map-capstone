
import React from 'react';

function BranchesDisplay({ branchesData, activeBranch, onBranchClick }) {
  return (
    <div className="branches-display">
      {branchesData.map(branch => (
        <div 
          key={branch.id}
          className={`branch ${branch.id === activeBranch ? 'active' : ''} ${activeBranch && branch.id !== activeBranch ? 'dimmed' : ''}`}
          style={{backgroundColor: branch.color}}
          onClick={() => onBranchClick(branch.id)}
        >
          <h2>{branch.title}</h2>
          <p className="branch-desc">{branch.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default BranchesDisplay;
