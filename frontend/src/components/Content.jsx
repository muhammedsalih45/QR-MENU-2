// src/components/Content.jsx
import React from 'react';
import Form from '../components/Form';
import Foods from '../components/Foods';
import Table from '../components/Table';
function Content({ selectedComponent }) {
  if (selectedComponent === 'Form') {
    return <Form />;
  } else if (selectedComponent === 'Foods') {
    return <Table />;
  } else if (selectedComponent === 'Settings') {
    return <div>Settings Content</div>;
  } else {
    return <div>Select an option from the menu</div>;
  }
}

export default Content;
