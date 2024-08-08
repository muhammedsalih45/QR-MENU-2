const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');


// router.put('/products/deleteSiraId',adminController.deleteAllSiraIdForSort);

router.put('/products/yeniSira',adminController.updateProductsBySiraId);

router.post('/products/create', adminController.createProduct);

router.get('/products/:id', adminController.getProductById);

router.put('/products/:id',adminController.updateProduct);

router.get('/productsBySiraid', adminController.getAllProductsOrderBySiraId);

router.get('/products', adminController.getAllProuducts);



router.post('/categories/create', adminController.createCategory);

router.get('/categories/last',adminController.getLastCategory);

router.get('/categories/:id', adminController.getCategoryById);

router.get('/categories', adminController.getCategories);




module.exports = router;


