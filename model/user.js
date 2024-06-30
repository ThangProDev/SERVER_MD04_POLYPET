const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    userName: {type: String, required: true},
    userImg: {type: String},
    userSex: {type: Number},
    userDate: {type: String},
    userNumPhone: {type: Number},
    userMail: {type: String, required: true},
    userPass: {type: String, required: true},
    userSold: {type: Number},
    userLike: {type: Number},
    otp: {type: String},
},
{
    timestamps: true
})

module.exports = mongoose.model('user', User)