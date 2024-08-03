// src/components/Content.jsx
import React from 'react';
import Form from '../components/Form';
import Table from '../components/Table';
import Table2 from '../components/Table2';
function Content({ selectedComponent }) {
  if (selectedComponent === 'Form') {
    return <Form />;
  } else if (selectedComponent === 'Foods') {
    return <Table2 />;
  } else if (selectedComponent === 'Settings') {
    return <div>Settings Content</div>;
  } else {
    return <div>Select an option from the menu</div>;
  }
}

export default Content;
