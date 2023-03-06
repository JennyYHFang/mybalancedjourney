const express = require('express');
const router = express.Router();
const mealsCtrl = require('../controllers/meals');

// This router is mounted to a "starts with" path of '/'

// GET /meals/new
router.get('/new', mealsCtrl.new);
// POST /meals
router.post('/', mealsCtrl.create);
// Delete meal
router.delete('/:id', mealsCtrl.delete);
// Update meal
router.put('/:id', mealsCtrl.update);

module.exports = router;