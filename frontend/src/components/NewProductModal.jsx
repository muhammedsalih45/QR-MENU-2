import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import CategoryModal from './NewCategoryModal';
import '../productModal.css'
const ProductModal = ({ show, handleClose, handleSave }) => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category_id, setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/admin/categories');
      if (!response.ok) {
        throw new Error('Kategorileri çekmede bir hata oluştu');
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Kategoriler alınamadı', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'http://localhost:5000/api/admin/products/create',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ productName, price, description, category_id }),
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Yeni ürün eklendikten sonra formu temizleyin
      setProductName('');
      setDescription('');
      setPrice('');
      setCategoryId('');
      handleSave();
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const fetchLastCategory = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/admin/categories/last');
      if (!response.ok) {
        throw new Error('Kategorileri çekmede bir hata oluştu');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Kategoriler alınamadı', error);
    }
  }

  const handleSaveforPlus = async () => {
  // Yeni kategori eklendikten sonra kategorileri yeniden fetch et
 
    fetchCategories();
    const lastCategory = await fetchLastCategory();
    setCategoryId(lastCategory.category_id);
    setShowCategoryModal(false);
  
  };

  const handleModalClose = () => {
    setProductName('');
    setDescription('');
    setPrice('');
    setCategoryId('');
    handleClose();
  };


  return (
    <div className={`modal ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content" >
          <div className="modal-header">
            <h5 className="modal-title">Yeni Ürün Ekle</h5>
            <button type="button" className="btn-close" onClick={handleModalClose} ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="productName" className="form-label">Ürün Adı</label>
                <input
                  type="text"
                  className="form-control"
                  id="productName"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Açıklama</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">Fiyat</label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="category" className="form-label">Kategori</label>
                <div   style={{ display: 'flex', alignItems: 'center' } }>
                  <select
                    className="form-control category-selector"
                    id="category"
                    value={category_id}
                    onChange={(e) => setCategoryId(e.target.value)}
                    required
                    style={{ flex: 1 }}
                  >
                    <option value="" >Kategori Seçin</option>
                  
                    {/* Buraya bir combobox lazım */}
                    {categories.map(cat => (
                      <option key={cat.category_id} value={cat.category_id}>
                        {cat.category_name}
                      </option>
                    ))}
                  </select>
                  <button type="button" className='btn btn-outline-primary' onClick={() => setShowCategoryModal(true)}>
                  <FontAwesomeIcon
                    icon={faPlus}
                    className='plus-icon'
                    style={{ marginLeft: '10px', cursor: 'pointer' }}
                    
                  />
                  </button>
                  
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary" style={{ width: '70%', display: 'block', margin: 'auto' }}>Kaydet</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <CategoryModal
        show={showCategoryModal}
        handleClose={() => setShowCategoryModal(false)}
        handleSave={handleSaveforPlus}
      />
    </div>
  );
};

export default ProductModal;
