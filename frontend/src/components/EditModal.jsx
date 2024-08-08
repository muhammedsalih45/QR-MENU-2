
import React, { useState, useEffect,useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import CategoryModal from './NewCategoryModal';
import { ProductContext } from './Table2';
// import '../productModal.css'
const EditModal = ({ show, handleClose }) => {
  const [categories, setCategories] = useState([]);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [newName, setNewName] = useState('');  
  const [newPrice, setNewPrice] = useState('');
  const [newCategory_id, setNewCategory_id] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const Product = useContext(ProductContext);
  if (!show || !Product) return null;


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
  // Burası Modalın yapacağı işi temsil eden fonksiyon her modal için handleSubmit modalı 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://localhost:5000/api/admin/products/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: Product.product_id,
                newName: newName,
                newPrice: newPrice,
                newCategory_id: newCategory_id,
                newDescription: newDescription
            }),
        });
        if (!response.ok) {
            throw new Error('Veritabanı hatası');
        }   
        setError('');
        handleSave();
        handleModalClose(false);
    } catch (error) {
        console.error('Error updating username:', error);
        setError('Error updating username');
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
    handleClose();
  };
  return (
    <div className={`modal ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content" >
          <div className="modal-header">
            <h5 className="modal-title">Değiştir</h5>
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
                  value={Product.product_name}
                  onChange={(e) => setNewName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Açıklama</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={Product.description}
                  onChange={(e) => setNewDescription(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">Fiyat</label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  value={Product.price}
                  onChange={(e) => setNewPrice(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="category" className="form-label">Kategori</label>
                <div   style={{ display: 'flex', alignItems: 'center' } }>
                  <select
                    className="form-control category-selector"
                    id="category"
                    value={Product.category_id}
                    onChange={(e) => setNewCategory_id(e.target.value)}
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

export default EditModal;








