import React from 'react';
import '../menu.css';

function Menu({ setSelectedComponent }) {

 
  return (
    <nav className="menu">
      
      <ul>
        <div>
          <li className="side-link" onClick={() => setSelectedComponent('Form')}>
                  Product
          </li>
        </div>
        <div>
          <li className="side-link" onClick={() => setSelectedComponent('Foods')}>
              View
            </li>
        </div>
        <div>
          <li
            className="side-link"
            onClick={() => setSelectedComponent('Settings')}
            >
            Settings
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Menu;