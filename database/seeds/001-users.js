const faker = require('faker');

const createFakeStaff = () => ({
	firstname: faker.name.firstName(),
	lastname: faker.name.lastName(),
	email: faker.internet.email(),
	password: faker.internet.password(),
	role: 'staff'
});
const createFakeAdmin = () => ({
	firstname: faker.name.firstName(),
	lastname: faker.name.lastName(),
	email: faker.internet.email(),
	password: faker.internet.password(),
	role: 'admin'
});

exports.seed = async function(knex, Promise) {
	const fakeUsers = [
		
	];
	const desiredStaff = 10;
	const desiredAdmins = 5;
	

	for (let i = 0; i < desiredAdmins; i++) {
		fakeUsers.push(createFakeAdmin());
	}
	for (let i = 0; i < desiredStaff; i++) {
		fakeUsers.push(createFakeStaff());
	}
	await knex('users').insert(fakeUsers);
};
