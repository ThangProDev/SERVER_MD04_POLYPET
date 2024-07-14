const Bell = require('../model/bell');

const addBell = async (req, res) => {
    try {
        const { bell_order_id, bellContent } = req.body;

        const newBell = new Bell({
            bell_order_id,
            bellContent
        });

        const result = await newBell.save();
        res.json({
            status: 200,
            message: "Thêm thông báo thành công",
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

module.exports = {
    addBell
};
