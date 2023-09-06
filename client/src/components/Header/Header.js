import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="app-header">
      <nav>
        <ul>
          <li className={currentPath === '/' ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={currentPath.startsWith('/software-development') ? 'active' : ''}>
            <Link to="/software-development">Software Development</Link>
          </li>
          <li className={currentPath.startsWith('/data-science') ? 'active' : ''}>
            <Link to="/data-science">Data Science</Link>
          </li>
          <li className={currentPath.startsWith('/ai-&-robotics') ? 'active' : ''}>
            <Link to="/ai-&-robotics">AI & Robotics</Link>
          </li>
          <li className={currentPath.startsWith('/networking') ? 'active' : ''}>
            <Link to="/networking">Networking</Link>
          </li>
          <li className={currentPath.startsWith('/cloud-computing') ? 'active' : ''}>
            <Link to="/cloud-computing">Cloud Computing</Link>
          </li>
          <li className={currentPath.startsWith('/cybersecurity') ? 'active' : ''}>
            <Link to="/cybersecurity">Cybersecurity</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
