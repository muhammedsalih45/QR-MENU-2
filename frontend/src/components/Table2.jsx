// src/components/Table.jsx
import React, { useState, useEffect ,createContext } from 'react';
import '../table2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import ProductModal from './NewProductModal';
import CategoryModal from './NewCategoryModal';
import EditModal from './EditModal';
import Select from 'react-select';

export const ProductContext = createContext();

const Table = () => {
  const [rows, setRows] = useState([]); // tabloya yazdıracağımız ürün listesi
  const [product, setProduct] = useState(null);// update modalına gidecek tek ürün
  const [error, setError] = useState(null);
  const [showProductModal, setShowProductModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [record, setRecord] = useState([])// filtreleme islemi için gerekli değişken
  const [selectedCategory,setSelectedCategory] = useState(null)  



  const categories = Array.from(
    new Set(
      rows.map((row) => row.Category)
    )
  )
  
  const filterProducts = selectedCategory ? rows.filter((product) => product.category_id === selectedCategory.value) : rows;

  const categoryOptions = categories.map((category) => ({
    value: category.category_id,
    label: category.category_name,
  }));

  useEffect(() => {
    setRecord(filterProducts); // rows değiştiğinde record'u güncelle
  }, [filterProducts]);

  const Filter = (event) => {
    if(selectedCategory==null){
    setRecord(rows.filter(f => f.product_name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())));
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if(selectedCategory==null){
      setRecord(rows)
    }
  }, [rows]);

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

  const handleEditClick = (row) => {
    setProduct(row)
    setShowEditModal(true);
  };


 


  return (
    <ProductContext.Provider value={product}>
    <div>

    <div className="btn-group" role="group">
      <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"b>
        + Ekle 
      </button>
      <ul class="dropdown-menu">
        <li className='list' onClick={() => setShowProductModal(true)}>Ürün</li>
        <li className='list' onClick={() => setShowCategoryModal(true)}>Kategori</li>
      </ul>

      <div className="input-group mb-3">


        <input 
        type="text" 
        className="search" 
        aria-label="Default" 
        aria-describedby="inputGroup-sizing-default"
        placeholder='  Search Product...'
        onChange={Filter}/>
      </div>

      <Select
        className="select"
        options={categoryOptions}
        onChange={(selectedCategory) => setSelectedCategory(selectedCategory)}
        placeholder="Select a Category"
        value={selectedCategory}
        isSearchable
        isClearable
      />


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
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
        

        {record.map((row) => (

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
              <td>{row.Category ? row.Category.category_name : 'Kategori Yok'}</td>
              <td className="edit">
                <i class="fa-solid fa-pen-to-square"
                 onClick={() => handleEditClick(row)}></i>



              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showEditModal && <EditModal show={showEditModal} handleClose={() => setShowEditModal(false)} />}

    </div>
    </ProductContext.Provider>

  );
};

export default Table;

