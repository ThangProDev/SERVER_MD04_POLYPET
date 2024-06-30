const Class = require('../model/class');

// Hàm thêm class mới
const addClass = async (req, res) => {
    try {
        const { classContent } = req.body;

        const newClass = new Class({
            classContent
        });

        const result = await newClass.save();
        res.json({
            status: 200,
            message: "Thêm class thành công",
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

// Hàm sửa class
const updateClass = async (req, res) => {
    try {
        const { classId } = req.params;
        const { classContent } = req.body;

        const updatedClass = await Class.findByIdAndUpdate(
            classId,
            { classContent },
            { new: true }
        );

        if (updatedClass) {
            res.json({
                status: 200,
                message: "Cập nhật class thành công",
                data: updatedClass
            });
        } else {
            res.json({
                status: 400,
                message: "Cập nhật class thất bại",
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
    addClass,
    updateClass
};
