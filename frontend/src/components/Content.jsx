// src/components/Content.jsx
import React from 'react';
import Form from '../components/Form';
import Table from '../components/Table';
import Table2 from '../components/Table2';
import Sort from '../components/Sort';
import Sort2 from '../components/Sort2';

function Content({ selectedComponent }) {
  if (selectedComponent === 'Form') {
    return <Form />;
  } else if (selectedComponent === 'Foods') {
    return <Table2 />;
  } else if (selectedComponent === 'Settings') {
    return <div>You are in Settings Component</div>;
  }else if (selectedComponent === 'Sort') {
    return <Sort2 />;
  } else {
    return <div>Select an option from the menu</div>;
  }
}

export default Content;
