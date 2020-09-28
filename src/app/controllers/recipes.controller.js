const RecipesService = require('../services/recipes.service');
const {
	checkAmountIngredientsAndReturn,
	formatResponse,
	getGiphyToRecipes,
} = require('../utils/recipes.utils');

class RecipesController {
	constructor() {}

	recipes = async (request, response) => {
		const { i } = request.query;
		try {
			const keywords = checkAmountIngredientsAndReturn(i);
			const { data } = await RecipesService.getRecipes(i);
			const result = await formatResponse(data.results, keywords);
			response.status(200).json(result);
		} catch (err) {
			console.log(err);
			const { status, data } = err.response;
			response.status(status).json(data);
		}
	};
}

module.exports = new RecipesController();
