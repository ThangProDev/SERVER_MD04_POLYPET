const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cart = new Schema({
    eva_user_id: {type: Schema.Types.ObjectId, ref: 'user'},
    eva_pro_id: {type: Schema.Types.ObjectId, ref: 'product'},
    cartNum: {type: Number},
},
{
    timestamps: true
})

module.exports = mongoose.model('cart', Cart)