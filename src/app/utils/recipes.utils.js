const { ParametersException } = require('../exceptions/recipes.exceptions');

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

const formatRecipes = (recipes, keywords) => {};

module.exports = {
	checkAmountIngredientsAndReturn,
	formatRecipes,
};
