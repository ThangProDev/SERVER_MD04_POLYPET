const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    proImg: {type: Schema.Types.ObjectId, ref: 'user'},
    proName: {type: String},
    proPrice: {type: Number},
    proPriceSale: {type: Number},
    proSum: {type: Number},
    proWeight: {type: Number},
    proStar: {type: Number},
    proSold: {type: Number},
    proContent: {type: String},
    proActive: {type: Number},
    pro_class_id: {type: Schema.Types.ObjectId, ref: 'class'},
},
{
    timestamps: true
})

module.exports = mongoose.model('product', Product)