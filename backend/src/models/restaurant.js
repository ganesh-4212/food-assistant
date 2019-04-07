const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuItem = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: '',
        required: true
    },
    price: {
        type: Number,
        default: 0,
        required: true
    }
});

module.exports = mongoose.model('Restaurant', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    menuItems: [MenuItem]
});