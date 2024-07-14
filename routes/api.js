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
const { addAddress, updateAddress, deleteAddress } = require('../controller/addressController');
const { addBell } = require('../controller/bellController');
const cartController = require('../controller/cartController');
const evaluateController = require('../controller/evaluateController');
const { addClass, updateClass } = require('../controller/classController');
const likeController = require('../controller/likeController');
const orderController = require('../controller/orderController');


router.post('/register', register);
router.post('/login', login);
router.put('/update/:userId', updateUser);


// Các endpoint Product
router.post('/add/product', addProduct);
router.put('/update/product/:productId', updateProduct);
router.get('/products', getAllProducts);
router.get('/products/class/:classId', getProductsByClassId);
router.get('/product/:productId', getProductById);

// Endpoint tìm kiếm sản phẩm
router.get('/products/search', searchProductsByName);


// Endpoint thêm class mới
router.post('/add/class', addClass);

// Endpoint sửa class
router.put('/update/class/:classId', updateClass);

// Endpoint thêm address mới
router.post('/add/address', addAddress);

// Endpoint sửa address
router.put('/update/address/:addressId', updateAddress);

// Endpoint xóa address
router.delete('/delete/address/:addressId', deleteAddress);

// Endpoint thêm bell mới
router.post('/add/bell', addBell);

router.post('/add/cart', cartController.addCart);
router.delete('/delete/cart/:cartId', cartController.deleteCart);
router.put('/update/cart/:cartId', cartController.updateCartNum);

router.post('/add/evaluate', evaluateController.addEvaluate);

router.post('/add/like', likeController.addLike);
router.post('/delete/like', likeController.deleteLike);
router.get('/like/user/:eva_user_id', likeController.getAllLikesByUserId);

router.post('/add/order', orderController.addOrder);
router.get('/order/user/:userId', orderController.getOrdersByUserId);

module.exports = router;
