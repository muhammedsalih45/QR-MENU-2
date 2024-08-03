const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products/:id', productController.getProductById);
router.put('/products/:id',productController.deleteProductById);

router.get('/products', productController.getAllProducts);
router.post('/products', productController.createProduct);




module.exports = router;


