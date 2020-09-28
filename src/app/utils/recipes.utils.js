const { ParametersException } = require('../exceptions/recipes.exceptions');
const RecipesService = require('../services/recipes.service');

const checkAmountIngredientsAndReturn = (parameters) => {
	const ingredients = parameters.split(',');
	if (ingredients.length > 3)
		throw new ParametersException('Excesso de Ingredientes na busca');
	else if (!ingredients.length) {
		if (parameters) return [parameters];
		else throw new ParametersException('Sem ingredientes na busca');
	}
	return ingredients.sort();
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
	if (!ingredientsArray.length) return [ingredients];
	return ingredientsArray.sort();
};

module.exports = {
	checkAmountIngredientsAndReturn,
	formatResponse,
};
