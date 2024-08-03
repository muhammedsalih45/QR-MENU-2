import React from 'react';
import '../menu.css';

function Menu({ setSelectedComponent }) {

 
  return (
    <nav className="menu">
      
      <ul>

      <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownFormButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            + New
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownFormButton">
            <li className="dropdown-item" onClick={() => setSelectedComponent('Form')}>
              Product
            </li>
          </ul>
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