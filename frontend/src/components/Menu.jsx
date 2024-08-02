// src/components/Menu.jsx
import React from 'react';
import '../menu.css';

function Menu({ setSelectedComponent }) {

 
  return (
    <nav className="menu">
      
      <ul>
        <li className="side-link" onClick={() => setSelectedComponent('Form')}>
          Form
        </li>
        <li className="side-link" onClick={() => setSelectedComponent('Foods')}>
          Foods
        </li>
        <li
          className="side-link"
          onClick={() => setSelectedComponent('Settings')}
        >
          Settings
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
