const RecipesService = require('../services/recipes.service');

class RecipesController {
	constructor() {}

	recipes = async (request, response) => {
		const { i } = request.query;
		try {
			const { data } = await RecipesService.getRecipes(i);
			response.status(200).json(data);
		} catch (err) {
			const { status, data } = err.response;
			response.status(status).json(data);
		}
	};
}

module.exports = new ExampleController();
