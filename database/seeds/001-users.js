exports.seed = async function(knex, Promise) {
	const Users = [
		
	];

	await knex('users').insert(Users);
};
