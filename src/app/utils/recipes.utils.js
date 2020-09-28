const { ParametersException } = require('../exceptions/recipes.exceptions');
const RecipesService = require('../services/recipes.service');

const checkAmountIngredientsAndReturn = (parameters) => {
	const ingredients = parameters.split(',');

	if (ingredients.length > 3)
		throw new ParametersException('Excesso de Ingredientes na busca');
	if (!parameters) throw new ParametersException('Sem ingredientes na busca');

	return ingredients.sort(orderAlfabetic);
};

const formatResponse = async (recipes, keywords) => {
	const newRecipes = recipes.map(async (recipe) => {
		return {
			title: recipe.title,
			ingredients: getIngredientsInArray(recipe.ingredients),
			link: recipe.href,
			gif: await RecipesService.getGiphy(recipe.title),
		};
	});

	const response = {
		keywords,
		recipes: await Promise.all(newRecipes),
	};
	return response;
};

const getIngredientsInArray = (ingredients) => {
	const ingredientsArray = ingredients.split(',');
	return ingredientsArray.sort(orderAlfabetic);
};

const orderAlfabetic = (a, b) => {
	return a.substring(0, 1) - b.substring(0, 1);
};

module.exports = {
	checkAmountIngredientsAndReturn,
	formatResponse,
};
