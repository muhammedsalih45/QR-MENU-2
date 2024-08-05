const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');


router.post('/dishes/create', adminController.createDish);
// id ye göre yemek getirme
router.get('/dishes/:id', adminController.getDishById);

// id ye göre yemek güncelleme
router.put('/dishes/:id',adminController.updateDish);

// bütün yemekleri getirme
router.get('/dishes', adminController.getAllDishes);

// yemek ekleme

// kategori ekleme
router.post('/categories/create', adminController.createCategory);

// Son eklenen Kategoriyi getir
router.get('/categories/last',adminController.getLastCategory);

// kategorileri getir 
router.get('/categories/:id', adminController.getCategoryById);

router.get('/categories', adminController.getCategories);
// id ye göre kategori getirme


module.exports = router;


