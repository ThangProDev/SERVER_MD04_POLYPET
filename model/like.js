const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Like = new Schema({
    eva_user_id: {type: Schema.Types.ObjectId, ref: 'user'},
    eva_pro_id: {type: Schema.Types.ObjectId, ref: 'product'},
},
{
    timestamps: true
})

module.exports = mongoose.model('like', Like)