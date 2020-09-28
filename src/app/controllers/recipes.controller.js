const RecipesService = require('../services/recipes.service');
const {
	checkAmountIngredientsAndReturn,
	formatRecipes,
} = require('../utils/recipes.utils');

class RecipesController {
	constructor() {}

	recipes = async (request, response) => {
		const { i } = request.query;
		try {
			const keywords = checkAmountIngredientsAndReturn(i);
			const { data } = await RecipesService.getRecipes(i);
			formatRecipes(data.results, keywords);
			response.status(200).json(data);
		} catch (err) {
			const { status, data } = err.response;
			response.status(status).json(data);
		}
	};
}

module.exports = new RecipesController();
