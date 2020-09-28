const { Router } = require('express');

const RecipeRouter = require('./recipes/recipes.routes');

const routes = Router();

routes.use('/recipes', RecipeRouter);

module.exports = routes;
