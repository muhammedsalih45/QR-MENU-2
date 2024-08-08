// src/components/Content.jsx
import React from 'react';
import Form from '../components/Form';
import Table2 from '../components/Table2';
import Table from '../components/Table';

function Content({ selectedComponent }) {
  if (selectedComponent === 'Form') {
    return <Form />;
  } else if (selectedComponent === 'Foods') {
    return <Table />;
  } else if (selectedComponent === 'Settings') {
    return <div>You are in Settings Component</div>;
  }else {
    return <div>Select an option from the menu</div>;
  }
}

export default Content;
