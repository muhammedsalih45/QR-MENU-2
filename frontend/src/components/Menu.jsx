// src/components/Menu.jsx
import React from 'react';

function Menu({ setSelectedComponent }) {
  return (
    <nav>
      <ul>
        <li onClick={() => setSelectedComponent('Form')}>Form</li>
        <li onClick={() => setSelectedComponent('Users')}>User</li>
        <li onClick={() => setSelectedComponent('Settings')}>Settings</li>
      </ul>
    </nav>
  );
}

export default Menu;
