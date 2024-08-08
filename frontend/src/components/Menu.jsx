import React, { useState, useEffect, useRef } from 'react';
import '../menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Menu({ setSelectedComponent }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = event => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !event.target.closest('.menu-icon')
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

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
      <nav className={`menu ${menuOpen ? 'open' : ''}`} ref={menuRef}>
        <ul>
          <li
            className="side-link"
            onClick={() => {
              setSelectedComponent('Form');
              setMenuOpen(false);
            }}
          >
            Product
          </li>
          <li
            className="side-link"
            onClick={() => {
              setSelectedComponent('Foods');
              setMenuOpen(false);
            }}
          >
            View
          </li>
          <li
            className="side-link"
            onClick={() => {
              setSelectedComponent('Settings');
              setMenuOpen(false);
            }}
          >
            Settings
>>>>>>> 316014a51fe0d2d5cf846b7855dd4cb9881831ae
          </li>
        </ul>
      </nav>
      <div
        className={`overlay ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      ></div>
    </>
  );
}

export default Menu;
