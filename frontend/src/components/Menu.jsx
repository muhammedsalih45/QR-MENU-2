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
<<<<<<< HEAD
            onClick={() => setSelectedComponent('Sort')}
          >
            Sort
          </li>
          <li
            className="side-link"
            onClick={() => setSelectedComponent('Settings')}
=======
            onClick={() => {
              setSelectedComponent('Settings');
              setMenuOpen(false);
            }}
>>>>>>> b89694bd7a9c67b73752454b8640708bdaac45c0
          >
            Settings

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
