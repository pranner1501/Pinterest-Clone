// Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSearchBar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className="navbar">
      <div className={`search-bar ${isExpanded ? 'expanded' : ''}`}>
        <input type="text" placeholder="Search" />
        <button onClick={toggleSearchBar}>Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
