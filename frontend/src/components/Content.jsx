// src/components/Content.jsx
import React from 'react';
import Form from '../components/Form';
function Content({ selectedComponent }) {
  if (selectedComponent === 'Form') {
    return <Form />;
  } else if (selectedComponent === 'Users') {
    return <div>Users Content</div>;
  } else if (selectedComponent === 'Settings') {
    return <div>Settings Content</div>;
  } else {
    return <div>Select an option from the menu</div>;
  }
}

export default Content;
