import React, { useState } from 'react';
import '../menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Menu({ setSelectedComponent }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div
        className={`menu-icon ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </div>
      <nav className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li
            className="side-link"
            onClick={() => setSelectedComponent('Form')}
          >
            Product
          </li>
          <li
            className="side-link"
            onClick={() => setSelectedComponent('Foods')}
          >
            View
          </li>
          <li
            className="side-link"
            onClick={() => setSelectedComponent('Sort')}
          >
            Sort
          </li>
          <li
            className="side-link"
            onClick={() => setSelectedComponent('Settings')}
          >
            Settings

          </li>
        </ul>
      </nav>
    </>
  );
}

export default Menu;
