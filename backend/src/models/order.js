const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OrderItem = new Schema({
    itemId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const Order = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    restaurantId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    amount: {
        type: Number,
        required: true,        
    },
    items: [OrderItem],
});

module.exports = mongoose.model('Order',Order);