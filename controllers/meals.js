const Meal = require('../models/meal');
const dailylog = require('../models/dailylog');

module.exports = {
  new: newMeal,
  create,
  delete: deleteMeal,
  update: updateMeal
};


function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  req.body.born += 'T00:00';
  Meal.create(req.body, function (err, meal) {
    
    res.redirect('/meals/new');
  });
}

function newMeal(req, res) {
  Meal.find({})
    //Sort meals by their name
    .sort('name')
    .exec(function (err, meals) {
      res.render('meals/new', {
        title: 'Add Meal',
        meals
      });
    });
}


function deleteMeal(req, res, next) {
  dailylog.findOne({
    'food._id': req.params.id
  }).then(function(dailylog) {
    if (!dailylog) return res.redirect('/dailylogs');
    dailylog.food.remove(req.params.id);
    dailylog.save().then(function() {
      res.redirect(`/dailylogs/${dailylog._id}`);
    }).catch(function(err) {
      return next(err);
    });
  });
}

function updateMeal(req, res) {
  Meal.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function(){
    res.redirect('/meals')
  });
}

