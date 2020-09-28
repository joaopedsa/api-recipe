const { Router } = require('express');
const RecipesController = require('../../app/controllers/recipes.controller');

const routes = Router();

routes.get('/', RecipesController.recipes);

module.exports = routes;
