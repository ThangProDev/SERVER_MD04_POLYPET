const User = require('../model/user');
const bcrypt = require('bcrypt');
const generateOtp = require('../controller/otp');
require('dotenv').config();

const register = async (req, res) => {
    try {
        const data = req.body;
        const otp = generateOtp(); // Tạo OTP ngẫu nhiên

        // Mã hóa mật khẩu
        const hashedPassword = await bcrypt.hash(data.userPass, 10);

        const newUser = new User({
            userName: data.userName,
            userMail: data.userMail,
            userPass: hashedPassword, // Lưu mật khẩu đã mã hóa
            otp: otp // Thêm OTP vào dữ liệu user
        });

        const result = await newUser.save();
        if (result) {
            // const mailOptions = {
            //     from: "polypet.md04@gmail.com", //email gửi đi
            //     to: result.email, // email nhận
            //     subject: "Đăng ký tài khoản", //subject
            //     text: `Your OTP code is: ${otp}`, // nội dung mail
            //     };
            //     // Nếu thêm thành công result !null trả về dữ liệu
            //     await Transporter.sendMail(mailOptions); // gửi mail
            
            res.json({
                status: 200,
                message: "Thêm mới thành công, OTP đã được gửi tới email",
                data: result
            });
            await sendOtpEmail(data.userMail, otp);
        } else {
            res.json({
                status: 400,
                message: "Thêm mới thất bại",
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

const login = async (req, res) => {
    try {
        const { userMail, userPass } = req.body;

        const user = await User.findOne({ userMail });
        if (!user) {
            return res.status(400).json({
                status: 400,
                message: "Email không tồn tại",
                data: []
            });
        }

        const isMatch = await bcrypt.compare(userPass, user.userPass);
        if (!isMatch) {
            return res.status(400).json({
                status: 400,
                message: "Mật khẩu không đúng",
                data: []
            });
        }

        res.json({
            status: 200,
            message: "Đăng nhập thành công",
            data: user
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


const updateUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const updateData = req.body;

        if (updateData.userPass) {
            updateData.userPass = await bcrypt.hash(updateData.userPass, 10);
        }

        const updatedUser = await User.findOneAndUpdate(
            { _id: userId },
            { $set: updateData },
            { new: true }
        );
        if (updatedUser) {
            res.json({
                status: 200,
                message: "Cập nhật thành công",
                data: updatedUser
            });
        } else {
            res.json({
                status: 400,
                message: "Cập nhật thất bại",
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
    register,
    login,
    updateUser
};