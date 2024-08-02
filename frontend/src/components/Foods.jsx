import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import '../foods.css';

function Foods() {
  const [Foods, setFoods] = useState([]);
  useEffect(() => {fetchFoods();}, []);
=======
import { Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import '../foods.css';

function Foods() {
  const [foods, setFoods] = useState([]);
>>>>>>> 4fdeba01989d3cd10427c4bd0b0a24167e1584ec
  const [error, setError] = useState('');

  const fetchFoods = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setFoods(data);
<<<<<<< HEAD
      setError('');
=======
>>>>>>> 4fdeba01989d3cd10427c4bd0b0a24167e1584ec
    } catch (error) {
      console.error('Bir hata oluştu', error);
      setError('Veriler alınamadı. Lütfen tekrar deneyin.');
    }
  };

<<<<<<< HEAD
  return (
    <div>
    <h1 className="foods-title">Foods List</h1>
    {error && <p style={{ color: 'red' }}>{error}</p>}
    <table className="foods-table" cell stripped hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Visible</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {Foods.map((food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.price}</td>
            <td>{food.description}</td>
            <td>{food.visible ? 'Yes' : 'No'}</td>
            <td>
              <button onClick={() => handleUpdate(food.id, { ...food, visible: !food.visible })}>
                {food.visible ? 'Hide' : 'Show'}
              </button>
              <button onClick={() => handleUpdate(food.id, { ...food, name: 'Updated Name' })}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
=======
  useEffect(() => {
    fetchFoods();
  }, []);

  const handleEditClick = food => {
    // Logic for editing the food item
  };

  const handleDeleteClick = id => {
    // Logic for deleting the food item
  };

  return (
    <div className="foods-container">
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {foods.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {foods.map(food => (
              <tr key={food.id}>
                <td>{food.id}</td>
                <td>{food.name}</td>
                <td>{food.price}</td>
                <td>{food.description}</td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() => handleEditClick(food)}
                  >
                    Edit
                  </Button>{' '}
                  <FontAwesomeIcon
                    icon={faTrash}
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => handleDeleteClick(food.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
>>>>>>> 4fdeba01989d3cd10427c4bd0b0a24167e1584ec
}

export default Foods;
