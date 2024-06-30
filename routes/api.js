const express = require('express');
const router = express.Router();
const { register, login, updateUser } = require('../controller/userController');
const {
    addProduct,
    updateProduct,
    getAllProducts,
    getProductsByClassId,
    getProductById,
    searchProductsByName
} = require('../controller/product');
const { addClass, updateClass } = require('../controller/classController');



router.post('/register', register);
router.post('/login', login);
router.put('/update/:userId', updateUser);


// Các endpoint Product
router.post('/product', addProduct);
router.put('/product/:productId', updateProduct);
router.get('/products', getAllProducts);
router.get('/products/class/:classId', getProductsByClassId);
router.get('/product/:productId', getProductById);

// Endpoint tìm kiếm sản phẩm
router.get('/products/search', searchProductsByName);


const { addClass, updateClass } = require('../controller/classController');

// Endpoint thêm class mới
router.post('/class', addClass);

// Endpoint sửa class
router.put('/class/:classId', updateClass);

module.exports = router;
