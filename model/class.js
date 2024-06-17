const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Class = new Schema({
    classContent: {type: String},
},
{
    timestamps: true
})

module.exports = mongoose.model('class', Class)