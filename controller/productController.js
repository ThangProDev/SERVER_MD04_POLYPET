const Product = require('../model/product');

//Them product
const addProduct = async (req, res) => {
    try {
        const data = req.body;
        const newProduct = new Product(data);

        const result = await newProduct.save();
        if (result) {
            res.json({
                status: 200,
                message: "Thêm sản phẩm thành công",
                data: result
            });
        } else {
            res.json({
                status: 400,
                message: "Thêm sản phẩm thất bại",
                data: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            message: "Lỗi server",
            data: error.message
        });
    }
};

// Hàm sửa product bằng findOneAndUpdate
const updateProduct = async (req, res) => {
    try {
        const { productId } = req.params;
        const updateData = req.body;

        const updatedProduct = await Product.findOneAndUpdate(
            { _id: productId },
            { $set: updateData },
            { new: true }
        );
        if (updatedProduct) {
            res.json({
                status: 200,
                message: "Cập nhật sản phẩm thành công",
                data: updatedProduct
            });
        } else {
            res.json({
                status: 400,
                message: "Cập nhật sản phẩm thất bại",
                data: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            message: "Lỗi server",
            data: error.message
        });
    }
};

// Hàm gọi danh sách tất cả product
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        if (products.length) {
            res.json({
                status: 200,
                message: "Lấy danh sách sản phẩm thành công",
                data: products
            });
        } else {
            res.json({
                status: 404,
                message: "Không có sản phẩm nào",
                data: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            message: "Lỗi server",
            data: error.message
        });
    }
};

// Hàm gọi danh sách product theo pro_class_id
const getProductsByClassId = async (req, res) => {
    try {
        const { classId } = req.params;
        const products = await Product.find({ pro_class_id: classId });
        if (products.length) {
            res.json({
                status: 200,
                message: "Lấy danh sách sản phẩm theo class thành công",
                data: products
            });
        } else {
            res.json({
                status: 404,
                message: "Không có sản phẩm nào trong class này",
                data: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            message: "Lỗi server",
            data: error.message
        });
    }
};

// Hàm gọi chi tiết 1 product
const getProductById = async (req, res) => {
    try {
        const { productId } = req.params;
        const product = await Product.findById(productId);
        if (product) {
            res.json({
                status: 200,
                message: "Lấy chi tiết sản phẩm thành công",
                data: product
            });
        } else {
            res.json({
                status: 404,
                message: "Không tìm thấy sản phẩm",
                data: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            message: "Lỗi server",
            data: error.message
        });
    }
};


// Hàm tìm kiếm sản phẩm theo proName
const searchProductsByName = async (req, res) => {
    try {
        const { query } = req.query; // Lấy từ khóa tìm kiếm từ query parameters

        if (!query) {
            return res.status(400).json({
                status: 400,
                message: "Vui lòng cung cấp từ khóa tìm kiếm",
                data: []
            });
        }

        const products = await Product.find({ proName: new RegExp(query, 'i') });
        if (products.length) {
            res.json({
                status: 200,
                message: "Tìm kiếm sản phẩm thành công",
                data: products
            });
        } else {
            res.json({
                status: 404,
                message: "Không tìm thấy sản phẩm nào",
                data: []
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            message: "Lỗi server",
            data: error.message
        });
    }
};

module.exports = {
    addProduct,
    updateProduct,
    getAllProducts,
    getProductsByClassId,
    getProductById,
    searchProductsByName
};