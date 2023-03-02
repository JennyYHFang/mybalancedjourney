const Dailylog = require('../models/dailylog');

module.exports = {
  create
};

function create(req, res) {
  Dailylog.findById(req.params.id, function(err, dailylog) {
    // We push an object with the data for the
    // review subdoc into Mongoose arrays
    dailylog.meals.push(req.body);
    dailylog.save(function(err) {
      // Step 5: Respond with a redirect because we've mutated data
      res.redirect(`/dailylogs/${dailylog._id}`);
    });
  });
}