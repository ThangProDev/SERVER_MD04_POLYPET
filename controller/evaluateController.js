const Evaluate = require('../model/evaluate');

const addEvaluate = async (req, res) => {
    try {
        const { eva_user_id, eva_pro_id, evaContent, evaStar } = req.body;

        const newEvaluate = new Evaluate({
            eva_user_id,
            eva_pro_id,
            evaContent,
            evaStar
        });

        const result = await newEvaluate.save();
        res.json({
            status: 200,
            message: "Thêm đánh giá thành công",
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
    addEvaluate
};
