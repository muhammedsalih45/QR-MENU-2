// Form.jsx
import React from 'react';
import { useState, useEffect } from 'react';
import '../form.css';

function Form() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/data/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(name, price, description),
      });

      if (response.ok) {
        console.log('Güvenli bir şekilde bağlantı kuruldu');
        console.log(JSON.stringify(response));
      } else {
        console.log('Güvenli bir şekilde bağlanılamadı tekrar deneyin');
      }
    } catch (err) {
      console.log('Bir hata oluştu');
    }
  };

  return (
    <div>
      <form className="main-container" onSubmit={handleSubmit}>
        <fieldset className="header">Kayıt Formu</fieldset>
        <input
          className="inp-container"
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          placeholder="Ürün İsmini Giriniz"
        />
        <input
          className="inp-container"
          value={price}
          onChange={e => setPrice(e.target.value)}
          type="number"
          placeholder="Ürün Fiyat Bilgisini Giriniz"
        />
        <textarea
          className="inp-container"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Ürün Açıklamasını Giriniz"
        ></textarea>
        <div className="button-container">
          <button className="inp-button" type="submit">
            Ekle
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
