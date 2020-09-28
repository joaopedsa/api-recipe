const ApiService = require('./api.service');

class RecipesService {
	constructor() {}

	async getRecipes(parameters) {
		const { apiRecipe } = ApiService;
		const response = await apiRecipe.get(`/?i=${parameters}`);
		return response;
	}

	async getGiphy(title) {
		const { apiGiphy } = ApiService;
		const { data } = await apiGiphy.get(
			`/search?api_key=${process.env.API_GIPHY_TOKEN}&q=${title}&limit=1&offset=0&rating=g&lang=en`
		);
		return data.data[0].images.original.url;
	}
}

module.exports = new RecipesService();
