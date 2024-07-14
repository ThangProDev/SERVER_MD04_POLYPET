const Like = require('../model/like');

const addLike = async (req, res) => {
    try {
        const { eva_user_id, eva_pro_id } = req.body;

        const newLike = new Like({
            eva_user_id,
            eva_pro_id
        });

        const result = await newLike.save();
        res.json({
            status: 200,
            message: "Thêm like thành công",
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

const deleteLike = async (req, res) => {
    try {
        const { eva_user_id, eva_pro_id } = req.body;

        const result = await Like.findOneAndDelete({
            eva_user_id,
            eva_pro_id
        });

        if (result) {
            res.json({
                status: 200,
                message: "Xóa like thành công",
                data: result
            });
        } else {
            res.json({
                status: 400,
                message: "Không tìm thấy like",
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
const getAllLikesByUserId = async (req, res) => {
    try {
        const { eva_user_id } = req.params;

        const likes = await Like.find({ eva_user_id });

        res.json({
            status: 200,
            message: "Lấy danh sách like thành công",
            data: likes
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
    addLike,
    deleteLike,
    getAllLikesByUserId
};