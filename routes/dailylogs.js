var express = require('express');
var router = express.Router();
var dailylogsCtrl = require('../controllers/dailylogs');

// All routes start with '/dailylogs'

// GET /dailylogs (display all dailylogs)
router.get('/', dailylogsCtrl.index);
router.get('/home', dailylogsCtrl.home);
// GET /dailylogs/new (display a form for entering a new daily log)
router.get('/new', dailylogsCtrl.new);
// GET /dailylogs/:id (display a "detail/show" page for a single daily log)
router.get('/:id', dailylogsCtrl.show);

router.get('/:id/edit', dailylogsCtrl.edit);

// POST /dailylogs (handle the new form being submitted)
router.post('/', dailylogsCtrl.create); 

router.post('/:id/meals', dailylogsCtrl.addToFood)
// Update
router.put('/:id/', dailylogsCtrl.update);
// Delete
router.delete('/:id', dailylogsCtrl.delete);


module.exports = router;
