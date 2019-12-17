const express = require('express');
const router = express.Router();
const responseStatus = require('../config/responseStatuses');
const { protects, imageCheck } = require('../middleware/authMiddleware');
const db = require('../database/helpers/itemsHelper');

//create a new item for a category
router.post('/', imageCheck, (req, res, next) => {
	const { body } = req;
	let { name, amount } = req.body;
	 if (typeof amount === 'string' || amount < 0){
		return res.status(responseStatus.badRequest).json({ statusCode: responseStatus.badRequest, message: 'Amount cannot be blank and cannot be negative.'})
	} else if (name === '') {
		next(responseStatus.badRequest)
	} else {
		db.addItem(body)
		.then((id) => {
			return res.status(responseStatus.created).json({ itemID: id });
		})
		.catch((err) => {
			next(err);
		});	
	}	
});

//get all items
router.get('/', protects, (req, res, next) => {
	db.getItems()
		.then((items) => {
			items.forEach((item) => {
				if (item.imageURL === '') {
					item.imageURL = 'https://i.imgur.com/27EObp5.jpg';
				} 
			});
			return res
				.status(responseStatus.successful)
				.json({ items, decodedToken: req.decodedToken });
		})
		.catch((err) => {
			// console.log(err);
			next(err);
		});
});

//get a specific item
router.get('/:id', protects, (req, res, next) => {
	const { id } = req.params;
	db.getItems(id)
		.then((item) => {
			if (item.imageURL === '') {
				item.imageURL = 'https://i.imgur.com/27EObp5.jpg';
			}
			res
				.status(responseStatus.successful)
				.json({ item, decodedToken: req.decodedToken });
		})
		.catch((err) => {
			if (TypeError) {
				next(responseStatus.notFound);
			} else {
				next(err);
			}
		});
});

//update an items string name or amount
router.put('/:id', imageCheck, (req, res, next) => {
	
	const { id } = req.params;
	const { body } = req;
	let {amount, name} = req.body
	if (typeof amount === 'string' || amount < 0){
		return res.status(400).json({statusCode: responseStatus.badRequest, message: 'Amount cannot be blank and cannot be negative.'})
	} else if (name === '') {
		next(responseStatus.badRequest)
	} else {
	db.updateItem(id, body)
		.then((count) => {
			if (count === 1) {
				res.status(responseStatus.successful).json({ updatedRecords: count });
			} else {
				next(responseStatus.notFound);
			}
		})
		.catch((err) => {
			next(err);
		});
	} 	
});

//delete an item
router.delete('/:id', (req, res, next) => {
	const { id } = req.params;
	db.deleteItem(id)
		.then((count) => {
			if (count === 1) {
				res.status(responseStatus.successful).json({ deletedRecords: count });
			} else {
				next(responseStatus.notFound);
			}
		})
		.catch((err) => {
			// console.log(err);
			next(err);
		});
});

module.exports = router;
