const express = require('express');
const router = express.Router();
const mealsCtrl = require('../controllers/meals');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// This router is mounted to a "starts with" path of '/'

// GET /meals/new
router.get('/new', ensureLoggedIn, mealsCtrl.new);
// POST /meals
router.post('/', ensureLoggedIn, mealsCtrl.create);
// Delete meal
router.delete('/:id', ensureLoggedIn, mealsCtrl.delete);
// Update meal
router.put('/:id', ensureLoggedIn, mealsCtrl.update);

module.exports = router;