const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema({
    name: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: '',
        unique: true
    },
    walletBalance: {
        type: Number,
        default: 0
    }
});
module.exports = mongoose.model('User', User);