const express = require('express');
const productModel = require('../Controller/productController');
const router = express.Router();










// Apis :

router.post('/', productModel.addProduct)

    .get('/', productModel.getAllProducts)

    .get('/:id', productModel.getProduct)

    .put('/:id', productModel.replaceProduct)

    .patch('/:id', productModel.updateProduct)

    .delete('/:id', productModel.deleteProduct)

exports.router = router;