exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('items')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('items').insert([
				{
					name: 'apples',
					amount: 100,
					unit: 'oz',
					imageURL: 'https://i.imgur.com/pMfBRRt.jpg',
					categoryID: 2
				},
				{
					name: 'bananas',
					amount: 200,
					unit: 'oz',
					imageURL: 'https://i.imgur.com/9ny4c0E.jpg',
					categoryID: 2
				},
				{
					name: 'potatoes',
					amount: 10,
					unit: 'lb(s)',
					imageURL: 'https://i.imgur.com/dRF2mfc.jpg',
					categoryID: 1
				},
				{
					name: 'carrots',
					amount: 13,
					unit: 'lb(s)',
					imageURL: 'https://i.imgur.com/RTZ0qFP.jpg',
					categoryID: 1
				},
				{
					name: 'eggs',
					amount: 31,
					unit: 'dozen',
					imageURL: 'https://i.imgur.com/bQYFZjw.jpg',
					categoryID: 5
				},
				{
					name: 'broccoli',
					amount: 30,
					unit: 'oz',
					imageURL: 'https://i.imgur.com/47fHnED.jpg',
					categoryID: 1
				},
				{
					name: 'butter',
					amount: '1',
					unit: 'lb',
					imageURL: 'https://i.imgur.com/8YbmBtp.jpg',
					categoryID: 4
				},
				{
					name: 'milk',
					amount: '1',
					unit: 'gal',
					imageURL: 'https://i.imgur.com/X744RyB.png',
					categoryID: 4
				},
				{
					name: 'yogurt',
					amount: '64',
					unit: 'oz',
					imageURL:
						'https://vignette.wikia.nocookie.net/yogurt-connoisseur/images/a/a2/Yogurt-fruit.jpg/revision/latest?cb=20131018061432',
					categoryID: 4
				},
				{
					name: 'cheese',
					amount: '5',
					unit: 'lbs',
					imageURL:
						'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Swiss_cheese_cubes.jpg/800px-Swiss_cheese_cubes.jpg',
					categoryID: 4
				},
				{
					name: 'garlic powder',
					amount: '3',
					unit: 'oz',
					imageURL:
						'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Garlic_Powder%2C_Penzeys_Spices%2C_Arlington_Heights_MA.jpg/800px-Garlic_Powder%2C_Penzeys_Spices%2C_Arlington_Heights_MA.jpg',
					categoryID: 9
				},
				{
					name: 'beans',
					amount: '12',
					unit: 'cans',
					imageURL:
						'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Painted_Pony_Bean.JPG/800px-Painted_Pony_Bean.JPG',
					categoryID: 2
				},
				{
					name: 'bread',
					amount: '3',
					unit: 'loaves',
					imageURL:
						'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Anadama_bread_%281%29.jpg/1280px-Anadama_bread_%281%29.jpg',
					categoryID: 8
				},
				{
					name: 'rice',
					amount: '20',
					unit: 'lbs',
					imageURL:
						'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/White%2C_Brown%2C_Red_%26_Wild_rice.jpg/1200px-White%2C_Brown%2C_Red_%26_Wild_rice.jpg',
					categoryID: 8
				},
				{
					name: 'spaghetti',
					amount: '5',
					unit: 'lbs',
					imageURL:
						'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Aglio_e_olio.jpg/1024px-Aglio_e_olio.jpg',
					categoryID: 8
				},
				{
					name: 'bacon',
					amount: '3',
					unit: 'lbs',
					imageURL: 'https://i.imgur.com/qZ2W3WL.jpg',
					categoryID: 5
				},
				{
					name: 'chicken',
					amount: '10',
					unit: 'lbs',
					imageURL:
						'https://vignette.wikia.nocookie.net/recipes/images/4/4e/Grilled_chicken_Breasts.jpg/revision/latest?cb=20140516073436',
					categoryID: 5
				},
				{
					name: 'ground beef',
					amount: '15',
					unit: 'lbs',
					imageURL: 'https://i.imgur.com/tMNPVJh.jpg',
					categoryID: 5
				},
				{
					name: 'blueberries',
					amount: '12',
					unit: 'oz',
					imageURL: 'https://i.imgur.com/uGWEPNR.jpg',
					categoryID: 2
				},
				{
					name: 'grapes',
					amount: '3',
					unit: 'lbs',
					imageURL:
						'https://vignette.wikia.nocookie.net/recipes/images/4/48/Uvas.jpg/revision/latest?cb=20080516004641',
					categoryID: 2
				},
				{
					name: 'strawberries',
					amount: '1',
					unit: 'lb',
					imageURL: 'https://i.imgur.com/GxJiS2Z.jpg',
					categoryID: 2
				},
				{
					name: 'salt',
					amount: '10',
					unit: 'oz',
					imageURL:
						'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Salt%2C_sugar_and_pepper_shakers.jpg/800px-Salt%2C_sugar_and_pepper_shakers.jpg',
					categoryID: 9
				},
				{
					name: 'pepper',
					amount: '2',
					unit: 'oz',
					imageURL:
						'https://vignette.wikia.nocookie.net/chilipeps/images/e/e7/Spilled_Pepper.jpg/revision/latest/scale-to-width-down/640?cb=20150128174637',
					categoryID: 9
				},
				{
					name: 'plates',
					amount: '50',
					unit:
						'',
					imageURL: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Dinner_plates.jpg',
					categoryID: 7
				},
				{
					name: 'forks',
					amount: '50',
					unit: '',
					imageURL:
						'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Forks.png/800px-Forks.png',
					categoryID: 3
				},
				{
					name: 'knives',
					amount: '50',
					unit: '',
					imageURL:
						'https://www.goodfreephotos.com/cache/other-photos/knife-image.jpg',
					categoryID: 3
				},
				{
					name: 'bowls',
					amount: '50',
					unit: '',
					imageURL:
						'https://upload.wikimedia.org/wikipedia/commons/c/c7/Simple-ceramic-bowl_%28cropped%29.jpg',
					categoryID: 7
				},
				{
					name: 'spoons',
					amount: '50',
					unit: '',
					imageURL:
						'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Dessert_Spoon.jpg/1280px-Dessert_Spoon.jpg',
					categoryID: 3
				},
				{
					name: 'cups',
					amount: '50',
					unit: '',
					imageURL:
						'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Pressed_glass.jpg/1024px-Pressed_glass.jpg',
					categoryID: 7
				},
				{
					name: 'orange juice',
					amount: '64',
					unit: 'oz',
					imageURL:
						'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Oranges_and_orange_juice.jpg/800px-Oranges_and_orange_juice.jpg',
					categoryID: 6
				},
				{
					name: 'apple juice',
					amount: '64',
					unit: 'oz',
					imageURL:
						'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Apple_juice_with_3apples.jpg/800px-Apple_juice_with_3apples.jpg',
					categoryID: 6
				},
				{
					name: 'dragonfruit',
					amount: '2',
					unit: 'lbs',
					imageURL: 'https://i.imgur.com/EYHSaBf.jpg',
					categoryID: 2
				}
			]);
		});
};
