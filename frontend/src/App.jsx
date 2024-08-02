// src/App.jsx
import React, { useState } from 'react';
import Menu from './components/Menu';
import Content from './components/Content'; 
import './App.css';

function App() {
  const [selectedComponent, setSelectedComponent] = useState('');

  return (
    <div className="app-container">
      <div className="menu-container">
        <Menu setSelectedComponent={setSelectedComponent} />
      </div>
      <div className="content-container">
        <Content selectedComponent={selectedComponent} />
      </div>
    </div>
  );
}

export default App;
