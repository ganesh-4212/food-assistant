const User = require('../models/user');

const getById = function (id) {
    return User.findById(id).exec();
};

const createUser = function (userDoc) {
    return User.create(userDoc);
};


module.exports = {
    getById,
    createUser
};
