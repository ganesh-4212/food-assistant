const UserService = require('./service/userService');
const RestaurantService = require('./service/restaurantService');
module.exports = function (app) {
    app.post('/api/users', async function (req, res) {
        try {
            const user = await UserService.createUser(req.body);
            res.status(201).send(user);
        } catch (ex) {
            res.send(ex);
        }
    });

    app.get('/api/users/:userId', async function (req, res) {
        const user = await UserService.getById(req.params.userId);
        res.send(user);
    });

    app.get('/api/restaurants/:id', async function (req, res) {
        const restaurant = await RestaurantService.getRestaurant(req.params.id);
        res.send(restaurant);
    });

    app.get('/api/restaurants/', async function (req, res) {
        const restaurants = await RestaurantService.getAllRestaurants();
        res.send(restaurants);
    });

    app.post('/api/restaurants/', async function (req, res) {
        const restaurant = await RestaurantService.createRestaurant(req.body);
        res.send(restaurant);
    });

    app.post('/api/restaurants/:id/menu-items', async function (req, res) {
        const restaurant = await RestaurantService.addMenutItem(req.params.id, req.body);
        res.send(restaurant);
    });

    app.delete('/api/restaurants/:id/menu-items/:menuItemId', async function (req, res) {
        const restaurant = await RestaurantService.removeMenutItem(req.params.id, req.params.menuItemId);
        res.send(restaurant);
    });

};