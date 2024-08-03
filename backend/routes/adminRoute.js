const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');


// id ye göre yemek getirme
router.get('/dishes/:id', adminController.getDishById);

// id ye göre yemek güncelleme
router.put('/dishes/:id',adminController.updateDish);

// bütün yemekleri getirme
router.get('/dishes', adminController.getAllDishes);

// yemek ekleme
router.post('/dishes/create', adminController.createDish);

// kategori ekleme
router.post('/categories/create', adminController.createCategory);

// kategorileri getir 
router.get('/categories', adminController.getCategories);

// id ye göre kategori getirme
router.get('/categories/:id', adminController.getCategoryById);



module.exports = router;


