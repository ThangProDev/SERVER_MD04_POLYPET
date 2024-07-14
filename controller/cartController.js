const Cart = require('../model/cart');

const addCart = async (req, res) => {
    try {
        const { eva_user_id, eva_pro_id, cartNum } = req.body;

        const newCart = new Cart({
            eva_user_id,
            eva_pro_id,
            cartNum
        });

        const result = await newCart.save();
        res.json({
            status: 200,
            message: "Thêm sản phẩm vào giỏ hàng thành công",
            data: result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            message: "Lỗi server",
            data: error.message
        });
    }
};

const deleteCart = async (req, res) => {
    try {
        const { cartId } = req.params;

        const result = await Cart.findByIdAndDelete(cartId);
        if (result) {
            res.json({
                status: 200,
                message: "Xóa sản phẩm khỏi giỏ hàng thành công",
                data: result
            });
        } else {
            res.json({
                status: 400,
                message: "Xóa sản phẩm khỏi giỏ hàng thất bại",
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

const updateCartNum = async (req, res) => {
    try {
        const { cartId } = req.params;
        const { cartNum } = req.body;

        const updatedCart = await Cart.findByIdAndUpdate(cartId, { cartNum }, { new: true });
        if (updatedCart) {
            res.json({
                status: 200,
                message: "Cập nhật số lượng sản phẩm thành công",
                data: updatedCart
            });
        } else {
            res.json({
                status: 400,
                message: "Cập nhật số lượng sản phẩm thất bại",
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
    addCart,
    deleteCart,
    updateCartNum
};
