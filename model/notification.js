const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Notification = new Schema({
    notiImg: {type: String},
    notiContent: {type: String},
},
{
    timestamps: true
})

module.exports = mongoose.model('notification', Notification)