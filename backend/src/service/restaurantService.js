const Restaurant = require('../models/restaurant');

const getRestaurant = function (id) {
    return Restaurant.findById(id).exec();
};

const createRestaurant = function (restaurant) {
    return Restaurant.create(restaurant);
};

const addMenutItem = function (id, menuItem) {
    return Restaurant.findByIdAndUpdate(id, {
        $push: {
            menuItems: menuItem
        }
    }, {
        new: true
    }).exec();
};

const removeMenutItem = function (id, menuItemId) {
    return Restaurant.findByIdAndUpdate(id, {
        $pull: {
            menuItems: {
                _id: menuItemId
            }
        }
    }, {
        new: true
    }).exec();
};

const getAllRestaurants = function(){
    return Restaurant.find().exec();
};

module.exports = {
    getRestaurant,
    createRestaurant,
    addMenutItem,
    removeMenutItem,
    getAllRestaurants
};