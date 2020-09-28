const {
	orderAlfabetic,
	checkAmountIngredientsAndReturn,
} = require('../../src/app/utils/recipes.utils');

describe('Test Unit Recipe', () => {
	describe('Recipe Order items', () => {
		test('Order list of Items', () => {
			const ingredients = ['Tomato', 'Onion', 'Cheese', 'Egg'];
			const ingredientsSort = ingredients.sort(orderAlfabetic);
			expect(ingredientsSort).toEqual(['Cheese', 'Egg', 'Onion', 'Tomato']);
		});

		test('Order list of Unique Item', () => {
			const ingredients = ['Tomato'];
			const ingredientsSort = ingredients.sort(orderAlfabetic);
			expect(ingredientsSort).toEqual(['Tomato']);
		});

		test('Ordering Items That Are Already Ordered', () => {
			const ingredients = ['Onion', 'Tomato'];
			const ingredientsSort = ingredients.sort(orderAlfabetic);
			expect(ingredientsSort).toEqual(['Onion', 'Tomato']);
		});
	});
	describe('Check Amount of Ingredients', () => {
		test('More than 3 Ingredients', () => {
			const ingredients = 'Tomato,Onion,Cheese,Egg';
			let message = '';
			try {
				checkAmountIngredientsAndReturn(ingredients);
			} catch (err) {
				const { data } = err.response;
				message = data.message;
			}
			expect(message).toEqual('Excesso de Ingredientes na busca');
		});

		test('1 Ingredient', () => {
			const ingredients = 'Tomato';
			const ingredientsArray = checkAmountIngredientsAndReturn(ingredients);
			expect(ingredientsArray).toEqual(['Tomato']);
		});

		test('Without Ingredient', () => {
			const ingredients = '';
			let message = '';
			try {
				checkAmountIngredientsAndReturn(ingredients);
			} catch (err) {
				const { data } = err.response;
				message = data.message;
			}
			expect(message).toEqual('Sem ingredientes na busca');
		});
	});

	describe('Format Response', () => {
		test('', () => {
			const ingredients = 'Tomato,Onion,Cheese,Egg';
			let message = '';
			try {
				checkAmountIngredientsAndReturn(ingredients);
			} catch (err) {
				const { data } = err.response;
				message = data.message;
			}
			expect(message).toEqual('Excesso de Ingredientes na busca');
		});
	});
});
