const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Order = new Schema({
    order_user_id: {type: Schema.Types.ObjectId, ref: 'user'},
    order_pro_id: {type: Schema.Types.ObjectId, ref: 'product'},
    orderNumPro: {type: Number},
    orderStatus: {type: Number},
},
{
    timestamps: true
})

module.exports = mongoose.model('order', Order)