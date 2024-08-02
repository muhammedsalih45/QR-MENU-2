import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import '../foods.css';

function Foods() {
  const [foods, setFoods] = useState([]);
  const [error, setError] = useState('');

  const fetchFoods = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products/foods', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setFoods(data);
    } catch (error) {
      console.error('Bir hata oluştu', error);
      setError('Veriler alınamadı. Lütfen tekrar deneyin.');
    }
  };

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
}

export default Foods;
