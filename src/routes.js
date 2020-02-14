const express = require('express');
const ElectionController = require('./controllers/election_controller');
const FactorialController = require('./controllers/factorial_controller');

const routes = express.Router();

routes.get('/election-calculation/percentage-of-valid-vows', ElectionController.percentage_of_valid_vows);
routes.get('/election-calculation/percentage-of-white-vows', ElectionController.percentage_of_white_vows);
routes.get('/election-calculation/percentage-of-null-vows', ElectionController.percentage_of_null_vows);

routes.post('/factorial', FactorialController.index);

module.exports = routes;