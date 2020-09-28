const axios = require('axios');

class ApiService {
	constructor() {
		this.apiRecipe = axios.create({
			baseURL: process.env.API_RECIPE,
		});
		this.apiGiphy = axios.create({
			baseURL: process.env.API_GIPHY,
		});
	}
}

module.exports = new ApiService();
