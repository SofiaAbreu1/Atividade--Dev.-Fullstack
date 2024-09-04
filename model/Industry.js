const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Industry = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    telefone: {
        type: String
    }
}, {
    collection: 'industry'
});


module.exports = mongoose.model('Industry', Industry);