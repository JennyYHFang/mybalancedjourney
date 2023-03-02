const express = require('express');
const router = express.Router();
const mealsCtrl = require('../controllers/meals');

// This router is mounted to a "starts with" path of '/'

// GET /meals/new
router.get('/new', mealsCtrl.new);
// POST /meals
router.post('/', mealsCtrl.create);
// POST /dailylogs/:id/meals (assoc dailylog & meal)
router.post('/dailylogs/:id/meals', mealsCtrl.addToFood);

router.delete('/:id', mealsCtrl.delete);

// router.put('/:id', mealsCtrl.update);

module.exports = router;