const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Evaluate = new Schema({
    eva_user_id: {type: Schema.Types.ObjectId, ref: 'user'},
    eva_pro_id: {type: Schema.Types.ObjectId, ref: 'product'},
    evaContent: {type: String},
    evaStar: {type: Number},
},
{
    timestamps: true
})

module.exports = mongoose.model('evaluate', Evaluate)