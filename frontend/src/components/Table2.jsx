// src/components/Table.jsx
import React, { useState, useEffect } from 'react';
import '../table2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import ProductModal from './NewProductModal';
import CategoryModal from './NewCategoryModal';


const Table = () => {
  const [rows, setRows] = useState([]);
  const [error, setError] = useState(null);
  const [showProductModal, setShowProductModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/admin/products');
      if (!response.ok) {
        throw new Error('Verileri çekmede bir hata oluştu');
      }
      const data = await response.json();
      setRows(data);
    } catch (error) {
      console.error('Bir hata oluştu', error);
      setError('Veriler alınamadı. Lütfen tekrar deneyin.');
    }
  };

  const handleCheckboxChange = (id) => {
    setRows(prevRows =>
      prevRows.map(row =>
        row.product_id === id ? { ...row, is_selected: !row.is_selected } : row,
      ),
    );
  };

  const handleToggleChange = (id) => {
    setRows(prevRows =>
      prevRows.map(row =>
        row.product_id === id ? { ...row, is_available: !row.is_available } : row,
      ),
    );
  };

  const handleSave = () => {
    fetchProducts();
    setShowProductModal(false);
    setShowCategoryModal(false);
  };



  return (
    <div>
      

    <div className="btn-group" role="group">
      <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"b>
        + Ekle 
      </button>
      <ul class="dropdown-menu">
        <li className='list' onClick={() => setShowProductModal(true)}>Ürün</li>
        <li className='list' onClick={() => setShowCategoryModal(true)}>Kategori</li>
      </ul>
    </div>


      <CategoryModal show={showCategoryModal} handleClose={() => setShowCategoryModal(false) } handleSave={handleSave}/>
      <ProductModal show={showProductModal} handleClose={() => setShowProductModal(false)} handleSave={handleSave} />

      
      <table className="table">
        <thead className="table-column">
          <tr>
            <th style={{ textAlign: 'left' }}>
              <input
                className="form-check-input"
                type="checkbox"
                id="check1"
                name="option1"
                value="something"
              />
            </th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Visible</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            //  TABLODAKİ SATIRIN ÜZERİNİ ÇİZEN AŞAĞIDAKİ KOD SATIRI
            <tr key={row.product_id} className={row.is_available ? 'faded disabled' : ''}> 
              <td>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="check1"
                  name="option1"
                  value="something"
                  checked={row.is_selected}
                  onChange={() => handleCheckboxChange(row.product_id)}
                  disabled={row.is_available}
                />
              </td>
              <td>{row.product_name}</td>
              <td>{row.description}</td>
              <td>{row.price}</td>
              <td>{row.category ? row.category.category_name : 'Kategori Yok'}</td>
              <td className="toggle">

                <FontAwesomeIcon
                  icon={row.is_available ? faToggleOn : faToggleOff}
                  onClick={() => handleToggleChange(row.product_id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
