const crypto = require('crypto');
const nodemailer = require('nodemailer');

const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // Tạo OTP ngẫu nhiên dài 6 chữ số
};

const sendOtpEmail = async (email, otp) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'polypet.md04@gmail.com',
            pass: 'bshrtvrrabqwwhjv'
        }
    });

    const mailOptions = {
        from: 'polypet.md04@gmail.com',
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is: ${otp}`
    };

    await transporter.sendMail(mailOptions);
};

module.exports = {
    generateOtp,
    sendOtpEmail
};
