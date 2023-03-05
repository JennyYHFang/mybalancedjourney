const Meal = require('../models/meal');
const dailylog = require('../models/dailylog');

module.exports = {
  new: newMeal,
  create,
  addToFood,
  delete: deleteMeal,
  update: updateMeal
};

function addToFood(req, res) {
  console.log("test")
  dailylog.findById(req.params.id, function(err, dailylog) {
    console.log(dailylog, req.body.mealId)
    dailylog.food.push(req.body.mealId);
    dailylog.save(function(err) {
      res.redirect(`/dailylogs/${dailylog._id}`);
    });
  });
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  // Need to "fix" date formatting to prevent day off by 1
  // This is due to the <input type="date"> returning the date
  // string in this format:  "YYYY-MM-DD"
  // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
  // Fix by either reformatting to "MM-DD-YYYY" or by 
  // appending a "time" fragment like this... 
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

function deleteMeal(req, res) {
  Meal.findByIdAndRemove({ _id: req.params.id }, req.body).then(function(){
    res.redirect('/meals/new')
  });
}

function updateMeal(req, res) {
  Meal.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function(){
    res.redirect('/meals')
  });
}