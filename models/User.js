var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');

var user = mongoose.Schema({
  username: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: false
  },
  workouts: {
    type: Array,
    required: false
  },
  facebookId: String
});

user.plugin(findOrCreate);

module.exports = mongoose.model('User', user);