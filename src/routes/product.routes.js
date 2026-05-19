const express = require('express');
const router = express.Router();
const validate = require('../middlewares/validate');
const {productSchema} = require('../validators/product.validator');
const auth = require("../middlewares/auth.middleware")
const role = require("../middlewares/role.middleware")
const {createProduct, getProducts, getProductById, updateProduct, deleteProduct} = require('../controllers/product.controller');


 router.post('/', auth, role('user'), validate(productSchema), createProduct);
 router.get('/',getProducts);
 router.get('/:id', getProductById);
 router.put('/:id', validate(productSchema), updateProduct);
 router.delete('/:id',  deleteProduct);
 

 module.exports = router;
