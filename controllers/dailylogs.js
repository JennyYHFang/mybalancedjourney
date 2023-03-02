const Dailylog = require('../models/dailylog');
const Meal = require('../models/meal');

module.exports = {
  index,
  home,
  show,
  new: newDailylog,
  create,
  delete: deleteDailylog
};

function index(req, res) {
  Dailylog.find({}, function(err, dailylogs) {
    res.render('dailylogs/index', { title: 'All Daily Logs', dailylogs });
  });
}

function home(req, res) {
    console.log('home')
    res.render('dailylogs/home', { title: 'All Daily Logs' });
}


function show(req, res) {
  Dailylog.findById(req.params.id)
    .populate('food')
    .exec(function(err, dailylog) {
      Meal.find(
        {_id: {$nin: dailylog.food}},
        function(err, meals) {
          console.log(dailylogs);
          res.render('dailylogs/show', {
            title: 'Daily Log',
            dailylog,
            meals
          });
        }
      );
    });
}

function newDailylog(req, res) {
  res.render('dailylogs/new', { title: 'Add Daily Log' });
}

function create(req, res) {
  // Convert nowShowing's checkbox of nothing or "on" to boolean
  //req.body.nowMeal = !!req.body.nowMeal;
  // Delete empty properties on req.body for defaults to happen 
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  const dailylog = new Dailylog(req.body);
  dailylog.save(function(err) {
    if (err) return res.redirect('/dailylogs/new');
    console.log(dailylog);
    res.redirect('/dailylogs');
  });
}

function deleteDailylog(req, res) {
    Dailylog.findByIdAndRemove({ _id: req.params.id }, req.body).then(function(){
      res.redirect('/dailylogs')
    });
  }
