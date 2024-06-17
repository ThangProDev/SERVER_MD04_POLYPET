const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Bell = new Schema({
    bell_oder_id: {type: Schema.Types.ObjectId, ref: 'order'},
    bellContent: {type: String},
},
{
    timestamps: true
})

module.exports = mongoose.model('bell', Bell)