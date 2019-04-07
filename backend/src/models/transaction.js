const mongoose = require('mongoose');
const Transaction = new mongoose.Schema({
    orderId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    usedWallet: {
        type: Boolean,
        default: false
    },
    transactionDate: {
        type: Date,
        default: Date.now
    },
    walletAmount: {
        type: Number,
        default: 0
    },
    orderAmount: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: ['PENDING,FAILED,COMPLETED'],
        require: true
    }
});
module.exports = mongoose.model('Transaction', Transaction);