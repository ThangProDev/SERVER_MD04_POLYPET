const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Address = new Schema({
    ad_userId: {type: Schema.Types.ObjectId, ref: 'user'},
    adInfo: {type: String},
    adCommune: {type: String},
    adDistrict: {type: String},
    adProvince: {type: String},
},
{
    timestamps: true
})

module.exports = mongoose.model('address', Address)