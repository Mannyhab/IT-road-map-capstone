import React from 'react';
import './BoxList.scss';

function BoxList({ items, onBoxClick }) {
  return (
    <div className="boxListContainer">
      {items.map(item => (
        <div key={item} className="box" onClick={() => onBoxClick(item)}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default BoxList;
