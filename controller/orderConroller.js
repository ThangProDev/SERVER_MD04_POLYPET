const Order = require('../model/order');

const addOrder = async (req, res) => {
    try {
        const { order_user_id, order_pro_id, orderNumPro, orderStatus } = req.body;

        const newOrder = new Order({
            order_user_id,
            order_pro_id,
            orderNumPro,
            orderStatus
        });

        const result = await newOrder.save();

        res.json({
            status: 200,
            message: "Thêm đơn hàng thành công",
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
const getOrdersByUserId = async (req, res) => {
    try {
        const { userId } = req.params;

        const orders = await Order.find({ order_user_id: userId });

        res.json({
            status: 200,
            message: "Danh sách đơn hàng của người dùng",
            data: orders
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

module.exports = {
    getOrdersByUserId
};