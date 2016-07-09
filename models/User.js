var mongoose = require('mongoose');

var user = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  workouts: {
    type: Array,
    required: false
  }
});

module.exports = mongoose.model('User', user);