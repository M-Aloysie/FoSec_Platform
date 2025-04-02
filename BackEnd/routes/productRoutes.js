const express = require('express');
const router = express.Router();
const { protect, restrictTo } = require('../middleware/auth');
const {
  createProduct,
  getProducts,
  getMyProducts,
  updateProduct,
  deleteProduct,
} = require('../controller/productController');

router.post('/', protect, restrictTo('Farmer'), createProduct);
router.get('/', getProducts);
router.get('/my', protect, getMyProducts);
router.put('/:id', protect, updateProduct);
router.delete('/:id', protect, deleteProduct);

module.exports = router;