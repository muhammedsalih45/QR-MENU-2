import React from 'react';
import '../menu.css';

function Menu({ setSelectedComponent }) {

 
  return (
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
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Menu;