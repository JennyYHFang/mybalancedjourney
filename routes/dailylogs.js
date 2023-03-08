var express = require('express');
var router = express.Router();
var dailylogsCtrl = require('../controllers/dailylogs');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routes start with '/dailylogs'

// GET /dailylogs (display all dailylogs)
router.get('/', dailylogsCtrl.index);
router.get('/home', dailylogsCtrl.home);
// GET /dailylogs/new (display a form for entering a new daily log)
router.get('/new', ensureLoggedIn, dailylogsCtrl.new);
// GET /dailylogs/:id (display a "detail/show" page for a single daily log)
router.get('/:id', ensureLoggedIn, dailylogsCtrl.show);

router.get('/:id/edit', ensureLoggedIn, dailylogsCtrl.edit);

// POST /dailylogs (handle the new form being submitted)
router.post('/', ensureLoggedIn, dailylogsCtrl.create); 

router.post('/:id/meals', ensureLoggedIn, dailylogsCtrl.addToFood)
// Update
router.put('/:id/', ensureLoggedIn, dailylogsCtrl.update);
// Delete
router.delete('/:id', ensureLoggedIn, dailylogsCtrl.delete);


module.exports = router;
