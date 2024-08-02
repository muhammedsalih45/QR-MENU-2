import React, { useState } from 'react';
import '../foods.css';

function Foods() {
  const [Foods, setFoods] = useState([]);

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
      setFoods(Foods);
    } catch (error) {
      console.error('Bir hata oluştu', error);
      setError('Veriler alınamadı. Lütfen tekrar deneyin.');
    }
  };

  fetchFoods();
  return (
    <div>
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
          {Foods.map(food => (
            <tr key={food.id}>
              <td>{food.id}</td>
              <td>{food.name}</td>
              <td>{food.price}</td>
              <td>{food.description}</td>
              <td>
                <Button variant="warning" onClick={() => handleEditClick(food)}>
                  Edit
                </Button>{' '}
                <FontAwesomeIcon
                  icon="fa-solid fa-trash-arrow-up"
                  style={{
                    color: 'red',
                    height: '50px',
                    width: '30px',
                    marginLef: '10px',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleDeleteClick(food.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Foods;
