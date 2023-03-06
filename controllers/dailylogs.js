// const dailylog = require('../models/dailylog');
const Dailylog = require('../models/dailylog');
const Meal = require('../models/meal');

module.exports = {
  index,
  home,
  show,
  new: newDailylog,
  create,
  delete: deleteDailylog,
  edit: editDetail,
  update: updateDetail,
  addToFood
};

function index(req, res) {
  Dailylog.find({}, function(err, dailylogs) {
    res.render('dailylogs/index', { title: 'All Daily Logs', dailylogs });
    
  }).sort({ date:-1 });
}

function home(req, res) {
    console.log('home')
    res.render('dailylogs/home', { title: 'mybalancedjourney' });
}



function show(req, res) {
  Dailylog.findById(req.params.id)
      .then(dailylog => {
          console.log(dailylog);
          res.render('dailylogs/show', {
            title: 'Daily Log',
            dailylog
          })
        }
      )
      }

function newDailylog(req, res) {
        res.render('dailylogs/new', { title: 'Add Daily Log'});
}

  function editDetail(req, res) {
    Dailylog.findById(req.params.id)
        .then(dailylog => {
            console.log(dailylog);
            res.render('dailylogs/edit', {
              title: 'Update Detail',
              dailylog
            })
          }
        )
        }
        
function create(req, res) {

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

  function updateDetail(req, res) {
    Dailylog.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function(){
      res.redirect('/dailylogs')
    });
  }

  function addToFood(req, res) {
    console.log("test")
    Dailylog.findById(req.params.id, function(err, dailylog) {
      console.log(dailylog, req.body)
      dailylog.food.push(req.body);
      dailylog.save(function(err) {
        res.redirect(`/dailylogs/${dailylog._id}`);
      });
    });
  }

