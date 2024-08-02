// Form.jsx
import React, { useState } from 'react';
import '../form.css';

function Form() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/products/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, price, description })
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setError('');
      // Yeni ürün eklendikten sonra formu temizleyin
      setName('');
      setPrice('');
      setDescription('');
    } catch (error) {
      console.error('Error adding product:', error);
      setError('Error adding product');
    }
  };
  
  return (
    <div>
      <form className="main-container" onSubmit={handleSubmit}>
        <fieldset className="header">Kayıt Formu</fieldset>
        <input
          className="inp-container"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Ürün İsmini Giriniz"
        />
        <input
          className="inp-container"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          placeholder="Ürün Fiyat Bilgisini Giriniz"
        />
        <textarea
          className="inp-container"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Ürün Açıklamasını Giriniz"
        ></textarea>
        <div className="button-container">
          <button className="inp-button" type="submit">
            Ekle
          </button>
        </div>
        {error && <div className="error-message">{error}</div>}
      </form>
    </div>
  );
}

export default Form;
