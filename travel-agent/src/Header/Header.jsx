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
          <li onClick={() => handleNavigate('/')}>Home</li>
          <li onClick={() => handleNavigate('/plans')}>Plans</li>
          <li onClick={() => handleNavigate('/gallery')}>Gallery</li>
          <li onClick={() => handleNavigate('/contact')}>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;