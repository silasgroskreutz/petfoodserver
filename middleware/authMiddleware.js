const jwt = require('jsonwebtoken');
const responseStatus = require('../config/responseStatuses');

require('dotenv').config();

module.exports = {
	protects: (req, res, next) => {
		const token = req.headers.authorization;
		if (token) {
			jwt.verify(
				token,
				process.env.SECUREKEY_AMBER_KEY,
				(err, decodedToken) => {
					if (err) {
						//token invalid
						next(err);
					} else {
						//token valid
						req.decodedToken = decodedToken;
						next();
					}
				}
			);
		} else {
			next(responseStatus.badCredentials);
		}
	},

	emptyCheck: (req, res, next) => {
		const { body } = req;
		for (key in body) {
			if (body[key] === '') {
				next(responseStatus.badRequest);
			}
		}
		next();
	},

	imageCheck: (req, res, next) => {
		let {imageURL} = req.body;
		if (imageURL === '') {
			imageURL = 'https://i.imgur.com/27EObp5.jpg';
		}
		next()
	},

	whitespaceCheck: (req, res, next) => {
		const { body } = req;
		for (key in body) {
			if (body[key].match(/\s/g)) {
				res
					.status(responseStatus.badRequest)
					.json({ message: 'Input fields cannot contain whitespace.' })
					next();
			}
		}
		next();
	},
	checkRole: () => {
		return (req, res, next) => {
			if (
				req.decodedToken.role.includes('staff') ||
				req.decodedToken.role.includes('admin')
			) {
				next();
			} else {
				next(responseStatus.forbiddenAccess);
			}
		};
	},

	generateToken: (user) => {
		const payload = {
			email: user.email,
			role: user.role
		};
		const secret = process.env.SECUREKEY_AMBER_KEY;
		const options = {
			expiresIn: '1h',
			jwtid: '12345'
		};
		return jwt.sign(payload, secret, options);
	}
};
