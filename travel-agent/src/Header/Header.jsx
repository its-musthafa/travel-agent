import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <header>
      <div className="logo">
        <h1>Travel Agency</h1>
      </div>
      <nav>
        <ul>
        <li onClick={() => handleNavigate('/')} className={location.pathname === '/' ? 'active' : ''}>Home</li>
        <li onClick={() => handleNavigate('/plans')} className={location.pathname === '/plans' ? 'active' : ''}>Plans</li>
          <li onClick={() => handleNavigate('/gallery')} className={location.pathname === '/gallery' ? 'active' : ''}>Gallery</li>
          <li onClick={() => handleNavigate('/contact')} className={location.pathname === '/contact' ? 'active' : ''}>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;