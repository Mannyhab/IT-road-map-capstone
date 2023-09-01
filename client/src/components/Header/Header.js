import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'; 

function Header() {
    return (
        <header className="app-header">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/software-development">Software Development</Link></li>
                    <li><Link to="/data-science">Data Science</Link></li>
                    <li><Link to="/networking">Networking</Link></li>
                    <li><Link to="/cybersecurity">Cybersecurity</Link></li>
                    <li><Link to="/it-support">IT Support</Link></li>
                    <li><Link to="/advanced-fields">Advanced Fields</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
