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
<<<<<<< HEAD
    <nav className="menu">
      
      <ul>
        <div>
          <li className="side-link" onClick={() => setSelectedComponent('Form')}>
              Form
          </li>
        </div>
        <div>
          <li className="side-link" onClick={() => setSelectedComponent('Foods')}>
              Ürünler
            </li>
        </div>
        <div>
          <li className="side-link" onClick={() => setSelectedComponent('Sort')}>
              Sırala
          </li>
        </div>
        <div>
          <li
            className="side-link"onClick={() => setSelectedComponent('Settings')}
            >
            Ayarlar
=======
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
            onClick={() => setSelectedComponent('Settings')}
          >
            Settings
>>>>>>> 316014a51fe0d2d5cf846b7855dd4cb9881831ae
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Menu;
