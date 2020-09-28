const ApiService = require('./api.service');

class RecipesService {
	constructor() {}

	async getRecipes(parameters) {
		const { apiRecipe } = ApiService;
		const response = await apiRecipe.get(`/`);
		return response;
	}
}

module.exports = new RecipesService();
