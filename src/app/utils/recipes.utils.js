const { ParametersException } = require('../exceptions/recipes.exceptions');
const RecipesService = require('../services/recipes.service');

const checkAmountIngredientsAndReturn = (parameters) => {
	const ingredients = parameters.split(',');

	if (ingredients.length > 3)
		throw new ParametersException('Excesso de Ingredientes na busca');
	if (!parameters) throw new ParametersException('Sem ingredientes na busca');

	return setArrayInOrderAlfabetic(ingredients);
};

const formatResponse = async (recipes, keywords) => {
	const newRecipes = recipes.map(async (recipe) => {
		return {
			title: recipe.title,
			ingredients: setIngredientsInArray(recipe.ingredients),
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

const setIngredientsInArray = (ingredients) => {
	const ingredientsArray = ingredients.split(',');
	return setArrayInOrderAlfabetic(ingredientsArray);
};

const setArrayInOrderAlfabetic = (array) => {
	return array.sort((a, b) => {
		const aTrim = a.trim();
		const bTrim = b.trim();
		if (aTrim.substring(0, 1) > bTrim.substring(0, 1)) return 1;
		if (aTrim.substring(0, 1) < bTrim.substring(0, 1)) return -1;
		return 0;
	});
};

module.exports = {
	checkAmountIngredientsAndReturn,
	formatResponse,
	setIngredientsInArray,
};
